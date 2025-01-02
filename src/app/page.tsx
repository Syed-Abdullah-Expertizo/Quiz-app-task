'use client'

import { useStateContext } from "@/context/StateContext";
import { useEffect } from "react";
import jsonData from '../../questions.json'
import { shuffleArray } from "@/helper";
import IntroView from "@/views/IntroView";
import { JsonDataInterface } from "@/interface";

export default function Home() {
  const { setJsondata, name, setTotalQuestions } = useStateContext()

  useEffect(() => {
    const shuffleData:JsonDataInterface[] = shuffleArray(jsonData)
    setJsondata(shuffleData)
    setTotalQuestions(jsonData.length)
  }, [name])

  return (
    <IntroView />
  );
}
