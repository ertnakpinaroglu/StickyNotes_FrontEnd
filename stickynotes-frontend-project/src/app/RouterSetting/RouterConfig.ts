import { NgModule } from "@angular/core";
import { Route, RouterModule } from "@angular/router";
import { BoardComponent } from '../Components/BoardComponent/board.component';
import { BoardListComponent } from '../Components/BoardListComponent/boardList.component';
import { RegisterComponent } from '../Components/RegisterComponent/register.component';
import { LoginComponent } from '../Components/LoginComponent/login.component';

const routerManager: Route[] = [
    { path: "", component: BoardComponent, pathMatch: "full" },
    { path: "board", component: BoardComponent },
    { path: "getBoardList/:boardId", component: BoardListComponent },
    { path: "register", component: RegisterComponent },
    { path: "login", component: LoginComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routerManager)]
})

export class AppRoutingModule { }
