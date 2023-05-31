
import MKBox from "components/MKBox";
import FilledInfoCard from "examples/Cards/InfoCards/FilledInfoCard";
// Sections components
import BaseLayout from "layouts/sections/components/BaseLayout";


function Pagination() {
  return (
    <BaseLayout
      title="Licensing Services"
      breadcrumb={[
        { label: "Services", route: "/sections/navigation/pagination" },
        { label: "Lincesing Services" },
      ]}
    >

      <MKBox py={6}>
        <FilledInfoCard

          color="info"
          title="Udyam Adhaar/ Udyog Adhaar/ MSME Registration
          "
          description="Get your MSME registration within 5 days and enjoy a tons of subsidies and incentives."
          action={{
            type: "external",
            route: "/sections/input-areas/forms",
            label: "Know More",
          }}
        />
      </MKBox>
      <MKBox py={6}>
        <FilledInfoCard

          color="info"
          title="Importer Exporter Code (IEC)
          "
          description="It is mandatory to obtain an Importer Exporter Code for any business who wishes to either import or export services or goods.  However, for service exports it is not mandatory unless the exporter wants to claim benefits under the Foreign Trade Policy.

          Yes you read it right! There are a lot of benefits that are available to exporters, incl. additional direct incentives from Govt. of upto ~10% of your export revenue. So get your IEC Code, Today!! "
          action={{
            type: "external",
            route: "/sections/input-areas/forms",
            label: "Know More",
          }}
        />
      </MKBox>

      <MKBox py={6}>
        <FilledInfoCard

          color="info"
          title="Goods and Service Tax (GST) Registration
          "
          description="If you’re a business, selling goods and providing services within the state of your established premises having revenue of more than ₹20 Lakhs annually or providing goods or services outside your state, then it is mandatory for you to obtain a GST registration.

          Also, if you don’t even the threshold still you can apply for GST as it is recommended so as to avail input tax credit on all your purchases and also get higher acceptability when dealing with larger enterprises, Govt. departments and others. "
          action={{
            type: "external",
            route: "/sections/input-areas/forms",
            label: "Know More",
          }}
        />
      </MKBox>
      <MKBox py={6}>
        <FilledInfoCard

          color="info"
          title="Startup India Scheme
          "
          description="Get recognized as a startup by the Department of Industrial Policy and Promotion (DIPP) under the Ministry of Commerce and Industry. Once you get recognized you may avail multiple benefits from the Govt. incl.

          Eligibility to apply for Income Tax Exemption for three (3) years
          Rebates on registering your Intellectual Property Rights incl. Trademark (50%) and Patent (80%)
          Eligibility to apply for various Government tenders
          Access to register as a service provider on the Government e-Marketplace
          Apply and take part in various funding rounds and challenges especially for recognized startups."
          action={{
            type: "external",
            route: "/sections/input-areas/forms",
            label: "Know More",
          }}
        />
      </MKBox>
      <MKBox py={6}>
        <FilledInfoCard

          color="info"
          title="Trademark Application
          "
          description="You can now legally protect your Brand Name and Logo from copycats. Register your Trademark today!

          "
          action={{
            type: "external",
            route: "/sections/input-areas/forms",
            label: "Know More",
          }}
        />
      </MKBox>
      <MKBox py={6}>
        <FilledInfoCard

          color="info"
          title="FSSAI Registration
          "
          description="You may apply for FSSAI registration if you are manufacturer,  trader or restaurant carrying out any food business. There are three types of registrations based on the scale of activities: 

          Basic Registration
          State License Registration
          Central License Registration"
          action={{
            type: "external",
            route: "/sections/input-areas/forms",
            label: "Know More",
          }}
        />
      </MKBox>
      <MKBox py={6}>
        <FilledInfoCard

          color="info"
          title="
          Digital Signature Certificate (DSC) Class 3 Signature"
          description="A digital signature certificate token is required to sign various ROC, GST, Income tax and other filings/ applications. Our class 3 signature includes:

          2 years validity
          Physical token delivered to your address
          Technical support"
          action={{
            type: "external",
            route: "/sections/input-areas/forms",
            label: "Know More",
          }}
        />
      </MKBox>
      <MKBox py={6}>
        <FilledInfoCard

          color="info"
          title="Digital Signature Certificate (DSC) Class 3 Signature with Encryption (Combo)"
          description="A digital signature certificate token with encryption is required to sign various ROC, GST, Income tax and other filings/ applications and additionally for all govt. based tenders and other filing requirements. Our class 3 signature with encryption includes:

          2 years validity
          Physical token delivered to your address
          Technical support"
          action={{
            type: "external",
            route: "/sections/input-areas/forms",
            label: "Know More",
          }}
        />
      </MKBox>


    </BaseLayout>
  );
}

export default Pagination;
