import React from 'react';
import 'pages/Services/styles.css';
import FormSimple from 'layouts/sections/input-areas/forms/components/FormSimple';
import DefaultNavbar from 'examples/Navbars/DefaultNavbar';
import routes from 'routes';
 import CenteredFooter from 'examples/Footers/CenteredFooter';

function SERS() {
  const documentList = [
    { name: 'Identity Proof' },
    { name: 'Address Proof' },
    { name: 'Business Details' },
    { name: 'Number of Employees' },
  ];
  const faqList = [
    {
      question: 'Q1: What is Shop and Establishment Registration?',
      answer: 'A1: Shop and Establishment Registration is a mandatory requirement for businesses operating in commercial premises. It is governed by state-specific labor laws...'
    },
    {
      question: 'Q2: Why is Shop and Establishment Registration important?',
      answer: 'A2: Shop and Establishment Registration provides legal recognition to the business and ensures compliance with labor laws. It is necessary for opening a bank account, obtaining licenses, etc...'
    },
    {
      question: 'Q3: What documents are required for Shop and Establishment Registration?',
      answer: 'A3: Documents such as identity proof, address proof, business details, and number of employees are required for registration...'
    },
    {
      question: 'Q4: How long does it take to get registered?',
      answer: 'A4: The registration process usually takes around 7 to 15 working days, depending on the state and completion of documentation...'
    },
    {
      question: 'Q5: Is Shop and Establishment Registration applicable to all businesses?',
      answer: 'A5: Yes, businesses operating in commercial establishments, including shops, offices, hotels, and establishments, are required to register...'
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
          <h1>Shop and Establishment Registration</h1>
          <p className="headline">Comply with labor laws and gain legal recognition for your commercial establishment</p>
        </header>

        <div className='list'>

          <section className="description-section">
            <h2 style={{ marginBottom: "50px" }}>About Shop and Establishment Registration</h2>
            <p>
              Shop and Establishment Registration is a mandatory requirement for businesses operating in commercial premises, such as shops, offices, hotels, and establishments. It ensures compliance with state-specific labor laws and provides legal recognition to the business.
              This registration is essential for opening bank accounts, obtaining licenses, and more.
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
          <h2 style={{ marginBottom: "50px" }}>Key Benefits of Shop and Establishment Registration</h2>
          <ul>
            <li> Legal Recognition: Registration provides legal recognition to the business under state labor laws.</li>
            <li> Compliance: It ensures compliance with labor laws related to working conditions, rest periods, and more.</li>
            <li> Licensing: Many licenses and permits require a valid Shop and Establishment Registration.</li>
            <li> Bank Account Opening: Banks often require this registration for opening business accounts.</li>
            <li> Employee Welfare: It ensures proper working conditions and welfare of employees.</li>
          </ul>
        </section>

        <section className="registration-process">
          <h2 style={{ marginBottom: "50px", marginTop: "50px" }}>Shop and Establishment Registration Process</h2>
          <ul>
            <li> Gather Documents: Collect necessary documents such as identity proof, address proof, business details, and number of employees.</li>
            <li> Application Submission: Submit the application along with required documents to the respective local authority.</li>
            <li> Inspection: The authority may conduct an inspection of the premises to verify the information provided.</li>
            <li> Issuance of Certificate: Upon approval, the registration certificate is issued, usually valid for a certain period.</li>
          </ul>
        </section>

        <section>
          <h2 style={{ marginBottom: "50px", marginTop: "50px" }}>Applicability to Different Businesses</h2>
          <p>
            Shop and Establishment Registration is applicable to all businesses operating in commercial establishments, regardless of their size or nature of work.
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

export default SERS;
