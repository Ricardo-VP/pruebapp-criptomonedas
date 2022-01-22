const criptomonedas = [];
let nextId = 0;

function list() {
  return criptomonedas;
}

function create(nombre, usd) {
  const criptomoneda = {
    id: nextId,
    nombre,
    usd,
  };
  nextId++;
  criptomonedas.push(criptomoneda);
  return criptomonedas;
}

function _delete(id) {
  const index = criptomonedas.findIndex(
    (criptomoneda) => criptomoneda.id == id
  );
  if (index >= 0) {
    criptomonedas.splice(index, 1);
  }
}

module.exports = {
  list,
  create,
  _delete,
};
