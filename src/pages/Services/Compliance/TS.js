import BaseLayout from "layouts/sections/components/BaseLayout";
import FormSimple from "layouts/sections/input-areas/forms/components/FormSimple";

function TS() {
  return (
    <BaseLayout
      title="Transfer of Shares"
      breadcrumb={[
        { label: "Services", route: "/sections/input-areas/forms" },
        { label: "Share Transfer" },
      ]}
    >
      <section className="sharetransfer-section">
        <div className="content">

          <p>
            Get end-to-end assistance with transferring equity shares of your company from one party to another.
          </p>

          <h3>What We Offer</h3> 

          <ul>
            <li>Examining transfer clauses in AoA</li>
            <li>Complying with share transfer process</li>
            <li>Filing SH-4 form with RoC</li>
            <li>Issuing new share certificates</li>  
          </ul>

          <div className="form-area">
            <FormSimple />
          </div>

          <h3>Documents Required</h3>

          <ul>
            <li>Transfer request from parties involved</li>
            <li>Original share certificate(s)</li>
            <li>Board resolution approving transfer </li>
            <li>PAN details of parties</li>
          </ul>

          <h3>FAQs</h3>

          <div className="faq-section">
            <h4>What form is required for share transfer?</h4>
            <p>Form SH-4 needs to be filed with RoC along with share transfer deed.</p>
          </div>

          <div className="faq-section">
            <h4>When does share transfer come into effect?</h4>
            <p>Share transfer comes into effect when SH-4 is approved and new share certificate is issued by company.</p>
          </div>

        </div>
      </section>

      <style jsx>{`
        
        .sharetransfer-section {
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

export default TS;