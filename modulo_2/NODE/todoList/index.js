const express = require('express')
const run = require('./consultas')


const app = express()
const port = 3000

// async function run() {
//     const connection = await oracledb.getConnection(dbConfig)
//     const result = await connection.execute(
    
//     )
//     console.log(result.rows)
//     await connection.close()
// }

// module.exports = run

//POSTMAN 

  
// app.use(express.urlencoded({extend: true}))
// app.get('/',async (req, res) => {
//   let result = await run(`Select 'Hola' AS saludo, :id AS id
//     FROM dual

//     UNION
    
//     SELECT 'Hola' AS saludo, 109 AS id 
//     FROM dual`,[103])
//     res.send(result)
// })

app.get('/api/user', async (req, res) =>{
  // console.log(req.query);
  let result = await run(`SELECT id, name_user, password
    FROM users_todolist
    WHERE id = :id`,[req.query.id]);
  res.send(result)
})

app.post('/api/user', async (req, res) =>{
  console.log(req.body)
  let result = await run(
    `BEGIN
      INSERT INTO users_todoList VALUES(:id, :user_name, :password); COMMIT;
    END;`,
    [req.body.id, req.body.name_user, req.body.password]
  );
  res.send(result)
})

// app.get('/', (req, res) => {
//   res.send('Hello World!')
// })



//   run(`SELECT 'Hola' AS saludo, :id AS id
//     FROM dual
    
//     UNION
    
//     SELECT 'Hola' AS saludo, 107 AS id 
//     FROM dual`,
//     [103],
//     run(`SELECT 'Hola' AS saludo, :id AS id
//     FROM dual
    
//     UNION
    
//     SELECT 'Hola' AS saludo, 109 AS id 
//     FROM dual`,
//     [105],
//     run(`SELECT 'Hola' AS saludo, :id AS id
//     FROM dual
    
//     UNION
    
//     SELECT 'Hola' AS saludo, 108 AS id 
//     FROM dual`,
//     [107],))
// )

// })

app.put('/api/user', async (req, res) =>{
  let result = await run(
    `BEGIN
      UPDATE users_todoList
      SET name_user = :name_user, password = :password
      WHERE id = :id;
      COMMIT;
    END;`,
    [req.body.name_user,req.body.password,req.body.id]
  );
  res.send(result)
})

app.patch('/api/user', async (req, res) =>{
  let result = await run(
    `BEGIN
      UPDATE users_todoList
        SET name_user = :name_user
      WHERE id = :id;
      COMMIT;
    END;`,
    [req.body.name_user,req.body.id_user]
  );
  res.send(result)
})

app.delete('/api/user', async (req, res) =>{
  let result = await run(
    `BEGIN
      DELETE FROM users_todoList
      WHERE id = :id;
      COMMIT;
    END;`,
    [req.query.id]
  );
  res.send(result)
})

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`)
})
