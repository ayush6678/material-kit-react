import React from 'react';
import 'pages/Services/styles.css';
import FormSimple from 'layouts/sections/input-areas/forms/components/FormSimple';
import DefaultNavbar from 'examples/Navbars/DefaultNavbar';
import routes from 'routes';
 import CenteredFooter from 'examples/Footers/CenteredFooter';

function IEC() {
  const documentList = [
    { name: 'Identity Proof' },
    { name: 'Address Proof' },
    { name: 'Bank Certificate' },
    { name: 'Business Details' },
  ];
  const faqList = [
    {
      question: 'Q1: What is an Importer Exporter Code (IEC)?',
      answer: 'A1: IEC is a unique code required by businesses involved in import and export activities. It is issued by the Directorate General of Foreign Trade...'
    },
    {
      question: 'Q2: Why is IEC registration important?',
      answer: 'A2: IEC is mandatory for businesses engaged in import and export activities. It facilitates international trade and provides benefits such as availing export promotions...'
    },
    {
      question: 'Q3: What documents are required for IEC registration?',
      answer: 'A3: Documents such as identity proof, address proof, bank certificate, and business details are required for IEC registration...'
    },
    {
      question: 'Q4: How long does it take to obtain an IEC?',
      answer: 'A4: The processing time for IEC registration varies, but it typically takes around 2 to 3 working days once all the documents are submitted...'
    },
    {
      question: 'Q5: Can individuals apply for IEC?',
      answer: 'A5: Yes, both individuals and businesses can apply for IEC to engage in import and export activities...'
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
          <h1>Importer Exporter Code (IEC) Registration</h1>
          <p className="headline">Unlock international trade opportunities by obtaining your unique Importer Exporter Code</p>
        </header>

        <div className='list'>

          <section className="description-section">
            <h2 style={{ marginBottom: "50px" }}>About IEC Registration</h2>
            <p>
              IEC is a unique code required by businesses engaged in import and export activities. It is issued by the Directorate General of Foreign Trade and is mandatory for international trade.
              IEC facilitates smooth cross-border transactions and provides various benefits to businesses.
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
          <h2 style={{ marginBottom: "50px" }}>Key Benefits of IEC Registration</h2>
          <ul>
            <li> International Trade: IEC is mandatory for businesses engaged in import and export activities.</li>
            <li> Global Recognition: Obtain recognition and authenticity for cross-border transactions.</li>
            <li> Avail Export Promotions: IEC holders can avail various export promotions and incentives provided by the government.</li>
            <li> Smooth Customs Clearance: Facilitate smooth customs clearance for import and export consignments.</li>
            <li> Access to International Markets: Expand business horizons by tapping into global markets for trade.</li>
          </ul>
        </section>

        <section className="registration-process">
          <h2 style={{ marginBottom: "50px", marginTop: "50px" }}>IEC Registration Process</h2>
          <ul>
            <li> Gather Documents: Collect necessary documents such as identity proof, address proof, bank certificate, and business details.</li>
            <li> Online Application: Apply for IEC registration through the government's online portal or consult professionals for assistance.</li>
            <li> Document Upload: Upload the required documents and fill in the necessary details in the registration form.</li>
            <li> Verification: Await verification and approval from the authorities, ensuring accurate and complete information.</li>
            <li> IEC Certificate: Receive the IEC certificate upon successful approval.</li>
          </ul>
        </section>

        <section>
          <h2 style={{ marginBottom: "50px", marginTop: "50px" }}>Individual and Business Eligibility</h2>
          <p>
            Both individuals and businesses can apply for IEC to engage in import and export activities and access international trade opportunities.
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

export default IEC;
