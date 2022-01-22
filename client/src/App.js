import "./App.css";
import Box from "@mui/material/Box";
import { Container, Typography } from "@mui/material";

function App() {
  return (
    <Container
      maxWidth="sm"
      fixed
      style={{ textAlign: "center", height: "100%" }}
    >
      <img
        src="https://logos-marcas.com/wp-content/uploads/2020/08/Bitcoin-Logo.png"
        alt="Logo Bitcoin"
        style={{ width: "250px", textAlign: "center", marginTop: "10px" }}
      />
      <Typography variant="h3" sx={{ mt: 2, mb: 2 }}>
        Listado de criptomonedas{" "}
      </Typography>
      <div className="content">
        <Box sx={{ flexGrow: 1, maxWidth: 752 }}></Box>
      </div>
    </Container>
  );
}

export default App;
