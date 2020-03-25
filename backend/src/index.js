const express = require('express')
const cors = require('cors');
const routes = require('./routes')
const app = express()

app.use(cors());
app.use(express.json())
app.use(routes)


/**
 * METODOS HTTP
 * 
 * GET - BUSCAR/LISTAR INFORMACAO
 * POST - CRIAR UMA INFORMACAO
 * PUT - ALTERAR UMA INFORMACAO
 * DELETE - DELETAR UMA INFORMACAO
 */

/**
 * TIPOS DE PARAMETROS
 * 
 * QUERY ; - Parametro nomeado enviados na rota
 * Route - :id
 * body - corpo da requisicao 
 */

/**
 * Conexoes 
 * 
 * Driver: SELECT * FROM users
 * QueryBuilder: table('users').select('*').where() - serve para qualquer sql
 */



app.listen(3333)