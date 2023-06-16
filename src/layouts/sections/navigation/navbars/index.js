
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
// import TransparentBlogCard from "examples/Cards/BlogCards/TransparentBlogCard";
import BackgroundBlogCard from "examples/Cards/BlogCards/BackgroundBlogCard";
import post1 from "assets/images/examples/testimonial-6-2.jpg";
import Download from "pages/Presentation/sections/Download";

function Navbars() {
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
          Incorporation Services
        </MKTypography>
        <MKTypography color="white"
          mt={{ xs: 0 }}
          m={{ xs: 6, lg: 15 }}
          mb={{ xs: 14 }}
          textAlign="center"

        >
          Starting your Company in India was never this easy


        </MKTypography>



      </MKBox>



      <Card 
        sx={{
          p: {lg:2},
          mx: { xs: 0, lg: 3 },
          mt: -8,
          mb: 4,
          boxShadow: ({ boxShadows: { xxl } }) => xxl,
        }}
      >

        <Container>


          <Grid container spacing={2}>

            <Grid container item xs={12} spacing={2} m={{ xs: 1, lg: 10 }} p={{ xs:0,lg: 5 }} style={{ boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px" }}>
              <Grid item xs={12} sm={6} md={4} lg={3} px={{xs:3,lg:0}} mb={{xs:-7,lg:0}}>
                <BackgroundBlogCard
                  image={post1}
                  title=""
                  description=""
                  action={{}}
                />
              </Grid>
              <Grid item xs={12} sm={6} md={8} lg={5} mb={{xs:-7}}>
                <FilledInfoCard
                  title="Private Limited Company Incorporation"
                  description="Did you know? Starting a private limited company in India takes only up to 7 working days. Isn’t it too quick?"
                />
              </Grid>
              <Grid item xs={12} sm={6} md={4} lg={4}>
                <FilledInfoCard
                  title="Starting at ₹749/- only"
                  action={{
                    type: "internal",
                    route: "/sections/input-areas/forms",
                    color: "info",
                    label: "read more",
                  }}
                />
              </Grid>
            </Grid>


            <Grid container item xs={12} spacing={2} m={{ xs: 1, lg: 10 }} p={{ xs:0,lg: 5 }} style={{ boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px" }}>
              <Grid item xs={12} sm={6} md={4} lg={3} px={{xs:3,lg:0}} mb={{xs:-7,lg:0}}>
                <BackgroundBlogCard
                  image={post1}
                  title=""
                  description=""
                  action={{}}
                />
              </Grid>
              <Grid item xs={12} sm={6} md={8} lg={5} mb={{xs:-7}}>
                <FilledInfoCard title="
                   One Person Company Incorporation
                   "
                  description="Do you like to go-solo? and still need a corporate outlook, OPC seems to be the right fit for you!!"
                />
              </Grid>
              <Grid item xs={12} sm={6} md={4} lg={4}>
                <FilledInfoCard title="Starting at ₹749/- only"
                  action={{
                    type: "internal",
                    route: "/sections/input-areas/forms",
                    color: "info",
                    label: "read more",
                  }}
                />
              </Grid>
            </Grid>

            <Grid container item xs={12} spacing={2} m={{ xs: 1, lg: 10 }} p={{ xs:0,lg: 5 }} style={{ boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px" }}>
              <Grid item xs={12} sm={6} md={4} lg={3} px={{xs:3,lg:0}} mb={{xs:-7,lg:0}} >
                <BackgroundBlogCard
                  image={post1}
                  title=""
                  description=""
                  action={{}}
                />
              </Grid>
              <Grid item xs={12} sm={6} md={8} lg={5} mb={{xs:-7}}>
                <FilledInfoCard title="
                   Limited Liability Partnership Incorporation
                   "
                  description="If you have partners with fixed contribution ratio, profit sharing ratio and don’t wish to get into the hassles of compliances, forming an LLP just sounds right to us"
                />
              </Grid>
              <Grid item xs={12} sm={6} md={4} lg={4}>
                <FilledInfoCard title="Starting at ₹749/- only"
                  action={{
                    type: "internal",
                    route: "/sections/input-areas/forms",
                    color: "info",
                    label: "read more",
                  }}
                />
              </Grid>
            </Grid>


            <Grid container item xs={12} spacing={2} m={{ xs: 1, lg: 10 }} p={{ xs:0,lg: 5 }} style={{ boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px" }}>
              <Grid item xs={12} sm={6} md={4} lg={3} px={{xs:3,lg:0}} mb={{xs:-7,lg:0}}>
                <BackgroundBlogCard
                  image={post1}
                  title=""
                  description=""
                  action={{}}
                />
              </Grid>
              <Grid item xs={12} sm={6} md={8} lg={5} mb={{xs:-7}}>
                <FilledInfoCard title="
                  Section 8 or NGO Incorporation
                   "
                  description="If you’re looking to operate a Company which does welfare for masses, promotes commerce, arts, science, sports, education, research, social welfare, religion, charity, protection of environment or any such other object.

                    AND you do not to wish to earn profit and will use any profits earned during for attaining the objects for which NGO was formed"
                />
              </Grid>
              <Grid item xs={12} sm={6} md={4} lg={4}>
                <FilledInfoCard title="Starting at ₹749/- only"
                  action={{
                    type: "internal",
                    route: "/sections/input-areas/forms",
                    color: "info",
                    label: "read more",
                  }}
                />
              </Grid>
            </Grid>

            <MKTypography
              variant="h2"
            >Frequently Asked Questions(FAQ):</MKTypography>
            <Download />
          </Grid>
        </Container>
      </Card >
      <MKBox pt={6} px={1} mt={6}>
        <DefaultFooter content={footerRoutes} />
      </MKBox>
    </>
  );
}

export default Navbars;
