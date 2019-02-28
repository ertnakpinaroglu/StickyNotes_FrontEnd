import { Component, OnInit } from "@angular/core";
import { BoardService } from '../../Services/board.services';
import { Board } from '../../Models/board';
import { Router } from "@angular/router";
import { TranslateService } from "@ngx-translate/core";

@Component({
    selector: "app-nav",
    templateUrl: "./nav.view.html",
    styleUrls: ["./nav.styles.css"],
    providers: [BoardService]
})

export class NavComponent implements OnInit {

    user = {
        name: 'Arthur',
        age: 42
    };


    constructor(private boardServices: BoardService, private translateService: TranslateService, private router: Router) {
        // dil ayarları
        translateService.setDefaultLang("en");
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

    switchLanguage(language: string) {
        this.translateService.use(language);
    }








}

