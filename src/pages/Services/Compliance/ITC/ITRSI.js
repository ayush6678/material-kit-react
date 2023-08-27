import React from 'react';
import 'pages/Services/styles.css';
import FormSimple from 'layouts/sections/input-areas/forms/components/FormSimple';
import DefaultNavbar from 'examples/Navbars/DefaultNavbar';
import routes from 'routes';
import DescriptionIcon from '@mui/icons-material/Description';
import CenteredFooter from 'examples/Footers/CenteredFooter';

function ITRSI() {
  const documentList = [
    { name: 'Form 16 - Salary Certificate' },
    { name: 'Bank Statements' },
    { name: 'Investment Proofs' },
    { name: 'Aadhar Card and PAN Card' },
  ];
  const faqList = [
    {
      question: 'Q1: What is the process for filing Income Tax Return (ITR) for Salaried Individuals?',
      answer: 'A1: Salaried individuals need to file ITR by reporting their income, deductions, and investments for the financial year...'
    },
    {
      question: 'Q2: When should the ITR be filed?',
      answer: 'A2: ITR should be filed within the specified deadline after the end of the financial year, usually by July 31st...'
    },
    {
      question: 'Q3: What documents are required for filing ITR for salaried individuals?',
      answer: 'A3: Documents such as Form 16 (salary certificate), bank statements, investment proofs, Aadhar card, and PAN card...'
    },
    {
      question: 'Q4: Are there any consequences of not filing ITR?',
      answer: 'A4: Failure to file ITR may result in penalties, loss of tax benefits, difficulty in obtaining loans, and legal implications...'
    },
    {
      question: 'Q5: Who can assist in filing ITR?',
      answer: 'A5: Qualified professionals, tax consultants, or online platforms can assist salaried individuals in filing accurate ITR...'
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
          <h1>Income Tax Return (ITR) for Salaried Individuals</h1>
          <p className="headline">File your ITR accurately to comply with tax regulations and report your income, deductions, and investments</p>
        </header>

        <div className='list'>

          <section className="description-section">
            <h2 style={{ marginBottom: "50px" }}>About ITR Filing for Salaried Individuals</h2>
            <p>
              ITR filing for salaried individuals involves reporting your income, deductions, and investments for the financial year.
              Accurate filing ensures compliance with tax regulations and helps you claim eligible tax benefits.
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
          <h2 style={{ marginBottom: "50px" }}>Key Importance of ITR Filing</h2>
          <ul>
            <li> Tax Compliance: Filing ITR ensures compliance with tax laws and regulations for salaried individuals.</li>
            <li> Claiming Benefits: Accurate filing allows you to claim deductions, exemptions, and tax-saving benefits.</li>
            <li> Financial Proof: ITR serves as financial proof for various purposes, including obtaining loans and visas.</li>
            <li> Avoid Penalties: Timely filing avoids penalties and legal consequences for non-compliance.</li>
            <li> Accurate Record: ITR provides an accurate record of your income and financial transactions.</li>
          </ul>
        </section>

        <section className="itr-filing-process">
          <h2 style={{ marginBottom: "50px", marginTop: "50px" }}>ITR Filing Process</h2>
          <ul>
            <li> Gather Documents: Collect necessary documents such as Form 16, bank statements, investment proofs, Aadhar card, and PAN card.</li>
            <li> Income Calculation: Calculate your total income, deductions, and tax liability for the financial year.</li>
            <li> Online Filing: Use an online ITR filing platform or consult a professional to file your ITR accurately.</li>
            <li> Document Upload: Upload the required documents and fill in the necessary details in the ITR form.</li>
            <li> Verification: Verify the information provided before submitting the ITR form.</li>
          </ul>
        </section>

        <section>
          <h2 style={{ marginBottom: "50px", marginTop: "50px" }}>Consequences of Non-Filing</h2>
          <p>
            Failure to file ITR may result in penalties, loss of tax benefits, difficulty in obtaining loans, and legal implications.
            It's important to file ITR within the specified deadline to avoid such consequences.
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

export default ITRSI;
