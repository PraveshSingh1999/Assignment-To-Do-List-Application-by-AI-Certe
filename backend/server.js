import express from "express"
import cors from "cors"
import taskRouter from "./routes/todo.routes.js"

const app = express()

// middleware
app.use(express.json())
app.use(cors())

app.use("/", taskRouter)

const port = process.env.PORT || 5000

app.listen(port, ()=>{
    console.log(`server is running at http://localhost:${port}`)
})

