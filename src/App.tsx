import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import { Layout } from "./components/Layout/Layout";
import { Category } from "./components/views/categories/Category";
import { Dashboard } from "./components/views/dashboard/Dashboard";

function App() {
  return (
    <>
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/category" element={<Category />} />
          </Routes>
        </Layout>
      </Router>
    </>
  );
}

export default App;
