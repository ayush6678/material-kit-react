import React from 'react';
import 'pages/Services/styles.css';
import FormSimple from 'layouts/sections/input-areas/forms/components/FormSimple';
import DefaultNavbar from 'examples/Navbars/DefaultNavbar';
import routes from 'routes';
 import CenteredFooter from 'examples/Footers/CenteredFooter';

function VirtualCFO() {
  const documentList = [
    { name: 'Financial Reports' },
    { name: 'Budget Plans' },
    { name: 'Financial Projections' },
    { name: 'Strategic Financial Advice' },
  ];
  const faqList = [
    {
      question: 'Q1: What are virtual CFO services, and why does a business need them?',
      answer: 'A1: Virtual CFO services provide expert financial management and strategic guidance...'
    },
    {
      question: 'Q2: How can virtual CFO services benefit my business?',
      answer: 'A2: Virtual CFOs offer financial expertise, cost savings, strategic planning, and more...'
    },
    {
      question: 'Q3: What financial documents and services do virtual CFOs provide?',
      answer: 'A3: Virtual CFOs provide financial reports, budget plans, financial projections, and strategic advice...'
    },
    {
      question: 'Q4: Can virtual CFOs help with fundraising and investment strategies?',
      answer: 'A4: Yes, virtual CFOs can assist in fundraising, investor relations, and financial strategy development...'
    },
    {
      question: 'Q5: How can I get started with virtual CFO services?',
      answer: 'A5: You can start by filling out the form below or contacting our team for more information...'
    },
  ];

  return (
    <div>
      <DefaultNavbar
        routes={routes}
        transparent
        sticky
      />

      <div className="container">
        <header>
          <h1>Virtual CFO Services</h1>
          <p className="headline">Expert financial management without the full-time cost</p>
        </header>

        <div className='list'>

          <section className="description-section">
            <h2 style={{ marginBottom: "50px" }}>About Virtual CFO Services</h2>
            <p>
              Our virtual CFO services offer businesses access to experienced financial professionals who can provide
              strategic financial guidance, budget planning, financial reporting, and more. Get the expertise of a CFO
              without the cost of a full-time hire.
            </p><br />
            <h3>Starting at</h3>
            <h1 style={{ color: "#00cc00" }}>Affordable Rates</h1>
          </section>
          <div className='form'>
            <FormSimple />
          </div>
        </div>

        <section className="documents-section">
          <h2 style={{ marginBottom: "100px"}}>Documents and Services</h2>
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
          <h2 style={{ marginBottom: "50px" }}>Key Benefits of Virtual CFO Services</h2>
          <ul>
            <li> Financial Expertise: Access to seasoned financial professionals.</li>
            <li> Cost Savings: Affordable alternative to a full-time CFO hire.</li>
            <li> Strategic Planning: Guidance for long-term financial strategies.</li>
            <li> Fundraising Support: Assistance with fundraising and investor relations.</li>
            <li> Financial Reports: Accurate and timely financial reports and projections.</li>
          </ul>
        </section>

        <section className="incorporation-process">
          <h2 style={{ marginBottom: "50px", marginTop: "50px" }}>How Our Virtual CFO Services Work</h2>
          <ul>
            <li> Initial Consultation: We assess your financial needs and goals.</li>
            <li> Financial Analysis: Our virtual CFO reviews your financial data and develops a strategy.</li>
            <li> Ongoing Support: Access to your virtual CFO for regular updates and guidance.</li>
            <li> Fundraising Assistance: If needed, we help with fundraising strategies.</li>
            <li> Financial Reports: Receive accurate and insightful financial reports and plans.</li>
          </ul>
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

export default VirtualCFO;
