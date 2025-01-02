import { EmptyStarIcon, FilledStarIcon } from "@/icons";
import { DifficultyStarsInterface } from "@/interface";

const DifficultyStars = ({ difficulty }: DifficultyStarsInterface) => {
  let filledStars = 0;

  switch (difficulty) {
    case "easy":
      filledStars = 1;
      break;
    case "medium":
      filledStars = 2;
      break;
    case "hard":
      filledStars = 3;
      break;
    default:
      filledStars = 0;
      break;
  }

  return (
    <div className="flex items-center justify-center gap-2 mb-10">
      <span className="flex items-center gap-1 text-xl">
        {[...Array(3)].map((_, index) =>
          index < filledStars ? (
            <FilledStarIcon key={index} />
          ) : (
            <EmptyStarIcon key={index} />
          )
        )}
      </span>
    </div>
  );
};

export default DifficultyStars;
