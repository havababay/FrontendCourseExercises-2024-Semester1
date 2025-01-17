import { QueryDocumentSnapshot, SnapshotOptions } from "@angular/fire/firestore";
import { Person } from "./model/person";
import { PhoneNumber } from "./model/phone-number";

export const personConverter = {
    toFirestore: (person: Person) => {
        let simplePhoneNumbers =
            person.phoneNumbers.map(phoneNumber => {
                return {
                    number: phoneNumber.number
                }
            })

        return {
            id: person.id,
            firstName: person.firstName,
            lastName: person.lastName,
            email: person.email,
            phoneNumbers: simplePhoneNumbers
        };
    },
    fromFirestore: (snapshot: QueryDocumentSnapshot, options: SnapshotOptions): Person => {
        const data = snapshot.data(options);

        var phoneNumbers : PhoneNumber[] = [];
        if (data['phoneNumbers']) {
            phoneNumbers = data['phoneNumbers'].map((phoneNumber: { number: string; }) => {
                return new PhoneNumber(phoneNumber.number);
            });
        }

        return new Person(data['id'],
            data['firstName'],
            data['lastName'],
            data['email'],
            phoneNumbers);
    }
}