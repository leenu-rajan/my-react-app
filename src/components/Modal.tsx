import { type ReactNode } from "react";

import './Modal.css';

interface ModalProps {
    title: string;
    children: ReactNode;
    onClose: () => void; // callback when the modal is closed
    isOpen: boolean;
    size?: "small" | "medium" | "large";
}

const Modal: React.FC<ModalProps> = ({ title, children, onClose, isOpen, size = "medium" }) => {

    if (!isOpen) {
        return null;
    }
    const sizeClass = `modal-content-${size}`;

    return (
        <div className="modal-overlay">
            <div className={`modal-content ${sizeClass}`}>
                <h2>{title}</h2>
                {children}
                <button title="Close" type="button" aria-label="Close" className="modal-close-button" onClick={onClose}> *</button>
            </div>
        </div>
    )

}

export default Modal;