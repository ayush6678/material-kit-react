import React from 'react';
import 'pages/Services/styles.css';
import FormSimple from 'layouts/sections/input-areas/forms/components/FormSimple';
import DefaultNavbar from 'examples/Navbars/DefaultNavbar';
import routes from 'routes';
import DescriptionIcon from '@mui/icons-material/Description';
import CenteredFooter from 'examples/Footers/CenteredFooter';

function DKYC() {
  const documentList = [
    { name: 'Self-attested PAN Card copy' },
    { name: 'Aadhaar Card copy' },
    { name: 'Passport-size Photograph' },
    { name: 'Utility Bill as Address Proof' },
  ];
  const faqList = [
    {
      question: 'Q1: What is the purpose of the DIR-3 KYC form (Director KYC form)?',
      answer: 'A1: The DIR-3 KYC form is used to update and verify the details of directors of a company...'
    },
    {
      question: 'Q2: When should the DIR-3 KYC form be filed?',
      answer: 'A2: The form must be filed annually by directors within a specified period...'
    },
    {
      question: 'Q3: What documents are required for filing the DIR-3 KYC form?',
      answer: 'A3: Documents such as self-attested PAN card copy, Aadhaar card copy, passport-size photograph, and address proof...'
    },
    {
      question: 'Q4: Are there any consequences of not filing the DIR-3 KYC form?',
      answer: 'A4: Non-filing can lead to penalties, deactivation of DIN, and potential legal implications...'
    },
    {
      question: 'Q5: Is it mandatory for all directors to file DIR-3 KYC annually?',
      answer: 'A5: Yes, all directors holding a valid DIN are required to file the form every year...'
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
          <h1>DIR-3 KYC (Director KYC Form)</h1>
          <p className="headline">Update and verify the details of directors for your company</p>
        </header>

        <div className='list'>

          <section className="description-section">
            <h2 style={{ marginBottom: "50px" }}>About DIR-3 KYC Form</h2>
            <p>
              The DIR-3 KYC form is used to update and verify the details of directors of a company. It ensures accurate
              and up-to-date information about directors, and compliance with regulatory requirements.
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
          <h2 style={{ marginBottom: "50px" }}>Key Importance of DIR-3 KYC Form</h2>
          <ul>
            <li> Director Verification: The form updates and verifies director details, enhancing transparency.</li>
            <li> Regulatory Compliance: Filing DIR-3 KYC ensures compliance with annual director verification requirements.</li>
            <li> Accurate Information: The form maintains accurate and up-to-date information about directors.</li>
            <li> DIN Activation: The filing prevents deactivation of DIN and maintains its validity.</li>
            <li> Legal Requirement: All directors holding a DIN must file the form annually.</li>
          </ul>
        </section>

        <section className="dir3kyc-process">
          <h2 style={{ marginBottom: "50px", marginTop: "50px" }}>Filing DIR-3 KYC Form Process</h2>
          <ul>
            <li> Document Preparation: Gather required documents such as PAN card copy, Aadhaar card copy, photo, and address proof.</li>
            <li> Form Filling: Complete the DIR-3 KYC form with accurate and updated director details.</li>
            <li> Document Upload: Attach self-attested copies of PAN card, Aadhaar card, photograph, and address proof.</li>
            <li> Form Submission: Submit the form along with documents through the online portal.</li>
            <li> Verification: The submitted details are verified by the authorities.</li>
            <li> DIN Activation: After successful verification, the DIN remains active and compliant.</li>
          </ul>
        </section>

        <section>
          <h2 style={{ marginBottom: "50px", marginTop: "50px" }}>Consequences of Non-filing</h2>
          <p>
            Failure to file the DIR-3 KYC form within the specified period can lead to penalties, deactivation of DIN,
            and potential legal implications for directors.
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

export default DKYC;
