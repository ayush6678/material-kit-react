import React from 'react';
import 'pages/Services/styles.css';
import FormSimple from 'layouts/sections/input-areas/forms/components/FormSimple';
import DefaultNavbar from 'examples/Navbars/DefaultNavbar';
import routes from 'routes';
import DescriptionIcon from '@mui/icons-material/Description';
import CenteredFooter from 'examples/Footers/CenteredFooter';

function OPC() {
  const documentList = [
    { name: 'Business Plan' },
    { name: 'Memorandum of Association' },
    { name: 'Articles of Association' },
    { name: 'Shareholder Agreement' },
  ];
  const faqList = [
    {
      question: 'Q1: What are the benefits of incorporating a One Person Company?',
      answer: 'A1: Incorporating a One Person Company offers limited liability protection...'
    },
    {
      question: 'Q2: How long does the OPC incorporation process take?',
      answer: 'A2: The duration varies, but it typically takes a few weeks to complete...'
    },
    {
      question: 'Q3: Are there any specific requirements for the sole director?',
      answer: 'A3: Yes, a One Person Company is required to have a single director...'
    },
    {
      question: 'Q4: What is the minimum share capital required for OPC incorporation?',
      answer: 'A4: There is no fixed minimum share capital, but OPCs usually have a nominal amount...'
    },
    {
      question: 'Q5: Can foreign nationals be directors or shareholders of an OPC?',
      answer: 'A5: Yes, foreign nationals can serve as directors and shareholders in One Person Companies...'
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
          <h1>One Person Company (OPC) Incorporation</h1>
          <p className="headline">Your pathway to solo business ownership</p>
        </header>

        <div className='list'>

          <section className="description-section">
            <h2 style={{ marginBottom: "50px" }}>About One Person Company (OPC) Incorporation</h2>
            <p>
              One Person Company (OPC) Incorporation is the process of establishing a business entity that
              grants limited liability protection to its sole owner. This form of incorporation creates a legal
              distinction between the company and its owner, enabling the business to operate as an independent
              legal entity.
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
          <h2 style={{ marginBottom: "50px" }}>Key Advantages of One Person Company (OPC) Incorporation</h2>
          <ul>
            <li> Limited Liability: The sole owner is shielded from personal liability for company debts.</li>
            <li> Separate Legal Entity: The OPC possesses a distinct legal identity apart from the owner.</li>
            <li> Easier Fundraising: Attract investors by issuing shares and raising capital.</li>
            <li> Continuity of Existence: The company persists even if the owner changes.</li>
            <li> Tax Benefits: Access to various tax advantages and deductions.</li>
          </ul>
        </section>

        <section className="incorporation-process">
          <h2 style={{ marginBottom: "50px", marginTop: "50px" }}>Incorporation Process</h2>
          <ul>
            <li> Name Reservation: Choose an exclusive name and have it approved by the regulatory authority.</li>
            <li> Document Preparation: Draft essential documents such as Articles of Association and Memorandum of Association.</li>
            <li> Submission of Application: Submit incorporation forms and necessary documents to the regulatory authority.</li>
            <li> Certificate of Incorporation: Upon approval, receive the Certificate of Incorporation.</li>
            <li> Post-Incorporation Tasks: Conduct initial meetings, allocate shares, and obtain required licenses.</li>
          </ul>
        </section>

        <section>
          <h2 style={{ marginBottom: "50px", marginTop: "50px" }}>Sole Director Requirements</h2>
          <p>
            One Person Companies are mandated to have a single director. The director must be of legal age and an individual,
            with no limitations on nationality or residency. It's crucial to understand that the director holds fiduciary duties
            and legal obligations to act in the company's best interests.
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

export default OPC;
