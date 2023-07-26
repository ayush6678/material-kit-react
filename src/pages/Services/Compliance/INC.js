import BaseLayout from "layouts/sections/components/BaseLayout";
import FormSimple from "layouts/sections/input-areas/forms/components/FormSimple";

function INC() {
  return (
    <BaseLayout
      title="INC-20A (Business Commencement form)"
      breadcrumb={[
        { label: "Services", route: "/sections/input-areas/forms" },
        { label: "Business Commencement (INC-20A)" },
      ]}
    >
      <section className="commencement-section">
        <div className="content">

          <p>
            Get assistance with filing form INC-20A and commencing your company's business operations.
          </p>

          <h3>What We Offer</h3>

          <ul>
            <li>Drafting and filing e-form INC-20A</li>
            <li>Updating business operations records</li>
            <li>Filing declaration of commencement (INC-21)</li>
            <li>Managing regulatory process</li>
          </ul>

          <div className="form-area">
            <FormSimple />
          </div>  

          <h3>Documents Required</h3>

          <ul>
            <li>Certified copy of MoA and AoA</li>
            <li>Declaration by directors</li>
            <li>Proof of registered office address</li>
            <li>Optional attachment(s)</li>  
          </ul>

          <h3>FAQs</h3>

          <div className="faq-section">
            <h4>When should INC-20A be filed?</h4>
            <p>INC-20A should be filed within 180 days of company incorporation before commencing operations.</p>
          </div>

          <div className="faq-section">
            <h4>Is there any filing fee for INC-20A?</h4>
            <p>No, there is no filing fee payable on e-form INC-20A.</p>
          </div>

        </div>
      </section>

      <style jsx>{`
        
        .commencement-section {
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

export default INC;