import * as React from "react";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
};

export default function ModalC({
  open,
  handleClose,
  children,
}: {
  open: boolean;
  handleClose: React.Dispatch<React.SetStateAction<boolean>>;
  children?: React.ReactNode;
}) {
  return (
    <div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        className="backdrop-blur-sm"
        onClose={handleClose}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 2,
          },
        }}
      >
        <Fade in={open}>
          <Box sx={style} className="md:w-1/2 w-[90%]">
            <div className="bg-white dark:bg-n-6 rounded ">{children}</div>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}
