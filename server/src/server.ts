import express, { type Express, type Request, type Response } from "express"

const app: Express = express()
const PORT = 3000

app.get("/health", (req: Request, res: Response) => {
  return res.status(200).json({ status: "ok" })
})

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`)
})
