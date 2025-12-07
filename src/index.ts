import express from "express"

const app = express()
const port = process.env.PORT || 3000

app.get("/", (req, res) => {
    res.send("Hello Typescript World!, Something is changed")
})

app.get("/health", (req, res) => {
    res.send("OK")
})

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`)
})

