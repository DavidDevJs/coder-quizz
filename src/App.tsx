import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import { Layout } from "./components/Layout/Layout";
import { ListOfQuizzes } from "./components/views/ListOfQuizzes/ListOfQuizzes";
import { Dashboard } from "./components/views/dashboard/Dashboard";
import { Home } from "./components/views/LoginAndRegister/Home";

import QuizProvider from "./context/QuizProvider";

function App() {
  const [token, setToken] = useState();

  if (!token) {
    return <Home setToken={setToken} />;
  }

  return (
    <QuizProvider>
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/category" element={<ListOfQuizzes />} />
          </Routes>
        </Layout>
      </Router>
    </QuizProvider>
  );
}

export default App;
