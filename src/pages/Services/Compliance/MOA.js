import React from 'react';
import 'pages/Services/styles.css';
import FormSimple from 'layouts/sections/input-areas/forms/components/FormSimple';
import DefaultNavbar from 'examples/Navbars/DefaultNavbar';
import routes from 'routes';
 import CenteredFooter from 'examples/Footers/CenteredFooter';

function MOA() {
  const documentList = [
    { name: 'Board Resolution' },
    { name: 'Amended Memorandum of Association' },
  ];
  const faqList = [
    {
      question: 'Q1: What is the process for changing the objects in the Memorandum of Association (MOA)?',
      answer: 'A1: The process involves obtaining board approval, shareholder approval, and filing with RoC...'
    },
    {
      question: 'Q2: How long does it take to change the objects in the MOA?',
      answer: 'A2: The duration varies due to the approvals required and RoC processing time...'
    },
    {
      question: 'Q3: Can the company change its objects to any type of business?',
      answer: 'A3: The new objects must be aligned with the company\'s existing business and comply with regulations...'
    },
    {
      question: 'Q4: What happens to contracts related to the previous objects after the change?',
      answer: 'A4: Contracts related to the previous objects remain valid, and the company continues operations...'
    },
    {
      question: 'Q5: Are there any legal implications of changing the objects in the MOA?',
      answer: 'A5: Changing the objects requires compliance with regulations and approvals, but it doesn\'t affect legal standing...'
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
          <h1>Change in Objects (Memorandum of Association - MOA)</h1>
          <p className="headline">Modify the primary business activities of your company</p>
        </header>

        <div className='list'>

          <section className="description-section">
            <h2 style={{ marginBottom: "50px" }}>About Change in Objects (MOA)</h2>
            <p>
              Changing the objects in the Memorandum of Association (MOA) involves a formal process that includes obtaining
              board approval, shareholder approval, and filing with the Registrar of Companies (RoC). This change reflects the
              primary business activities that the company will engage in.
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
          <h2 style={{ marginBottom: "50px" }}>Key Importance of Changing Objects in MOA</h2>
          <ul>
            <li> Business Adaptation: Changing objects allows the company to adapt to new business opportunities.</li>
            <li> Regulatory Alignment: New objects must comply with regulatory guidelines and the company's existing operations.</li>
            <li> Shareholder Approval: Changing objects requires approval from the company's shareholders.</li>
            <li> Contracts and Agreements: Contracts related to previous objects remain valid after the change.</li>
            <li> Operational Expansion: The new objects enable the company to expand into new business areas.</li>
          </ul>
        </section>

        <section className="change-process">
          <h2 style={{ marginBottom: "50px", marginTop: "50px" }}>Objects Change Process (MOA)</h2>
          <ul>
            <li> Board Resolution: Obtain board approval for changing the objects in the MOA.</li>
            <li> Shareholder Approval: Obtain approval from shareholders through a special resolution.</li>
            <li> Amended MOA: Prepare the amended Memorandum of Association reflecting the new objects.</li>
            <li> Filing with RoC: File the amended MOA with the Registrar of Companies.</li>
            <li> Updated Certificate: Receive an updated Certificate of Incorporation reflecting the changes.</li>
          </ul>
        </section>

        <section>
          <h2 style={{ marginBottom: "50px", marginTop: "50px" }}>Legal Implications of Objects Change (MOA)</h2>
          <p>
            Changing the objects in the MOA requires compliance with regulatory guidelines and approvals, but it doesn't affect
            the company's legal standing. Contracts related to the previous objects remain valid.
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

export default MOA;
