"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var ns_interfaces;
(function (ns_interfaces) {
    var Animal = /** @class */ (function () {
        function Animal(name) {
            this.name = name;
        }
        Animal.prototype.TakeToBarn = function () { };
        Animal.prototype.Pet = function () { };
        return Animal;
    }());
    ns_interfaces.Animal = Animal;
    var Cow = /** @class */ (function (_super) {
        __extends(Cow, _super);
        function Cow() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        Cow.prototype.Milk = function () { };
        return Cow;
    }(Animal));
    ns_interfaces.Cow = Cow;
    var Goat = /** @class */ (function (_super) {
        __extends(Goat, _super);
        function Goat() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        Goat.prototype.Milk = function () { };
        return Goat;
    }(Animal));
    ns_interfaces.Goat = Goat;
    var Duck = /** @class */ (function (_super) {
        __extends(Duck, _super);
        function Duck() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        return Duck;
    }(Animal));
    ns_interfaces.Duck = Duck;
})(ns_interfaces || (ns_interfaces = {}));
