import { useEffect } from "react";
import styled from "styled-components";
import { useToast } from "../lib/context/showToast";
import media from "../lib/mediaQueries";

const ToastStyles = styled.div`
  background: var(--white);
  box-shadow: var(--bs);
  color: var(--grey800);

  display: flex;
  align-items: center;
  position: fixed;
  top: 0;

  min-width: 100vw;
  height: 4rem;
  padding: 0.5rem;

  z-index: 100000;

  ${media.tablet} {
    border-radius: 0.625rem;

    top: 5vh;
    right: 3vw;

    min-width: 15rem;
    padding: 1rem;
  }

  .border {
    background: var(--success);
    border-radius: 0.625rem;

    width: 0.25rem;
    height: 100%;
    margin-right: 0.75rem;
  }

  .close {
    cursor: pointer;
    opacity: 0.5;

    align-self: flex-start;

    margin-left: auto;

    ${media.tablet} {
      margin-left: 0.5rem;
    }

    &:hover {
      opacity: 0.8;
    }
  }

  p.body--regular {
    line-height: 1rem;
  }

  p.body--small {
    opacity: 0.75;
    line-height: 1rem;

    margin-top: 0.25rem;
  }
`;

export default function Toast() {
  const header = {
    success: "Success! Talk to you soon.",
    error: "Uh oh!",
  };

  const { showToast, toastContent, closeToast } = useToast();

  useEffect(() => {
    setTimeout(closeToast, 4000);
  }, []);

  return (
    <ToastStyles showToast={showToast}>
      <div className="border" />
      <div>
        <p className="body--regular">{header[toastContent.type]}</p>
        <p className="body--small">{toastContent.message}</p>
      </div>
      <p className="close" onClick={closeToast}>
        &times;
      </p>
    </ToastStyles>
  );
}
