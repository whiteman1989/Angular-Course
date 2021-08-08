import { Component } from "@angular/core";

@Component({
    selector: 'app-server',
    templateUrl: './server.component.html'
})
export class ServerComponent {
    serverId: number = 10;
    serverStatus: string = 'offline'

    getServerStatus(): string {
        if(Math.random()<0.5) {
            return this.serverStatus;
        } else {
            return "online"
        }
    }
}