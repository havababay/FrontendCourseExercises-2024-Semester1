import { Routes } from '@angular/router';
import { CounterComponent } from './counter/counter.component';
import { DemoComponent } from './demo/demo.component';
import { HomePageComponent } from './home-page/home-page.component';
import { ReouterDemoComponent } from './reouter-demo/reouter-demo.component';
import { PersonsListComponent } from './person-manage/persons-list/persons-list.component';
import { PersonFormComponent } from './person-manage/person-form/person-form.component';
import { PersonForm1Component } from './forms-code-review/example1/person-form1/person-form1.component';
import { CreatePersonComponent } from './forms-code-review/example2/create-person/create-person.component';
import { EditPersonComponent } from './forms-code-review/example2/edit-person/edit-person.component';

export const routes: Routes = [
  { path: 'counter', component: CounterComponent },
  { path: 'demo', component: DemoComponent },
  { path: '', component: HomePageComponent },
  { path: 'router/:id', component: ReouterDemoComponent },
  { path: 'persons-list', component: PersonsListComponent },
  { path: 'new-person', component: PersonFormComponent },
  { path: 'person/:id', component: PersonFormComponent },
  { path: 'new-person1', component: PersonForm1Component },
  { path: 'person1/:id', component: PersonForm1Component },
  { path: 'new-person2', component: CreatePersonComponent },
  { path: 'person2/:id', component: EditPersonComponent },
];
