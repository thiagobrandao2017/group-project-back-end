const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

let AuthService = {};

AuthService.restrict = (req, res, next) => {
    //Retrieve the JWT somehow
    //Verify JWT token
    //IF verified, next()
    //IF NOT verified, send 401 status

    if (!req.headers["authorization"]) {
        return res
        .status(401)
        .json({error: "Please provide a valid JWT"});
    }

    const userData = jwt.verify(req.headers["authorization"], process.env.SECRET_KEY);

    if (userData) {
        //Attach user to request object from JWT token
        req.user = userData;

        next();
    } else {
        res
        .status(401)
        .json({error: "Invalid JWT token"});
    }
}

AuthService.authenticate = (user, req) => {
  return new Promise((resolve, reject) => {
    if (user) {
        //Continue auth
        if (bcrypt.compareSync(req.body.user.password, user.password)) {
            //Success! User is authenticated

            //Make sure password is not saved to JWT
            user.password = null;

            //Create signed token with serialized user data
            const token = jwt.sign(user, process.env.SECRET_KEY, {
                expiresIn: "7d"
            });

            //Send the JWT as a response
            // res
            // .status(201)
            // .json({token: token, user: user});
            resolve({token: token, user: user});
        } else {
            //User is not authenticated
            // res
            // .status(401)
            // .json({error: "Not authorized"});
            reject({error: "Not authorized", status: 401});
        }
    } else {
        // res
        // .status(404)
        // .json({error: "User not found by that email"});
        reject({error: "User not found by that email", status: 404});
    }
  });
}

module.exports = AuthService;
