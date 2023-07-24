const Login = require("../models/loginModel");
const jwt = require("jsonwebtoken");

module.exports = {
    async read(req, res) {
        const { email, password } = req.body;
        const emailList = await Login.find({ email: email });
        const passwordList = await Login.find({ password: password });
        const idUser = '64b1cd9a9365ff0eb1dfed2c';
        
        if(emailList.length == 0) {
            return res.json({ message: "Email inválido"});
        }
        
        if(passwordList.length == 0) {
            return res.json({ message: "Senha inválida"});
        };

        if(emailList && passwordList) {
            const id = await Login.find({ _id: idUser});
            const token = jwt.sign({ id }, process.env.SECRET, {
                expiresIn: 300 //expires in 5min
            });


           
            return res.json({ auth: true, token: token });
        }
        
    },
    

    
};
