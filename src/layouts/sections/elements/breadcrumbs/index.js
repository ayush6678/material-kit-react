
import MKBox from "components/MKBox";
import DefaultNavbar from "examples/Navbars/DefaultNavbar";
import routes from "routes";

import Card from "@mui/material/Card";
import MKTypography from "components/MKTypography";
import DefaultFooter from "examples/Footers/DefaultFooter";
import footerRoutes from "footer.routes";
import post1 from "assets/images/examples/testimonial-6-2.jpg";
import Info from "examples/Cards/InfoCards/ServiceInfo/Info";
function BreadcrumbsEL() {
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
            )}, url(https://images.unsplash.com/photo-1604339452989-f0d369b025ac?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1854&q=80)`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          display: "grid",
          placeItems: "center",
        }}
      ><MKTypography
        variant="h1"
        color="white"
        mt={20}
        mx={2}
        textAlign="center"
        sx={({ breakpoints, typography: { size } }) => ({
          [breakpoints.down("md")]: {
            fontSize: size["3xl"],
          },
        })}
      >
          INCOME TAX Compliance Services
        </MKTypography>

        <MKTypography


          color="white"
          pb={10}

          mt={{ xs: 0 }}
          m={{ xs: 3, lg: 15 }}
          mb={{ xs: 7 }}
          textAlign="center"
        >


          Income Tax compliance requirements has been giving chills to most business owners and entrepreneurs since it’s introduction.

          You don’t need to WORRY! You’re at the right place!

          SIGN UP FOR OUR PACKAGES!
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
          imageLink={post1}
          title="ITR for Salaried Individuals"
          description="Inclusions:

          Filing of ITR -1/ITR-2
          Preparation of Computation
          Tax Planning"
          price="799"
          redirectUrl="/pages/Services/Compliance/ITC/ITRSI"
        />


        <Info
          imageLink={post1}
          title="ITR with Capital Gain Income"
          description="Inclusions:
          Filing of ITR -1/ITR-2
          Preparation of Computation
          Tax Planning"
          price="799"
          redirectUrl="/pages/Services/Compliance/ITC/ITRCGI"
        />
        <Info
          imageLink={post1}
          title="ITR with income under Presumptive Taxation Scheme (ITR-4)"
          description="Inclusions:

          Filing of ITR -4
          Preparation of Computation
          Tax Planning"
          price="799"
          redirectUrl="/pages/Services/Compliance/ITC/ITRIP"
        />
        <Info
          imageLink={post1}
          title="ITR for Companies/LLP"
          description="Inclusions:
          Filing of ITR -5/ITR-6
          Preparation of Computation
          Tax Planning"
          price="799"
          redirectUrl="/pages/Services/Compliance/ITC/ITRLLP"
        />
        <Info
          imageLink={post1}
          title="ITR of individuals having business Income"
          description="Inclusions:
                  
          Filing of ITR -3
          Preparation of Computation
          Tax Planning"
          price="799"
          redirectUrl="/pages/Services/Compliance/ITC/ITRBI"
        />
        <Info
          imageLink={post1}
          title="Filing of TDS Returns"
          description="Inclusions:

          Filing of Quarterly TDS Returns
          Preparation of Summary
          Tax Payment Facilitation"
          price="799"
          redirectUrl="/pages/Services/Compliance/ITC/FTDS"
        />
        <Info
          imageLink={post1}
          title="Responding to Notices/Orders"
          description="Inclusions:

          Filing of Rectification
          Filing of Revised Returns
          Responding to Demands"
          price="799"
          redirectUrl="/pages/Services/Compliance/ITC/RNO"
        />
        {/* <Info
          imageLink={post1}
          title=""
          description=""
          price="799"
          redirectUrl=""
        /> */}
      </Card >
      <MKBox pt={6} px={1} mt={6}>
        <DefaultFooter content={footerRoutes} />
      </MKBox>
    </>
  );
}

export default BreadcrumbsEL;
