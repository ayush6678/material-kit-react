import React from 'react';
import 'pages/Services/styles.css';
import FormSimple from 'layouts/sections/input-areas/forms/components/FormSimple';
import DefaultNavbar from 'examples/Navbars/DefaultNavbar';
import routes from 'routes';
 import CenteredFooter from 'examples/Footers/CenteredFooter';

function PCL() {
  const documentList = [
    { name: 'Business Plan' },
    { name: 'Memorandum of Association' },
    { name: 'Articles of Association' },
    { name: 'Shareholder Agreement' },
  ];
  const faqList = [
    {
      question: 'Q1: What are the benefits of incorporating a private company?',
      answer: 'A1: Incorporating a private company offers limited liability protection...'
    },
    {
      question: 'Q2: How long does the incorporation process take?',
      answer: 'A2: The duration varies, but it typically takes a few weeks to complete...'
    },
    {
      question: 'Q3: Are there any specific requirements for directors?',
      answer: 'A3: Yes, private companies are required to have at least one director...'
    },
    {
      question: 'Q4: What is the minimum share capital required for incorporation?',
      answer: 'A4: There is no fixed minimum share capital, but companies usually have a nominal amount...'
    },
    {
      question: 'Q5: Can foreign nationals be directors or shareholders?',
      answer: 'A5: Yes, foreign nationals can serve as directors and shareholders in private companies...'
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
          <h1>Private Company Limited Incorporation</h1>
          <p className="headline">Your pathway to business success</p>
        </header>

        <div className='list'>

          <section className="description-section">
            <h2 style={{ marginBottom: "50px" }}>About Private Company Limited Incorporation</h2>
            <p>
              Private Company Limited Incorporation is the process of forming a business entity that
              offers limited liability protection to its owners. This type of incorporation provides a legal
              separation between the company and its owners, allowing the business to operate as a separate
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
                <img src='https://cdn-icons-png.flaticon.com/512/1183/1183931.png' alt='docs'></img>
                <p>{document.name}</p>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 style={{ marginBottom: "50px" }}>Key Benefits of Private Company Limited Incorporation</h2>
          <ul>
            <li> Limited Liability: Shareholders are not personally liable for company debts.</li>
            <li> Separate Legal Entity: The company has its own legal identity distinct from owners.</li>
            <li> Easier Fundraising: Attract investors by issuing shares and raising capital.</li>
            <li> Perpetual Succession: The company continues to exist even if shareholders change.</li>
            <li> Tax Advantages: Access to various tax benefits and deductions.</li>
          </ul>
        </section>

        <section className="incorporation-process">
          <h2 style={{ marginBottom: "50px", marginTop: "50px" }}>Incorporation Process</h2>
          <ul>
            <li> Name Reservation: Choose a unique name and get it approved by the regulatory authority.</li>
            <li> Prepare Documents: Prepare necessary documents such as Articles of Association and Memorandum of Association.</li>
            <li> Filing Application: Submit incorporation forms and required documents to the regulatory authority.</li>
            <li> Certificate of Incorporation: Once approved, receive the Certificate of Incorporation.</li>
            <li> Post-Incorporation Tasks: Hold initial meetings, allocate shares, and obtain necessary licenses.</li>
          </ul>
        </section>

        <section>
          <h2 style={{ marginBottom: "50px", marginTop: "50px" }}>Director Requirements</h2>
          <p>
            Private companies are required to have at least one director. Directors must be individuals of legal age,
            and there are no restrictions on their nationality or residency. It's important to note that directors
            have fiduciary duties and legal responsibilities to act in the best interests of the company.
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

export default PCL;
