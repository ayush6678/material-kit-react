import Inputs from "layouts/sections/input-areas/inputs";
import Forms from "layouts/sections/input-areas/forms";
import Avatars from "layouts/sections/elements/avatars";
import Badges from "layouts/sections/elements/badges";
import BreadcrumbsEl from "layouts/sections/elements/breadcrumbs";
import Buttons from "layouts/sections/elements/buttons";
import Dropdowns from "layouts/sections/elements/dropdowns";
import Typography from "layouts/sections/elements/typography";
import PCL from "pages/Services/Incorporation/PCL";
import OPC from "pages/Services/Incorporation/OPC";
import LLPIncorporation from "pages/Services/Incorporation/LLPI";
import PI from "pages/Services/Incorporation/PI";
import SP from "pages/Services/Incorporation/SP";
import S8 from "pages/Services/Incorporation/S8";
import ACC from "pages/Services/Compliance/PCLI";
import ACCL from "pages/Services/Compliance/ACCL";
import LLP from "pages/Services/Compliance/LLP";
import DPT3 from "pages/Services/Compliance/DPT3";
import CNC from "pages/Services/Compliance/CNC";
import CAC from "pages/Services/Compliance/CAC";
import CADN from "pages/Services/Compliance/CADN";
import MOA from "pages/Services/Compliance/MOA";
import ARD from "pages/Services/Compliance/ARD";
import ARC from "pages/Services/Compliance/ARC";
import TS from "pages/Services/Compliance/TS";
import CC from "pages/Services/Compliance/COC";
import DC from "pages/Services/Compliance/DC";
import CPLLP from "pages/Services/Compliance/CPLLP";
import INC from "pages/Services/Compliance/INC";
import DKYC from "pages/Services/Compliance/DKYC";
import GAS from "pages/Services/Compliance/GST/GAS";
import GSTR from "pages/Services/Compliance/GST/GSTR";
import QRC from "pages/Services/Compliance/GST/QRC";
import ACR from "pages/Services/Compliance/GST/ACR";
import LUT from "pages/Services/Compliance/GST/LUT";
import COA from "pages/Services/Compliance/GST/COA";
import CAN from "pages/Services/Compliance/GST/CAN";
import REVOK from "pages/Services/Compliance/GST/REVOK";
import MQR from "pages/Services/Compliance/GST/MQR";
import ITRSI from "pages/Services/Compliance/ITC/ITRSI";
import RNO from "pages/Services/Compliance/ITC/RNO";
import FTDS from "pages/Services/Compliance/ITC/FTDS";
import ITRIP from "pages/Services/Compliance/ITC/ITRIP";
import ITRLLP from "pages/Services/Compliance/ITC/ITRLLP";
import ITRCGI from "pages/Services/Compliance/ITC/ITRCGI";
import ITRBI from "pages/Services/Compliance/ITC/ITRBI";
import UUMR from "pages/Services/Licensing/UUMR";
import TA from "pages/Services/Licensing/TA";
import SERS from "pages/Services/Licensing/SERS";
import LEI from "pages/Services/Licensing/LEI";
import IEC from "pages/Services/Licensing/IEC";
import GSTR1 from "pages/Services/Licensing/GSTR1";
import FSSAI from "pages/Services/Licensing/FSSAI";
import DSC from "pages/Services/Licensing/DSC";
import DSCC from "pages/Services/Licensing/DSCC";
import DGFT from "pages/Services/Licensing/DGFT";

const routes1 = [
    {
        name: "UUMR",
        route: "pages/Services/Compliance/Licensing/UUMR",
        component: <UUMR />
    },
    {
        name: "TA",
        route: "pages/Services/Compliance/Licensing/TA",
        component: <TA />
    },
    {
        name: "SERS",
        route: "pages/Services/Compliance/Licensing/SERS",
        component: < SERS />
    },
    {
        name: "LEI",
        route: "pages/Services/Compliance/Licensing/LEI",
        component: <LEI />
    },
    {
        name: "IEC",
        route: "pages/Services/Compliance/Licensing/IEC",
        component: <IEC />
    },
    {
        name: "GSTR1",
        route: "pages/Services/Compliance/Licensing/GSTR1",
        component: <GSTR1 />
    },
    {
        name: "FSSAI",
        route: "pages/Services/Compliance/Licensing/FSSAI",
        component: <FSSAI />
    },
    {
        name: "DSC",
        route: "pages/Services/Compliance/Licensing/DSC",
        component: <DSC />
    },
    {
        name: "DSSC",
        route: "pages/Services/Compliance/Licensing/DSSC",
        component: <DSCC />
    },
    {
        name: "DGFT",
        route: "pages/Services/Compliance/Licensing/DGFT",
        component: <DGFT />
    },
    {
        name: "ITRBI",
        route: "pages/Services/Compliance/ITC/ITRBI",
        component: <ITRBI />
    },
    {
        name: "RNO",
        route: "pages/Services/Compliance/ITC/RNO",
        component: <RNO />
    },
    {
        name: "FTDS",
        route: "pages/Services/Compliance/ITC/FTDS",
        component: <FTDS />
    },
    {
        name: "ITRIP",
        route: "pages/Services/Compliance/ITC/ITRIP",
        component: <ITRIP />
    },
    {
        name: "ITRLLP",
        route: "pages/Services/Compliance/ITC/ITRLLP",
        component: <ITRLLP />
    },
    {
        name: "ITRCGI",
        route: "pages/Services/Compliance/ITC/ITRCGI",
        component: <ITRCGI />
    },
    {
        name: "ITRSI",
        route: "pages/Services/Compliance/ITC/ITRSI",
        component: <ITRSI />
    },
    {
        name: "MQR",
        route: "pages/Services/Compliance/GST/MQR",
        component: <MQR />
    },
    {
        name: "REVOK",
        route: "pages/Services/Compliance/GST/REVOK",
        component: <REVOK />
    },
    {
        name: "CAN",
        route: "pages/Services/Compliance/GST/CAN",
        component: <CAN />
    },
    {
        name: "COA",
        route: "pages/Services/Compliance/GST/COA",
        component: <COA />
    },
    {
        name: "LUT",
        route: "pages/Services/Compliance/GST/LUT",
        component: <LUT />
    },
    {
        name: "ARC",
        route: "pages/Services/Compliance/GST/ARC",
        component: <ACR />
    },
    {
        name: "QRC",
        route: "pages/Services/Compliance/GST/QRC",
        component: <QRC />
    },
    {
        name: "GSTR",
        route: "pages/Services/Compliance/GST/GSTR",
        component: <GSTR />
    },
    {
        name: "GAS",
        route: "pages/Services/Compliance/GST/GAS",
        component: <GAS />
    },
    {
        name: "DKYC",
        route: "pages/Services/Compliance/DKYC",
        component: <DKYC />
    },
    {
        name: "INC",
        route: "pages/Services/Compliance/INC",
        component: <INC />
    },
    {
        name: "CPLLP",
        route: "pages/Services/Compliance/CPLLP",
        component: <CPLLP />
    },
    {
        name: "DC",
        route: "pages/Services/Compliance/DC",
        component: <DC />
    },
    {
        name: "COC",
        route: "pages/Services/Compliance/COC",
        component: <CC />
    },
    {
        name: "TS",
        route: "pages/Services/Compliance/TS",
        component: <TS />
    },
    {
        name: "ARC",
        route: "pages/Services/Compliance/ARC",
        component: <ARC />
    },
    {
        name: "ARD",
        route: "pages/Services/Compliance/ARD",
        component: <ARD />
    },
    {
        name: "MOA",
        route: "pages/Services/Compliance/MOA",
        component: <MOA />
    },
    {
        name: "CADN",
        route: "pages/Services/Compliance/CADN",
        component: <CADN />
    },
    {
        name: "CAC",
        route: "pages/Services/Compliance/CAC",
        component: <CAC />
    },
    {
        name: "CNC",
        route: "pages/Services/Compliance/CNC",
        component: <CNC />
    },
    {
        name: "DPT3",
        route: "pages/Services/Compliance/DPT3",
        component: <DPT3 />
    },
    {
        name: "LLP",
        route: "pages/Services/Compliance/LLP",
        component: <LLP />
    },
    {
        name: "ACCL",
        route: "pages/Services/Compliance/ACCL",
        component: <ACCL />
    },

    {
        name: "ACC",
        route: "pages/Services/Compliance/ACC",
        component: <ACC />
    },

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
