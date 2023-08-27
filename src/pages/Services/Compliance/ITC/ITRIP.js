import React from 'react';
import 'pages/Services/styles.css';
import FormSimple from 'layouts/sections/input-areas/forms/components/FormSimple';
import DefaultNavbar from 'examples/Navbars/DefaultNavbar';
import routes from 'routes';
import DescriptionIcon from '@mui/icons-material/Description';
import CenteredFooter from 'examples/Footers/CenteredFooter';

function ITRIP() {
  const documentList = [
    { name: 'Business Income Records' },
    { name: 'Presumptive Income Calculation' },
    { name: 'Bank Statements' },
    { name: 'Aadhar Card and PAN Card' },
  ];
  const faqList = [
    {
      question: 'Q1: What is the process for filing Income Tax Return (ITR) with income under Presumptive Taxation Scheme?',
      answer: 'A1: Individuals with income under the Presumptive Taxation Scheme need to file ITR by reporting the presumptive income and related business income records...'
    },
    {
      question: 'Q2: When should the ITR be filed?',
      answer: 'A2: ITR should be filed within the specified deadline after the end of the financial year, usually by July 31st...'
    },
    {
      question: 'Q3: What documents are required for filing ITR under the Presumptive Taxation Scheme?',
      answer: 'A3: Documents such as business income records, presumptive income calculation, bank statements, Aadhar card, and PAN card...'
    },
    {
      question: 'Q4: What are the benefits of the Presumptive Taxation Scheme?',
      answer: 'A4: The scheme offers simplified tax calculation, reduced record-keeping, and lower compliance requirements for eligible businesses...'
    },
    {
      question: 'Q5: Who can opt for the Presumptive Taxation Scheme?',
      answer: 'A5: Small businesses, professionals, and eligible taxpayers with a total turnover or gross receipts within the specified limit can opt for the scheme...'
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
          <h1>Income Tax Return (ITR) with Income under Presumptive Taxation Scheme</h1>
          <p className="headline">File your ITR accurately and efficiently by reporting your presumptive income and complying with the scheme's requirements</p>
        </header>

        <div className='list'>

          <section className="description-section">
            <h2 style={{ marginBottom: "50px" }}>About ITR Filing with Presumptive Taxation Scheme</h2>
            <p>
              ITR filing with income under the Presumptive Taxation Scheme involves reporting your presumptive income and related business income records.
              Filing under this scheme offers simplified tax calculation and compliance for eligible taxpayers.
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
          <h2 style={{ marginBottom: "50px" }}>Key Importance of ITR Filing under Presumptive Taxation Scheme</h2>
          <ul>
            <li> Simplified Taxation: The scheme offers simplified tax calculation and compliance requirements for eligible businesses.</li>
            <li> Reduced Record-Keeping: Presumptive taxation reduces the need for extensive record-keeping and documentation.</li>
            <li> Efficient Tax Filing: File ITR efficiently by reporting the presumptive income and complying with scheme requirements.</li>
            <li> Lower Compliance Burden: Eligible taxpayers experience a lower compliance burden with the scheme's provisions.</li>
            <li> Tax Savings: Proper utilization of the scheme's benefits can lead to potential tax savings.</li>
          </ul>
        </section>

        <section className="itr-filing-process">
          <h2 style={{ marginBottom: "50px", marginTop: "50px" }}>ITR Filing Process under Presumptive Taxation Scheme</h2>
          <ul>
            <li> Gather Documents: Collect necessary documents such as business income records, presumptive income calculation, bank statements, Aadhar card, and PAN card.</li>
            <li> Presumptive Income Calculation: Calculate your presumptive income as per the scheme's provisions and applicable tax rates.</li>
            <li> Online Filing: Use an online ITR filing platform or consult a professional to accurately file your ITR under the scheme.</li>
            <li> Document Upload: Upload the required documents and fill in the necessary details in the ITR form.</li>
            <li> Verification: Verify the information provided before submitting the ITR form.</li>
          </ul>
        </section>

        <section>
          <h2 style={{ marginBottom: "50px", marginTop: "50px" }}>Benefits of the Presumptive Taxation Scheme</h2>
          <p>
            The Presumptive Taxation Scheme offers benefits such as reduced tax liability, simplified compliance, and lower record-keeping requirements.
            Understanding these benefits helps eligible taxpayers make informed decisions.
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

export default ITRIP;
