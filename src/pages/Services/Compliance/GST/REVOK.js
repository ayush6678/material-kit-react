import React from 'react';
import 'pages/Services/styles.css';
import FormSimple from 'layouts/sections/input-areas/forms/components/FormSimple';
import DefaultNavbar from 'examples/Navbars/DefaultNavbar';
import routes from 'routes';
import DescriptionIcon from '@mui/icons-material/Description';
import CenteredFooter from 'examples/Footers/CenteredFooter';

function REVOK() {
  const documentList = [
    { name: 'Copy of GST Registration Certificate' },
    { name: 'Copy of PAN Card' },
    { name: 'Copy of ID and Address Proof' },
    { name: 'Authorization Letter' },
  ];
  const faqList = [
    {
      question: 'Q1: What is the process for Revocation of GST Cancellation?',
      answer: 'A1: GST cancellation revocation involves applying to restore a cancelled GSTIN after previously cancelling it...'
    },
    {
      question: 'Q2: When should the revocation be applied?',
      answer: 'A2: Revocation should be applied within a specified timeline from the cancellation date to reinstate the GST registration...'
    },
    {
      question: 'Q3: What documents are required for GST cancellation revocation?',
      answer: 'A3: Documents such as copy of GST registration certificate, PAN card, ID and address proof, and authorization letter...'
    },
    {
      question: 'Q4: Are there any consequences of not revoking GST cancellation?',
      answer: 'A4: Failure to revoke GST cancellation may result in the need to reapply for fresh registration, loss of continuity in business operations...'
    },
    {
      question: 'Q5: Who can apply for GST cancellation revocation?',
      answer: 'A5: Authorized individuals, such as business owners, directors, or designated representatives, can initiate the revocation process...'
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
          <h1>Revocation of GST Cancellation</h1>
          <p className="headline">Restore a cancelled GSTIN by applying for revocation and reinstating your GST registration</p>
        </header>

        <div className='list'>

          <section className="description-section">
            <h2 style={{ marginBottom: "50px" }}>About GST Cancellation Revocation</h2>
            <p>
              GST cancellation revocation is the process of applying to restore a cancelled GSTIN after previously cancelling it.
              Revocation helps reinstate the GST registration to maintain business continuity and compliance.
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
          <h2 style={{ marginBottom: "50px" }}>Key Importance of Revocation</h2>
          <ul>
            <li> Business Continuity: Revocation ensures the continuity of business operations by restoring the cancelled GST registration.</li>
            <li> Compliance Continuation: Revoking cancellation maintains compliance with GST regulations and filing requirements.</li>
            <li> Prevent Reapplication: Revocation prevents the need to reapply for fresh GST registration, saving time and effort.</li>
            <li> Seamless Transition: Reinstating registration ensures a smooth transition back into regular business operations.</li>
            <li> Regulatory Alignment: Revocation aligns the business with GST regulations and allows the business to continue operations.</li>
          </ul>
        </section>

        <section className="gst-revocation-process">
          <h2 style={{ marginBottom: "50px", marginTop: "50px" }}>Revocation Process</h2>
          <ul>
            <li> Document Preparation: Gather required documents such as GST registration certificate, PAN card, ID and address proof.</li>
            <li> Revocation Application: Fill the GST cancellation revocation form with accurate and complete details.</li>
            <li> Document Submission: Attach the required documents along with the revocation application.</li>
            <li> Verification: Verify the information provided in the revocation application.</li>
            <li> Authority Submission: Submit the revocation application through the GST portal for approval.</li>
          </ul>
        </section>

        <section>
          <h2 style={{ marginBottom: "50px", marginTop: "50px" }}>Consequences of Non-Revocation</h2>
          <p>
            Failure to revoke GST cancellation may result in the need to reapply for fresh GST registration, discontinuity in business operations,
            and non-compliance with GST regulations. It's crucial to apply for revocation to maintain business continuity.
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

export default REVOK;
