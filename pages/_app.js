import NextNProgress from "nextjs-progressbar";
import { consoleJob } from "../utils/consoleJob";
import { useEffect } from "react";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    consoleJob();
  }, []);

  return (
    <>
      <NextNProgress
        color="#2b3cff"
        startPosition={0.3}
        stopDelayMs={200}
        height={3}
        showOnShallow={true}
      />

      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
