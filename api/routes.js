import { Router } from "express";
import Path from "path";
import { fileURLToPath } from "url";
import fs from "fs";

// Utils
const __filename = fileURLToPath(import.meta.url);
const __dirname = Path.dirname(__filename);
const dataPath = Path.join(__dirname, "data.json");
const jsonData = fs.readFileSync(dataPath, "utf8");
const data = JSON.parse(jsonData);

const pathWeb = Path.join(__dirname, "../web");
const indexFilePath = Path.join(pathWeb, "index.html");
const statusFilePath = Path.join(pathWeb, "status.html");
const route = Router();

route.get("/", (req, res) => {
    res.sendFile(indexFilePath);
});
route.get("/status", (req, res) => {
    res.sendFile(statusFilePath);
});

route.get("/api/data", (req, res) => {
    res.json(data);
});
export default route;
