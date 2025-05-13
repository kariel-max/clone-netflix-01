import express from "express";
import 'dotenv/config'
import { router } from "./routes";
import path from "path";
import bodyParser from "body-parser";
import cors from 'cors'

const server = express();
server.use(cors({
    origin: 'https://move-dev-5ogn3.ondigitalocean.app', // Apenas essa origem pode acessar
    methods: ['GET', 'POST'], // Métodos permitidos
    allowedHeaders: ['Content-Type', 'Authorization'] // Cabeçalhos permitidos
  }));

server.use(bodyParser.json())
server.use(bodyParser.urlencoded({ extended: true }));
server.use('public', express.static(path.join(__dirname, 'public')))
server.use(express.static('public'))


server.use(router)


export { server };
