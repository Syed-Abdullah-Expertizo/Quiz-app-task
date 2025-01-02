import { EmptyStarIcon, FilledStarIcon } from '@/icons'
import { DifficultyStarsInterface } from '@/interface'

const DifficultyStars = ({ difficulty }: DifficultyStarsInterface) => {
    return (
        <div className='flex items-center justify-center gap-2 mb-10'>

            <span className='flex items-center gap-1 text-xl'>
                {[...Array(3)].map((_, index) =>
                    index < (difficulty === 'easy' ? 1 : difficulty === 'medium' ? 2 : 3) ?
                        <FilledStarIcon key={index} /> :
                        <EmptyStarIcon key={index} />
                )}
            </span>
        </div>
    )
}

export default DifficultyStars