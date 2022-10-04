import { Component } from '@angular/core';
import {IPostIt} from "./interfaces/IPostIt";
import {DataService} from "./data.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  isAddingNew: boolean = false;


  constructor(private dataService: DataService) {
    this.dataService.$isAddingNew.subscribe(
      (isAddingNew) => {
        this.isAddingNew = isAddingNew;
        console.log(this.isAddingNew)
      }
    )
  }


  newPost() {
    this.dataService.createNewPostIt();
  }
}
