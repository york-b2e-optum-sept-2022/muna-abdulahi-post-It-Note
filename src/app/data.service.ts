import { Injectable } from '@angular/core';
import {IPostIt} from "./interfaces/IPostIt";
import {Subject} from "rxjs";
import { v4 as uuid } from 'uuid';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private isAddingNew: boolean = false;
  $isAddingNew = new Subject<boolean>();


  postItList: IPostIt[] = []
  $postItList = new Subject<IPostIt[]>();


  createNewPostIt() {
    this.isAddingNew = true
    this.$isAddingNew.next(this.isAddingNew)

  }

  onSubmitPost(input: IPostIt) {

    this.postItList.push(input)

    if (input.id === '') {
      input.id = uuid();
      console.log(input)


      this.isAddingNew = false
      this.$isAddingNew.next(this.isAddingNew)


      this.$postItList.next(this.postItList)
    }

    }

  onDeleteClick(id: string) {
    this.postItList = this.postItList.filter(
      input => input.id !== id
    );
    this.$postItList.next(this.postItList)
  }

  onUpdate( input:string, id:string) {
    const postUpdate = this.postItList.find (
      postIt => postIt.id === id
    );
    if (postUpdate === undefined) {
      console.error('its not working');
      return;
    }
    postUpdate.input =  input
    console.log(input)


  }
}

