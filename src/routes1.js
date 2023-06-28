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
