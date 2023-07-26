import BaseLayout from "layouts/sections/components/BaseLayout";
import FormSimple from "layouts/sections/input-areas/forms/components/FormSimple";

function GAS() {
  return (
    <BaseLayout
      title="GST Amnesty Scheme 2021"
      breadcrumb={[
        { label: "Services", route: "/sections/input-areas/forms" },
        { label: "GST Amnesty Scheme" },
      ]}
    >
      <section className="gst-section">
        <div className="content">
          <p>
            The GST Amnesty Scheme 2021 is a program designed to provide relief and benefits to taxpayers who have not complied with the Goods and Services Tax (GST) regulations. It offers an opportunity to rectify non-compliance, clear past dues, and reduce penalties.
          </p>

          <h3>Benefits of GST Amnesty Scheme</h3>

          <p>
            The GST Amnesty Scheme 2021 offers the following benefits to eligible taxpayers:
          </p>

          <ul>
            <li>Waiver or reduction of penalties for non-compliance</li>
            <li>Opportunity to clear past GST dues</li>
            <li>Rectification of errors and omissions in GST filings</li>
            <li>Prevention of legal action or prosecution</li>
            <li>Peace of mind and compliance with GST regulations</li>
          </ul>

          <div className="form-area">
            <FormSimple />
          </div>

          <h3>Necessary Documents</h3>

          <ul>
            <li>Copy of GST registration certificate</li>
            <li>Copy of past GST returns and financial statements</li>
            <li>Details of any pending GST notices or proceedings</li>
            <li>Any other relevant supporting documents</li>
          </ul>

          <h3>Frequently Asked Questions (FAQ)</h3>

          <div className="faq-section">
            <h4>1. What is the GST Amnesty Scheme 2021?</h4>
            <p>
              The GST Amnesty Scheme 2021 is a program initiated by the government to provide relief to taxpayers who have not complied with GST regulations. It offers an opportunity to rectify non-compliance, clear past dues, and reduce penalties.
            </p>
          </div>

          <div className="faq-section">
            <h4>2. Who is eligible for the GST Amnesty Scheme?</h4>
            <p>
              The eligibility criteria for the GST Amnesty Scheme may vary based on the specific guidelines issued by the government. Generally, taxpayers who have not complied with GST regulations or have pending dues are eligible to participate in the scheme. It is advisable to consult a tax professional for detailed guidance.
            </p>
          </div>

          <div className="faq-section">
            <h4>3. How can I apply for the GST Amnesty Scheme?</h4>
            <p>
              The application process for the GST Amnesty Scheme is typically done through an online portal or designated tax authorities. You may need to provide the necessary documents and information related to your non-compliance or pending dues. It is recommended to consult a tax professional or visit the official GST portal for specific instructions.
            </p>
          </div>

          <div className="faq-section">
            <h4>4. What are the benefits of participating in the GST Amnesty Scheme?</h4>
            <p>
              Participating in the GST Amnesty Scheme offers benefits such as penalty waiver or reduction, the opportunity to clear past GST dues, rectification of errors or omissions in GST filings, and avoidance of legal action or prosecution. It helps taxpayers rectify non-compliance and achieve compliance with GST regulations.
            </p>
          </div>

          <div className="faq-section">
            <h4>5. Is the GST Amnesty Scheme a one-time opportunity?</h4>
            <p>
              The GST Amnesty Scheme is introduced by the government periodically. The availability and duration of the scheme may vary. It is essential to stay updated with the latest announcements and notifications from the government or tax authorities to know about any future opportunities for amnesty or compliance relief.
            </p>
          </div>
        </div>
      </section>

      <style jsx>{`
        .gst-section {
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

export default GAS;
