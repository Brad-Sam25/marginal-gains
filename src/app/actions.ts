"use server"
import { z } from "zod";
import { prisma } from "@/lib/prisma";

export async function createNewHabit(state: any, formData: FormData) {
    const schema = z.object({
        habitTitle: z.string(),
        startDate: z.date(),
        habitFrequency: z.number(),
        cueBasedPlan: z.string()
    })

    const parse = schema.safeParse({
        habitTitle: formData.get("habitTitle"),
        startDate: formData.get("startDate"),
        habitFrequency: formData.get("habitFrequency"),
        cueBasedPlan: formData.get("cueBasedPlan")
    })

    if(!parse.success) {
        return {message: 'Failed to create new habit!'}
    }

    const parsedData = parse.data
}