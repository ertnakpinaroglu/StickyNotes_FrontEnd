import { Injectable, OnInit } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Board } from '../Models/board';
import { Observable } from 'rxjs';



@Injectable({
    providedIn: "root"
})

export class BoardService implements OnInit {

    apiUrl: string = "https://localhost:44372/api/";
    constructor(private httpClient: HttpClient) {

    }

    ngOnInit(): void {

    }

    getBoards(): Observable<Board[]> {
        return this.httpClient.get<Board[]>(this.apiUrl + "Board/GetBoards");
    }

    addBoard(board) {
        this.httpClient.post(this.apiUrl + "/AddBoard", board).subscribe();
    }


}