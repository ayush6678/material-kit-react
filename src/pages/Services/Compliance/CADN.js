import React from 'react';
import 'pages/Services/styles.css';
import FormSimple from 'layouts/sections/input-areas/forms/components/FormSimple';
import DefaultNavbar from 'examples/Navbars/DefaultNavbar';
import routes from 'routes';
import DescriptionIcon from '@mui/icons-material/Description';
import CenteredFooter from 'examples/Footers/CenteredFooter';

function CADN() {
  const documentList = [
    { name: 'Board Resolution' },
    { name: 'Approval from Existing RoC' },
    { name: 'Incorporation Certificate' },
  ];
  const faqList = [
    {
      question: 'Q1: What is the process for changing the address of a Company/LLP to another state/RoC?',
      answer: 'A1: The process involves obtaining board approval, seeking approval from existing RoC...'
    },
    {
      question: 'Q2: How long does it take to change the company/LLP address to another state?',
      answer: 'A2: The duration varies due to multiple steps including approvals from authorities...'
    },
    {
      question: 'Q3: Can any address be chosen for the company/LLP in another state?',
      answer: 'A3: The new address must adhere to regulatory guidelines and be a valid address in the chosen state...'
    },
    {
      question: 'Q4: What happens to existing licenses and permits after changing the address?',
      answer: 'A4: Licenses and permits need to be updated in the new state, and approvals should be obtained...'
    },
    {
      question: 'Q5: Are there any tax implications of changing the company/LLP address to another state?',
      answer: 'A5: Changing the address may involve changes in tax jurisdiction and compliance requirements...'
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
          <h1>Changing Address of your Company/LLP (to another State/RoC)</h1>
          <p className="headline">Shift your business operations and address to another state</p>
        </header>

        <div className='list'>

          <section className="description-section">
            <h2 style={{ marginBottom: "50px" }}>About Changing Company/LLP Address to another State</h2>
            <p>
              Changing the address of your Company/LLP to another state/RoC involves a comprehensive process that includes obtaining
              board approval, seeking approvals from relevant authorities, and updating official documents. This transition allows
              your business to operate from a new jurisdiction.
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
          <h2 style={{ marginBottom: "50px" }}>Key Importance of Changing Company/LLP Address to another State</h2>
          <ul>
            <li> New Jurisdiction: Transitioning to another state offers access to different legal and business environments.</li>
            <li> Operational Flexibility: The new address may align with business expansion and strategic goals.</li>
            <li> Regulatory Compliance: Adhering to approval processes ensures regulatory adherence in the new state.</li>
            <li> License and Permit Update: Existing licenses and permits need to be updated in the new state.</li>
            <li> Tax Implications: Changing the address may have tax implications that require careful consideration.</li>
          </ul>
        </section>

        <section className="change-process">
          <h2 style={{ marginBottom: "50px", marginTop: "50px" }}>Address Change Process to another State</h2>
          <ul>
            <li> Board Resolution: Obtain board approval for changing the company/LLP address.</li>
            <li> Approval from Existing RoC: Seek approval from the existing RoC for shifting operations.</li>
            <li> Application Submission: File applications for necessary approvals in the new state/RoC.</li>
            <li> Verification and Approval: Obtain approvals from relevant authorities in the new state.</li>
            <li> Document Update: Update official documents, including the Incorporation Certificate.</li>
          </ul>
        </section>

        <section>
          <h2 style={{ marginBottom: "50px", marginTop: "50px" }}>Implications of Address Change to another State</h2>
          <p>
            Changing the address to another state involves updating licenses and permits, obtaining approvals, and adhering to
            new regulatory guidelines. It may also have tax implications and changes in compliance requirements.
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

export default CADN;
