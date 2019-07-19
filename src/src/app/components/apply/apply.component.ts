import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-apply',
  templateUrl: './apply.component.html',
  styleUrls: ['./apply.component.css']
})
export class ApplyComponent implements OnInit {

  personalInfoFormGroup:FormGroup;
  contactInfoFormGroup:FormGroup;

  constructor(private _formBuilder:FormBuilder) { }

  ngOnInit() {
    this.personalInfoFormGroup = this._formBuilder.group({
      firstName:['',Validators.required],
      lastName:['',Validators.required]
    });
    this.contactInfoFormGroup = this._formBuilder.group({
      email:['',Validators.required],
      phoneNumber:['',Validators.required]
    })
  }

}
