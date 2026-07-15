import { expect, test } from 'vitest'
import { AnswerQuestionUseCase } from './answer-question.js'
import { AnswerRepository } from '../repositories/answer-repository.js'

const fakeAnswersRepository: AnswerRepository = {
  async create(answer) {
    return
  },
}

test('create an answer', async () => {
  const answerQuestion = new AnswerQuestionUseCase(fakeAnswersRepository)

  const answer = await answerQuestion.execute({
    content: 'Nova resposta',
    instructorId: '1',
    questionId: '1'
  })

  expect(answer.content).toEqual('Nova resposta')
})