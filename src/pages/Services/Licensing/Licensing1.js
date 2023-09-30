
import MKBox from "components/MKBox";
import DefaultNavbar from "examples/Navbars/DefaultNavbar";
import routes from "routes";
import Card from "@mui/material/Card";
import MKTypography from "components/MKTypography";
import DefaultFooter from "examples/Footers/DefaultFooter";
import footerRoutes from "footer.routes";
import Download from "pages/Presentation/sections/Download";
import Info from "examples/Cards/InfoCards/ServiceInfo/Info";
function Licensing() {
  return (
    <>

      <DefaultNavbar
        routes={routes}
        transparent
        light
      />
      <MKBox
        minHeight="55vh"
        width="100%"
        sx={{
          backgroundImage: ({ functions: { linearGradient, rgba }, palette: { gradients } }) =>
            `${linearGradient(
              rgba(gradients.dark.main, 0.6),
              rgba(gradients.dark.state, 0.6)
            )}, url(https://images.unsplash.com/photo-1617957743089-7639c938a845?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1932&q=80)`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          display: "grid",
          placeItems: "center",
        }}
      ><MKTypography
        variant="h1"
        color="white"
        mt={20}
        sx={({ breakpoints, typography: { size } }) => ({
          [breakpoints.down("md")]: {
            fontSize: size["3xl"],
          },
        })}
      >
          Licensing Services
        </MKTypography>
        <MKTypography color="white"
          mt={{ xs: 0 }}
          m={{ xs: 6, lg: 15 }}
          mb={{ xs: 14 }}
          textAlign="center"
        >
          Register your business for various licenses
        </MKTypography>
      </MKBox>
      <Card
        sx={{
          p: 2,
          mx: { xs: 0, lg: 3 },
          mt: -8,
          mb: 4,
          boxShadow: ({ boxShadows: { xxl } }) => xxl,
        }}
      >
        <Info
          imageLink=""
          title="Udyam Adhaar/ Udyog Adhaar/ MSME Registration"
          description="Get your MSME registration within 5 days and enjoy a tons of subsidies and incentives."
          price="799"
          redirectUrl="/pages/Services/Licensing/TA"
        />

        <Info
          imageLink=""
          title="Importer Exporter Code (IEC)"
          description="It is mandatory to obtain an Importer Exporter Code for any business who wishes to either import or export services or goods.  However, for service exports it is not mandatory unless the exporter wants to claim benefits under the Foreign Trade Policy.
          Yes you read it right! There are a lot of benefits that are available to exporters, incl. additional direct incentives from Govt. of upto ~10% of your export revenue. So get your IEC Code, Today!!"
          price="799"
          redirectUrl="/pages/Services/Licensing/IEC"
        />
        <Info
          imageLink=""
          title="Goods and Service Tax (GST) Registration"
          description="If you’re a business, selling goods and providing services within the state of your established premises having revenue of more than ₹20 Lakhs annually or providing goods or services outside your state, then it is mandatory for you to obtain a GST registration.
          Also, if you don’t even the threshold still you can apply for GST as it is recommended so as to avail input tax credit on all your purchases and also get higher acceptability when dealing with larger enterprises, Govt. departments and others."
          price="799"
          redirectUrl="/pages/Services/Licensing/GSTR1"
        />
        <Info
          imageLink=""
          title="Trademark Application"
          description="You can now legally protect your Brand Name and Logo from copycats. Register your Trademark today!"
          price="799"
          redirectUrl="/pages/Services/Licensing/TA"
        />
        <Info
          imageLink=""
          title="Shop and Establishment Registration Service"
          description="Get your Shop and Establishment Registration done with ease using our professional registration services. Stay compliant and focus on growing your business."
          price="799"
          redirectUrl="/pages/Services/Licensing/SERS"
        />
        <Info
          imageLink=""
          title="Legal Entity Identification (LEI) Number Registration"
          description="Get your Legal Entity Identification (LEI) Number Registration done with ease using our professional registration services. Stay compliant and focus on growing your business."
          price="799"
          redirectUrl="/pages/Services/Licensing/LEI"
        />
        <Info
          imageLink=""
          title="FSSAI Registration"
          description="You may apply for FSSAI registration if you are manufacturer,  trader or restaurant carrying out any food business. There are three types of registrations based on the scale of activities: 
          Basic Registration
          State License Registration
          Central License Registration"
          price="799"
          redirectUrl="/pages/Services/Licensing/FSSAI"
        />
        <Info
          imageLink=""
          title="Digital Signature Certificate (DSC) Class 3 Signature"
          description="A digital signature certificate token is required to sign various ROC, GST, Income tax and other filings/ applications. Our class 3 signature includes:
          2 years validity
          Physical token delivered to your address
          Technical support"
          price="799"
          redirectUrl="/pages/Services/Licensing/DSC"
        />
        <Info
          imageLink=""
          title="Digital Signature Certificate (DSC) Class 3 Signature with Encryption (Combo)"
          description="A digital signature certificate token with encryption is required to sign various ROC, GST, Income tax and other filings/ applications and additionally for all govt. based tenders and other filing requirements. Our class 3 signature with encryption includes:
          2 years validity
          Physical token delivered to your address
          Technical support"
          price="799"
          redirectUrl="/pages/Services/Licensing/DSCC"
        />

        <Info
          imageLink=""
          title="Digital Signature Certificate (DSC) Class DGFT"
          description="A digital signature certificate DGFT is required especially for filing applications and returns for various incentives and programs run by the Director General for Foreign Trade (DGFT). Our class DGFT token includes:
          2 years validity
          Physical token delivered to your address
          Technical support"
          price="799"
          redirectUrl="/pages/Services/Licensing/DGFT"
        />
        {/* <Info
          imageLink=""
          title=""
          description=""
          price="799"
          redirectUrl=""
        />      */}
        <MKTypography
          variant="h2"
          textAlign="center"
        >Frequently Asked Questions(FAQ):</MKTypography>
        <Download />
      </Card >
      <MKBox pt={6} px={1} mt={6}>
        <DefaultFooter content={footerRoutes} />
      </MKBox>
    </>
  );
}

export default Licensing;
