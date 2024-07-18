import { useRef, useState } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import toast from "react-hot-toast";

import Field from "../Field/index";
import MultiSelect from "../MultiSelect";
import Notify from "../Notify/Notify";

import { people } from "@/mock/people";
import Modal from "../Modals/Modal";

type ModalShareChatProps = {
  visible: boolean;
  onClose: () => void;
};

const ModalShareChat = ({ visible, onClose }: ModalShareChatProps) => {
  const [link, setLink] = useState<string>(
    "https://ui8.net/ui8/products/brainwave-ai-ui-design-kit"
  );
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [copied, setCopied] = useState<boolean>(false);
  let copyButtonRef = useRef(null);

  const onCopy = () => {
    setCopied(true);

    toast.custom((t) => (
      <Notify iconCheck>
        <div className="ml-3 h6">Link copied</div>
      </Notify>
    ));
  };

  return (
    <Modal
      haveHeader={true}
      className="p-12 md:p-18"
      classWrap="md:w-[40%] w-full  "
      title="Share this chat"
      isOpen={visible}
      onclose={onClose}
    >
      <form
        className="bg-transparent"
        action=""
        onSubmit={() => console.log("Submit")}
      >
        <div className="mb-4 base2 font-semibold text-n-6 dark:text-n-3">
          Copy link
        </div>
        <div className="relative mb-8">
          <Field
            classInput="h-14 pr-[6.25rem] bg-n-2 truncate text-[1rem] text-n-4 border-transparent focus:bg-n-2 font-medium"
            placeholder="Link"
            value={link}
            onChange={(e: any) => setLink(e.target.value)}
            required
          />
          <CopyToClipboard text={link} onCopy={onCopy}>
            <button
              ref={copyButtonRef}
              className="btn dark:bg-white font-medium px-6 dark:text-n-6 bg-n-7 hover:bg-n-6 p-2  text-n-3 absolute top-[50%] translate-y-[-50%] right-1"
              type="button"
            >
              Copy
            </button>
          </CopyToClipboard>
        </div>
        <div className="mb-4 base2 font-semibold text-n-6 dark:text-n-3">
          Or share to members
        </div>
        <MultiSelect
          className="mb-8  "
          items={people}
          selectedOptions={selectedOptions}
          setSelectedOptions={setSelectedOptions}
        />
        <div className="flex justify-end gap-3">
          <button className="btn-stroke-light " onClick={onClose}>
            Cancel
          </button>
          <button className="btn-blue">Share</button>
        </div>
      </form>
    </Modal>
  );
};

export default ModalShareChat;
