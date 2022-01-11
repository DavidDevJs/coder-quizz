export const GET_USER: string = "GET_USER";
export const GET_CATEGORIES: string = "GET_CATEGORIES";
export const GET_QUIZZES: string = "GET_QUIZZES";

export interface User {
  id?: number;
  email: string;
  password: string;
  nickname: string;
  typeDev?: string;
  imgProfile?: string;
  github?: string;
  token?: string;
}

export interface Category {
  id: number;
  nickName: string;
  title: string;
  img: string;
}

export interface Question {
  question: string;
  options: any;
  correctOption: string;
  img?: string;
}

export interface Quiz {
  id: number;
  title: string;
  description: string;
  dates: string[];
  categoryId: number;
  questions: Question[] | {}[];
}

export interface State {
  user: User | {};
  quizData: {
    categories: Category[] | [];
    quizzes: Quiz[] | [];
  };
}

export interface methods {
  getCategories: () => Promise<void>;
  getQuizzes: () => Promise<void>;
}
