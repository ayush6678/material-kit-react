import React from 'react';
import 'pages/Services/styles.css';
import FormSimple from 'layouts/sections/input-areas/forms/components/FormSimple';
import DefaultNavbar from 'examples/Navbars/DefaultNavbar';
import routes from 'routes';
 import CenteredFooter from 'examples/Footers/CenteredFooter';

function FTDS() {
  const documentList = [
    { name: 'TDS Deduction Records' },
    { name: 'PAN Card Details' },
    { name: 'Tax Payment Receipts' },
    { name: 'Employee Details' },
  ];
  const faqList = [
    {
      question: 'Q1: What is the process for filing TDS Returns?',
      answer: 'A1: TDS Returns need to be filed by deductors to report the tax deducted at source on payments made to individuals and entities...'
    },
    {
      question: 'Q2: When should TDS Returns be filed?',
      answer: 'A2: TDS Returns should be filed on a quarterly basis, with specific due dates for each quarter...'
    },
    {
      question: 'Q3: What documents are required for filing TDS Returns?',
      answer: 'A3: Documents such as TDS deduction records, PAN card details of deductees, tax payment receipts, and employee details...'
    },
    {
      question: 'Q4: Are there penalties for late filing of TDS Returns?',
      answer: 'A4: Yes, late filing of TDS Returns can result in penalties, interest, and disallowance of TDS claims...'
    },
    {
      question: 'Q5: Can errors in TDS Returns be rectified?',
      answer: 'A5: Yes, errors in TDS Returns can be rectified by filing revised returns or correcting the errors through the TDS correction mechanism...'
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
          <h1>Filing of TDS Returns</h1>
          <p className="headline">Ensure compliance by reporting TDS deductions accurately and on time</p>
        </header>

        <div className='list'>

          <section className="description-section">
            <h2 style={{ marginBottom: "50px" }}>About TDS Return Filing</h2>
            <p>
              TDS Return filing involves reporting the tax deducted at source on payments made to individuals and entities.
              Accurate and timely filing ensures compliance with tax laws and regulations related to TDS deductions.
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
          <h2 style={{ marginBottom: "50px" }}>Key Importance of TDS Return Filing</h2>
          <ul>
            <li> Tax Deduction Compliance: Filing TDS Returns ensures compliance with tax laws and regulations related to tax deduction at source.</li>
            <li> Accurate Reporting: Accurately report TDS deduction details to avoid penalties and interest for incorrect reporting.</li>
            <li> Employee Records: Properly maintain and report employee details for whom TDS deductions are made.</li>
            <li> Deductee Compliance: Ensure timely and accurate reporting of TDS deductions for the benefit of deductees.</li>
            <li> Tax Collection for Government: TDS Returns contribute to the efficient collection of taxes by the government.</li>
          </ul>
        </section>

        <section className="tds-return-filing-process">
          <h2 style={{ marginBottom: "50px", marginTop: "50px" }}>TDS Return Filing Process</h2>
          <ul>
            <li> Gather Documents: Collect necessary documents such as TDS deduction records, PAN card details of deductees, tax payment receipts, and employee details.</li>
            <li> TDS Calculation: Calculate the tax deducted at source accurately based on applicable rates and rules.</li>
            <li> Online Filing: Use the government's online TDS return filing portal or consult a professional to accurately file your TDS Returns.</li>
            <li> Document Upload: Upload the required documents and fill in the necessary details in the TDS return form.</li>
            <li> Verification: Verify the information provided before submitting the TDS return form.</li>
          </ul>
        </section>

        <section>
          <h2 style={{ marginBottom: "50px", marginTop: "50px" }}>Penalties and Corrections for TDS Returns</h2>
          <p>
            Late filing of TDS Returns can result in penalties, interest, and disallowance of TDS claims. Errors in TDS Returns can be rectified by filing revised returns or correcting errors through the TDS correction mechanism.
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

export default FTDS;
