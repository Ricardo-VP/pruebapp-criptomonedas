import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  IconButton,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  TextField,
  Typography,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import { useEffect, useState } from "react";
import {
  crearCriptomoneda,
  obtenerCriptomonedas,
  eliminarCriptomoneda,
} from "../services/criptomonedas";

const Criptomonedas = () => {
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

  const handleClickOpenDialog = () => {
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
  };

  const handleSubmit = () => {
    if (criptomoneda.nombre.trim() === "" || criptomoneda.usd.trim() === "") {
      return;
    }
    const response = crearCriptomoneda(criptomoneda);
    response.then((data) => {
      setCriptomonedas(data);
      setOpenDialog(false);
    });
    setCriptomoneda({
      nombre: "",
      usd: "",
    });
  };

  const handleDelete = (criptomoneda) => {
    const response = eliminarCriptomoneda(criptomoneda);
    response.then((data) => {
      console.log(data);
      setCriptomonedas(data);
    });
  };
  return (
    <>
      <List>
        {criptomonedas.map((criptomoneda) => (
          <ListItem
            key={criptomoneda.id}
            secondaryAction={
              <IconButton
                onClick={() => handleDelete(criptomoneda)}
                edge="end"
                aria-label="delete"
              >
                <DeleteIcon color="warning"/>
              </IconButton>
            }
          >
            <ListItemAvatar></ListItemAvatar>
            <ListItemText
              primary={
                <Typography variant="h5" style={{ color: "white" }}>
                  {criptomoneda.nombre}
                </Typography>
              }
              secondary={
                <Typography variant="subtitle1" style={{ color: "gray" }}>
                  ${criptomoneda.usd}
                </Typography>
              }
            />
          </ListItem>
        ))}
      </List>
      <Button color="info" variant="contained" onClick={handleClickOpenDialog}>
        Agregar
      </Button>
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
};

export default Criptomonedas;
