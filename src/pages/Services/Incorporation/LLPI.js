import BaseLayout from "layouts/sections/components/BaseLayout";
import FormSimple from "layouts/sections/input-areas/forms/components/FormSimple";
function LLPIncorporation() {
    return (
        <BaseLayout
            title="Limited Liability Partnership (LLP) Incorporation"
            breadcrumb={[
                { label: "Services", route: "/sections/input-areas/forms" },
                { label: "Limited Liability Partnership" },
            ]}
        >
            <section className="llp-section">
                <div className="content">
                    <p>
                        Limited Liability Partnership (LLP) is a business structure that provides the benefits of both a partnership and a company. It offers limited liability protection to its partners while allowing flexibility in terms of management and taxation.
                    </p>

                    <h3>Pricing</h3>

                    <p>
                        Our LLP incorporation services come with flexible pricing options. Please contact us for detailed pricing information tailored to your specific requirements.
                    </p>

                    <div className="form-area">
                        <FormSimple />
                    </div>

                    <h3>Necessary Documents</h3>

                    <ul>
                        <li>Copy of identity proof (PAN card, Aadhaar card, etc.) for partners</li>
                        <li>Copy of address proof (Utility bill, passport, etc.) for partners</li>
                        <li>Passport-size photograph of partners</li>
                        <li>LLP agreement</li>
                        <li>Declaration by partners</li>
                        <li>Address proof of the registered office</li>
                    </ul>

                    <h3>Frequently Asked Questions (FAQ)</h3>

                    <div className="faq-section">
                        <h4>1. What is a Limited Liability Partnership (LLP)?</h4>
                        <p>
                            A Limited Liability Partnership (LLP) is a business structure that combines the advantages of a partnership and a company. It offers limited liability protection to its partners and allows flexibility in terms of management and taxation.
                        </p>
                    </div>

                    <div className="faq-section">
                        <h4>2. What are the benefits of forming an LLP?</h4>
                        <p>
                            Forming an LLP offers benefits such as limited liability protection, separate legal entity status, flexibility in management, and pass-through taxation. It provides partners with the advantages of a corporate structure while maintaining the simplicity of a partnership.
                        </p>
                    </div>

                    <div className="faq-section">
                        <h4>3. Can a foreign national be a partner in an LLP?</h4>
                        <p>
                            Yes, a foreign national or an NRI (Non-Resident Indian) can be a partner in an LLP, subject to certain conditions and compliance with the Foreign Exchange Management Act (FEMA) regulations. It is advisable to consult a professional for detailed guidance in such cases.
                        </p>
                    </div>

                    <div className="faq-section">
                        <h4>4. What is the minimum number of partners required for an LLP?</h4>
                        <p>
                            A minimum of two partners is required to form an LLP. However, there is no maximum limit on the number of partners in an LLP.
                        </p>
                    </div>

                    <div className="faq-section">
                        <h4>5. Can an LLP be converted into a private limited company?</h4>
                        <p>
                            Yes, an LLP can be converted into a private limited company by following the prescribed procedures and fulfilling the requirements of the Companies Act. The conversion process involves certain legal and regulatory steps.
                        </p>
                    </div>
                </div>
            </section>

            <style jsx>{`
          .llp-section {
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

export default LLPIncorporation;
