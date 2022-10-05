import {Component} from '@angular/core';
import {IPostIt} from "../interfaces/IPostIt";
import {DataService} from "../data.service";

@Component({
  selector: 'app-add-post-it',
  templateUrl: './add-post-it.component.html',
  styleUrls: ['./add-post-it.component.css']
})
export class AddPostItComponent {


  postIt: IPostIt = {
    date: new Date(),
    input: "",
    id: "",
  }

  constructor(private dataService: DataService) {
  }

  onSubmitPost() {
    this.dataService.onSubmitPost(this.postIt)
  }
}
