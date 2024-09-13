'use client'

import HeroMessage from "@/components/HeroMessage";
import Input from "@/components/Input";
import { useEffect, useState } from "react";
import Cardio from "../../public/cardio.png"
import Muscle from "../../public/muscle.png"
import Challenge from "../../public/challenge.png"
import Mobility from "../../public/mobility.png"
import TrainingCard from "@/components/TrainingCard";
import { CardioWorkout } from "@/data";
import { GymWorkout } from "@/data";
import { ChallengeWorkout } from "@/data";
import { StretchingExercises } from "@/data";

const workoutCards = [
    { title: "Cardio", image: Cardio, bgColor: "bg-green-600" },
    { title: "Muscle", image: Muscle, bgColor: "bg-blue-500" },
    { title: "Challenge", image: Challenge, bgColor: "bg-orange-400" },
    { title: "Mobility", image: Mobility, bgColor: "bg-purple-500" }
]


export default function Home() {
    const [name, setName] = useState<string | null>(null)
    const [workout, setWorkout] = useState<string | null>(null)
    useEffect(() => {
        console.log(workout);
    },[workout])

    return (
        <main className="bg-yellow-300 min-h-screen">
            {!name && <Input updateUser={setName} />}
            {name && !workout &&
                <>
                    <HeroMessage name={name} />
                <div className="md:flex md:justify-center grid sm:grid-cols-2 grid-cols-1 place-items-center gap-5 p-6">
                        {workoutCards.map((item, index) => <TrainingCard key={index} {...item} updateWorkout={setWorkout} />)}
                    </div>
                </>
            }
        </main>
    );
}
