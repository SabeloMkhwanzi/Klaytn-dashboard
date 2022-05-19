import "../styles/globals.css";
import { ChakraProvider } from "@chakra-ui/react";
import { Provider, createClient } from "wagmi";

const client = createClient();

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider>
      <Provider client={client}>
        <Component {...pageProps} />
      </Provider>
    </ChakraProvider>
  );
}

export default MyApp;
