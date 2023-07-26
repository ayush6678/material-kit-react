import BaseLayout from "layouts/sections/components/BaseLayout";
import FormSimple from "layouts/sections/input-areas/forms/components/FormSimple";

function CAC() {
  return (
    <BaseLayout
      title="Changing Address of your Company/LLP (within same State)"
      breadcrumb={[
        { label: "Services", route: "/sections/input-areas/forms" },
        { label: "Address Change" },
      ]} 
    >
      <section className="addresschange-section">
        <div className="content">
          
          <p>
            Get assistance to change the registered address of your company/LLP within the same state due to office relocation or other reasons.
          </p>

          <h3>What We Offer</h3>

          <ul>
            <li>Drafting board resolution for address change</li>
            <li>Obtaining NOC from new property owner</li>
            <li>Filing of address change forms with ROC</li>
            <li>Updating address with other regulatory authorities</li>
          </ul>

          <div className="form-area">
            <FormSimple />
          </div>

          <h3>Documents Required</h3>

          <ul>
            <li>Identity and address proof of directors/partners</li>
            <li>Rent agreement or NOC from new property owner</li>
            <li>Electricity/water bill of new address</li>
            <li>Digitally signed board resolution</li>
          </ul>

          <h3>FAQs</h3>

          <div className="faq-section">
            <h4>What forms need to be filed for address change?</h4>
            <p>INC-22 must be filed by company and Form 18 by LLP with ROC for change in registered address.</p>
          </div>

          <div className="faq-section">
            <h4>Is physical verification required for new address?</h4>
            <p>ROC may conduct physical verification of the new registered office address within 30 days of FORM filing.</p>
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

export default CAC;