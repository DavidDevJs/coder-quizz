import { RiCloseLine } from "react-icons/ri";
import "./modal.css";

interface ModalProps {
  children: React.ReactNode;
  setIsOpen: (boolean: boolean) => void;
  title: string;
}

const Modal = ({ children, setIsOpen, title }: ModalProps) => {
  return (
    <>
      <div className="darkBG" onClick={() => setIsOpen(false)} />
      <div className="centered">
        <div className="modal">
          <div className="modalHeader">
            <h5 className="heading">{title}</h5>
          </div>
          <button className="closeBtn" onClick={() => setIsOpen(false)}>
            <RiCloseLine style={{ marginBottom: "-3px" }} />
          </button>
          <div className="modalContent">{children}</div>
          <div className="modalActions">
            <div className="actionsContainer">
              <button className="saveBtn" onClick={() => setIsOpen(false)}>
                Save
              </button>
              <button className="cancelBtn" onClick={() => setIsOpen(false)}>
                Cancel
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export { Modal };
