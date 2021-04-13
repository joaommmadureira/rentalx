import express from "express";

const app = express();

app.get("/", (request, response) => {
    return response.json({ message: "Teste 2" });
});

app.listen(3333, () => console.log("Teste 1"));
