import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { FormsModule, NgModelGroup } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { Person } from '../model/person';
import { PersonsService } from '../persons.service';
import { Router } from '@angular/router';
import { PhoneNumber } from '../model/phone-number';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-person-form',
  imports: [FormsModule, MatButtonModule, MatFormFieldModule, MatInputModule, MatIconModule],
  templateUrl: './person-form.component.html',
  styleUrl: './person-form.component.css',
})
export class PersonFormComponent implements OnInit {
  newPerson: Person = new Person(0, '', '', '');

  @Input() id = 0;

  @ViewChild('phoneNumbers') phoneNumbers? : NgModelGroup;

  constructor(private personService: PersonsService, private router: Router) {}
  ngOnInit(): void {
    if (this.id > 0) {
      let temp = this.personService.get(Number(this.id));

      if (temp) {
        this.newPerson = temp;
      } else {
        // error handling
      }
    }
  }

  onPersonFormSubmit() {
    console.log(this.newPerson);
    if (this.id > 0) {
      
    } else {
      this.personService.add(this.newPerson);
    }
    this.router.navigate(['persons-list']);
  }

  addPhoneNumber() {
    this.newPerson.phoneNumbers.push(new PhoneNumber(""));
  }

  removePhoneNumber(index: number) {
    this.newPerson.phoneNumbers.splice(index, 1);
    this.phoneNumbers?.control.markAsDirty();
  }
}
