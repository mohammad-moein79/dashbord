import Layout from "@/Components/Layout/Layout";
import UpdatesAndFaq from "@/templates/updates-and-faq";
import React from "react";

function page() {
  return (
    <Layout hiddenLeftBar clasName="md:rounded-lg">
      <UpdatesAndFaq />
    </Layout>
  );
}

export default page;
