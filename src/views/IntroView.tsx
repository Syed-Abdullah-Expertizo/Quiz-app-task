'use client'

import { useStateContext } from "@/context/StateContext"
import { useRouter } from "next/navigation"
import { useState } from "react"

const IntroView = () => {
    const [nameState, setNameState] = useState<string>('')
    const { setName, setQuestion } = useStateContext()
    const router = useRouter()

    const handleNext = () => {
        if (nameState.length < 3) { alert('Name must be 3 characters long') }
        setQuestion(1)
        setName(nameState)
        router.push(`/question`)
    }

    return (
        <div className="w-full h-screen flex flex-col bg-white justify-center items-center px-4 text-center">
            <p className="font-bold text-4xl py-10">Quiz App</p>

            <p className="text-lg">Please Enter your name and press the start button to start the quiz</p>

            <input type="text" placeholder="Enter your name"
                value={nameState} onChange={(e) => setNameState(e.target.value)}
                className="my-10 rounded-md text-lg border-2 border-black px-4 py-2 " />

            <button className="bg-black rounded-md text-lg font-bold px-6 py-2 text-center text-white" onClick={handleNext}>Start Quiz</button>
        </div>
    )
}

export default IntroView