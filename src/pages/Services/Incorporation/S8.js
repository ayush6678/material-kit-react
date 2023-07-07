import BaseLayout from "layouts/sections/components/BaseLayout";
import FormSimple from "layouts/sections/input-areas/forms/components/FormSimple";

function S8() {
  return (
    <BaseLayout
      title="Section 8 or NGO Incorporation"
      breadcrumb={[
        { label: "Services", route: "/sections/input-areas/forms" },
        { label: "Section 8 or NGO" },
      ]}
    >
      <section className="section8-ngo-section">
        <div className="content">
          <p>
            Section 8 Company or Non-Governmental Organization (NGO) is a type of organization that is formed for promoting arts, science, commerce, education, charity, social welfare, religion, environment protection, or any other useful objective. It operates for the betterment of society and does not distribute its profits to its members.
          </p>

          <h3>Pricing</h3>

          <p>
            Our Section 8 or NGO incorporation services come with flexible pricing options. Please contact us for detailed pricing information tailored to your specific requirements.
          </p>

          <div className="form-area">
            <FormSimple />
          </div>

          <h3>Necessary Documents</h3>

          <ul>
            <li>Copy of identity proof (PAN card, Aadhaar card, etc.) for directors and members</li>
            <li>Copy of address proof (Utility bill, passport, etc.) for directors and members</li>
            <li>Passport-size photograph of directors and members</li>
            <li>Memorandum of Association (MoA) and Articles of Association (AoA)</li>
            <li>Declaration by the directors</li>
            <li>Address proof of the registered office</li>
          </ul>

          <h3>Frequently Asked Questions (FAQ)</h3>

          <div className="faq-section">
            <h4>1. What is a Section 8 Company or NGO?</h4>
            <p>
              A Section 8 Company or NGO is an organization formed for promoting various charitable, social, or other useful objectives. It operates for the welfare of society and does not distribute its profits among its members. These organizations are governed by the provisions of Section 8 of the Companies Act.
            </p>
          </div>

          <div className="faq-section">
            <h4>2. What are the benefits of forming a Section 8 Company or NGO?</h4>
            <p>
              Forming a Section 8 Company or NGO offers benefits such as tax exemptions, access to grants and funding, credibility and recognition, limited liability for its members, and the opportunity to make a positive impact on society.
            </p>
          </div>

          <div className="faq-section">
            <h4>3. Can a Section 8 Company or NGO earn profits?</h4>
            <p>
              A Section 8 Company or NGO can earn profits, but the profits cannot be distributed among its members. The profits earned must be utilized for promoting the objectives of the organization and cannot be distributed as dividends or personal income.
            </p>
          </div>

          <div className="faq-section">
            <h4>4. What is the minimum number of directors and members required for a Section 8 Company or NGO?</h4>
            <p>
              A Section 8 Company or NGO must have a minimum of two directors and a minimum of two members. The directors and members can be the same individuals. However, the maximum number of directors and members may vary based on the provisions of the Companies Act.
            </p>
          </div>

          <div className="faq-section">
            <h4>5. Can a Section 8 Company or NGO be converted into a different type of organization?</h4>
            <p>
              Yes, a Section 8 Company or NGO can be converted into a different type of organization, such as a trust or a society, based on the requirements and legal provisions. The conversion process involves certain procedures and compliance with the applicable laws.
            </p>
          </div>
        </div>
      </section>

      <style jsx>{`
        .section8-ngo-section {
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

export default S8;
