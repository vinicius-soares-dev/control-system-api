const Login = require("../models/loginModel");

module.exports = {
    async read(req, res) {
        const { email } = req.body;
        const emailList = await Login.find({ email: email });

        if( emailList.length == 0 ) {
            return res.json({ message: "Não existe um usuário com esse e-mail"});
        };


        return res.json(emailList);
    },

    async create(req, res) {
        const { email, password } = req.body;
        const created = await Login.create({
            email,
            password
        });

        return res.status(200).json(created);
    },
};