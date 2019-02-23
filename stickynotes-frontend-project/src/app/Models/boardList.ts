import { Card } from './card';

export class BoardList {
    boardListId: number;
    listName: string;
    createdDate: Date;
    boardId: number;
    cards: Card[]=[];
}