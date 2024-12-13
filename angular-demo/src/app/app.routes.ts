import { Routes } from '@angular/router';
import { CounterComponent } from './counter/counter.component';
import { DemoComponent } from './demo/demo.component';
import { HomePageComponent } from './home-page/home-page.component';
import { ReouterDemoComponent } from './reouter-demo/reouter-demo.component';
import { PersonsListComponent } from './person-manage/persons-list/persons-list.component';

export const routes: Routes = [
  { path: 'counter', component: CounterComponent },
  { path: 'demo', component: DemoComponent },
  { path: '', component: HomePageComponent },
  { path: 'router/:id', component: ReouterDemoComponent },
  { path: 'persons-list', component: PersonsListComponent },
];
