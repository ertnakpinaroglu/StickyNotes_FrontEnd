import { Component, OnInit } from "@angular/core";
import { BoardService } from 'src/app/Services/board.services';
import { Board } from 'src/app/Models/board';
import { FormBuilder, FormGroup, FormControl, Validators } from "@angular/forms";
import { AlertifyServices } from 'src/app/Services/alertify.services';

@Component({
    selector: "app-board",
    templateUrl: "./board.view.html",
    styleUrls: ["./board.style.css"],
    providers: [BoardService, AlertifyServices]
})

export class BoardComponent implements OnInit {

    ngOnInit(): void {
        this.getBoards();
        this.createAddBoardForm();
    }

    boardList: Board[] = [];
    board: Board;
    boardAddGroup: FormGroup;
    constructor(private boardService: BoardService, private alertifyService: AlertifyServices, private formBuilder: FormBuilder) {

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

    addBoard() {
        if (this.boardAddGroup.valid) {
            this.board = Object.assign({}, this.boardAddGroup.value);
            this.boardService.addBoard(this.board);
            // Alertify ile mesaj bas
            let message: string = "Your board " + this.board.title + " inserted db.";
            this.alertifyService.successMessage(message);
        }
    }


}

