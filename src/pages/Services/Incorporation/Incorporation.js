
import MKBox from "components/MKBox";
import FilledInfoCard from "examples/Cards/InfoCards/FilledInfoCard";
import DefaultNavbar from "examples/Navbars/DefaultNavbar";
import routes from "routes";
import { Container } from "@mui/material";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import MKTypography from "components/MKTypography";
import DefaultFooter from "examples/Footers/DefaultFooter";
import footerRoutes from "footer.routes";
import BackgroundBlogCard from "examples/Cards/BlogCards/BackgroundBlogCard";
import Download from "pages/Presentation/sections/Download";
import Info from "examples/Cards/InfoCards/ServiceInfo/Info";
function Incorporation() {



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
          p: { lg: 2 },
          mx: { xs: 0, lg: 3 },
          mt: -8,
          mb: 4,
          boxShadow: ({ boxShadows: { xxl } }) => xxl,
        }}
      >
        <Info
          imageLink="https://camantra.com/wp-content/uploads/2020/09/pexels-negative-space-34092.jpg"
          title="Private Limited Company Incorporation"
          description="Did you know? Starting a private limited company in India takes only up to 7 working days. Isn’t it too quick?"
          price="799"
          redirectUrl="/pages/Services/Incorporation/pcl.js"

        />

        <Container>
          <Grid container spacing={2} alignItems="center">

            <Grid container item xs={12} spacing={2} m={{ xs: 1, lg: 10 }} p={{ xs: 0, lg: 5 }} style={{ boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px" }} >
              <Grid item xs={12} sm={6} md={4} lg={3} px={{ xs: 3, lg: 0 }} mb={{ xs: -7, lg: 0 }}>
                <BackgroundBlogCard
                  image={"https://camantra.com/wp-content/uploads/2020/09/pexels-negative-space-34092.jpg"}
                  title=""
                  description=""
                  action={{}}
                />
              </Grid>
              <Grid item xs={12} sm={6} md={8} lg={5} mb={{ xs: -7 }}>
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
                    route: "/pages/Services/Incorporation/pcl.js",
                    color: "info",
                    label: "read more",
                  }}
                />
              </Grid>
            </Grid>

            <Grid container item xs={12} spacing={2} mx={{ xs: 1, lg: 10 }} mt={{ xs: 1, lg: 0 }} p={{ xs: 0, lg: 5 }} style={{ boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px" }}>
              <Grid item xs={12} sm={6} md={4} lg={3} px={{ xs: 3, lg: 0 }} mb={{ xs: -7, lg: 0 }}>
                <BackgroundBlogCard
                  image={"https://camantra.com/wp-content/uploads/2020/08/pexels-pixabay-327540-1536x1022.jpg"}
                  title=""
                  description=""
                  action={{}}
                />
              </Grid>
              <Grid item xs={12} sm={6} md={8} lg={5} mb={{ xs: -7 }}>
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
                    route: "/pages/Services/Incorporation/OPC.js",
                    color: "info",
                    label: "read more",
                  }}
                />
              </Grid>
            </Grid>



            <Grid container item xs={12} spacing={2} m={{ xs: 1, lg: 10 }} p={{ xs: 0, lg: 5 }} style={{ boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px" }}>
              <Grid item xs={12} sm={6} md={4} lg={3} px={{ xs: 3, lg: 0 }} mb={{ xs: -7, lg: 0 }} >
                <BackgroundBlogCard
                  image={"https://blog.deasra.in/wp-content/uploads/2020/05/LLP-Incorporation-in-Pune.jpg"}
                  title=""
                  description=""
                  action={{}}
                />
              </Grid>
              <Grid item xs={12} sm={6} md={8} lg={5} mb={{ xs: -7 }}>
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
                    route: "/pages/Services/Incorporation/LLPIncorporation.js",
                    color: "info",
                    label: "read more",
                  }}
                />
              </Grid>
            </Grid>


            <Grid container item xs={12} spacing={2} mx={{ xs: 1, lg: 10 }} mt={{ xs: 1, lg: 0 }} p={{ xs: 0, lg: 5 }} style={{ boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px" }}>
              <Grid item xs={12} sm={6} md={4} lg={3} px={{ xs: 3, lg: 0 }} mb={{ xs: -7, lg: 0 }}>
                <BackgroundBlogCard
                  image={"https://img.freepik.com/free-vector/interaction-departments-online-service-platform-business-teamwork-idea-partnership-departments-cooperation-online-collaboration-flat-vector-illustration_613284-2721.jpg?w=740&t=st=1688760805~exp=1688761405~hmac=ab49b84767e99395807cace5043790f1dc778e6985a8a087d2bf8a6f2c6fff63"}
                  title=""
                  description=""
                  action={{}}
                />
              </Grid>
              <Grid item xs={12} sm={6} md={8} lg={5} mb={{ xs: -7 }}>
                <FilledInfoCard title="
                   Partnership Service
                   "
                  description="Incorporate your partnership with ease using our professional incorporation services."
                />
              </Grid>
              <Grid item xs={12} sm={6} md={4} lg={4}>
                <FilledInfoCard title="Starting at ₹749/- only"
                  action={{
                    type: "internal",
                    route: "/pages/Services/Incorporation/PI",
                    color: "info",
                    label: "read more",
                  }}
                />
              </Grid>
            </Grid>


            <Grid container item xs={12} spacing={2} m={{ xs: 1, lg: 10 }} p={{ xs: 0, lg: 5 }} style={{ boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px" }}>
              <Grid item xs={12} sm={6} md={4} lg={3} px={{ xs: 3, lg: 0 }} mb={{ xs: -7, lg: 0 }}>
                <BackgroundBlogCard
                  image={"https://media.gettyimages.com/id/1313471168/photo/kids-shoe-designer-observing-and-choosing-the-sole-of-shoe-so-she-can-start-with-the-next.jpg?s=612x612&w=0&k=20&c=BXReYAVGXNxlnnc2vvHrOLCQ6J1uVvjzNmg80h9-AtQ="}
                  title=""
                  description=""
                  action={{}}
                />
              </Grid>
              <Grid item xs={12} sm={6} md={8} lg={5} mb={{ xs: -7 }}>
                <FilledInfoCard title="
                   Sole Proprietorship 
                   "
                  description="Start your own business with ease using our professional sole proprietorship incorporation services."
                />
              </Grid>
              <Grid item xs={12} sm={6} md={4} lg={4}>
                <FilledInfoCard title="Starting at ₹749/- only"
                  action={{
                    type: "internal",
                    route: "/pages/Services/Incorporation/SP",
                    color: "info",
                    label: "read more",
                  }}
                />
              </Grid>
            </Grid>

            <Grid container item xs={12} spacing={2} m={{ xs: 1, lg: 10 }} p={{ xs: 0, lg: 5 }} style={{ boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px" }}>
              <Grid item xs={12} sm={6} md={4} lg={3} px={{ xs: 3, lg: 0 }} mb={{ xs: -7, lg: 0 }}>
                <BackgroundBlogCard
                  image={"https://blog.saginfotech.com/wp-content/uploads/2019/08/registration-section-8-company.jpg"}
                  title=""
                  description=""
                  action={{}}
                />
              </Grid>
              <Grid item xs={12} sm={6} md={8} lg={5} mb={{ xs: -7 }}>
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
                    route: "/pages/Services/Incorporation/S8",
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

export default Incorporation;
