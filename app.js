import express from "express";

import { createPool } from "mysql2/promise";

 

const pool=createPool({

    user:'root',

    password:'4weFx47i8WpBhe3mGndF',

    host:'containers-us-west-119.railway.app',

    port:5619,

    database:'railway'

})

const app=express()

 

app.get('/',(req,res)=>{

  res.send("Bienvenido a este servidor..")      

})

 

app.get('/usuarios',async (req,res)=>{

    const [result]=await pool.query('select * from usuario')

    res.json(result)      

  })

 

  app.get('/agregarusuario',async (req,res)=>{

    const nombre=req.query.nombre

    const contrasena=req.query.contrasena

    const correo=req.query.correo

    const tienda=req.query.tienda  

    const [result]=await pool.query(`INSERT INTO usuarios (nombre, contrasena, correo, tienda) VALUES ('${nombre}', '${contrasena}', '${correo}','${tienda}')`)

    res.json(result[0])      

  })

 

app.listen(process.env.PORT || 3000)

console.log("Servidor corriendo en el puerto 3000")