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
