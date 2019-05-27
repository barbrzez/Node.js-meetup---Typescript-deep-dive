"use strict";
var ns_accessmodifiers;
(function (ns_accessmodifiers) {
    var FunctionExample = /** @class */ (function () {
        function FunctionExample() {
            this.privateField = "Hello, this is a PRIVATE field";
            this.protectedField = "Good morning, this is a PROTECTED field";
            this.publicField = "Good afteroon, this is a PUBLIC field";
        }
        FunctionExample.prototype.privateFunction = function () {
            return this.privateField;
        };
        FunctionExample.prototype.protectedFunction = function () {
            return this.protectedField;
        };
        FunctionExample.prototype.publicFuncion = function () {
            return this.publicField;
        };
        FunctionExample.PRIVATE_STATIC_FUCTION = function () {
            return FunctionExample.PRIVATE_STATIC_FIELD;
        };
        FunctionExample.PRIVATE_STATIC_FIELD = "Good evning, this is a PRIVATE STATIC field";
        return FunctionExample;
    }());
    ns_accessmodifiers.FunctionExample = FunctionExample;
})(ns_accessmodifiers || (ns_accessmodifiers = {}));
