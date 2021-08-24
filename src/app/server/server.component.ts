import { Component, Input } from "@angular/core";
import { Server } from "./server.model";

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
    @Input("serv") server: Server;
    serverStatus: string;


    ngOnInit(): void {
        this.initStatus();
        this.serverStatus = this.getServerStatus();
    }

    getServerStatus(): string {
        if(this.server.isOnline) {
            return 'online';
        } else {
            return "offline"
        }
    }

    initStatus(): void {
        if(Math.random()<0.5) {
            this.server.isOnline = true;
        } else {
            this.server.isOnline = false;
        }
    }

    getColor(): string {
        if(this.server.isOnline) {
            return 'green';
        } else {
            return "red"
        }
    }
}