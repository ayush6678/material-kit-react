import "./style.css";

function FormSimple() {
    return (
        <section className="form-section">
            <div className="form-container">
                <form>
                    <label htmlFor="name">Name</label>
                    <input type="text" id="name" name="name" required />

                    <label htmlFor="phone">Phone Number</label>
                    <input type="tel" id="phone" name="phone" required />

                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" name="email" required />

                    <label htmlFor="message">Message</label>
                    <textarea type="email" id="email" name="email" required />

                    <button type="submit">Submit</button>
                </form>
            </div>
        </section>
    );
}

export default FormSimple;