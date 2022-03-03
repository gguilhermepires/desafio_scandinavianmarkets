
var express = require('express');
var router = express.Router();
const UsuarioDominio = require('../dominio/usuarioDominio');
router.get('/', function (req, res) {
  res.send('Wiki home page');
});

router.post('/login', async function  (req, res)  {
  try{
    console.log(req.body);
    res.json(await UsuarioDominio.login(req.body));
  }catch(e){
    res.status(500).json(`Erro:${e}`);
  }
});

module.exports = router;