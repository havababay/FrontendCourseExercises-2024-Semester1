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
}
