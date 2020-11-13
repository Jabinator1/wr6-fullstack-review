module.exports = {
    getPosts: async (req, res) => {
        const db = req.app.get('db')
        
        const posts = await db.get_posts()
        res.status(200).send(posts)
    },
    getPost: async (req, res) => {
        const db = req.app.get('db')
        const {id} = req.params
        
        const [post] = await db.get_post(id)
        res.status(200).send(post)
    },
    addPost: async (req, res) => {
        const db = req.app.get('db')
        const {img, speciesName, location, userId} = req.body

        try {
            await db.add_post([img, speciesName, location, userId])
            res.sendStatus(200)
        } catch (err) {
            console.log(err)
            res.status(300).send("Error uploading")
        }

    },
}