import BaseLayout from "layouts/sections/components/BaseLayout";
import FormSimple from "layouts/sections/input-areas/forms/components/FormSimple";

function CADN() {
  return (
    <BaseLayout
      title="Changing Address of your Company/LLP (another State/RoC)"
      breadcrumb={[
        { label: "Services", route: "/sections/input-areas/forms" },
        { label: "Out of State Address Change" },
      ]}
    >
      <section className="addresschange-section">
        <div className="content">
          
          <p>
            Get end-to-end assistance to change your company or LLP's registered address to another state or RoC jurisdiction.
          </p>

          <h3>What We Offer</h3>

          <ul>
            <li>Obtaining approvals from new state authorities</li>
            <li>Drafting and filing address change forms</li>
            <li>Coordinating transfer between RoCs</li>
            <li>Updating address across agencies</li>
          </ul>

          <div className="form-area">
            <FormSimple />
          </div>

          <h3>Documents Required</h3>

          <ul>
            <li>NOC from new property's owner</li>
            <li>Proof of new registered office address</li>
            <li>Latest MoA and AoA</li>
            <li>PAN and TAN details</li>
          </ul>

          <h3>FAQs</h3>

          <div className="faq-section">
            <h4>What forms are required for out of state address change?</h4>
            <p>INC-22 needs to be filed by company and Form 18 by LLP for change to new state/RoC jurisdiction.</p>
          </div>

          <div className="faq-section">
            <h4>Is simultaneous RoC transfer filing allowed?</h4>
            <p>Yes, ROC transfer filing can be done simultaneously while changing address to another state.</p>
          </div>

        </div>
      </section>

      <style jsx>{`
        
        .addresschange-section {
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

export default CADN;