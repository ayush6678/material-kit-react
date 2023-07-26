import BaseLayout from "layouts/sections/components/BaseLayout";
import FormSimple from "layouts/sections/input-areas/forms/components/FormSimple";

function ACCL() {
  return (
    <BaseLayout
      title="Annual Company Compliance (Lite)"
      breadcrumb={[
        { label: "Services", route: "/sections/input-areas/forms" },
        { label: "Company Compliance" },
      ]}
    >
      <section className="compliance-section">
        <div className="content">
          <p>
            Affordable company compliance services covering key regulatory requirements under Companies Act.
          </p>

          <h3>What We Offer</h3>

          <ul>
            <li>Filing annual returns (MGT-7)</li>
            <li>Updating company records</li>
            <li>Director KYC</li>
            <li>Statutory register updates</li> 
          </ul>

          <div className="form-area">
            <FormSimple />
          </div>

          <h3>Required Documents</h3>

          <ul>
            <li>PAN card of directors</li>
            <li>Latest AoA and MoA</li>
            <li>Details of directors & shareholders</li>
            <li>Company PAN and TAN</li>
          </ul>

          <h3>FAQs</h3>
            
          <div className="faq-section">
            <h4>1. What is included in lite compliance?</h4>
            <p>
              It covers basic filings like annual returns, updating company records and director KYC to meet minimum compliance requirements.
            </p>
          </div>
            
          <div className="faq-section">
            <h4>2. Does lite compliance meet all requirements?</h4>
            <p>
              Lite compliance meets basic requirements but may not cover additional filings that may be applicable to some companies.
            </p>
          </div>
            
          <div className="faq-section">
            <h4>3. What other services can be added?</h4>
            <p>
              Services like financial statement filing, tax filings, licenses and appointments can be added for comprehensive compliance.
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

export default ACCL;