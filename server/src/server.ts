import express, {
  type Express,
  type Request,
  type Response,
  type NextFunction,
} from "express"

const app: Express = express()
const PORT = 3000

app.get("/health", (req: Request, res: Response) => {
  return res.status(200).json({ status: "ok" })
})

app.use((req: Request, res: Response, next: NextFunction) => {
  res.status(404).json({
    error: {
      code: "NOT_FOUND",
      message: `Route GET ${req.originalUrl} not found`,
    },
  })
})

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`)
})
