import React from 'react';

const Signin = () => {
	return (
		<div className="bg-white shadow-md rounded px-8 pt-6 pb-8 w-min mx-auto mt-44">
			<h1 className="text-black text-center">Sign in</h1>
			<div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm flex items-center justify-center">
				<form action="#" className="space-y-6">
					<div>
						<label
							htmlFor="email"
							className="block text-sm font-medium leading-6 text-gray-900"
						>
							Username
						</label>
						<input type="text" className="border border-sky-500 text-black" />
					</div>
					<div>
						<label
							htmlFor="email"
							className="block text-sm font-medium leading-6 text-gray-900"
						>
							Password
						</label>
						<input type="text" className="border border-sky-500 text-black" />
					</div>
					<div className="">
						<button className="rounded bg-blue-400 p-4 w-2/4">Sign In</button>
					</div>
				</form>
			</div>
		</div>
	);
};

export default Signin;
