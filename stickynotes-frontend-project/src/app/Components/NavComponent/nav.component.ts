import { Component, OnInit } from "@angular/core";
import { BoardService } from '../../Services/board.services';
import { Board } from '../../Models/board';
import { Router } from "@angular/router";

@Component({
    selector: "app-nav",
    templateUrl: "./nav.view.html",
    styleUrls: ["./nav.styles.css"],
    providers: [BoardService]
})

export class NavComponent implements OnInit {

    constructor(private boardServices: BoardService, private router: Router) {

    }
    allBoards: Board[]


    ngOnInit(): void {
        this.getBoards();

    }

    getBoards() {
        this.boardServices.getBoards().subscribe(boards => {
            this.allBoards = boards;

        });
    }







}

