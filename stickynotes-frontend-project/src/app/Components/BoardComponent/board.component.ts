import { Component, OnInit } from "@angular/core";
import { BoardService } from 'src/app/Services/board.services';
import { Board } from 'src/app/Models/board';


@Component({
    selector: "app-board",
    templateUrl: "./board.view.html",
    styleUrls: ["./board.style.css"],
    providers: [BoardService]
})

export class BoardComponent implements OnInit {

    ngOnInit(): void {
        this.getBoards();

    }

    boardList: Board[] = [];
    constructor(private boardService: BoardService) {

    }

    getBoards() {
        this.boardService.getBoards().subscribe(boards => {
            this.boardList = boards;


        });
    }

    tiklandi(color, title) {
        console.log("Tiklandı: " + color + " " + title);
    }



}

