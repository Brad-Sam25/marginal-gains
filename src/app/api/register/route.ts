import { prisma } from "@/lib/prisma";
//@ts-ignore
import { hash } from "bcrypt";
import { NextResponse } from "next/server";

export async function POST( request: Request) {
    try {
        const { name, email, password } = (await request.json()) as {
            name: string,
            email: string,
            password: string
        };

        const hashed_password = await hash(password, 12);
    
        const user = await prisma.user.create({
            data: {
                name,
                email: email.toLowerCase(),
                password: hashed_password
            }
        });

        const account = await prisma.account.create({
            data: {
                userId: user.id,
                type: "credentials",
                provider: "credentials",
                providerAccountId: user.id
            }
        });

        if(user && account) {
            return NextResponse.json({
                user: {
                    name: user.name,
                    email: user.email
                }
            });
        };
    } catch (error: any) {
        return new NextResponse(JSON.stringify({
            status: "error",
            message: error.message
        })),
        { status: 500 }
    }
}