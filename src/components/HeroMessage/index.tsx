
type HeroMessageProps = {
    name: string
}

const HeroMessage = ({ name }:HeroMessageProps) => {
    return (
        <div className="text-blue-800 py-10 px-6 flex flex-col items-center">
            <h3 className="font-bold text-xl p-2 text-center">Hi {name} 👋🏼 Find Your Perfect Workout!</h3>
            <p className="max-w-[700px] pt-4">Discover a new way to stay fit with IKEA! Stay motivated with IKEA workouts, no equipment needed, just IKEA energy! Choose from IKEA challenges, IKEA cardio sessions, IKEA muscle-building workouts, or IKEA stretching routines. Let IKEA inspire you with a random IKEA workout tailored to your IKEA preferences. Ready to get moving with IKEA?</p>
        </div>
    )
};

export default HeroMessage
