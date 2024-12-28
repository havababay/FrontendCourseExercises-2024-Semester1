import { Injectable } from '@angular/core';
import { Person } from './model/person';

@Injectable({
  providedIn: 'root'
})
export class PersonsService {
  private persons = [
    new Person(1, 'John', 'Doe', 'V6zYl@example.com'),
    new Person(2, 'Jane', 'Doe', 'qk9Ls@example.com'),
    new Person(3, 'Moshe', 'Doe', 'V6zYl@example.com'),
  ];
  constructor() { }

  list() : Person[] {
    return this.persons;
  }

  get(id : number) : Person | undefined{
    return this.persons.find(p => p.id === id);
  }

  add(newPerson : Person) : void {
    let maxId = Math.max(...this.persons.map(p => p.id)) + 1;
    newPerson.id = maxId;
    this.persons.push(newPerson);
  }

  update(existingPerson : Person) : void {
    let index = this.persons.findIndex(p => p.id === existingPerson.id);
    if (index === -1) {
      throw new Error("Person not found");
    }
    this.persons[index] = existingPerson;
  }
}
