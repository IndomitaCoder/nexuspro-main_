import React from 'react';
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter
} from '@material-tailwind/react';

export function DialogCustom({ isOpen, header, body, footer, setOpen }) {
  const handleOpen = () => setOpen(!isOpen);

  return (
    <>
      <Dialog
        open={isOpen}
        handler={handleOpen}
        animate={{
          mount: { scale: 1, y: 0 },
          unmount: { scale: 0.9, y: -100 }
        }}
        size="sm"
        className="shadow-none"
      >
        <DialogHeader className="relative flex items-center justify-center text-center text-white bg-blue-600 rounded-t-lg shadow-lg">
          {header}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="#1c79c4"
            onClick={handleOpen}
            className="absolute w-6 h-6 text-white transition-all bg-white rounded-full cursor-pointer top-2 right-2 hover:rotate-90"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18 18 6M6 6l12 12"
            />
          </svg>
        </DialogHeader>
        <DialogBody className="overflow-y-auto xl:max-h-[500px] max-h-[300px] w-full">
          {body}
        </DialogBody>
        {/* <DialogFooter>
          <Button variant="gradient" color="green" onClick={handleOpen}>
            <span>Confirm</span>
          </Button>
        </DialogFooter> */}
      </Dialog>
    </>
  );
}
