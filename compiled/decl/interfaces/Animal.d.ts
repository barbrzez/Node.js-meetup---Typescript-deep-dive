declare namespace ns_interfaces {
    abstract class Animal {
        name: string;
        constructor(name: string);
        TakeToBarn(): void;
        Pet(): void;
    }
    class Cow extends Animal implements IMilkable {
        Milk(): void;
    }
    class Goat extends Animal implements IMilkable {
        Milk(): void;
    }
    class Duck extends Animal {
    }
}
