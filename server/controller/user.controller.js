const User = require("../models/userDetails.models");
const CryptoJS = require("crypto-js");
const jwt = require("jsonwebtoken");



const signupUser = async (req, res) => {
    const newRegistedUser = new User({
        name: req.body.name,
        email: req.body.email,
        phone: req.body.phone,
        password: CryptoJS.AES.encrypt(req.body.password, process.env.CRYPTO_PASS).toString(),

    });
    try {
        const registedUser = await newRegistedUser.save();
        res.status(200).send(registedUser)
    }
    catch (err) {
        res.status(500).send(err)
    }
};



const loginUser = async (req, res) => {
    try {
        const userLogin = await User.findOne({ email: req.body.email }) || await User.findOne({ phone: req.body.phone });

        console.log(userLogin)

        if (!userLogin) {
            res.status(401).send("Wrong Credentials..!");
        }


        //decrypt password using cryptoJS
        const decryptPassword = CryptoJS.AES.decrypt(userLogin.password, process.env.CRYPTO_PASS);

        const userLoginPassword = decryptPassword.toString(CryptoJS.enc.Utf8);

        if (userLoginPassword !== req.body.password) {
            res.status(401).send("Wrong Credentials..!");
        }

        //creating accessToken using jwt
        const accessToken = jwt.sign(
            {
                id: userLogin._id,
                isAdmin: userLogin.isAdmin

            }, process.env.JWT_SEC_KEY,

            { expiresIn: "1d" }

        );

        

        res.status(200).send({
            accessToken: accessToken,
            status: true,
            message: "Login Successfull....!",
        })

    } catch (err) {

        res.status(500).send(err)

    }
};





module.exports = { signupUser, loginUser };