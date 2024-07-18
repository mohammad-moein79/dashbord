import Layout from "@/Components/Layout/Layout";
import Main from "./Main";
import Faq from "./Faq";
import Heading from "@/Components/Heading/Heading";

const Pricing = () => {
  return (
    <Layout hiddenLeftBar className="md:rounded-lg  rounded-none">
      <Heading className="p-2" />
      <Main />
      <Faq />
    </Layout>
  );
};

export default Pricing;
