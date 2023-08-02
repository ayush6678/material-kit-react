import BaseLayout from "layouts/sections/components/BaseLayout";
import FormSimple from "layouts/sections/input-areas/forms/components/FormSimple";

function CNC() {
  return (
    <BaseLayout
      title="Changing Name of your Company/LLP"
      breadcrumb={[
        { label: "Services", route: "/sections/input-areas/forms" },
        { label: "Name Change" },
      ]}
    >
      <section className="namechange-section">
        <div className="content">
          <p>
            Get assistance with changing the name of your company or LLP due to rebranding, merger etc.
          </p>

          <h3>What We Offer</h3>

          <ul>
            <li>Checking name availability</li>
            <li>Preparing and filing forms</li>
            <li>Updating name with regulatory authorities</li>
            <li>Managing entire name change process</li>
          </ul>

          <div className="form-area">
            <FormSimple />
          </div>

          <h3>Documents Required</h3>

          <ul>
            <li>Board resolution for name change</li>
            <li>Shareholder approval/consent documents</li>
            <li>Digital signatures of authorised person</li>
            <li>Proof of identity and address of directors</li>
          </ul>

          <h3>FAQs</h3>

          <div className="faq-section">
            <h4>What form is required to change company name?</h4>
            <p>Form INC-24 needs to be filed with ROC for changing company name.</p>  
          </div>

          <div className="faq-section">
            <h4>Is name change allowed for LLP?</h4>
            <p>Yes, an LLP can change its name by filing Form 13 with the ROC.</p>
          </div>

          <div className="faq-section">
            <h4>Does name change impact existing contracts?</h4>
            <p>No, existing contracts and agreements are not impacted by the change of name.</p>
          </div>

        </div>
      </section>

      <style jsx>{`
        /* Styling */
      `}</style>
    </BaseLayout>
  );
}

export default CNC;