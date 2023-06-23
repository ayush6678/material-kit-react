
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

                <FilledInfoCard title="
                   ITR for Salaried Individuals

                   "
                  description="
                  Inclusions:

                  Filing of ITR -1/ITR-2
                  Preparation of Computation
                  Tax Planning"
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
                <FilledInfoCard title="ITR with Capital Gain Income"
                  description="Inclusions:
                  Filing of ITR -1/ITR-2
                  Preparation of Computation
                  Tax Planning"
                />
              </Grid>
              <Grid item xs={12} sm={6} md={4} lg={4}>
                <FilledInfoCard title="Starting at ₹749/- only"
                  action={{
                    type: "internal",
                    route: "/pages/blogs/author",
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
ITR with income under Presumptive Taxation Scheme (ITR-4)


                   "
                  description="
                  Inclusions:

                  Filing of ITR -4
                  Preparation of Computation
                  Tax Planning"
                />
              </Grid>
              <Grid item xs={12} sm={6} md={4} lg={4}>
                <FilledInfoCard title="Starting at ₹749/- only"
                  action={{
                    type: "internal",
                    route: "/pages/blogs/author",
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
               ITR for Companies/LLP
               "
                  description="Inclusions:

                  Filing of ITR -5/ITR-6
                  Preparation of Computation
                  Tax Planning
                  "
                />
              </Grid>
              <Grid item xs={12} sm={6} md={4} lg={4}>
                <FilledInfoCard title="Starting at ₹749/- only"
                  action={{
                    type: "internal",
                    route: "/sections/input-areas/inputs",
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
 ITR of individuals having business Income

                   "
                  description="
                  Inclusions:
                  
                  Filing of ITR -3
                  Preparation of Computation
                  Tax Planning"
                />
              </Grid>
              <Grid item xs={12} sm={6} md={4} lg={4}>
                <FilledInfoCard title="Starting at ₹749/- only"
                  action={{
                    type: "internal",
                    route: "/sections/input-areas/inputs",
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
                   
                   Filing of TDS Returns
                   "
                  description="Inclusions:

                  Filing of Quarterly TDS Returns
                  Preparation of Summary
                  Tax Payment Facilitation"
                />
              </Grid>
              <Grid item xs={12} sm={6} md={4} lg={4}>
                <FilledInfoCard title="Starting at ₹749/- only"
                  action={{
                    type: "internal",
                    route: "/sections/input-areas/inputs",
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
Responding to Notices/Orders

                   "
                  description="
                  Inclusions:

                  Filing of Rectification
                  Filing of Revised Returns
                  Responding to Demands
                  "
                />
              </Grid>
              <Grid item xs={12} sm={6} md={4} lg={4}>
                <FilledInfoCard title="Starting at ₹749/- only"
                  action={{
                    type: "internal",
                    route: "/sections/input-areas/inputs",
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

export default BreadcrumbsEL;
