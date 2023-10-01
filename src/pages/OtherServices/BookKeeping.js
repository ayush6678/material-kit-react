import React from 'react';
import 'pages/Services/styles.css';
import FormSimple from 'layouts/sections/input-areas/forms/components/FormSimple';
import DefaultNavbar from 'examples/Navbars/DefaultNavbar';
import routes from 'routes';
import DescriptionIcon from '@mui/icons-material/Description';
import CenteredFooter from 'examples/Footers/CenteredFooter';

function BookKeepingServices() {
  const documentList = [
    { name: 'Financial Statements' },
    { name: 'Income and Expense Records' },
    { name: 'Bank Statements' },
    { name: 'Tax Documents' },
  ];
  const faqList = [
    {
      question: 'Q1: What is bookkeeping, and why is it important for businesses?',
      answer: 'A1: Bookkeeping is the systematic recording and organizing of financial transactions...'
    },
    {
      question: 'Q2: How can professional bookkeeping services benefit my business?',
      answer: 'A2: Professional bookkeepers ensure accurate financial records, help with tax compliance...'
    },
    {
      question: 'Q3: What are the key financial documents that bookkeepers maintain?',
      answer: 'A3: Bookkeepers manage financial statements, income and expense records, bank statements, and tax documents...'
    },
    {
      question: 'Q4: Do I need to hire a bookkeeper or can I use software for bookkeeping?',
      answer: 'A4: It depends on your business size and complexity. Small businesses may use software, while larger ones often employ bookkeepers...'
    },
    {
      question: 'Q5: How can I get started with professional bookkeeping services?',
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
          <h1>Professional Bookkeeping Services</h1>
          <p className="headline">Keeping your finances in order</p>
        </header>

        <div className='list'>

          <section className="description-section">
            <h2 style={{ marginBottom: "50px" }}>About Bookkeeping Services</h2>
            <p>
              Our professional bookkeeping services ensure that your financial records are accurate,
              organized, and compliant with regulations. We help businesses of all sizes maintain their financial
              health, so you can focus on growing your business.
            </p><br />
            <h3>Starting at</h3>
            <h1 style={{ color: "#00cc00" }}>Affordable Rates</h1>
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
          <h2 style={{ marginBottom: "50px" }}>Key Benefits of Professional Bookkeeping</h2>
          <ul>
            <li> Financial Accuracy: Ensure your financial records are error-free and up-to-date.</li>
            <li> Compliance: Stay compliant with tax regulations and reporting requirements.</li>
            <li> Time Savings: Free up your time to focus on core business activities.</li>
            <li> Financial Insights: Gain valuable insights into your business's financial health.</li>
            <li> Peace of Mind: Rest assured that your finances are in expert hands.</li>
          </ul>
        </section>

        <section className="incorporation-process">
          <h2 style={{ marginBottom: "50px", marginTop: "50px" }}>Our Bookkeeping Process</h2>
          <ul>
            <li> Initial Assessment: We assess your business's bookkeeping needs and tailor our services accordingly.</li>
            <li> Data Collection: Gather relevant financial documents and records for analysis.</li>
            <li> Data Entry and Organization: Accurately record and organize financial transactions.</li>
            <li> Regular Reporting: Provide regular financial reports to help you make informed decisions.</li>
            <li> Ongoing Support: Our team is here to answer your questions and address your financial concerns.</li>
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

export default BookKeepingServices;
