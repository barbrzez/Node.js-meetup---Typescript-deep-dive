namespace ns_interfaces {

    export class FarmProcessor {

        public farmAnimals : Animal[] = [
             /*new Animal("Equidae"),*/ // error - this is abstract
             new Cow("Canidae"),
             new Duck("Felidae"),
             new Goat("Bovinae")
            ]

        public MoveAnimalsToTheBarn() {
            for (const animal of this.farmAnimals) {
                animal.TakeToBarn();
                animal.Pet();

                /* You would think you can do somehing like that,
                    but in reality this is impossible because the interfaces
                    are compile-time things only - not available to use during runtime
                */
                //if(animal instanceof IMilkable) {
                //    (animal as IMilkable).Milk();
                //}


                /**
                 * You can trick the compiler by doing something like that:
                 */            
                if( (animal as IMilkable).Milk ) {
                    (animal as IMilkable).Milk();
                }
            }
        }
    }
}