import React from 'react';
import 'pages/Services/styles.css';
import FormSimple from 'layouts/sections/input-areas/forms/components/FormSimple';
import DefaultNavbar from 'examples/Navbars/DefaultNavbar';
import routes from 'routes';
 import CenteredFooter from 'examples/Footers/CenteredFooter';

function LEI() {
  const documentList = [
    { name: 'Business Details' },
    { name: 'Identity Proof' },
    { name: 'Address Proof' },
    { name: 'Ownership Structure' },
  ];
  const faqList = [
    {
      question: 'Q1: What is a Legal Entity Identification (LEI) Number?',
      answer: 'A1: An LEI number is a unique identifier for legal entities engaging in financial transactions. It enhances transparency and enables better risk management...'
    },
    {
      question: 'Q2: Why is LEI Number important?',
      answer: 'A2: An LEI number is required for participating in financial transactions, reporting to regulatory authorities, and ensuring global regulatory compliance...'
    },
    {
      question: 'Q3: What documents are required for LEI Number Registration?',
      answer: 'A3: Documents such as business details, identity proof, address proof, and ownership structure information are required for registration...'
    },
    {
      question: 'Q4: How long does it take to get an LEI Number?',
      answer: 'A4: The processing time for LEI Number registration varies, but it usually takes around 1 to 5 business days upon successful submission...'
    },
    {
      question: 'Q5: Who needs to apply for an LEI Number?',
      answer: 'A5: Legal entities participating in financial transactions or reporting to regulatory authorities are required to obtain an LEI number...'
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
          <h1>Legal Entity Identification (LEI) Number Registration</h1>
          <p className="headline">Enhance transparency and regulatory compliance by obtaining a unique identifier for your legal entity</p>
        </header>

        <div className='list'>

          <section className="description-section">
            <h2 style={{ marginBottom: "50px" }}>About LEI Number Registration</h2>
            <p>
              A Legal Entity Identification (LEI) Number is a unique identifier assigned to legal entities participating in financial transactions. It enhances transparency, improves risk management, and enables regulators to monitor financial activities.
              Obtaining an LEI number is crucial for regulatory compliance and participating in global financial markets.
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
          <h2 style={{ marginBottom: "50px" }}>Key Benefits of LEI Number Registration</h2>
          <ul>
            <li> Global Identification: LEI number provides a standardized global identification for legal entities.</li>
            <li> Regulatory Compliance: It ensures compliance with reporting requirements to regulatory authorities.</li>
            <li> Risk Management: LEI number enhances transparency and enables better risk assessment.</li>
            <li> Financial Transactions: It's essential for participating in financial transactions and securities trading.</li>
            <li> Business Reputation: An LEI number signifies transparency and reliability in financial dealings.</li>
          </ul>
        </section>

        <section className="registration-process">
          <h2 style={{ marginBottom: "50px", marginTop: "50px" }}>LEI Number Registration Process</h2>
          <ul>
            <li> Gather Documents: Collect necessary documents such as business details, identity proof, address proof, and ownership structure information.</li>
            <li> Application Submission: Apply for an LEI number through authorized service providers or directly with the regulatory body.</li>
            <li> Documentation Review: The application and documents are reviewed for accuracy and completeness.</li>
            <li> Issuance of LEI: Upon successful review, the LEI number is assigned to the legal entity.</li>
          </ul>
        </section>

        <section>
          <h2 style={{ marginBottom: "50px", marginTop: "50px" }}>Applicability to Different Entities</h2>
          <p>
            Legal entities participating in financial transactions, securities trading, and reporting to regulatory authorities are required to obtain an LEI number.
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

export default LEI;
