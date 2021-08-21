import { Document, Collection } from "mongodb"

export const COLLECTION_NAME = "topics"

export default interface Topic extends Document {
  title: string
  creator: string
  date_created: string
  text?: string
}
