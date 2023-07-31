import BaseLayout from "layouts/sections/components/BaseLayout";
import FormSimple from "layouts/sections/input-areas/forms/components/FormSimple";

function PayrollServices() {
  return (
    <BaseLayout
      title="Payroll Services"
      breadcrumb={[
        { label: "Services", route: "/sections/input-areas/forms" },
        { label: "Payroll Services" },
      ]}
    >
      <section className="payroll-section">
        <div className="content">
          <p>
            Payroll management is a critical aspect of any business, involving the administration of employees' financial records, salaries, wages, deductions, and taxes. Accurate and timely payroll processing ensures employee satisfaction and compliance with tax regulations. Our payroll services are designed to streamline the payroll process and help businesses efficiently manage their employee compensation.
          </p>

          <h3>Payroll Services</h3>

          <p>
            With our professional payroll services, you can focus on your core business activities while leaving the complexities of payroll administration to us. Our experienced team will handle various payroll tasks, including calculating salaries, processing wages, managing deductions and benefits, and generating payroll reports. We ensure that your employees are paid accurately and on time while complying with relevant payroll regulations.
          </p>

          <div className="form-area">
            <FormSimple />
          </div>

          <h3>Key Features of Our Payroll Services</h3>

          <ul>
            <li>Calculation of employee salaries and wages</li>
            <li>Payroll processing and disbursement</li>
            <li>Management of employee deductions and benefits</li>
            <li>Tax withholding and filing</li>
            <li>Preparation and distribution of pay stubs</li>
            <li>Compliance with payroll regulations and labor laws</li>
            <li>Generation of payroll reports and analytics</li>
            <li>Handling payroll inquiries and support</li>
          </ul>

          <h3>Benefits of Our Payroll Services</h3>

          <ul>
            <li>Time Savings: Outsource payroll processing to us and save time spent on complex payroll calculations and tax filings.</li>
            <li>Accuracy and Compliance: Ensure accurate payroll calculations and compliance with tax and labor regulations.</li>
            <li>Employee Satisfaction: Timely and accurate payroll disbursement enhances employee satisfaction and morale.</li>
            <li>Data Security: We prioritize data security and confidentiality, ensuring the protection of sensitive payroll information.</li>
            <li>Cost-Effective: Avoid the costs associated with hiring and training in-house payroll staff.</li>
            <li>Expert Advice: Our payroll experts can provide guidance on payroll-related matters and help resolve payroll queries.</li>
          </ul>

          <h3>Get Started with Our Payroll Services</h3>

          <p>
            To get started with our payroll services, simply fill out the form below, and our team will get in touch with you to discuss your specific payroll requirements and provide a tailored payroll solution for your business.
          </p>
        </div>
      </section>

      <style jsx>{`
        .payroll-section {
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

export default PayrollServices;
