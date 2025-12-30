export type LotteryResult =
  | {
      type: "win"
      winTitle?: string
      prize: string
      prizeUrl?: string
      comment?: string
    }
  | {
      type: "lose"
      message: string
      comment?: string
    }
