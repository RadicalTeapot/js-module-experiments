export class HelloWorld {
    get message() { return "Hello world, I'm a new class" };
    constructor() { }
    sayHello() {
        return "Hello world, I'm a class method";
    }
}

export function sayHelloWorld() {
    return "Hello world, I'm a function";
}

export const message = "Hello world, I'm a const";
