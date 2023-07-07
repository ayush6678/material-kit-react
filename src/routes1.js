import Inputs from "layouts/sections/input-areas/inputs";
import Forms from "layouts/sections/input-areas/forms";
// import Alerts from "layouts/sections/attention-catchers/alerts";
// import Modals from "layouts/sections/attention-catchers/modals";
// import TooltipsPopovers from "layouts/sections/attention-catchers/tooltips-popovers";
import Avatars from "layouts/sections/elements/avatars";
import Badges from "layouts/sections/elements/badges";
import BreadcrumbsEl from "layouts/sections/elements/breadcrumbs";
import Buttons from "layouts/sections/elements/buttons";
import Dropdowns from "layouts/sections/elements/dropdowns";
// import ProgressBars from "layouts/sections/elements/progress-bars";
// import Toggles from "layouts/sections/elements/toggles";
import Typography from "layouts/sections/elements/typography";
import PCL from "pages/Services/Incorporation/PCL";
import OPC from "pages/Services/Incorporation/OPC";
import LLPIncorporation from "pages/Services/Incorporation/LLPI";
import PI from "pages/Services/Incorporation/PI";
import SP from "pages/Services/Incorporation/SP";
import S8 from "pages/Services/Incorporation/S8";
const routes1 = [
    {
        name: "inputs",
        route: "/sections/input-areas/inputs",
        component: <Inputs />,
    },
    {
        name: "forms",
        route: "/sections/input-areas/forms",
        component: <Forms />,
    },
    {
        name: "avatars",
        route: "/sections/elements/avatars",
        component: <Avatars />,
    },
    {
        name: "badges",
        route: "/sections/elements/badges",
        component: <Badges />,
    },
    {
        name: "breadcrumbs",
        route: "/sections/elements/breadcrumbs",
        component: <BreadcrumbsEl />,
    },
    {
        name: "buttons",
        route: "/sections/elements/buttons",
        component: <Buttons />,
    },
    {
        name: "dropdowns",
        route: "/sections/elements/dropdowns",
        component: <Dropdowns />,
    },
    {
        name: "PCL",
        route: "/pages/Services/Incorporation/PCL.js",
        component: <PCL />,
    },
    {
        name: "OPC",
        route: "/pages/Services/Incorporation/OPC.js",
        component: <OPC />,
    },
    {
        name: "LLPIncorporation",
        route: "/pages/Services/Incorporation/LLPIncorporation.js",
        component: <LLPIncorporation />,
    },
    {
        name: "PI",
        route: "pages/Services/Incorporation/PI",
        component: <PI />
    },
    {
        name: "SP",
        route: "pages/Services/Incorporation/SP",
        component: <SP />
    },
    {
        name: "S8",
        route: "pages/Services/Incorporation/S8",
        component: <S8 />
    },
    // {
    //     name: "progress bars",
    //     route: "/sections/elements/progress-bars",
    //     component: <ProgressBars />,
    // },
    // {
    //     name: "toggles",
    //     route: "/sections/elements/toggles",
    //     component: <Toggles />,
    // },
    {
        name: "typography",
        route: "/sections/elements/typography",
        component: <Typography />,
    },
]


export default routes1;
