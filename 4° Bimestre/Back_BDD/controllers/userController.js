export const buscaUsuario = (req, res) => {
    const query = "SELECT * FROM Usuario;";

    db.query(query, (error, data) => {
        if(error) return res.json(error)
        return res.json(data).status(200);
    })
}

export const salvaUsuario = (req, res) => {
    const query = "INSERT INTO Usuario(`nome`) VALUES (?);";

    db.query(query, req.body.nome, (error, data) => {
        if(error) return res.json(error)
        return res.json("Usuário Cadastrado!").status(200);
    })
}


export const alteraUsuario = (req, res) => {
    const query = "UPDATE Usuario SET nome = ? WHERE id = ?";

    const valores = [
        req.body.nome,
        req.params.id
    ]

    db.query(query, [...valores], (error, data) => {
        if(error) return res.json(error)
        return res.json("Usuário Alterado!").status(200);
    })
}


export const deletaUsuario = (req, res) => {
    const query = "DELETE FROM Usuario WHERE id = ?";

    db.query(query, req.params.id, (error, data) => {
        if(error) return res.json(error)
        return res.json("Usuário Deletado!").status(200);
    })
}