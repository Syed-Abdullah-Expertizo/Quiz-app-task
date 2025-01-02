'use client'

import RemarksText from "@/components/RemarksText"
import { useStateContext } from "@/context/StateContext"
import jsonData from '../../../questions.json'
import { shuffleArray } from "@/utils/helper"
import { JsonDataInterface } from "@/interface"

const ResultComp = () => {

    const { name, score, totalQuestions, setJsondata, setQuestion, setScore, setName ,setView} = useStateContext()

    const handleRestart = () => {
        const shuffleData:JsonDataInterface[] = shuffleArray(jsonData)
        setJsondata(shuffleData)
        setQuestion(1)
        setScore(0)
        setView(1)
    }

    const handleNameChange = () => {
        setName('')
        setQuestion(0)
        setScore(0)
        setView(0)
    }

    return (
        <div className="w-full h-screen flex flex-col items-center justify-center">

            <p className="py-10 text-2xl font-semibold">Quiz Completed</p>
            <p className="text-lg">Name : {name}</p>
            <p className="pt-4 text-lg ">Your Score : {score} out of {totalQuestions}</p>
            <p className="text-lg">Wrong Answers : {totalQuestions&& totalQuestions - score} out of {totalQuestions}</p>
            <p className="text-xl font-semibold pt-4">{totalQuestions&& (score/totalQuestions)*100}% Scored</p>
            <RemarksText />

            <button className="bg-blue-600 rounded-md px-4 py-2 mt-4 text-white" onClick={handleRestart}>Restart</button>
            <button className="bg-blue-600 rounded-md px-4 py-2 mt-4 text-white" onClick={handleNameChange}>Change Name</button>
        </div>
    )
}

export default ResultComp