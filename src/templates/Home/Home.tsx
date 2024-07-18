import Text from "@/Components/Text/Text";
import Title from "@/Components/Title/Title";
import ChatBox from "@/Components/chatBox";
import Menu from "@/Components/chatBox/Menu/Menu";
import { navigation } from "@/Constans/navigation";
import React from "react";

function Home() {
  return (
    <ChatBox>
      <>
        <div className="p-2">
          <Title
            title="Unlock the power of AI"
            className="text-[40px] mb-3  text-center"
          ></Title>
          <Text
            text="Chat with the smartest AI - Experience the power of AI with us"
            className="text-[22px] text-center"
          />
        </div>
        <Menu
          className=" w-full mt-8 p-3 flex flex-col items-center justify-center mx-auto"
          items={navigation}
        />
      </>
    </ChatBox>
  );
}

export default Home;
