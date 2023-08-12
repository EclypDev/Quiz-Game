import Express from "express";
import Morgan from "morgan";
import BodyParser from "body-parser";
import route from "./routes.js";
import Path from "path";
import { fileURLToPath } from "url";

// Utils
const __filename = fileURLToPath(import.meta.url);
const __dirname = Path.dirname(__filename);

const APP = Express();

//PATHS
const staticFilePath = Path.join(__dirname, "../web");

//SETTINGS
const PORT = process.env.PORT || 3000;

//MIDDLEWARES
APP.use(Morgan("dev"));
APP.use(BodyParser.json());

//STATIC FILES
APP.use(Express.static(staticFilePath));

//ROUTES
APP.use(route);

//LISTENING
APP.listen(PORT, () => {
    console.log(`Server Running in PORT: ${PORT}`);
});
