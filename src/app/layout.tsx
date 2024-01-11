import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';
import './globals.css';
import { Inter } from 'next/font/google';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { NextAuthProvider } from '@/components/NextAuthProvider';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
	title: 'Create Next App',
	description: 'Generated by create next app',
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<body className={inter.className}>
				<div className="flex flex-col min-h-screen">
					<NextAuthProvider>
						<NavBar />
						<main className="flex-1">{children}</main>
						<Footer />
						<ToastContainer />
					</NextAuthProvider>
				</div>
			</body>
		</html>
	);
}
