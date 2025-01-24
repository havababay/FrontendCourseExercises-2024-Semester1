import { Component, OnInit } from '@angular/core';
import { PersonsService } from '../persons.service';
import { Person } from '../model/person';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule } from '@angular/router';
import { MatProgressBarModule } from '@angular/material/progress-bar';

@Component({
  selector: 'app-persons-list',
  imports: [CommonModule, MatButtonModule, RouterModule, MatProgressBarModule],
  templateUrl: './persons-list.component.html',
  styleUrl: './persons-list.component.css',
})
export class PersonsListComponent implements OnInit {
  persons: Person[] = [];
  isLoading = true;
  constructor(private personService: PersonsService) { }

  ngOnInit(): void {
    this.personService.list().then((persons) => (this.persons = persons)).finally(() => (this.isLoading = false));
  }
}
