import BaseLayout from "layouts/sections/components/BaseLayout";
import FormSimple from "layouts/sections/input-areas/forms/components/FormSimple";

function DC() {
  return (
    <BaseLayout
      title="Dormant Company (Applying for Inactive status)"  
      breadcrumb={[
        { label: "Services", route: "/sections/input-areas/forms" },
        { label: "Dormant Company" },
      ]}
    >
      <section className="dormant-section">
        <div className="content">

          <p>
            Get assistance with applying dormant/inactive status for your company with no significant operations or business activity.
          </p>

          <h3>What We Offer</h3>

          <ul>
            <li>Examining eligibility for dormant status</li>
            <li>Preparing and filing MGT-14 form</li>
            <li>Pursuing dormant status approval with ROC</li>
            <li>Updating status across agencies</li>
          </ul>

          <div className="form-area">
            <FormSimple />
          </div>

          <h3>Documents Required</h3>

          <ul>
            <li>Copy of MOA and AOA</li>
            <li>Financial statements</li>
            <li>Director and shareholder details</li>
            <li>Resolution approving dormant status</li>
          </ul>

          <h3>FAQs</h3>

          <div className="faq-section">
            <h4>What are the benefits of dormant company status?</h4>
            <p>Dormant status allows minimum compliance and reduced filings while company remains non-operational.</p>  
          </div>

          <div className="faq-section">
            <h4>Is annual compliance applicable for dormant company?</h4>
            <p>Yes, filing of MGT-14 and maintaining registered office is mandatory.</p>
          </div>

        </div>
      </section>

      <style jsx>{`
        
        .dormant-section {
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

export default DC;