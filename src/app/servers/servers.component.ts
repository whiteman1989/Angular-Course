import { Component, OnInit } from '@angular/core';
import { ServerComponent } from '../server/server.component';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer = false;
  serverCreationStatus = "No server was created!";
  serverName = '';
  srevers: ServerComponent[];

  constructor() { 
    setTimeout(() => {
      this.allowNewServer = true
    }, 5000);
  }

  ngOnInit(): void {
  }

  onServerCreate(): void {
    this.serverCreationStatus = 'Server was created!';
  }

  onUpdateServerName(event: Event): void {
    this.serverName= (<HTMLInputElement>event.target).value;
  }

}
