import { Component } from "@angular/core";

@Component({
    selector: 'app-server',
    templateUrl: './server.component.html'
})
export class ServerComponent {
    serverId: number = 10;
    serverStatus: string = 'offline'

    constructor() {
        this.serverStatus = this.getServerStatus();
    }

    getServerStatus(): string {
        if(Math.random()<0.5) {
            return 'offline';
        } else {
            return "online"
        }
    }
}