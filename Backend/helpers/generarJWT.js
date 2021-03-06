const jwt = require('jsonwebtoken')
require('dotenv').config()

const generarJWT = (uid = '', pk='' , email='' , firstname= '' , lastname='') => {
    return new Promise((resolve, reject) => {

        //verificar solo el uid
        const payload = { uid  , pk , email , firstname , lastname};
        jwt.sign(payload, 'secretkey', {
            expiresIn: '24h'
        }, (err, token) => {
            if (err) {
                console.log(err);
                reject('No se pudo generar el token')
            } else {
                resolve(token)
            }

        })

    })
}



module.exports = {
    generarJWT
}