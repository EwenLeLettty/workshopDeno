function sayHello(name?: string): void {
    if (name)
        console.log("Hello " + name);
    console.log("Hello world");
}