import { Component, OnInit } from "@angular/core";
import { BoardService } from '../../Services/board.services';
import { Board } from '../../Models/board';
import { Router } from "@angular/router";
import { TranslateService } from "@ngx-translate/core";
import { FormControl, FormBuilder, Validators, FormGroup } from "@angular/forms";

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


    constructor(private formBuilder: FormBuilder, private boardServices: BoardService, private translateService: TranslateService, private router: Router) {
        // dil ayarları
        translateService.setDefaultLang("en");
    }
    allBoards: Board[]
    searchFormGroup: FormGroup;
    searchText: string;
    ngOnInit(): void {
        this.getBoards();
        this.createSearchFormGroup();

    }

    getBoards() {
        this.boardServices.getBoards().subscribe(boards => {
            this.allBoards = boards;

        });
    }

    switchLanguage(language: string) {
        this.translateService.use(language);
    }

    searchData() {
        if (this.searchFormGroup.valid) {
            console.log("Gelen Deger: " + this.searchText);
            // aramayı yap 
            this.boardServices.getBoardByName(this.searchText).subscribe(allData => {
                console.log(allData);
                this.allBoards = allData;
                this.router.navigateByUrl("/board");
                console.log(localStorage.getItem("MyToken"));
            });
        }
    }
    createSearchFormGroup() {
        this.searchFormGroup = this.formBuilder.group({
            searchText: ["", Validators.required]
        });
    }








}

