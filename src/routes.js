import Icon from "@mui/material/Icon";

// @mui icons

import ContactUs from "pages/About_Us/ContactUs";
// import Author from "layouts/pages/landing-pages/author";
// import SignIn from "layouts/pages/authentication/sign-in";

// Sections

import Licensing1 from "pages/Services/Licensing/Licensing1";
import Incorporation from "pages/Services/Incorporation/Incorporation";
import Complaince from "pages/Services/Compliance/Compliance";

import Payroll from "pages/OtherServices/Payroll";
import VirtualCFO from "pages/OtherServices/VirtualCFO";
import BookKeeping from "pages/OtherServices/BookKeeping";
// import Typography from "layouts/sections/elements/typography";

const routes = [
  {
    name: "Services",
    icon: <Icon>view_day</Icon>,
    collapse: [
      {
        name: "Incorporation Services",
        route: "/pages/Services/Incorporation/Incorporation",
        component: <Incorporation />,
      },
      {
        name: "Complaince Services",
        route: "/pages/Services/Compliance/Compliance",
        component: <Complaince />,
      },
      {
        name: "Licensing Services",
        route: "/pages/Services/Licensing/Licensing",
        component: <Licensing1 />,
      },
    ],
  },
  {
    name: "Contact Us",
    icon: <Icon>dashboard</Icon>,
    route: "/pages/landing-pages/contact-us",
    component: <ContactUs />,
    // collapse: [
    //   {
    //     name: "about us",
    //     route: "/pages/landing-pages/about-us",
    //     component: <AboutUs />,
    //   },
    //   {
    //     name: "contact us",
    //     route: "/pages/landing-pages/contact-us",
    //   },
    // ],
  },

  {
    name: "Other Services",
    icon: <Icon>article</Icon>,
    collapse: [
      {
        name: "Book Keeping Services",
        route: "/pages/OtherServices/BookKeeping",
        component: <BookKeeping />,
      },
      {
        name: "Payroll Management",
        route: "/pages/OtherServices/Payroll",
        component: <Payroll />,
      },
      {
        name: "VIrtual CFO Services",
        route: "/pages/OtherServices/VirtualCFO",
        component: <VirtualCFO />,
      },
    ],
  },
  // {
  //   name: "github",
  //   icon: <GitHubIcon />,
  //   href: "https://www.github.com/creativetimofficial/material-kit-react",
  // },
];
export default routes;
