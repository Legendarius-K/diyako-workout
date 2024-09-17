import Image, { StaticImageData } from "next/image";

type TrainingCardProps = {
    title: string
    image: StaticImageData
    bgColor: string
    updateWorkout: (title: string) => void
}


const TrainingCard = ({ title, image, bgColor, updateWorkout }:TrainingCardProps) => {

    const handleClick = (title: string) => {
        updateWorkout(title)
    }

    return (
        <div onClick={() => handleClick(title)} className={`${bgColor} cursor-pointer w-3/4 sm:w-4/5 md:w-[22%] rounded-xl flex flex-col items-center text-white font-bold hover:border-2`}>
            <h2 className="p-2 text-xl">{title}</h2>
            <div className="" data-testid="card-image">
                <Image src={image} alt="title" className="w-full h-auto"/>
            </div>
            <button className="p-2">Get Workout</button>
        </div>
    )
};

export default TrainingCard
