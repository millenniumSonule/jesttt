const dog = {
    name: 'Fido',
    speak: function() {
        console.log(`Woof! ${this.name}`);
    }
}

console.log(dog.name);
dog.speak();