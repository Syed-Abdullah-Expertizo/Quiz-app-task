import { RiStarSFill, RiStarSLine } from "react-icons/ri";
import { IconsInterface } from "./interface";


export const EmptyStarIcon = ({ styles }: IconsInterface) => {
    return <RiStarSLine className={styles} />
}

export const FilledStarIcon = ({ styles }: IconsInterface) => {
    return <RiStarSFill className={styles} />
}