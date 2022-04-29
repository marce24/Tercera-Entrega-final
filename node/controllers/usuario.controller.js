const Usuario = require('../models/usuario')
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const authConfig = require('../infra/auth');


async function addUser(req, res) {
    console.log(req.body)
    let password = bcrypt.hashSync(req.body.password, Number.parseInt(authConfig.rounds));
    await Usuario.create({
        nombre: req.body.nombre,
        apellido: req.body.apellido,
        email: req.body.email,
        password: password,
        rol: req.body.rol,
    }).then(usuario => {
        return res.sendStatus(200).json
    }).catch(err => {
        return res.status(500).json(err);
    });

};

async function updateUser(req, res) {
    let user = req.body;
    await Usuario.update(user, { where: { id: req.params.id } })
    res.send({ message: 'Se ha actualizado el usuario', Usuario: await Usuario.findOne({ user, where: { id: req.params.id } }) });
};

async function deleteUser(req, res) {
    await Usuario.destroy({ where: { id: req.params.id } })
    res.send({ message: 'Se ha eliminado exitosamente el usuario' });
};

async function getUser(req, res) {
    res.send(await Usuario.findAll());
};

async function getUserById(req, res) {
    res.send(await Usuario.findByPk(req.params.id));
};

async function logIn(req, res) {
    let { email, password } = req.body;

    Usuario.findOne({
        where: {
            email: email
        }
    }).then(usuario => {
        if (!usuario) {
            res.status(401).json({
                msg: "El usuario ingresado no existe"
            });
        } else {
            if (bcrypt.compareSync(password, usuario.password)) {
                let token = jwt.sign({
                    id: usuario.id,
                    email: usuario.email,
                    rol: usuario.rol
                },
                    authConfig.secret,
                    {
                        expiresIn: authConfig.expires,
                    });
/*                 return res.status(200).json({
                    msg: "Usuario correctamente idetificado",
                    data: token
                }) */
                return res.json({ data: 'login exitoso', token });


            } else {
                res.status(400).json({
                    msg: "Contraseña incorrecta"
                })
            }
        }

    }).catch(err => {
        res.status(500).json(err);
    })
};


module.exports = {
    addUser,
    updateUser,
    deleteUser,
    getUser,
    getUserById,
    logIn
}