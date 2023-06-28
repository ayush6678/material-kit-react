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
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

// Material Kit 2 React components
import MKBox from "components/MKBox";

// Material Kit 2 React examples
import RotatingCard from "examples/Cards/RotatingCard";
import RotatingCardFront from "examples/Cards/RotatingCard/RotatingCardFront";
import RotatingCardBack from "examples/Cards/RotatingCard/RotatingCardBack";
import DefaultInfoCard from "examples/Cards/InfoCards/DefaultInfoCard";

// Images
// import bgFront from "assets/images/rotating-card-bg-front.jpeg";
// import bgBack from "assets/images/rotating-card-bg-back.jpeg";

function Information() {
  return (
    <MKBox component="section" py={0} my={2}>
      <Container>
        <Grid item  sx={{ mx: "auto" }} display={{ lg: 'none' }} mb={6}>
          <RotatingCard>
            <RotatingCardFront
              // image={bgFront}
              color="success"
              icon="touch_app"
              title={
                <>
                  Book Keeping
                  <br />
                  Service
                </>
              }
                description={<>All the MUI components that you need in a development have been re-design with the new look</>}
            />
            <RotatingCardBack
              // image={bgBack}
              title="Discover More"
              description="You will save a lot of time going from prototyping to full-functional code because all elements are implemented."
              color="success"
              action={{
                type: "internal",
                route: "/sections/page-sections/page-headers",
                label: "start with header",
              }}
            />
          </RotatingCard>
        </Grid>
        <Grid container item xs={11} spacing={3} alignItems="center" sx={{ mx: "auto" }} >
          <Grid item xs={12} lg={4} sx={{ mx: "auto" }} display={{xs:"none",lg:"flex"}}>
            <RotatingCard>
              <RotatingCardFront
                // image={bgFront}
                icon="touch_app"
              color="success"

                title={
                  <>
                    Book Keeping
                    <br />
                    Service
                  </>
                }
                  description={<>All the MUI components that you need in a development have been re-design with the new look</>}
              />
              <RotatingCardBack
                // image={bgBack}
                title="Discover More"
              color="success"

                description="You will save a lot of time going from prototyping to full-functional code because all elements are implemented."
                action={{
                  type: "internal",
                  route: "/sections/page-sections/page-headers",
                  label: "start with header",
                }}
              />
            </RotatingCard>
          </Grid>
          <Grid item xs={12} lg={7} sx={{ ml: "auto" }}>
            <Grid container spacing={3}>
              <Grid item xs={12} md={6}>
                <DefaultInfoCard
                  // icon="content_copy"
                  title="Maximum tax
                  savings"
                  description="Busineses save upto 2-7% of their net GST with us every month. Individuals can save upto ₹86,500 by filing their
                  tax returns through us."
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <DefaultInfoCard
                  // icon="flip_to_front"
                  title="Unparalleled
                  speed"
                  description="
                  Experience 3x faster GST filings, 5x faster invoice reconciliation and 10x faster e-waybill generation. Individuals file their tax returns in under 3 min."
                />
              </Grid>
            </Grid>
            <Grid container spacing={3} sx={{ mt: { xs: 0, md: 6 } }}>
              <Grid item xs={12} md={6}>
                <DefaultInfoCard
                  // icon="price_change"
                  title="Accurate
                  Compliance"
                  description="Our products are designed and tested by in-house tax experts, ensuring every new clause, form or feature is updated and sent to you over the cloud."
                />
              </Grid>
              {/* <Grid item xs={12} md={6}>
                <DefaultInfoCard
                  icon="devices"
                  title="Fully Responsive"
                  description="Regardless of the screen size, the website content will naturally fit the given resolution."
                />
              </Grid> */}
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default Information;
