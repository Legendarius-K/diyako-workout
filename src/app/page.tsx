'use client'

import HeroMessage from "@/components/HeroMessage";
import Input from "@/components/Input";
import { useEffect, useState } from "react";
import TrainingCard from "@/components/TrainingCard";
import { CardioWorkout } from "@/data";
import { GymWorkout } from "@/data";
import { ChallengeWorkout } from "@/data";
import { StretchingExercises } from "@/data";
import { workoutCards } from "@/data";
import DisplayCard from "@/components/DisplayCard";
import { randomizeWorkout } from "@/utils/functions";


export default function Home() {
    const [name, setName] = useState<string | null>(null)
    const [workout, setWorkout] = useState<string | null>(null)
    useEffect(() => {
        console.log(workout);
    }, [workout])

    const randomWorkoutObject = randomizeWorkout(
        workout === "Cardio" ? CardioWorkout :
            workout === "Muscle" ? GymWorkout :
                workout === "Challenge" ? ChallengeWorkout :
                    StretchingExercises
    );

    const randomWorkout = Object.keys(randomWorkoutObject)
    const randomWorkoutValue = Object.values(randomWorkoutObject)

    const restartWorkout = () => {
        setWorkout(null)
    }

    return (
        <main className="bg-yellow-300 min-h-screen">
            {!name && <Input updateUser={setName} />}
            {name && !workout &&
                <>
                    <HeroMessage name={name} />
                    <div className="flex justify-center">
                        <div className="md:flex md:justify-center grid sm:grid-cols-2 grid-cols-1 place-items-center gap-5 p-6 max-w-[1600px]">
                            {workoutCards.map((item, index) => <TrainingCard key={index} {...item} updateWorkout={setWorkout} />)}
                        </div>
                    </div>
                </>
            }
            {workout && <DisplayCard workout={randomWorkoutObject} type={workout} onClick={restartWorkout} />}
        </main>
    );
}
