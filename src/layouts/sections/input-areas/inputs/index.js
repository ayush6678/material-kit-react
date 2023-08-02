
import MKBox from "components/MKBox";
// import CenteredBlogCard from "examples/Cards/BlogCards/CenteredBlogCard";
// Sections components
// import BaseLayout from "layouts/sections/components/BaseLayout";
import DefaultNavbar from "examples/Navbars/DefaultNavbar";
import routes from "routes";
import Card from "@mui/material/Card";
import MKTypography from "components/MKTypography";
import DefaultFooter from "examples/Footers/DefaultFooter";
import footerRoutes from "footer.routes";
// import BackgroundBlogCard from "examples/Cards/BlogCards/BackgroundBlogCard";
import Info from "examples/Cards/InfoCards/ServiceInfo/Info";
function Inputs() {
  return (
    <>

      <DefaultNavbar
        routes={routes}
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
          mt={{ xs: 0 }}
          m={{ xs: 4, lg: 15 }}
          mb={{ xs: 14 }}
          textAlign="center"
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
          mx: { xs: 0, lg: 3 },
          mt: -8,
          mb: 4,
          boxShadow: ({ boxShadows: { xxl } }) => xxl,
        }}
      >
        <Info
          imageLink=""
          title="Annual Company Compliance (Comprehensive)"
          description="Includes RoC services for all year curated for all small and medium-sized companies. Key inclusions:
                  
          Issuance of share certificates
          Filing of business commencement form (INC-20A)
          Annual returns filing (AOC-4 and MGT-7)
          Preparation of statutory registers
          Preparation of minute books and copies of resolutions
          Filing of auditor appointment (ADT-1)
          Filing of Director KYC (DIR-3 KYC)"
          price="799"
          redirectUrl="/pages/Services/Compliance/ACC"
        />
        <Info
          imageLink=""
          title="Annual Company Compliance (Lite)"
          description="Includes RoC compliances only for which essential filings are required. Inclusions:
          Annual returns filing (AOC-4 and MGT-7)
          Filing of auditor appointment (ADT-1)
          Filing of Director KYC (DIR-3 KYC)"
          price="799"
          redirectUrl="/pages/Services/Compliance/ACCL"
        />

        <Info
          imageLink=""
          title="Annual LLP Compliance"
          description="Includes RoC compliances for any LLP. Inclusions:
                  
          Annual returns filing (Form-8 and Form-11)
          Filing of Director KYC (DIR-3 KYC)"
          price="799"
          redirectUrl="/pages/Services/Compliance/LLP"
        />

        <Info
          imageLink=""
          title="DPT-3 Service"
          description="Ensure seamless compliance with DPT-3 filing requirements using our expert services. Stay updated on DPT-3 due dates and avoid penalties with our efficient filing assistance."
          price="799"
          redirectUrl="/pages/Services/Compliance/DPT3"
        />
        <Info
          imageLink=""
          title="Changing Name of your Company/ LLP"
          description="Want to change your company’s name to better position your brand? It now takes only up to 5 working days to complete the process.
          Name approval application (RUN)
          Preparation of necessary documents and completing compliances as per Secretarial standards.
          Filing of INC24 and MGT14 forms / Form-3 and Form-5 with MCA
          Applying for new PAN and TAN
          Issue of new Certificate of Incorporation"
          price="799"
          redirectUrl="/pages/Services/Compliance/CNC"
        />
        <Info
          imageLink=""
          title="Changing Address of your Company/ LLP (within same State)"
          description="Shifting your workplace, need assistance with updation of MCA records? Now takes only up to 5 working days to complete the process.
          Preparation of necessary documents and completing compliances as per Secretarial standards.
          Filing of INC-22 and MGT-14/ Form-15 forms with MCA"
          price="799"
          redirectUrl="/pages/Services/Compliance/CAC"
        />
        <Info
          imageLink=""
          title="Changing Address of your Company/ LLP (another State/ RoC)"
          description="Shifting your workplace, need assistance with updation of MCA records? Now takes only up to 30 working days to complete the process.
          Preparation of necessary documents and completing compliances as per Secretarial standards.
          Filing of INC-23 and MGT-14/ Form-15 forms with MCA"
          price="799"
          redirectUrl="/pages/Services/Compliance/CADN"
        />
        <Info
          imageLink=""
          title="Change in Objects (MOA)"
          description="Are you starting another line of business, or changing your current line of business? You know that you need to change your present MoA. Key inclusions:
          Drafting of revised MOA
          Preparation of necessary documents and completing compliances as per Secretarial standards
          Filing of MGT-14 form with MCA
          Obtaining alteration Certificate from ROC"
          price="799"
          redirectUrl="/pages/Services/Compliance/MOA"
        />
        <Info
          imageLink=""
          title="Appointment/ Resignation of Director"
          description="Are you adding another director to manage the operations of the Company or one director has to resign? Both can happen with a one day process. Key inclusions:
          Preparation of necessary documents and completing compliances as per Secretarial standards
          Attaining new DIN through DIR 3 form
          Filing of DIR-11/ DIR-12 form with MCA"
          price="799"
          redirectUrl="/pages/Services/Compliance/ARD"
        />
        <Info
          imageLink=""
          title="Alteration of Share Capital"
          description="If the size of your company has grown and now planning to pump in more funds and thus require a change in share capital? Key inclusions:
          Preparation of necessary documents and completing compliances as per Secretarial standards
          Drafting the revised MOA
          Filing of SH-7 and MGT-14 forms with MCA
          Filing of PAS-3 for allotment of shares"
          price="799"
          redirectUrl="/pages/Services/Compliance/ARC"
        />

        <Info
          imageLink=""
          title="Transfer of Shares"
          description="If you’re looking to transfer your equity shares and bring in new partners in the business, here’s how we will assist you:
          Preparation of necessary documents and completing compliances as per Secretarial standards
          Preparation of SH-4 form
          Preparation of Share transfer deed
          Issuance of new share certificates"
          price="799"
          redirectUrl="/pages/Services/Compliance/TS"
        />
        <Info
          imageLink=""
          title="Closure of Company (Under Fast Track Exit)"
          description="If your Company has been incorporated atleast a year ago or it has been inoperational for more than a year and you’re no longer looking to run the Company. MCA has provided a Fast Track Exit mode to such businesses and here’s how we will assist you:
          Preparation of necessary documents and completing compliances as per Secretarial standards
          Filing of MGT-14 and STK-2 Form"
          price="799"
          redirectUrl="/pages/Services/Compliance/COC"
        />
        <Info
          imageLink=""
          title="Dormant Company (Applying for Inactive status)"
          description="If your Company has been inoperational since two years ago or it has been inoperational since it’s incoporation and you might want to restart business at a later point then you can apply for inactive status which remains for 5 years. Here’s how we will assist you:
          Preparation of necessary documents and completing compliances as per Secretarial standards
          Filing of MGT-14 and MSC-1 Form"
          price="799"
          redirectUrl="/pages/Services/Compliance/DC"
        />
        <Info
          imageLink=""
          title="Change in Partners of LLP"
          description="If you’re looking to transfer your equity shares and bring in new partners in the business, here’s how we will assist you:
          Preparation of necessary documents and completing compliances as per Secretarial standards
          Preparation of new LLP deed
          Attaining new DIN through DIR 3 form
          Filing of Form-3 and Form-4 with MCA"
          price="799"
          redirectUrl="/pages/Services/Compliance/CPLLP"
        />
        <Info
          imageLink=""
          title="INC-20A (Business Commencement form)"
          description="Every Company has to mandatorily file Form INC-20A within 180 days of the Incorporation of a Company.
          Also you need an active current bank account in the name of the Company and the shareholders must have transferred their respective paid up capital to the Company.
          Failing to file INC-20A may result in hefty penalties. So file soon!"
          price="799"
          redirectUrl="/pages/Services/Compliance/INC"
        />
        <Info
          imageLink=""
          title="Director KYC (DIR3 KYC)"
          description="Directors of a Company/ LLP are required to furnish their KYC annually between 1st April and 30th September. Non-filing of such form in time may result in a penalty of Rs.5,000/-"
          price="799"
          redirectUrl="/pages/Services/Compliance/DKYC"
        />
        {/* <Info
          imageLink=""
          title=""
          description=""
          price="799"
          redirectUrl=""
        /> */}

      </Card >
      <MKBox pt={6} px={1} mt={6}>
        <DefaultFooter content={footerRoutes} />
      </MKBox>
    </>
  );
}

export default Inputs;
