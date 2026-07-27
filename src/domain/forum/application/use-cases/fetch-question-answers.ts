import { Question } from '@/domain/forum/enterprise/entities/question.js'
import { QuestionsRepository } from '../repositories/questions-repository.js'
import { AnswerRepository } from '../repositories/answer-repository.js'
import { Answer } from '../../enterprise/entities/answer.js'

interface FetchQuestionAnswersUseCaseRequest {
  questionId: string
  page: number
}

interface FetchQuestionAnswersUseCaseResponse {
  answers: Answer[]
}

export class FetchQuestionAnswersUseCase {
  constructor(private answersRepository: AnswerRepository) { }

  async execute({
    page,
    questionId
  }: FetchQuestionAnswersUseCaseRequest): Promise<FetchQuestionAnswersUseCaseResponse> {
    const answers = await this.answersRepository.findManyByQuestionId(
      questionId,
      { page }
    )

    return {
      answers,
    }
  }
}