import Head from "next/head";
import Link from "next/link";

import ContactForm from "../components/ContactForm";
import FeatureCard from "../components/FeatureCard";
import HeroProductPreview from "../components/HeroProductPreview";
import FullLogo from "../components/Icons/FullLogo";

import { features } from "../lib/config";

export default function Home() {
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

      <main>
        <section>
          <HeroProductPreview />

          <h1 className="display">
            Welcome to the <span className="highlight-text">3D Revolution</span>
          </h1>
          <h2 className="display">
            Cutting-edge 3D analysis at your fingertips
          </h2>
          <p className="body--regular">Launching Spring 2022</p>
          <form>
            <input type="email" />
            <button>Sign up</button>
          </form>
        </section>

        <section id="features">
          <h1 className="heading">Features</h1>
          {renderedFeatures}
        </section>

        <section id="partners">
          <h1 className="heading">Partners</h1>
          <p className="body--regular">
            AFWERX · Harvard · MIT · US Navy · US Air Force · Google for
            Startups · Penfed Foundation · Mass Challenge · Leica · National
            Security Innovation Network
          </p>
        </section>

        <section id="apply">
          <h1 className="heading">Join Our Team</h1>
          <p className="body--regular">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero,
            quidem!
          </p>
          <p className="body--regular">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero,
            quidem!
          </p>
          <a href="#">
            <button>See open roles</button>
          </a>
        </section>

        <section id="contact">
          <h1 className="heading">Contact Us</h1>
          <p className="body--regular">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur
            sunt quis, ipsum debitis pariatur cum nobis reiciendis? Nesciunt,
            voluptas aperiam.
          </p>
          <ContactForm />
        </section>
      </main>

      <footer>
        <FullLogo />

        <div className="footer-section">
          <p className="body--large">Social</p>
          <a href="https://www.linkedin.com/company/candelytics/">
            <p className="body--regular">LinkedIn</p>
          </a>
        </div>

        <div className="footer-section">
          <p className="body--large">Resources</p>

          <Link href="/privacy">
            <p className="body--regular">Privacy Policy</p>
          </Link>
          <Link href="/terms">
            <p className="body--regular">Terms of Use</p>
          </Link>
        </div>
      </footer>
    </>
  );
}
