const express = require('express')
const mysql = require('mysql')
const cors = require('cors')

const app = express()
app.use(cors())

const db = mysql.createConnection({
    host: "localhost"
    user: 'root',
    password: '',
    database: 'crud'
})

app.get('/', (re, res) => {
    return res.json("From BackEnd Side")
})

app.listen(4000, () => {
    console.log("listening")
})
