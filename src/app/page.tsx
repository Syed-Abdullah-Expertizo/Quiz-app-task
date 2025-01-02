import IntroView from "@/views/IntroView";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Quiz App",
};

export default function Home() {
  return <IntroView />;
}
