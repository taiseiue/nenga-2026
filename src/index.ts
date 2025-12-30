import { Hono } from "hono"
import type { LotteryResult } from "./lottery"

type Bindings = {
  TICKET_RESULTS: KVNamespace
}

const app = new Hono<{ Bindings: Bindings }>()

app.get("/api/result", async (c) => {
  const ticket = c.req.query("ticket")
  if (!ticket) {
    return c.json({ error: "ticket required" }, 400)
  }

  const stored = await c.env.TICKET_RESULTS.get(`ticket:${ticket}`)
  if (!stored) {
    return c.json({ error: "ticket not found" }, 404)
  }

  let result: LotteryResult
  try {
    result = JSON.parse(stored) as LotteryResult
  } catch (err) {
    console.error("Failed to parse stored result", err)
    return c.json({ error: "invalid result data" }, 500)
  }

  return c.json({
    result,
    year: "馬年",
  })
})

export default app
