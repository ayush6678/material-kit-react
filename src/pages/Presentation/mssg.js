import { useEffect, useState } from "react";
import "./mssg.css"

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

                <div className="message-box-content">
                    <br />
                    <section className="form-section">

                        <div className="form-container">
                            <h2> Request A Callback</h2>
                            <br />

                            <form>

                                <input type="text" id="name" name="name" placeholder="Your Name" required />
                                <input type="tel" id="phone" name="phone" placeholder="Your Mobile" required />
                                <input type="email" id="email" name="email" placeholder="Your Email" required />

                                <textarea type="email" id="email" name="email" placeholder="Message (optional)" required />

                                <button type="submit">Submit</button>

                            </form>
                            <br />
                            <h5 style={{
                                fontFamily: 'arial'
                            }}>You may Also Call Us At</h5>
                            <h2
                                style={{
                                    fontFamily: 'arial'
                                }}
                            >+91 9999886666</h2>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    );
};


export default MessageBox;