const Clients = require("../models/usersModel");

module.exports = {

    async read(req, res) {
        const { username } = req.body;
        const usernameList = await Clients.find({ username: username });

        if (usernameList.length == 0) {
            return res.json({ message: "Não existe usuário com esse nome."});
        };

        return res.json(usernameList)
    },
    
    async create(req, res) {
        const { username, 
            email, 
            tel, 
            address,
            description,
            tittle,
            nextVisit
        } = req.body;

        const clientsLists = await Clients.find({
            username: username,
            email: email
        });

        if (clientsLists.length > 0) {
            return res.json({
                message: "Já existe um cliente com essas informações"
            });
        }

        const created = await Clients.create({
            username,
            email,
            tel,
            address,
            description,
            tittle,
            nextVisit
        });
        

        return res.status(200).json(created);
    }
}