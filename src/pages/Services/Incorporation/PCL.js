import BaseLayout from "layouts/sections/components/BaseLayout";
import FormSimple from "layouts/sections/input-areas/forms/components/FormSimple";

function PLC() {
  return (
    <BaseLayout
      title="Private Limited Company Incorporation"
      breadcrumb={[
        { label: "Services", route: "/sections/input-areas/forms" },
        { label: "Private Limited Company" },
      ]}
    >
      <section className="private-limited-section">
        <div className="content">
          <p>
            A Private Limited Company is a popular business structure that provides limited liability protection to its shareholders and offers various benefits. It is a separate legal entity that can own assets, enter contracts, and carry out business activities.
          </p>

          <h3>Pricing</h3>

          <p>
            Our Private Limited Company incorporation services come with flexible pricing options. Please contact us for detailed pricing information tailored to your specific requirements.
          </p>

          <div className="form-area">
            <FormSimple />
          </div>

          <h3>Necessary Documents</h3>

          <ul>
            <li>Copy of identity proof (PAN card, Aadhaar card, etc.) for directors and shareholders</li>
            <li>Copy of address proof (Utility bill, passport, etc.) for directors and shareholders</li>
            <li>Passport-size photograph of directors and shareholders</li>
            <li>Memorandum of Association (MoA) and Articles of Association (AoA)</li>
            <li>Declaration by directors</li>
            <li>Address proof of the registered office</li>
          </ul>

          <h3>Frequently Asked Questions (FAQ)</h3>

          <div className="faq-section">
            <h4>1. What is a Private Limited Company?</h4>
            <p>
              A Private Limited Company is a business structure that offers limited liability protection to its shareholders and has a separate legal existence. It is one of the most common forms of business entities, providing benefits such as limited liability, perpetual succession, and ease of raising capital.
            </p>
          </div>

          <div className="faq-section">
            <h4>2. What are the benefits of forming a Private Limited Company?</h4>
            <p>
              Forming a Private Limited Company offers benefits such as limited liability protection, separate legal entity status, credibility, ease of raising funds, and perpetual succession. It provides a structured and professional framework for conducting business activities.
            </p>
          </div>

          <div className="faq-section">
            <h4>3. How many directors and shareholders are required for a Private Limited Company?</h4>
            <p>
              A minimum of two directors and two shareholders are required to form a Private Limited Company. However, a director and a shareholder can be the same person, which means a company can be incorporated with a minimum of two individuals.
            </p>
          </div>

          <div className="faq-section">
            <h4>4. Can a Private Limited Company be converted into a Public Limited Company?</h4>
            <p>
              Yes, a Private Limited Company can be converted into a Public Limited Company by fulfilling the necessary legal requirements and complying with the regulations specified by the Companies Act. The conversion process involves certain procedures and approvals.
            </p>
          </div>

          <div className="faq-section">
            <h4>5. What is the minimum capital requirement for a Private Limited Company?</h4>
            <p>
              The minimum capital requirement for a Private Limited Company has been abolished. It can be incorporated with any amount of capital as per the business requirements and the discretion of the promoters.
            </p>
          </div>
        </div>
      </section>

      <style jsx>{`
        .private-limited-section {
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

export default PLC;
