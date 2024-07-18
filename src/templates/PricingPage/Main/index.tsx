"use client";
import { useState } from "react";
import Radio from "@/Components/Radio";
import Package from "./Package";
import Features from "./Features";
import { pricemock, featuresPricemock } from "@/mock/price";
import Title from "@/Components/Title/Title";
import Text from "@/Components/Text/Text";
type MainProps = {};

const Main = ({}: MainProps) => {
  const [plan, setPlan] = useState(false);

  return (
    <div className="py-12  w-full gap-8  flex-col items-start flex justify-center px-15   2xl:py-20 2xl:px-10 xl:px-8 rounded-none ">
      <div className="w-full flex flex-col gap-3 text-center items-center">
        <Title title="AI chat made affordable" className="text-[38px]" />
        <Text text="Pricing Plans for every budget" className="text-[24px]" />
      </div>
      <div className="w-full flex flex-col gap-3 text-center items-center">
        <Title title="Choose plan" className="text-[18px] font-bold" />
        <div className="flex gap-5">
          <Radio
            className="mb-4 2xl:mb-0 2xl:mr-4"
            name="plan"
            value={plan}
            onChange={() => setPlan(true)}
            content="Yearly billing"
          />
          <Radio
            name="plan"
            value={!plan}
            onChange={() => setPlan(false)}
            content="Monthly billing"
          />
        </div>
        <div className="flex gap-10 md:gap-2 flex-col md:flex-row mt-5 ">
          {pricemock.map((x) => (
            <Package item={x} plan={plan} key={x.id} />
          ))}
        </div>
      </div>
      <div className="w-full hidden md:flex justify-center mt-8">
        <Features items={featuresPricemock} />
      </div>
    </div>
  );
};

export default Main;
