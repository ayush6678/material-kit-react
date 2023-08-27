import React from 'react';
import 'pages/Services/styles.css';
import FormSimple from 'layouts/sections/input-areas/forms/components/FormSimple';
import DefaultNavbar from 'examples/Navbars/DefaultNavbar';
import routes from 'routes';
import DescriptionIcon from '@mui/icons-material/Description';
import CenteredFooter from 'examples/Footers/CenteredFooter';

function LLPI() {
  const documentList = [
    { name: 'Partnership Agreement' },
    { name: 'LLP Incorporation Document' },
    { name: 'Partner Details' },
    { name: 'Address Proof' },
  ];
  const faqList = [
    {
      question: 'Q1: What are the advantages of forming a Limited Liability Partnership?',
      answer: 'A1: Forming an LLP provides partners with limited liability protection...'
    },
    {
      question: 'Q2: How long does the LLP incorporation process typically take?',
      answer: 'A2: The duration varies, but it generally takes a few weeks to complete...'
    },
    {
      question: 'Q3: Is there a requirement for a minimum number of partners in an LLP?',
      answer: 'A3: Yes, an LLP must have at least two partners at the time of incorporation...'
    },
    {
      question: 'Q4: What is the role of a designated partner in an LLP?',
      answer: 'A4: Designated partners are responsible for compliance and legal obligations of the LLP...'
    },
    {
      question: 'Q5: Can an LLP have foreign nationals as partners?',
      answer: 'A5: Yes, foreign nationals can be partners in an LLP, bringing diverse expertise...'
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
          <h1>Limited Liability Partnership (LLP) Incorporation</h1>
          <p className="headline">Your gateway to shared liability and collaboration</p>
        </header>

        <div className='list'>

          <section className="description-section">
            <h2 style={{ marginBottom: "50px" }}>About Limited Liability Partnership (LLP) Incorporation</h2>
            <p>
              Limited Liability Partnership (LLP) Incorporation is the process of establishing a partnership
              that provides partners with limited liability protection. This type of incorporation combines the
              advantages of a partnership and a company, offering shared responsibility while safeguarding partners
              from each other's liabilities.
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
          <h2 style={{ marginBottom: "50px" }}>Key Benefits of Limited Liability Partnership (LLP)</h2>
          <ul>
            <li> Limited Liability: Partners are protected from personal liability for each other's actions.</li>
            <li> Flexibility: LLP offers the organizational flexibility of a partnership with limited liability.</li>
            <li> Perpetual Succession: The LLP continues to exist despite changes in partners.</li>
            <li> Separate Legal Entity: The LLP is a distinct legal entity, separate from its partners.</li>
            <li> Credibility: LLP status can enhance the credibility of the partnership.</li>
          </ul>
        </section>

        <section className="incorporation-process">
          <h2 style={{ marginBottom: "50px", marginTop: "50px" }}>Incorporation Process</h2>
          <ul>
            <li> Name Reservation: Select a unique name and obtain approval from the regulatory authority.</li>
            <li> Document Preparation: Create necessary documents like the Partnership Agreement and LLP Incorporation Document.</li>
            <li> Filing Application: Submit incorporation forms and required documents to the regulatory authority.</li>
            <li> LLP Incorporation Certificate: Once approved, receive the LLP Incorporation Certificate.</li>
            <li> Post-Incorporation Formalities: Fulfill initial requirements, appoint designated partners, and acquire licenses.</li>
          </ul>
        </section>

        <section>
          <h2 style={{ marginBottom: "50px", marginTop: "50px" }}>Partner Requirements</h2>
          <p>
            An LLP must have a minimum of two partners at the time of incorporation. Partners can be individuals or corporate entities.
            Additionally, there must be designated partners who hold responsibilities for compliance and legal matters.
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

export default LLPI;
