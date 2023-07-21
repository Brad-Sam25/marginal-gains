import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Hero = () => {
	return (
		<div className="relative flex flex-1 items-center justify-center">
			<div className="min-h-screen">
				<Image
					src="/habit-hero.jpg"
					alt="Image of a habit journal"
					fill={true}
					style={{ objectFit: 'cover' }}
					className="brightness-50"
				/>
			</div>
			<div className="relative text-white">
				<div className="">
					<h1 className="text-8xl font-semibold">Marginal Gains</h1>
					<p className="font-light text-4xl mt-5">Get better by 1% Everyday!</p>
					<Link
						href="/sign-up"
						className="px-5 py-2 inline-block bg-cyan-500 text-white hover:bg-cyan-400 transition-colors mt-10"
					>
						Sign Up
					</Link>
				</div>
			</div>
		</div>
	);
};

export default Hero;
