import Page from "../components/Page";
import { MobileMenuStateProvider } from "../lib/context/mobileMenuState";
import { ToastStateProvider } from "../lib/context/showToast";

function MyApp({ Component, pageProps }) {
  return (
    <ToastStateProvider>
      <MobileMenuStateProvider>
        <Page>
          <Component {...pageProps} />
        </Page>
      </MobileMenuStateProvider>
    </ToastStateProvider>
  );
}

export default MyApp;
