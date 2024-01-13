import React from 'react';

const HabitModal = () => {
	return (
		<div>
			<h1 className=''>Create new Habits</h1>
            <label htmlFor="habit-title">Please create a name for your Habit</label>
            <input type="text" id="habit-title" name="habit-name" />
            <label htmlFor="start">Please enter your start date</label>
            <input type="text" name="start-date" id="start" />
            <label htmlFor="habit-freq"></label>
            <input type="text" name="habit-frequency" id="habit-freq" />
            <label htmlFor="cue">When/Then Intentions</label>
            <input type="text" name="cue-based-plan" id="cue" placeholder="When I [specific situation], then I will [specific action]" />
		</div>
	);
};

export default HabitModal;
