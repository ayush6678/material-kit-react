
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

function Avatars() {
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
            )}, url(https://images.unsplash.com/photo-1605726135442-468dd2b7eff1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1936&q=80)`,
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
          GST Compliance Services
        </MKTypography>

        <MKTypography

          color="white"
          mt={{ xs: 0 }}
          m={{ xs: 3, lg: 15 }}
          mb={{ xs: 14 }}
          textAlign="center"
        >

          Goods and Services Tax compliance requirements has been giving chills to most business owners and entrepreneurs since it’s introduction.

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


            <Grid container item xs={12} spacing={2} m={{ xs: 1, lg: 10 }} p={{ xs: 0, lg: 5 }} style={{ boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px" }}>
              <Grid item xs={12} sm={6} md={4} lg={3} px={{ xs: 3, lg: 0 }} mb={{ xs: -7, lg: 0 }}>
                  <BackgroundBlogCard
                    image={post1}
                    title=""
                    description=""
                    action={{}}
                  />
                </Grid>
                <Grid item xs={12} sm={6} md={8} lg={5} mb={{xs:-7}}>
                  <FilledInfoCard title="
                   GST Amnesty Scheme 2021
                   "
                    description="
                  If you were unable to file GSTR-3B returns for prior-periods for any reason and the penalties were mounting up to the North, it maybe the right time to compete the filings as the penalties have been reduced by up-to 90%.

                  So if your penalty due as at date was Rs.1,00,000/-, you might have to pay Rs.10,000/- only.
                  
                  Includes:
                  
                  Filing of monthly/ quarterly GSTR-1 and GSTR-3B returns as required
                  GSTR-2A reconciliation
                  Facilitation of Output tax payment
                  Valid for businesses with upto 30 monthly sales invoices"
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
                  <FilledInfoCard title="Goods and Service Tax (GST) Registration
"
                    description="
                  If you’re a business, selling goods and providing services within the state of your established premises having revenue of more than ₹20 Lakhs annually or providing goods or services outside your state, then it is mandatory for you to obtain a GST registration.

                  Also, if you don’t even the threshold still you can apply for GST as it is recommended so as to avail input tax credit on all your purchases and also get higher acceptability when dealing with larger enterprises, Govt. departments and others. "
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
Monthly/ Quarterly returns (GSTR-1 and GSTR-3B)


                   "
                    description="
                  GSTR-1 and GSTR-3B are basic returns to be filed by every GSTIN registered business at specific due dates. We ensure timely filing of the returns with zero penalty guarantee. Key inclusions:

                  Filing of monthly/ quarterly (QRMP) GSTR-1 and GSTR-3B returns for a year
                  GSTR-2A reconciliation
                  Facilitation of Output tax payment
                  Valid for businesses with upto 30 monthly sales invoices"
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
                   Quarterly returns under Composition scheme (GSTR-4)"
                    description="GSTR-4 return is to be filed quarterly by all dealers registered under the Composition schemes:

                  Filing of GSTR-4
                  Reconciliation of transactions
                  Facilitation of Output tax payment "
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
                   Annual Consolidated Return (GSTR-9)
                   "
                    description="GSTR-9 is applicable to all enterprises however it is optional for businesses whose annual turnover does not exceed Rs.2Crores. Inclusions:

                  Upto 500 invoices for GSTR-9
                  Reconciliation of transactions"
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
                   
                   Letter of Undertaking (LUT) for export of goods 
                   "
                    description="Businesses which wishes to export goods/ services without payment of GST, shall file a letter of undertaking annually. Here’s how we help you with the process:

                  Drafting of the letter of undertaking (LUT)
                  Submission of appropriate forms with the department"
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
                 Change in address/ contact/ other information

                   "
                    description="

                  Looking to update your GST records for the following:

                  Address of the enterprise
                  Contact details
                  Change in principal (directors/ partners) details
                  Change in category of registration (Regular to Composition and vice-versa)"
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
                   
                   Cancellation of GST registration
                   "
                    description="Are you shutting down operations or have you not been able to file nil returns and now looking for a remedy. Includes:

                  Filing of GSTR-10
                  Preparation of application for cancellation and supporting documents"
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
                  
                  Revocation of GST cancellation"
                    description="Is your GSTIN been cancelled suo-moto by the department due to non-filing of returns on time? and now you want it back, we can help with the following:

                  Preparation of application for revocation and supporting documents
                  Replying to queries and responding to clarifications from the department"
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

export default Avatars;
