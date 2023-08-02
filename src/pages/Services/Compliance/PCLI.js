import BaseLayout from "layouts/sections/components/BaseLayout";
import FormSimple from "layouts/sections/input-areas/forms/components/FormSimple";

function ACC() {
  return (
    <BaseLayout
      title="Annual Company Compliance (Comprehensive)"
      breadcrumb={[
        { label: "Services", route: "/sections/input-areas/forms" },
        { label: "Company Compliance" },
      ]}
    >
      <section className="compliance-section">
        <div className="content">
          <p>
            Comprehensive company compliance services to ensure your company meets all regulatory requirements under the Companies Act and other laws.
          </p>

          <h3>What We Offer</h3>

          <ul>
            <li>Filing annual returns (MGT-7)</li>
            <li>Filing financial statements</li>
            <li>Directors KYC</li>
            <li>Updating company records</li>
            <li>Statutory registers maintenance</li>
            <li>Regulatory filings and submissions</li>  
          </ul>

          <div className="form-area">
            <FormSimple />
          </div>

          <h3>Required Documents</h3>

          <ul>
            <li>PAN card of directors</li>
            <li>Latest financial statements</li>
            <li>Updated MoA and AoA</li>
            <li>Directors and shareholders details</li>
            <li>Company PAN and TAN</li>
            <li>Other relevant company documents</li>
          </ul>

          <h3>FAQs</h3>
            
          <div className="faq-section">
            <h4>1. What is included in comprehensive compliance?</h4>
            <p>
              It includes all regulatory filings like annual returns, financial statements, tax filings, licenses and appointments as per Companies Act, Income Tax Act etc.
            </p>
          </div>
            
          <div className="faq-section">
            <h4>2. How often should a company be compliant?</h4>
            <p>
              As per laws, a company must be fully compliant at least on an annual basis by filing the necessary documents.
            </p>
          </div>
            
          <div className="faq-section">
            <h4>3. What are the consequences of non-compliance?</h4>
            <p>
              Non-compliance can lead to penalties, disqualification of directors, freezing of bank accounts and even striking off the company name.
            </p>
          </div>
            
          <div className="faq-section">
            <h4>4. Does compliance apply to dormant companies?</h4>
            <p>
              Yes, dormant companies are also required to ensure annual compliance such as filing a return of dormant company (MGT-14).
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

export default ACC;