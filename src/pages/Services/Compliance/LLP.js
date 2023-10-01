import React from 'react';
import 'pages/Services/styles.css';
import FormSimple from 'layouts/sections/input-areas/forms/components/FormSimple';
import DefaultNavbar from 'examples/Navbars/DefaultNavbar';
import routes from 'routes';
 import CenteredFooter from 'examples/Footers/CenteredFooter';

function LLP() {
  const documentList = [
    { name: 'Financial Statements' },
    { name: 'Statement of Account and Solvency' },
  ];
  const faqList = [
    {
      question: 'Q1: What is Annual LLP Compliance?',
      answer: 'A1: Annual LLP Compliance involves fulfilling legal requirements...'
    },
    {
      question: 'Q2: When is the deadline for Annual LLP Compliance?',
      answer: 'A2: The deadline varies based on the financial year and jurisdiction of the LLP...'
    },
    {
      question: 'Q3: What are the consequences of non-compliance with annual requirements?',
      answer: 'A3: Non-compliance can result in penalties, legal actions, and removal from the LLP Register...'
    },
    {
      question: 'Q4: Is Annual LLP Compliance necessary for all LLPs?',
      answer: 'A4: Yes, all registered LLPs are required to fulfill annual compliance obligations...'
    },
    {
      question: 'Q5: What is the purpose of filing a Statement of Account and Solvency?',
      answer: 'A5: The statement provides financial information and verifies the LLP\'s solvency position...'
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
          <h1>Annual LLP (Limited Liability Partnership) Compliance</h1>
          <p className="headline">Ensure legal adherence and financial transparency</p>
        </header>

        <div className='list'>

          <section className="description-section">
            <h2 style={{ marginBottom: "50px" }}>About Annual LLP Compliance</h2>
            <p>
              Annual LLP Compliance involves fulfilling legal and financial obligations to maintain the LLP's legal standing.
              This includes submitting financial statements and a statement of account and solvency. Compliance ensures transparency,
              accountability, and adherence to LLP regulations.
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
          <h2 style={{ marginBottom: "50px" }}>Key Importance of Annual LLP Compliance</h2>
          <ul>
            <li> Legal Adherence: Compliance ensures the LLP operates within the legal framework.</li>
            <li> Financial Transparency: Submission of financial documents provides a clear view of the LLP's finances.</li>
            <li> Accountability: Compliance promotes transparency and accountability among LLP partners.</li>
            <li> Avoiding Penalties: Fulfilling obligations on time helps avoid penalties and legal actions.</li>
            <li> Business Reputation: Compliant LLPs build trust and credibility with stakeholders.</li>
          </ul>
        </section>

        <section className="compliance-process">
          <h2 style={{ marginBottom: "50px", marginTop: "50px" }}>Compliance Process</h2>
          <ul>
            <li> Financial Statements: Prepare accurate financial statements, including balance sheets and profit and loss statements.</li>
            <li> Statement of Account and Solvency: File the statement with the relevant regulatory authority.</li>
          </ul>
        </section>

        <section>
          <h2 style={{ marginBottom: "50px", marginTop: "50px" }}>Consequences of Non-Compliance</h2>
          <p>
            Failure to fulfill annual compliance requirements can lead to financial penalties, legal actions,
            and removal from the LLP Register. It can also affect the LLP's reputation and business operations.
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

export default LLP;
