import React from 'react';
import 'pages/Services/styles.css';
import FormSimple from 'layouts/sections/input-areas/forms/components/FormSimple';
import DefaultNavbar from 'examples/Navbars/DefaultNavbar';
import routes from 'routes';
import DescriptionIcon from '@mui/icons-material/Description';
import CenteredFooter from 'examples/Footers/CenteredFooter';

function FSSAI() {
  const documentList = [
    { name: 'Business Details' },
    { name: 'Identity Proof' },
    { name: 'Address Proof' },
    { name: 'Product Details' },
  ];
  const faqList = [
    {
      question: 'Q1: What is FSSAI Registration?',
      answer: 'A1: FSSAI (Food Safety and Standards Authority of India) Registration is mandatory for all businesses involved in the food business...'
    },
    {
      question: 'Q2: Why is FSSAI Registration important?',
      answer: 'A2: FSSAI Registration ensures that food products are safe for consumption, and it is a legal requirement to run a food business in India...'
    },
    {
      question: 'Q3: What documents are required for FSSAI Registration?',
      answer: 'A3: Documents such as business details, identity proof, address proof, and product details are required for registration...'
    },
    {
      question: 'Q4: How long does it take to get FSSAI Registration?',
      answer: 'A4: The processing time for FSSAI Registration varies, but it usually takes around 20 to 45 days upon successful submission...'
    },
    {
      question: 'Q5: Who needs to apply for FSSAI Registration?',
      answer: 'A5: All entities involved in the food business, including manufacturers, processors, transporters, and sellers, are required to obtain FSSAI Registration...'
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
          <h1>FSSAI Registration</h1>
          <p className="headline">Ensure the safety and legality of your food business by obtaining FSSAI Registration</p>
        </header>

        <div className='list'>

          <section className="description-section">
            <h2 style={{ marginBottom: "50px" }}>About FSSAI Registration</h2>
            <p>
              FSSAI (Food Safety and Standards Authority of India) Registration is mandatory for all businesses involved in the food business, including manufacturing, processing, packaging, distribution, and sale of food products.
              It ensures that the food products are safe for consumption and comply with the food safety standards set by the authority.
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
          <h2 style={{ marginBottom: "50px" }}>Key Benefits of FSSAI Registration</h2>
          <ul>
            <li> Legal Compliance: FSSAI Registration is a legal requirement for running a food business in India.</li>
            <li> Consumer Confidence: It ensures that the food products are safe and of high quality for consumption.</li>
            <li> Business Credibility: FSSAI Registration enhances the credibility and reputation of the food business.</li>
            <li> Health and Safety: Registration contributes to public health by preventing the sale of substandard or unsafe food products.</li>
            <li> Market Access: FSSAI Registration is often a prerequisite for selling food products in the market.</li>
          </ul>
        </section>

        <section className="registration-process">
          <h2 style={{ marginBottom: "50px", marginTop: "50px" }}>FSSAI Registration Process</h2>
          <ul>
            <li> Gather Documents: Collect necessary documents such as business details, identity proof, address proof, and product details.</li>
            <li> Application Submission: Apply for FSSAI Registration through the online portal or authorized agencies.</li>
            <li> Application Review: The application and documents are reviewed by the FSSAI authority.</li>
            <li> Inspection: In some cases, a physical inspection of the premises may be conducted.</li>
            <li> Issuance of Registration: Upon successful review, the FSSAI Registration certificate is issued.</li>
          </ul>
        </section>

        <section>
          <h2 style={{ marginBottom: "50px", marginTop: "50px" }}>Applicability to Different Businesses</h2>
          <p>
            All entities involved in the food business, including manufacturers, processors, transporters, and sellers, are required to obtain FSSAI Registration.
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

export default FSSAI;
