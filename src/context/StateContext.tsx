import { JsonDataInterface, StateContextInterface, StateProviderInterface } from '@/interface';
import React, { createContext, useContext, useState } from 'react';

const StateContext = createContext<StateContextInterface | undefined>(undefined);

export const StateProvider = ({ children }: StateProviderInterface) => {
    const [name, setName] = useState<string>('');
    const [score, setScore] = useState<number>(0);
    const [question, setQuestion] = useState<number>(0);
    const [jsondata, setJsondata] = useState<JsonDataInterface[] | null>(null)
    const [selected, setSelected] = useState<string | null>(null);
    const [totalQuestions, setTotalQuestions] = useState<number | null>(null)

    return (
        <StateContext.Provider value={{ name, score, question, jsondata, selected, totalQuestions, setName, setScore, setQuestion, setJsondata, setSelected, setTotalQuestions }}>
            {children}
        </StateContext.Provider>
    );
};

export const useStateContext = (): StateContextInterface => {
    const context = useContext(StateContext);
    if (!context) {
        throw new Error('useStateContext must be used within a StateProvider');
    }
    return context;
};
