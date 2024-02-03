import { DefaultSession } from "next-auth";
import { Prisma, User } from "@prisma/client";

declare module "next-auth" {
    interface Session {
        user: {
            id: string| null | undefined;
        } & DefaultSession["user"]
    }
}
