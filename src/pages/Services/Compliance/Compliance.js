
import MKBox from "components/MKBox";
// import CenteredBlogCard from "examples/Cards/BlogCards/CenteredBlogCard";
// Sections components
// import BaseLayout from "layouts/sections/components/BaseLayout";
import DefaultNavbar from "examples/Navbars/DefaultNavbar";
import routes from "routes";
import Card from "@mui/material/Card";
import MKTypography from "components/MKTypography";
import DefaultFooter from "examples/Footers/DefaultFooter";
import footerRoutes from "footer.routes";
// import BackgroundBlogCard from "examples/Cards/BlogCards/BackgroundBlogCard";
// import TransparentBlogCard from "examples/Cards/BlogCards/TransparentBlogCard";
import Download from "pages/Presentation/sections/Download";
import Info from "examples/Cards/InfoCards/ServiceInfo/Info";
function Complaince() {
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
          Compliance Services
        </MKTypography>
        <MKTypography color="white"
          mt={{ xs: 0 }}
          m={{ xs: 6, lg: 15 }}
          mb={{ xs: 14 }}
          textAlign="center"
        >
          Get your business compliant and avoid any late fees or penalties


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
          imageLink="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
          title="ROC compliance services"
          description="If you operate a Company/ LLP, you will be required to perform certain compliances depending upon the scenarios, which will include:
          Filing of Mandatory Company Annual Returns 
          Filing of Mandatory LLP Annual Return 
          Filing of DIR-3 KYC for Directors
          Changing Company Name or Address
          Appointment/ Resignation of Director
          Change in Share Capital or Change in Shareholding"
          price="799"
          redirectUrl="/sections/input-areas/inputs"
        />

        <Info
          imageLink=""
          title="GST compliance services"
          description="Under GST, we provide the following services:
          Filing of monthly/quarterly returns 
          Filing of quarterly composition scheme returns 
          Filing of annual consolidated return 
          Filing of Letter of undertaking (LUT) for export of goods without payment of IGST
          Amendment in registration 
          Filing of application for cancellation of GST"
          price="799"
          redirectUrl="/sections/elements/avatars"
        />
        <Info
          imageLink=""
          title="Income Tax compliance services"
          description="Filing of Income Tax Return and TDS Returns including the following:
          Income tax filing for Salaried
          Income tax filing for Business owners/ Companies/ LLPs
          Income tax filing for securities traders
          Income tax for income from Capital Gain
          TDS return filing for TDS on Salaries
          TDS return filing for TDS on Other than Salaries
          TCS returns
          Advance tax calculations and payments"
          price="799"
          redirectUrl="/sections/elements/breadcrumbs"
        />


        <MKTypography
          variant="h2"
          textAlign="center"
          mt={5}
        >Frequently Asked Questions(FAQ):</MKTypography>
        <Download />

      </Card >
      <MKBox pt={6} px={1} mt={6}>
        <DefaultFooter content={footerRoutes} />
      </MKBox>
    </>
  );
}

export default Complaince;
