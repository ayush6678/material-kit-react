import BaseLayout from "layouts/sections/components/BaseLayout";
import FormSimple from "layouts/sections/input-areas/forms/components/FormSimple";

function QRC() {
  return (
    <BaseLayout
      title="Quarterly Returns under Composition Scheme (GSTR-4)"
      breadcrumb={[
        { label: "Services", route: "/sections/input-areas/forms" },
        { label: "Composition Scheme Returns" },
      ]}
    >
      <section className="gst-section">
        <div className="content">
          <p>
            Quarterly Returns under Composition Scheme (GSTR-4) are the returns filed by businesses opting for the composition scheme under Goods and Services Tax (GST). The composition scheme is a simplified taxation scheme for small businesses, allowing them to pay tax at a lower rate based on their turnover.
          </p>

          <h3>GSTR-4: Quarterly Composition Scheme Return</h3>

          <p>
            GSTR-4 is a quarterly return that composition scheme taxpayers need to file. It includes a summary of outward supplies, inward supplies attracting reverse charge, tax liability, and payment of tax. The return provides details of sales, purchases, and tax liability for the specific quarter under the composition scheme.
          </p>

          <div className="form-area">
            <FormSimple />
          </div>

          <h3>Necessary Documents</h3>

          <ul>
            <li>Sales and purchase invoices</li>
            <li>Details of any inward supplies attracting reverse charge</li>
            <li>Payment receipts and challans</li>
            <li>Records of tax paid under the composition scheme</li>
            <li>Any other relevant supporting documents</li>
          </ul>

          <h3>Frequently Asked Questions (FAQ)</h3>

          <div className="faq-section">
            <h4>1. What is GSTR-4?</h4>
            <p>
              GSTR-4 is a quarterly return that needs to be filed by taxpayers opting for the composition scheme under GST. It captures a summary of outward supplies, inward supplies attracting reverse charge, tax liability, and payment of tax for the specific quarter under the composition scheme.
            </p>
          </div>

          <div className="faq-section">
            <h4>2. Who can file GSTR-4?</h4>
            <p>
              GSTR-4 can be filed by businesses registered under the composition scheme of GST. The composition scheme is available for small businesses with an annual turnover below a specified threshold. However, certain businesses are not eligible for the composition scheme, such as service providers, e-commerce operators, and manufacturers of notified goods.
            </p>
          </div>

          <div className="faq-section">
            <h4>3. When should GSTR-4 be filed?</h4>
            <p>
              GSTR-4 should be filed on a quarterly basis. The due date for filing GSTR-4 is typically the 18th day of the month following the end of the quarter. For example, the return for the April-June quarter is due on July 18th. It is important to check the specific due dates for each quarter as they may vary.
            </p>
          </div>

          <div className="faq-section">
            <h4>4. What are the benefits of the composition scheme?</h4>
            <p>
              The composition scheme offers several benefits to eligible taxpayers, including:
            </p>
            <ul>
              <li>Lower tax rates based on turnover</li>
              <li>Simplified compliance and reduced paperwork</li>
              <li>Quarterly filing of returns</li>
              <li>Less frequent tax payments</li>
              <li>Relief from maintaining detailed records</li>
            </ul>
          </div>

          <div className="faq-section">
            <h4>5. Can I claim input tax credit under the composition scheme?</h4>
            <p>
              No, businesses registered under the composition scheme are not eligible to claim input tax credit. Under the composition scheme, taxpayers pay tax at a lower rate based on their turnover but cannot avail input tax credit on their purchases. It is important to evaluate the pros and cons of the composition scheme before opting for it.
            </p>
          </div>
        </div>
      </section>

      <style jsx>{`
        .gst-section {
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

export default QRC;
