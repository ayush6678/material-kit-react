import BaseLayout from "layouts/sections/components/BaseLayout";
import FormSimple from "layouts/sections/input-areas/forms/components/FormSimple";

function GSTR() {
  return (
    <BaseLayout
      title="Goods and Service Tax (GST) Registration"
      breadcrumb={[
        { label: "Services", route: "/sections/input-areas/forms" },
        { label: "GST Registration" },
      ]}
    >
      <section className="gst-section">
        <div className="content">
          <p>
            Goods and Service Tax (GST) Registration is a mandatory requirement for businesses engaged in the supply of goods or services in India. It is a tax registration that enables businesses to collect and remit GST to the government. GST registration provides a unique GSTIN (Goods and Services Tax Identification Number) to the registered business entity.
          </p>

          <h3>Benefits of GST Registration</h3>

          <p>
            GST Registration offers several benefits to businesses, including:
          </p>

          <ul>
            <li>Legally recognized as a supplier of goods or services</li>
            <li>Eligible to collect GST from customers and pass on input tax credit</li>
            <li>Claim input tax credit on purchases</li>
            <li>Participate in interstate and international trade</li>
            <li>Access various government schemes and benefits</li>
            <li>Enhanced credibility and trust among customers and suppliers</li>
          </ul>

          <div className="form-area">
            <FormSimple />
          </div>

          <h3>Necessary Documents</h3>

          <ul>
            <li>Proof of business registration (Partnership Deed, Certificate of Incorporation, etc.)</li>
            <li>Identity and address proof of promoters/partners/directors</li>
            <li>Proof of place of business (Rental Agreement, Property Ownership Documents, etc.)</li>
            <li>Bank account details</li>
            <li>Digital signature (for companies and LLPs)</li>
            <li>Authorized signatory details</li>
          </ul>

          <h3>Frequently Asked Questions (FAQ)</h3>

          <div className="faq-section">
            <h4>1. What is GST Registration?</h4>
            <p>
              GST Registration is a mandatory tax registration required for businesses engaged in the supply of goods or services in India. It enables businesses to collect and remit Goods and Services Tax (GST) to the government and obtain a unique GSTIN (Goods and Services Tax Identification Number).
            </p>
          </div>

          <div className="faq-section">
            <h4>2. Who needs to register for GST?</h4>
            <p>
              Any business involved in the supply of goods or services with an annual turnover exceeding the specified threshold (as per GST rules) is required to register for GST. Additionally, certain businesses, such as e-commerce operators, non-resident taxable persons, and input service distributors, must also register for GST irrespective of turnover.
            </p>
          </div>

          <div className="faq-section">
            <h4>3. How can I register for GST?</h4>
            <p>
              GST registration can be done online through the GST portal (www.gst.gov.in). The registration process involves filling out the application form, providing the required documents, and completing the verification process. It is advisable to seek professional assistance or refer to the official GST portal for detailed registration guidelines.
            </p>
          </div>

          <div className="faq-section">
            <h4>4. What are the consequences of not registering for GST?</h4>
            <p>
              Failure to register for GST despite being liable can result in penalties, fines, and legal implications. Additionally, unregistered businesses may be unable to avail input tax credit, face difficulties in participating in trade, and lose out on various government schemes and benefits. It is important to comply with GST registration requirements to avoid adverse consequences.
            </p>
          </div>

          <div className="faq-section">
            <h4>5. Can I register for GST voluntarily, even if my turnover is below the threshold?</h4>
            <p>
              Yes, businesses with turnover below the specified threshold have the option to register for GST voluntarily. Voluntary registration can provide advantages such as availing input tax credit, participating in interstate trade, and enhancing business credibility. It is advisable to assess the benefits and consult a tax professional before opting for voluntary registration.
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

export default GSTR;
