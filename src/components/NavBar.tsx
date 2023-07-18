import Link from 'next/link';
import React from 'react';

const NavBar = () => {
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
					<Link href="/sign-up">Sign Up</Link>
					<Link href="/sign-in">Sign In</Link>
				</div>
			</div>
		</div>
	);
};

export default NavBar;
