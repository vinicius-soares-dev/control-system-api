const Validation = (req, res, next) => {

    const { username, 
        email, 
        tel, 
        address,
        tittle,
        nextVisit
    } = req.body;
    
    if(username.length == 0 || email.length == 0) {
        return res.status(400).json({ message: "Informações incompletas, verifique o nome e a senha."});
    }

    if(tel.length == 0 || address.length == 0) {
        return res.status(400).json({ message: "Informações de contato estão incompletas!"});
    }

    if(tittle.length == 0) {
        return res.status(400).json({ message: "Informe um título válido."});
    }

    if(nextVisit.length == 0) {
        return res.status(400).json({ message: "Você deve informar a data de uma próxima visita."});
    }

    if(email.includes(".com") == false || email.includes("@") == false) {
        return res.status(400).json({ message: "O email informado é inválido!"});
    }

    next();
}

module.exports = Validation;

