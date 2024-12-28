import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { Person } from '../../../person-manage/model/person';

@Component({
  selector: 'app-person-form1',
  imports: [FormsModule, MatButtonModule, MatFormFieldModule, MatInputModule],
  templateUrl: './person-form1.component.html',
  styleUrl: './person-form1.component.css',
})
export class PersonForm1Component {
  newPerson: Person = new Person(0, '', '', '');

  @Input() id = 0;

  onSubmitRegistration() {}
}
