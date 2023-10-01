import React from 'react';
import 'pages/Services/styles.css';
import FormSimple from 'layouts/sections/input-areas/forms/components/FormSimple';
import DefaultNavbar from 'examples/Navbars/DefaultNavbar';
import routes from 'routes';
 import CenteredFooter from 'examples/Footers/CenteredFooter';

function GSTR() {
  const documentList = [
    { name: 'PAN Card Copy' },
    { name: 'Aadhaar Card Copy' },
    { name: 'Proof of Business Address' },
    { name: 'Bank Account Details' },
  ];
  const faqList = [
    {
      question: 'Q1: What is Goods and Service Tax (GST) Registration?',
      answer: 'A1: GST Registration is the process of obtaining a unique GSTIN (Goods and Services Tax Identification Number)...'
    },
    {
      question: 'Q2: When is GST Registration required?',
      answer: 'A2: Businesses exceeding the specified turnover limit must register for GST within the stipulated time frame...'
    },
    {
      question: 'Q3: What documents are required for GST Registration?',
      answer: 'A3: Documents such as PAN card copy, Aadhaar card copy, proof of address, and bank account details...'
    },
    {
      question: 'Q4: Are there any consequences of not obtaining GST Registration?',
      answer: 'A4: Operating without GST Registration can lead to penalties, legal actions, and non-eligibility for input tax credit...'
    },
    {
      question: 'Q5: Can businesses with turnover below the threshold voluntarily register for GST?',
      answer: 'A5: Yes, businesses below the threshold can opt for voluntary GST Registration to avail of input tax credit benefits...'
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
          <h1>Goods and Service Tax (GST) Registration</h1>
          <p className="headline">Obtain your unique GSTIN and comply with GST regulations</p>
        </header>

        <div className='list'>

          <section className="description-section">
            <h2 style={{ marginBottom: "50px" }}>About GST Registration</h2>
            <p>
              GST Registration is the process of obtaining a unique GSTIN (Goods and Services Tax Identification Number).
              It is mandatory for businesses meeting the specified turnover threshold and provides various benefits like input tax credit.
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
          <h2 style={{ marginBottom: "50px" }}>Key Importance of GST Registration</h2>
          <ul>
            <li> Legal Requirement: Businesses exceeding the turnover threshold must register for GST as per the law.</li>
            <li> Input Tax Credit: GST-registered businesses can claim input tax credit on eligible purchases.</li>
            <li> Compliance with Law: Registration ensures compliance with GST regulations and reporting.</li>
            <li> Inter-State Transactions: GST Registration is required for businesses engaged in inter-state trade.</li>
            <li> Business Credibility: GSTIN enhances the credibility of the business among suppliers and customers.</li>
          </ul>
        </section>

        <section className="gst-registration-process">
          <h2 style={{ marginBottom: "50px", marginTop: "50px" }}>GST Registration Process</h2>
          <ul>
            <li> Document Preparation: Gather required documents like PAN card copy, Aadhaar card copy, proof of address, and bank details.</li>
            <li> Form Submission: Fill and submit the GST registration application form online with accurate details.</li>
            <li> Verification: The authorities verify the application and documents provided.</li>
            <li> GSTIN Allocation: Upon successful verification, a unique GSTIN is allocated to the business.</li>
            <li> Compliance: Registered businesses must comply with GST rules, reporting, and tax payments.</li>
          </ul>
        </section>

        <section>
          <h2 style={{ marginBottom: "50px", marginTop: "50px" }}>Consequences of Non-Registration</h2>
          <p>
            Operating without obtaining GST Registration can result in penalties, legal actions, and non-eligibility for input tax credit.
            Non-compliance with GST regulations may lead to disruptions in business operations.
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

export default GSTR;
