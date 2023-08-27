import React from 'react';
import 'pages/Services/styles.css';
import FormSimple from 'layouts/sections/input-areas/forms/components/FormSimple';
import DefaultNavbar from 'examples/Navbars/DefaultNavbar';
import routes from 'routes';
import DescriptionIcon from '@mui/icons-material/Description';
import CenteredFooter from 'examples/Footers/CenteredFooter';

function LUT() {
  const documentList = [
    { name: 'Copy of GST Registration Certificate' },
    { name: 'Copy of PAN Card' },
    { name: 'Copy of Cancelled Cheque/Bank Details' },
    { name: 'Authorization Letter' },
  ];
  const faqList = [
    {
      question: 'Q1: What is Letter of Undertaking (LUT) for Export of Goods?',
      answer: 'A1: LUT is a document filed by exporters to undertake that they fulfill all export requirements and will abide by the GST regulations...'
    },
    {
      question: 'Q2: When should the LUT be filed?',
      answer: 'A2: The LUT should be filed at the beginning of the financial year in which the exporter intends to make exports without paying IGST...'
    },
    {
      question: 'Q3: What documents are required for filing LUT?',
      answer: 'A3: Documents such as copy of GST registration certificate, copy of PAN card, cancelled cheque/bank details, and authorization letter...'
    },
    {
      question: 'Q4: Can all exporters opt for LUT?',
      answer: 'A4: Only exporters who have a clean track record of compliance and have not been prosecuted for any offence under GST can opt for LUT...'
    },
    {
      question: 'Q5: What is the consequence of non-filing of LUT?',
      answer: 'A5: Non-filing of LUT will require the exporter to pay IGST on export supplies and follow the regular export procedure with refund claims...'
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
          <h1>Letter of Undertaking (LUT) for Export of Goods</h1>
          <p className="headline">Enable GST-free exports by filing an LUT and complying with export regulations</p>
        </header>

        <div className='list'>

          <section className="description-section">
            <h2 style={{ marginBottom: "50px" }}>About LUT for Export</h2>
            <p>
              An LUT is a document filed by exporters to declare that they fulfill all export-related requirements and commit to complying
              with GST regulations. It enables exporters to make GST-free exports without paying Integrated Goods and Services Tax (IGST).
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
          <h2 style={{ marginBottom: "50px" }}>Key Importance of LUT for Export</h2>
          <ul>
            <li> GST-Free Exports: LUT allows exporters to make exports without paying IGST upfront.</li>
            <li> Export Compliance: By filing LUT, exporters commit to fulfilling all export-related obligations and GST regulations.</li>
            <li> Competitive Advantage: GST-free exports improve competitiveness in international markets.</li>
            <li> Simplified Procedure: Exporters can avoid the hassle of IGST payment and subsequent refund claims.</li>
            <li> Trade Facilitation: LUT promotes seamless export procedures and benefits the export community.</li>
          </ul>
        </section>

        <section className="lut-export-process">
          <h2 style={{ marginBottom: "50px", marginTop: "50px" }}>Filing LUT Process</h2>
          <ul>
            <li> Document Preparation: Gather required documents including GST registration certificate, PAN card, bank details, and authorization letter.</li>
            <li> LUT Form Filling: Fill the LUT form accurately and provide necessary details.</li>
            <li> Document Submission: Attach the required documents along with the LUT form.</li>
            <li> Verification: Verify the information provided before submission.</li>
            <li> Online Submission: Submit the LUT through the GST portal for approval.</li>
          </ul>
        </section>

        <section>
          <h2 style={{ marginBottom: "50px", marginTop: "50px" }}>Consequences of Non-Filing</h2>
          <p>
            Non-filing of LUT will result in the exporter being required to pay IGST on export supplies and following the regular export
            procedure, including claiming refunds. It's essential to file LUT to avail the benefits of GST-free exports.
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

export default LUT;
