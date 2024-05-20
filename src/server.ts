import express from "express";
import "dotenv/config";
import http from "http";
import bodyParser from "body-parser";
import cors from "cors";
import * as swaggerDocument from "./swagger.json";
import swaggerUi from "swagger-ui-express";
import { routes } from "./api";
import { prisma } from "./external/database";
import request from 'supertest';

const app = express();

app.use(bodyParser.json({ limit: "50mb" }));
app.use(bodyParser.urlencoded({ limit: "50mb", extended: true }));
app.use(express.json());
app.use("/swagger", swaggerUi.serve, swaggerUi.setup(swaggerDocument));
app.use(cors());

new routes(app, prisma);

const server = http.createServer(app);

server.listen(process.env.PORT || 3000, () => {
    console.log(`RUNNING ON PORT ${process.env.PORT || 3000}`);
});

export default request(app);