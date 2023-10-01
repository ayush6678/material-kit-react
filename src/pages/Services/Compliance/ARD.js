import React from 'react';
import 'pages/Services/styles.css';
import FormSimple from 'layouts/sections/input-areas/forms/components/FormSimple';
import DefaultNavbar from 'examples/Navbars/DefaultNavbar';
import routes from 'routes';
 import CenteredFooter from 'examples/Footers/CenteredFooter';

function ARD() {
  const documentList = [
    { name: 'Board Resolution' },
    { name: 'Consent to Act as Director' },
  ];
  const faqList = [
    {
      question: 'Q1: What is the process for appointing or resigning a director?',
      answer: 'A1: The process involves obtaining board approval, obtaining consent from the director...'
    },
    {
      question: 'Q2: How long does it take to appoint or resign a director?',
      answer: 'A2: The duration varies due to the documentation and approvals required...'
    },
    {
      question: 'Q3: Can anyone be appointed as a director?',
      answer: 'A3: Directors must meet eligibility criteria, provide consent, and comply with regulations...'
    },
    {
      question: 'Q4: Are there any legal implications of appointing or resigning a director?',
      answer: 'A4: Appointing or resigning a director involves compliance with regulations, but it doesn\'t affect legal standing...'
    },
    {
      question: 'Q5: What happens to the director\'s responsibilities and liabilities after resignation?',
      answer: 'A5: Directors continue to have responsibilities and liabilities even after resignation for past actions...'
    },
  ];

  return (
    <div>
      <DefaultNavbar
        routes={routes}
        action={{
          type: "external",
          route: "",
          label: "Get Started",
          color: "success",
        }}
        transparent
        sticky
      />

      <div className="container">
        <header>
          <h1>Appointment/Resignation of Director</h1>
          <p className="headline">Manage changes in leadership through director appointments and resignations</p>
        </header>

        <div className='list'>

          <section className="description-section">
            <h2 style={{ marginBottom: "50px" }}>About Director Appointment/Resignation</h2>
            <p>
              Appointing or resigning a director involves obtaining board approval, obtaining the director's consent,
              and adhering to regulatory guidelines. This process ensures smooth transitions in leadership roles and responsibilities.
            </p><br />
            <h3>Starting at</h3>
            <h1 style={{ color: "#00cc00" }}>₹1000</h1>
          </section>
          <div className='form'>
            <FormSimple />
          </div>
        </div>

        <section className="documents-section">
          <h2 style={{ marginBottom: "100px"}}>List of Required Documents</h2>
          <div className="document-icons">
            {documentList.map((document, index) => (
              <div className="icon" key={index}>
                  <img src='https://cdn-icons-png.flaticon.com/512/1183/1183931.png' alt='doc' ></img>
                <p>{document.name}</p>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 style={{ marginBottom: "50px" }}>Key Importance of Director Appointment/Resignation</h2>
          <ul>
            <li> Leadership Transition: Appointing or resigning directors ensures smooth leadership transitions.</li>
            <li> Regulatory Compliance: The process adheres to regulatory requirements for directorship changes.</li>
            <li> Director Eligibility: Directors must meet eligibility criteria and provide consent.</li>
            <li> Responsibilities and Liabilities: Directors have ongoing responsibilities and liabilities even after resignation.</li>
            <li> Business Continuity: Changes in leadership roles do not affect the company's legal standing.</li>
          </ul>
        </section>

        <section className="change-process">
          <h2 style={{ marginBottom: "50px", marginTop: "50px" }}>Appointment/Resignation Process</h2>
          <ul>
            <li> Board Resolution: Obtain board approval for appointing or resigning a director.</li>
            <li> Consent to Act: Obtain the director's consent to act as a director or for resignation.</li>
            <li> Director's Details: Prepare necessary documents with director's details and roles.</li>
            <li> Filing with RoC: File the relevant forms and documents with the Registrar of Companies.</li>
            <li> Updated Records: Update official records with the new director's details or resignation.</li>
          </ul>
        </section>

        <section>
          <h2 style={{ marginBottom: "50px", marginTop: "50px" }}>Legal Implications of Director Appointment/Resignation</h2>
          <p>
            Appointing or resigning a director involves compliance with regulatory guidelines and approvals, but it doesn't affect
            the company's legal standing. Directors continue to have responsibilities and liabilities even after resignation.
          </p>
        </section>

        <section className="faq-section">
          <h2 style={{ marginBottom: "50px", marginTop: "50px" }}>Frequently Asked Questions</h2>
          <div className="faq">
            {faqList.map((faq, index) => (
              <div className="question" key={index}>
                <h3>{faq.question}</h3>
                <p>{faq.answer}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
      <CenteredFooter />
    </div >
  );
}

export default ARD;
