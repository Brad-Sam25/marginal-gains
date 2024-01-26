"use server"
import { z } from "zod";
import { prisma } from "@/lib/prisma";
import { getAuthSession } from "@/lib/authOptions";

export async function createNewHabit(state: any, formData: FormData) {
    const schema = z.object({
        habit_title: z.string(),
        start_date: z.date(),
        habit_frequency: z.number(),
        cue_based_plan: z.string()
    })

    const parse = schema.safeParse({
        habit_title: formData.get("habit_title"),
        start_date: formData.get("start_date"),
        habit_frequency: formData.get("habit_frequency"),
        cue_based_plan: formData.get("cue_based_plan")
    })

    if(!parse.success) {
        return {message: 'Failed to create new habit!'}
    }

    const parsedData = parse.data
    const session = await getAuthSession();

    try {
        await prisma.userHabits.create({
            data: {
                userId: session?.user?.id,
                habit_title: parsedData.habit_title,
                start_date: parsedData.start_date,
                habit_frequency: parsedData.habit_frequency,
                cue_based_plan: parsedData.cue_based_plan
            }
        })
    } catch (error) {
        return {message: {"Cannot Save new Habit!"}}
    }
}