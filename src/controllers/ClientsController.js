const Clients = require("../models/usersModel");

module.exports = {

    async read(req, res) {
        const { id } = req.params;
        const clientsList = await Clients.find({ _id: id });
        const allClients = await Clients.find();

        if(!id) {
            return res.json(allClients);
        }

        if (clientsList.length == 0) {
            return res.json({message: "Usuário não encontrado!"});
        };

        return res.json(clientsList);
    },
};
