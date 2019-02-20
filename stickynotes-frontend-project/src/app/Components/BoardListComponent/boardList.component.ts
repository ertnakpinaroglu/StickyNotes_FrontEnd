import { Component, OnInit } from "@angular/core";
import { BoardListServices } from '../../Services/boardList.services';
import { ActivatedRoute } from '@angular/router';
import { BoardService } from 'src/app/Services/board.services';
import { Board } from '../../Models/board';
import { BoardList } from '../../Models/boardList';

@Component({
    selector: "app-boardList",
    templateUrl: "./boardList.view.html",
    styleUrls: ["./boardList.styles.css"],
    providers: [BoardListServices, BoardService]

})

export class BoardListComponent implements OnInit {


    constructor
        (
            private boardlistServices: BoardListServices,
            private boardServices: BoardService,
            private activatedRoute: ActivatedRoute
        ) { }

    currrentBoardId: number;
    currentBoard: Board;
    currentBoardList: BoardList[];

    // Reactive Forms

    ngOnInit(): void {
        this.getCurrentBoardId();
        this.getCurrentBoard();
        this.getBoardLists();
    }
    getCurrentBoardId() {
        this.activatedRoute.params.subscribe(params => {
            this.currrentBoardId = params["boardId"];
        })
    }

    getCurrentBoard() {
        this.boardServices.getBoardById(this.currrentBoardId).subscribe(board => {
            this.currentBoard = board;
        });
    }

    getBoardLists() {
        this.boardlistServices.getBoardLists(this.currrentBoardId).subscribe(data => {
            this.currentBoardList = data;
        });
    }


}