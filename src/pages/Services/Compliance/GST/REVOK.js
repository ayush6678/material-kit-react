import BaseLayout from "layouts/sections/components/BaseLayout";
import FormSimple from "layouts/sections/input-areas/forms/components/FormSimple";

function REVOK() {
  return (
    <BaseLayout
      title="Revocation of GST Cancellation"
      breadcrumb={[
        { label: "Services", route: "/sections/input-areas/forms" },
        { label: "Revocation of GST Cancellation" },
      ]}
    >
      <section className="revocation-section">
        <div className="content">
          <p>
            If your Goods and Services Tax (GST) registration has been canceled and you wish to resume business activities, you can initiate a request for revocation of GST cancellation. This allows you to reinstate your GST registration and comply with the GST laws for your business operations.
          </p>

          <h3>Revocation of GST Cancellation</h3>

          <p>
            To request the revocation of GST cancellation, you will need to fill out a revocation form or submit a request with the appropriate tax authorities. The process and requirements for revocation may vary depending on your jurisdiction. It is important to comply with the guidelines and procedures set by the tax authorities to ensure a smooth revocation process.
          </p>

          <div className="form-area">
            <FormSimple />
          </div>

          <h3>Necessary Documents</h3>

          <ul>
            <li>Copy of GST cancellation order or certificate</li>
            <li>Proof of compliance with cancellation requirements (if applicable)</li>
            <li>Updated business details and supporting documents</li>
            <li>Financial statements and audit reports (if applicable)</li>
            <li>Any other documents as specified by the tax authorities</li>
          </ul>

          <h3>Frequently Asked Questions (FAQ)</h3>

          <div className="faq-section">
            <h4>1. Why would I need to request the revocation of GST cancellation?</h4>
            <p>
              There are several reasons why you might need to request the revocation of GST cancellation, including:
            </p>
            <ul>
              <li>Resumption of business operations</li>
              <li>Intent to continue business activities and comply with GST laws</li>
              <li>Mistaken cancellation or change in circumstances</li>
              <li>Correction of cancellation due to non-compliance</li>
              <li>Other valid reasons as per the tax authorities</li>
            </ul>
          </div>

          <div className="faq-section">
            <h4>2. How can I request the revocation of GST cancellation?</h4>
            <p>
              The process to request the revocation of GST cancellation may vary depending on your jurisdiction. Generally, you will need to fill out a revocation form or submit a request online or offline with the appropriate tax authorities. It is recommended to visit the official GST portal or contact the tax authorities for specific instructions and guidelines on revocation procedures.
            </p>
          </div>

          <div className="faq-section">
            <h4>3. Is there a time limit to request the revocation of GST cancellation?</h4>
            <p>
              Yes, there is typically a specified time limit within which you can request the revocation of GST cancellation. The time limit may vary depending on the tax authorities and the specific circumstances. It is important to initiate the revocation process within the prescribed time limit to avoid any non-compliance penalties or limitations.
            </p>
          </div>

          <div className="faq-section">
            <h4>4. Are there any implications or liabilities after the revocation of GST cancellation?</h4>
            <p>
              After the revocation of your GST cancellation, your GST registration will be reinstated, and you will need to comply with the GST laws and file GST returns as applicable. Any pending tax payments, returns, or compliance obligations prior to the cancellation will need to be addressed. It is advisable to consult with a tax professional to ensure proper compliance and fulfillment of any outstanding obligations.
            </p>
          </div>

          <div className="faq-section">
            <h4>5. Can I request the revocation of GST cancellation online?</h4>
            <p>
              Many tax authorities provide online platforms or portals for requesting the revocation of GST cancellation. These platforms may allow you to fill out an online form, upload the required documents, and track the status of your revocation request. It is advisable to visit the tax authority's website or contact their customer service to check if online options are available for your specific request.
            </p>
          </div>
        </div>
      </section>

      <style jsx>{`
        .revocation-section {
          background-color: #f0f4ff;
          padding: 30px;
          border-radius: 8px;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
        }

        .content {
          max-width: 800px;
          margin: 0 auto;
        }

        h2,
        h3,
        h4 {
          color: #1f58c3;
        }

        h3 {
          margin-top: 30px;
        }

        ul {
          margin-top: 10px;
        }

        ul li {
          margin-bottom: 8px;
        }

        p {
          color: #333;
        }

        .form-area {
          border-radius: 5px;
          margin-top: 30px;
          background-color: white;
          box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;
        }

        .faq-section {
          margin-top: 40px;
          border-bottom: 1px solid #ccc;
          padding-bottom: 20px;
        }

        .faq-section h4 {
          color: #1f58c3;
          margin-bottom: 10px;
        }
      `}</style>
    </BaseLayout>
  );
}

export default REVOK;
