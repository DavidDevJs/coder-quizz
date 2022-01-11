import { useReducer } from "react";
import { State } from "../interfaces/quizInterfaces";
import { QuizContext } from "./QuizContext";
import { quizReducer } from "./QuizReducer";

type QuizProviderProps = {
  children: React.ReactNode;
};

const initialState: State = {
  user: {},
  quizData: {
    categories: [],
    quizzes: [],
  },
};

const QuizProvider = ({ children }: QuizProviderProps) => {
  const [state, dispatch] = useReducer(quizReducer, initialState);

  function loginUser(email: string, password: string) {}

  return (
    <QuizContext.Provider
      value={{
        quizState: state,
        //loginUser,
      }}
    >
      {children}
    </QuizContext.Provider>
  );
};

export default QuizProvider;
