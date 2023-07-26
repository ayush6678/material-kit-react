import BaseLayout from "layouts/sections/components/BaseLayout";
import FormSimple from "layouts/sections/input-areas/forms/components/FormSimple";

function ACR() {
  return (
    <BaseLayout
      title="Annual Consolidated Return (GSTR-9)"
      breadcrumb={[
        { label: "Services", route: "/sections/input-areas/forms" },
        { label: "Annual Consolidated Return" },
      ]}
    >
      <section className="gst-section">
        <div className="content">
          <p>
            The Annual Consolidated Return (GSTR-9) is an annual return filed by regular taxpayers under Goods and Services Tax (GST). It provides a consolidated summary of outward supplies, inward supplies, and tax liabilities for the entire financial year.
          </p>

          <h3>GSTR-9: Annual Consolidated Return</h3>

          <p>
            GSTR-9 is an annual return that captures the summarized details of all the monthly/quarterly returns filed during the financial year. It includes information about the taxpayer's outward supplies, inward supplies attracting reverse charge, input tax credit availed, and tax payable. GSTR-9 helps ensure compliance with GST regulations and provides a comprehensive view of the taxpayer's activities for the year.
          </p>

          <div className="form-area">
            <FormSimple />
          </div>

          <h3>Necessary Documents</h3>

          <ul>
            <li>Monthly/quarterly returns (GSTR-1, GSTR-3B, etc.) filed during the financial year</li>
            <li>Sales and purchase invoices</li>
            <li>Details of any amendments or revisions made to the returns</li>
            <li>Records of tax paid and input tax credit availed</li>
            <li>Any other relevant supporting documents</li>
          </ul>

          <h3>Frequently Asked Questions (FAQ)</h3>

          <div className="faq-section">
            <h4>1. What is GSTR-9?</h4>
            <p>
              GSTR-9 is the Annual Consolidated Return filed by regular taxpayers under GST. It provides a summarized view of the taxpayer's outward supplies, inward supplies, input tax credit availed, and tax payable for the entire financial year.
            </p>
          </div>

          <div className="faq-section">
            <h4>2. Who needs to file GSTR-9?</h4>
            <p>
              Regular taxpayers registered under GST, including businesses and individuals, are required to file GSTR-9. However, specific entities such as Input Service Distributors, Casual Taxable Persons, Non-Resident Taxable Persons, and persons paying TDS under Section 51 of the CGST Act have separate annual returns to be filed.
            </p>
          </div>

          <div className="faq-section">
            <h4>3. When should GSTR-9 be filed?</h4>
            <p>
              GSTR-9 should be filed annually, covering the entire financial year. The due date for filing GSTR-9 is typically on or before December 31st of the subsequent financial year. It is important to check the specific due date for each year, as there may be extensions or changes announced by the tax authorities.
            </p>
          </div>

          <div className="faq-section">
            <h4>4. What is the penalty for late or non-filing of GSTR-9?</h4>
            <p>
              Failure to file GSTR-9 by the due date may attract late filing penalties and interest charges. The late fee is usually specified as a fixed amount per day of delay, subject to a maximum cap. Non-filing or delayed filing can also result in compliance notices, tax demands, and legal implications. It is essential to file GSTR-9 within the prescribed timeline to avoid penalties.
            </p>
          </div>

          <div className="faq-section">
            <h4>5. Can I revise GSTR-9 after filing?</h4>
            <p>
              No, once GSTR-9 is filed, it cannot be revised. GSTR-9 is an annual consolidated return that provides a summarized view of the taxpayer's activities for the financial year. However, if any errors or omissions are identified after filing, they can be rectified in subsequent returns or through other applicable procedures as per the GST laws and regulations.
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

export default ACR;
