export async function obtenerCriptomonedas() {
  const response = await fetch("http://localhost:4000/crypto", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
  const data = await response.json();
  return data;
}

export async function crearCriptomoneda( criptomoneda ) {
  const response = await fetch("http://localhost:4000/crypto", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      nombre: criptomoneda.nombre,
      usd: criptomoneda.usd,
    }),
  });
  const data = await response.json();
  return data;
}
