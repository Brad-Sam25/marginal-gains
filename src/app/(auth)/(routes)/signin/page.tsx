import { Icons } from '@/components/Icon';
import { signIn } from 'next-auth/react';
import React from 'react';
import SigninForm from './signinForm';

const Signin = () => {
	return (
		<div className="bg-white shadow-md rounded px-8 pt-6 pb-8 w-2/5 mx-auto mt-44 mb-44">
			<div className="flex justify-center items-center">
				<Icons.lock className="h-4 w-4 mr-2 text-black" />
			</div>
			<h1 className="text-black text-center flex justify-center items-center">
				Account Sign In
			</h1>
			<SigninForm />
		</div>
	);
};

export default Signin;
