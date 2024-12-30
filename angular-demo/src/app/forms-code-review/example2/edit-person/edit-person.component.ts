import { Component, Input, OnInit } from '@angular/core';
import { PersonsService } from '../../../person-manage/persons.service';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-edit-person',
  imports: [MatFormFieldModule, MatInputModule,FormsModule, CommonModule, MatButtonModule],
  templateUrl: './edit-person.component.html',
  styleUrl: './edit-person.component.css'
})
export class EditPersonComponent implements OnInit {
  displayValidateFirstName : boolean = false;
  displayValidateLastName : boolean = false;
  displayValidateEmail : boolean = false;

  editedPerson : any;

  @Input()
  id = "";

  constructor(private personService: PersonsService,
    private router : Router
  ){}

  ngOnInit(): void {
    this.editedPerson = this.personService.get(Number(this.id));
  }
  saveChanges(){
    this.displayValidateFirstName = !this.editedPerson.firstName || this.editedPerson.firstName == '' || this.editedPerson.firstName == undefined;
    this.displayValidateLastName = !this.editedPerson.lastName || this.editedPerson.lastName == '' || this.editedPerson.lastName == undefined;
    this.displayValidateEmail = !this.editedPerson.email || this.editedPerson.email == '' || this.editedPerson.email == undefined;

    if (!this.displayValidateFirstName && !this.displayValidateLastName && !this.displayValidateEmail) {
      this.personService.update(this.editedPerson);
      this.router.navigate(['persons-list']);
    }
  }
}
