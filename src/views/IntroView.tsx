"use client";

import { useStateContext } from "@/context/StateContext";
import { JsonDataInterface } from "@/interface";
import { shuffleArray } from "@/utils/helper";
import React, { useEffect } from "react";
import jsonData from "../../questions.json";
import IntroComp from "@/components/IntroComp";

const IntroView = () => {
  const { setJsondata, name, setTotalQuestions } = useStateContext();

  useEffect(() => {
    const shuffleData: JsonDataInterface[] = shuffleArray(jsonData);
    setJsondata(shuffleData);
    setTotalQuestions(jsonData.length);
  }, [name]);

  return <IntroComp />;
};

export default IntroView;
