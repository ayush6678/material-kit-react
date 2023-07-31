import BaseLayout from "layouts/sections/components/BaseLayout";
import FormSimple from "layouts/sections/input-areas/forms/components/FormSimple";

function BookkeepingService() {
  return (
    <BaseLayout
      title="Bookkeeping Service"
      breadcrumb={[
        { label: "Services", route: "/sections/input-areas/forms" },
        { label: "Bookkeeping Service" },
      ]}
    >
      <section className="bookkeeping-section">
        <div className="content">
          <p>
            Bookkeeping is an essential aspect of maintaining accurate financial records for your business. It involves recording and organizing financial transactions, which provides a clear and comprehensive view of your business's financial health. Bookkeeping services are designed to help businesses manage their financial data efficiently and ensure compliance with relevant regulations.
          </p>

          <h3>Bookkeeping Service</h3>

          <p>
            Our professional bookkeeping service offers comprehensive assistance in managing your financial records. Our experienced team will handle various bookkeeping tasks, including recording income and expenses, managing accounts payable and receivable, reconciling bank statements, and generating financial reports. With our reliable bookkeeping service, you can focus on core business operations while ensuring your financial data is accurate and up-to-date.
          </p>

          <div className="form-area">
            <FormSimple />
          </div>

          <h3>Key Features of Our Bookkeeping Service</h3>

          <ul>
            <li>Recording and categorizing financial transactions</li>
            <li>Managing accounts payable and accounts receivable</li>
            <li>Bank and credit card reconciliation</li>
            <li>Preparation of financial statements (income statement, balance sheet, cash flow statement)</li>
            <li>Monitoring and tracking expenses</li>
            <li>Generating customized financial reports</li>
            <li>Ensuring compliance with accounting standards and regulations</li>
            <li>Accurate and timely record-keeping</li>
          </ul>

          <h3>Benefits of Our Bookkeeping Service</h3>

          <ul>
            <li>Time and Cost Savings: Outsource your bookkeeping tasks to us and save time and money spent on hiring and training in-house bookkeeping staff.</li>
            <li>Financial Visibility: Get a clear and real-time view of your business's financial performance, allowing you to make informed decisions.</li>
            <li>Compliance and Accuracy: Stay compliant with financial reporting regulations and ensure accurate and error-free financial records.</li>
            <li>Focus on Core Business: Free up your time and resources to focus on growing your business while we take care of bookkeeping.</li>
            <li>Expert Guidance: Our team of experienced professionals can provide financial insights and guidance to improve your business's financial health.</li>
          </ul>

          <h3>Get Started with Our Bookkeeping Service</h3>

          <p>
            To get started with our bookkeeping service, simply fill out the form below, and our team will get in touch with you to discuss your specific requirements and provide a customized bookkeeping solution for your business.
          </p>
        </div>
      </section>

      <style jsx>{`
        .bookkeeping-section {
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
      `}</style>
    </BaseLayout>
  );
}

export default BookkeepingService;
