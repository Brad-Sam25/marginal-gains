import { Icons } from '@/components/Icon';
import React from 'react';

const Signin = () => {
	return (
		<div className="bg-white shadow-md rounded px-8 pt-6 pb-8 w-2/5 mx-auto mt-44">
			<div className="flex justify-center items-center">
				<Icons.lock className="h-4 w-4 mr-2 text-black" />
			</div>
			<h1 className="text-black text-center flex justify-center items-center">
				Sign In
			</h1>
			<div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm w-2/4">
				<div className="text-sm max-w-xs mx-auto mb-10">
					<p className=" text-black text-center">
						By continuing, you are setting up a Marginal Gains account and agree
						to our User Agreement and Privacy Policy.
					</p>
				</div>
				<div className="mb-5">
					<button className="rounded bg-blue-400 p-4 w-full flex justify-center items-center">
						<Icons.google className="h-4 w-4 mr-2" />
						Sign In
					</button>
				</div>
			</div>
		</div>
	);
};

export default Signin;
