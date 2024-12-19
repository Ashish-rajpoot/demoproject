import { ThemeProvider } from "./SalesManager/darkmode/theme-provider";
import { Index } from "./SalesManager/Index";

function App() {
  return (
    <>
    {/* <Layout children={<HomePage/>}/> */}
      <ThemeProvider defaultTheme="system" storageKey="vite-ui-theme">
        <Index />
      </ThemeProvider>
    </>
  );
}

export default App;
