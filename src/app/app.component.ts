import {Component, OnInit} from '@angular/core';
import {FormArray, FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Model} from './app.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  models: Model[];
  formGroup: FormGroup;


  constructor(private _form: FormBuilder) {
    this.models = [
      new Model(1, 'Bugs'),
      new Model(2, 'Help'),
      new Model(3, 'Improvement')
    ];
  }

  ngOnInit(): void {
    this.formGroup = this._form.group({
      id: ['', Validators.required],
      items: this._form.array([]),
      selection: this._form.group(
        {'id': ''}
      )
    });

    const values = this.items;
    for (const model of this.models) {
      values.push(this._form.group({'selected': false, 'id': model.id}));
    }
  }

  get items() {
    return this.formGroup.get('items') as FormArray;
  }

  submitData() {
    const itemsValue = this.formGroup.value.items
      .filter(data => data.selected)
      .map(data => {
        return {id: data.id};
      });
    const value = this.formGroup.value;
    console.log(value);
  }
}


