import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  userName = "";

  constructor() { }

  ngOnInit(): void {
  }

  isButtonEnable(): boolean {
    return this.userName != "" && this.userName != null;
  }

  resetUsername(): void {
    this.userName = "";
  }

}
