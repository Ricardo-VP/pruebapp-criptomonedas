import "./App.css";
import {
  Button,
  Container,
  IconButton,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Typography,
  TextField,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from "@mui/material";
import { useEffect, useState } from "react";
import {
  crearCriptomoneda,
  obtenerCriptomonedas,
} from "./services/criptomonedas";
import DeleteIcon from "@mui/icons-material/Delete";

function App() {
  const [criptomonedas, setCriptomonedas] = useState([]);
  const [criptomoneda, setCriptomoneda] = useState({
    nombre: "",
    usd: "",
  });
  const [openDialog, setOpenDialog] = useState(false);

  useEffect(() => {
    obtenerCriptomonedas().then((data) => {
      setCriptomonedas(data);
    });
  }, []);

  console.log(criptomonedas);

  const handleClickOpenDialog = () => {
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
  };

  const handleSubmit = () => {
    console.log(criptomoneda);
    const response = crearCriptomoneda(criptomoneda);
    response.then((data) => {
      setCriptomonedas(data);
      setOpenDialog(false);
    });
  };

  return (
    <>
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
          Listado de criptomonedas
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
        <Button
          color="info"
          variant="contained"
          onClick={handleClickOpenDialog}
        >
          Agregar
        </Button>
      </Container>
      <Dialog open={openDialog} onClose={handleCloseDialog}>
        <DialogTitle>Agregar criptomoneda</DialogTitle>
        <DialogContent>
          <TextField
            error={criptomoneda.nombre === ""}
            helperText={criptomoneda.nombre === "" ? "Campo obligatorio" : ""}
            autoFocus
            margin="dense"
            id="nombre"
            label="Nombre"
            type="email"
            fullWidth
            variant="standard"
            onChange={(event) =>
              setCriptomoneda({
                ...criptomoneda,
                nombre: event.target.value,
              })
            }
          />
          <TextField
            error={criptomoneda.usd === ""}
            helperText={criptomoneda.usd === "" ? "Campo obligatorio" : ""}
            autoFocus
            margin="dense"
            id="usd"
            label="Valor en USD"
            type="number"
            fullWidth
            variant="standard"
            onChange={(event) =>
              setCriptomoneda({ ...criptomoneda, usd: event.target.value })
            }
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseDialog}>Cancelar</Button>
          <Button onClick={handleSubmit}>Guardar</Button>
        </DialogActions>
      </Dialog>
    </>
  );
}

export default App;
