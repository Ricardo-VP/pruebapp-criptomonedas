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

const _delete = (id) => {
    criptomonedas.splice(id, 1);
    return criptomonedas;
}

module.exports = {
    list,
    create,
    _delete
}