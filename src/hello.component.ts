import { IHelloService } from "./hello.service.interface";

export class HelloComponent {

    constructor(private helloService: IHelloService) {}

    public sayHello(): string {
        return this.helloService.sayHello();
    }
/*     public sayHi(): string {
        return this.helloService.sayHello();
    }
    public greetings(name: string): string {
        return this.helloService.greetings(name);
    }
    public notPolite(name: string): string {
        return this.helloService.notPolite(name);
    } */
}
