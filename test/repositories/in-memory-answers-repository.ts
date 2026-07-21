import { Answer } from "@/domain/forum/enterprise/entities/answer.js"

import { AnswerRepository as AnswersRepository } from '@/domain/forum/application/repositories/answer-repository.js'


export class InMemoryAnswersRepository implements AnswersRepository {
  public items: Answer[] = []

  async create(answer: Answer) {
    this.items.push(answer)
  }
}