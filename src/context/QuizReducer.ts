import { State, User } from "../interfaces/quizInterfaces";

type QuizActions =
  | { type: "GET_USER"; payload: User }
  | { type: "PUT_USER"; payload: User };

export const quizReducer = (state: State, action: QuizActions): State => {
  switch (action.type) {
    case "GET_USER":
      return state;
    case "PUT_USER":
      return state;
    default:
      return state;
  }
};
