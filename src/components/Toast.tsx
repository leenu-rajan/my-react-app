import type { ReactNode } from "react";
import './Toast.css'

interface ToastProps {
    type?: 'info' | 'success' | 'error',
    title: string;
    children?: ReactNode;
    isOpen: boolean;
    onClose: () => void;
}

const Toast: React.FC<ToastProps> = ({ type = "info", title, children, isOpen, onClose }) => {

    if (!isOpen) {
        return null;
    }
    return (

        <div className="toast-container">
            <div className={`toast-content toast-content-${type}`}>
                <h2>{title}</h2>
                {children}
                <button className="toast-close-button" aria-label="close" onClick={onClose}>*</button>
            </div>
        </div>
    )
}

export default Toast;