import BaseLayout from "layouts/sections/components/BaseLayout";
import FormSimple from "layouts/sections/input-areas/forms/components/FormSimple";

function ARC() {
  return (
    <BaseLayout
      title="Alteration of Share Capital"
      breadcrumb={[
        { label: "Services", route: "/sections/input-areas/forms" }, 
        { label: "Share Capital Alteration" },
      ]}
    >
      <section className="sharecapital-section">
        <div className="content">

          <p>
            Get end-to-end assistance with altering your company's share capital structure through increase, reduction, etc.
          </p>

          <h3>What We Offer</h3>

          <ul>
            <li>Preparing shareholders resolution</li>
            <li>Filing of e-forms with ROC</li>
            <li>Making submissions to RBI (for foreign funds)</li>
            <li>Updating records and share certificates</li>
          </ul>

          <div className="form-area">
            <FormSimple />
          </div>

          <h3>Documents Required</h3>

          <ul>
            <li>Latest MoA and AoA</li>
            <li>Board resolution approving alterations</li>
            <li>Shareholder special resolution</li>
            <li>CA certificate (for capital reduction)</li>
          </ul>

          <h3>FAQs</h3>

          <div className="faq-section">
            <h4>What forms are required for alteration of share capital?</h4>
            <p>Forms SH-7 and PAS-3 need to be filed with RoC for altering share capital.</p>
          </div>

          <div className="faq-section">
            <h4>When does alteration of share capital come into effect?</h4>
            <p>It comes into effect once forms are filed and approved by the RoC.</p>
          </div>

        </div>
      </section>

      <style jsx>{`
        
        .sharecapital-section {
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

export default ARC;