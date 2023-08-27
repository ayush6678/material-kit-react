import React from 'react';
import 'pages/Services/styles.css';
import FormSimple from 'layouts/sections/input-areas/forms/components/FormSimple';
import DefaultNavbar from 'examples/Navbars/DefaultNavbar';
import routes from 'routes';
import DescriptionIcon from '@mui/icons-material/Description';
import CenteredFooter from 'examples/Footers/CenteredFooter';

function DPT3() {
  const documentList = [
    { name: 'DPT-3 Form' },
  ];
  const faqList = [
    {
      question: 'Q1: What is DPT-3 Filing?',
      answer: 'A1: DPT-3 Filing is the process of submitting details of outstanding loans and deposits...'
    },
    {
      question: 'Q2: When is the deadline for DPT-3 Filing?',
      answer: 'A2: The deadline for DPT-3 Filing is usually by the end of the financial year...'
    },
    {
      question: 'Q3: What are the consequences of not filing DPT-3 on time?',
      answer: 'A3: Non-filing or late filing can result in financial penalties and legal actions...'
    },
    {
      question: 'Q4: Is DPT-3 Filing applicable to all companies?',
      answer: 'A4: Yes, most companies that have accepted deposits are required to file DPT-3...'
    },
    {
      question: 'Q5: What information is required for DPT-3 Filing?',
      answer: 'A5: The DPT-3 Form requires details of outstanding loans, deposits, and certain financial information...'
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
          <h1>DPT-3 Filing</h1>
          <p className="headline">Report outstanding loans and deposits to regulatory authorities</p>
        </header>

        <div className='list'>

          <section className="description-section">
            <h2 style={{ marginBottom: "50px" }}>About DPT-3 Filing</h2>
            <p>
              DPT-3 Filing is the process of submitting details of outstanding loans, deposits, and certain financial transactions
              to regulatory authorities. This filing ensures transparency and compliance with company law regulations.
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
          <h2 style={{ marginBottom: "50px" }}>Key Importance of DPT-3 Filing</h2>
          <ul>
            <li> Regulatory Compliance: Filing DPT-3 ensures compliance with company law requirements.</li>
            <li> Transparency: Authorities receive accurate information about outstanding loans and deposits.</li>
            <li> Avoiding Penalties: Timely filing helps avoid penalties and legal actions for non-compliance.</li>
            <li> Data Accuracy: The filing process ensures accurate reporting of financial transactions.</li>
            <li> Legal Standing: Compliance contributes to the company's legal standing and reputation.</li>
          </ul>
        </section>

        <section className="filing-process">
          <h2 style={{ marginBottom: "50px", marginTop: "50px" }}>Filing Process</h2>
          <ul>
            <li> DPT-3 Form: Complete the DPT-3 Form with accurate details of outstanding loans and deposits.</li>
            <li> Financial Information: Provide necessary financial information as required by the form.</li>
            <li> Submission: File the DPT-3 Form with the regulatory authority within the stipulated deadline.</li>
          </ul>
        </section>

        <section>
          <h2 style={{ marginBottom: "50px", marginTop: "50px" }}>Consequences of Non-Filing</h2>
          <p>
            Failure to file DPT-3 or filing it late can result in financial penalties, legal actions,
            and a negative impact on the company's compliance record and reputation.
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

export default DPT3;
