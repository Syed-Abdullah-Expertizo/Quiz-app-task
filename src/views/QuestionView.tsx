'use client'

import TopPercentageBar from "@/components/TopPercentage"
import { JsonDataInterface } from "@/interface"
import { useEffect, useState } from "react"
import { useStateContext } from "@/context/StateContext"
import DifficultyStars from "@/components/DifficultyStars"
import OptionsShuffler from "@/components/OptionsShuffler"
import BottomPercentageBar from "@/components/BottomPercentage"
import { useRouter } from "next/navigation"

const QuestionView = () => {

    const [data, setData] = useState<JsonDataInterface | null>(null)
    const { question, jsondata, totalQuestions, setQuestion } = useStateContext()
    const router = useRouter()
    const [selected, setSelected] = useState<string | null>(null)

    useEffect(() => {
        if (question && jsondata) {
            setData(jsondata[question - 1])
        }
    }, [question,jsondata])

    const handleNext = () => {
        if (selected === null) { return }
        setSelected(null)
        if (question === totalQuestions) {
            router.push(`/result`)
        } else {
            setQuestion(question + 1)
        }
    }

    return (
        <div className="bg-white w-full flex flex-col items-center justify-center relative h-screen px-4">
            {question && <TopPercentageBar />}

            <div className="flex items-start gap-2 flex-col w-4/5 max-sm:w-full">
                <p className="font-bold text-2xl">Question : {question} out of {totalQuestions}</p>
                <p className="text-lg">{data && data.question && decodeURIComponent(data.question)}</p>
                <p className="">Category: {data && data.category && decodeURIComponent(data?.category)}</p>
                {data?.difficulty && <DifficultyStars difficulty={data?.difficulty} />}

            </div>

            {data?.correct_answer && data.incorrect_answers && <OptionsShuffler correct={data?.correct_answer} incorrect={data?.incorrect_answers} selected={selected} setSelected={setSelected} />}

            <button className="border bg-black text-white px-4 py-2 rounded-md mt-4 font-semibold" onClick={handleNext}>Next</button>

            {question && <BottomPercentageBar />}
        </div>
    )
}

export default QuestionView