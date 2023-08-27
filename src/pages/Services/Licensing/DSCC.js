import React from 'react';
import 'pages/Services/styles.css';
import FormSimple from 'layouts/sections/input-areas/forms/components/FormSimple';
import DefaultNavbar from 'examples/Navbars/DefaultNavbar';
import routes from 'routes';
import DescriptionIcon from '@mui/icons-material/Description';
import CenteredFooter from 'examples/Footers/CenteredFooter';

function DSCC() {
  const documentList = [
    { name: 'Identity Proof' },
    { name: 'Address Proof' },
    { name: 'Business Details' },
    { name: 'Authorized Person Details' },
  ];
  const faqList = [
    {
      question: 'Q1: What is a Class 3 DSC with Encryption (Combo)?',
      answer: 'A1: A Class 3 DSC with Encryption (Combo) provides the highest level of digital signature security along with encryption capabilities...'
    },
    {
      question: 'Q2: Why is Class 3 DSC with Encryption important?',
      answer: 'A2: Class 3 DSC with Encryption is essential for online transactions, e-tendering, secure communications, and protecting sensitive information...'
    },
    {
      question: 'Q3: What documents are required for Class 3 DSC with Encryption?',
      answer: 'A3: Documents such as identity proof, address proof, business details, and authorized person details are required for application...'
    },
    {
      question: 'Q4: How long does it take to get Class 3 DSC with Encryption?',
      answer: 'A4: The processing time for obtaining a Class 3 DSC with Encryption varies, but it usually takes around 1 to 5 business days upon successful submission...'
    },
    {
      question: 'Q5: Who needs to apply for Class 3 DSC with Encryption?',
      answer: 'A5: Individuals or entities requiring the highest level of security for online transactions, company filings, secure communications, and encryption need to apply for a Class 3 DSC with Encryption...'
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
          <h1>Class 3 DSC with Encryption (Combo)</h1>
          <p className="headline">Experience the highest level of digital signature security and encryption capabilities</p>
        </header>

        <div className='list'>

          <section className="description-section">
            <h2 style={{ marginBottom: "50px" }}>About Class 3 DSC with Encryption (Combo)</h2>
            <p>
              A Class 3 DSC with Encryption (Combo) provides the highest level of digital signature security along with encryption capabilities. It is essential for online transactions, e-tendering, secure communications, and protecting sensitive information.
              With Class 3 DSC with Encryption, you can ensure secure and authenticated online interactions and data protection.
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
          <h2 style={{ marginBottom: "50px" }}>Key Benefits of Class 3 DSC with Encryption</h2>
          <ul>
            <li> Highest Security: Class 3 DSC with Encryption offers the highest level of digital signature security and data protection.</li>
            <li> Legal Validity: It is legally recognized for filing documents, participating in e-tendering, and securing communications.</li>
            <li> Secure Communications: Class 3 DSC ensures secure and authenticated online communications.</li>
            <li> Data Encryption: The combo DSC allows encryption of sensitive information for enhanced protection.</li>
            <li> Identity Verification: It verifies the identity of the signer and encrypts data for secure transmission.</li>
          </ul>
        </section>

        <section className="registration-process">
          <h2 style={{ marginBottom: "50px", marginTop: "50px" }}>Class 3 DSC with Encryption Application Process</h2>
          <ul>
            <li> Gather Documents: Collect necessary documents such as identity proof, address proof, business details, and authorized person details.</li>
            <li> Application Submission: Apply for a Class 3 DSC with Encryption through authorized DSC providers.</li>
            <li> Identity Verification: The provider verifies your documents and performs identity checks.</li>
            <li> Issuance of DSC: Upon successful verification, the Class 3 DSC with Encryption is issued for your use.</li>
          </ul>
        </section>

        <section>
          <h2 style={{ marginBottom: "50px", marginTop: "50px" }}>Applicability to Different Users</h2>
          <p>
            Individuals or entities requiring the highest level of security for online transactions, company filings, secure communications, and data encryption need to apply for a Class 3 DSC with Encryption.
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

export default DSCC;
