import { BsPlusSquareFill } from "react-icons/bs";

import "./categoriesDashboard.css";

const CreateCategory = () => {
  return (
    <button className="add-category">
      <BsPlusSquareFill className="add-category--icon" />
      <span>Add Category</span>
    </button>
  );
};

export { CreateCategory };
