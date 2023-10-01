import React from 'react';
import 'pages/Services/styles.css';
import FormSimple from 'layouts/sections/input-areas/forms/components/FormSimple';
import DefaultNavbar from 'examples/Navbars/DefaultNavbar';
import routes from 'routes';
import DescriptionIcon from '@mui/icons-material/Description';
import CenteredFooter from 'examples/Footers/CenteredFooter';

function PayrollServices() {
  const documentList = [
    { name: 'Employee Payroll Records' },
    { name: 'Tax Deduction Documents' },
    { name: 'Payroll Tax Reports' },
    { name: 'Direct Deposit Authorization Forms' },
  ];
  const faqList = [
    {
      question: 'Q1: What are payroll services, and why do businesses need them?',
      answer: 'A1: Payroll services involve managing employee compensation, tax withholdings, and compliance...'
    },
    {
      question: 'Q2: How can professional payroll services benefit my business?',
      answer: 'A2: Professional payroll services ensure accurate and timely payroll processing, tax compliance...'
    },
    {
      question: 'Q3: What are the key documents and records that payroll services manage?',
      answer: 'A3: Payroll services handle employee payroll records, tax deduction documents, payroll tax reports, and more...'
    },
    {
      question: 'Q4: Can payroll services assist with direct deposits and electronic payments?',
      answer: 'A4: Yes, many payroll services offer direct deposit options and electronic payment authorization forms...'
    },
    {
      question: 'Q5: How can I get started with professional payroll services?',
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
          <h1>Professional Payroll Services</h1>
          <p className="headline">Streamlining your payroll processes</p>
        </header>

        <div className='list'>

          <section className="description-section">
            <h2 style={{ marginBottom: "50px" }}>About Payroll Services</h2>
            <p>
              Our professional payroll services handle all aspects of employee compensation, tax withholdings,
              and compliance. We ensure that your employees are paid accurately and on time, while also managing tax
              reporting and compliance.
            </p><br />
            <h3>Starting at</h3>
            <h1 style={{ color: "#00cc00" }}>Affordable Rates</h1>
          </section>
          <div className='form'>
            <FormSimple />
          </div>
        </div>

        <section className="documents-section">
          <h2 style={{ marginBottom: "100px"}}>List of Managed Documents</h2>
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
          <h2 style={{ marginBottom: "50px" }}>Key Benefits of Professional Payroll Services</h2>
          <ul>
            <li> Accuracy: Ensure accurate and error-free payroll processing.</li>
            <li> Compliance: Stay compliant with tax regulations and reporting requirements.</li>
            <li> Time Savings: Free up your time by outsourcing payroll management.</li>
            <li> Direct Deposit: Offer direct deposit options for employee payments.</li>
            <li> Expert Support: Access expert advice and assistance for payroll-related issues.</li>
          </ul>
        </section>

        <section className="incorporation-process">
          <h2 style={{ marginBottom: "50px", marginTop: "50px" }}>Our Payroll Process</h2>
          <ul>
            <li> Employee Data Collection: Gather employee information and set up payroll profiles.</li>
            <li> Payroll Processing: Calculate and process employee payments, including taxes and deductions.</li>
            <li> Tax Reporting: Generate payroll tax reports and submit them to the relevant authorities.</li>
            <li> Direct Deposits: Facilitate direct deposits for employee paychecks.</li>
            <li> Ongoing Support: Our team is here to address your payroll-related queries and concerns.</li>
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

export default PayrollServices;
