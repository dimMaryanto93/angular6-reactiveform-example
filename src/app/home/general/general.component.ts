import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-general',
  templateUrl: './general.component.html',
  styleUrls: ['./general.component.css']
})
export class GeneralComponent implements OnInit {

  private value: number = 2;

  formGroup: FormGroup;

  constructor(private _form: FormBuilder) {
  }

  ngOnInit() {

    this.formGroup = this._form.group({
      'gender': this._form.group({
        'selectName': this._form.control(this.value)
      }),
      'radio1': this._form.group({
        'id': this._form.control({})
      }),
      'radio2': this._form.group({
        'id': this._form.control({})
      })
    });
    this.formGroup.patchValue({
      'gender.selectName': this.value.toString()
    });
    console.log(this.formGroup.value);
  }

  kirimData() {
    console.log(this.formGroup.value);
  }
}
