import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UsersServiceService } from 'src/app/services/users-service.service';
import { ValidateService } from 'src/app/services/validateForm/validate.service';


@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})

export class AddUserComponent implements OnInit {

  form: FormGroup;
  newUserInfo: any = [{name: ''}, {email: ''}];
  userData: any;

  // Getters
  get validateName() {
    return this.form.get('name').invalid && this.form.get('name').touched;
  }

  get validateEMail() {
    return this.form.get('email').invalid && this.form.get('email').touched;
  }

  //Getters para Password (Validación personalizada)
  get Pass1(){
    return this.form.get('password').invalid && this.form.get('password').touched;
  }
  
  get Pass2(){
    const pass1 = this.form.get('password').value;
    const pass2 = this.form.get('chkPasswd').value;

    return (pass1 === pass2) ? false : true;
  }

  constructor( private validateService: ValidateService, private formBuilder: FormBuilder, private userService: UsersServiceService) {
    this.createForm();
  }

  ngOnInit(): void {
  }

  // New functions
  createForm() {
    this.form = this.formBuilder.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')]],
      password: ['', Validators.required],
      chkPasswd: ['', Validators.required]
    },
    {
      validators: this.validateService.matchPasswd('password', 'chkPasswd')
    });
  }

  send() {
    console.log(this.form);

    if(this.form.invalid) {
      return Object.values(this.form.controls).forEach(control => {
        control.markAsTouched();
      });
    }
    console.log(this.form);
  }

  saveDataUser(name, email) {
    this.newUserInfo.name = name;
    this.newUserInfo.email = email;

    this.userData = this.userService.postUser(this.newUserInfo).subscribe();
    console.log(this.userData);
  }

}
