'use client'

import RemarksText from "@/components/RemarksText"
import { useStateContext } from "@/context/StateContext"
import { useRouter } from "next/navigation"
import jsonData from '../../questions.json'
import { shuffleArray } from "@/helper"
import { JsonDataInterface } from "@/interface"

const ResultView = () => {

    const { name, score, totalQuestions, setJsondata, setQuestion, setScore, setName } = useStateContext()
    const router = useRouter()

    const handleRestart = () => {
        const shuffleData:JsonDataInterface[] = shuffleArray(jsonData)
        setJsondata(shuffleData)
        setQuestion(1)
        setScore(0)
        router.push(`/question`)
    }

    const handleNameChange = () => {
        setName('')
        setQuestion(0)
        setScore(0)
        router.replace(`/`)
    }

    return (
        <div className="w-full h-screen flex flex-col items-center justify-center">

            <p className="py-10 text-2xl font-semibold">Quiz Completed</p>

            <p className="text-lg">Name : {name}</p>

            <p className="py-4 text-lg pb-4">Your Score : {score} out of {totalQuestions}</p>

            <RemarksText />

            <button className="bg-blue-600 rounded-md px-4 py-2 mt-4 text-white" onClick={handleRestart}>Restart</button>

            <button className="bg-blue-600 rounded-md px-4 py-2 mt-4 text-white" onClick={handleNameChange}>Change Name</button>
        </div>
    )
}

export default ResultView