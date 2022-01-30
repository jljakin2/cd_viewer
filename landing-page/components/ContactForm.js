import styled from "styled-components";

export default function ContactForm() {
  return (
    <form>
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
          <p className="body--small">error</p>
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
            rows="15"
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
    </form>
  );
}
