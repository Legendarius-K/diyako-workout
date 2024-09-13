'use client'

import { useState } from "react";

type InputProps = {
    updateUser: (name: string | null) => void
}


const Input = ({ updateUser }:InputProps) => {
    const [name, setName] = useState<string | null>(null)

    const handleChange = (e: { target: { value: string; }; }) => {
        setName(e.target.value)
    }

    const handleClick = () => {
        updateUser(name)
    }

    return (
        <section className="text-blue-800 flex flex-col justify-center items-center">
            <label className=" py-4" htmlFor="name">Enter your name below</label>
            <input className="bg-yellow-100 border-b-[1px] border-blue-800 p-2 w-4/5 max-w-[400px] my-4" onChange={handleChange} placeholder="Enter your name..." id="name" type="text" />
            <button className="my-4 border-2 border-blue-800 py-2 px-8 font-bold rounded bg-yellow-100" data-testid="add-userName" onClick={handleClick}>Add Name</button>
        </section>
    )
};

export default Input
