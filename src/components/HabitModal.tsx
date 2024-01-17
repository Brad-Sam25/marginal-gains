"use client";

import React from 'react';
import { createNewHabit } from '@/app/actions';
//@ts-ignore
import { useFormState } from "react-dom";

const HabitModal = () => {
    const [state, formAction] = useFormState(createNewHabit, null)
	return (
		<form action={formAction}>
			<h1 className=''>Create new Habits</h1>
            <label htmlFor="habit-title">Please create a name for your Habit</label>
            <input type="text" id="habit-title" name="habitTitle" />
            <label htmlFor="start">Please enter your start date</label>
            <input type="text" name="startDate" id="start" />
            <label htmlFor="habit-freq"></label>
            <input type="text" name="habitFrequency" id="habit-freq" />
            <label htmlFor="cue">When/Then Intentions</label>
            <input type="text" name="cueBasedPlan" id="cue" placeholder="When I [specific situation], then I will [specific action]" />
		</form>
	);
};

export default HabitModal;
