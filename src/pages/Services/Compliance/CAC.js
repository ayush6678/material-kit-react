import React from 'react';
import 'pages/Services/styles.css';
import FormSimple from 'layouts/sections/input-areas/forms/components/FormSimple';
import DefaultNavbar from 'examples/Navbars/DefaultNavbar';
import routes from 'routes';
import DescriptionIcon from '@mui/icons-material/Description';
import CenteredFooter from 'examples/Footers/CenteredFooter';

function CAC() {
  const documentList = [
    { name: 'Board Resolution' },
    { name: 'New Address Proof' },
  ];
  const faqList = [
    {
      question: 'Q1: What is the process for changing the address of a Company/LLP within the same state?',
      answer: 'A1: The process involves obtaining board approval, updating official documents...'
    },
    {
      question: 'Q2: How long does it take to change the company/LLP address?',
      answer: 'A2: The duration varies depending on government processing time and document verification...'
    },
    {
      question: 'Q3: Can any address be chosen for the company/LLP within the state?',
      answer: 'A3: The new address must be a valid address within the same state and adhere to regulations...'
    },
    {
      question: 'Q4: Do all existing documents need to be updated with the new address?',
      answer: 'A4: Only certain official documents like the Certificate of Incorporation need to be updated...'
    },
    {
      question: 'Q5: Are there any legal implications of changing the company/LLP address?',
      answer: 'A5: Changing the address is a procedural step and does not affect legal standing or operations...'
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
          <h1>Changing Address of your Company/LLP (within same State)</h1>
          <p className="headline">Update your business address within the same state</p>
        </header>

        <div className='list'>

          <section className="description-section">
            <h2 style={{ marginBottom: "50px" }}>About Changing Company/LLP Address</h2>
            <p>
              Changing the address of your Company/LLP within the same state involves a formal process that includes obtaining
              board approval, updating official documents, and verifying the new address. This ensures accurate records and
              communication with relevant authorities.
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
          <h2 style={{ marginBottom: "50px" }}>Key Importance of Changing Company/LLP Address</h2>
          <ul>
            <li> Compliance with Records: Updating the address ensures accurate official records.</li>
            <li> Effective Communication: Accurate address supports effective communication with authorities and stakeholders.</li>
            <li> Regulatory Adherence: The new address must adhere to regulatory requirements within the same state.</li>
            <li> Local Operations: An updated address reflects the current location of the company/LLP's operations.</li>
            <li> Business Continuity: Address change does not affect legal standing or business operations.</li>
          </ul>
        </section>

        <section className="change-process">
          <h2 style={{ marginBottom: "50px", marginTop: "50px" }}>Address Change Process</h2>
          <ul>
            <li> Board Resolution: Obtain board approval for changing the company/LLP address.</li>
            <li> New Address Proof: Collect valid address proof documents for the new address.</li>
            <li> Document Submission: File the necessary documents for updating the address.</li>
            <li> Verification: The government authorities verify the new address details.</li>
            <li> Updated Documents: Update official documents like the Certificate of Incorporation with the new address.</li>
          </ul>
        </section>

        <section>
          <h2 style={{ marginBottom: "50px", marginTop: "50px" }}>Legal Implications of Address Change</h2>
          <p>
            Changing the address is a procedural step and does not affect the legal standing or operations of the company/LLP.
            Only certain official documents need to be updated with the new address, while others remain valid.
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

export default CAC;
