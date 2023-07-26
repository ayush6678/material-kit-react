import BaseLayout from "layouts/sections/components/BaseLayout";
import FormSimple from "layouts/sections/input-areas/forms/components/FormSimple";

function DPT3() {
  return (
    <BaseLayout
      title="DPT-3 Filing"
      breadcrumb={[
        { label: "Services", route: "/sections/input-areas/forms" },
        { label: "DPT-3 Filing" },
      ]}
    >
      <section className="dpt3-section">
        <div className="content">
          <p>
            File Director and Promoter details in DPT-3 form with MCA as per Companies Act requirements.
          </p>

          <h3>What We Offer</h3>

          <ul>
            <li>Obtaining Digital Signatures</li>
            <li>DPT-3 form preparation</li>
            <li>Uploading documents on MCA portal</li>
            <li>Filing of e-form with MCA</li>
          </ul>

          <div className="form-area">
            <FormSimple />
          </div>

          <h3>Documents Required</h3>

          <ul>
            <li>PAN card of directors and promoters</li>
            <li>Digital signatures of directors</li>
            <li>Latest shareholding pattern</li>
            <li>KYC documents of directors and promoters</li>
          </ul>

          <h3>FAQs</h3>

          <div className="faq-section">
            <h4>What details are covered in DPT-3?</h4>
            <p>It includes particulars of directors, promoters, shareholding interest and compliance status.</p>
          </div>

          <div className="faq-section">
            <h4>When does DPT-3 need to be filed?</h4>
            <p>Within 30 days of appointment of a director/manager or any change in directors/promoters.</p>
          </div>

          <div className="faq-section">
            <h4>What is the fee for filing DPT-3?</h4>
            <p>No filing fee is required for DPT-3 e-form.</p>
          </div>
        </div>
      </section>

      <style jsx>{`
        .dpt3-section {
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

        li {
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

export default DPT3;