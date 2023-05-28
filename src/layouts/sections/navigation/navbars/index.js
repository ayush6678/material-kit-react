
import MKBox from "components/MKBox";
import FilledInfoCard from "examples/Cards/InfoCards/FilledInfoCard";
// Sections components
import BaseLayout from "layouts/sections/components/BaseLayout";


function Navbars() {
  return (
    <BaseLayout
      title="Incorporation Services"
      breadcrumb={[
        { label: "Services", route: "/sections/navigation/navbars" },
        { label: "Incorporation Services" },
      ]}
    >

      <MKBox py={6}>
        <FilledInfoCard

          color="info"
          title="Private Limited Company Incorporation"
          description="Did you know?? Starting a private limited company in India takes only up to 7 working days. Isn't it too quick??"
          action={{
            type: "external",
            route: "https://www.creative-tim.com/learning-lab/react/overview/material-kit/",
            label: "Know More",
          }}
        />
      </MKBox>
      <MKBox py={6}>
        <FilledInfoCard

          color="info"
          title="One Person Company Incorporation"
          description="Do you like to go-solo? and still need a corporate outlook, OPC seems to be the right fit for you!!"
          action={{
            type: "external",
            route: "https://www.creative-tim.com/learning-lab/react/overview/material-kit/",
            label: "Know More",
          }}
        />
      </MKBox>
      <MKBox py={6}>
        <FilledInfoCard

          color="info"
          title="Limited Liability Partnership Incorporation"
          description="If you have partners with fixed contribution ratio, profit sharing ratio and don’t wish to get into the hassles of compliances, forming an LLP just sounds right to us"
          action={{
            type: "external",
            route: "https://www.creative-tim.com/learning-lab/react/overview/material-kit/",
            label: "Know More",
          }}
        />
      </MKBox>
      <MKBox py={6}>
        <FilledInfoCard

          color="info"
          title="Section 8 or NGO Incorporation"
          description="If you’re looking to operate a Company which does welfare for masses, promotes commerce, arts, science, sports, education, research, social welfare, religion, charity, protection of environment or any such other object. AND you do not to wish to earn profit and will use any profits earned during for attaining the objects for which NGO was formed"
          action={{
            type: "external",
            route: "https://www.creative-tim.com/learning-lab/react/overview/material-kit/",
            label: "Know More",
          }}
        />
      </MKBox>
    </BaseLayout>
  );
}

export default Navbars;
