import { Container } from "@mui/material";
import "./App.css";
import Criptomonedas from "./components/Criptomonedas";
import Header from "./components/Header";

function App() {
  return (
    <div className="App">
      <Container
        maxWidth="sm"
        fixed
        style={{ textAlign: "center", height: "100%" }}
      >
        <Header />
        <Criptomonedas />
      </Container>
    </div>
  );
}

export default App;
