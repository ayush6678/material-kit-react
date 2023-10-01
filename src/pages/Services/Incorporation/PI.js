import React from 'react';
import 'pages/Services/styles.css';
import FormSimple from 'layouts/sections/input-areas/forms/components/FormSimple';
import DefaultNavbar from 'examples/Navbars/DefaultNavbar';
import routes from 'routes';
 import CenteredFooter from 'examples/Footers/CenteredFooter';

function PI() {
  const documentList = [
    { name: 'Partnership Agreement' },
    { name: 'Partner Details' },
    { name: 'Business Plan' },
    { name: 'Financial Projections' },
  ];
  const faqList = [
    {
      question: 'Q1: What are the advantages of forming a traditional Partnership?',
      answer: 'A1: Forming a partnership offers shared responsibilities, flexibility in management...'
    },
    {
      question: 'Q2: How long does the Partnership incorporation process typically take?',
      answer: 'A2: The duration varies, but it generally takes a few weeks to formalize...'
    },
    {
      question: 'Q3: How many partners are required to form a Partnership?',
      answer: 'A3: A traditional partnership can be formed with a minimum of two partners...'
    },
    {
      question: 'Q4: What is the role of each partner in a Partnership?',
      answer: 'A4: Partners share responsibilities, decision-making, and profits as per the partnership agreement...'
    },
    {
      question: 'Q5: Can a Partnership be converted to a different business structure?',
      answer: 'A5: Yes, partnerships can often be converted to LLPs or companies with proper procedures...'
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
          <h1>Partnership Incorporation</h1>
          <p className="headline">Your journey to collaborative business ownership</p>
        </header>

        <div className='list'>

          <section className="description-section">
            <h2 style={{ marginBottom: "50px" }}>About Partnership Incorporation</h2>
            <p>
              Partnership Incorporation involves establishing a collaborative business entity where two or more individuals
              come together to share responsibilities and profits. This form of business allows partners to leverage their
              combined skills and resources for mutual success.
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
          <h2 style={{ marginBottom: "50px" }}>Key Advantages of Partnership Incorporation</h2>
          <ul>
            <li> Shared Responsibilities: Partners divide business tasks and decisions according to their skills.</li>
            <li> Flexibility: Partnerships offer operational flexibility and informal management structures.</li>
            <li> Shared Profits: Profits are distributed among partners as per the partnership agreement.</li>
            <li> Combined Resources: Partners pool resources and expertise for business growth.</li>
            <li> Collaboration: Partners can brainstorm and collaborate to innovate and solve challenges.</li>
          </ul>
        </section>

        <section className="incorporation-process">
          <h2 style={{ marginBottom: "50px", marginTop: "50px" }}>Incorporation Process</h2>
          <ul>
            <li> Choose Partners: Identify individuals with complementary skills and shared business goals.</li>
            <li> Draft Partnership Agreement: Define roles, responsibilities, profit-sharing, and exit strategies.</li>
            <li> Business Plan: Prepare a detailed business plan outlining objectives, strategies, and financial projections.</li>
            <li> Registration: Depending on local regulations, register the partnership with the appropriate authority.</li>
            <li> Operational Launch: Implement the partnership agreement and begin business operations.</li>
          </ul>
        </section>

        <section>
          <h2 style={{ marginBottom: "50px", marginTop: "50px" }}>Partner Roles and Responsibilities</h2>
          <p>
            Partners collectively contribute to business activities and decisions. Each partner's responsibilities and
            rights are outlined in the partnership agreement. Open communication and collaboration among partners are crucial
            for the partnership's success.
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

export default PI;
