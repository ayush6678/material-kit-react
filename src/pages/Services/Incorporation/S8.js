import React from 'react';
import 'pages/Services/styles.css';
import FormSimple from 'layouts/sections/input-areas/forms/components/FormSimple';
import DefaultNavbar from 'examples/Navbars/DefaultNavbar';
import routes from 'routes';
import DescriptionIcon from '@mui/icons-material/Description';
import CenteredFooter from 'examples/Footers/CenteredFooter';

function S8() {
  const documentList = [
    { name: 'Memorandum of Association' },
    { name: 'Articles of Association' },
    { name: 'Income and Expenditure Projections' },
    { name: 'Proposed Programs and Activities' },
  ];
  const faqList = [
    {
      question: 'Q1: What are the benefits of establishing a Section 8 or NGO?',
      answer: 'A1: Establishing a Section 8 company provides a legal structure for non-profit activities...'
    },
    {
      question: 'Q2: How long does the process of Section 8 or NGO incorporation usually take?',
      answer: 'A2: The duration varies, but it typically takes a few weeks to formalize the incorporation...'
    },
    {
      question: 'Q3: What is the primary objective of a Section 8 or NGO?',
      answer: 'A3: The primary objective is to promote charitable, scientific, or artistic endeavors without profit distribution...'
    },
    {
      question: 'Q4: Can a Section 8 or NGO generate profits?',
      answer: 'A4: While profits can be generated, they must be used for the organization\'s objectives and not distributed to members...'
    },
    {
      question: 'Q5: What is the process for obtaining tax benefits for a Section 8 or NGO?',
      answer: 'A5: NGOs can apply for tax benefits by registering under Section 12A and Section 80G of the Income Tax Act...'
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
          <h1>Section 8 or NGO Incorporation</h1>
          <p className="headline">Empower positive change through non-profit endeavors</p>
        </header>

        <div className='list'>

          <section className="description-section">
            <h2 style={{ marginBottom: "50px" }}>About Section 8 or NGO Incorporation</h2>
            <p>
              Section 8 or NGO Incorporation involves creating a non-profit organization under Section 8 of the Companies Act.
              This legal structure is ideal for entities dedicated to promoting charitable, educational, scientific, religious,
              or artistic activities. The primary focus is on serving the community without profit distribution.
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
          <h2 style={{ marginBottom: "50px" }}>Key Benefits of Section 8 or NGO Incorporation</h2>
          <ul>
            <li> Legal Recognition: Section 8 companies receive legal recognition for their non-profit objectives.</li>
            <li> Credibility: Being registered under a legal framework enhances the organization's credibility.</li>
            <li> Tax Exemptions: NGOs can enjoy tax benefits on donations received under Section 80G of the Income Tax Act.</li>
            <li> Perpetual Existence: The organization continues to exist despite changes in members.</li>
            <li> Community Impact: NGOs play a vital role in driving positive social and community change.</li>
          </ul>
        </section>

        <section className="incorporation-process">
          <h2 style={{ marginBottom: "50px", marginTop: "50px" }}>Incorporation Process</h2>
          <ul>
            <li> Name Reservation: Choose a suitable name and obtain approval from the regulatory authority.</li>
            <li> Draft Memorandum and Articles: Prepare Memorandum of Association and Articles of Association.</li>
            <li> Income Projections: Present projected income and expenditure for at least three years.</li>
            <li> Programs and Activities: Outline proposed programs, activities, and their impact.</li>
            <li> Registration: Submit incorporation forms and required documents for approval.</li>
          </ul>
        </section>

        <section>
          <h2 style={{ marginBottom: "50px", marginTop: "50px" }}>Primary Objectives and Activities</h2>
          <p>
            The primary objective of a Section 8 or NGO is to promote activities such as charity, education, social welfare,
            religion, culture, and more. These objectives must be exclusively for public interest without profit distribution.
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

export default S8;
