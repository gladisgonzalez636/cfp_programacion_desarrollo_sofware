const express = require('express')
const run = require('./consultas')

const app = express()
const port = 3000
app.use(express.json());

app.get('./api/calendary', async (req, res) => {
    let result = await run(
    `SELECT id, nombre, fecha, descripcion_tarea, tareas_realizadas, tareas_pendientes  
    FROM calendary
    WHERE id = :id`,[req.query.id]);
    res.send(result)
})

app.listen(port, () => {
    console.log(`Example app listening on port http://localhost:${port}`)
  })