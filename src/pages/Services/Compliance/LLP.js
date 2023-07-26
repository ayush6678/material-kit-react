import BaseLayout from "layouts/sections/components/BaseLayout";
import FormSimple from "layouts/sections/input-areas/forms/components/FormSimple";

function LLP() {
  return (
    <BaseLayout
      title="Annual LLP Compliance"
      breadcrumb={[
        { label: "Services", route: "/sections/input-areas/forms" },
        { label: "LLP Compliance" },
      ]}
    >
      <section className="compliance-section">
        <div className="content">
          <p>
            Ensure your LLP meets all compliance requirements under LLP Act with our annual compliance services.
          </p>

          <h3>What We Offer</h3>

          <ul>
            <li>Filing LLP annual return (Form 11)</li>
            <li>Updating partner and LLP details</li>
            <li>Statutory registers maintenance</li>
            <li>Accounting and audit compliance</li> 
          </ul>

          <div className="form-area">
            <FormSimple />
          </div>

          <h3>Required Documents</h3>

          <ul>
            <li>KYC documents of partners</li>
            <li>LLP agreement and changes</li>
            <li>LLP PAN and TAN</li>
            <li>Previous year Form 11 and Form 8</li>
          </ul>

          <h3>FAQs</h3>
            
          <div className="faq-section">
            <h4>1. What filings are required annually?</h4>
            <p>
              An LLP must file the annual return (Form 11) and annual accounts with ROC each financial year.
            </p>
          </div>
            
          <div className="faq-section">
            <h4>2. Is audit required for LLPs?</h4>
            <p>
              Audit is mandatory for LLPs meeting certain turnover or contribution thresholds as per LLP Rules.
            </p>
          </div>
            
          <div className="faq-section">
            <h4>3. What are the late filing penalties?</h4>
            <p>
              Delay in filing Form 8/11 attracts additional fees up to Rs. 5000/-. Further penalties may apply for continuing non-compliance.
            </p>
          </div>
        </div>
      </section>

      <style jsx>{`
        .compliance-section {
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

export default LLP;