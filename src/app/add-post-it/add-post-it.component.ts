import {Component, Input, OnInit} from '@angular/core';
import {IPostIt} from "../interfaces/IPostIt";
import {DataService} from "../data.service";

@Component({
  selector: 'app-add-post-it',
  templateUrl: './add-post-it.component.html',
  styleUrls: ['./add-post-it.component.css']
})
export class AddPostItComponent implements OnInit {
postIt: IPostIt[]

  constructor(private dataService: DataService) {
 this.postIt = this.dataService.postItList
    console.log(this.postIt)
  }

  ngOnInit(): void {
  }


}
