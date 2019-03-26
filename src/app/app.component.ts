import { Component,OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent implements OnInit  {
  name = 'Angular';
  grupoForm: FormGroup;
	submitted = false;

  	constructor(private _formBuilder: FormBuilder,
	) {
	}

  ngOnInit(){
this.grupoForm = this._formBuilder.group({
			email: ['', [Validators.required, Validators.email]],
			password: ['', [Validators.required]],

		})
  }

  onLogin(){
    		this.submitted = true;

		if (this.grupoForm.invalid) {
			return
		}
		else {
			console.log("LLEGO");
		}

  }
}
