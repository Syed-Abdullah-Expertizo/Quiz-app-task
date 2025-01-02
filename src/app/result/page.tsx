import ResultView from "@/views/ResultView";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Result",
};

const Result = () => {
  return <ResultView />;
};

export default Result;
