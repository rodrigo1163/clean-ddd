import { AnswerRepository } from "../repositories/answer-repository.js"

interface EditAnswerUseCaseRequest {
  authorId: string
  answerId: string
  content: string
}

export class EditAnswerUseCase {
  constructor(private answersRepository: AnswerRepository) { }

  async execute({
    authorId,
    content,
    answerId
  }: EditAnswerUseCaseRequest): Promise<void> {
    const answer = await this.answersRepository.findById(answerId)

    if (!answer) {
      throw new Error('Answer not found.')
    }

    if (authorId !== answer.authorId.toString()) {
      throw new Error('Not allowed.')
    }

    answer.content = content

    await this.answersRepository.save(answer)
  }
}