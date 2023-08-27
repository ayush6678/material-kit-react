import React from 'react';
import 'pages/Services/styles.css';
import FormSimple from 'layouts/sections/input-areas/forms/components/FormSimple';
import DefaultNavbar from 'examples/Navbars/DefaultNavbar';
import routes from 'routes';
import DescriptionIcon from '@mui/icons-material/Description';
import CenteredFooter from 'examples/Footers/CenteredFooter';

function ARC() {
  const documentList = [
    { name: 'Summary of Outward Supplies and Inward Supplies' },
    { name: 'Summary of Input Tax Credit (ITC) Availed' },
    { name: 'Details of Tax Paid' },
    { name: 'Reconciliation Statement' },
  ];
  const faqList = [
    {
      question: 'Q1: What is Annual Consolidated Return (GSTR-9)?',
      answer: 'A1: GSTR-9 is an annual return that registered taxpayers file to provide a consolidated summary of their GST transactions...'
    },
    {
      question: 'Q2: When is GSTR-9 due for filing?',
      answer: 'A2: GSTR-9 is due on or before the 31st of December following the end of the financial year...'
    },
    {
      question: 'Q3: What documents are required for filing GSTR-9?',
      answer: 'A3: Documents such as summary of outward supplies and inward supplies, summary of input tax credit availed, details of tax paid...'
    },
    {
      question: 'Q4: Are there any penalties for non-filing or late filing of GSTR-9?',
      answer: 'A4: Yes, non-filing or late filing can lead to penalties and legal actions. Businesses may face disruptions in input tax credit claims...'
    },
    {
      question: 'Q5: Who is required to file GSTR-9?',
      answer: 'A5: All registered taxpayers who are not composition scheme holders, Input Service Distributors, or Non-Resident Taxable Persons...'
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
          <h1>Annual Consolidated Return (GSTR-9)</h1>
          <p className="headline">Provide a consolidated summary of your GST transactions and comply with annual reporting</p>
        </header>

        <div className='list'>

          <section className="description-section">
            <h2 style={{ marginBottom: "50px" }}>About GSTR-9 Return</h2>
            <p>
              GSTR-9 is an annual return filed by registered taxpayers to provide a consolidated summary of their GST transactions,
              including outward supplies, inward supplies, input tax credit availed, and tax paid during the financial year.
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
          <h2 style={{ marginBottom: "50px" }}>Key Importance of GSTR-9 Return</h2>
          <ul>
            <li> Annual Reporting: GSTR-9 provides a consolidated summary of GST transactions for the entire financial year.</li>
            <li> Transaction Reconciliation: Businesses can reconcile outward supplies, input tax credit, and tax paid with the annual return.</li>
            <li> Compliance with Law: Filing GSTR-9 ensures compliance with annual reporting requirements under the GST regime.</li>
            <li> Input Tax Credit Reconciliation: Taxpayers can match input tax credit availed and utilized throughout the year.</li>
            <li> Avoid Penalties: Timely filing helps avoid penalties, legal actions, and disruptions in input tax credit claims.</li>
          </ul>
        </section>

        <section className="gstr9-return-process">
          <h2 style={{ marginBottom: "50px", marginTop: "50px" }}>Filing GSTR-9 Process</h2>
          <ul>
            <li> Data Compilation: Gather details of outward supplies, inward supplies, input tax credit availed, and tax paid.</li>
            <li> Return Filling: Fill the GSTR-9 form with accurate and complete details.</li>
            <li> Document Attachment: Attach supporting documents and reconciliation statement.</li>
            <li> Verification: Verify the information provided in the return.</li>
            <li> Online Submission: Submit the return through the GST portal by the due date.</li>
          </ul>
        </section>

        <section>
          <h2 style={{ marginBottom: "50px", marginTop: "50px" }}>Penalties for Non-Filing</h2>
          <p>
            Non-filing or late filing of GSTR-9 can lead to penalties, legal actions, and disruptions in input tax credit claims.
            Businesses failing to comply with the annual reporting requirements may also face legal consequences.
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
