import "./App.css";
import Box from "@mui/material/Box";
import {
  Container,
  IconButton,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Typography,
} from "@mui/material";
import { useEffect, useState } from "react";
import { obtenerCriptomonedas } from "./services/criptomonedas";
import DeleteIcon from "@mui/icons-material/Delete";

function App() {
  const [criptomonedas, setCriptomonedas] = useState([]);

  useEffect(() => {
    obtenerCriptomonedas().then((data) => {
      setCriptomonedas(data);
    });
  }, []);

  console.log(criptomonedas);

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
      <List>
        {criptomonedas.map((criptomoneda) => (
          <ListItem
            key={criptomoneda.id}
            secondaryAction={
              <IconButton edge="end" aria-label="delete">
                <DeleteIcon />
              </IconButton>
            }
          >
            <ListItemAvatar></ListItemAvatar>
            <ListItemText
              primary={criptomoneda.nombre}
              secondary={"$" + criptomoneda.usd}
            />
          </ListItem>
        ))}
      </List>
    </Container>
  );
}

export default App;
