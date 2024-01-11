'use client'

import Link from 'next/link';
import React from 'react';
import { useSession } from 'next-auth/react';
import { signOut } from 'next-auth/react';

const NavBar = () => {
	const {data: session} = useSession();

	return (
		<div className="fixed top-0 inset-x-0 h-fit bg-sky-900 border-b border-sky-900 z-[10] py-2">
			<div className="container max-w-7xl h-full mx-auto flex items-center justify-between gap-2 text-white">
				{/* logo */}
				<Link href="/">Marginal Gains</Link>
				<div className="container max-w-7xl h-full mx-auto flex items-center justify-end gap-9">
					{/* Dashboard Link */}
					<h1>Dashboard</h1>
					{/* My Habits Link */}
					<h1>My Habits</h1>
					{session ? (
						<>
							<p>{`Welcome ${session.user?.name}`}</p>
							<button
									type="button"
									className="px-2 py-1 inline-block bg-cyan-500 text-white hover:bg-cyan-400 transition-colors"
									onClick={() => signOut({ callbackUrl: '/' })}
								>
									Sign Out
								</button>
						</>
					) : (
						<>
							<Link href="/signup">Sign Up</Link>
							<Link href="/signin">Sign In</Link>
						</>
					)}
				</div>
			</div>
		</div>
	);
};

export default NavBar;
