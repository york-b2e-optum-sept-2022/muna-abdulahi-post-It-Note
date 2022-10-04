import { Component, OnInit } from '@angular/core';
import {DataService} from "../data.service";
import {IPostIt} from "../interfaces/IPostIt";

@Component({
  selector: 'app-post-it-notes',
  templateUrl: './post-it-notes.component.html',
  styleUrls: ['./post-it-notes.component.css']
})
export class PostItNotesComponent  {
list: IPostIt [];
displayPostIt : IPostIt[];

  constructor(private dataService: DataService) {

this.list = this.dataService.postItList;
this.displayPostIt = [...this.list];

    this.dataService.$postItList.subscribe((newPostItList) => {
      this.list = newPostItList;
      this.displayPostIt = [...this.list];

    })
  }


  }

