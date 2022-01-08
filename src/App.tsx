import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import { Layout } from "./components/Layout/Layout";
import { ListOfQuizzes } from "./components/views/ListOfQuizzes/ListOfQuizzes";
import { Dashboard } from "./components/views/dashboard/Dashboard";

const URL_API = "https://quizzes-appapi.herokuapp.com/";

function App() {
  return (
    <>
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/category" element={<ListOfQuizzes />} />
          </Routes>
        </Layout>
      </Router>
    </>
  );
}

export default App;
