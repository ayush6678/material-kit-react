import { useEffect, useState } from "react";
import "./mssg.css"
import FormSimple from "layouts/sections/input-areas/forms/components/FormSimple";
import MKTypography from "components/MKTypography";
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

                <MKTypography variant='h2' mt={5}> Fill the Form the reach out!</MKTypography>
                <div className="message-box-content">
                    <br />
                    <FormSimple />
                </div>
            </div>
        </div>
    );
};


export default MessageBox;