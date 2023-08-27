import React from 'react';
import 'pages/Services/styles.css';
import FormSimple from 'layouts/sections/input-areas/forms/components/FormSimple';
import DefaultNavbar from 'examples/Navbars/DefaultNavbar';
import routes from 'routes';
import DescriptionIcon from '@mui/icons-material/Description';
import CenteredFooter from 'examples/Footers/CenteredFooter';

function TA() {
  const documentList = [
    { name: 'Trademark Details' },
    { name: 'Identity Proof' },
    { name: 'Logo/Brand Image' },
    { name: 'Power of Attorney (if applicable)' },
  ];
  const faqList = [
    {
      question: 'Q1: What is a Trademark Application?',
      answer: 'A1: A Trademark Application is the process of registering a distinctive mark, logo, or symbol that uniquely identifies your products or services...'
    },
    {
      question: 'Q2: Why is Trademark Application important?',
      answer: 'A2: Trademark registration safeguards your brand identity, prevents unauthorized use, and provides legal protection against infringement...'
    },
    {
      question: 'Q3: What documents are required for Trademark Application?',
      answer: 'A3: Documents such as trademark details, identity proof, logo/brand image, and power of attorney (if applicable) are required...'
    },
    {
      question: 'Q4: How long does it take to get a Trademark registered?',
      answer: 'A4: The trademark registration process takes around 18 to 24 months, including filing, examination, publication, and issuance of the certificate...'
    },
    {
      question: 'Q5: Can individuals and businesses apply for Trademark?',
      answer: 'A5: Yes, both individuals and businesses can apply for trademark registration to protect their brand identity...'
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
          <h1>Trademark Application</h1>
          <p className="headline">Protect your brand identity and gain legal rights by filing a trademark application</p>
        </header>

        <div className='list'>

          <section className="description-section">
            <h2 style={{ marginBottom: "50px" }}>About Trademark Application</h2>
            <p>
              A Trademark Application is the process of registering a distinctive mark, logo, or symbol that uniquely identifies your products or services. It provides legal protection against unauthorized use and infringement.
              Trademark registration strengthens your brand and enhances its value in the market.
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
          <h2 style={{ marginBottom: "50px" }}>Key Benefits of Trademark Application</h2>
          <ul>
            <li> Brand Protection: Trademark registration safeguards your brand identity and prevents unauthorized use.</li>
            <li> Legal Rights: Registered trademarks provide legal protection and exclusive rights to use the mark.</li>
            <li> Brand Value: A registered trademark enhances the value of your brand and builds consumer trust.</li>
            <li> Prevention of Infringement: Trademark registration enables legal action against infringement and counterfeiting.</li>
            <li> Business Expansion: A recognized trademark facilitates business expansion and licensing opportunities.</li>
          </ul>
        </section>

        <section className="registration-process">
          <h2 style={{ marginBottom: "50px", marginTop: "50px" }}>Trademark Application Process</h2>
          <ul>
            <li> Gather Documents: Collect necessary documents such as trademark details, identity proof, logo/brand image, and power of attorney (if applicable).</li>
            <li> Application Filing: File the trademark application with the appropriate authority or consult professionals for assistance.</li>
            <li> Examination: The application undergoes examination for uniqueness and distinctiveness.</li>
            <li> Publication: If approved, the trademark is published in the official journal for public notice.</li>
            <li> Certificate Issuance: After any objections are resolved, the certificate of registration is issued.</li>
          </ul>
        </section>

        <section>
          <h2 style={{ marginBottom: "50px", marginTop: "50px" }}>Individuals and Business Eligibility</h2>
          <p>
            Both individuals and businesses can apply for trademark registration to protect their brand identity and gain exclusive rights to the mark.
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

export default TA;
