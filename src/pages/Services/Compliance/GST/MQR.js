import React from 'react';
import 'pages/Services/styles.css';
import FormSimple from 'layouts/sections/input-areas/forms/components/FormSimple';
import DefaultNavbar from 'examples/Navbars/DefaultNavbar';
import routes from 'routes';
import DescriptionIcon from '@mui/icons-material/Description';
import CenteredFooter from 'examples/Footers/CenteredFooter';

function MQR() {
  const documentList = [
    { name: 'Sales and Outward Supplies Data (GSTR-1)' },
    { name: 'Summary of Outward Supplies and Input Tax Credit (GSTR-3B)' },
    { name: 'Supporting Invoices and Documents' },
    { name: 'Payment Details' },
  ];
  const faqList = [
    {
      question: 'Q1: What are Monthly/Quarterly GST Returns (GSTR-1 and GSTR-3B)?',
      answer: 'A1: GSTR-1 is the monthly or quarterly return to be filed by registered taxpayers to declare their outward supplies...'
    },
    {
      question: 'Q2: What is the due date for filing GSTR-1 and GSTR-3B?',
      answer: 'A2: GSTR-1 is generally due on the 11th of the following month, while GSTR-3B is due by the 20th...'
    },
    {
      question: 'Q3: What documents are required for filing GSTR-1 and GSTR-3B?',
      answer: 'A3: Documents such as sales and outward supplies data, summary of outward supplies and input tax credit, supporting invoices...'
    },
    {
      question: 'Q4: Are there any consequences of not filing GSTR-1 and GSTR-3B?',
      answer: 'A4: Non-filing or late filing can lead to penalties, interest, and disruptions in input tax credit claims...'
    },
    {
      question: 'Q5: Can taxpayers opt for quarterly filing of GSTR-1 and GSTR-3B?',
      answer: 'A5: Yes, small taxpayers with limited turnover can opt for quarterly filing of these returns...'
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
          <h1>Monthly/Quarterly GST Returns (GSTR-1 and GSTR-3B)</h1>
          <p className="headline">Report your sales and input tax credit accurately and comply with GST regulations</p>
        </header>

        <div className='list'>

          <section className="description-section">
            <h2 style={{ marginBottom: "50px" }}>About GST Returns</h2>
            <p>
              GSTR-1 is the monthly or quarterly return filed by registered taxpayers to declare their outward supplies and sales data.
              GSTR-3B is a summary return that provides details of outward supplies, input tax credit, and tax payable.
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
          <h2 style={{ marginBottom: "50px" }}>Key Importance of GST Returns</h2>
          <ul>
            <li> Tax Compliance: GSTR-1 and GSTR-3B ensure accurate reporting of outward supplies and input tax credit.</li>
            <li> Input Tax Credit: Timely filing helps claim input tax credit, reducing tax liability.</li>
            <li> Transparency: Filing returns provides transparency in sales data and tax calculations.</li>
            <li> Legal Requirement: GST law mandates the regular filing of these returns by registered taxpayers.</li>
            <li> Avoid Penalties: On-time filing helps avoid penalties and interest on late payment of taxes.</li>
          </ul>
        </section>

        <section className="gst-returns-process">
          <h2 style={{ marginBottom: "50px", marginTop: "50px" }}>Filing GSTR-1 and GSTR-3B Process</h2>
          <ul>
            <li> Data Compilation: Gather sales and outward supplies data for the period.</li>
            <li> Return Filling: Fill the GSTR-1 form with accurate sales data and GSTR-3B with input tax credit details.</li>
            <li> Document Attachment: Attach supporting invoices and documents as required.</li>
            <li> Payment Calculation: Calculate tax payable and input tax credit utilization.</li>
            <li> Online Submission: Submit the returns through the GST portal within the due dates.</li>
          </ul>
        </section>

        <section>
          <h2 style={{ marginBottom: "50px", marginTop: "50px" }}>Consequences of Non-Filing</h2>
          <p>
            Non-filing or late filing of GSTR-1 and GSTR-3B can lead to penalties, interest, and disruptions in input tax credit claims.
            Failure to comply with filing regulations may also attract legal actions by tax authorities.
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

export default MQR;
