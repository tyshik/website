import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, NumberValueAccessor } from '@angular/forms';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

// class Message {
//   title: string;
//   text:string;
//   warning: boolean;
//   number: number;
// }

@Component({
  selector: 'app-right-column',
  templateUrl: './right-column.component.html',
  styleUrls: ['./right-column.component.css']
})
export class RightColumnComponent implements OnInit {

  title: string;
  text: string;
  newMessage : FormGroup;

  messages:any[] = [];

  constructor(public db: AngularFirestore) { 
    db.collection('messages').valueChanges().subscribe(data => {
      this.messages = data
      console.log(data);
      this.messages = this.messages.sort((a, b) => a.number < b.number ? -1 : 1)
    });

    this.newMessage = new FormGroup({       
      "title": new FormControl("", Validators.required),
      "text": new FormControl("", Validators.required) 
  });
  }

  ngOnInit(): void {
  }

  addMessage() {
    if (this.newMessage.valid){
      this.db.collection('messages').add({title: this.title, text: this.text, warning: false, number: this.messages.length + 1})
    }
  }

  deleteMessage() {
    this.db.doc('messages/');
  }
  
}
