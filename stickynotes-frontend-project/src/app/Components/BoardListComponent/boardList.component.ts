import { Component, OnInit, ViewChild } from "@angular/core";
import { BoardListServices } from '../../Services/boardList.services';
import { ActivatedRoute } from '@angular/router';
import { BoardService } from 'src/app/Services/board.services';
import { Board } from '../../Models/board';
import { BoardList } from '../../Models/boardList';
import { FormBuilder, FormGroup, Validators, FormControl } from "@angular/forms";
import { Card } from '../../Models/card';
import { CarServices } from '../../Services/card.services';
import { AlertifyServices } from '../../Services/alertify.services';

@Component({
    selector: "app-boardList",
    templateUrl: "./boardList.view.html",
    styleUrls: ["./boardList.styles.css"],
    providers: [BoardListServices, BoardService, CarServices]

})

export class BoardListComponent implements OnInit {

    @ViewChild('inputBotton') myInputBotton;
    constructor
        (
            private boardlistServices: BoardListServices,
            private boardServices: BoardService,
            private activatedRoute: ActivatedRoute,
            private formBuilder: FormBuilder,
            private cardServices: CarServices,
            private alertifyServices: AlertifyServices
        ) { }

    currrentBoardId: number;
    currentBoard: Board;
    currentBoardList: BoardList[];
    getCurrentBoardlistId: number;
    // Reactive Forms
    addCardGroup: FormGroup;
    objectCard: Card;

    ngOnInit(): void {
        this.getCurrentBoardId();
        this.getCurrentBoard();
        this.getBoardLists();
        this.addCardForm();
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
    // Tiklanildiği zaman boardListId çeken method
    getBoardListId(data2: number) {
        // let data = this.myInputBotton.nativeElement;
        this.getCurrentBoardlistId = data2;
    }
    // create reactive forms
    addCardForm() {
        this.addCardGroup = this.formBuilder.group({
            cardName: ["", Validators.required]
        });
    }

    addToCart() {
        if (this.addCardGroup.valid) {
            console.log("Caliisyor");
            this.objectCard = Object.assign({}, this.addCardGroup.value);
            this.objectCard.boardListId = this.getCurrentBoardlistId;
            console.log("yazdım burayiii " + this.getCurrentBoardlistId + "" + this.objectCard.boardListId + " " + this.objectCard.cardName + " " + this.objectCard.createdDate + " " + this.objectCard.tagColor);
            this.cardServices.addCard(this.objectCard);

            this.alertifyServices.successMessage(this.objectCard.cardName + " başarıyla eklendi.");
        }
    }





}