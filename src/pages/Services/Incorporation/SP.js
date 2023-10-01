import React from 'react';
import 'pages/Services/styles.css';
import FormSimple from 'layouts/sections/input-areas/forms/components/FormSimple';
import DefaultNavbar from 'examples/Navbars/DefaultNavbar';
import routes from 'routes';
 import CenteredFooter from 'examples/Footers/CenteredFooter';

function SP() {
  const documentList = [
    { name: 'Business Plan' },
    { name: 'Owner Details' },
    { name: 'Financial Projections' },
    { name: 'Business Licenses' },
  ];
  const faqList = [
    {
      question: 'Q1: What are the benefits of starting a Sole Proprietorship?',
      answer: 'A1: Starting a sole proprietorship offers complete control, simplified management...'
    },
    {
      question: 'Q2: How long does the process of starting a Sole Proprietorship take?',
      answer: 'A2: The duration varies, but it generally takes a few days to set up...'
    },
    {
      question: 'Q3: Are there any specific legal requirements for a Sole Proprietor?',
      answer: 'A3: No separate legal entity is formed, so legal requirements are tied to the individual...'
    },
    {
      question: 'Q4: How is taxation handled in a Sole Proprietorship?',
      answer: 'A4: In a sole proprietorship, the owner reports business income and expenses on their personal tax return...'
    },
    {
      question: 'Q5: Can a Sole Proprietorship be transformed into a different business structure?',
      answer: 'A5: Yes, a sole proprietorship can be converted into other business structures as the business grows...'
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
          <h1>Sole Proprietorship Incorporation</h1>
          <p className="headline">Embark on your solo entrepreneurial journey</p>
        </header>

        <div className='list'>

          <section className="description-section">
            <h2 style={{ marginBottom: "50px" }}>About Sole Proprietorship Incorporation</h2>
            <p>
              Sole Proprietorship Incorporation involves starting and operating a business as an individual owner.
              In this form of business, you have complete control and responsibility. It's the simplest way to begin
              a business venture and is suitable for small-scale operations.
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
          <h2 style={{ marginBottom: "50px" }}>Key Benefits of Sole Proprietorship</h2>
          <ul>
            <li> Complete Control: As a sole proprietor, you have full control over business decisions.</li>
            <li> Simplified Management: You manage all aspects of the business without shared decision-making.</li>
            <li> Direct Profits: All profits belong to you as the sole owner of the business.</li>
            <li> Easy Setup: Sole proprietorships have minimal legal and regulatory requirements.</li>
            <li> Tax Efficiency: Business income and personal taxes are reported together, simplifying taxation.</li>
          </ul>
        </section>

        <section className="incorporation-process">
          <h2 style={{ marginBottom: "50px", marginTop: "50px" }}>Incorporation Process</h2>
          <ul>
            <li> Choose Business Name: Select a suitable name for your business.</li>
            <li> Register: Depending on local regulations, register your business name and obtain necessary licenses.</li>
            <li> Business Plan: Create a basic business plan outlining your business goals and strategies.</li>
            <li> Financial Setup: Set up a separate bank account for business transactions.</li>
            <li> Begin Operations: Start running your business as the sole proprietor.</li>
          </ul>
        </section>

        <section>
          <h2 style={{ marginBottom: "50px", marginTop: "50px" }}>Owner Responsibilities</h2>
          <p>
            As the sole proprietor, you are responsible for all aspects of the business, including operations, decision-making,
            finances, and legal compliance. You must manage business affairs while ensuring adherence to regulations.
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

export default SP;
