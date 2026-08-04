import { UniqueEntityId } from "@/core/entities/unique-entity-id.js"
import { Question } from "../../enterprise/entities/question.js"
import { QuestionsRepository } from "../repositories/questions-repository.js"
import { Either, right } from "@/core/either.js"

interface CreateQuestionUseCaseRequest {
  authorId: string
  title: string
  content: string
}
type CreateQuestionUseCaseResponse = Either<
  null,
  {
    question: Question
  }
>

export class CreateQuestionUseCase {
  constructor(private questionsRepository: QuestionsRepository) { }

  async execute({
    authorId,
    content,
    title
  }: CreateQuestionUseCaseRequest): Promise<CreateQuestionUseCaseResponse> {
    const question = Question.create({
      authorId: new UniqueEntityId(authorId),
      content,
      title
    })

    await this.questionsRepository.create(question)

    return right(
      {
        question
      }
    )
  }
}