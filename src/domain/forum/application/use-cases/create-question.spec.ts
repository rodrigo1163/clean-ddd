import { AnswerQuestionUseCase } from './answer-question.js'
import { AnswerRepository } from '../repositories/answer-repository.js'
import { QuestionsRepository } from '../repositories/questions-repository.js'
import { Question } from '../../enterprise/entities/question.js'
import { CreateQuestionUseCase } from './create-question.js'
const fakeQuestionsRepository: QuestionsRepository = {
  async create(question: Question) {
    return
  },
}

test('create a question', async () => {
  const createQuestion = new CreateQuestionUseCase(fakeQuestionsRepository)

  const { question } = await createQuestion.execute({
    authorId: '1',
    content: 'Conteúdo da pergunta',
    title: 'Nova pergunta'
  })

  expect(question.id).toBeTruthy()
})
