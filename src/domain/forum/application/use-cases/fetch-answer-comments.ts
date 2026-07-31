import { AnswerComment } from '../../enterprise/entities/answer-comment.js'
import { AnswerCommentsRepository } from '../repositories/answer-comments-repository.js'

interface FetchAnswerCommentsUseCaseRequest {
  answerId: string
  page: number
}

interface FetchAnswerCommentsUseCaseResponse {
  answerComments: AnswerComment[]
}

export class FetchAnswerCommentsUseCase {
  constructor(private answerCommentsRepository: AnswerCommentsRepository) { }

  async execute({
    page,
    answerId
  }: FetchAnswerCommentsUseCaseRequest): Promise<FetchAnswerCommentsUseCaseResponse> {
    const answerComments = await this.answerCommentsRepository.findManyByAnswerId(
      answerId,
      { page }
    )

    return {
      answerComments,
    }
  }
}