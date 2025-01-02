import { Dispatch, ReactNode, SetStateAction } from "react";

export interface QuestionPageInterface {
    question: string | string[] | undefined,
    name: string | null
}

export interface JsonDataInterface {
    category: string,
    type: string,
    difficulty: string,
    question: string,
    incorrect_answers: string[],
    correct_answer: string
}

export interface OptionsShufflerInterface {
    correct: string | undefined,
    incorrect: string[] | undefined,
    selected: string | null,
    setSelected: Dispatch<SetStateAction<string | null>>
}

export interface OptionsIteminterface {
    content: string,
    handleOnClick: (a: string) => void,
    selected: string | null,
    isDisabled: boolean
}

export interface StateContextInterface {
    name: string;
    score: number;
    question: number;
    jsondata: JsonDataInterface[] | null,
    selected: string | null,
    totalQuestions: number | null,
    setName: (name: string) => void;
    setScore: (score: number) => void;
    setQuestion: (score: number) => void;
    setJsondata: (jsondata: JsonDataInterface[] | null) => void,
    setSelected: (name: string | null) => void;
    setTotalQuestions: (name: number | null) => void;
}

export interface StateProviderInterface {
    children: ReactNode;
}

export interface DifficultyStarsInterface {
    difficulty: string | undefined
}

export interface ChangeQuestionButtonInterface  {
    selected: string | null,
    setSelected: Dispatch<SetStateAction<string | null>>
}