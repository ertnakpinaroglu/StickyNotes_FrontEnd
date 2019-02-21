import { Injectable, OnInit } from "@angular/core";
import { Observable } from 'rxjs';
import { Card } from '../Models/card';
import { HttpClient } from "@angular/common/http";
@Injectable({
    providedIn: "root"
})

export class CarServices implements OnInit {

    apiUrl: string = "https://localhost:44372/api/";
    constructor(private httpClient: HttpClient) {

    }
    ngOnInit(): void {

    }
    getCardsById(boardListId: number): Observable<Card[]> {
        return this.httpClient.get<Card[]>(this.apiUrl + "Card/getCardByBoardListId?boardlistId=" + boardListId);
    }

}
