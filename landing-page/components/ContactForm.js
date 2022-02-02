import { useRef, useState } from "react";
import styled from "styled-components";
import emailjs from "emailjs-com";
import { TailSpin } from "react-loader-spinner";

import media from "../lib/mediaQueries";
import useForm from "../lib/useForm";
import validateForm from "../lib/validateForm";
import { useToast } from "../lib/context/showToast";

const FormStyles = styled.form`
  background: var(--grey700);
  border-radius: 0.375rem;

  padding: 2rem 1.5rem;

  ${media.laptop} {
    flex-basis: 60%;

    margin-left: 4rem;
    padding: 3rem 2.5rem;
  }

  & .form-control:not(:last-child) {
    margin-bottom: 2rem;
  }

  .form-control {
    position: relative;
  }

  small {
    position: absolute;
    bottom: -1.25rem;
    left: 1rem;
  }

  fieldset {
    margin-bottom: 3rem;
  }

  button {
    display: flex;
    align-items: center;
    justify-content: center;

    & *:nth-child(1) {
      margin-left: 0.5rem;
    }
  }
`;

export default function ContactForm() {
  const [errors, setErrors] = useState({});

  const [showToast, setShowToast] = useState(false);
  const [toastType, setToastType] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  const { inputs, handleChange, resetForm } = useForm({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const { handleToastContent } = useToast();

  const form = useRef();

  const sendEmail = e => {
    e.preventDefault();

    // use the form validation helper to see if there are errors, and then set the local errors state with the
    // errors object that comes back from the validation helper
    const formErrors = validateForm(inputs);
    setErrors(formErrors);

    // send email if there aren't any errors
    if (Object.keys(formErrors).length === 0) {
      setIsLoading(true);
      emailjs
        .sendForm(
          process.env.NEXT_PUBLIC_EMAILJS_SERVICE_KEY,
          "template_wz9it0d",
          form.current,
          process.env.NEXT_PUBLIC_EMAILJS_USER_KEY
        )
        .then(
          result => {
            console.log(result.text);
            console.log("success");
            setIsLoading(false);
            handleToastContent(
              // show a successful toast with the following content
              "success",
              "Your message was sent successfully."
            );
            // setToastType({
            //   type: "success",
            //   message: "Thank you for your message!",
            // });
            // handleShowToast();
            resetForm();
          },
          error => {
            console.log(error.text);
            // setToastType({
            //   type: "error",
            //   message: "Uh oh! Something went wrong.",
            // });
            // handleShowToast();
            setIsLoading(false);
            handleToastContent(
              // show a successful toast with the following content
              "error",
              "Something went wrong. Please try again."
            );
            resetForm();
          }
        );
    }
  };

  return (
    <FormStyles ref={form}>
      <fieldset>
        <div className="form-control">
          <input
            type="text"
            placeholder="Name"
            name="name"
            className={errors.name ? "error-border" : ""}
            value={inputs.name}
            onChange={handleChange}
            onKeyDown={() => setErrors({ ...errors, name: "" })}
          />
          {errors.name && (
            <small className="body--small error">{errors.name}</small>
          )}
        </div>
        <div className="form-control">
          <input
            type="email"
            placeholder="Email"
            name="email"
            className={errors.email ? "error-border" : ""}
            value={inputs.email}
            onChange={handleChange}
            onKeyDown={() => setErrors({ ...errors, email: "" })}
          />
          {errors.email && (
            <small className="body--small error">{errors.email}</small>
          )}
        </div>
        <div className="form-control">
          <input
            className={errors.subject ? "error-border" : ""}
            type="text"
            placeholder="Subject"
            name="subject"
            value={inputs.subject}
            onChange={handleChange}
            onKeyDown={() => setErrors({ ...errors, subject: "" })}
          />
          {errors.subject && (
            <small className="body--small error">{errors.subject}</small>
          )}
        </div>
        <div className="form-control">
          <textarea
            placeholder="Message"
            rows="10"
            cols="50"
            name="message"
            className={errors.message ? "error-border" : ""}
            value={inputs.message}
            onChange={handleChange}
            onKeyDown={() => setErrors({ ...errors, message: "" })}
          />
          {errors.message && (
            <small className="body--small error">{errors.message}</small>
          )}
        </div>
      </fieldset>
      <button onClick={sendEmail}>
        {/* {!isLoading && "Send"}
        {isLoading && (
          <Loader type="TailSpin" color={theme.white} width={15} height={15} />
        )} */}
        Send message
        {isLoading && <TailSpin color="#fff" height={16} width={16} />}
      </button>
    </FormStyles>
  );
}
