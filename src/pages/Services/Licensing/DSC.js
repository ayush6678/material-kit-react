import React from 'react';
import 'pages/Services/styles.css';
import FormSimple from 'layouts/sections/input-areas/forms/components/FormSimple';
import DefaultNavbar from 'examples/Navbars/DefaultNavbar';
import routes from 'routes';
import DescriptionIcon from '@mui/icons-material/Description';
import CenteredFooter from 'examples/Footers/CenteredFooter';

function DSC() {
  const documentList = [
    { name: 'Identity Proof' },
    { name: 'Address Proof' },
    { name: 'Business Details' },
    { name: 'Authorized Person Details' },
  ];
  const faqList = [
    {
      question: 'Q1: What is a Class 3 Digital Signature Certificate (DSC)?',
      answer: 'A1: A Class 3 DSC is the highest level of digital signature, offering the highest level of security and authenticity...'
    },
    {
      question: 'Q2: Why is Class 3 DSC important?',
      answer: 'A2: Class 3 DSC is required for e-tendering, e-procurement, company filings, and other high-security online transactions...'
    },
    {
      question: 'Q3: What documents are required for Class 3 DSC?',
      answer: 'A3: Documents such as identity proof, address proof, business details, and authorized person details are required for application...'
    },
    {
      question: 'Q4: How long does it take to get Class 3 DSC?',
      answer: 'A4: The processing time for obtaining a Class 3 DSC varies, but it usually takes around 1 to 5 business days upon successful submission...'
    },
    {
      question: 'Q5: Who needs to apply for Class 3 DSC?',
      answer: 'A5: Individuals or entities requiring high-level security for online transactions, company filings, and e-procurement need to apply for a Class 3 DSC...'
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
          <h1>Class 3 Digital Signature Certificate (DSC)</h1>
          <p className="headline">Ensure the highest level of security and authenticity for your online transactions</p>
        </header>

        <div className='list'>

          <section className="description-section">
            <h2 style={{ marginBottom: "50px" }}>About Class 3 DSC</h2>
            <p>
              A Class 3 Digital Signature Certificate (DSC) is the highest level of digital signature, offering the highest level of security and authenticity. It is used for e-tendering, e-procurement, company filings, and other high-security online transactions.
              With Class 3 DSC, you can ensure the integrity of your online communications and transactions.
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
                <DescriptionIcon fontSize='large'/>
                <p>{document.name}</p>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 style={{ marginBottom: "50px" }}>Key Benefits of Class 3 DSC</h2>
          <ul>
            <li> High Security: Class 3 DSC offers the highest level of security and authentication for online transactions.</li>
            <li> Legal Validity: It is legally recognized for filing documents with government authorities and participating in e-tendering.</li>
            <li> Secure Communications: Class 3 DSC ensures the integrity of online communications and transactions.</li>
            <li> Identity Verification: It verifies the identity of the signer, providing assurance to parties involved.</li>
            <li> E-procurement: Class 3 DSC is essential for participating in secure e-procurement processes.</li>
          </ul>
        </section>

        <section className="registration-process">
          <h2 style={{ marginBottom: "50px", marginTop: "50px" }}>Class 3 DSC Application Process</h2>
          <ul>
            <li> Gather Documents: Collect necessary documents such as identity proof, address proof, business details, and authorized person details.</li>
            <li> Application Submission: Apply for a Class 3 DSC through authorized DSC providers.</li>
            <li> Identity Verification: The provider verifies your documents and performs identity checks.</li>
            <li> Issuance of DSC: Upon successful verification, the Class 3 DSC is issued for your use.</li>
          </ul>
        </section>

        <section>
          <h2 style={{ marginBottom: "50px", marginTop: "50px" }}>Applicability to Different Users</h2>
          <p>
            Individuals or entities requiring the highest level of security for online transactions, company filings, and e-procurement need to apply for a Class 3 DSC.
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

export default DSC;
