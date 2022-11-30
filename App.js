import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import { ThemeProvider } from "styled-components/native";
import { useFonts as useInter, Inter } from "@expo-google-fonts/inter";
import { useFonts as usePoppins, Poppins } from "@expo-google-fonts/poppins";
import { theme } from "./src/infrastructure/theme";
import { Navigation } from "./src/infrastructure/navigation/index";

export default function App() {
  const [interLoaded] = useInter({ Inter });
  const [poppinsLoaded] = usePoppins({ Poppins });
  if (!interLoaded || !poppinsLoaded) {
    return null;
  }
  return (
    <>
      <ThemeProvider theme={theme}>
        <Navigation />
        <ExpoStatusBar style="auto" />
      </ThemeProvider>
    </>
  );
}
