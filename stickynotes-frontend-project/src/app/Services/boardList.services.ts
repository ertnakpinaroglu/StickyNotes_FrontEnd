import { Injectable, OnInit } from "@angular/core";
import { Observable } from 'rxjs';
import { BoardList } from '../Models/boardList';
import { HttpClient } from '@angular/common/http';
import { Board } from '../Models/board';

@Injectable({
    providedIn: "root"
})

export class BoardListServices implements OnInit {

    constructor(private httpClient: HttpClient) {

    }
    apiUrl: string = "https://localhost:44372/api/";
    ngOnInit(): void {

    }

    getBoardLists(boardId: number): Observable<BoardList[]> {
        return this.httpClient.get<BoardList[]>(this.apiUrl + "BoardList/GetBoardListsByBoardId?boardId=" + boardId);
    }

    getBoardListByBoardListId(boardListId: number): Observable<BoardList> {
        return this.httpClient.get<BoardList>(this.apiUrl + "BoardList/GetBoardListById?boardListId=" + boardListId);
    }

    addBoard(board: Board) {
        this.httpClient.post(this.apiUrl + "BoardList/AddBoardList", board).subscribe();
    }



}
