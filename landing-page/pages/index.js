import { useState } from "react";
import Head from "next/head";
import Link from "next/link";
import styled from "styled-components";
import { useMediaQuery } from "react-responsive";

import ContactForm from "../components/ContactForm";
import FeatureCard from "../components/FeatureCard";
import FullLogo from "../components/Icons/FullLogo";
import backgroundMobile from "../public/hero/mobile/hero-bg.png";
import backgroundTablet from "../public/hero/tablet/hero-bg.png";
import backgroundDesktop from "../public/hero/desktop/hero-bg.png";

import { features } from "../lib/config";
import media from "../lib/mediaQueries";

const MainStyles = styled.main`
  & section:not(:last-child, :first-child) {
    margin-bottom: 10rem;

    ${media.laptop} {
      margin-bottom: 15rem;
    }
  }

  .section-title {
    text-align: center;

    position: relative;

    margin-bottom: 4rem;
  }

  .section-title::after {
    content: "";
    background: var(--primary);

    position: absolute;
    bottom: -0.5rem;
    left: 50%;
    transform: translateX(-50%);

    width: 4rem;
    height: 0.25rem;
  }

  .partner-apply-container {
    margin-bottom: 10rem;
    padding: 0 1.5rem 4rem 1.5rem;

    ${media.laptop} {
      display: flex;
      align-items: flex-start;
      justify-content: center;

      padding: 0 4rem 4rem 4rem;
      margin-bottom: 15rem;
      /* width: 80%; */

      & > section {
        flex-basis: 50%;
      }
    }

    ${media.laptop} {
      padding: 0 10rem;
    }
  }
`;

const HeroStyles = styled.section`
  background-image: url(${backgroundMobile.src});
  background-repeat: no-repeat;
  background-size: 100%;
  background-position: bottom center;
  text-align: center;

  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  width: 100%;
  height: 100vh;
  margin-bottom: 8rem;
  padding: 0 1.5rem 4rem 1.5rem;

  ${media.tablet} {
    background-image: url(${backgroundTablet.src});

    padding: 0 4rem 4rem 4rem;
  }

  ${media.laptop} {
    background-image: url(${backgroundDesktop.src});

    margin-bottom: 15rem;
    padding: 0 10rem 4rem 10rem;
  }

  h1 {
    margin: 10vw 0 1.5rem 0;
  }

  h2 {
    color: var(--grey200);

    width: 85%;
    margin-bottom: 2em;
  }

  p {
    margin-bottom: 0.5rem;
  }

  form {
    position: relative;

    width: 100%;

    ${media.tablet} {
      width: 70%;
    }
  }

  input {
    padding: 1rem 8rem 1rem 1rem;
  }

  #signup-btn {
    border-radius: 0 0.375rem 0.375rem 0;

    position: absolute;
    top: 0;
    right: 0;

    padding: 1rem 2rem;
  }

  small {
    position: absolute;
    bottom: -1.5rem;
    left: 1rem;
  }
`;

const FeaturesStyles = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  width: 100%;

  padding: 0 1.5rem 4rem 1.5rem;

  ${media.tablet} {
    padding: 0 4rem 4rem 4rem;
  }

  ${media.laptop} {
    padding: 0 10rem 4rem 10rem;
  }

  & div:not(:last-child) {
    margin-bottom: 4rem;

    ${media.laptop} {
      margin-bottom: 0;
    }
  }

  .card-container {
    display: flex;
    flex-direction: column;
    align-items: center;

    ${media.laptop} {
      flex-direction: row;
      justify-content: space-between;
      column-gap: 8rem;

      width: 100%;
    }
  }
`;

const PartnerStyles = styled.section`
  text-align: center;
  position: relative;

  margin-bottom: 10rem;

  ${media.laptop} {
    margin-bottom: 0;
    padding-right: 3rem;
  }

  p {
    color: var(--grey300);
  }
`;

const ApplyStyles = styled.section`
  text-align: center;

  & *:not(:last-child) {
    margin-bottom: 2rem;
  }

  p {
    color: var(--grey300);
  }

  button {
    width: 50%;
  }

  ${media.laptop} {
    padding-left: 3rem;
  }
`;

const ContactStyles = styled.section`
  margin-bottom: 6rem;
  padding: 0 1.5rem 4rem 1.5rem;

  ${media.tablet} {
    padding: 0 4rem 4rem 4rem;
  }

  ${media.laptop} {
    display: flex;
    justify-content: center;

    padding: 0 10rem 4rem 10rem;
  }

  .body--regular {
    text-align: center;

    ${media.laptop} {
      text-align: left;
    }
  }

  button {
    width: 100%;
  }

  p {
    color: var(--grey300);

    margin-bottom: 3rem;
  }
`;

const FooterStyles = styled.footer`
  background: var(--grey700);
  text-align: center;

  display: flex;
  flex-direction: column;
  align-items: center;

  padding: 2rem 1.5rem 4rem 1.5rem;

  ${media.laptop} {
    flex-direction: row;
    align-items: flex-start;

    padding: 2rem 4rem 4rem 4rem;

    .footer-section--logo {
      margin-right: 4rem;
    }
  }

  .footer-section:not(:last-child) {
    margin-bottom: 2rem;

    ${media.laptop} {
      margin-bottom: 0;
      margin-right: 4rem;
    }
  }

  svg {
    margin-bottom: 1.5rem;

    ${media.laptop} {
      margin-right: 5rem;
    }
  }

  .body--large {
    margin-bottom: 0.5rem;
  }

  .link {
    text-decoration: none;
    color: var(--grey300);
    cursor: pointer;

    position: relative;

    transition: all 0.2s ease-out;

    &:hover {
      color: var(--white);
    }
  }
`;

export default function Home() {
  const isMobile = useMediaQuery({
    query: `(max-width: ${media.sizes.tablet})`,
  });

  const renderedFeatures = features.map(feature => {
    return (
      <FeatureCard
        key={feature.id}
        title={feature.title}
        description={feature.description}
        icon={feature.id}
      />
    );
  });

  return (
    <>
      <Head>
        <title>Candelytics</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <MainStyles>
        <HeroStyles id="hero">
          <h1 className="display">
            Welcome to the <span className="highlight-text">3D Revolution</span>
          </h1>
          <h2 className="display">
            Cutting-edge 3D analysis at your fingertips
          </h2>
          <h6 className="body--regular">Coming Soon 2022</h6>
          {/* <form onSubmit={handleEmailSubscription}>
            <input
              type="email"
              placeholder="Be the first to know..."
              value={email}
              onChange={e => setEmail(e.target.value)}
            />
            <small className="body--small error">Error</small>
            <button id="signup-btn" type="submit">
              Sign up
            </button>
          </form> */}
        </HeroStyles>

        <FeaturesStyles id="features">
          <h1 className="heading section-title">Features</h1>
          <div className="card-container">{renderedFeatures}</div>
        </FeaturesStyles>
        <div className="partner-apply-container">
          <PartnerStyles id="partners">
            <h1 className="heading section-title">Partners</h1>
            <p className="body--regular">
              AFWERX · Harvard · MIT · US Navy · US Air Force · Google for
              Startups · Penfed Foundation · Mass Challenge · Leica · National
              Security Innovation Network
            </p>
          </PartnerStyles>

          <ApplyStyles id="apply">
            <h1 className="heading section-title">Join Our Team</h1>
            <p className="body--regular">
              We are a venture-backed and student-founded team of engineers,
              veterans, and entrepreneurs.
            </p>
            <p className="body--regular">
              Come help us build the future of 3D visualization and analytics as
              we deliver cutting edge solutions to national security and
              commercial customers! If you don’t see the role you’re looking
              for, use the contact form below and tell us more about yourself.
            </p>
            <a href="https://angel.co/company/candelytics/jobs">
              <button>See open roles</button>
            </a>
          </ApplyStyles>
        </div>

        <ContactStyles id="contact">
          <div>
            <h1 className="heading section-title">Contact Us</h1>
            <p className="body--regular">
              We would love to hear from you! Reach out to learn more or apply
              to join our team.
            </p>
            <p className="body--regular">
              Stay tuned for exciting new developments!
            </p>
          </div>
          <ContactForm />
        </ContactStyles>
      </MainStyles>

      <FooterStyles>
        <div className="footer-section--logo">
          <FullLogo />
        </div>

        <div className="footer-section">
          <p className="body--large">Social</p>
          <a
            href="https://www.linkedin.com/company/candelytics/"
            className="link">
            <p className="body--regular link">LinkedIn</p>
          </a>
        </div>

        <div className="footer-section">
          <p className="body--large">Resources</p>
          <Link href="/privacy">
            <p className="body--regular link">Privacy Policy</p>
          </Link>
          <Link href="/terms">
            <p className="body--regular link">Terms of Use</p>
          </Link>
        </div>
      </FooterStyles>
    </>
  );
}
