import React from 'react';
import 'pages/Services/styles.css';
import FormSimple from 'layouts/sections/input-areas/forms/components/FormSimple';
import DefaultNavbar from 'examples/Navbars/DefaultNavbar';
import routes from 'routes';
import DescriptionIcon from '@mui/icons-material/Description';
import CenteredFooter from 'examples/Footers/CenteredFooter';

function ITRCGI() {
  const documentList = [
    { name: 'Form 16 - Salary Certificate' },
    { name: 'Capital Gain Statements' },
    { name: 'Investment Proofs' },
    { name: 'Aadhar Card and PAN Card' },
  ];
  const faqList = [
    {
      question: 'Q1: What is the process for filing Income Tax Return (ITR) with Capital Gain Income?',
      answer: 'A1: Individuals with capital gain income need to file ITR by reporting both their regular income and capital gains for the financial year...'
    },
    {
      question: 'Q2: When should the ITR be filed?',
      answer: 'A2: ITR should be filed within the specified deadline after the end of the financial year, usually by July 31st...'
    },
    {
      question: 'Q3: What documents are required for filing ITR with capital gain income?',
      answer: 'A3: Documents such as Form 16 (salary certificate), capital gain statements, investment proofs, Aadhar card, and PAN card...'
    },
    {
      question: 'Q4: Are there any specific rules for capital gain taxation?',
      answer: 'A4: Yes, capital gain income is subject to specific tax rules and rates based on the type of gain (short-term or long-term) and assets...'
    },
    {
      question: 'Q5: Can tax-saving investments offset capital gains tax?',
      answer: 'A5: Yes, certain tax-saving investments like Section 80C deductions can help offset capital gains tax liability...'
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
          <h1>Income Tax Return (ITR) with Capital Gain Income</h1>
          <p className="headline">File your ITR accurately to comply with tax regulations and report both regular income and capital gains</p>
        </header>

        <div className='list'>

          <section className="description-section">
            <h2 style={{ marginBottom: "50px" }}>About ITR Filing with Capital Gain Income</h2>
            <p>
              ITR filing with capital gain income involves reporting not only your regular income but also any capital gains for the financial year.
              Properly reporting capital gains ensures accurate tax calculation and compliance with tax regulations.
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
          <h2 style={{ marginBottom: "50px" }}>Key Importance of ITR Filing with Capital Gain Income</h2>
          <ul>
            <li> Accurate Tax Calculation: Proper reporting of capital gains ensures accurate tax calculation and compliance.</li>
            <li> Tax Benefits Utilization: File ITR to utilize deductions and exemptions available for both regular income and capital gains.</li>
            <li> Capital Gain Types: Report short-term and long-term capital gains as per specific tax rules for different assets.</li>
            <li> Offset Tax Liability: Use tax-saving investments to offset capital gains tax liability and reduce overall tax burden.</li>
            <li> Financial Record: ITR serves as a financial record and proof of tax compliance for capital gain transactions.</li>
          </ul>
        </section>

        <section className="itr-filing-process">
          <h2 style={{ marginBottom: "50px", marginTop: "50px" }}>ITR Filing Process with Capital Gain Income</h2>
          <ul>
            <li> Gather Documents: Collect necessary documents such as Form 16, capital gain statements, investment proofs, Aadhar card, and PAN card.</li>
            <li> Capital Gain Calculation: Calculate both short-term and long-term capital gains based on asset type and holding period.</li>
            <li> Online Filing: Use an online ITR filing platform or consult a professional to accurately file your ITR.</li>
            <li> Document Upload: Upload the required documents and fill in the necessary details in the ITR form.</li>
            <li> Verification: Verify the information provided before submitting the ITR form.</li>
          </ul>
        </section>

        <section>
          <h2 style={{ marginBottom: "50px", marginTop: "50px" }}>Specific Rules for Capital Gain Taxation</h2>
          <p>
            Capital gain income is subject to specific tax rules and rates based on the type of gain (short-term or long-term) and assets involved.
            Understanding these rules helps in accurate tax calculation and compliance.
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

export default ITRCGI;
