// Carrega o modulo HTTP do Node
const http = require('http')

// Criando servidor
http.createServer(function(req, res) {

    // Configuração do cabeçalho
    res.writeHead(200, {'Content-Type': 'text/plain; charset=utf8'})
    // Manda o corpo da resposta
    res.end('Olá Mundo')

}).listen(8000, 'localhost')

// Imprime um mensagem via console, caso não de erro ao criar servidor
console.log('Servidor listen on port 8000')