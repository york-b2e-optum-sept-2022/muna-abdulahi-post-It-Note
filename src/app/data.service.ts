import { Injectable } from '@angular/core';
import {IPostIt} from "./interfaces/IPostIt";
import {Subject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private isAddingNew: boolean = false;
  $isAddingNew = new Subject<boolean> ();


  postItList: IPostIt[] = [
    {
      id: '123',
      input: 'Need to grab groceries',
      date: new Date(),
    },

    {
      id: '123',
      input: 'workout st 6pm',
      date: new Date(),
    }
  ];
  $postItList = new Subject<IPostIt[]>();

//when the button is clicked, true is stated and updated to app.ts
  createNewPostIt() {
    this.isAddingNew = true
    this.$isAddingNew.next(this.isAddingNew)

}

}
