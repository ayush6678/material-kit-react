import React from 'react';
import 'pages/Services/styles.css';
import FormSimple from 'layouts/sections/input-areas/forms/components/FormSimple';
import DefaultNavbar from 'examples/Navbars/DefaultNavbar';
import routes from 'routes';
 import CenteredFooter from 'examples/Footers/CenteredFooter';

function UUMR() {
  const documentList = [
    { name: 'Business Details' },
    { name: 'Aadhaar Card Details' },
    { name: 'Bank Account Information' },
    { name: 'Relevant Licenses and Certificates' },
  ];
  const faqList = [
    {
      question: 'Q1: What is the process of MSME (Micro, Small and Medium Enterprises) Registration?',
      answer: 'A1: MSME registration involves registering your business under the Micro, Small, and Medium Enterprises category to avail benefits and incentives...'
    },
    {
      question: 'Q2: Why is MSME registration important?',
      answer: 'A2: MSME registration provides various benefits such as access to government schemes, credit facilities, subsidies, and market exposure...'
    },
    {
      question: 'Q3: What documents are required for MSME registration?',
      answer: 'A3: Documents such as business details, Aadhaar card details, bank account information, and relevant licenses and certificates...'
    },
    {
      question: 'Q4: Can existing businesses apply for MSME registration?',
      answer: 'A4: Yes, both existing and new businesses can apply for MSME registration to avail of the associated benefits...'
    },
    {
      question: 'Q5: Is MSME registration mandatory?',
      answer: 'A5: MSME registration is not mandatory, but it is highly recommended for businesses looking to avail benefits and incentives...'
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
          <h1>MSME (Micro, Small and Medium Enterprises) Registration</h1>
          <p className="headline">Unlock benefits and incentives for your business by registering under the MSME category</p>
        </header>

        <div className='list'>

          <section className="description-section">
            <h2 style={{ marginBottom: "50px" }}>About MSME Registration</h2>
            <p>
              MSME registration involves registering your business under the Micro, Small, and Medium Enterprises category to avail benefits and incentives offered by the government.
              Registration provides recognition and facilitates growth opportunities for your business.
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
          <h2 style={{ marginBottom: "50px" }}>Key Benefits of MSME Registration</h2>
          <ul>
            <li> Access to Government Schemes: Avail benefits, subsidies, and incentives provided by various government schemes for MSMEs.</li>
            <li> Credit Facilities: Get easier access to credit facilities, loans, and financing options for business expansion.</li>
            <li> Market Exposure: Gain visibility and market opportunities through participation in trade fairs, exhibitions, and networking events.</li>
            <li> Protection of Interest: Receive assistance in handling delayed payments and disputes through the MSME Facilitation Council.</li>
            <li> Statutory Benefits: Enjoy benefits related to tax, patent registration, and exemption from certain regulations.</li>
          </ul>
        </section>

        <section className="registration-process">
          <h2 style={{ marginBottom: "50px", marginTop: "50px" }}>MSME Registration Process</h2>
          <ul>
            <li> Gather Documents: Collect necessary documents such as business details, Aadhaar card details, bank account information, and relevant licenses and certificates.</li>
            <li> Online Application: Apply for MSME registration through the government's online portal or consult professionals for assistance.</li>
            <li> Document Upload: Upload the required documents and fill in the necessary details in the registration form.</li>
            <li> Verification: Await verification and approval from the authorities, ensuring accurate and complete information.</li>
            <li> MSME Certificate: Receive the MSME registration certificate upon successful approval.</li>
          </ul>
        </section>

        <section>
          <h2 style={{ marginBottom: "50px", marginTop: "50px" }}>Applicability and Benefits for Existing Businesses</h2>
          <p>
            Both existing and new businesses can apply for MSME registration to avail the associated benefits, enhance credibility, and unlock growth opportunities.
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

export default UUMR;
