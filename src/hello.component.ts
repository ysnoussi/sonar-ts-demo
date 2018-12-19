import { IHelloService } from "./hello.service.interface";

export class HelloComponent {

    constructor(private helloService: IHelloService) {}

    public sayHello(): string {
        return this.helloService.sayHello();
    }
    public sayHi(): string {
        return this.helloService.sayHi();
    }
    public greetings(name: string): string {
        return this.helloService.greetings(name);
    }
    public notPolite(name: string): string {
        return this.helloService.notPolite(name);
    } 
    public adder(a: number, b:number): number {
        return a+b;
    } 
    public lorem(): string {
        return this.helloService.sayHello();
    }
    public epsum(): string {
        return this.helloService.sayHello();
    }
    public bla(): string {
        return this.helloService.sayHello();
    }
}
