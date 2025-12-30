export type LotteryResult =
  | {
      type: "win"
      prize: string
      prizeUrl?: string
      comment?: string
    }
  | {
      type: "lose"
      message: string
      comment?: string
    }

export function draw(ticket: string): LotteryResult {
  // ticketをseedにする（再訪しても同じ結果）
  const hash = [...ticket].reduce((a, c) => a + c.charCodeAt(0), 0)
  const r = hash % 100

  if (r < 5) {
    return { type: "win", prize: "Amazonギフト券 500円" }
  }
  if (r < 30) {
    return { type: "win", prize: "デジタルおみくじ壁紙" }
  }
  return {
    type: "lose",
    message: "今年は堅実運 🐎 ゆっくりでも前進！",
  }
}
