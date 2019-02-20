import { Component, OnInit } from "@angular/core";
import { BoardListServices } from '../../Services/boardList.services';
import { ActivatedRoute } from '@angular/router';
import { BoardService } from 'src/app/Services/board.services';
import { Board } from '../../Models/board';

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

    // Reactive Forms

    ngOnInit(): void {
        this.getCurrentBoardId();
        this.getCurrentBoard();
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


}