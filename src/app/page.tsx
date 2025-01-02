import MainView from "@/views/MainView";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Quiz App",
};

export default function Home() {
  return <MainView />;
}
