import {Component, Input, OnInit} from '@angular/core';
import {IPostIt} from "../interfaces/IPostIt";
import {DataService} from "../data.service";

@Component({
  selector: 'app-post-it',
  templateUrl: './post-it.component.html',
  styleUrls: ['./post-it.component.css']
})
export class PostItComponent implements OnInit {
  @Input() postItListInfo!: IPostIt;



  constructor(private dataServer:DataService) {

  }

  ngOnInit(): void {
  }

  onDeleteClick() {
this.dataServer.onDeleteClick(this.postItListInfo.id);
  }

  onUpdateClick() {
    this.dataServer.onUpdate(this.postItListInfo.input,this.postItListInfo.id);

  }

  onSaveClick() {

  }

  onCancelClick() {

  }
  }



