import IntroView from "@/views/IntroView";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Quiz App",
  description: "This is quiz app built-on Next.js",
};

export default function Home() {
  return <IntroView />;
}
