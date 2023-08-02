import "./style.css";

function FormSimple() {
    return (
        <div className="form">
            <h2>Get A Callback from US!</h2>
            <p>Name:</p>
            <input id="name" placeholder="Full Name"></input>
            <p>Phone Number:</p>
            <input id="phno" placeholder="Phone Number"></input>
            <p>E-Mail ID:</p>
            <input id="email" placeholder="E-Mail ID"></input>
            <p>Your Message:</p>
            <textarea id="ta"></textarea><br />
            <div className="button">
                <button>Submit</button>
            </div>

        </div>
    );
}

export default FormSimple;