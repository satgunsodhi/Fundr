import express from "express";
import path from "path";

const app = express();
const PORT = Number(process.env.PORT) || 5000;

const _dirname = path.resolve();

app.use(express.json());

app.use(express.static(path.join(_dirname, "/dist")));

app.get("/", (req, res) => {
    res.sendFile(path.resolve(_dirname, "dist", "index.html"));
})

app.listen(PORT, () => {
    console.log("Server Started at http://localhost:" + PORT);
})