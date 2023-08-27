import React from 'react';
import 'pages/Services/styles.css';
import FormSimple from 'layouts/sections/input-areas/forms/components/FormSimple';
import DefaultNavbar from 'examples/Navbars/DefaultNavbar';
import routes from 'routes';
import DescriptionIcon from '@mui/icons-material/Description';
import CenteredFooter from 'examples/Footers/CenteredFooter';

function DC() {
  const documentList = [
    { name: 'Board Resolution' },
    { name: 'Financial Statements' },
    { name: 'Director\'s Statement' },
    { name: 'Auditor\'s Statement' },
  ];
  const faqList = [
    {
      question: 'Q1: What is the process for making a company dormant and applying for inactive status?',
      answer: 'A1: The process involves obtaining board approval, preparing financial statements and other required documents...'
    },
    {
      question: 'Q2: How long does it take to apply for inactive status for a dormant company?',
      answer: 'A2: The duration varies due to documentation, approvals required, and processing time by RoC...'
    },
    {
      question: 'Q3: Can any company apply for dormant status?',
      answer: 'A3: Eligibility criteria must be met, such as no significant accounting transactions in the preceding two years...'
    },
    {
      question: 'Q4: What are the implications of inactive status for a dormant company?',
      answer: 'A4: While inactive, the company has reduced compliance requirements and lower regulatory obligations...'
    },
    {
      question: 'Q5: Can a dormant company become active again?',
      answer: 'A5: Yes, a dormant company can apply to become an active company by fulfilling the necessary conditions...'
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
          <h1>Dormant Company (Applying for Inactive Status)</h1>
          <p className="headline">Temporarily reduce compliance requirements for an inactive company</p>
        </header>

        <div className='list'>

          <section className="description-section">
            <h2 style={{ marginBottom: "50px" }}>About Dormant Company Status</h2>
            <p>
              Making a company dormant and applying for inactive status involves obtaining board approval,
              preparing financial statements, and other required documents. This process allows companies with
              no significant transactions to reduce their compliance requirements temporarily.
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
                <DescriptionIcon fontSize='large'/>
                <p>{document.name}</p>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 style={{ marginBottom: "50px" }}>Key Importance of Dormant Company Status</h2>
          <ul>
            <li> Compliance Reduction: Dormant status reduces compliance requirements for companies with no significant transactions.</li>
            <li> Regulatory Relief: The process adheres to regulatory guidelines for obtaining inactive status.</li>
            <li> Eligibility Criteria: Companies meeting eligibility criteria can apply for dormant status.</li>
            <li> Lower Obligations: While inactive, the company has reduced obligations and lower regulatory requirements.</li>
            <li> Temporary Status: Dormant status can be reversed when the company becomes active again.</li>
          </ul>
        </section>

        <section className="dormant-process">
          <h2 style={{ marginBottom: "50px", marginTop: "50px" }}>Dormant Company Status Process</h2>
          <ul>
            <li> Board Resolution: Obtain board approval for applying for dormant status.</li>
            <li> Financial Statements: Prepare financial statements showing no significant transactions in the last two years.</li>
            <li> Director's Statement: Obtain a statement from directors declaring the company's dormant status.</li>
            <li> Auditor's Statement: Obtain a statement from auditors confirming the company's dormant status.</li>
            <li> Application Submission: Submit an application with required documents to the Registrar of Companies.</li>
            <li> RoC Approval: RoC reviews the application and grants inactive status if all requirements are met.</li>
          </ul>
        </section>

        <section>
          <h2 style={{ marginBottom: "50px", marginTop: "50px" }}>Implications of Dormant Status and Reactivation</h2>
          <p>
            While in dormant status, the company enjoys reduced compliance requirements. Reactivation involves fulfilling
            necessary conditions and updating records. Dormant companies can become active again by resuming operations.
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

export default DC;
