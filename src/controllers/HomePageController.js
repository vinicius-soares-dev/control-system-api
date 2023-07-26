const Clients = require("../models/usersModel");

module.exports = {

    async read(req, res) {
        const { username } = req.body;
        const usernameList = await Clients.find({ username: username });
        const allClients = await Clients.find();

        if(!username) {
            return res.json(allClients);
        }

        if (usernameList.length == 0) {
            return res.json({message: "Usuário não encontrado!"});
        };

        return res.json(usernameList);
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
    },

    async delete(req, res) {
        const { id } = req.params;
        const deleted = await Clients.findOneAndRemove({ _id: id });
       
        if(deleted) {
            console.log("Cliente deletado");
            return res.status(200).json(deleted);
        };
        

        return res.status(400).json({ message: "Cliente não encontrado."});

    }
}