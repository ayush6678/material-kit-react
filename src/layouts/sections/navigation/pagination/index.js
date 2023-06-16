
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

function Pagination() {
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

          m={15}
        >
          Register your business for various licenses




        </MKTypography>



      </MKBox>



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
          <Grid container spacing={2}>


            <Grid container item xs={12} spacing={2} m={10} p={5} style={{ boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px" }}>
              <Grid item xs={3}>
                <BackgroundBlogCard
                  image={post1}
                  title=""
                  description=""
                  action={{}}
                />
              </Grid>
              <Grid item xs={5}>
                <FilledInfoCard title="
                   Udyam Adhaar/ Udyog Adhaar/ MSME Registration"
                  description="Get your MSME registration within 5 days and enjoy a tons of subsidies and incentives.

                  "
                />
              </Grid>
              <Grid item xs={4}>
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


            <Grid container item xs={12} spacing={2} m={10} mt={1} p={5} style={{ boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px" }}>
              <Grid item xs={3}>
                <BackgroundBlogCard
                  image={post1}
                  title=""
                  description=""
                  action={{}}
                />
              </Grid>
              <Grid item xs={5}>
                <FilledInfoCard title="
                   Importer Exporter Code (IEC)

                   "
                  description="It is mandatory to obtain an Importer Exporter Code for any business who wishes to either import or export services or goods.  However, for service exports it is not mandatory unless the exporter wants to claim benefits under the Foreign Trade Policy.

                  Yes you read it right! There are a lot of benefits that are available to exporters, incl. additional direct incentives from Govt. of upto ~10% of your export revenue. So get your IEC Code, Today!! "
                />
              </Grid>
              <Grid item xs={4}>
                <FilledInfoCard title="Starting at ₹749/- only"
                  action={{
                    type: "internal",
                    route: "/sections/elements/avatars",
                    color: "info",
                    label: "read more",
                  }}
                />
              </Grid>
            </Grid>

            <Grid container item xs={12} spacing={2} m={10} mt={1} p={5} style={{ boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px" }}>
              <Grid item xs={3}>
                <BackgroundBlogCard
                  image={post1}
                  title=""
                  description=""
                  action={{}}
                />
              </Grid>
              <Grid item xs={5}>
                <FilledInfoCard title="
                  Goods and Service Tax (GST) Registration

                   "
                  description="If you’re a business, selling goods and providing services within the state of your established premises having revenue of more than ₹20 Lakhs annually or providing goods or services outside your state, then it is mandatory for you to obtain a GST registration.

                  Also, if you don’t even the threshold still you can apply for GST as it is recommended so as to avail input tax credit on all your purchases and also get higher acceptability when dealing with larger enterprises, Govt. departments and others. "
                />
              </Grid>
              <Grid item xs={4}>
                <FilledInfoCard title="Starting at ₹749/- only"
                  action={{
                    type: "internal",
                    route: "/sections/elements/breadcrumbs",
                    color: "info",
                    label: "read more",
                  }}
                />
              </Grid>
            </Grid>


            <Grid container item xs={12} spacing={2} m={10} mt={1} p={5} style={{ boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px" }}>
              <Grid item xs={3}>
                <BackgroundBlogCard
                  image={post1}
                  title=""
                  description=""
                  action={{}}
                />
              </Grid>
              <Grid item xs={5}>
                <FilledInfoCard title="
Trademark Application
"
                  description="You can now legally protect your Brand Name and Logo from copycats. Register your Trademark today!

                  "
                />
              </Grid>
              <Grid item xs={4}>
                <FilledInfoCard title="Starting at ₹749/- only"
                  action={{
                    type: "internal",
                    route: "/sections/elements/breadcrumbs",
                    color: "info",
                    label: "read more",
                  }}
                />
              </Grid>
            </Grid>

            <Grid container item xs={12} spacing={2} m={10} mt={1} p={5} style={{ boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px" }}>
              <Grid item xs={3}>
                <BackgroundBlogCard
                  image={post1}
                  title=""
                  description=""
                  action={{}}
                />
              </Grid>
              <Grid item xs={5}>
                <FilledInfoCard title="
FSSAI Registration
"
                  description="You may apply for FSSAI registration if you are manufacturer,  trader or restaurant carrying out any food business. There are three types of registrations based on the scale of activities: 

                  Basic Registration
                  State License Registration
                  Central License Registration"
                />
              </Grid>
              <Grid item xs={4}>
                <FilledInfoCard title="Starting at ₹749/- only"
                  action={{
                    type: "internal",
                    route: "/sections/elements/breadcrumbs",
                    color: "info",
                    label: "read more",
                  }}
                />
              </Grid>
            </Grid>

            <Grid container item xs={12} spacing={2} m={10} mt={1} p={5} style={{ boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px" }}>
              <Grid item xs={3}>
                <BackgroundBlogCard
                  image={post1}
                  title=""
                  description=""
                  action={{}}
                />
              </Grid>
              <Grid item xs={5}>
                <FilledInfoCard title="
Digital Signature Certificate (DSC) Class 3 Signature
"
                  description="A digital signature certificate token is required to sign various ROC, GST, Income tax and other filings/ applications. Our class 3 signature includes:

                  2 years validity
                  Physical token delivered to your address
                  Technical support"
                />
              </Grid>
              <Grid item xs={4}>
                <FilledInfoCard title="Starting at ₹749/- only"
                  action={{
                    type: "internal",
                    route: "/sections/elements/breadcrumbs",
                    color: "info",
                    label: "read more",
                  }}
                />
              </Grid>
            </Grid>



            <Grid container item xs={12} spacing={2} m={10} mt={1} p={5} style={{ boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px" }}>
              <Grid item xs={3}>
                <BackgroundBlogCard
                  image={post1}
                  title=""
                  description=""
                  action={{}}
                />
              </Grid>
              <Grid item xs={5}>
                <FilledInfoCard title="
Digital Signature Certificate (DSC) Class 3 Signature with Encryption (Combo)
"
                  description="A digital signature certificate token with encryption is required to sign various ROC, GST, Income tax and other filings/ applications and additionally for all govt. based tenders and other filing requirements. Our class 3 signature with encryption includes:

                  2 years validity
                  Physical token delivered to your address
                  Technical support"
                />
              </Grid>
              <Grid item xs={4}>
                <FilledInfoCard title="Starting at ₹749/- only"
                  action={{
                    type: "internal",
                    route: "/sections/elements/breadcrumbs",
                    color: "info",
                    label: "read more",
                  }}
                />
              </Grid>
            </Grid>

            <Grid container item xs={12} spacing={2} m={10} mt={1} p={5} style={{ boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px" }}>
              <Grid item xs={3}>
                <BackgroundBlogCard
                  image={post1}
                  title=""
                  description=""
                  action={{}}
                />
              </Grid>
              <Grid item xs={5}>
                <FilledInfoCard title="
Digital Signature Certificate (DSC) Class DGFT
"
                  description="A digital signature certificate DGFT is required especially for filing applications and returns for various incentives and programs run by the Director General for Foreign Trade (DGFT). Our class DGFT token includes:

                  2 years validity
                  Physical token delivered to your address
                  Technical support"
                />
              </Grid>
              <Grid item xs={4}>
                <FilledInfoCard title="Starting at ₹749/- only"
                  action={{
                    type: "internal",
                    route: "/sections/elements/breadcrumbs",
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

export default Pagination;
