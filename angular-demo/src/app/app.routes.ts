import { Routes } from '@angular/router';
import { CounterComponent } from './counter/counter.component';
import { DemoComponent } from './demo/demo.component';
import { HomePageComponent } from './home-page/home-page.component';
import { ReouterDemoComponent } from './reouter-demo/reouter-demo.component';
import { PersonsListComponent } from './person-manage/persons-list/persons-list.component';
import { PersonFormComponent } from './person-manage/person-form/person-form.component';

export const routes: Routes = [
  { path: 'counter', component: CounterComponent },
  { path: 'demo', component: DemoComponent },
  { path: '', component: HomePageComponent },
  { path: 'router/:id', component: ReouterDemoComponent },
  { path: 'persons-list', component: PersonsListComponent },
  { path: 'new-person', component: PersonFormComponent},
  { path: 'person/:id', component: PersonFormComponent}
];
