
import MKBox from "components/MKBox";
import FilledInfoCard from "examples/Cards/InfoCards/FilledInfoCard";
// Sections components
import BaseLayout from "layouts/sections/components/BaseLayout";


function NavTabs() {
  return (
    <BaseLayout
      title="Compliance Services"
      breadcrumb={[
        { label: "Services", route: "/sections/navigation/navtabs" },
        { label: "Compliance Services" },
      ]}
    >

      <MKBox py={6}>
        <FilledInfoCard

          color="info"
          title="ROC compliance services"
          description="If you operate a Company/ LLP, you will be required to perform certain compliances depending upon the scenarios, which will include:

          Filing of Mandatory Company Annual Returns (AOC4 and MGT7)
          Filing of Mandatory LLP Annual Return (Form 8 and Form 11)
          Filing of DIR-3 KYC for Directors
          Changing Company Name or Address
          Appointment/ Resignation of Director
          Change in Share Capital or Change in Shareholding
          Changes in Memorandum of Association
          Other applicable compliances"
          action={{
            type: "external",
            route: "/sections/input-areas/forms",
            label: "Know More",
          }}
        />
      </MKBox>

      <MKBox py={6}>
        <FilledInfoCard

          color="info"
          title="GST compliance services"
          description="Under GST, we provide the following services:

          Filing of monthly/quarterly returns (GSTR-1 and GSTR-3B)
          Filing of quarterly composition scheme returns (GSTR-4)
          Filing of annual consolidated return (GSTR-9)
          Filing of Letter of undertaking (LUT) for export of goods without payment of IGST
          Amendment in registration (change in contact details/ authorised signatory/ address)
          Filing of application for cancellation of GST"
          action={{
            type: "external",
            route: "/sections/input-areas/forms",
            label: "Know More",
          }}
        />
      </MKBox>
      
      <MKBox py={6}>
        <FilledInfoCard

          color="info"
          title="Income Tax compliance services"
          description="Filing of Income Tax Return and TDS Returns including the following:

          Income tax filing for Salaried
          Income tax filing for Business owners/ Companies/ LLPs
          Income tax filing for securities traders
          Income tax for income from Capital Gain
          TDS return filing for TDS on Salaries
          TDS return filing for TDS on Other than Salaries
          TCS returns
          Advance tax calculations and payments"
          action={{
            type: "external",
            route: "/sections/input-areas/forms",
            label: "Know More",
          }}
        />
      </MKBox>
      
      
    </BaseLayout>
  );
}

export default NavTabs;
