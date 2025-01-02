"use client";

import { useStateContext } from "@/context/StateContext";
import { JsonDataInterface } from "@/interface";
import { shuffleArray } from "@/utils/helper";
import React, { useEffect } from "react";
import jsonData from "../../questions.json";
import IntroComp from "@/components/IntroComp";
import QuestionComp from "@/components/QuestionComp";
import ResultComp from "@/components/ResultComp";

const MainView = () => {
  const { setJsondata, name, setTotalQuestions, view } = useStateContext();

  useEffect(() => {
    const shuffleData: JsonDataInterface[] = shuffleArray(jsonData);
    setJsondata(shuffleData);
    setTotalQuestions(jsonData.length);
  }, [name]);

  return (
    <>
      {view === 0 ? (
        <IntroComp />
      ) : view === 1 ? (
        <QuestionComp />
      ) : (
        <ResultComp />
      )}
    </>
  );
};

export default MainView;
