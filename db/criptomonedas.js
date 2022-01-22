const criptomonedas = []
let nextId = 0;

const list = () => {
    return criptomonedas;
}

const create = (nombre, usd) => {
    const criptomoneda = {
        id: nextId,
        nombre,
        usd
    }
    nextId++;
    criptomonedas.push(criptomoneda);
    return criptomonedas;
}

module.exports = {
    list,
    create
}