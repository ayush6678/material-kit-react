import { useEffect, useState } from "react";
import "./mssg.css"
import FormSimple from "layouts/sections/input-areas/forms/components/FormSimple";
const MessageBox = () => {
    const [showMessageBox, setShowMessageBox] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setShowMessageBox(true);
        }, 5000);

        return () => clearTimeout(timer);
    }, []);

    const handleClose = () => {
        setShowMessageBox(false);
    };

    if (!showMessageBox) {
        return null;
    }

    return (
        <div className="message-box-overlay">
            <div className="message-box">
                <button id="id1" className="close-button" onClick={handleClose}>
                    X
                </button>
                <p>Fill the Form the reach out!</p>
                <div className="message-box-content">
                    <br />
                    <FormSimple />
                </div>
            </div>
        </div>
    );
};


export default MessageBox;