"use client";

import { useStateContext } from "@/context/StateContext";
import { useState } from "react";

const IntroComp = () => {
  const [nameState, setNameState] = useState<string>("");
  const { setName, setQuestion, setView } = useStateContext();

  const handleNext = () => {
    if (nameState.length < 3) {
      alert("Name must be 3 characters long");
    }
    setQuestion(1);
    setName(nameState);
    setView(1);
  };

  return (
    <form
      className="w-full h-screen flex flex-col bg-white justify-center items-center px-4 text-center"
      onSubmit={(e) => {
        e.preventDefault();
        handleNext();
      }}
    >
      <p className="font-bold text-4xl py-10">Quiz App</p>

      <p className="text-lg">
        Please Enter your name and press the start button to start the quiz
      </p>

      <input
        name="name"
        type="text"
        placeholder="Enter your name"
        value={nameState}
        onChange={(e) => setNameState(e.target.value)}
        className="my-10 rounded-md text-lg border-2 border-black px-4 py-2 "
      />

      <button
        type="submit"
        className="bg-black rounded-md text-lg font-bold px-6 py-2 text-center text-white"
      >
        Start Quiz
      </button>
    </form>
  );
};

export default IntroComp;
