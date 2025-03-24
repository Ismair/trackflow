const express = require("express");
const app = express();
app.use(express.json());

app.post("/api/tracking", (req, res) => {
    console.log("Dados recebidos:", req.body);
    res.json({ message: "Tracking recebido!" });
});

app.listen(5000, () => console.log("API rodando na porta 5000"));
