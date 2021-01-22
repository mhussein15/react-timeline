import Header from "./Components/Header.jsx";
import Timeline from "./Components/Timeline";
import { GlobalStyles } from "./styles";
import { ThemeProvider } from "styled-components";
import Footer from "./Components/Footer"

import "react-vertical-timeline-component/style.min.css";

const theme = {
  textColor: "#f5f6fa",
  backgroudColorYellow: "#FCBB6D",
  backgroudColorRedish: "#D8737F",
  iconColor: "#D8737F",
};

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Header />
      <Timeline />
      <Footer/>
    </ThemeProvider>
  );
}

export default App;
