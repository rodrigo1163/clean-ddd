import { AnswerCommentsRepository } from "@/domain/forum/application/repositories/answer-comments-repository.js"
import { AnswerComment } from "@/domain/forum/enterprise/entities/answer-comment.js"


export class InMemoryAnswerCommentsRepository
  implements AnswerCommentsRepository {
  public items: AnswerComment[] = []

  async create(answerComment: AnswerComment) {
    this.items.push(answerComment)
  }
  async findById(id: string) {
    const questionAnswer = this.items.find((item) => item.id.toString() === id)

    if (!questionAnswer) {
      return null
    }

    return questionAnswer
  }

  async delete(answerComment: AnswerComment) {
    const itemIndex = this.items.findIndex(item => item.id === answerComment.id)

    this.items.splice(itemIndex, 1)
  }
}