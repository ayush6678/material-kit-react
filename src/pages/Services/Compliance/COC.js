import React from 'react';
import 'pages/Services/styles.css';
import FormSimple from 'layouts/sections/input-areas/forms/components/FormSimple';
import DefaultNavbar from 'examples/Navbars/DefaultNavbar';
import routes from 'routes';
import DescriptionIcon from '@mui/icons-material/Description';
import CenteredFooter from 'examples/Footers/CenteredFooter';

function COC() {
  const documentList = [
    { name: 'Board Resolution' },
    { name: 'Affidavit from Directors' },
    { name: 'Indemnity Bond from Directors' },
    { name: 'Statement of Assets and Liabilities' },
  ];
  const faqList = [
    {
      question: 'Q1: What is the process for closing a company under Fast Track Exit?',
      answer: 'A1: The process involves obtaining board approval, submitting an application to the Registrar...'
    },
    {
      question: 'Q2: How long does it take to complete the closure process under Fast Track Exit?',
      answer: 'A2: The duration varies due to documentation, approvals required, and processing time by RoC...'
    },
    {
      question: 'Q3: Can any company apply for Fast Track Exit and close down?',
      answer: 'A3: Eligible companies that have nil assets and liabilities can apply for Fast Track Exit...'
    },
    {
      question: 'Q4: Are there any liabilities after the company is closed under Fast Track Exit?',
      answer: 'A4: After closure, the company remains liable for any pending legal proceedings or liabilities...'
    },
    {
      question: 'Q5: How is the closure of company different under Fast Track Exit compared to other methods?',
      answer: 'A5: Fast Track Exit is a quicker process for companies with nil assets and liabilities...'
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
          <h1>Closure of Company (Under Fast Track Exit)</h1>
          <p className="headline">Dissolve a company with nil assets and liabilities through Fast Track Exit</p>
        </header>

        <div className='list'>

          <section className="description-section">
            <h2 style={{ marginBottom: "50px" }}>About Closure under Fast Track Exit</h2>
            <p>
              Closing a company under Fast Track Exit involves obtaining board approval, submitting an application
              to the Registrar of Companies (RoC), and adhering to regulatory guidelines. This process allows companies
              with nil assets and liabilities to dissolve swiftly.
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
          <h2 style={{ marginBottom: "50px" }}>Key Importance of Closure under Fast Track Exit</h2>
          <ul>
            <li> Efficient Closure: Fast Track Exit allows quick closure for companies with nil assets and liabilities.</li>
            <li> Regulatory Compliance: The process adheres to regulatory guidelines for company dissolution.</li>
            <li> Eligible Companies: Companies with nil assets and liabilities are eligible for Fast Track Exit.</li>
            <li> Liabilities and Legal Proceedings: The company remains liable for pending legal matters after closure.</li>
            <li> Streamlined Process: Fast Track Exit is a swifter alternative compared to other closure methods.</li>
          </ul>
        </section>

        <section className="closure-process">
          <h2 style={{ marginBottom: "50px", marginTop: "50px" }}>Closure under Fast Track Exit Process</h2>
          <ul>
            <li> Board Resolution: Obtain board approval for applying for closure under Fast Track Exit.</li>
            <li> Application Submission: Submit an application with required documents to the Registrar of Companies.</li>
            <li> Affidavit and Indemnity Bond: Provide an affidavit and indemnity bond from directors.</li>
            <li> Statement of Assets and Liabilities: Submit a statement of assets and liabilities of the company.</li>
            <li> RoC Approval: RoC reviews the application and issues closure order if all requirements are met.</li>
            <li> Updated Records: Update official records to reflect the company's closure.</li>
          </ul>
        </section>

        <section>
          <h2 style={{ marginBottom: "50px", marginTop: "50px" }}>Liabilities and Implications after Closure</h2>
          <p>
            After closure under Fast Track Exit, the company remains liable for any pending legal proceedings, obligations,
            and liabilities. It's important to resolve all pending matters before initiating closure.
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

export default COC;
