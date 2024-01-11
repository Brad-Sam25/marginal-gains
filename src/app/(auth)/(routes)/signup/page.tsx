import React from 'react';
import { Icons } from '@/components/Icon';
import SignupForm from './signupForm';

const Signup = () => {
	return (
		<div className="bg-white shadow-md rounded px-8 pt-6 pb-8 w-2/5 mx-auto mt-44">
			<div className="flex justify-center items-center">
				<Icons.lock className="h-4 w-4 mr-2 text-black"/>
			</div>
			<h1 className="text-black text-center flex justify-center items-center">
				Sign Up
			</h1>
			<div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm w-2/4">
				<div className="mb-5">
					<SignupForm />
				</div>
			</div>
		</div>
	);
};

export default Signup;
