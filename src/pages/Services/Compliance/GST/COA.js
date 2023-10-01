import React from 'react';
import 'pages/Services/styles.css';
import FormSimple from 'layouts/sections/input-areas/forms/components/FormSimple';
import DefaultNavbar from 'examples/Navbars/DefaultNavbar';
import routes from 'routes';
 import CenteredFooter from 'examples/Footers/CenteredFooter';

function COA() {
  const documentList = [
    { name: 'Updated Address Proof' },
    { name: 'Updated Contact Details' },
    { name: 'Updated Identification Documents' },
    { name: 'Authorization Letter' },
  ];
  const faqList = [
    {
      question: 'Q1: What is the procedure for Change in Address/Contact/Other Information?',
      answer: 'A1: Change in Address/Contact/Other Information requires updating the respective details with the relevant authorities...'
    },
    {
      question: 'Q2: When should the changes be reported?',
      answer: 'A2: Changes should be reported as soon as they occur or within the specified timeline to ensure accurate records...'
    },
    {
      question: 'Q3: What documents are required for updating information?',
      answer: 'A3: Documents such as updated address proof, updated contact details, updated identification documents, and authorization letter...'
    },
    {
      question: 'Q4: Are there any consequences of not updating information?',
      answer: 'A4: Failure to update information may result in outdated records, missed communications, legal or compliance issues, and penalties...'
    },
    {
      question: 'Q5: Who can request changes in information?',
      answer: 'A5: Authorized individuals, such as company directors, partners, or designated representatives, can initiate the process...'
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
          <h1>Change in Address/Contact/Other Information</h1>
          <p className="headline">Ensure accurate records by updating your company's information as needed</p>
        </header>

        <div className='list'>

          <section className="description-section">
            <h2 style={{ marginBottom: "50px" }}>About Information Update</h2>
            <p>
              Information changes such as address, contact details, and other key information should be promptly updated to maintain accurate records
              and ensure effective communication with authorities and stakeholders.
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
          <h2 style={{ marginBottom: "50px" }}>Key Importance of Information Update</h2>
          <ul>
            <li> Accurate Records: Updating information ensures that company records reflect the most current and accurate details.</li>
            <li> Compliance: Timely updates help the business comply with legal and regulatory requirements.</li>
            <li> Effective Communication: Updated contact details enable seamless communication with authorities and stakeholders.</li>
            <li> Avoid Penalties: Ensuring accurate records can prevent penalties due to non-compliance or outdated information.</li>
            <li> Transparency: Updated information promotes transparency and trust with partners, customers, and authorities.</li>
          </ul>
        </section>

        <section className="change-info-process">
          <h2 style={{ marginBottom: "50px", marginTop: "50px" }}>Updating Information Process</h2>
          <ul>
            <li> Document Preparation: Gather required updated documents such as address proof, contact details, and identification documents.</li>
            <li> Information Form Filling: Fill the information update form accurately and provide necessary details.</li>
            <li> Document Submission: Attach the required updated documents along with the information update form.</li>
            <li> Verification: Verify the information provided before submission.</li>
            <li> Online Submission: Submit the updated information through the relevant portal or authority.</li>
          </ul>
        </section>

        <section>
          <h2 style={{ marginBottom: "50px", marginTop: "50px" }}>Consequences of Non-Update</h2>
          <p>
            Not updating information may result in outdated records, missed communications, potential legal or compliance issues, and penalties.
            It's crucial to ensure that company details are accurate and up-to-date.
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

export default COA;
