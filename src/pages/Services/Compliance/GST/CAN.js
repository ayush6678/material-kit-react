import BaseLayout from "layouts/sections/components/BaseLayout";
import FormSimple from "layouts/sections/input-areas/forms/components/FormSimple";

function CAN() {
  return (
    <BaseLayout
      title="Cancellation of GST Registration"
      breadcrumb={[
        { label: "Services", route: "/sections/input-areas/forms" },
        { label: "Cancellation of GST Registration" },
      ]}
    >
      <section className="cancellation-section">
        <div className="content">
          <p>
            If you wish to cancel your Goods and Services Tax (GST) registration, you can initiate a request for cancellation. This may be required if your business operations have ceased, you no longer meet the GST registration criteria, or you are closing down your business.
          </p>

          <h3>Cancellation of GST Registration</h3>

          <p>
            To cancel your GST registration, you will need to fill out a cancellation form or submit a request with the appropriate tax authorities. The process and requirements for cancellation may vary depending on your jurisdiction. It is important to comply with the guidelines and procedures set by the tax authorities to ensure a smooth cancellation process.
          </p>

          <div className="form-area">
            <FormSimple />
          </div>

          <h3>Necessary Documents</h3>

          <ul>
            <li>Copy of GST registration certificate</li>
            <li>Proof of cessation of business operations (if applicable)</li>
            <li>Financial statements and audit reports (if applicable)</li>
            <li>Any other documents as specified by the tax authorities</li>
          </ul>

          <h3>Frequently Asked Questions (FAQ)</h3>

          <div className="faq-section">
            <h4>1. Why would I need to cancel my GST registration?</h4>
            <p>
              There are several reasons why you might need to cancel your GST registration, including:
            </p>
            <ul>
              <li>Cessation of business operations</li>
              <li>No longer meeting the GST registration criteria</li>
              <li>Closing down your business</li>
              <li>Change in business structure or ownership</li>
              <li>Transfer of business or merger/acquisition</li>
            </ul>
          </div>

          <div className="faq-section">
            <h4>2. How can I cancel my GST registration?</h4>
            <p>
              The process to cancel your GST registration may vary depending on your jurisdiction. Generally, you will need to fill out a cancellation form or submit a request online or offline with the appropriate tax authorities. It is recommended to visit the official GST portal or contact the tax authorities for specific instructions and guidelines on cancellation procedures.
            </p>
          </div>

          <div className="faq-section">
            <h4>3. What is the timeline for GST registration cancellation?</h4>
            <p>
              The timeline for GST registration cancellation may vary depending on the tax authorities and the specific circumstances. It typically takes a few weeks to process the cancellation request and issue the cancellation certificate. It is important to initiate the cancellation process well in advance to avoid any non-compliance penalties or obligations.
            </p>
          </div>

          <div className="faq-section">
            <h4>4. Are there any implications or liabilities after GST registration cancellation?</h4>
            <p>
              After the cancellation of your GST registration, you will no longer be required to comply with the GST laws and file GST returns. However, you may still be liable for any pending tax payments, returns, or compliance obligations up until the date of cancellation. It is advisable to consult with a tax professional to ensure proper closure of your GST-related liabilities and obligations.
            </p>
          </div>

          <div className="faq-section">
            <h4>5. Can I reapply for GST registration after cancellation?</h4>
            <p>
              Yes, if you need to restart your business or meet the GST registration criteria again in the future, you can reapply for GST registration after cancellation. The process for reapplication may be similar to the initial registration process, and you will need to provide the necessary documents and fulfill the requirements specified by the tax authorities.
            </p>
          </div>
        </div>
      </section>

      <style jsx>{`
        .cancellation-section {
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

export default CAN;
