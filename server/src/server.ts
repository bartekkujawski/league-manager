import express, { type Express, type Request, type Response } from "express"

const app: Express = express()
const port = Number(process.env.PORT || 3000)
if (!Number.isInteger(port) || port < 1 || port > 65535) {
  console.error(`Invalid PORT: ${process.env.PORT}`)
  process.exit(1)
}

app.get("/health", (req: Request, res: Response) => {
  return res.status(200).json({ status: "ok" })
})

app.use((req: Request, res: Response) => {
  res.status(404).json({
    error: {
      code: "NOT_FOUND",
      message: `Route ${req.method} ${req.path} not found`,
    },
  })
})

app.listen(port, () => {
  console.log(`App listening on port ${port}`)
})
