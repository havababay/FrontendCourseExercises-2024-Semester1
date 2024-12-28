import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { PersonsService } from '../../../person-manage/persons.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-person',
  imports: [MatFormFieldModule, MatInputModule, FormsModule, MatButtonModule],
  templateUrl: './create-person.component.html',
  styleUrl: './create-person.component.css',
})
export class CreatePersonComponent {
  displayValidateFirstName: boolean = false;
  displayValidateLastName: boolean = false;
  displayValidateEmail: boolean = false;

  constructor(private personService: PersonsService,
    private router : Router
  ) {}

  createPerson(firstName: string, lastName: string, email: string) {
    this.displayValidateFirstName =
      !firstName || firstName == '' || firstName == undefined;
    this.displayValidateLastName =
      !lastName || lastName == '' || lastName == undefined;
    this.displayValidateEmail = !email || email == '' || email == undefined;

    if (
      !this.displayValidateFirstName &&
      !this.displayValidateLastName &&
      !this.displayValidateEmail
    ) {
      this.personService.add({
        id: 0,
        firstName: firstName,
        lastName: lastName,
        email: email,
      });
      this.router.navigate(['persons-list']);
    }
  }
}
