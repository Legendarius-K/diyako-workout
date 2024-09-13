'use client'

import HeroMessage from "@/components/HeroMessage";
import Input from "@/components/Input";
import { useState } from "react";


export default function Home() {
  const [name, setName] = useState<string | null>(null)

  return (
      <main className="bg-yellow-300 h-screen">
        {!name && <Input updateUser={setName}/>}
        {name && <HeroMessage name={name} />}
      </main>
  );
}
