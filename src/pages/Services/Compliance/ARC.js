import React from 'react';
import 'pages/Services/styles.css';
import FormSimple from 'layouts/sections/input-areas/forms/components/FormSimple';
import DefaultNavbar from 'examples/Navbars/DefaultNavbar';
import routes from 'routes';
 import CenteredFooter from 'examples/Footers/CenteredFooter';

function ARC() {
  const documentList = [
    { name: 'Board Resolution' },
    { name: 'Shareholders\' Approval' },
  ];
  const faqList = [
    {
      question: 'Q1: What is the process for altering the share capital of a company?',
      answer: 'A1: The process involves obtaining board approval, obtaining approval from shareholders...'
    },
    {
      question: 'Q2: How long does it take to alter the share capital?',
      answer: 'A2: The duration varies due to approvals required, documents to be filed, and RoC processing time...'
    },
    {
      question: 'Q3: Can the company increase or decrease its share capital as needed?',
      answer: 'A3: Share capital can be increased or decreased by following the proper legal procedures...'
    },
    {
      question: 'Q4: What are the implications for existing shareholders when altering share capital?',
      answer: 'A4: Existing shareholders may experience dilution or an increase in their ownership percentage...'
    },
    {
      question: 'Q5: Are there any legal compliance requirements for altering the share capital?',
      answer: 'A5: Yes, altering share capital requires compliance with regulatory approvals and filing...'
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
          <h1>Alteration of Share Capital</h1>
          <p className="headline">Modify the company's share capital structure</p>
        </header>

        <div className='list'>

          <section className="description-section">
            <h2 style={{ marginBottom: "50px" }}>About Alteration of Share Capital</h2>
            <p>
              Altering the share capital of a company involves obtaining board approval, obtaining approval from shareholders,
              and adhering to regulatory guidelines. This process allows changes to the company's ownership structure.
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
          <h2 style={{ marginBottom: "50px" }}>Key Importance of Altering Share Capital</h2>
          <ul>
            <li> Ownership Structure: Altering share capital allows changes in ownership percentages among shareholders.</li>
            <li> Regulatory Compliance: The process adheres to regulatory requirements for share capital changes.</li>
            <li> Shareholder Approval: Changes in share capital require approval from existing shareholders.</li>
            <li> Dilution and Ownership: Existing shareholders may experience dilution or change in ownership percentage.</li>
            <li> Investment and Funding: Share capital changes can facilitate new investments and fundraising.</li>
          </ul>
        </section>

        <section className="change-process">
          <h2 style={{ marginBottom: "50px", marginTop: "50px" }}>Share Capital Alteration Process</h2>
          <ul>
            <li> Board Resolution: Obtain board approval for altering the share capital.</li>
            <li> Shareholders' Approval: Obtain approval from shareholders through a special resolution.</li>
            <li> Document Preparation: Prepare necessary documents reflecting the altered share capital.</li>
            <li> Filing with RoC: File the relevant forms and documents with the Registrar of Companies.</li>
            <li> Updated Records: Update official records to reflect the changes in share capital.</li>
          </ul>
        </section>

        <section>
          <h2 style={{ marginBottom: "50px", marginTop: "50px" }}>Legal Compliance for Share Capital Alteration</h2>
          <p>
            Altering share capital requires compliance with regulatory approvals, shareholder consents, and proper filings.
            Existing shareholders' interests must be taken into consideration during the process.
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

export default ARC;
