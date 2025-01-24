import { Component, Input, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { Person } from '../../../person-manage/model/person';
import { CommonModule } from '@angular/common';
import { PersonsService } from '../../../person-manage/persons.service';

@Component({
  selector: 'app-person-form1',
  imports: [FormsModule, MatButtonModule, MatFormFieldModule, MatInputModule, CommonModule],
  templateUrl: './person-form1.component.html',
  styleUrl: './person-form1.component.css',
})
export class PersonForm1Component implements OnInit {
  newPerson: Person = new Person('', '', '', '');

  @Input() id = "0";

  constructor(private personService: PersonsService) { }

  ngOnInit(): void {
    console.log('Provided ID:', this.id);

    if (this.id) {
      this.personService.get(this.id).then(
        (personFromService?: Person) => {
          console.log('Person loaded:', this.newPerson);

          if (personFromService) {
            this.newPerson = personFromService;
            console.log('Person loaded:', this.newPerson);
          }
        }
      );

    }
  }

  onSubmitRegistration() { }
}
