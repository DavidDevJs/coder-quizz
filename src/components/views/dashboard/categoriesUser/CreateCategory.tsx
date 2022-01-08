import { useState } from "react";
import { BsPlusSquareFill } from "react-icons/bs";
import { Modal } from "../../../Modal/Modal";

import "./categoriesDashboard.css";

const CreateCategory = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <button className="add-category" onClick={() => setIsOpen(true)}>
        <BsPlusSquareFill className="add-category--icon" />
        <span>Add Category</span>
      </button>
      {isOpen && (
        <Modal setIsOpen={setIsOpen} title="First Modal">
          <h1>Holiiiii</h1>
        </Modal>
      )}
    </>
  );
};

export { CreateCategory };
