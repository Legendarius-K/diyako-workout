import { CardioWorkout, ChallengeWorkout, GymWorkout, StretchingExercises } from "@/data";
import { randomizeWorkout } from "@/utils/functions";

type DisplayCardProps = {
    workout: object
    type: string
    onClick: () => void
}

const DisplayCard = ({ workout, type, onClick }: DisplayCardProps) => {

    // const randomWorkoutObject = randomizeWorkout(
    //     workout === "Cardio" ? CardioWorkout :
    //         workout === "Muscle" ? GymWorkout :
    //             workout === "Challenge" ? ChallengeWorkout :
    //                 StretchingExercises
    // );

    const randomWorkout = Object.keys(workout)
    const randomWorkoutValue = Object.values(workout)

    const handleClick = () => {
        onClick()
    }



    return (
        <div className="text-center text-blue-800">
            <div className="flex justify-center">
                <h3 className="py-10 text-4xl">{type}</h3>
                <h3 className="py-10 text-4xl">&nbsp;Workout</h3>
            </div>
            <p className="text-xl py2">{randomWorkout}</p>
            <p className="text-xl">{randomWorkoutValue}</p>
            <button className="my-8 border-2 border-blue-800 py-2 px-8 font-bold rounded bg-yellow-100" onClick={handleClick}>Back</button>
        </div>
    )
};

export default DisplayCard
