import emailjs from "emailjs-com";

const sendEmail = e => {
  e.preventDefault();

  const { REACT_APP_EMAILJS_SERVICE_KEY, REACT_APP_EMAILJS_USER_KEY } =
    process.env;

  // use the form validation helper to see if there are errors, and then set the local errors state with the
  // errors object that comes back from the validation helper
  const formErrors = validateForm(values);
  setErrors(formErrors);

  // send email if there aren't any errors
  if (Object.keys(formErrors).length === 0) {
    setIsLoading(true);
    emailjs
      .sendForm(
        REACT_APP_EMAILJS_SERVICE_KEY,
        "template_0onn0cg",
        e.target,
        REACT_APP_EMAILJS_USER_KEY
      )
      .then(
        result => {
          console.log(result.text);
          setToastType({
            type: "success",
            message: "Sweet! Talk to you soon 👋",
          });
          handleShowToast();
          setValues({
            name: "",
            email: "",
            subject: "",
            message: "",
          });
          setIsLoading(false);
        },
        error => {
          console.log(error.text);
          setToastType({
            type: "error",
            message: "Uh oh! Something went wrong 😕",
          });
          handleShowToast();
          setValues({
            name: "",
            email: "",
            subject: "",
            message: "",
          });
          setIsLoading(false);
        }
      );
  }
};

export default sendEmail;
