'use server';
import { ZodError, z } from 'zod';
import { prisma } from '@/lib/prisma';
import { authOptions } from '@/lib/authOptions';
import { getServerSession } from 'next-auth';

export async function createNewHabit(state: any, formData: FormData) {
	const schema = z.object({
		habit_title: z.string(),
		start_date: z.date(),
		habit_frequency: z.number().int(),
		cue_based_plan: z.string(),
	});

	const handleZodError = (error: ZodError) => {
		console.error('Validation failed:', error.errors);
	};

	try {
		const validatedInput = schema.parse({
			habit_title: formData.get('habit_title') || state.habit_title,
			start_date: new Date(formData.get('start_date') || state.start_date),
			habit_frequency: parseInt(
				formData.get('habit_frequency') || state.habit_frequency
			),
			cue_based_plan: formData.get('cue_based_plan') || state.cue_based_plan,
		});

		const session = await getServerSession(authOptions);

		if (!session?.user?.id) {
			return new Response('Unauthorized', { status: 401 });
		}

		const newUserHabits = await prisma.userHabits.create({
			data: {
				userId: session?.user?.id,
				habit_title: validatedInput.habit_title,
				start_date: validatedInput.start_date,
				habit_frequency: validatedInput.habit_frequency,
				cue_based_plan: validatedInput.cue_based_plan,
			},
		});

		console.log(newUserHabits);
		
	} catch (error) {
		if (error instanceof ZodError) {
			handleZodError(error);
		} else {
			console.error('Unexpected error: ', error);
		}
	}
}
