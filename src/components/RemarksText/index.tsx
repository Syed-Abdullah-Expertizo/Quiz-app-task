import { useStateContext } from "@/context/StateContext"
import { RemarksData } from "@/data"
import { useEffect, useState } from "react"

const RemarksText = () => {
    const { score } = useStateContext()
    const [textRem, setTextRem] = useState<string | null>(null)
    const [color, setColor] = useState<string>('#000')

    useEffect(() => {
        const userRemark = RemarksData.find(
            (range) => score >= range.minScore && score <= range.maxScore
        );
        if (userRemark === undefined) return
        setTextRem(userRemark?.remark)
        setColor(userRemark.color)
    }, [score])

    return (
        <div className="py-4 font-bold" style={{ color: color }}>{textRem}</div>
    )
}

export default RemarksText