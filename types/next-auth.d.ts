import { DefaultSession } from "next-auth";

declare module "next-auth" {
    interface Session {
        user: {
            id: string| null | undefined;
        } & DefaultSession["user"]
    }
}

export interface UserHabitCreateInput {
    userId: string| null;
    habit_title: string;
    start_date: Date;
    habit_frequency: number;
    cue_based_plan: string;
}