import { Hono } from "hono"
import { draw } from "./lottery"

const app = new Hono()

app.get("/api/result", (c) => {
  const ticket = c.req.query("ticket")
  if (!ticket) {
    return c.json({ error: "ticket required" }, 400)
  }

  const result = draw(ticket)

  return c.json({
    result,
    year: "馬年",
  })
})

export default app
