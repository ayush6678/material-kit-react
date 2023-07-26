import BaseLayout from "layouts/sections/components/BaseLayout";
import FormSimple from "layouts/sections/input-areas/forms/components/FormSimple";

function COA() {
  return (
    <BaseLayout
      title="Change in Address/Contact/Other Information"
      breadcrumb={[
        { label: "Services", route: "/sections/input-areas/forms" },
        { label: "Change Information" },
      ]}
    >
      <section className="change-section">
        <div className="content">
          <p>
            If you need to update your address, contact details, or any other information provided to a particular organization, you can initiate a request for change in address/contact/other information. This allows you to keep your records up-to-date and ensures that the organization has accurate information for communication and other purposes.
          </p>

          <h3>Change in Address/Contact/Other Information</h3>

          <p>
            To request a change in address, contact details, or other information, you will need to fill out a form or submit a request with the organization. The process may vary depending on the specific organization or entity you are dealing with. It is important to provide accurate and complete information to facilitate the update process smoothly.
          </p>

          <div className="form-area">
            <FormSimple />
          </div>

          <h3>Necessary Documents</h3>

          <ul>
            <li>Identification proof (e.g., Aadhaar card, passport, driver's license)</li>
            <li>Address proof (e.g., utility bill, rental agreement, bank statement)</li>
            <li>Any other documents as specified by the organization</li>
          </ul>

          <h3>Frequently Asked Questions (FAQ)</h3>

          <div className="faq-section">
            <h4>1. How can I change my address/contact/other information?</h4>
            <p>
              The process to change your address, contact details, or other information may vary depending on the organization or entity you are dealing with. Generally, you can initiate the request by filling out a form or submitting a request with the necessary documents. It is advisable to reach out to the organization directly or visit their official website for specific instructions and guidelines.
            </p>
          </div>

          <div className="faq-section">
            <h4>2. What documents do I need to provide for a change in information?</h4>
            <p>
              Typically, you will need to provide identification proof, such as Aadhaar card, passport, or driver's license, along with address proof, such as a utility bill, rental agreement, or bank statement. The exact documents required may vary depending on the organization and the type of information you are updating. It is recommended to check the organization's requirements or contact their customer service for accurate information.
            </p>
          </div>

          <div className="faq-section">
            <h4>3. How long does it take to process a change in information request?</h4>
            <p>
              The processing time for a change in information request may vary depending on the organization's internal procedures and workload. In some cases, it may take a few days to weeks for the request to be processed and the updated information to reflect in their records. It is advisable to inquire with the organization about the expected processing time for your specific request.
            </p>
          </div>

          <div className="faq-section">
            <h4>4. Are there any fees associated with a change in information request?</h4>
            <p>
              Some organizations may charge a nominal fee for processing a change in information request. The fee, if applicable, will vary depending on the organization's policies and the type of change being made. It is recommended to check the organization's website or contact their customer service to inquire about any associated fees.
            </p>
          </div>

          <div className="faq-section">
            <h4>5. Can I make a change in information request online?</h4>
            <p>
              Many organizations provide online platforms or portals for submitting change in information requests. These platforms may allow you to fill out an online form, upload the required documents, and track the status of your request. It is advisable to visit the organization's website or contact their customer service to check if online options are available for your specific request.
            </p>
          </div>
        </div>
      </section>

      <style jsx>{`
        .change-section {
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

        ul li {
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

export default COA;
