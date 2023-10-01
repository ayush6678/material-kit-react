import React from 'react';
import 'pages/Services/styles.css';
import FormSimple from 'layouts/sections/input-areas/forms/components/FormSimple';
import DefaultNavbar from 'examples/Navbars/DefaultNavbar';
import routes from 'routes';
 import CenteredFooter from 'examples/Footers/CenteredFooter';

function INC() {
  const documentList = [
    { name: 'Declaration by Director' },
    { name: 'Copy of Board Resolution' },
    { name: 'Proof of Registered Office Address' },
    { name: 'Copy of Certificate of Incorporation' },
  ];
  const faqList = [
    {
      question: 'Q1: What is the purpose of the INC-20A form (Business Commencement form)?',
      answer: 'A1: The INC-20A form is used to declare that the company has commenced its business activities...'
    },
    {
      question: 'Q2: When should the INC-20A form be filed?',
      answer: 'A2: The form must be filed within 180 days of the date of incorporation of the company...'
    },
    {
      question: 'Q3: What documents are required for filing the INC-20A form?',
      answer: 'A3: Documents such as a declaration by a director, board resolution, proof of office address, and COI...'
    },
    {
      question: 'Q4: Are there any consequences of not filing the INC-20A form?',
      answer: 'A4: Non-filing can lead to penalties, and the Registrar may initiate the process of striking off the company...'
    },
    {
      question: 'Q5: Is it mandatory for all newly incorporated companies to file INC-20A?',
      answer: 'A5: Yes, all companies incorporated after the commencement of the Companies (Amendment) Act, 2019 are required to file...'
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
          <h1>INC-20A (Business Commencement Form)</h1>
          <p className="headline">Declare the commencement of business activities for your company</p>
        </header>

        <div className='list'>

          <section className="description-section">
            <h2 style={{ marginBottom: "50px" }}>About INC-20A Form</h2>
            <p>
              The INC-20A form, also known as the Business Commencement form, is used to declare that a newly incorporated
              company has commenced its business activities. This form ensures compliance with regulatory requirements
              and avoids potential penalties.
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
          <h2 style={{ marginBottom: "50px" }}>Key Importance of INC-20A Form</h2>
          <ul>
            <li> Regulatory Compliance: Filing the INC-20A form ensures compliance with business commencement requirements.</li>
            <li> Commencement Declaration: The form declares the company's commencement of business activities.</li>
            <li> Avoid Penalties: Timely filing avoids penalties and potential consequences of non-compliance.</li>
            <li> Legal Requirement: It is mandatory for companies incorporated after specific amendment acts.</li>
            <li> Proof of Commencement: The form serves as legal proof of the company's commencement of operations.</li>
          </ul>
        </section>

        <section className="inc20a-process">
          <h2 style={{ marginBottom: "50px", marginTop: "50px" }}>Filing INC-20A Form Process</h2>
          <ul>
            <li> Declaration by Director: Obtain a declaration from a director confirming business commencement.</li>
            <li> Board Resolution: Prepare a board resolution confirming business commencement.</li>
            <li> Registered Office Proof: Provide proof of the registered office address of the company.</li>
            <li> Certificate of Incorporation: Attach a copy of the Certificate of Incorporation.</li>
            <li> Form Submission: Fill and submit the INC-20A form along with required documents.</li>
            <li> Registrar Approval: Registrar reviews the form and approves business commencement.</li>
          </ul>
        </section>

        <section>
          <h2 style={{ marginBottom: "50px", marginTop: "50px" }}>Consequences of Non-filing</h2>
          <p>
            Failure to file the INC-20A form within the stipulated time can lead to penalties. Additionally, the Registrar
            may initiate the process of striking off the company's name from the register.
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

export default INC;
