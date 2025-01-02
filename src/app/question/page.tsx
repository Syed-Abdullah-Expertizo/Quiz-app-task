import QuestionView from "@/views/QuestionView";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Question",
};

const Question = () => {
  return <QuestionView />;
};

export default Question;
