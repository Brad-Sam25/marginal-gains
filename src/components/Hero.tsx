import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Hero = () => {
	return (
		<section>
			<Image
				src="/habit-hero.jpg"
				alt="Image of a habit journal"
				style={{ objectFit: 'cover' }}
				fill={true}
				className="mt-14 brightness-50"
			/>
			<div className="flex-1 flex items-center relative top-52">
				<div className="mx-auto text-white">
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
		</section>
	);
};

export default Hero;
