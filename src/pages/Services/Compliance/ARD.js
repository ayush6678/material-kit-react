import BaseLayout from "layouts/sections/components/BaseLayout";
import FormSimple from "layouts/sections/input-areas/forms/components/FormSimple";

function ARD() {
  return (
    <BaseLayout 
      title="Appointment/Resignation of Director"
      breadcrumb={[
        { label: "Services", route: "/sections/input-areas/forms" },
        { label: "Director Appointment/Resignation" },
      ]}
    >
      <section className="director-section">
        <div className="content">

          <p>
            Get end-to-end assistance with appointment or resignation of a director on your company's board.
          </p>

          <h3>What We Offer</h3>

          <ul>
            <li>Filing DIR-12 for new director appointment</li>
            <li>Filing DIR-12 for director resignation</li>
            <li>Updating records with MCA and other agencies</li>
            <li>Managing paperwork and process</li>
          </ul>

          <div className="form-area">
            <FormSimple />
          </div>

          <h3>Documents Required</h3>

          <ul>
            <li>Passport size photo of new director (for appointment)</li>
            <li>Identity and address proof of new director (for appointment)</li>
            <li>Resignation letter from resigning director</li>
            <li>SS-1/SS-2 forms (for resignation)</li>
          </ul>

          <h3>FAQs</h3>

          <div className="faq-section">
            <h4>What is the process for new director appointment?</h4>
            <p>File DIR-12 along with attested documents and fees to obtain DIN and appoint new director.</p>
          </div>

          <div className="faq-section">
            <h4>When does resignation of a director come into effect?</h4>
            <p>Director resignation comes into effect once Form DIR-12 is filed by the company with RoC.</p>
          </div>

        </div>
      </section>

      <style jsx>{`
        
        .director-section {
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

export default ARD;