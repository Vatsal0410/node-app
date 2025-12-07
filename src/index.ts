import express from "express"

const app = express()
const port = process.env.PORT || 3000

app.get("/", (req, res) => {
    res.send("Hello Typescript World!, Something is changed")
})

app.get("/new", (req, res) => {
    res.send("new route added")
})

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`)
})

