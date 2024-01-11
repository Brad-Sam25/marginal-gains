import { NextAuthOptions } from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';
import { PrismaAdapter } from '@next-auth/prisma-adapter';
import { prisma } from './prisma';
import CredentialsProvider from 'next-auth/providers/credentials';
//@ts-ignore
import { compare } from 'bcrypt';

const token = crypto.randomUUID();

export const authOptions: NextAuthOptions = {
	adapter: PrismaAdapter(prisma),
	providers: [
		GoogleProvider({
			clientId: process.env.GOOGLE_CLIENT_ID as string,
			clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
		}),
		CredentialsProvider({
			name: 'Credentials',

			credentials: {
				email: {
					label: 'Email',
					type: 'email',
					placeholder: 'rickybobby@email.com',
				},
				password: { label: 'Password', type: 'password' },
			},
			async authorize(credentials) {
				if (!credentials?.email || !credentials.password) {
					return null;
				}

				const user = await prisma.user.findUnique({
					where: {
						email: credentials.email,
					},
				});

				if (!user || !(await compare(credentials?.password, user.password))) {
					return null;
				}

				return {
					id: user.id,
					email: user.email,
					name: user.name,
					sessionToken: token,
				};
			},
		}),
	],
	session: {
		strategy: 'jwt',
	},
	pages: {
		signIn: '/signin',
	},
	callbacks: {
		async signIn({ user }) {
			if (user) {
				const maxAge = 30 * 24 * 60 * 60;
				const sessionExpiry = new Date(Date.now() + maxAge * 1000);

				await prisma.session.create({
					data: {
						sessionToken: token,
						userId: user.id,
						expires: sessionExpiry,
					}
				});

				return true;
			}

			return false;
		},
		async session({ session, token }) {
			if (session.user?.name) session.user.name = token.name;
			return session;
		},
		async jwt({ token, user }) {
			// * User only available on first run.
			let newUser = { ...user } as any;
			if (newUser.name) token.name = `${newUser.name}`;
			return token;
		},
	},
};
