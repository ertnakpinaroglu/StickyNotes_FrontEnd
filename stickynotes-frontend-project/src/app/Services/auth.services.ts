import { Injectable, OnInit } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { RegisterDto } from '../Models/Dtos/register.dto';
import { LoginDto } from '../Models/Dtos/login.dto';
import { JwtHelper } from "angular2-jwt";
import { AlertifyServices } from './alertify.services';
import { Router } from '@angular/router';

@Injectable({
    providedIn: "root"
})

export class AuthServices implements OnInit {

    apiUrl: string = "https://localhost:44372/api/";
    TOKEN_KEY: string = "myToken";
    userToken: any;
    decodedToken: any;
    jwtHelper: JwtHelper = new JwtHelper();
    constructor(private httpClient: HttpClient, private alertifyServices: AlertifyServices, private router: Router) {

    }
    ngOnInit(): void {

    }
    register(registerDto: RegisterDto) {
        let headers = new HttpHeaders();
        headers = headers.append("Content-Type", "application/json")
        this.httpClient.post(this.apiUrl + "Auth/register", registerDto, { headers: headers }).subscribe(data => {
            // üye olan kişi döner 
            this.alertifyServices.successMessage("Kişi " + registerDto.username + " başarıyla eklendi");
            // yönlen 
            this.router.navigateByUrl("/login");
        });
    }

    login(loginDto: LoginDto) {
        let headers = new HttpHeaders();
        headers = headers.append("Content-Type", "application/json");
        this.httpClient.post(this.apiUrl + "Auth/login", loginDto, { headers: headers }).subscribe(token => {
            // geelen tokenı local'de sdaskla   
            this.saveToken(token);
            this.userToken = token;
            this.decodedToken = this.jwtHelper.decodeToken(token.toString());
            this.alertifyServices.successMessage("Giriş başarılı: Hoşgeldin: " + loginDto.username);
            this.router.navigateByUrl(""); // anasayfaya yönlen
        });
    }

    saveToken(token) {
        localStorage.setItem(this.TOKEN_KEY, token);
    }

    logout() {
        localStorage.removeItem(this.TOKEN_KEY);
        this.alertifyServices.errorMessage("Sistemden çıkış yapıldı!");
    }

}
