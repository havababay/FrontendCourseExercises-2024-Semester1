import { PhoneNumber } from "./phone-number";

export class Person {
    constructor(
        public id: string,
        public firstName: string,
        public lastName: string,
        public email: string,
        public phoneNumbers: PhoneNumber[] = []
    ) {}
}