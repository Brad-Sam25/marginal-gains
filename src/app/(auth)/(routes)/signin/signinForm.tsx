'use client';

import { Icons } from '@/components/Icon';
import { signIn } from 'next-auth/react';
import { ChangeEvent, useState } from 'react';
import { toast } from 'react-toastify';

const SigninForm = () => {
	const [isLoading, setIsLoading] = useState(false);
	const [formValues, setFormValues] = useState({
		email: '',
		password: '',
	});

	const loginInWithGoogle = async () => {
		setIsLoading(true);

		try {
			await signIn('google', { callbackUrl: 'http://localhost:3000' });
		} catch (error) {
			toast.error(
				'The credentials you have provided is incorrect! Please try again.',
				{
					position: 'top-center',
					autoClose: 5000,
					hideProgressBar: false,
					closeOnClick: true,
					pauseOnHover: true,
					draggable: true,
					progress: undefined,
					theme: 'dark',
				}
			);
		} finally {
			setIsLoading(false);
		}
	};

	const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
		const { name, value } = event.target;
		setFormValues({ ...formValues, [name]: value });
	};

	const onSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		setIsLoading(true);
		setFormValues({
			email: '',
			password: '',
		});

		try {
			await signIn('credentials', {
				email: formValues.email,
				password: formValues.password,
				callbackUrl: "/dashboard"
			});

			setIsLoading(false);
		} catch (error) {
			toast.error(
				'The credentials you have provided is incorrect! Please try again.',
				{
					position: 'top-center',
					autoClose: 5000,
					hideProgressBar: false,
					closeOnClick: true,
					pauseOnHover: true,
					draggable: true,
					progress: undefined,
					theme: 'dark',
				}
			);
		}
	};

	return (
		<>
			{isLoading ? (
				toast.info('Signing you in!', {
					position: "top-center",
					autoClose: 5000,
					hideProgressBar: false,
					closeOnClick: true,
					pauseOnHover: true,
					draggable: true,
					progress: undefined,
					theme: "light"})
			) : (
				<>
					<form
						action="#"
						className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm w-2/4"
					>
						<div className="flex justify-center items-center">
							<div className="text-black flex flex-col">
								<label htmlFor="email">Email</label>
								<input
									type="email"
									autoFocus
									className="px-4 py-2 transition duration-300 border border-gray-300 rounded focus:border-transparent focus:outline-none focus:ring-4 focus:ring-blue-200 mb-2"
									value={formValues.email}
									onChange={handleChange}
									name="email"
								/>
								<label htmlFor="password">Password</label>
								<input
									type="password"
									autoFocus
									className="px-4 py-2 transition duration-300 border border-gray-300 rounded focus:border-transparent focus:outline-none focus:ring-4 focus:ring-blue-200 mb-6"
									value={formValues.password}
									onChange={handleChange}
									name="password"
								/>
								<button
									type="button"
									className=" px-4 py-2 text-lg font-semibold text-white transition-colors duration-300 bg-blue-500 rounded-md shadow hover:bg-blue-600 focus:outline-none focus:ring-blue-200 focus:ring-4 mb-8"
									onClick={onSubmit}
								>
									Sign In
								</button>
							</div>
						</div>
					</form>
					<span className="flex items-center justify-center space-x-2 mb-8">
						<span className="h-px bg-gray-400 w-44"></span>
						<span className="font-normal text-gray-500">or login with</span>
						<span className="h-px bg-gray-400 w-44"></span>
					</span>
					<div className="mb-5 mt-10 sm:mx-auto sm:w-full sm:max-w-sm w-2/4 flex justify-center items-center">
						<button
							className="rounded bg-blue-400 p-4 w-64 flex justify-center items-center"
							onClick={loginInWithGoogle}
						>
							<Icons.google className="h-4 w-4 mr-2" />
							Sign In
						</button>
					</div>
				</>
			)}
		</>
	);
};

export default SigninForm;
