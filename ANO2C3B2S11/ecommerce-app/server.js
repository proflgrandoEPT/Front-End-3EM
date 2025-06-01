const express = require('express');

const app = express();

const port = 3000;



// Middleware para servir arquivos estáticos

app.use(express.static('public'));


// Endpoint para exibir produtos

app.get('/products', (req, res) => {

const products = [

{ id: 1, name: 'Produto 1', price: 100 },

{ id: 2, name: 'Produto 2', price: 150 },

{ id: 3, name: 'Produto 3', price: 200 },

];


res.json(products);

});


// Página inicial que exibe os produtos

app.get('/', (req, res) => {

res.send(`

<html>

<head>

<title>E-commerce</title>

</head>

<body>

<h1>Lista de Produtos</h1>

<ul id="products-list"></ul>


<script>

fetch('/products')

.then(response => response.json())

.then(products => {

const list = document.getElementById('products-list');

products.forEach(product => {

const li = document.createElement('li');

li.innerHTML = product.name + ' - R$ ' + product.price + ' <button>Adicionar ao Carrinho</button>';

list.appendChild(li);

});

});

</script>

</body>

</html>

`);

});


// Inicia o servidor

app.listen(port, () => {

console.log(`Servidor rodando em http://localhost:${port}`);

})