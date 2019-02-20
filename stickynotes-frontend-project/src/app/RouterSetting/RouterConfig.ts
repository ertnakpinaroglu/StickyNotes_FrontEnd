import { NgModule } from "@angular/core";
import { Route, RouterModule } from "@angular/router";
import { BoardComponent } from '../Components/BoardComponent/board.component';
import { BoardListComponent } from '../Components/BoardListComponent/boardList.component';

const routerManager: Route[] = [
    { path: "", component: BoardComponent, pathMatch: "full" },
    { path: "getBoardList/:boardId", component: BoardListComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routerManager)]
})

export class AppRoutingModule { }
