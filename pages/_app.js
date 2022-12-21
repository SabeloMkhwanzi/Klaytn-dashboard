import "../styles/globals.css";
import { ChakraProvider } from "@chakra-ui/react";
import { Provider, createClient } from "wagmi";

// import react-query
import { QueryClient, QueryClientProvider } from "react-query";

// Create a client for react-query
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
});

const client = createClient();

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider>
      <Provider client={client}>
        <QueryClientProvider client={queryClient}>
          <Component {...pageProps} />
        </QueryClientProvider>
      </Provider>
    </ChakraProvider>
  );
}

export default MyApp;
