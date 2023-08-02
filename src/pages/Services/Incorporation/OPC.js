import BaseLayout from "layouts/sections/components/BaseLayout";
import FormSimple from "layouts/sections/input-areas/forms/components/FormSimple";

function OPC() {
  return (
    <BaseLayout
      title="One Person Company (OPC) Incorporation"
      breadcrumb={[
        { label: "Services", route: "/sections/input-areas/forms" },
        { label: "One Person Company" },
      ]}
    >
      <section className="opc-section">
        <div className="content">
          <p>
            One Person Company (OPC) is a type of business structure that allows
            a single individual to incorporate and run a company. It provides
            limited liability protection while enabling entrepreneurs to operate
            as a separate legal entity.
          </p>

          <h3>Pricing</h3>

          <p>
            Our OPC incorporation services come with flexible pricing options.
            Please contact us for detailed pricing information tailored to your
            specific requirements.
          </p>

          <div className="form-area">
            <FormSimple />
          </div>

          <h3>Necessary Documents</h3>

          <ul>
            <li>Copy of identity proof (PAN card, Aadhaar card, etc.)</li>
            <li>Copy of address proof (Utility bill, passport, etc.)</li>
            <li>Passport-size photograph of the director</li>
            <li>Memorandum of Association (MoA) and Articles of Association (AoA)</li>
            <li>Declaration by the director</li>
            <li>Address proof of the registered office</li>
          </ul>

          <h3>Frequently Asked Questions (FAQ)</h3>

          <div className="faq-section">
            <h4>1. What is an OPC (One Person Company)?</h4>
            <p>
              An OPC (One Person Company) is a business structure where a single
              individual can incorporate and run a company. It provides limited
              liability protection while enabling entrepreneurs to operate as a
              separate legal entity.
            </p>
          </div>

          <div className="faq-section">
            <h4>2. What are the benefits of forming an OPC?</h4>
            <p>
              Forming an OPC offers benefits such as limited liability protection,
              separate legal entity status, and ease of incorporation. It allows
              sole entrepreneurs to operate as a company and access various
              advantages associated with corporate structures.
            </p>
          </div>

          <div className="faq-section">
            <h4>3. Can a foreign national incorporate an OPC in India?</h4>
            <p>
              No, only Indian residents can incorporate an OPC in India. The
              director of an OPC must be a resident of India and hold Indian
              citizenship. Non-resident Indians (NRIs) or foreign nationals
              cannot form an OPC.
            </p>
          </div>

          <div className="faq-section">
            <h4>4. What is the minimum capital requirement for an OPC?</h4>
            <p>
              There is no minimum capital requirement for an OPC. It can be
              incorporated with any amount of capital as per the business
              requirements. The authorized capital can be decided by the
              entrepreneur at the time of incorporation.
            </p>
          </div>

          <div className="faq-section">
            <h4>5. Can an OPC be converted into a Private Limited Company?</h4>
            <p>
              Yes, an OPC can be converted into a Private Limited Company after
              fulfilling certain conditions and complying with the legal process.
              The conversion allows the OPC to expand its operations and raise
              capital by inviting more shareholders.
            </p>
          </div>
        </div>
      </section>

      <style jsx>{`
        .opc-section {
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

export default OPC;
