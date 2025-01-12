import Layout from "@/Components/Layout/Layout";
import Home from "@/templates/Home/Home";
import React from "react";

function page() {
  return (
    <Layout
      hiddenLeftBar={false}
      className="md:rounded-tl-[18px] md:rounded-bl-[18px]"
    >
      <Home></Home>
    </Layout>
  );
}

export default page;
