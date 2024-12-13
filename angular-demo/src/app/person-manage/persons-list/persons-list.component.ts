import { Component, OnInit } from '@angular/core';
import { PersonsService } from '../persons.service';
import { Person } from '../model/person';

@Component({
  selector: 'app-persons-list',
  imports: [],
  templateUrl: './persons-list.component.html',
  styleUrl: './persons-list.component.css',
})
export class PersonsListComponent implements OnInit{
  persons : Person[] = [];
  constructor(private personService: PersonsService) {}
  
  ngOnInit(): void {
   this.persons = this.personService.list();
  }
}
