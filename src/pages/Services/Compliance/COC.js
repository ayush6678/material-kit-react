import BaseLayout from "layouts/sections/components/BaseLayout";
import FormSimple from "layouts/sections/input-areas/forms/components/FormSimple";

function CC() {
  return (
    <BaseLayout
      title="Closure of Company (Under Fast Track Exit)"
      breadcrumb={[
        { label: "Services", route: "/sections/input-areas/forms" },
        { label: "Company Closure" },
      ]}
    >
      <section className="closure-section">
        <div className="content">
          
          <p>
            Get end-to-end assistance with closing your defunct company easily through the fast track exit mode.
          </p>

          <h3>What We Offer</h3>

          <ul>
            <li>Examining eligibility for fast track exit</li>
            <li>Filing of e-form STK-2</li>
            <li>Pursuing closure approval with ROC</li>
            <li>Completion of closure formalities</li>
          </ul>

          <div className="form-area">
            <FormSimple />
          </div>

          <h3>Documents Required</h3>

          <ul>
            <li>Copies of MOA and AOA</li>
            <li>List of assets and liabilities</li>
            <li>Auditor's report</li>
            <li>Statement of pending litigation</li>
          </ul>

          <h3>FAQs</h3>

          <div className="faq-section">
            <h4>What conditions need to be met for fast track exit?</h4>
            <p>Company should not have conducted any business or operations in last 3 years and meet other criteria.</p>
          </div>

          <div className="faq-section">
            <h4>How long does fast track closure process take?</h4>
            <p>ROC approval for fast track closure generally takes around 30-60 days.</p>
          </div>

        </div>
      </section>

      <style jsx>{`
        
        .closure-section {
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

export default CC;