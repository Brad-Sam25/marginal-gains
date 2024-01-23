-- CreateTable
CREATE TABLE "UserHabits" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "habit_title" TEXT NOT NULL,
    "start_date" TIMESTAMP(3) NOT NULL,
    "habit_frequency" INTEGER NOT NULL,
    "cue_based_plan" TEXT NOT NULL,

    CONSTRAINT "UserHabits_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "UserHabits" ADD CONSTRAINT "UserHabits_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
