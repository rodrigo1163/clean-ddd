import { Either, left, right } from "@/core/either.js"
import { Question } from "../../enterprise/entities/question.js"
import { QuestionsRepository } from "../repositories/questions-repository.js"
import { ResourceNotFoundError } from "./errors/resource-not-found-error.js"
import { NotAllowedError } from "./errors/not-allowed-error.js"

interface EditQuestionUseCaseRequest {
  authorId: string
  questionId: string
  title: string
  content: string
}

type EditQuestionUseCaseResponse = Either<
  ResourceNotFoundError | NotAllowedError,
  {
    question: Question
  }
>

export class EditQuestionUseCase {
  constructor(private questionsRepository: QuestionsRepository) { }

  async execute({
    authorId,
    content,
    title,
    questionId
  }: EditQuestionUseCaseRequest): Promise<EditQuestionUseCaseResponse> {
    const question = await this.questionsRepository.findById(questionId)

    if (!question) {
      return left(new ResourceNotFoundError())
    }

    if (authorId !== question.authorId.toString()) {
      return left(new NotAllowedError())
    }

    question.title = title
    question.content = content

    await this.questionsRepository.save(question)

    return right({
      question
    })
  }
}