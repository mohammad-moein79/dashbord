import FaqItem from "@/Components/FaqItem";
import Title from "@/Components/Title/Title";

import { faqPricing } from "@/mock/faq";

type FaqProps = {};

const Faq = ({}: FaqProps) => (
  <div className="py-32 px-15  flex flex-col items-center justify-center 2xl:py-20 2xl:px-10 xl:px-8 dark:bg-n-7/25">
    <div className="max-w-[47.75rem]  w-[90%] mx-auto">
      <Title
        title="Frequently asked questions"
        className=" text-center text-[30px]"
      />

      {faqPricing.map((x) => (
        <FaqItem item={x} key={x.id} />
      ))}
    </div>
  </div>
);

export default Faq;
