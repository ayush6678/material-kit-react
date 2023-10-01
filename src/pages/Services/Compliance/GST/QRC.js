import React from 'react';
import 'pages/Services/styles.css';
import FormSimple from 'layouts/sections/input-areas/forms/components/FormSimple';
import DefaultNavbar from 'examples/Navbars/DefaultNavbar';
import routes from 'routes';
 import CenteredFooter from 'examples/Footers/CenteredFooter';

function QRC() {
  const documentList = [
    { name: 'Summary of Outward Supplies and Inward Supplies Attracting Reverse Charge' },
    { name: 'Consolidated Statement of Advances Received and Advances Adjusted' },
    { name: 'Consolidated Statement of Tax Paid' },
    { name: 'Payment Details' },
  ];
  const faqList = [
    {
      question: 'Q1: What is Quarterly Returns under Composition Scheme (GSTR-4)?',
      answer: 'A1: GSTR-4 is a quarterly return that composition scheme taxpayers file to report their outward supplies...'
    },
    {
      question: 'Q2: When is GSTR-4 due for filing?',
      answer: 'A2: GSTR-4 is due on the 18th of the month following the end of the quarter...'
    },
    {
      question: 'Q3: What documents are required for filing GSTR-4?',
      answer: 'A3: Documents such as summary of outward supplies and inward supplies attracting reverse charge, consolidated statement...'
    },
    {
      question: 'Q4: Are there any penalties for non-filing or late filing of GSTR-4?',
      answer: 'A4: Yes, non-filing or late filing can lead to penalties and disruptions in the composition scheme benefits...'
    },
    {
      question: 'Q5: Who is eligible to file GSTR-4 under the composition scheme?',
      answer: 'A5: Small businesses with a turnover within the specified limit and opted for the composition scheme can file GSTR-4...'
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
          <h1>Quarterly Returns under Composition Scheme (GSTR-4)</h1>
          <p className="headline">Report your composition scheme transactions and comply with GST regulations</p>
        </header>

        <div className='list'>

          <section className="description-section">
            <h2 style={{ marginBottom: "50px" }}>About GSTR-4 Returns</h2>
            <p>
              GSTR-4 is a quarterly return filed by composition scheme taxpayers to report their outward supplies,
              inward supplies attracting reverse charge, and summary of tax payments. This return is designed for small businesses
              availing the composition scheme.
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
          <h2 style={{ marginBottom: "50px" }}>Key Importance of GSTR-4 Returns</h2>
          <ul>
            <li> Composition Scheme Compliance: GSTR-4 helps composition scheme taxpayers comply with GST regulations.</li>
            <li> Outward Supplies Reporting: Businesses report their outward supplies and inward supplies attracting reverse charge.</li>
            <li> Tax Payment Summary: The return provides a consolidated statement of tax paid during the quarter.</li>
            <li> Penalty Avoidance: Timely filing helps avoid penalties and disruptions in composition scheme benefits.</li>
            <li> Simplified Filing: GSTR-4 is a simplified return designed for businesses under the composition scheme.</li>
          </ul>
        </section>

        <section className="gstr4-returns-process">
          <h2 style={{ marginBottom: "50px", marginTop: "50px" }}>Filing GSTR-4 Process</h2>
          <ul>
            <li> Data Compilation: Gather details of outward supplies, inward supplies attracting reverse charge, advances received, and tax paid.</li>
            <li> Return Filling: Fill the GSTR-4 form accurately with the required details.</li>
            <li> Document Attachment: Attach supporting invoices and documents as necessary.</li>
            <li> Tax Payment: Calculate the tax liability and pay the tax due, if any.</li>
            <li> Online Submission: Submit the return through the GST portal by the due date.</li>
          </ul>
        </section>

        <section>
          <h2 style={{ marginBottom: "50px", marginTop: "50px" }}>Penalties for Non-Filing</h2>
          <p>
            Non-filing or late filing of GSTR-4 can lead to penalties and disruptions in the benefits of the composition scheme.
            Businesses failing to comply with the filing requirements may also face legal actions.
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

export default QRC;
