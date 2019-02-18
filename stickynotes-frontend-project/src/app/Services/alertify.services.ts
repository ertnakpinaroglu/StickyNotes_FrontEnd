import { Injectable, OnInit } from "@angular/core";

declare let alertify: any;
@Injectable({

    providedIn: "root"

})

export class AlertifyServices implements OnInit {

    ngOnInit(): void {


    }

    successMessage(message: string) {
        alertify.success(message);
    }
    errorMessage(message: string) {
        alertify.error(message);
    }
    warningMessage(message: string) {
        alertify.warning(message);
    }

}