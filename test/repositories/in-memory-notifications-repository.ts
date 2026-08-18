import { Question } from '@/domain/forum/enterprise/entities/question.js'
import { NotificationsRepository } from '@/domain/notification/application/repositories/notifications-repository.js'
import { Notification } from '@/domain/notification/enterprise/entities/notification.js'

export class InMemoryNotificationRepository implements NotificationsRepository {
  public items: Notification[] = []

  async create(notification: Notification) {
    this.items.push(notification)
  }
}