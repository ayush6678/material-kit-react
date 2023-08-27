import React from 'react';
import 'pages/Services/styles.css';
import FormSimple from 'layouts/sections/input-areas/forms/components/FormSimple';
import DefaultNavbar from 'examples/Navbars/DefaultNavbar';
import routes from 'routes';
import DescriptionIcon from '@mui/icons-material/Description';
import CenteredFooter from 'examples/Footers/CenteredFooter';

function GSTR1() {
  const documentList = [
    { name: 'PAN Card' },
    { name: 'Identity and Address Proof' },
    { name: 'Bank Account Details' },
    { name: 'Business Registration Documents' },
  ];
  const faqList = [
    {
      question: 'Q1: What is Goods and Services Tax (GST) registration?',
      answer: 'A1: GST registration is mandatory for businesses involved in the supply of goods and services. It provides a unique GSTIN (Goods and Services Tax Identification Number)...'
    },
    {
      question: 'Q2: Why is GST registration important?',
      answer: 'A2: GST registration is necessary for legal compliance and enables businesses to collect and remit GST. It allows availing input tax credit and participating in the formal economy...'
    },
    {
      question: 'Q3: What documents are required for GST registration?',
      answer: 'A3: Documents such as PAN card, identity and address proof, bank account details, and business registration documents are required for GST registration...'
    },
    {
      question: 'Q4: How long does it take to get a GST registration?',
      answer: 'A4: The processing time for GST registration varies, but it typically takes around 2 to 6 working days once all the documents are submitted...'
    },
    {
      question: 'Q5: Who needs to apply for GST registration?',
      answer: 'A5: Any business whose aggregate turnover exceeds the prescribed threshold limit needs to apply for GST registration...'
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
          <h1>Goods and Services Tax (GST) Registration</h1>
          <p className="headline">Become a part of the GST regime and ensure compliance with the tax regulations</p>
        </header>

        <div className='list'>

          <section className="description-section">
            <h2 style={{ marginBottom: "50px" }}>About GST Registration</h2>
            <p>
              GST registration is mandatory for businesses involved in the supply of goods and services. It provides a unique GSTIN (Goods and Services Tax Identification Number) which is essential for collecting and remitting GST.
              GST registration enables businesses to participate in the formal economy and avail benefits such as input tax credit.
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
          <h2 style={{ marginBottom: "50px" }}>Key Benefits of GST Registration</h2>
          <ul>
            <li> Legal Compliance: GST registration is essential to comply with tax regulations and avoid penalties.</li>
            <li> Input Tax Credit: Registered businesses can claim input tax credit on purchases and reduce the overall tax liability.</li>
            <li> Competitive Edge: GST registration enhances business credibility and enables participation in formal trade.</li>
            <li> Expansion Opportunities: Registered businesses can expand their customer base by selling in inter-state markets.</li>
            <li> Simplified Tax Structure: GST replaces multiple taxes, simplifying the tax structure for businesses.</li>
          </ul>
        </section>

        <section className="registration-process">
          <h2 style={{ marginBottom: "50px", marginTop: "50px" }}>GST Registration Process</h2>
          <ul>
            <li> Gather Documents: Collect necessary documents such as PAN card, identity and address proof, bank account details, and business registration documents.</li>
            <li> Online Application: Apply for GST registration through the government's GST portal or consult professionals for assistance.</li>
            <li> Document Upload: Upload the required documents and fill in the necessary details in the registration form.</li>
            <li> Verification: Await verification and approval from the GST department, ensuring accurate and complete information.</li>
            <li> GSTIN and Certificate: Receive the GSTIN and registration certificate upon successful approval.</li>
          </ul>
        </section>

        <section>
          <h2 style={{ marginBottom: "50px", marginTop: "50px" }}>Eligibility and Threshold Limit</h2>
          <p>
            Any business whose aggregate turnover exceeds the prescribed threshold limit needs to apply for GST registration as per the GST Act.
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

export default GSTR1;
