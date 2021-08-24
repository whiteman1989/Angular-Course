export class Server {
    public serverId: string;
    public name: string;
    public isOnline: boolean;

    constructor(name: string) {
        this.name = name;
        this.serverId = '_' + Math.random().toString(36).substr(2,9);
        this.isOnline = false;
    }
}