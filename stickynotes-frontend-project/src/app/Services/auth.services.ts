import { Injectable, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
    providedIn: "root"
})

export class AuthServices implements OnInit {


    constructor(private httpClient: HttpClient) {

    }
    ngOnInit(): void {

    }
    registerDto(registerDto) {

    }

    login(loginDto) {

    }


}
