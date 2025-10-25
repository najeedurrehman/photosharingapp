import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";

import errorHandlerMiddleware from "./middleware/errorHandlerMiddleware.mjs";

import routing from "./router/router.mjs";

const { ROLE } = routing;
const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(cookieParser());

/* ROUTING IMPLEMENTS */

app.use("/api/role", ROLE);
app.use(errorHandlerMiddleware);

export default app;
