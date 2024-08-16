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

export function ContactUsForHowitWorks({ setopenDialog }) {
  const handleOpen = () => setopenDialog((cur) => !cur);
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

  return (
    <Card className="w-full mx-auto overflow-y-auto">
      <div className="flex flex-col w-full py-3 text-black bg-[#EAEAEA] rounded-t-xl ">
        <div className="relative flex items-center justify-center px-8 rounded-t-xl">
          <Typography className="mb-1 rounded-t-xl" variant="h4">
            Contact Us
          </Typography>
        </div>
        <div className="text-center">
          Email us with any questions or inquiries
        </div>
      </div>
      <CardBody className="flex flex-col w-full gap-2 bg-[#EAEAEA] ">
        <Typography className="-mb-2 text-gray-800" variant="h6">
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
          className="bg-white"
        />
        <Typography className="-mb-2 text-gray-800" variant="h6">
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
          className="bg-white"
        />
        <Typography className="-mb-2 text-gray-800" variant="h6">
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
          className="bg-white"
        />
        <Typography className="-mb-2 text-gray-800" variant="h6">
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
          className="bg-white rounded-xl"
        />
      </CardBody>
      <CardFooter className="pt-0 bg-[#EAEAEA]">
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
  );
}
