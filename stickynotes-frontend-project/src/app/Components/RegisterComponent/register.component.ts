import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormControl, FormGroup, Validators } from "@angular/forms";
import { RegisterDto } from '../../Models/Dtos/register.dto';
import { AuthServices } from 'src/app/Services/auth.services';

@Component({
    selector: "app-register",
    templateUrl: "./register.view.html",
    styleUrls: ["./register.styles.css"],
    providers: [AuthServices]
})

export class RegisterComponent implements OnInit {

    registerForm: FormGroup;
    registerDto: RegisterDto;
    constructor(private formBuilder: FormBuilder, private authServices: AuthServices) {

    }
    createRegisterForm() {
        this.registerForm = this.formBuilder.group({
            username: ["", Validators.required],
            password: ["", Validators.required]
        });
    }
    ngOnInit(): void {
        this.createRegisterForm();
    }

    register() {
        if (this.registerForm.valid) {
            console.log("Calistii register");
            this.registerDto = Object.assign({}, this.registerForm.value);
            this.authServices.register(this.registerDto);
        }
    }





}
