"use strict";
var ns_interfaces;
(function (ns_interfaces) {
    var FarmProcessor = /** @class */ (function () {
        function FarmProcessor() {
            this.farmAnimals = [
                /*new Animal("Equidae"),*/ // error - this is abstract
                new ns_interfaces.Cow("Canidae"),
                new ns_interfaces.Duck("Felidae"),
                new ns_interfaces.Goat("Bovinae")
            ];
        }
        FarmProcessor.prototype.MoveAnimalsToTheBarn = function () {
            for (var _i = 0, _a = this.farmAnimals; _i < _a.length; _i++) {
                var animal = _a[_i];
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
                if (animal.Milk) {
                    animal.Milk();
                }
            }
        };
        return FarmProcessor;
    }());
    ns_interfaces.FarmProcessor = FarmProcessor;
})(ns_interfaces || (ns_interfaces = {}));
