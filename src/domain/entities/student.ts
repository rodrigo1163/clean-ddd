import { randomUUID } from "node:crypto"
import { Entity } from "../../core/entities/entity.js"

interface StudentProps {
  name: string
}

export class Student extends Entity<StudentProps> { }