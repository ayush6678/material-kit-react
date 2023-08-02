import BaseLayout from "layouts/sections/components/BaseLayout";
import FormSimple from "layouts/sections/input-areas/forms/components/FormSimple";

function LUT() {
  return (
    <BaseLayout
      title="Letter of Undertaking (LUT) for Export of Goods"
      breadcrumb={[
        { label: "Services", route: "/sections/input-areas/forms" },
        { label: "LUT for Export of Goods" },
      ]}
    >
      <section className="lut-section">
        <div className="content">
          <p>
            The Letter of Undertaking (LUT) is a document required for exporters to undertake exports without payment of integrated goods and services tax (IGST). It is a declaration to the authorities that the exporter will fulfill all the obligations under GST laws and export the goods without payment of IGST.
          </p>

          <h3>Letter of Undertaking (LUT) for Export of Goods</h3>

          <p>
            The LUT for export of goods is a self-declaration made by the exporter on their letterhead. It contains information such as the exporter's details, GSTIN, the nature of exports, and a declaration of compliance with GST laws. The LUT eliminates the need for the exporter to pay IGST on exports and claim a refund, providing ease and convenience in the export process.
          </p>

          <div className="form-area">
            <FormSimple />
          </div>

          <h3>Necessary Documents</h3>

          <ul>
            <li>Valid LUT form (as per the format prescribed by the tax authorities)</li>
            <li>Exporter's details and supporting documents</li>
            <li>Copy of GST registration certificate</li>
            <li>Copy of export order or invoice</li>
            <li>Any other relevant supporting documents as specified by the authorities</li>
          </ul>

          <h3>Frequently Asked Questions (FAQ)</h3>

          <div className="faq-section">
            <h4>1. What is a Letter of Undertaking (LUT) for export of goods?</h4>
            <p>
              The Letter of Undertaking (LUT) is a document that exporters need to submit to undertake exports without payment of integrated goods and services tax (IGST). It is a declaration to the authorities that the exporter will comply with all the GST laws and export the goods without payment of IGST.
            </p>
          </div>

          <div className="faq-section">
            <h4>2. Why is the LUT required for export of goods?</h4>
            <p>
              The LUT is required to simplify the export process and enable exporters to export goods without paying IGST. It eliminates the need for exporters to pay IGST upfront and then claim a refund, reducing the financial burden and administrative hassle for exporters.
            </p>
          </div>

          <div className="faq-section">
            <h4>3. Who can furnish the LUT for export of goods?</h4>
            <p>
              Registered exporters who have a clean track record of compliance with GST laws can furnish the LUT. The exporter should have no tax arrears, pending investigations, or prosecution cases under any GST laws.
            </p>
          </div>

          <div className="faq-section">
            <h4>4. How long is the LUT valid for?</h4>
            <p>
              The LUT is valid for a financial year. Once furnished, it remains valid for exports made during that financial year until it is either canceled or a new LUT is furnished for the subsequent financial year. It is important to renew or furnish a new LUT before the expiry of the existing LUT.
            </p>
          </div>

          <div className="faq-section">
            <h4>5. How can I file the LUT for export of goods?</h4>
            <p>
              The LUT can be filed online through the GST portal. The exact procedure and format for filing the LUT may vary based on the requirements specified by the tax authorities. It is advisable to refer to the official GST portal or seek professional assistance for accurate guidance on filing the LUT.
            </p>
          </div>
        </div>
      </section>

      <style jsx>{`
        .lut-section {
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

export default LUT;
