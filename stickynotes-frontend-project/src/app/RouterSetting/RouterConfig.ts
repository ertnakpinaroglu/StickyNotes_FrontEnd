import { NgModule } from "@angular/core";
import { Route, RouterModule } from "@angular/router";
import { BoardComponent } from '../Components/BoardComponent/board.component';

const routerManager: Route[] = [
    { path: "", component: BoardComponent, pathMatch: "full" },
    { path: "getBoardList/:boardId", component: BoardComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routerManager)]
})

export class AppRoutingModule { }
