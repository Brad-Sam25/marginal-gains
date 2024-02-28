'use client';

import React from 'react';
import { createNewHabit } from '@/app/actions';
//@ts-ignore
import { useFormState, useFormStatus } from 'react-dom';

function SubmitButton() {
	const { pending } = useFormStatus();

	return (
		<button
			type="submit"
			disabled={pending}
			className="rounded-lg bg-black py-2 text-white disabled:cursor-not-allowed disabled:opacity-50"
		>
			{pending ? 'Submitting...' : 'Submit'}
		</button>
	);
}

const HabitModal = () => {
	const [state, formAction] = useFormState(createNewHabit, null);
	return (
		<div>
			<form action={formAction}>
				<h1 className="">Create new Habits</h1>
				<label htmlFor="habit-title">Please create a name for your Habit</label>
				<input type="text" id="habit-title" name="habit_title" />
				<label htmlFor="start">Please enter your start date</label>
				<input type="text" name="start_date" id="start" />
				<label htmlFor="habit-freq">Frequency</label>
				<input type="text" name="habit_frequency" id="habit-freq" />
				<label htmlFor="cue">When/Then Intentions</label>
				<input
					type="text"
					name="cue_based_plan"
					id="cue"
					placeholder="When I [specific situation], then I will [specific action]"
				/>
				<SubmitButton />
			</form>
			<div className="flex-1 rounded-lg bg-cyan-600 p-8 text-white">
				<pre>{JSON.stringify(state, null, 2)}</pre>
			</div>
		</div>
	);
};

export default HabitModal;
