import React from 'react';
import 'pages/Services/styles.css';
import FormSimple from 'layouts/sections/input-areas/forms/components/FormSimple';
import DefaultNavbar from 'examples/Navbars/DefaultNavbar';
import routes from 'routes';
 import CenteredFooter from 'examples/Footers/CenteredFooter';

function DGFT() {
  const documentList = [
    { name: 'Identity Proof' },
    { name: 'Address Proof' },
    { name: 'Business Details' },
    { name: 'Authorized Person Details' },
  ];
  const faqList = [
    {
      question: 'Q1: What is a Class DGFT DSC?',
      answer: 'A1: A Class DGFT DSC is a digital signature issued by the Directorate General of Foreign Trade (DGFT)...'
    },
    {
      question: 'Q2: Why is Class DGFT DSC important?',
      answer: 'A2: Class DGFT DSC is essential for businesses engaged in foreign trade for secure and authenticated online interactions...'
    },
    {
      question: 'Q3: What documents are required for Class DGFT DSC?',
      answer: 'A3: Documents such as identity proof, address proof, business details, and authorized person details are required for application...'
    },
    {
      question: 'Q4: How long does it take to get Class DGFT DSC?',
      answer: 'A4: The processing time for obtaining a Class DGFT DSC varies, but it usually takes around 1 to 5 business days upon successful submission...'
    },
    {
      question: 'Q5: Who needs to apply for Class DGFT DSC?',
      answer: 'A5: Individuals or entities engaged in foreign trade and requiring secure online interactions with DGFT need to apply for a Class DGFT DSC...'
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
          <h1>Class DGFT Digital Signature Certificate (DSC)</h1>
          <p className="headline">Secure your foreign trade interactions with a Class DGFT DSC</p>
        </header>

        <div className='list'>

          <section className="description-section">
            <h2 style={{ marginBottom: "50px" }}>About Class DGFT DSC</h2>
            <p>
              A Class DGFT Digital Signature Certificate (DSC) is a digital signature issued by the Directorate General of Foreign Trade (DGFT). It is essential for businesses engaged in foreign trade, enabling secure and authenticated online interactions with DGFT for various transactions and submissions.
              With a Class DGFT DSC, you can ensure the security and legality of your foreign trade operations.
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
          <h2 style={{ marginBottom: "50px" }}>Key Benefits of Class DGFT DSC</h2>
          <ul>
            <li> Secure Foreign Trade: Class DGFT DSC ensures secure and authenticated online interactions with DGFT for foreign trade operations.</li>
            <li> Legal Validity: It is legally recognized for various transactions and submissions related to foreign trade.</li>
            <li> Convenience: Apply for licenses, permits, and authorizations online with the security of a digital signature.</li>
            <li> Time Efficiency: Save time by digitally signing and submitting documents from anywhere, eliminating paperwork.</li>
            <li> Global Reach: Engage in global trade with confidence, knowing your interactions are secure and valid.</li>
          </ul>
        </section>

        <section className="registration-process">
          <h2 style={{ marginBottom: "50px", marginTop: "50px" }}>Class DGFT DSC Application Process</h2>
          <ul>
            <li> Gather Documents: Collect necessary documents such as identity proof, address proof, business details, and authorized person details.</li>
            <li> Application Submission: Apply for a Class DGFT DSC through authorized DSC providers or DGFT portals.</li>
            <li> Identity Verification: The provider or DGFT verifies your documents and performs identity checks.</li>
            <li> Issuance of DSC: Upon successful verification, the Class DGFT DSC is issued for your use.</li>
          </ul>
        </section>

        <section>
          <h2 style={{ marginBottom: "50px", marginTop: "50px" }}>Applicability to Different Users</h2>
          <p>
            Individuals or entities engaged in foreign trade and requiring secure online interactions with DGFT for various transactions and submissions need to apply for a Class DGFT DSC.
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

export default DGFT;
