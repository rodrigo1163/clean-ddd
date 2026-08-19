import { makeAnswer } from "../../../../../test/factories/make-answers.js"
import { InMemoryAnswerAttachmentsRepository } from "../../../../../test/repositories/in-memory-answer-attachments-repository.js"
import { InMemoryAnswersRepository } from "../../../../../test/repositories/in-memory-answers-repository.js"
import { OnAnswerCreated } from "./on-asnwer-created.js"

let inMemoryAnswerAttachmentsRepository: InMemoryAnswerAttachmentsRepository
let inMemoryAnswerRepository: InMemoryAnswersRepository

describe('On Answer Created', () => {
  beforeEach(() => {
    inMemoryAnswerAttachmentsRepository = new InMemoryAnswerAttachmentsRepository()
    inMemoryAnswerRepository = new InMemoryAnswersRepository(inMemoryAnswerAttachmentsRepository)
  })

  it('should send a notification when an answer is created', async () => {
    const onAnswerCreated = new OnAnswerCreated()

    const anwer = makeAnswer()

    await inMemoryAnswerRepository.create(anwer)
  })
})