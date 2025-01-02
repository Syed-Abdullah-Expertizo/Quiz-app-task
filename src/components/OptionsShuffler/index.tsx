import { shuffleArray } from "@/helper"
import { OptionsShufflerInterface } from "@/interface"
import { useEffect, useState } from "react"
import Item from "./Item"
import { useStateContext } from "@/context/StateContext"

const OptionsShuffler = ({ correct, incorrect, selected, setSelected }: OptionsShufflerInterface) => {
    const [options, setOptions] = useState<string[] | null>(null)
    const { score, setScore, question } = useStateContext()
    const [isDisabled, setIsDisabled] = useState<boolean>(false)

    useEffect(() => { setIsDisabled(false) }, [question])

    useEffect(() => {
        if (correct === undefined || incorrect === undefined) { return }
        const alloptions = [correct, ...incorrect]
        const shuffle = shuffleArray(alloptions)
        setOptions(shuffle)
    }, [correct, incorrect])

    const handleSelectOption = (a: string) => {
        setSelected(a)
        if (a === correct) {
            setScore(score + 1)
        }
        setIsDisabled(true)
    }

    return (<>
        <div className="grid grid-cols-2 gap-4 max-md:grid-cols-1">
            {options && options.map((item, index) => (
                <Item content={item} key={index} handleOnClick={handleSelectOption} selected={selected} isDisabled={isDisabled} />
            ))}
        </div>

        <span className="mt-4 font-bold">
            {selected && selected === correct ? <p className="text-green-500">Correct !</p> :
                selected && selected !== correct ? <p className="text-red-600">Sorry !</p> :
                    null}
        </span>
    </>
    )
}

export default OptionsShuffler