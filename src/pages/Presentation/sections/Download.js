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
import Tooltip from "@mui/material/Tooltip";

// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKButton from "components/MKButton";
import MKTypography from "components/MKTypography";
import RotatingCard from "examples/Cards/RotatingCard";
import RotatingCardFront from "examples/Cards/RotatingCard/RotatingCardFront";
import RotatingCardBack from "examples/Cards/RotatingCard/RotatingCardBack";
// Images
import bgImage from "assets/images/shapes/waves-white.svg";

function Download() {
  return (
    <MKBox component="section" py={6} my={6}>
      <Container>
        <Grid container item xs={11} spacing={3} alignItems="center" sx={{ mx: "auto" }}>
          <Grid item xs={12} lg={4} sx={{ mx: "auto" }}>
            <RotatingCard>
              <RotatingCardFront
                // image={bgFront}
                color="success"
                icon="touch_app"
                title={
                  <>
                    What does it means to be Compliant?
                    <br />
                    <br />

                    <br />

                  </>
                }
              // description="All the MUI components that you need in a development have been re-design with the new look."
              />
              <RotatingCardBack
                // image={bgBack}
                title="Discover More"
                description="Being up to date with all regulatory and legal requirements applicable to your organization.

                In our experience, most entrepreneurs are not aware of all applicable requirements which later results in hefty Govt. penalties. Thus, it is advisable to work with trusted and committed Consultants.  "
              // action={{
              //   type: "internal",
              //   route: "/sections/page-sections/page-headers",
              //   label: "start with header",
              // }}
              />
            </RotatingCard>
          </Grid>


          <Grid item xs={12} lg={4} sx={{ mx: "auto" }}>
            <RotatingCard>
              <RotatingCardFront
                // image={bgFront}
                color="success"
                icon="touch_app"
                title={
                  <>
                    How can AccountWale simplify my bookkeeping process?
                  </>
                }
              // description="All the MUI components that you need in a development have been re-design with the new look."
              />
              <RotatingCardBack
                // image={bgBack}
                title="Discover More"
                description="Say goodbye to spreadsheets and endless paperwork! AccountWale offers a user-friendly online platform that automates your bookkeeping tasks. Simply connect your bank accounts and let our technology categorize transactions, generate financial reports, and keep you organized."
              // action={{
              //   type: "internal",
              //   route: "/sections/page-sections/page-headers",
              //   label: "start with header",
              // }}
              />
            </RotatingCard>
          </Grid>


          <Grid item xs={12} lg={4} sx={{ mx: "auto" }}>
            <RotatingCard>
              <RotatingCardFront
                // image={bgFront}
                color="success"
                icon="touch_app"
                title={
                  <>
                    Why should I choose AccountWale over other accounting services?
                  </>
                }

              />
              <RotatingCardBack
                // image={bgBack}
                title="Discover More"
                description="At AccountWale, we're not just number crunchers. We're financial superheroes! Our team of experts goes above and beyond to save your time, money, and sanity. With our personalized approach and cutting-edge technology, we make accounting effortless and empowering."
              // action={{
              //   type: "internal",
              //   route: "/sections/page-sections/page-headers",
              //   label: "start with header",
              // }}
              />
            </RotatingCard>
          </Grid>
          <Grid item xs={12} lg={4} sx={{ mx: "auto" }}>
            <RotatingCard>
              <RotatingCardFront
                // image={bgFront}
                color="success"
                icon="touch_app"
                title={
                  <>
                    Why should I choose AccountWale over other accounting services?
                  </>
                }

              />
              <RotatingCardBack
                // image={bgBack}
                title="Discover More"
                description="At AccountWale, we're not just number crunchers. We're financial superheroes! Our team of experts goes above and beyond to save your time, money, and sanity. With our personalized approach and cutting-edge technology, we make accounting effortless and empowering."
              // action={{
              //   type: "internal",
              //   route: "/sections/page-sections/page-headers",
              //   label: "start with header",
              // }}
              />
            </RotatingCard>
          </Grid>
        </Grid >
      </Container>
    </MKBox >
  );
}

export default Download;
