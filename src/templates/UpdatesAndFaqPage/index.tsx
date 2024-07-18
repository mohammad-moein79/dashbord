"use client";
import { Tab } from "@headlessui/react";
import Layout from "@/Components/Layout/Layout";
import Icon from "@/Components/Icon/Icon";
import Updates from "./Updates";
import Faq from "./Faq";

import { updates } from "@/mock/updates";
import { faqs } from "@/mock/faq";
import Heading from "@/Components/Heading/Heading";

const tanNavigation = ["Updates", "FAQ"];

const UpdatesAndFaqPage = () => {
  return (
    <Layout hiddenLeftBar className="md:rounded-lg rounded-none">
      <div className="p-2 ">
        <div className="md:hidden block">
          <Heading />
        </div>
        <div className="max-w-[58.5rem] 2xl:px-10 md:pt-6 p-12 md:px-6 md:pb-10 mt-0 md:mt-12 mx-auto">
          <div className="mb-4 h2 md:pr-16 md:h3">Updates & FAQ</div>
          <div className="mb-12 body1 text-n-4 md:mb-6">
            Features, fixes & improvements.
          </div>
          <Tab.Group defaultIndex={0}>
            <Tab.List className="mb-12 md:mb-6 space-x-3">
              {tanNavigation.map((button, index) => (
                <Tab
                  className="h-10 px-6 rounded-full base1 text-n-4 transition-colors outline-none tap-highlight-color hover:text-n-7 data-[selected]:bg-primary-1 data-[selected]:!text-n-1 dark:hover:text-n-1"
                  key={index}
                >
                  {button}
                </Tab>
              ))}
            </Tab.List>
            <Tab.Panels>
              <Tab.Panel>
                <Updates items={updates} />
              </Tab.Panel>
              <Tab.Panel>
                <Faq items={faqs} />
              </Tab.Panel>
            </Tab.Panels>
          </Tab.Group>
        </div>
      </div>
    </Layout>
  );
};

export default UpdatesAndFaqPage;
