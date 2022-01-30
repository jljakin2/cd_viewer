import Page from "../components/Page";
import { MobileMenuStateProvider } from "../lib/context/mobileMenuState";

function MyApp({ Component, pageProps }) {
  return (
    <MobileMenuStateProvider>
      <Page>
        <Component {...pageProps} />
      </Page>
    </MobileMenuStateProvider>
  );
}

export default MyApp;
