import { Component, OnInit } from "@angular/core";
import { BoardService } from 'src/app/Services/board.services';
import { Board } from 'src/app/Models/board';
import { FormBuilder, FormGroup, FormControl, Validators } from "@angular/forms";

@Component({
    selector: "app-board",
    templateUrl: "./board.view.html",
    styleUrls: ["./board.style.css"],
    providers: [BoardService]
})

export class BoardComponent implements OnInit {

    ngOnInit(): void {
        this.getBoards();
        this.createAddBoardForm();
    }

    boardList: Board[] = [];
    board: Board;
    boardAddGroup: FormGroup;
    constructor(private boardService: BoardService, private formBuilder: FormBuilder) {

    }

    createAddBoardForm() {
        this.boardAddGroup = this.formBuilder.group(
            { color: ["", Validators.required] },
            { title: ["", Validators.required] }
        )
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

