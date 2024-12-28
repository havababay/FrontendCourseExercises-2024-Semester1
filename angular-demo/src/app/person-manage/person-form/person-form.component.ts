import { Component, Input, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { Person } from '../model/person';
import { PersonsService } from '../persons.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-person-form',
  imports: [FormsModule, MatButtonModule, MatFormFieldModule, MatInputModule],
  templateUrl: './person-form.component.html',
  styleUrl: './person-form.component.css',
})
export class PersonFormComponent implements OnInit {
  newPerson: Person = new Person(0, '', '', '');

  @Input() id = 0;

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
}
