'use server';
import { z } from 'zod';
import { prisma } from '@/lib/prisma';
import { getAuthSession } from '@/lib/authOptions';

export type Fields = {
    habit_title: string;
    start_date: Date;
    habit_frequency: number;
    cue_based_plan: string;    
};

export type FormState = {
	messages: string;
	errors: Record<keyof Fields, string> | undefined;
	fieldValues: Fields
};

export async function createNewHabit(state: FormState, formData: FormData) {
	const schema = z.object({
		habit_title: z.string(),
		start_date: z.date(),
		habit_frequency: z.number(),
		cue_based_plan: z.string(),
	});

	// const parse = schema.parse({
	// 	habit_title: formData.get('habit_title'),
	// 	start_date: formData.get('start_date'),
	// 	habit_frequency: formData.get('habit_frequency'),
	// 	cue_based_plan: formData.get('cue_based_plan'),
	// });

    try {
        const parse = schema.parse(formData)
        console.log(parse);
        
    } catch(e) {

    }

	return { data: parse.data };

	// const parsedData = parse.data
	// const session = await getAuthSession();

	// if(!session?.user?.id) {
	//     return new Response('Unauthorized', { status: 401 })
	// }

	// try {
	//     await prisma.userHabits.create({
	//         data: {
	//             userId: session?.user?.id,
	//             habit_title: parsedData.habit_title,
	//             start_date: parsedData.start_date,
	//             habit_frequency: parsedData.habit_frequency,
	//             cue_based_plan: parsedData.cue_based_plan
	//         }
	//     })

	//     return Response(dart)
	// } catch (error) {
	//     return {message: "Cannot Save new Habit!"}
	// }
}
