import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit {

  @Input() title:string;
  @Input() text:string;
  @Input() isWarning:boolean;

  constructor() { }

  ngOnInit(): void {
  }

}
