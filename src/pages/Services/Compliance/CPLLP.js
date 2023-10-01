import React from 'react';
import 'pages/Services/styles.css';
import FormSimple from 'layouts/sections/input-areas/forms/components/FormSimple';
import DefaultNavbar from 'examples/Navbars/DefaultNavbar';
import routes from 'routes';
 import CenteredFooter from 'examples/Footers/CenteredFooter';

function CPLLP() {
  const documentList = [
    { name: 'Partnership Deed Amendment' },
    { name: 'Form for Intimation of Change' },
    { name: 'Consent of Incoming Partner' },
    { name: 'Consent of Outgoing Partner' },
  ];
  const faqList = [
    {
      question: 'Q1: What is the process for changing partners of an LLP?',
      answer: 'A1: The process involves amending the Partnership Deed, obtaining consents from incoming and outgoing partners...'
    },
    {
      question: 'Q2: How long does it take to complete the process of changing partners?',
      answer: 'A2: The duration varies due to documentation, approvals required, and processing time by RoC...'
    },
    {
      question: 'Q3: Can any partner be replaced with a new partner?',
      answer: 'A3: Yes, partners can be replaced by following the proper legal procedures and obtaining necessary consents...'
    },
    {
      question: 'Q4: What are the implications for the LLP after changing partners?',
      answer: 'A4: The LLPs ownership structure changes, and the incoming partner assumes rights, duties, and liabilities...'
    },
    {
      question: 'Q5: Are there any compliance requirements after changing partners?',
      answer: 'A5: Yes, the LLP must update its records, submit necessary forms to RoC, and ensure proper compliance...'
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
          <h1>Change in Partners of LLP</h1>
          <p className="headline">Modify the partners of your LLP with proper documentation</p>
        </header>

        <div className='list'>

          <section className="description-section">
            <h2 style={{ marginBottom: "50px" }}>About Change in Partners of LLP</h2>
            <p>
              Changing partners of an LLP involves amending the Partnership Deed, obtaining consents from incoming and
              outgoing partners, and adhering to regulatory guidelines. This process allows for a change in the LLP's
              ownership structure while complying with legal requirements.
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
          <h2 style={{ marginBottom: "50px" }}>Key Importance of Changing Partners of LLP</h2>
          <ul>
            <li> Ownership Modification: Changing partners allows modification of the LLP's ownership structure.</li>
            <li> Regulatory Compliance: The process adheres to regulatory guidelines for changing partners of LLP.</li>
            <li> Replacement Procedure: Partners can be replaced following legal procedures and obtaining consents.</li>
            <li> Rights and Liabilities: Incoming partners assume rights, duties, and liabilities of the outgoing partners.</li>
            <li> Record and Compliance Update: The LLP must update its records and ensure compliance with legal norms.</li>
          </ul>
        </section>

        <section className="partners-change-process">
          <h2 style={{ marginBottom: "50px", marginTop: "50px" }}>Changing Partners of LLP Process</h2>
          <ul>
            <li> Partnership Deed Amendment: Amend the Partnership Deed to reflect the change in partners.</li>
            <li> Consent from Partners: Obtain consent from incoming and outgoing partners for the change.</li>
            <li> Intimation to RoC: Submit Form for Intimation of Change to the Registrar of Companies.</li>
            <li> Update LLP Agreement: Update the LLP Agreement with details of the new partner.</li>
            <li> Partner's Rights and Liabilities: Incoming partner assumes rights and responsibilities.</li>
            <li> Compliance and Record Update: Update LLP records and comply with regulatory requirements.</li>
          </ul>
        </section>

        <section>
          <h2 style={{ marginBottom: "50px", marginTop: "50px" }}>Implications and Compliance after Partner Change</h2>
          <p>
            Changing partners alters the LLP's structure. The incoming partner assumes rights and responsibilities.
            The LLP must update its records, LLP Agreement, and submit necessary forms to RoC to ensure compliance.
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

export default CPLLP;
