import BaseLayout from "layouts/sections/components/BaseLayout";
import FormSimple from "layouts/sections/input-areas/forms/components/FormSimple";

function PI() {
  return (
    <BaseLayout
      title="Partnership Incorporation"
      breadcrumb={[
        { label: "Services", route: "/sections/input-areas/forms" },
        { label: "Partnership" },
      ]}
    >
      <section className="partnership-section">
        <div className="content">
          <p>
            Partnership is a business structure where two or more individuals come together to carry out a business with a shared objective. It is a popular form of business organization that offers flexibility and shared responsibilities among partners.
          </p>

          <h3>Pricing</h3>

          <p>
            Our partnership incorporation services come with flexible pricing options. Please contact us for detailed pricing information tailored to your specific requirements.
          </p>

          <div className="form-area">
            <FormSimple />
          </div>

          <h3>Necessary Documents</h3>

          <ul>
            <li>Partnership deed</li>
            <li>Copy of identity proof (PAN card, Aadhaar card, etc.) for partners</li>
            <li>Copy of address proof (Utility bill, passport, etc.) for partners</li>
            <li>Passport-size photograph of partners</li>
            <li>Address proof of the partnership office</li>
          </ul>

          <h3>Frequently Asked Questions (FAQ)</h3>

          <div className="faq-section">
            <h4>1. What is a Partnership?</h4>
            <p>
              A Partnership is a business structure where two or more individuals come together to carry out a business. It is based on a partnership agreement or deed that outlines the rights, responsibilities, and profit-sharing arrangements among partners.
            </p>
          </div>

          <div className="faq-section">
            <h4>2. What are the benefits of forming a Partnership?</h4>
            <p>
              Forming a Partnership offers benefits such as shared responsibilities, flexibility in decision-making, ease of formation, and shared profits and losses among partners. It allows partners to pool their resources, skills, and expertise to operate a business together.
            </p>
          </div>

          <div className="faq-section">
            <h4>3. Is a partnership a separate legal entity?</h4>
            <p>
              No, a partnership is not a separate legal entity distinct from its partners. The partners are jointly and severally liable for the debts and obligations of the partnership. However, a partnership can have a separate name and operate under that name.
            </p>
          </div>

          <div className="faq-section">
            <h4>4. Can a partnership be converted into a different business structure?</h4>
            <p>
              Yes, a partnership can be converted into a different business structure, such as a Private Limited Company or a Limited Liability Partnership (LLP). The conversion process involves legal procedures, compliance with regulations, and the consent of all partners.
            </p>
          </div>

          <div className="faq-section">
            <h4>5. Are there any statutory requirements for a partnership?</h4>
            <p>
              While there are no specific statutory requirements for registering a partnership, it is advisable to draft a partnership agreement or deed that outlines the rights, responsibilities, profit-sharing arrangements, and other terms agreed upon by the partners. It is recommended to consult a professional for legal and tax compliance.
            </p>
          </div>
        </div>
      </section>

      <style jsx>{`
        .partnership-section {
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

export default PI;
