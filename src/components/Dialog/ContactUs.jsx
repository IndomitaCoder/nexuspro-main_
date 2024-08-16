import React, { useState } from 'react';
import {
  Button,
  Dialog,
  Card,
  CardBody,
  CardFooter,
  Typography,
  Input,
  Textarea,
  CardHeader,
  DialogHeader,
  DialogBody
} from '@material-tailwind/react';
import emailjs from '@emailjs/browser';
import Header from 'components/Layout/Header';

export function ContactUsForm({
  isOpen,
  setOpen,
  setSelectedPage,
  selectedPage,
  isMobileMenuOpen,
  setIsMobileMenuOpen
}) {
  const handleOpen = () => setOpen((cur) => !cur);
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [isEmailValid, setIsEmailValid] = useState(false);
  const [content, setContent] = useState('');

  const handleEmailChange = (event) => {
    const enteredEmail = event.target.value;
    setEmail(enteredEmail);

    // Basic email validation using regular expression
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    setIsEmailValid(emailRegex.test(enteredEmail));
  };

  const handleContentChange = (event) => {
    const enteredContent = event.target.value;
    setContent(enteredContent);
  };

  const handlePhoneChange = (event) => {
    const enteredPhone = event.target.value;
    setPhone(enteredPhone);
  };

  const handleNameChange = (event) => {
    const enteredName = event.target.value;
    setName(enteredName);
  };

  const handleSubmit = () => {
    // Check if both email and content are valid before proceeding
    if (isEmailValid) {
      console.log('Email is valid:', email);
      console.log('Content:', content);
      emailjs
        .send(
          process.env.REACT_APP_SERVICE_ID,
          process.env.REACT_APP_TEMPLATE_ID,
          {
            email,
            content
          },
          process.env.REACT_APP_PUBLIC_KEY
        )
        .then(
          (response) => {
            console.log('SUCCESS!', response.status, response.text);
            alert('Thanks! We will response soon!');
            handleOpen();
          },
          (err) => {
            console.log('FAILED...', err);
          }
        );
    } else {
      alert('Invalid email');
    }
  };
  const backgroundImage = `url("${process.env.REACT_APP_PUBLIC_URL}/assets/images/contact_bg-min.png")`;

  return (
    <Dialog
      size="xxl"
      open={isOpen}
      handler={handleOpen}
      className="relative flex items-center justify-center w-screen h-screen overflow-y-hidden"
      style={{
        backgroundImage,
        backgroundPosition: 'top right',
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: 'local',
        backgroundSize: 'cover'
      }}
    >
      <Header
        setSelectedPage={setSelectedPage}
        selectedPage={selectedPage}
        isMobileMenuOpen={isMobileMenuOpen}
        setIsMobileMenuOpen={setIsMobileMenuOpen}
      />

      <DialogBody className="w-full h-full md:top-[120px] top-[96px]">
        <Card className="mx-auto w-full max-w-[300px] md:h-[70%] sm:h-[70%] h-[60%] overflow-y-auto">
          <div className="flex flex-col w-full py-3 text-white bg-blue-500 rounded-t-xl ">
            <div className="relative flex items-center justify-center px-8 rounded-t-xl">
              <Typography className="mb-1 rounded-t-xl" variant="h4">
                Contact Us
              </Typography>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="#2196f3"
                onClick={handleOpen}
                className="absolute top-0 w-6 h-6 text-white transition-all bg-white rounded-full cursor-pointer right-2 hover:rotate-90"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18 18 6M6 6l12 12"
                />
              </svg>
            </div>
            <div className="text-center">
              Email us with any questions or inquiries
            </div>
          </div>
          <CardBody className="flex flex-col w-full gap-1">
            <Typography
              className="mb-3 font-normal"
              variant="paragraph"
              color="gray"
            >
              Please contact our team, email
            </Typography>
            <Typography className="-mb-2" variant="h6">
              Name
            </Typography>
            <Input
              size="lg"
              value={name}
              onChange={handleNameChange}
              placeholder="Your Name"
              labelProps={{
                className: 'hidden'
              }}
            />
            <Typography className="-mb-2" variant="h6">
              Phone
            </Typography>
            <Input
              label="Phone"
              labelProps={{
                className: 'hidden'
              }}
              size="lg"
              value={phone}
              onChange={handlePhoneChange}
              placeholder="Your Phone"
            />
            <Typography className="-mb-2" variant="h6">
              Your Email
            </Typography>
            <Input
              label="Email"
              labelProps={{
                className: 'hidden'
              }}
              size="lg"
              placeholder="Your Email"
              value={email}
              onChange={handleEmailChange}
            />
            <Typography className="-mb-2" variant="h6">
              Message
            </Typography>
            <Textarea
              label="Message"
              labelProps={{
                className: 'hidden'
              }}
              size="lg"
              value={content}
              placeholder="Your message here..."
              variant="static"
              onChange={handleContentChange}
            />
          </CardBody>
          <CardFooter className="pt-0">
            <Button
              variant="gradient"
              color="blue"
              onClick={handleSubmit}
              fullWidth
            >
              Submit
            </Button>
          </CardFooter>
        </Card>
      </DialogBody>
      <div className="absolute bottom-0 w-full">
        <div
          className={`bg-white md:p-5 p-0 flex md:flex-row flex-col text-center transition-all items-center justify-between`}
        >
          <span className="flex items-center justify-center w-full h-20 mt-0 transition-all cursor-pointer md:w-1/3 hover:opacity-80">
            <img
              loading="lazy"
              src={
                process.env.REACT_APP_PUBLIC_URL +
                '/assets/images/Nexus Pro_Logo 1-min.png'
              }
              alt="wing"
              className="h-2/3"
            />
          </span>

          <span
            className={`text-lg md:w-1/3 w-full text-gray-800 transition-all`}
          >
            Copyright © 2023-2024 Nexus Pro AG Operation Limited. All Rights
            Reserved.
          </span>
          <div className="flex flex-wrap justify-center w-full gap-3 md:w-1/3">
            <div className="cursor-pointer hover:opacity-50 w-[30px] h-[40px]">
              <a href="https://t.me/+fB8NaPx6WzgyMzc5" target="_blank">
                <img
                  loading="lazy"
                  src={
                    process.env.REACT_APP_PUBLIC_URL +
                    '/assets/images/Telegram App.png'
                  }
                  alt="wing"
                />
              </a>
            </div>
            <div className="cursor-pointer hover:opacity-50 w-[30px] h-[40px]">
              <a href="https://twitter.com/NexusPro_io" target="_blank">
                <img
                  loading="lazy"
                  src={
                    process.env.REACT_APP_PUBLIC_URL +
                    '/assets/images/Twitter.png'
                  }
                  alt="wing"
                />
              </a>
            </div>
            <div className="cursor-pointer hover:opacity-50 w-[30px] h-[40px]">
              <a href="https://www.tiktok.com/@nexuspro.io" target="_blank">
                <img
                  loading="lazy"
                  src={
                    process.env.REACT_APP_PUBLIC_URL +
                    '/assets/images/tik tok.png'
                  }
                  alt="wing"
                />
              </a>
            </div>
            <div className="cursor-pointer hover:opacity-50 w-[30px] h-[40px]">
              <a
                href="https://www.linkedin.com/company/nexuspro-io/"
                target="_blank"
              >
                <img
                  loading="lazy"
                  src={
                    process.env.REACT_APP_PUBLIC_URL +
                    '/assets/images/linked_in.png'
                  }
                  alt="wing"
                />
              </a>
            </div>
            <div className="cursor-pointer hover:opacity-50 w-[30px] h-[40px]">
              <a
                href="https://www.facebook.com/profile.php?id=61557079761256"
                target="_blank"
              >
                <img
                  loading="lazy"
                  src={
                    process.env.REACT_APP_PUBLIC_URL +
                    '/assets/images/Facebook.png'
                  }
                  alt="wing"
                />
              </a>
            </div>
            <div className="cursor-pointer hover:opacity-50 w-[30px] h-[40px]">
              <a href="https://www.instagram.com/nexuspro.io/" target="_blank">
                <img
                  loading="lazy"
                  src={
                    process.env.REACT_APP_PUBLIC_URL +
                    '/assets/images/Instagram.png'
                  }
                  alt="wing"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </Dialog>
  );
}
