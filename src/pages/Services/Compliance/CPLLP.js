import BaseLayout from "layouts/sections/components/BaseLayout";
import FormSimple from "layouts/sections/input-areas/forms/components/FormSimple";

function CPLLP() {
  return (
    <BaseLayout
      title="Change in Partners of LLP"
      breadcrumb={[
        { label: "Services", route: "/sections/input-areas/forms" },
        { label: "LLP Partner Change" },
      ]}
    >
      <section className="llppartner-section">
        <div className="content">

          <p>
            Get end-to-end assistance with induction or removal of partners in your LLP as per LLP Act requirements.
          </p>

          <h3>What We Offer</h3>

          <ul>
            <li>Examining LLP agreement clauses</li>
            <li>Filing Forms 4, 17, 18, etc.</li>
            <li>Updating partner records with ROC</li>
            <li>Managing process and documentation</li>
          </ul>

          <div className="form-area">
            <FormSimple />
          </div>

          <h3>Documents Required</h3>

          <ul>
            <li>Consent letter from incoming/outgoing partners</li>
            <li>KYC documents of new partners</li>
            <li>Form 4 for induction of partners</li>
            <li>Latest copy of LLP Agreement</li>
          </ul>

          <h3>FAQs</h3>

          <div className="faq-section">
            <h4>What forms are required for change in LLP partners?</h4>
            <p>Forms 4, 17 and 18 need to be filed with ROC for partner induction and removal.</p>
          </div>

          <div className="faq-section">
            <h4>When does the partner change come into effect?</h4>
            <p>The change comes into effect once relevant forms are filed and approved by ROC.</p>
          </div>

        </div>
      </section>

      <style jsx>{`
        
        .llppartner-section {
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

export default CPLLP;