import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({ selector: 'user-profile', templateUrl: 'user.component.html' })
export class UserProfileComponent implements OnInit {

    userForm: FormGroup;
    loading = false;
    submitted = false;
    subjects = ['Math', 'Science','History','Geography','Env-Science']
    constructor(private formBuilder: FormBuilder,) {
    }

    ngOnInit() {
        this.userForm = this.formBuilder.group({
            name: ['', Validators.required],
            email: ['', Validators.required],
            phone: ['', Validators.required],
            favSub: ['', Validators.required]
        });
    }

    onSubmit(){
        this.submitted = true;

        if (this.userForm.invalid) {
          return;
        }
        alert("Succefully Submitted");
        this.userForm.reset();
    }

}