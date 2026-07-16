import { randomUUID } from "node:crypto"
import { Slug } from "./value-objects/slug.js"
import { Entity } from "../../core/entities/entity.js"

interface QuestionProps {
  title: string
  content: string
  slug: Slug
  authorId: string,
}

export class Question extends Entity<QuestionProps> { }