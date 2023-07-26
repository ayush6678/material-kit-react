import BaseLayout from "layouts/sections/components/BaseLayout";
import FormSimple from "layouts/sections/input-areas/forms/components/FormSimple";

function DKYC() {
  return (
    <BaseLayout
      title="Director KYC (DIR-3 KYC)" 
      breadcrumb={[
        { label: "Services", route: "/sections/input-areas/forms" },
        { label: "Director KYC" },
      ]}
    >
      <section className="dir3kyc-section">
        <div className="content">

          <p>
            Get assistance with filing DIR-3 KYC to provide and update KYC details of your company's directors with MCA.
          </p>

          <h3>What We Offer</h3>

          <ul>
            <li>Preparing DIR-3 form</li>
            <li>Filing DIR-3 with MCA</li>
            <li>Updating KYC details with MCA records</li>
            <li>Managing process end-to-end</li>
          </ul>

          <div className="form-area">
            <FormSimple />
          </div>

          <h3>Documents Required</h3>

          <ul>
            <li>PAN card of directors</li>
            <li>Address proof of directors</li>
            <li>Latest photograph of directors</li>
            <li>Digital signatures of directors</li>
          </ul>

          <h3>FAQs</h3>

          <div className="faq-section">
            <h4>How often does DIR-3 KYC need to be filed?</h4>
            <p>DIR-3 needs to be filed annually within 30 days from the closure of financial year.</p>
          </div>

          <div className="faq-section">
            <h4>Is there any fee for filing DIR-3 e-form?</h4>
            <p>No, filing DIR-3 is free of cost.</p>
          </div>

        </div>
      </section>

      <style jsx>{`
        
        .dir3kyc-section {
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

export default DKYC;