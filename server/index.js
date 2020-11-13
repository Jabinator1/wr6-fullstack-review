require('dotenv').config()
const express = require('express')
const massive = require('massive')
const session = require('express-session')
const { register, login, logout, getUser } = require('./controllers/authController')
const { getPosts, addPost, getPost } = require('./controllers/postController')

const app = express()
const {SERVER_PORT, SESSION_SECRET, CONNECTION_STRING} = process.env

app.use(express.json())
app.use(session({
    resave: false,
    saveUninitialized: true,
    secret: SESSION_SECRET,
    cookie: {
        maxAge: 1000 * 60 * 60 * 24 * 7
    }
}))

massive({connectionString: CONNECTION_STRING, ssl: {rejectUnauthorized: false}})
.then(db => { app.set('db', db); console.log('get out of my sWAMP')})
.catch(err => console.log(err))

//# Auth endpoints
app.post("/auth/register", register)
app.post("/auth/login", login)
app.post("/auth/logout", logout)
app.get("/api/user", getUser)

//# Posts endpoints
app.get("/api/posts", getPosts)
app.get("/api/posts/:id", getPost)
app.post("/api/posts", addPost)

app.listen(SERVER_PORT, () => console.log(`Welcome to port ${SERVER_PORT}`))