import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormControl, FormGroup, Validators } from "@angular/forms";
import { LoginDto } from 'src/app/Models/Dtos/login.dto';
import { AuthServices } from 'src/app/Services/auth.services';
@Component({
    selector: "app-login",
    templateUrl: "./login.view.html",
    styleUrls: ["./login.styles.css"],
    providers: [AuthServices]
})

export class LoginComponent implements OnInit {

    loginDto: LoginDto;
    loginForm: FormGroup;
    constructor(private authService: AuthServices, private formBuilder: FormBuilder) {

    }
    createLoginForm() {
        this.loginForm = this.formBuilder.group({
            username: ["", Validators.required],
            password: ["", Validators.required]
        });
    }

    ngOnInit(): void {
        this.createLoginForm();
    }

    login() {
        if (this.loginForm.valid) {
            console.log("Login method calisti");
            this.loginDto = Object.assign({}, this.loginForm.value);
            this.authService.login(this.loginDto);
        }
    }

}
