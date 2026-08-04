import { Question } from '@/domain/forum/enterprise/entities/question.js'
import { QuestionsRepository } from '../repositories/questions-repository.js'
import { AnswersRepository } from '../repositories/answers-repository.js'
import { Answer } from '../../enterprise/entities/answer.js'
import { Either, right } from '@/core/either.js'

interface FetchQuestionAnswersUseCaseRequest {
  questionId: string
  page: number
}

type FetchQuestionAnswersUseCaseResponse = Either<
  null,
  {
    answers: Answer[]
  }
>

export class FetchQuestionAnswersUseCase {
  constructor(private answersRepository: AnswersRepository) { }

  async execute({
    page,
    questionId
  }: FetchQuestionAnswersUseCaseRequest): Promise<FetchQuestionAnswersUseCaseResponse> {
    const answers = await this.answersRepository.findManyByQuestionId(
      questionId,
      { page }
    )

    return right(
      {
        answers,
      }
    )
  }
}