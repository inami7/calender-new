import "./styles.css";
import { ChakraProvider } from "@chakra-ui/react";
import { Inputday } from "./components/atoms/input/Inputday";
import theme from "./theme/theme";
export default function App() {
  return (
    <ChakraProvider theme={theme}>
      <Inputday />
    </ChakraProvider>
  );
}
