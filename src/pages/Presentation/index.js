/*
=========================================================
* Material Kit 2 React - v2.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-kit-react
* Copyright 2023 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// @mui material components
// import DefaultInfoCard from "examples/Cards/InfoCards/DefaultInfoCard";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";

// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";
import MKSocialButton from "components/MKSocialButton";

// Material Kit 2 React examples
import DefaultNavbar from "examples/Navbars/DefaultNavbar";
import DefaultFooter from "examples/Footers/DefaultFooter";
// import FilledInfoCard from "examples/Cards/InfoCards/FilledInfoCard";

// Presentation page sections
import Information from "pages/Presentation/sections/Information";
// import Pages from "pages/Presentation/sections/Pages";
import Testimonials from "pages/Presentation/sections/Testimonials";
// import Download from "pages/Presentation/sections/Download";

// Presentation page components
// import BuiltByDevelopers from "pages/Presentation/components/BuiltByDevelopers";

// Routes
import routes from "routes";
import footerRoutes from "footer.routes";

// Images
// import bgImage from "assets/images/bg-presentation.jpg";
import CenteredBlogCard from "examples/Cards/BlogCards/CenteredBlogCard";
import image from "assets/images/AccountWale.png";
// import { Padding } from "@mui/icons-material";
function Presentation() {
  return (
    <>
      <DefaultNavbar
        routes={routes}
        action={{
          type: "external",
          route: "",
          label: "Get Started",
          color: "info",
        }}
        sticky
        transparent
      />
      <img src={image} alt="AccountWale" width={60} style={{ position: "absolute", margin: "20px", marginLeft: "40px", marginTop: "20px" }} />
      <MKBox
        minHeight="60vh"
        width="100%"
        sx={{
          // backgroundImage: `url(${bgImage})`,
          backgroundSize: "cover",
          backgroundPosition: "top",
          display: "grid",
          placeItems: "center",
        }}
      >
        <Container>
          <Grid container item xs={12} lg={7} justifyContent="center" mx="auto">
            <MKTypography
              variant="h1"
              color="black"
              mt={-6}
              mb={1}
              sx={({ breakpoints, typography: { size } }) => ({
                [breakpoints.down("md")]: {
                  fontSize: size["3xl"],
                },
              })}
            >
              Save money. Save time.{" "}
            </MKTypography>
            <MKTypography
              variant="body1"
              color="black"
              textAlign="center"
              px={{ xs: 6, lg: 12 }}
              mt={1}
            >
              India’s Leading Compliance Services Platform
            </MKTypography>
          </Grid>
        </Container>
      </MKBox>
      <Card
        sx={{
          p: 10,
          mx: { xs: 2, lg: 3 },
          mt: -8,
          mb: 4,
          backgroundColor: ({ palette: { white }, functions: { rgba } }) => rgba(white.main, 0.8),
          backdropFilter: "saturate(200%) blur(30px)",
          boxShadow: ({ boxShadows: { xxl } }) => xxl,
        }}
      >
        {/* <Counters /> */}
        <Container>
          <Grid container spacing={12}>
            <Grid item xs={12} lg={4}>
              <CenteredBlogCard
                image="https://images.unsplash.com/photo-1521791136064-7986c2920216?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=869&q=80"
                title="Incorporation Services"
                description="Starting your dream company was never this easy.
                We Incorporate:
                Private Limited Company
                One Person Company (OPC)
                Limited Liability Partnership (LLP)
                Section 8 Company or NGO"
                action={{
                  type: "internal",
                  route: "/sections/navigation/navbars",
                  color: "info",
                  label: "find out more",
                }}
              />
            </Grid>
            <Grid item xs={12} lg={4}>
              <CenteredBlogCard
                image="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80"
                title="Compliance Services"
                description="
                Choose from the various available services
                
                We can help you with:
                
                ROC Compliance Services
                GST Compliance Services
                Income Tax Compliances
                Import and Export Services
                Book Keeping Services
                Payroll Management"
                action={{
                  type: "internal",
                  route: "/sections/navigation/navtabs",
                  color: "info",
                  label: "find out more",
                }}
              />
            </Grid>
            <Grid item xs={12} lg={4}>
              <CenteredBlogCard
                image="https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80"
                title="Licensing Services"
                description="Get all Govt. licenses at one place

                We can guide you through:
                
                Udyam/ Udyog Adhaar/ MSME
                Importer Exporter Code (IEC)
                GST Registration

                Digital Signatures"
                action={{
                  type: "internal",
                  route: "/sections/navigation/pagination",
                  color: "info",
                  label: "find out more",
                }}
              />
            </Grid>
          </Grid>
        </Container >


        <Container>
          <Grid container justifyContent="center" sx={{ textAlign: "center" }} py={20}>
            
              <MKTypography
                variant="h3"
                color="dark"
                textAlign="center"
                px={{ xs: 6, lg: 8 }}
                mt={1}
              >
                100+ <br/>Satisfied Business
              </MKTypography>

 
              <MKTypography
                variant="h3"
                color="info"
                textAlign="center"
                px={{ xs: 6, lg: 8 }}
                mt={1}
              >
                Tax Reduction
              </MKTypography>


              <MKTypography
                variant="h3"
                color="dark"
                textAlign="center"
                px={{ xs: 6, lg: 8 }}
                mt={1}
              >
                Professional Help
              </MKTypography>

          </Grid>
        </Container>
        <Information />

        {/* <DesignBlocks /> */}
        {/* <Pages /> */}
        <Container sx={{ mt: 6 }}>
          {/* <BuiltByDevelopers /> */}
        </Container>
        {/* <Container>
          <Grid container spacing={3}>
            <Grid item xs={12} lg={4}>
              <FilledInfoCard
                variant="gradient"
                color="info"
                icon="flag"
                title="Getting Started"
                description="Check the possible ways of working with our product and the necessary files for building your own project."
                action={{
                  type: "external",
                  route: "https://www.creative-tim.com/learning-lab/react/overview/material-kit/",
                  label: "Let's start",
                }}
              />
            </Grid>
            <Grid item xs={12} lg={4}>
              <FilledInfoCard
                color="info"
                icon="precision_manufacturing"
                title="Plugins"
                description="Get inspiration and have an overview about the plugins that we used to create the Material Kit."
                action={{
                  type: "external",
                  route: "https://www.creative-tim.com/learning-lab/react/overview/datepicker/",
                  label: "Read more",
                }}
              />
            </Grid>
            <Grid item xs={12} lg={4}>
              <FilledInfoCard
                color="info"
                icon="apps"
                title="Components"
                description="Material Kit is giving you a lot of pre-made components, that will help you to build UI's faster."
                action={{
                  type: "external",
                  route: "https://www.creative-tim.com/learning-lab/react/alerts/material-kit/",
                  label: "Read more",
                }}
              />
            </Grid>
          </Grid>
        </Container> */}
        <Testimonials />
        {/* <Download /> */}
        <MKBox pt={18} pb={6}>
          <Container>
            <Grid container spacing={3}>
              <Grid item xs={12} lg={5} ml="auto" sx={{ textAlign: { xs: "center", lg: "left" } }}>
                <MKTypography variant="h4" fontWeight="bold" mb={0.5}>
                  Thank you for your support!
                </MKTypography>
                <MKTypography variant="body1" color="text">
                  We deliver the best web products
                </MKTypography>
              </Grid>
              <Grid
                item
                xs={12}
                lg={5}
                my={{ xs: 5, lg: "auto" }}
                mr={{ xs: 0, lg: "auto" }}
                sx={{ textAlign: { xs: "center", lg: "right" } }}
              >
                <MKSocialButton
                  component="a"
                  href="https://twitter.com/intent/tweet?text=Check%20Material%20Design%20System%20made%20by%20%40CreativeTim%20%23webdesign%20%23designsystem%20%23mui5&amp;url=https%3A%2F%2Fwww.creative-tim.com%2Fproduct%2Fmaterial-kit-react"
                  target="_blank"
                  color="twitter"
                  sx={{ mr: 1 }}
                >
                  <i className="fab fa-twitter" />
                  &nbsp;Tweet
                </MKSocialButton>
                <MKSocialButton
                  component="a"
                  href="https://www.facebook.com/sharer/sharer.php?u=https://www.creative-tim.com/product/material-kit-react"
                  target="_blank"
                  color="facebook"
                  sx={{ mr: 1 }}
                >
                  <i className="fab fa-facebook" />
                  &nbsp;Share
                </MKSocialButton>
                <MKSocialButton
                  component="a"
                  href="https://www.pinterest.com/pin/create/button/?url=https://www.creative-tim.com/product/material-kit-react"
                  target="_blank"
                  color="pinterest"
                >
                  <i className="fab fa-pinterest" />
                  &nbsp;Pin it
                </MKSocialButton>
              </Grid>
            </Grid>
          </Container>
        </MKBox>
      </Card>
      <MKBox pt={6} px={1} mt={6}>
        <DefaultFooter content={footerRoutes} />
      </MKBox>
    </>
  );
}

export default Presentation;
