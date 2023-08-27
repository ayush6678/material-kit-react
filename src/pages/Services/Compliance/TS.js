import React from 'react';
import 'pages/Services/styles.css';
import FormSimple from 'layouts/sections/input-areas/forms/components/FormSimple';
import DefaultNavbar from 'examples/Navbars/DefaultNavbar';
import routes from 'routes';
import DescriptionIcon from '@mui/icons-material/Description';
import CenteredFooter from 'examples/Footers/CenteredFooter';

function TS() {
  const documentList = [
    { name: 'Share Transfer Deed' },
    { name: 'No Objection Certificate (NOC)' },
    { name: 'Board Resolution' },
  ];
  const faqList = [
    {
      question: 'Q1: What is the process for transferring shares of a company?',
      answer: 'A1: The process involves obtaining a share transfer deed, obtaining NOC from other shareholders...'
    },
    {
      question: 'Q2: How long does it take to complete the share transfer process?',
      answer: 'A2: The duration varies due to documentation, approvals required, and RoC processing time...'
    },
    {
      question: 'Q3: Can shares be transferred to anyone without any restrictions?',
      answer: 'A3: Shares can be transferred, but the company\'s Articles of Association may have transfer restrictions...'
    },
    {
      question: 'Q4: What is the role of the company in the share transfer process?',
      answer: 'A4: The company ensures that the transfer complies with regulations and updates its records...'
    },
    {
      question: 'Q5: Are there any tax implications of transferring shares?',
      answer: 'A5: Yes, capital gains tax may apply, and it\'s important to consider tax implications...'
    },
    {
      question: 'Q6: What happens after the successful transfer of shares?',
      answer: 'A6: After the transfer is completed, the company updates its records and issues new share certificates...'
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
          <h1>Transfer of Shares</h1>
          <p className="headline">Transfer ownership of company shares with proper documentation</p>
        </header>

        <div className='list'>

          <section className="description-section">
            <h2 style={{ marginBottom: "50px" }}>About Share Transfer</h2>
            <p>
              Transferring shares of a company involves a process that includes obtaining a share transfer deed, obtaining
              a No Objection Certificate (NOC) from other shareholders, and adhering to regulatory guidelines. This process
              ensures a proper transfer of ownership while complying with legal requirements.
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
          <h2 style={{ marginBottom: "50px" }}>Key Importance of Share Transfer</h2>
          <ul>
            <li> Ownership Transfer: Share transfer allows the transfer of ownership from one shareholder to another.</li>
            <li> Regulatory Compliance: The process ensures compliance with legal and regulatory requirements.</li>
            <li> Shareholder Consent: Transfer requires NOC from other shareholders and adherence to AoA.</li>
            <li> Company Role: The company verifies and facilitates the transfer while updating records.</li>
            <li> Tax Considerations: Capital gains tax and other tax implications must be considered.</li>
            <li> Updated Shareholding: After transfer, the company issues new share certificates to the transferee.</li>
          </ul>
        </section>

        <section className="transfer-process">
          <h2 style={{ marginBottom: "50px", marginTop: "50px" }}>Share Transfer Process</h2>
          <ul>
            <li> Share Transfer Deed: Prepare a share transfer deed with details of transferor and transferee.</li>
            <li> NOC from Shareholders: Obtain a No Objection Certificate (NOC) from other shareholders.</li>
            <li> Board Resolution: Obtain a board resolution approving the share transfer.</li>
            <li> Document Submission: Submit the share transfer deed and other documents to the company.</li>
            <li> Approval and Record Update: The company verifies, approves, and updates its records.</li>
            <li> Issuance of New Certificates: New share certificates are issued to the transferee.</li>
          </ul>
        </section>

        <section>
          <h2 style={{ marginBottom: "50px", marginTop: "50px" }}>Legal and Tax Implications of Share Transfer</h2>
          <p>
            Share transfer involves compliance with regulations, obtaining NOC, and proper documentation. Tax implications,
            including capital gains tax, must be evaluated. The company ensures the transfer aligns with legal requirements.
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

export default TS;
