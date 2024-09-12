import Image from "next/image"
import Ikea from "../../../public/ikea-logo.png"

const Header = () => {
    return (
        <header className="bg-yellow-400 flex flex-col justify-center items-center p-10 shadow-2xl">
            <div className="w-1/6 rounded-xl">
                <Image className="w-full h-auto rounded-xl" src={Ikea} alt="Ikea logo" />
            </div>
            <h1 className="text-4xl m-6 font-bold text-blue-800">Training Buddy</h1>
            <div className="flex justify-around w-full max-w-[1800px]">
                <h2 data-testid="sub-Item" className="w-[214px] font-bold text-blue-800 text-xl">No equipment needed!</h2>
                <h2 data-testid="sub-Item" className=" font-bold text-blue-800 text-xl">Train everywhere!!</h2>
                <h2 data-testid="sub-Item" className="w-[214px] font-bold text-blue-800 text-xl">Stay healthy!!!</h2>
            </div>
        </header>
    )
};

export default Header
