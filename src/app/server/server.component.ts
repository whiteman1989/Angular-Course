import { Component } from "@angular/core";

@Component({
    selector: 'app-server',
    templateUrl: './server.component.html',
    styles: [`
    .online {
        color: white;
    }
    `]
})
export class ServerComponent {
    serverId: number = 10;
    serverStatus: string = 'offline'
    isOnline: boolean = false;

    constructor() {
        this.initStatus();
        this.serverStatus = this.getServerStatus();
    }

    getServerStatus(): string {
        if(this.isOnline) {
            return 'online';
        } else {
            return "offline"
        }
    }

    initStatus(): void {
        if(Math.random()<0.5) {
            this.isOnline = true;
        } else {
            this.isOnline = false;
        }
    }

    getColor(): string {
        if(this.isOnline) {
            return 'green';
        } else {
            return "red"
        }
    }
}