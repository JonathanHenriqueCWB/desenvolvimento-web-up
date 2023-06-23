const jwt = require('jsonwebtoken')
const bcryptjs = require('bcryptjs')
require('dotenv').config()

const secret = process.env.SECRET

async function incluirToken(cliente) {
    const token = await jwt.sign({codigo: cliente.codigo}, secret, {
        expiresIn: 3600 // configurado para expirar em 1hora
    })
    cliente.token = token
    cliente.senha = undefined
}

async function gerarHash(usuario) {
    if (typeof usuario.senha !== 'undefined') {
      const hash = await bcryptjs.hash(usuario.senha, 10);
      usuario.senha = hash;
    }
    return usuario;
  }
  
  function autorizar(req, res, next) {
    const authHeader = req.headers.authorization;
  
    if (!authHeader) {
      return res.status(401).send({ error: 'O token não foi enviado!' });
    }
  
    const partes = authHeader.split(' ');
  
    if (partes && partes.length !== 2) {
      return res.status(401).send({ error: 'Token incompleto!' });
    }
  
    const [tipo, token] = partes;
  
    if (!/^Bearer$/i.test(tipo)) {
      return res.status(401).send({ error: 'Token mal formado!' });
    }
  
    jwt.verify(token, secret, (err, usuario) => {
      if (err) {
        return res.status(401).send({ error: 'Token inválido!' });
      }
      req.usuarioLogadoId = usuario.id;
      return next();
    });
  }
  
  module.exports = {
    gerarHash,
    incluirToken,
    autorizar
  };

  // Utilização do JWT - BACKEND
    // Crie um arquivo auth.js con toda configuração de criação do token
    // Crie um a rota de login e seu controller
    // Ajuste a schema/model para trabalhar com token (apena um campo token)
    // Criar secret no .env

  // AJUSTES
    // no cliente controller chame o auth.incluirToken (no create)
    // no login controller chamar o auth.incluirToken
  
// APOS AS ETAPAS ACIMA BASTA RETRINGIR AS ROTAS QUE QUEIRA RESTRINGIR A LOGIN

// OBS antes de salvar na model o senha esta sendo cripto com bcryptjs
// na controller login será necessario a utilzaão do mesmo para descript senha

