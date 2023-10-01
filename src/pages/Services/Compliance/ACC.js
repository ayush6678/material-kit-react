import React from 'react';
import 'pages/Services/styles.css';
import FormSimple from 'layouts/sections/input-areas/forms/components/FormSimple';
import DefaultNavbar from 'examples/Navbars/DefaultNavbar';
import routes from 'routes';
 import CenteredFooter from 'examples/Footers/CenteredFooter';

function AnnualCompanyCompliance() {
  const documentList = [
    { name: 'Financial Statements' },
    { name: 'Annual Return' },
    { name: 'Income Tax Return' },
    { name: 'Board Meeting Minutes' },
  ];
  const faqList = [
    {
      question: 'Q1: What is Annual Company Compliance?',
      answer: 'A1: Annual Company Compliance refers to fulfilling legal obligations...'
    },
    {
      question: 'Q2: When is the deadline for Annual Company Compliance?',
      answer: 'A2: The deadline varies by jurisdiction and the company\'s financial year...'
    },
    {
      question: 'Q3: What happens if a company fails to comply with annual requirements?',
      answer: 'A3: Non-compliance can lead to penalties, legal actions, and reputational damage...'
    },
    {
      question: 'Q4: Are there any exemptions from Annual Company Compliance?',
      answer: 'A4: Exemptions can apply to certain types of companies or based on financial thresholds...'
    },
    {
      question: 'Q5: How often does a company need to hold board meetings?',
      answer: 'A5: Companies are typically required to hold board meetings at regular intervals...'
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
          <h1>Annual Company Compliance (Comprehensive)</h1>
          <p className="headline">Ensure legal adherence and corporate governance</p>
        </header>

        <div className='list'>

          <section className="description-section">
            <h2 style={{ marginBottom: "50px" }}>About Annual Company Compliance</h2>
            <p>
              Annual Company Compliance involves fulfilling legal and regulatory requirements to maintain good corporate governance.
              It includes submitting financial statements, annual returns, and tax returns, along with holding board meetings and
              documenting decisions. Compliance ensures transparency, accountability, and adherence to company laws.
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
          <h2 style={{ marginBottom: "50px" }}>Key Importance of Annual Company Compliance</h2>
          <ul>
            <li> Legal Adherence: Compliance ensures that the company operates within legal boundaries.</li>
            <li> Corporate Governance: Adhering to compliance standards improves transparency and accountability.</li>
            <li> Financial Accuracy: Submission of financial documents provides an accurate view of the company's finances.</li>
            <li> Avoiding Penalties: Compliance helps avoid penalties and legal actions due to non-compliance.</li>
            <li> Reputation Management: Compliant companies build a positive reputation among stakeholders.</li>
          </ul>
        </section>

        <section className="compliance-process">
          <h2 style={{ marginBottom: "50px", marginTop: "50px" }}>Compliance Process</h2>
          <ul>
            <li> Financial Statements: Prepare accurate financial statements, including balance sheets and profit and loss statements.</li>
            <li> Annual Return: File the annual return with the relevant regulatory authority.</li>
            <li> Tax Return: Submit the company's income tax return along with supporting documents.</li>
            <li> Board Meetings: Hold regular board meetings and document meeting minutes.</li>
            <li> Statutory Registers: Maintain and update statutory registers as required by company law.</li>
          </ul>
        </section>

        <section>
          <h2 style={{ marginBottom: "50px", marginTop: "50px" }}>Consequences of Non-Compliance</h2>
          <p>
            Failure to comply with annual requirements can lead to financial penalties, legal actions, and the potential
            disqualification of directors. It can also damage the company's reputation and hinder its ability to do business.
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

export default AnnualCompanyCompliance;
