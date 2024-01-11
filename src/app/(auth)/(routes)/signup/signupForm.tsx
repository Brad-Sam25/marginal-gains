'use client';

import { signIn } from 'next-auth/react';
import { ChangeEvent, useState } from 'react';
import { toast } from 'react-toastify';

const SignupForm = () => {
	const [isLoading, setIsLoading] = useState(false);
	const [formValues, setFormValues] = useState({
		name: '',
		email: '',
		password: '',
	});

	const register = async (e: React.FormEvent) => {
		e.preventDefault();

		setIsLoading(true);
		setFormValues({
			name: '',
			email: '',
			password: '',
		});

		try {
			const response = await fetch('/api/register', {
				method: 'POST',
				body: JSON.stringify(formValues),
				headers: {
					'Content-Type': 'application/json',
				},
			});

			if (!response.ok) {
				await response.json();
				return;
			}

			await signIn('credentials', {
				email: formValues.email,
				password: formValues.password,
			});
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
			setFormValues({
				name: '',
				email: '',
				password: '',
			});

			setIsLoading(false);
		}
	};

	const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
		const { name, value } = event.target;
		setFormValues({ ...formValues, [name]: value });
	};

	return (
		<>
			{isLoading ? (
				toast.info('Registering your account...!', {
					position: 'top-center',
					autoClose: 5000,
					hideProgressBar: false,
					closeOnClick: true,
					pauseOnHover: true,
					draggable: true,
					progress: undefined,
					theme: 'light',
				})
			) : (
				<form
					className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm w-2/4"
					onSubmit={register}
				>
					<div className="flex justify-center items-center">
						<div className="text-black flex flex-col">
							<label>Name</label>
							<input
								type="name"
								autoFocus
								className="px-4 py-2 transition duration-300 border border-gray-300 rounded focus:border-transparent focus:outline-none focus:ring-4 focus:ring-blue-200 mb-2"
								onChange={handleChange}
								value={formValues.name}
								name="name"
							/>
							<label>Email</label>
							<input
								type="email"
								autoFocus
								className="px-4 py-2 transition duration-300 border border-gray-300 rounded focus:border-transparent focus:outline-none focus:ring-4 focus:ring-blue-200 mb-2"
								onChange={handleChange}
								value={formValues.email}
								name="email"
							/>
							<label>Password</label>
							<input
								type="password"
								autoFocus
								className="px-4 py-2 transition duration-300 border border-gray-300 rounded focus:border-transparent focus:outline-none focus:ring-4 focus:ring-blue-200 mb-6"
								onChange={handleChange}
								value={formValues.password}
								name="password"
							/>
							<button
								type="submit"
								className=" px-4 py-2 text-lg font-semibold text-white transition-colors duration-300 bg-blue-500 rounded-md shadow hover:bg-blue-600 focus:outline-none focus:ring-blue-200 focus:ring-4 mb-8"
							>
								Sign Up
							</button>
						</div>
					</div>
				</form>
			)}
		</>
	);
};

export default SignupForm;
