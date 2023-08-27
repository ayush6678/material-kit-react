import React from 'react';
import 'pages/Services/styles.css';
import FormSimple from 'layouts/sections/input-areas/forms/components/FormSimple';
import DefaultNavbar from 'examples/Navbars/DefaultNavbar';
import routes from 'routes';
import DescriptionIcon from '@mui/icons-material/Description';
import CenteredFooter from 'examples/Footers/CenteredFooter';

function ITRBI() {
  const documentList = [
    { name: 'Profit and Loss Statement' },
    { name: 'Business Expense Records' },
    { name: 'Tax Deduction Documents' },
    { name: 'Aadhar Card and PAN Card' },
  ];
  const faqList = [
    {
      question: 'Q1: What is the process for filing Income Tax Return (ITR) for Individuals with Business Income?',
      answer: 'A1: Individuals with business income need to file ITR by reporting their profit and loss statement, business expense records, and complying with tax regulations...'
    },
    {
      question: 'Q2: When should the ITR be filed?',
      answer: 'A2: ITR should be filed within the specified deadline after the end of the financial year, usually by July 31st...'
    },
    {
      question: 'Q3: What documents are required for filing ITR for individuals with business income?',
      answer: 'A3: Documents such as profit and loss statement, business expense records, tax deduction documents, Aadhar card, and PAN card...'
    },
    {
      question: 'Q4: Are there any specific tax provisions for individuals with business income?',
      answer: 'A4: Yes, individuals with business income need to comply with specific tax provisions, deductions, and reporting requirements...'
    },
    {
      question: 'Q5: Can individuals claim business-related deductions?',
      answer: 'A5: Yes, individuals can claim business-related deductions for expenses incurred in earning business income...'
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
          <h1>Income Tax Return (ITR) for Individuals with Business Income</h1>
          <p className="headline">File your ITR accurately to comply with tax regulations and report your business income and expenses</p>
        </header>

        <div className='list'>

          <section className="description-section">
            <h2 style={{ marginBottom: "50px" }}>About ITR Filing for Individuals with Business Income</h2>
            <p>
              ITR filing for individuals with business income involves reporting your profit and loss statement, business expense records, and complying with tax regulations.
              Accurate filing ensures proper taxation of business income and deductions for related expenses.
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
          <h2 style={{ marginBottom: "50px" }}>Key Importance of ITR Filing for Individuals with Business Income</h2>
          <ul>
            <li> Business Income Compliance: Filing ITR ensures compliance with tax laws and provisions for individuals with business income.</li>
            <li> Expense Deductions: Proper reporting of business expense records allows individuals to claim deductions for related expenses.</li>
            <li> Tax Planning: Strategic ITR filing helps individuals plan their taxes by optimizing deductions and benefits.</li>
            <li> Loss Utilization: Individuals can offset business losses against other income sources, subject to regulations.</li>
            <li> Financial Record: ITR serves as a financial record and proof of tax compliance for business income.</li>
          </ul>
        </section>

        <section className="itr-filing-process">
          <h2 style={{ marginBottom: "50px", marginTop: "50px" }}>ITR Filing Process for Individuals with Business Income</h2>
          <ul>
            <li> Gather Documents: Collect necessary documents such as profit and loss statement, business expense records, tax deduction documents, Aadhar card, and PAN card.</li>
            <li> Income and Expense Calculation: Calculate business income, deductions, and net profit as per applicable tax provisions.</li>
            <li> Online Filing: Use an online ITR filing platform or consult a professional to accurately file your ITR for business income.</li>
            <li> Document Upload: Upload the required documents and fill in the necessary details in the ITR form.</li>
            <li> Verification: Verify the information provided before submitting the ITR form.</li>
          </ul>
        </section>

        <section>
          <h2 style={{ marginBottom: "50px", marginTop: "50px" }}>Specific Tax Provisions for Individuals with Business Income</h2>
          <p>
            Individuals with business income need to comply with specific tax provisions, deductions, and reporting requirements as outlined by the Income Tax Act.
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

export default ITRBI;
