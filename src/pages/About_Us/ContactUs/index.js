import Grid from "@mui/material/Grid";
import MKBox from "components/MKBox";

import MKTypography from "components/MKTypography";
import DefaultNavbar from "examples/Navbars/DefaultNavbar";
import DefaultFooter from "examples/Footers/DefaultFooter";
import { Container } from "@mui/material";
// Routes
import routes from "routes";
import footerRoutes from "footer.routes";
import FormSimple from "layouts/sections/input-areas/forms/components/FormSimple";
import './style.css';
import Team from "../AboutUs/sections/Team";

function ContactUs() {
  return (
    <>
      <MKBox position="fixed" top="0.5rem" width="100%">
        <DefaultNavbar
          routes={routes}
          sticky
          relative
        />
      </MKBox>
      <MKBox
        minHeight="75vh"
        width="100%"
        sx={{
          backgroundImage: ({ functions: { linearGradient, rgba }, palette: { gradients } }) =>
            `${linearGradient(
              rgba(gradients.dark.main, 0.6),
              rgba(gradients.dark.state, 0.6)
            )}, url(https://images.unsplash.com/photo-1638262052640-82e94d64664a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80)`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          display: "grid",
          placeItems: "center",
        }}
      >


        <Container>
          <Grid
            container
            item
            xs={12}
            lg={8}
            justifyContent="center"
            alignItems="center"
            flexDirection="column"
            sx={{ mx: "auto", textAlign: "center" }}
          >
            <MKTypography
              variant="h1"
              color="white"
              sx={({ breakpoints, typography: { size } }) => ({
                [breakpoints.down("md")]: {
                  fontSize: size["3xl"],
                },
              })}
            >
              Contact Us
            </MKTypography>
            <MKTypography variant="body1" color="white" opacity={0.8} mt={1} mb={3}>
              We would love to hear more from You!
            </MKTypography>

          </Grid>
        </Container>
      </MKBox>

      <div className="container mx-auto md:px-6">
        <section className="section">
          <div className="media" style={{
            display: 'flex',
          }}>
            <div className="first">
              <MKTypography variant="h2" py={3}>Who are We</MKTypography>
              <p className="mb-6 text-neutral-500 dark:text-neutral-300">
                We at AccountWale, a team of Accounting professionals based in Mumbai, MH, are dedicated to providing exceptional services to our clients. Our team consists of qualified and experienced professionals who are committed to offering tailored solutions to every client. We understand the financial complexities of businesses and strive to provide customized solutions that meet the unique requirements of each client. Our services include business accounting, financial management, tax consulting, auditing, cash flow analysis and more. With our expertise and dedication, we are confident that we can deliver
              </p>
              <p className="mb-2 text-neutral-500 dark:text-neutral-300">
                Mumbai, 94126, India
              </p>
              <p className="mb-2 text-neutral-500 dark:text-neutral-300">
                + 01 234 567 89
              </p>
              <p className="mb-2 text-neutral-500 dark:text-neutral-300">
                info@gmail.com
              </p>
            </div>
            <div className="second" style={{
              textAlign: 'center'
            }}>
              <MKTypography variant="h2" py={3}>Fill the form to reach out</MKTypography>

              <FormSimple />
            </div>
          </div>
        </section>
        <Team />
        <MKTypography variant="h2" py={3}>Location</MKTypography>
        <MKTypography variant="body" > Mumbai, MH</MKTypography>
        <iframe title="location" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d241316.67292626254!2d72.71637178509145!3d19.08250200603438!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c6306644edc1%3A0x5da4ed8f8d648c69!2sMumbai%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1685533357226!5m2!1sen!2sin" width="100%" height="400" frameborder="0" border="0"></iframe>


      </div>




      <MKBox pt={6} px={1} mt={6}>
        <DefaultFooter content={footerRoutes} />
      </MKBox>
    </>
  );
}

export default ContactUs;
