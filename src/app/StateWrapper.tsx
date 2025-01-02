'use client'

import { StateProvider } from "@/context/StateContext";
import { StateWrapperInterface } from "@/interface";

const StateWrapper = ({ children }: StateWrapperInterface) => {
  return <StateProvider>{children}</StateProvider>;
};

export default StateWrapper;
