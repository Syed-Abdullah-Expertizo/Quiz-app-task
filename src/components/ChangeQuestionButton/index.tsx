import { useStateContext } from "@/context/StateContext"
import { ChangeQuestionButtonInterface } from "@/interface"
import { useRouter } from "next/navigation"

const ChangeQuestionButton = ({selected,setSelected}: ChangeQuestionButtonInterface) => {

    const { question, totalQuestions, setQuestion } = useStateContext()
    const router = useRouter()

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
    <button style={{backgroundColor:question === 20 ? 'green':'black'}} className="border text-white px-4 py-2 rounded-md mt-4 font-semibold"
    onClick={handleNext}>
        {question === 20 ? 'End' : 'Next'}
    </button>

  )
}

export default ChangeQuestionButton