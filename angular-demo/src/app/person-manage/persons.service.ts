import { Injectable } from '@angular/core';
import { Person } from './model/person';
import { addDoc, collection, Firestore, getDocs } from '@angular/fire/firestore';
import { personConverter } from './person-converter';

@Injectable({
  providedIn: 'root'
})
export class PersonsService {
  constructor(private firestore : Firestore) { }

  async list() : Promise<Person[]> {
    const peopleCollection = collection(this.firestore, 'people').withConverter(personConverter)

    const querySnapshot = await getDocs(peopleCollection);

    return querySnapshot.docs.map(doc => doc.data());
  }

  async get(id : string) : Promise<Person | undefined>{
    // getDoc
    return undefined;
  }

  async add(newPerson : Person) : Promise<void> {
    const peopleCollection = collection(this.firestore, 'people').withConverter(personConverter)
    await addDoc(peopleCollection, newPerson);
  }

  async update(existingPerson : Person) : Promise<void> {
    // setDoc
  }
}
