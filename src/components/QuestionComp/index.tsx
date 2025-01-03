'use client'

import { useStateContext } from "@/context/StateContext"
import { JsonDataInterface } from "@/interface"
import { useState, useEffect } from "react"
import BottomPercentageBar from "../BottomPercentage"
import ChangeQuestionButton from "../ChangeQuestionButton"
import DifficultyStars from "../DifficultyStars"
import OptionsShuffler from "../OptionsShuffler"
import TopPercentageBar from "../TopPercentage"

const QuestionComp = () => {

    const [data, setData] = useState<JsonDataInterface | null>(null)
    const { question, jsondata, totalQuestions } = useStateContext()
    const [selected, setSelected] = useState<string | null>(null)

    useEffect(() => {
        if (question && jsondata) {
            setData(jsondata[question - 1])
        }
    }, [question,jsondata])

    return (
        <div className="bg-white w-full flex flex-col items-center justify-center relative h-screen px-4 ">
            {question && <TopPercentageBar />}

            <div className="flex items-start gap-2 flex-col w-10/12 max-lg:w-4/5 max-sm:w-full container text-left">
                <p className="font-bold text-2xl">Question : {question} out of {totalQuestions}</p>
                <p className="text-lg">{data && data.question && decodeURIComponent(data.question)}</p>
                <p className="">Category: {data && data.category && decodeURIComponent(data?.category)}</p>
                {data?.difficulty && <DifficultyStars difficulty={data?.difficulty} />}

            </div>

            {data?.correct_answer && data.incorrect_answers && <OptionsShuffler correct={data?.correct_answer} incorrect={data?.incorrect_answers} selected={selected} setSelected={setSelected} />}

            <ChangeQuestionButton selected={selected} setSelected={setSelected}/> 
            
            {question && <BottomPercentageBar />}
        </div>
    )
}

export default QuestionComp