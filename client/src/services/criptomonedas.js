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
