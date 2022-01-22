const rutasCriptomonedas = require('./criptomonedas/routes');

const router = require('express').Router();

router.use("/crypto", rutasCriptomonedas);

module.exports = router;