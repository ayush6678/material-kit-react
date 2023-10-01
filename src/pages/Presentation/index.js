import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";

import MKBox from "components/MKBox";
import Typography from "@mui/material/Typography";
import MKSocialButton from "components/MKSocialButton";

// Material Kit 2 React examples
import DefaultNavbar from "examples/Navbars/DefaultNavbar";
import DefaultFooter from "examples/Footers/DefaultFooter";
// import FilledInfoCard from "examples/Cards/InfoCards/FilledInfoCard";

// Presentation page sections
import Information from "pages/Presentation/sections/Information";
// import Pages from "pages/Presentation/sections/Pages";
import Testimonials from "pages/Presentation/sections/Testimonials";
import Download from "pages/Presentation/sections/Download";

// Presentation page components
// import BuiltByDevelopers from "pages/Presentation/components/BuiltByDevelopers";

// Routes
import routes from "routes";
import footerRoutes from "footer.routes";

// Images
// import bgImage from "assets/images/bg-presentation.jpg";
import CenteredBlogCard from "examples/Cards/BlogCards/CenteredBlogCard";
// import image from "assets/images/AccountWale.png";
// import { Padding } from "@mui/icons-material";
// import MessageBox from "./mssg";
import { useState } from "react";
import MessageBox from "./mssg";
function Presentation() {

  const ContactButton = () => {
    const [isVisible, setIsVisible] = useState(true);

    const redirectToWhatsApp = () => {
      window.location.href = 'https://api.whatsapp.com/send?phone=YOUR_PHONE_NUMBER';
    };

    const removeButton = () => {
      setIsVisible(false);
    };

    return (
      <>
        {isVisible && (
          <div
            style={{
              position: 'fixed',
              bottom: '20px',
              right: '20px',
              borderRadius: '50%',
              width: '100px',
              height: '100px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              cursor: 'pointer',
              zIndex: '1',
            }}

          >
            <div style={{ marginBottom: '10px' }}>
              <img
                src="https://img.icons8.com/?size=512&id=16712&format=png"
                alt="WhatsApp Icon"
                style={{ width: '50px', height: '50px' }}
              />
            </div>
            <button onClick={redirectToWhatsApp} style={{ fontSize: '14px', fontWeight: 'bold', background: 'green', padding:'2px' }} >Message Us</button>
            <div
              style={{
                position: 'absolute',
                top: '5px',
                right: '5px',
                width: '20px',
                height: '20px',
                borderRadius: '50%',
                backgroundColor: '#000000',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                cursor: 'pointer',
              }}
              onClick={removeButton}
            >
              <span style={{ color: '#FFFFFF', fontSize: '12px' }}>x</span>
            </div>
          </div>
        )}
      </>
    );
  };


  return (
    <div
      style={{
        // backgroundSize: "cover",
        // backgroundPosition: "top",
        // backgroundImage: `url()`,
        // backgroundColor: "black"
      }}
    >
      <ContactButton />
      <DefaultNavbar
        routes={routes}
        action={{
          type: "external",
          route: "",
          label: "Get Started",
          color: "success",
        }}
        center
        sticky
        
      />
      <MessageBox/>
      {/* <img src={image} alt="AccountWale" width={60} style={{ position: "absolute", margin: "20px", marginLeft: "40px", marginTop: "20px" }} /> */}
      <MKBox
        minHeight="60vh"
        width="100%"
        sx={{
          // backgroundImage: `url(https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80)`,
          // backgroundColor:"#d6ffda",
          backgroundSize: "cover",
          backgroundPosition: "top",
          display: "grid",
          placeItems: "center",
        }}
      >
        <Container>
          <Grid container item xs={12} lg={7} justifyContent="center" mx="auto">
            <Typography
              variant="h1"
              color="black"
              mt={5}
              mb={1}
              sx={({ breakpoints, typography: { size } }) => ({
                [breakpoints.down("md")]: {
                  fontSize: size["3xl"],
                },
              })}
            >
              Save money. Save time.{" "}
            </Typography>
            <Typography
              variant="body1"
              color="black"
              textAlign="center"
              px={{ xs: 6, lg: 12 }}
              mt={1}
              mb={5}
            >
              India’s Leading Compliance Services Platform
            </Typography>
          </Grid>
        </Container>
      </MKBox>
      <Card

        sx={{
          p: { lg: 10 },
          mx: { xs: 0, lg: 3 },
          mt: -8,
          mb: 4,
          backgroundColor: ({ palette: { white }, functions: { rgba } }) => rgba(white.main, 0.8),
          backdropFilter: "saturate(200%) blur(30px)",
          boxShadow: ({ boxShadows: { xxl } }) => xxl,
        }}
      >
        {/* <Counters /> */}

        <Information />




        <Container>
          <Grid container justifyContent="center" sx={{ textAlign: "center" }} py={20}>

            <Typography
              variant="h3"
              color="dark"
              textAlign="center"
              px={{ xs: 6, lg: 8 }}
              mt={1}
            >
              100+ <br />Satisfied Business
            </Typography>


            <Typography
              variant="h3"
              color="success"
              textAlign="center"
              px={{ xs: 6, lg: 8 }}
              mt={{ xs: 10, lg: 1 }}
            >
              Tax Reduction
            </Typography>

            


            <Typography
              variant="h3"
              color="dark"
              textAlign="center"
              px={{ xs: 6, lg: 8 }}
              mt={{ xs: 10, lg: 1 }}
            >
              Professional Help
            </Typography>

          </Grid>
        </Container>

        <Container>
          <Grid container spacing={12}>
            <Grid item xs={12} lg={4} >
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
                  route: "/pages/Services/Incorporation/Incorporation",
                  color: "success",
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
                  route: "/pages/Services/Compliance/Compliance",
                  color: "success",
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
                Importer Exporter Code
                GST Registration
                Startup India Scheme
                Trademark Registration
                Digital Signatures"
                action={{
                  type: "internal",
                  route: "/pages/Services/Licensing/Licensing",
                  color: "success",
                  label: "find out more",
                }}
              />
            </Grid>
          </Grid>
        </Container >
        <Container sx={{ mt: 6 }}>
        </Container>
        <Testimonials />
        <Download />
        <MKBox pt={18} pb={6}>
          <Container>
            <Grid container spacing={3}>
              <Grid item xs={12} lg={5} ml="auto" sx={{ textAlign: { xs: "center", lg: "left" } }}>
                <Typography variant="h4" fontWeight="bold" mb={0.5}>
                  Thank you for your support!
                </Typography>
                <Typography variant="body1" color="text">
                  We deliver the best web products
                </Typography>
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
            <Typography variant="h2" py={3}>Location</Typography>
            <Typography variant="body" > Mumbai, MH</Typography>
            <iframe title="location" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d241316.67292626254!2d72.71637178509145!3d19.08250200603438!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c6306644edc1%3A0x5da4ed8f8d648c69!2sMumbai%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1685533357226!5m2!1sen!2sin" width="100%" height="400" frameborder="0" border="0"></iframe>
          </Container>
        </MKBox>
      </Card>
      <MKBox pt={6} px={1} mt={6}>
        <DefaultFooter content={footerRoutes} />
      </MKBox>
    </div>
  );
}

export default Presentation;
