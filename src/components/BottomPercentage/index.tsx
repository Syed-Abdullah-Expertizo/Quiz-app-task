import { useStateContext } from "@/context/StateContext"
import { useEffect, useState } from "react"

const BottomPercentageBar = () => {
    const { question, score, totalQuestions } = useStateContext()
    const [scorePercentage, setScorePercentage] = useState<string | null>(null)
    const [maxScore, setMaxScore] = useState<string | null>(null)
    const [minScore, setMinScore] = useState<string | null>(null)

    useEffect(() => {
        if (question === undefined && totalQuestions === null) { return }
        if (totalQuestions) {
            const scoreCalc = (score / (question - 1)) * 100
            setScorePercentage((scoreCalc).toFixed(1) + "%")
            const minScoreCalc = (score / totalQuestions) * 100
            setMinScore((minScoreCalc).toFixed(1) + "%")
            const maxScoreCalc = ((totalQuestions - question + 1 + score) / totalQuestions) * 100
            setMaxScore((maxScoreCalc).toFixed(1) + "%")
        }
    }, [question, score,totalQuestions])

    return (
        <div className="absolute left-0 bottom-0 w-full h-20 flex flex-col items-center justify-start px-4">

            <span className="w-full flex items-center justify-between">
                <span className="">Score: {totalQuestions && ((score / totalQuestions) * 100).toFixed(1)}%</span>
                <span className="">Max Score: {maxScore}</span>
            </span>

            <span className="rounded-md border border-black flex items-center justify-start w-full relative overflow-hidden h-12">
                {minScore && <span className=" h-12 bg-black absolute left-0 top-0 z-30" style={{ width: minScore }} />}
                {scorePercentage && <span className=" h-12 bg-gray-600 absolute left-0 top-0 z-20" style={{ width: scorePercentage }} />}
                {maxScore && <span className=" h-12 bg-gray-400 absolute left-0 top-0 z-10" style={{ width: maxScore }} />}
            </span>
        </div>
    )
}

export default BottomPercentageBar