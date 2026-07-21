import { UniqueEntityId } from "@/core/entities/unique-entity-id.js"
import { Answer } from "../../enterprise/entities/answer.js"
import { AnswerRepository } from "../repositories/answer-repository.js"

interface AnswerQuestionUseCaseRequest {
  instructorId: string
  questionId: string
  content: string
}

export class AnswerQuestionUseCase {
  constructor(private answerRepository: AnswerRepository) { }

  async execute({ instructorId, questionId, content }: AnswerQuestionUseCaseRequest) {
    const answer = Answer.create({
      content,
      authorId: new UniqueEntityId(instructorId),
      questionId: new UniqueEntityId(questionId)
    })

    await this.answerRepository.create(answer)

    return answer
  }
}