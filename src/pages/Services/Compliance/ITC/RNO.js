import React from 'react';
import 'pages/Services/styles.css';
import FormSimple from 'layouts/sections/input-areas/forms/components/FormSimple';
import DefaultNavbar from 'examples/Navbars/DefaultNavbar';
import routes from 'routes';
 import CenteredFooter from 'examples/Footers/CenteredFooter';

function RNO() {
  const documentList = [
    { name: 'Notice/Order Document' },
    { name: 'Relevant Financial Records' },
    { name: 'Legal and Compliance Documents' },
    { name: 'Correspondence Details' },
  ];
  const faqList = [
    {
      question: 'Q1: How to respond to notices and orders from tax authorities or regulatory bodies?',
      answer: 'A1: Responding to notices/orders involves providing a proper and timely response with relevant documents and explanations...'
    },
    {
      question: 'Q2: What are the consequences of not responding to a notice/order?',
      answer: 'A2: Not responding or delaying responses to notices/orders can lead to penalties, legal actions, and adverse consequences...'
    },
    {
      question: 'Q3: What documents are required for responding to notices/orders?',
      answer: 'A3: Documents such as the notice/order document, relevant financial records, legal and compliance documents, and correspondence details...'
    },
    {
      question: 'Q4: Can professionals assist in responding to notices/orders?',
      answer: 'A4: Yes, consulting professionals such as legal experts or tax consultants can help in preparing an appropriate response...'
    },
    {
      question: 'Q5: Can responses be appealed if disputed?',
      answer: 'A5: Yes, if you disagree with the outcome of your response, you can appeal through the designated legal channels...'
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
          <h1>Responding to Notices/Orders</h1>
          <p className="headline">Ensure compliance and address legal and regulatory matters with proper responses</p>
        </header>

        <div className='list'>

          <section className="description-section">
            <h2 style={{ marginBottom: "50px" }}>About Responding to Notices/Orders</h2>
            <p>
              Responding to notices/orders involves addressing legal or regulatory matters by providing appropriate responses with relevant documents and explanations.
              Timely and accurate responses help resolve issues, avoid penalties, and maintain compliance.
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
          <h2 style={{ marginBottom: "50px" }}>Key Importance of Responding to Notices/Orders</h2>
          <ul>
            <li> Legal Compliance: Proper responses ensure compliance with legal and regulatory requirements.</li>
            <li> Avoid Penalties: Timely responses help avoid penalties and legal actions associated with non-compliance.</li>
            <li> Resolution of Issues: Addressing notices/orders promptly helps resolve issues and disputes efficiently.</li>
            <li> Documentation: Maintain proper documentation of responses and communications for future reference.</li>
            <li> Legal Protection: Proper responses protect your rights and interests in legal and regulatory matters.</li>
          </ul>
        </section>

        <section className="responding-process">
          <h2 style={{ marginBottom: "50px", marginTop: "50px" }}>Responding to Notices/Orders Process</h2>
          <ul>
            <li> Review Notice/Order: Understand the content and context of the notice or order received from tax authorities or regulatory bodies.</li>
            <li> Document Collection: Collect relevant documents such as the notice/order document, financial records, legal and compliance documents, and correspondence details.</li>
            <li> Prepare Response: Prepare a clear and accurate response with explanations, clarifications, and necessary supporting documents.</li>
            <li> Professional Consultation: Consult legal experts or tax consultants to ensure an appropriate response if needed.</li>
            <li> Timely Submission: Submit the response within the specified timeframe to the designated authority.</li>
          </ul>
        </section>

        <section>
          <h2 style={{ marginBottom: "50px", marginTop: "50px" }}>Appeals and Further Actions</h2>
          <p>
            If you disagree with the outcome of your response, you can appeal through designated legal channels or take further actions as advised by professionals.
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

export default RNO;
