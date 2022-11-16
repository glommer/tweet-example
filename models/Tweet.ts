import { ChiselEntity } from "@chiselstrike/api"

export class Tweet extends ChiselEntity {
  createdAt: Date = new Date()
  author: string
  tweet: string
  replyTo?: string
}
