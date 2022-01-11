import { createContext } from "react";
import { State } from "../interfaces/quizInterfaces";

export type QuizContextProps = {
  quizState: State;
  //loginUser: (email: string, password: string) => Promise<{}>;
};

export const QuizContext = createContext<QuizContextProps>(
  {} as QuizContextProps
);
