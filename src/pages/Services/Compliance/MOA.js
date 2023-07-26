import BaseLayout from "layouts/sections/components/BaseLayout";
import FormSimple from "layouts/sections/input-areas/forms/components/FormSimple";

function MOA() {
  return (
    <BaseLayout
      title="Change in Objects (MOA)"
      breadcrumb={[
        { label: "Services", route: "/sections/input-areas/forms" },
        { label: "MOA Change" },
      ]}
    >
      <section className="moachange-section">
        <div className="content">

          <p>
            Get help with making changes to your company's Memorandum of Association (MOA) to reflect new business activities.
          </p>

          <h3>What We Offer</h3>

          <ul>
            <li>Drafting clauses for proposed MOA changes</li>
            <li>Filing alteration application with ROC</li>
            <li>Pursuing change in objects with MCA</li>
            <li>Updating MOA across records</li>
          </ul>

          <div className="form-area">
            <FormSimple />
          </div>

          <h3>Documents Required</h3>

          <ul>
            <li>Latest MOA and AOA</li>
            <li>Board resolution approving changes</li>
            <li>Shareholder approval/consent documents</li>
            <li>Justification for objects change</li>
          </ul>

          <h3>FAQs</h3>

          <div className="faq-section">
            <h4>What form is required for change in MOA?</h4>
            <p>Form INC-22 needs to be filed with ROC along with altered MOA as attachment.</p>
          </div>

          <div className="faq-section">
            <h4>Is shareholder approval mandatory for MOA change?</h4>
            <p>Yes, alteration in MOA requires approval of at least 75% shareholders through special resolution.</p>
          </div>

        </div>
      </section>

      <style jsx>{`
        
        .moachange-section {
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

export default MOA;