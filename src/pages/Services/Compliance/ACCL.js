import React from 'react';
import 'pages/Services/styles.css';
import FormSimple from 'layouts/sections/input-areas/forms/components/FormSimple';
import DefaultNavbar from 'examples/Navbars/DefaultNavbar';
import routes from 'routes';
 import CenteredFooter from 'examples/Footers/CenteredFooter';

function ACCL() {
  const documentList = [
    { name: 'Financial Statements' },
    { name: 'Annual Return' },
  ];
  const faqList = [
    {
      question: 'Q1: What is Annual Company Compliance (Lite)?',
      answer: 'A1: Annual Company Compliance (Lite) involves fulfilling basic legal requirements...'
    },
    {
      question: 'Q2: When should a company complete Annual Company Compliance (Lite)?',
      answer: 'A2: Annual compliance deadlines vary based on the company\'s financial year and jurisdiction...'
    },
    {
      question: 'Q3: What are the potential consequences of not completing Annual Company Compliance?',
      answer: 'A3: Non-compliance can result in penalties, legal actions, and reputational damage...'
    },
    {
      question: 'Q4: Is Annual Company Compliance (Lite) suitable for all types of companies?',
      answer: 'A4: Yes, most companies are required to fulfill basic annual compliance requirements...'
    },
    {
      question: 'Q5: What is the purpose of filing an Annual Return?',
      answer: 'A5: The Annual Return provides updated information about the company\'s directors, shareholders, and financials...'
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
          <h1>Annual Company Compliance (Lite)</h1>
          <p className="headline">Meet essential annual legal obligations</p>
        </header>

        <div className='list'>

          <section className="description-section">
            <h2 style={{ marginBottom: "50px" }}>About Annual Company Compliance (Lite)</h2>
            <p>
              Annual Company Compliance (Lite) involves fulfilling fundamental legal requirements to maintain legal standing.
              This includes submitting essential documents such as financial statements and the annual return. Compliance helps
              companies meet their obligations without the complexities of comprehensive compliance procedures.
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
          <h2 style={{ marginBottom: "50px" }}>Key Benefits of Annual Company Compliance (Lite)</h2>
          <ul>
            <li> Legal Standing: Compliance ensures the company's legal status remains intact.</li>
            <li> Simplicity: Basic compliance requirements involve fewer procedures and paperwork.</li>
            <li> Avoiding Penalties: Fulfilling obligations on time helps avoid penalties and legal actions.</li>
            <li> Transparency: The annual return provides updated information about the company's status.</li>
            <li> Continuity: Compliance contributes to the company's continuity and reputation.</li>
          </ul>
        </section>

        <section className="compliance-process">
          <h2 style={{ marginBottom: "50px", marginTop: "50px" }}>Compliance Process</h2>
          <ul>
            <li> Financial Statements: Prepare accurate financial statements, including balance sheets and profit and loss statements.</li>
            <li> Annual Return: File the annual return with the relevant regulatory authority.</li>
          </ul>
        </section>

        <section>
          <h2 style={{ marginBottom: "50px", marginTop: "50px" }}>Consequences of Non-Compliance</h2>
          <p>
            Failure to fulfill basic annual compliance requirements can lead to financial penalties, legal actions,
            and reputational damage. It can also result in the company losing its legal status.
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

export default ACCL;
