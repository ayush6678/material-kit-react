import BaseLayout from "layouts/sections/components/BaseLayout";
import FormSimple from "layouts/sections/input-areas/forms/components/FormSimple";

function SP() {
  return (
    <BaseLayout
      title="Sole Proprietorship Incorporation"
      breadcrumb={[
        { label: "Services", route: "/sections/input-areas/forms" },
        { label: "Sole Proprietorship" },
      ]}
    >
      <section className="sole-proprietorship-section">
        <div className="content">
          <p>
            Sole Proprietorship is the simplest form of business structure where an individual runs and operates a business as the sole owner. It offers simplicity in terms of setup, decision-making, and taxation.
          </p>

          <h3>Pricing</h3>

          <p>
            Our sole proprietorship incorporation services come with flexible pricing options. Please contact us for detailed pricing information tailored to your specific requirements.
          </p>

          <div className="form-area">
            <FormSimple />
          </div>

          <h3>Necessary Documents</h3>

          <ul>
            <li>Copy of identity proof (PAN card, Aadhaar card, etc.)</li>
            <li>Copy of address proof (Utility bill, passport, etc.)</li>
            <li>Passport-size photograph of the proprietor</li>
            <li>Registration certificate (if applicable)</li>
            <li>Trade license (if applicable)</li>
            <li>Other business-specific licenses (if applicable)</li>
          </ul>

          <h3>Frequently Asked Questions (FAQ)</h3>

          <div className="faq-section">
            <h4>1. What is a Sole Proprietorship?</h4>
            <p>
              A Sole Proprietorship is a business structure where an individual operates and manages a business as the sole owner. The individual has complete control and responsibility for the business and its operations.
            </p>
          </div>

          <div className="faq-section">
            <h4>2. What are the benefits of a Sole Proprietorship?</h4>
            <p>
              A Sole Proprietorship offers benefits such as simplicity in setup, complete control and decision-making authority, minimal compliance requirements, and ease of taxation. It is an ideal choice for small businesses and freelancers.
            </p>
          </div>

          <div className="faq-section">
            <h4>3. Is there a registration requirement for a Sole Proprietorship?</h4>
            <p>
              No, there is no specific registration requirement for a Sole Proprietorship. However, depending on the nature of the business, certain licenses and registrations may be necessary at the local or state level.
            </p>
          </div>

          <div className="faq-section">
            <h4>4. Are the proprietor's personal assets protected in a Sole Proprietorship?</h4>
            <p>
              No, in a Sole Proprietorship, there is no legal distinction between the business and the owner. The proprietor's personal assets are not protected, and the proprietor is personally liable for the debts and obligations of the business.
            </p>
          </div>

          <div className="faq-section">
            <h4>5. Can a Sole Proprietorship be converted into another business structure?</h4>
            <p>
              Yes, a Sole Proprietorship can be converted into a different business structure, such as a Private Limited Company, Partnership, or Limited Liability Partnership (LLP), based on the requirements and eligibility criteria of the desired business structure.
            </p>
          </div>
        </div>
      </section>

      <style jsx>{`
        .sole-proprietorship-section {
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

export default SP;
