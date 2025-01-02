'use client'

import { StateProvider } from "@/context/StateContext";

export type StateWrapperInterface = { children: React.ReactNode };

const StateWrapper = ({ children }: StateWrapperInterface) => {
  return <StateProvider>{children}</StateProvider>;
};

export default StateWrapper;
