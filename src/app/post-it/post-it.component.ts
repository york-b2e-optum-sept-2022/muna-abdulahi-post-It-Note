import { Component, OnInit } from '@angular/core';
import {IPostIt} from "../interfaces/IPostIt";

@Component({
  selector: 'app-post-it',
  templateUrl: './post-it.component.html',
  styleUrls: ['./post-it.component.css']
})
export class PostItComponent implements OnInit {
//isUpdating: boolean = false;
//localPosit!: IPostIt;

  constructor() { }

  ngOnInit(): void {
  }

}
