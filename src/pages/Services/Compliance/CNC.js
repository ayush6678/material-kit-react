import React from 'react';
import 'pages/Services/styles.css';
import FormSimple from 'layouts/sections/input-areas/forms/components/FormSimple';
import DefaultNavbar from 'examples/Navbars/DefaultNavbar';
import routes from 'routes';
 import CenteredFooter from 'examples/Footers/CenteredFooter';

function CNC() {
  const documentList = [
    { name: 'Board Resolution' },
    { name: 'New Incorporation Certificate' },
  ];
  const faqList = [
    {
      question: 'Q1: What is the process for changing the name of a Company/LLP?',
      answer: 'A1: The process involves obtaining board approval, applying for name availability...'
    },
    {
      question: 'Q2: How long does it take to change the company/LLP name?',
      answer: 'A2: The duration varies depending on the processing time of government authorities...'
    },
    {
      question: 'Q3: Can any name be chosen for the company/LLP?',
      answer: 'A3: The chosen name must adhere to naming guidelines and be unique and not conflicting...'
    },
    {
      question: 'Q4: What happens to existing contracts and agreements after a name change?',
      answer: 'A4: Contracts and agreements remain valid, and the name change is updated in official records...'
    },
    {
      question: 'Q5: Is it necessary to change the name on licenses and permits after the change?',
      answer: 'A5: Yes, the company/LLP should update its name on all relevant licenses and permits...'
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
          <h1>Changing Name of your Company/LLP</h1>
          <p className="headline">Modify your business identity with a new name</p>
        </header>

        <div className='list'>

          <section className="description-section">
            <h2 style={{ marginBottom: "50px" }}>About Changing Company/LLP Name</h2>
            <p>
              Changing the name of your Company/LLP involves a formal process that includes obtaining board approval,
              checking name availability, and updating official documents. A new name can reflect evolving business objectives
              and rebranding efforts.
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
          <h2 style={{ marginBottom: "50px" }}>Key Importance of Changing Company/LLP Name</h2>
          <ul>
            <li> Rebranding Opportunity: A new name can align with changing business goals and repositioning.</li>
            <li> Legal Clarity: Changing the name updates official records and avoids confusion.</li>
            <li> Reflecting Evolution: The new name can reflect business expansion and innovation.</li>
            <li> Marketing Impact: A strategic name change can enhance market positioning and perception.</li>
            <li> Identity Update: A new name provides a fresh identity for the company/LLP.</li>
          </ul>
        </section>

        <section className="change-process">
          <h2 style={{ marginBottom: "50px", marginTop: "50px" }}>Name Change Process</h2>
          <ul>
            <li> Board Resolution: Obtain board approval to change the name and authorize the process.</li>
            <li> Name Availability: Check the availability of the desired name with the relevant authority.</li>
            <li> Application Submission: File the application for name change with required documents.</li>
            <li> Government Approval: Await approval from the government authorities for the name change.</li>
            <li> Updated Documents: Once approved, update documents like the Incorporation Certificate.</li>
          </ul>
        </section>

        <section>
          <h2 style={{ marginBottom: "50px", marginTop: "50px" }}>Implications of Name Change</h2>
          <p>
            After changing the name, existing contracts and agreements remain valid, and official records are updated.
            The company/LLP should also update its name on licenses, permits, and other relevant documents.
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

export default CNC;
