const router = require('express').Router();
const bcrypt = require('bcryptjs');
const User = require('../models/User')


router.post('/signup', (req, res, next) => {
        const {name, password} = req.body;
        if(password === '' || name === ''){
            res.status(400).json({message: 'Provide name and password'})
            return
        };
        if (password.length < 4){
            res.status(400).json({message: 'Password has be 4 charactes minimum'})
        };
        User.findOne({ name })
                .then(foundUser => {
                   if(foundUser){
                       res.status(400).json({message: 'User already exists'})
                       return
                   }
                   const salt = bcrypt.genSaltSync();
                   const hashedPassword = bcrypt.hashSync(password, salt);

                   return User.create({name, password: hashedPassword})
                            .then(createdUser => {
                                const { name, _id } = createdUser;
                                const user = { name, _id }
                                console.log(user)
                                res.status(201).json({ user: user })
                            })
                            .catch(err => {
                                console.log(err);
                                res.status(500).json({ message: 'Internal Server Error' })
                            })
                })

});

module.exports = router;