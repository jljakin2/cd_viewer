import styled from "styled-components";

import media from "../lib/mediaQueries";

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
`;

export default function ContactForm() {
  function handleContactSubmission(e) {
    e.preventDefault();

    /**
     * TODO:
     *  1. call custom function that handles submission to emailjs
     */

    console.log("contact sent!");
  }

  return (
    <FormStyles onSubmit={handleContactSubmission}>
      <fieldset>
        <div className="form-control">
          <input
            type="text"
            placeholder="Name"
            name="name"
            //   value={values.name}
            //   onChange={handleChange}
          />
          {/* {errors.name && <Error>{errors.name}</Error>} */}
          {/* <small className="body--small error">error</small> */}
        </div>
        <div className="form-control">
          <input
            type="email"
            placeholder="Email"
            name="email"
            // value={values.email}
            // onChange={handleChange}
          />
          {/* {errors.email && <Error>{errors.email}</Error>} */}
        </div>
        <div className="form-control">
          <input
            type="text"
            placeholder="Subject"
            name="subject"
            // value={values.subject}
            // onChange={handleChange}
          />
          {/* {errors.subject && <Error>{errors.subject}</Error>} */}
        </div>
        <div className="form-control">
          <textarea
            placeholder="Message"
            rows="10"
            cols="50"
            name="message"
            // value={values.message}
            // onChange={handleChange}
          />
          {/* {errors.message && <Error>{errors.message}</Error>} */}
        </div>
      </fieldset>
      <button type="submit">
        {/* {!isLoading && "Send"}
        {isLoading && (
          <Loader type="TailSpin" color={theme.white} width={15} height={15} />
        )} */}
        Send message
      </button>
    </FormStyles>
  );
}
