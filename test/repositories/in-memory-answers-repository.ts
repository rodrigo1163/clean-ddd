import { Answer } from "@/domain/forum/enterprise/entities/answer.js"

import { AnswersRepository as AnswersRepository } from '@/domain/forum/application/repositories/answers-repository.js'
import { PaginationParams } from "@/core/repositories/pagination-params.js"


export class InMemoryAnswersRepository implements AnswersRepository {
  public items: Answer[] = []

  async create(answer: Answer) {
    this.items.push(answer)
  }
  async findById(id: string) {
    const answer = this.items.find((item) => item.id.toString() === id)

    if (!answer) {
      return null
    }

    return answer
  }
  async delete(answer: Answer) {
    const itemIndex = this.items.findIndex(item => item.id === answer.id)

    this.items.splice(itemIndex, 1)
  }
  async save(answer: Answer) {
    const itemIndex = this.items.findIndex(item => item.id === answer.id)
    this.items[itemIndex] = answer
  }
  async findManyByQuestionId(questionId: string, { page }: PaginationParams) {
    const answers = this.items
      .filter(item => item.questionId.toString() === questionId)
      .slice((page - 1) * 20, page * 20)

    return answers
  }
}