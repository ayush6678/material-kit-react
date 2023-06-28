// @mui icons
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
// import GitHubIcon from "@mui/icons-material/GitHub";
import YouTubeIcon from "@mui/icons-material/YouTube";

// Material Kit 2 React components
import MKTypography from "components/MKTypography";

// Images
// import logoCT from "assets/images/logo-ct-dark.png";
import image from "assets/images/AccountWale.png";

const date = new Date().getFullYear();

const v1 = {
  brand: {
    name: "AccountWale",
    image: image,
    route: "/",
  },
  socials: [
    {
      icon: <FacebookIcon />,
      link: "https://www.facebook.com/CreativeTim/",
    },
    {
      icon: <TwitterIcon />,
      link: "https://twitter.com/creativetim",
    },
    {
      icon: <YouTubeIcon />,
      link: "https://www.youtube.com/channel/UCVyTG4sCw-rOvB9oHkzZD1w",
    },
  ],
  menus: [
    {
      name: "Income Tax",
      items: [
        { name: "E-payment of Taxes", href: "https://www.creative-tim.com/presentation" },
        { name: "Income Tax Assessee Login", href: "https://www.creative-tim.com/templates/free" },
        { name: "Verify PAN (from Name & DOB)", href: "https://www.creative-tim.com/templates/premium" },
        { name: "Status of Tax Refund", href: "https://www.creative-tim.com/blog" },
        { name: "ITR-V Receipt Status", href: "https://www.creative-tim.com/presentation" },
        { name: "Know Your AO", href: "https://www.creative-tim.com/templates/free" },
        { name: "Online New PAN Application/ Correction of PAN", href: "https://www.creative-tim.com/templates/premium" },
        { name: "TAN Login", href: "https://www.creative-tim.com/blog" },
        { name: "OLTAS Challan Status", href: "https://www.creative-tim.com/presentation" },
        { name: "Verify Form 16A", href: "https://www.creative-tim.com/templates/free" },
        { name: "Verify Form 16", href: "https://www.creative-tim.com/templates/premium" },
        { name: "Know TAN", href: "https://www.creative-tim.com/blog" },
        { name: "Online TAN Application", href: "https://www.creative-tim.com/presentation" },
        { name: "Online TAN Correction", href: "https://www.creative-tim.com/templates/free" },
      ],
    },
    {
      name: "GST",
      items: [
        { name: "Registration", href: "https://iradesign.io/" },
        { name: "Payments", href: "https://www.creative-tim.com/bits" },
        { name: "User Services", href: "https://www.creative-tim.com/affiliates/new" },
        { name: "e-Way Bill System", href: "https://www.creative-tim.com/bits" },
        { name: "Refunds", href: "https://www.creative-tim.com/bits" },
        { name: "Payments", href: "https://www.creative-tim.com/bits" },
        { name: "Track Application Status", href: "https://www.creative-tim.com/bits" },
      
      ],
    },
    {
      name: "Quick Links",
      items: [
        { name: "Indian Courts", href: "https://www.creative-tim.com/contact-us" },
        { name: "Download Aadhaar", href: "https://www.creative-tim.com/knowledge-center" },
        { name: "File online RTI Application", href: "https://services.creative-tim.com/" },
        { name: "E-filing of Copyright Apllication", href: "https://www.creative-tim.com/sponsorships" },
      ],
    },
    {
      name: "Others",
      items: [
        { name: "ICSI", href: "https://www.creative-tim.com/terms" },
        { name: "ICAI", href: "https://www.creative-tim.com/privacy" },
        { name: "ICWAI", href: "https://www.creative-tim.com/license" },
        { name: "Property Registration", href: "https://www.creative-tim.com/license" },
        { name: "Provident Fund", href: "https://www.creative-tim.com/license" },

      ],
    },
  ],
  copyright: (
    <MKTypography variant="button" fontWeight="regular">
      All rights reserved. Copyright &copy; {date} AccountWale
      <MKTypography
        component="a"
        href="https://www.creative-tim.com"
        target="_blank"
        rel="noreferrer"
        variant="button"
        fontWeight="regular"
      >

      </MKTypography>
      .
    </MKTypography>
  ),
};
export default v1