import { useState } from "react";
import Icon from "../Icon/Icon";
import ModalC from "../Modals/Modal";
import ContentModalUpload from "./Content/Content";

type AddFileProps = {};

const AddFile = ({}: AddFileProps) => {
  const [visible, setVisible] = useState<boolean>(false);
  return (
    <>
      <button
        type="button"
        className="group   w-10 h-10 outline-none"
        onClick={() => setVisible(true)}
      >
        <Icon
          className="w-7 h-7 fill-[#7F8689] transition-colors group-hover:fill-primary-1 dark:fill-n-4"
          name="plus-circle"
        />
      </button>
      <ModalC
        classWrap="p-0 w-[90%]"
        isOpen={visible}
        onclose={() => setVisible(false)}
      >
        <ContentModalUpload />
      </ModalC>
    </>
  );
};

export default AddFile;
