
class User {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
}

const user = new User("Rodrigo", 25);

console.log(user.name); // Rodrigo
console.log(user.age); // 25