require('dotenv').config();

const express = require("express");
const v1WorkoutRouter = require("./v1/routes/workoutRoutes");
const mongoose = require('mongoose'); 
//para agregar mas rutas es solo agregar por ejemplo
//const v2Router = require("./v2/routes")
// const cors = require("cors")

const app = express( );
const PORT = process.env.PORT || 3000;

mongoose.set('strictQuery', true);

mongoose.connect(`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@apirest.oandxng.mongodb.net/Santander`)
    .then(() => console.log ("Connected successfully"))
    .catch ((err) => console.error(err));

app.use(express.json());
// app.use(cors());

app.use("/api/v1/workouts", v1WorkoutRouter)

//Entonces aqui tambien debo decir de donde tomar esa ruta por ejemplo
//app.use("/api/v2", v2Router)

app.listen(PORT, ( ) => { 
    console.log(`Server listening on port ${PORT}`)});