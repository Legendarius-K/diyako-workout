import Image from "next/image"
import Ikea from "../../../public/ikea-logo.png"

const Header = () => {
    return (
        <header className="bg-yellow-400 flex flex-col justify-center items-center p-10 shadow-2xl z-20 text-blue-800">
            <div className="w-[370px] rounded-xl relative">
                <Image className="w-full h-auto rounded-xl" src={Ikea} alt="Ikea logo" />
                <h1 className="absolute -bottom-3 text-nowrap left-[43%] transform -translate-x-1/2 text-[23px] m-6 font-bold ">Training Buddy</h1>
                <h2 className="absolute -top-3 text-nowrap left-[43%] transform -translate-x-1/2 text-[23px] m-6 font-bold ">The</h2>
            </div>
            <div className="flex justify-around w-full max-w-[1800px] mt-6">
                <h2 data-testid="sub-Item" className="w-[214px] font-bold  text-lg">No equipment needed!</h2>
                <h2 data-testid="sub-Item" className=" font-bold text-lg">Train everywhere!!</h2>
                <h2 data-testid="sub-Item" className="w-[214px] font-bold text-lg">Stay healthy!!!</h2>
            </div>
        </header>
    )
};

export default Header
