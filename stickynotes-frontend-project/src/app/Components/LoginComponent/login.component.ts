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
    loginGroup: FormGroup;
    constructor(private authService: AuthServices, private formBuilder: FormBuilder) {

    }
    createLoginForm() {
        this.loginGroup = this.formBuilder.group({
            username: ["", Validators.required],
            password: ["", Validators.required]
        });
    }

    ngOnInit(): void {
    }

    login() {
        if (this.loginGroup.valid) {
            this.loginDto = Object.assign({}, this.loginGroup.value);
            this.authService.login(this.loginDto);
        }
    }

}
