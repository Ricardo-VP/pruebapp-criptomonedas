import { Typography } from "@mui/material";

const Header = () => {
  return (
    <>
      <img
        src="https://logos-marcas.com/wp-content/uploads/2020/08/Bitcoin-Logo.png"
        alt="Logo Bitcoin"
        style={{ width: "250px", textAlign: "center", marginTop: "50px" }}
      />
      <Typography color="white" variant="h3" sx={{ mt: 2, mb: 2 }}>
        Listado de Criptomonedas
      </Typography>
    </>
  );
};

export default Header;
