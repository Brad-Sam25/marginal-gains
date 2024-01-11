'use client';

import React, { useState } from 'react';
import { Icons } from './Icon';
import dayjs from 'dayjs';
import { generateDate } from '@/utils/dates';
import { months } from '@/utils/dates';

const Calendar = () => {
	const days = ['S', 'M', 'T', 'W', 'T', 'F', 'S'];
	const currentDate = dayjs();
	const [today, setToday] = useState(currentDate);
	const [selectDate, setSelectDate] = useState(currentDate);

	const createClassName = (cName: string[]) => {
		return cName.filter((item) => item).join(' ');
	};

	return (
		<div className="flex gap-10 sm:divide-x justify-center sm:w-1/2 mx-auto  h-screen items-center sm:flex-row flex-col">
			<div className="w-96 h-96 ">
				<div className="flex justify-between items-center">
					<h1 className="select-none font-semibold">
						{months[today.month()]}, {today.year()}
					</h1>
					<div className="flex gap-10 items-center">
						<Icons.arrowLeft
							className="w-5 h-5 cursor-pointer hover:scale-105 transition-all"
							onClick={() => {								
								setToday(today.month(today.month() - 1));
							}}
						/>
						<a
							className="cursor-pointer hover:scale-105 transition-all"
							onClick={() => {
								setToday(currentDate);
							}}
						>
							Today
						</a>
						<Icons.arrowRight
							className="w-5 h-5 cursor-pointer hover:scale-105 transition-all"
							onClick={() => {
								setToday(today.month(today.month() + 1));
							}}
						/>
					</div>
				</div>
				<div className="grid grid-cols-7 ">
					{days.map((day, index) => {
						return (
							<h1
								key={index}
								className="text-sm text-center h-14 w-14 grid place-content-center text-gray-500 select-none"
							>
								{day}
							</h1>
						);
					})}
				</div>

				<div className=" grid grid-cols-7 ">
					{generateDate(today.month(), today.year()).map(
						({ date, currentMonth, today }, index) => {
							return (
								<div
									key={index}
									className="p-2 text-center h-14 grid place-content-center text-sm border-t"
								>
									<h1
										className={createClassName([
											currentMonth ? '' : 'text-gray-400',
											today ? 'bg-red-600 text-white' : '',
											selectDate.toDate().toDateString() ===
											date.toDate().toDateString()
												? 'bg-black text-white'
												: '',
											'h-10 w-10 rounded-full grid place-content-center hover:bg-black hover:text-white transition-all cursor-pointer select-none',
										])}
										onClick={() => {
											setSelectDate(date);
										}}
									>
										{date.date()}
									</h1>
								</div>
							);
						}
					)}
				</div>
			</div>
		</div>
	);
};

export default Calendar;
