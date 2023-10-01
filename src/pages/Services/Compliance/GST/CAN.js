import React from 'react';
import 'pages/Services/styles.css';
import FormSimple from 'layouts/sections/input-areas/forms/components/FormSimple';
import DefaultNavbar from 'examples/Navbars/DefaultNavbar';
import routes from 'routes';
 import CenteredFooter from 'examples/Footers/CenteredFooter';

function CAN() {
  const documentList = [
    { name: 'Copy of GST Registration Certificate' },
    { name: 'Copy of PAN Card' },
    { name: 'Copy of ID and Address Proof' },
    { name: 'Authorization Letter' },
  ];
  const faqList = [
    {
      question: 'Q1: What is the process for Cancellation of GST Registration?',
      answer: 'A1: GST registration cancellation involves applying for the deregistration of a GSTIN when a business ceases its operations...'
    },
    {
      question: 'Q2: When should the cancellation be applied?',
      answer: 'A2: Cancellation should be applied within 30 days of the business ceasing operations or becoming ineligible for GST registration...'
    },
    {
      question: 'Q3: What documents are required for GST registration cancellation?',
      answer: 'A3: Documents such as copy of GST registration certificate, PAN card, ID and address proof, and authorization letter...'
    },
    {
      question: 'Q4: Are there any consequences of not cancelling GST registration?',
      answer: 'A4: Failure to cancel GST registration may result in continued compliance obligations and liabilities, including filing returns and taxes...'
    },
    {
      question: 'Q5: Who can apply for GST registration cancellation?',
      answer: 'A5: Authorized individuals, such as business owners, directors, or designated representatives, can initiate the cancellation process...'
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
          <h1>Cancellation of GST Registration</h1>
          <p className="headline">Deregister your GSTIN when your business ceases operations or becomes ineligible for GST</p>
        </header>

        <div className='list'>

          <section className="description-section">
            <h2 style={{ marginBottom: "50px" }}>About GST Registration Cancellation</h2>
            <p>
              GST registration cancellation is the process of applying for the deregistration of a GSTIN when a business ceases its operations
              or becomes ineligible for GST. It's essential to cancel registration to avoid ongoing compliance obligations and liabilities.
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
          <h2 style={{ marginBottom: "50px" }}>Key Importance of Cancellation</h2>
          <ul>
            <li> Compliance Relief: Cancellation relieves businesses from ongoing GST compliance obligations and returns filing.</li>
            <li> Avoid Penalties: Cancellation prevents penalties for non-compliance after a business ceases operations or becomes ineligible.</li>
            <li> Legal Clarity: Deregistration provides legal clarity and closure for businesses that are no longer active.</li>
            <li> Tax Savings: Businesses can avoid payment of taxes once they have ceased operations and deregistered from GST.</li>
            <li> Reputational Benefits: Cancellation ensures accurate records and prevents wrongful usage of the GSTIN.</li>
          </ul>
        </section>

        <section className="gst-cancellation-process">
          <h2 style={{ marginBottom: "50px", marginTop: "50px" }}>Cancellation Process</h2>
          <ul>
            <li> Document Preparation: Gather required documents such as GST registration certificate, PAN card, ID and address proof.</li>
            <li> Cancellation Application: Fill the GST registration cancellation form with accurate and complete details.</li>
            <li> Document Submission: Attach the required documents along with the cancellation application.</li>
            <li> Verification: Verify the information provided in the cancellation application.</li>
            <li> Authority Submission: Submit the cancellation application through the GST portal for approval.</li>
          </ul>
        </section>

        <section>
          <h2 style={{ marginBottom: "50px", marginTop: "50px" }}>Consequences of Non-Cancellation</h2>
          <p>
            Failure to cancel GST registration may result in continued compliance obligations, filing returns, and payment of taxes.
            It's crucial to cancel registration once a business ceases operations or becomes ineligible for GST.
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

export default CAN;
