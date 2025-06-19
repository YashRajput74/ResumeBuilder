import { createContext, useContext } from "react";

export const ResumeContext = createContext();

export const useResume = () => useContext(ResumeContext);