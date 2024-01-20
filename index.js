class Cat {
    constructor(name) {
        this.name = name;
    }

    speak() {
        return `${this.name} says meow!`;
    }
}

class Dog {
    constructor(name) {
        this.name = name;
    }

    speak() {
        return `${this.name} says woof!`;
    }
}

class Bird {
    constructor(name) {
        this.name = name;
    }

    speak() {
        return `It's me! ${this.name}, the parrot!`;
    }
}

// Ensure the classes are available globally or in the scope where the tests are running
// For example, you can define them in the same file as your tests or export/import them if needed

// Now you can use these classes in your tests

// Example usage in a test file:
beforeEach(() => {
    cat = new Cat("Whiskers");
    dog = new Dog("Buddy");
    bird = new Bird("Polly");
    bird2 = new Bird("Charlie");
});

// Rest of your tests...




