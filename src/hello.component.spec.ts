import { expect } from "chai";
import { HelloComponent } from "./hello.component";
import { IHelloService } from "./hello.service.interface";

class MockHelloService implements IHelloService {
    public sayHello(): string {
        return "Hello world!";
    }
   /*  public sayHi(): string {
        return "Hi world!";
    }
    public greetings(name: string): string {
        return `Hi $name!` ;
    }
    public notPolite(name: string): string {
        return `Get out $name!`;
    } */
}

describe("HelloComponent", () => {

    it("should say 'Hello world!'", () => {
        const mockHelloService = new MockHelloService();
        const helloComponent = new HelloComponent(mockHelloService);

        expect(helloComponent.sayHello()).equal("Hello world!");
    });
  /*  it("should say 'Hi world!'", () => {
        const mockHelloService = new MockHelloService();
        const helloComponent = new HelloComponent(mockHelloService);

        expect(helloComponent.sayHi()).equal("Hi world!");
    });*/
});
