
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

function Inputs() {
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
        minHeight="100vh"
        width="100%"
        sx={{
          backgroundImage: ({ functions: { linearGradient, rgba }, palette: { gradients } }) =>
            `${linearGradient(
              rgba(gradients.dark.main, 0.6),
              rgba(gradients.dark.state, 0.6)
            )}, url(https://images.unsplash.com/photo-1557682257-2f9c37a3a5f3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1700&q=80)`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          display: "grid",
          placeItems: "center",
        }}
      >

        <MKTypography
          variant="h1"
          color="white"
          mt={20}
          sx={({ breakpoints, typography: { size } }) => ({
            [breakpoints.down("md")]: {
              fontSize: size["3xl"],
            },
          })}
        >
          ROC Compliance Services
        </MKTypography>

        <MKTypography

          color="white"
          m={10}
        >

          If you operate a Company/ LLP, you will be required to perform certain compliances depending upon the scenarios, which will include:
          Filing of Mandatory Company Annual Returns (AOC4 and MGT7)
          Filing of Mandatory LLP Annual Return (Form 8 and Form 11)
          Filing of DIR-3 KYC for Directors
          Changing Company Name or Address
          Appointment/ Resignation of Director
          Change in Share Capital or Change in Shareholding
          Changes in Memorandum of Association
          Other applicable compliances
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
                   Annual Company Compliance (Comprehensive)"
                  description="
                  Includes RoC services for all year curated for all small and medium-sized companies. Key inclusions:
                  
                  Issuance of share certificates
                  Filing of business commencement form (INC-20A)
                  Annual returns filing (AOC-4 and MGT-7)
                  Preparation of statutory registers
                  Preparation of minute books and copies of resolutions
                  Filing of auditor appointment (ADT-1)
                  Filing of Director KYC (DIR-3 KYC)"
                />
              </Grid>
              <Grid item xs={4}>
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
                   
Annual Company Compliance (Lite)"
                  description="
                  Includes RoC compliances only for which essential filings are required. Inclusions:
                  
                  Annual returns filing (AOC-4 and MGT-7)
                  Filing of auditor appointment (ADT-1)
                  Filing of Director KYC (DIR-3 KYC)"
                />
              </Grid>
              <Grid item xs={4}>
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
                  Annual LLP Compliance

                   "
                  description="
                  Includes RoC compliances for any LLP. Inclusions:
                  
                  Annual returns filing (Form-8 and Form-11)
                  Filing of Director KYC (DIR-3 KYC)"
                />
              </Grid>
              <Grid item xs={4}>
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
                   Changing Name of your Company/ LLP"
                  description="Want to change your company’s name to better position your brand? It now takes only up to 5 working days to complete the process.

                  Name approval application (RUN)
                  Preparation of necessary documents and completing compliances as per Secretarial standards.
                  Filing of INC24 and MGT14 forms / Form-3 and Form-5 with MCA
                  Applying for new PAN and TAN
                  Issue of new Certificate of Incorporation"
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
                   Changing Address of your Company/ LLP (within same State)"
                  description="Shifting your workplace, need assistance with updation of MCA records? Now takes only up to 5 working days to complete the process.

                  Preparation of necessary documents and completing compliances as per Secretarial standards.
                  Filing of INC-22 and MGT-14/ Form-15 forms with MCA"
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
                   
Changing Address of your Company/ LLP (another State/ RoC)"
                  description="Shifting your workplace, need assistance with updation of MCA records? Now takes only up to 30 working days to complete the process.

                  Preparation of necessary documents and completing compliances as per Secretarial standards.
                  Filing of INC-23 and MGT-14/ Form-15 forms with MCA"
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
                   Change in Objects (MOA)
                   "
                  description="
                  Are you starting another line of business, or changing your current line of business? You know that you need to change your present MoA. Key inclusions:
                  
                  Drafting of revised MOA
                  Preparation of necessary documents and completing compliances as per Secretarial standards
                  Filing of MGT-14 form with MCA
                  Obtaining alteration Certificate from ROC"
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
                   
Appointment/ Resignation of Director"
                  description="Are you adding another director to manage the operations of the Company or one director has to resign? Both can happen with a one day process. Key inclusions:

                  Preparation of necessary documents and completing compliances as per Secretarial standards
                  Attaining new DIN through DIR 3 form
                  Filing of DIR-11/ DIR-12 form with MCA"
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
                  
Alteration of Share Capital"
                  description="
                  If the size of your company has grown and now planning to pump in more funds and thus require a change in share capital? Key inclusions:
                  
                  Preparation of necessary documents and completing compliances as per Secretarial standards
                  Drafting the revised MOA
                  Filing of SH-7 and MGT-14 forms with MCA
                  Filing of PAS-3 for allotment of shares"
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
                   Transfer of Shares"
                  description="If you’re looking to transfer your equity shares and bring in new partners in the business, here’s how we will assist you:

                  Preparation of necessary documents and completing compliances as per Secretarial standards
                  Preparation of SH-4 form
                  Preparation of Share transfer deed
                  Issuance of new share certificates"
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
                   Closure of Company (Under Fast Track Exit)"
                  description="If your Company has been incorporated atleast a year ago or it has been inoperational for more than a year and you’re no longer looking to run the Company. MCA has provided a Fast Track Exit mode to such businesses and here’s how we will assist you:

                  Preparation of necessary documents and completing compliances as per Secretarial standards
                  Filing of MGT-14 and STK-2 Form"
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
                   Dormant Company (Applying for Inactive status)"
                  description="If your Company has been inoperational since two years ago or it has been inoperational since it’s incoporation and you might want to restart business at a later point then you can apply for inactive status which remains for 5 years. Here’s how we will assist you:

                  Preparation of necessary documents and completing compliances as per Secretarial standards
                  Filing of MGT-14 and MSC-1 Form"
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
                  Change in Partners of LLP"
                  description="
                  If you’re looking to transfer your equity shares and bring in new partners in the business, here’s how we will assist you:
                  
                  Preparation of necessary documents and completing compliances as per Secretarial standards
                  Preparation of new LLP deed
                  Attaining new DIN through DIR 3 form
                  Filing of Form-3 and Form-4 with MCA
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
                   INC-20A (Business Commencement form) "
                  description="Every Company has to mandatorily file Form INC-20A within 180 days of the Incorporation of a Company.

                  Also you need an active current bank account in the name of the Company and the shareholders must have transferred their respective paid up capital to the Company.
                  
                  Failing to file INC-20A may result in hefty penalties. So file soon!"
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
                   Director KYC (DIR3 KYC) "
                  description="Directors of a Company/ LLP are required to furnish their KYC annually between 1st April and 30th September. Non-filing of such form in time may result in a penalty of Rs.5,000/-. "
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



          </Grid>
        </Container>
      </Card >
      <MKBox pt={6} px={1} mt={6}>
        <DefaultFooter content={footerRoutes} />
      </MKBox>
    </>
  );
}

export default Inputs;
