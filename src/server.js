const express = require ("express");
const app= express();
const port =3313;

//middleware para parsear JSON
app.use(express.json());

//Import rutas
const studentRoutes = require("./routes/student.routes");

//rutas
app.use("/api/students",studentRoutes);

app.listen(port, ()=>{
    console.log(`Servidor escuchando en http://localhost:${port}`);
});