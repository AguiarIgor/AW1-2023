import express from "express";
import { db } from "../db.js";
import { buscaUsuario, salvaUsuario, alteraUsuario, deletaUsuario } from "../controllers/userController.js";

const rotas = express.Router();

rotas.get("/", /*ou buscaUsuario */ (req, res) => {
    const query = "SELECT * FROM Usuario;";

    db.query(query, (error, data) => {
        if(error) return res.json(error)
        return res.json(data).status(200);
    }) //Pode ser escrita dentro ou receber uma variável com a String;
});
rotas.post("/", /*ou salvaUsuario */ (req, res) => {
    const query = "INSERT INTO Usuario(`nome`) VALUES (?);";

    db.query(query, req.body.nome, (error, data) => {
        if(error) return res.json(error)
        return res.json("Usuário Cadastrado!").status(200);
    })
});

rotas.put("/:id", /*ou alteraUsuario */ (req, res) => {
    const query = "UPDATE Usuario SET nome = ? WHERE id = ?";

    const valores = [
        req.body.nome,
        req.params.id
    ]

    db.query(query, [...valores], (error, data) => {
        if(error) return res.json(error)
        return res.json("Usuário Alterado!").status(200);
    })
});

rotas.delete("/:id", /*ou deletaUsuario */ (req, res) => {
    const query = "DELETE FROM Usuario WHERE id = ?";

    db.query(query, req.params.id, (error, data) => {
        if(error) return res.json(error)
        return res.json("Usuário Deletado!").status(200);
    })
});

export default rotas;