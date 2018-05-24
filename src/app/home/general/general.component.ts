import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-general',
  templateUrl: './general.component.html',
  styleUrls: ['./general.component.css']
})
export class GeneralComponent implements OnInit {

  formGroup: FormGroup;

  constructor(private _form: FormBuilder) {
  }

  ngOnInit() {

    this.formGroup = this._form.group({
      'selectName': this._form.control({})
    });
    this.formGroup.patchValue({
      'selectName': 'L'
    });
  }

}
