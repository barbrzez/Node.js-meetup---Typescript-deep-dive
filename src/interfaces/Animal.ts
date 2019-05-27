namespace ns_interfaces {

    export abstract class Animal {
        
        public name: string;
        constructor(name: string) {
            this.name = name;
        }

        public TakeToBarn() { /*...*/}
        public Pet() { /*...*/ }
    }

    export class Cow extends Animal implements IMilkable {
        public Milk(): void { /*...*/ }
    }

    export class Goat extends Animal implements IMilkable {
        public Milk(): void { /*...*/ }
    }

    export class Duck extends Animal {
       
    }
}