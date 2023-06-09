
import MKBox from "components/MKBox";
// import CenteredBlogCard from "examples/Cards/BlogCards/CenteredBlogCard";
import FilledInfoCard from "examples/Cards/InfoCards/FilledInfoCard";
// Sections components
// import BaseLayout from "layouts/sections/components/BaseLayout";
import DefaultNavbar from "examples/Navbars/DefaultNavbar";
import routes from "routes";
import { Container } from "@mui/material";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import MKTypography from "components/MKTypography";
import DefaultFooter from "examples/Footers/DefaultFooter";
import footerRoutes from "footer.routes";
// import BackgroundBlogCard from "examples/Cards/BlogCards/BackgroundBlogCard";
import TransparentBlogCard from "examples/Cards/BlogCards/TransparentBlogCard";
function NavTabs() {
  return (
    <>

      <DefaultNavbar
        routes={routes}
        action={{
          type: "external",
          route: "https://www.creative-tim.com/product/material-kit-react",
          label: "Get Started",
          color: "success",
        }}
        transparent
        sticky
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
            )}, url(https://images.unsplash.com/photo-1557683311-eac922347aa1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2029&q=80)`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          display: "grid",
          placeItems: "center",
        }}
      ><MKTypography
        variant="h1"
        color="white"
        sx={({ breakpoints, typography: { size } }) => ({
          [breakpoints.down("md")]: {
            fontSize: size["3xl"],
          },
        })}
      >
          Compliance Services
        </MKTypography></MKBox>
      <Card
        sx={{
          p: 2,
          mx: { xs: 2, lg: 3 },
          mt: -8,
          mb: 4,
          boxShadow: ({ boxShadows: { xxl } }) => xxl,
        }}
      >

        <Container>

          <Grid
            container
            item
            xs={12}
            lg={11}
            justifyContent="center"
            alignItems="center"
            flexDirection="column"
            sx={{ mx: "auto", textAlign: "center" }}
          >

            <MKBox mt={12}>

              <FilledInfoCard

                color="info"
                title="ROC compliance services"
                description="If you operate a Company/ LLP, you will be required to perform certain compliances depending upon the scenarios, which will include:

          Filing of Mandatory Company Annual Returns (AOC4 and MGT7)
          Filing of Mandatory LLP Annual Return (Form 8 and Form 11)
          Filing of DIR-3 KYC for Directors
          Changing Company Name or Address
          Appointment/ Resignation of Director
          Change in Share Capital or Change in Shareholding
          Changes in Memorandum of Association
          Other applicable compliances"
                action={{
                  type: "external",
                  route: "/sections/input-areas/forms",
                  label: "Know More",
                }}
              />
            </MKBox>

            <MKBox py={6}>
              <FilledInfoCard
                title="GST compliance services"
                description="Under GST, we provide the following services:

          Filing of monthly/quarterly returns (GSTR-1 and GSTR-3B)
          Filing of quarterly composition scheme returns (GSTR-4)
          Filing of annual consolidated return (GSTR-9)
          Filing of Letter of undertaking (LUT) for export of goods without payment of IGST
          Amendment in registration (change in contact details/ authorised signatory/ address)
          Filing of application for cancellation of GST"
                action={{
                  type: "external",
                  route: "/sections/input-areas/forms",
                  label: "Know More",
                }}
              />
            </MKBox>

            <MKBox mb={12}>
              <FilledInfoCard

                color="info"
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
                action={{
                  type: "external",
                  route: "/sections/input-areas/forms",
                  label: "Know More",
                }}
              />
            </MKBox>

            <Grid container spacing={3}>
              <Grid item xs={12} sm={6} lg={3}>
                <TransparentBlogCard
                  image={null}
                  title="Rover raised $65 million"
                  description="Finding temporary housing for your dog should be as easy as renting an Airbnb. That’s the idea behind Rover ..."
                  action={{
                    type: "internal",
                    route: "/pages/blogs/author",
                    color: "info",
                    label: "read more",
                  }}
                />
              </Grid>
              <Grid item xs={12} sm={6} lg={3}>
                <TransparentBlogCard
                  image={null}
                  title="MateLabs machine learning"
                  description="If you’ve ever wanted to train a machine learning model and integrate it with IFTTT, you now can with ..."
                  action={{
                    type: "internal",
                    route: "/pages/blogs/author",
                    color: "info",
                    label: "read more",
                  }}
                />
              </Grid>
              <Grid item xs={12} sm={6} lg={3}>
                <TransparentBlogCard
                  image={null}
                  title="MateLabs machine learning"
                  description="If you’ve ever wanted to train a machine learning model and integrate it with IFTTT, you now can with ..."
                  action={{
                    type: "internal",
                    route: "/pages/blogs/author",
                    color: "info",
                    label: "read more",
                  }}
                />
              </Grid>
            </Grid>
          </Grid>
        </Container>
      </Card >
      <MKBox pt={6} px={1} mt={6}>
        <DefaultFooter content={footerRoutes} />
      </MKBox>
    </>
  );
}

export default NavTabs;
