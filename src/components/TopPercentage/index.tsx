import { useStateContext } from "@/context/StateContext"
import { useEffect, useState } from "react"

const TopPercentageBar = () => {
    const { question, totalQuestions } = useStateContext()
    const [topPercentage, setTopPercentage] = useState<string | null>(null)

    const TopPercentageCalculator = () => {
        if (question === undefined) { return }
        if (totalQuestions) {
            const topPercentage = (+question / totalQuestions) * 100
            setTopPercentage(topPercentage + '%')
        }
    }
    useEffect(() => { TopPercentageCalculator() }, [question])

    return (
        <div className="w-full h-10 flex items-center justify-start absolute left-0 top-0">
            {topPercentage && <span className=" h-10 bg-gray-600" style={{ width: topPercentage }} />}
        </div>
    )
}

export default TopPercentageBar