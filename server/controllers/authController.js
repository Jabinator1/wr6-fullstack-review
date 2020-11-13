const bcrypt = require('bcrypt')

module.exports = {
    register: async (req, res) => {
        const db = req.app.get('db')
        const {email, username, password} = req.body

        const [checkUser] = await db.check_user(email)

        if (checkUser) {
            return res.status(400).send("Email already in use")
        }

        const salt = bcrypt.genSaltSync(10)
        const hash = bcrypt.hashSync(password, salt)

        const [newUser] = await db.add_user([email, username, hash])
        req.session.user = {
            userId: newUser.user_id,
            email: newUser.email,
            username: newUser.username
        }
        res.status(200).send(req.session.user)
    },
    login: async (req, res) => {
        const db = req.app.get('db')
        const {email, password} = req.body

        const [checkUser] = await db.check_user(email)

        if (!checkUser) {
            return res.status(400).send("Invalid email/password")
        }
        
        const authenticated = bcrypt.compareSync(password, checkUser.password)

        if (authenticated) {
            req.session.user = {
                userId: checkUser.user_id,
                email: checkUser.email,
                username: checkUser.username
            }

            res.status(200).send(req.session.user)
        } else {
            res.status(401).send("Invalid email/password")
        }
    },
    logout: (req, res) => {
        res.session.destroy()
        res.sendStatus(200)
    },
    getUser: (req, res) => {
        req.session.user ? res.status(200).send(req.session.user)
        : res.status(404).send("Please log in")
    },
}