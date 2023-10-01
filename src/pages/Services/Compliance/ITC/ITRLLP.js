import React from 'react';
import 'pages/Services/styles.css';
import FormSimple from 'layouts/sections/input-areas/forms/components/FormSimple';
import DefaultNavbar from 'examples/Navbars/DefaultNavbar';
import routes from 'routes';
 import CenteredFooter from 'examples/Footers/CenteredFooter';

function ITRLLP() {
  const documentList = [
    { name: 'Financial Statements' },
    { name: 'Income and Expenditure Details' },
    { name: 'Tax Deduction Documents' },
    { name: 'Company/LLP PAN Card' },
  ];
  const faqList = [
    {
      question: 'Q1: What is the process for filing Income Tax Return (ITR) for Companies and LLPs?',
      answer: 'A1: Companies and LLPs need to file ITR by reporting their financial statements, income and expenditure details, and complying with tax regulations...'
    },
    {
      question: 'Q2: When should the ITR be filed?',
      answer: 'A2: ITR should be filed within the specified deadline after the end of the financial year, usually by September 30th for companies and July 31st for LLPs...'
    },
    {
      question: 'Q3: What documents are required for filing ITR for companies and LLPs?',
      answer: 'A3: Documents such as financial statements, income and expenditure details, tax deduction documents, and company/LLP PAN card...'
    },
    {
      question: 'Q4: Are there any specific tax provisions for companies and LLPs?',
      answer: 'A4: Yes, companies and LLPs are subject to specific tax provisions, rates, deductions, and compliance requirements...'
    },
    {
      question: 'Q5: Can companies and LLPs carry forward losses?',
      answer: 'A5: Yes, companies and LLPs can carry forward losses to offset against future profits, subject to certain conditions and regulations...'
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
          <h1>Income Tax Return (ITR) for Companies and LLPs</h1>
          <p className="headline">File your ITR accurately to comply with tax regulations and report your financial details and income</p>
        </header>

        <div className='list'>

          <section className="description-section">
            <h2 style={{ marginBottom: "50px" }}>About ITR Filing for Companies and LLPs</h2>
            <p>
              ITR filing for companies and LLPs involves reporting your financial statements, income and expenditure details, and complying with tax regulations.
              Accurate filing ensures compliance with tax laws and provisions for corporate entities.
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
          <h2 style={{ marginBottom: "50px" }}>Key Importance of ITR Filing for Companies and LLPs</h2>
          <ul>
            <li> Corporate Tax Compliance: Filing ITR ensures compliance with corporate tax laws and provisions for companies and LLPs.</li>
            <li> Financial Transparency: Accurately report financial statements and income to maintain transparency and accountability.</li>
            <li> Tax Planning: Proper ITR filing allows for strategic tax planning, deductions, and benefits for corporate entities.</li>
            <li> Loss Carry Forward: Companies and LLPs can carry forward losses to offset against future profits, subject to regulations.</li>
            <li> Legal Requirement: Filing ITR is a legal requirement for corporate entities to fulfill their tax obligations.</li>
          </ul>
        </section>

        <section className="itr-filing-process">
          <h2 style={{ marginBottom: "50px", marginTop: "50px" }}>ITR Filing Process for Companies and LLPs</h2>
          <ul>
            <li> Gather Documents: Collect necessary documents such as financial statements, income and expenditure details, tax deduction documents, and company/LLP PAN card.</li>
            <li> Financial Statement Preparation: Prepare accurate financial statements and calculate income as per applicable tax provisions.</li>
            <li> Online Filing: Use an online ITR filing platform or consult a professional to accurately file your ITR for your company or LLP.</li>
            <li> Document Upload: Upload the required documents and fill in the necessary details in the ITR form.</li>
            <li> Verification: Verify the information provided before submitting the ITR form.</li>
          </ul>
        </section>

        <section>
          <h2 style={{ marginBottom: "50px", marginTop: "50px" }}>Specific Tax Provisions for Companies and LLPs</h2>
          <p>
            Companies and LLPs are subject to specific tax provisions, rates, deductions, and compliance requirements as outlined by the Income Tax Act.
            Understanding these provisions ensures accurate tax calculation and compliance.
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

export default ITRLLP;
