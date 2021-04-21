import express from "express";

import "./database"; // Importing database from database/ folder
import { routes } from "./routes"; // import routes from routes/ folder

const app = express();

app.use(express.json()); // enabling json to be received
app.use(routes); // using all routes from routes/

app.listen(3333, () => console.log("Server is running on port 3333"));