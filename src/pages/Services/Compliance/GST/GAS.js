import React from 'react';
import 'pages/Services/styles.css';
import FormSimple from 'layouts/sections/input-areas/forms/components/FormSimple';
import DefaultNavbar from 'examples/Navbars/DefaultNavbar';
import routes from 'routes';
 import CenteredFooter from 'examples/Footers/CenteredFooter';

function GAS() {
  const documentList = [
    { name: 'Application Form for Amnesty' },
    { name: 'Declaration of Unreported Transactions' },
    { name: 'Proof of Payment of Dues' },
    { name: 'Undertaking for Compliance Going Forward' },
  ];
  const faqList = [
    {
      question: 'Q1: What is the GST Amnesty Scheme 2021?',
      answer: 'A1: The GST Amnesty Scheme allows taxpayers to declare unreported transactions, clear dues, and ensure compliance...'
    },
    {
      question: 'Q2: When is the deadline for availing the GST Amnesty Scheme?',
      answer: 'A2: The deadline varies, but the scheme provides a limited period for taxpayers to avail of the benefits...'
    },
    {
      question: 'Q3: What documents are required for availing the GST Amnesty Scheme?',
      answer: 'A3: Documents such as application form for amnesty, declaration of unreported transactions, proof of payment, and compliance undertaking...'
    },
    {
      question: 'Q4: Are there any consequences of not availing the GST Amnesty Scheme?',
      answer: 'A4: Non-availment can lead to penalties, interest, and potential legal actions for tax non-compliance...'
    },
    {
      question: 'Q5: Can all taxpayers avail the benefits of the GST Amnesty Scheme?',
      answer: 'A5: The scheme may have eligibility criteria based on specific conditions set by the tax authorities...'
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
          <h1>GST Amnesty Scheme 2021</h1>
          <p className="headline">Declare unreported transactions and ensure GST compliance</p>
        </header>

        <div className='list'>

          <section className="description-section">
            <h2 style={{ marginBottom: "50px" }}>About GST Amnesty Scheme</h2>
            <p>
              The GST Amnesty Scheme allows taxpayers to come forward and declare previously unreported transactions, clear dues,
              and ensure compliance with GST regulations. This scheme provides an opportunity to rectify past mistakes and avoid penalties.
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
          <h2 style={{ marginBottom: "50px" }}>Key Importance of GST Amnesty Scheme</h2>
          <ul>
            <li> Tax Compliance: The scheme enables taxpayers to rectify past non-compliance and ensure GST payment and reporting.</li>
            <li> Penalty Relief: Availing the scheme can lead to reduced or waived penalties and interest on outstanding dues.</li>
            <li> Rectification Opportunity: Taxpayers can correct errors, declare unreported transactions, and clear dues.</li>
            <li> Legal Safeguard: The scheme provides protection from potential legal actions for non-compliance.</li>
            <li> Limited Period Benefit: The scheme is available for a specific period, offering taxpayers an opportunity to avail its benefits.</li>
          </ul>
        </section>

        <section className="gst-amnesty-process">
          <h2 style={{ marginBottom: "50px", marginTop: "50px" }}>Availing GST Amnesty Scheme Process</h2>
          <ul>
            <li> Application Form: Fill the application form for availing the GST Amnesty Scheme.</li>
            <li> Declaration of Transactions: Declare unreported transactions and assess dues accurately.</li>
            <li> Proof of Payment: Provide proof of payment of dues declared under the scheme.</li>
            <li> Compliance Undertaking: Undertake to comply with GST regulations going forward.</li>
            <li> Application Submission: Submit the complete application along with required documents.</li>
            <li> Authorities Review: Authorities review the application and documents for accuracy.</li>
          </ul>
        </section>

        <section>
          <h2 style={{ marginBottom: "50px", marginTop: "50px" }}>Consequences of Non-Availment</h2>
          <p>
            Failure to avail the GST Amnesty Scheme can result in penalties, interest, and potential legal actions for tax non-compliance.
            Unreported transactions may be subject to scrutiny and investigation by tax authorities.
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

export default GAS;
