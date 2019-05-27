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
var ns_accessmodifiers;
(function (ns_accessmodifiers) {
    var InternalFunctionExample = /** @class */ (function (_super) {
        __extends(InternalFunctionExample, _super);
        function InternalFunctionExample() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            /**
             * @internal
             */
            _this.internalField = "Wow, noone outside can see it! (kind of)";
            return _this;
        }
        /**
         * @internal
         */
        InternalFunctionExample.prototype.internalHelperMethod = function () {
            return this.internalField;
        };
        return InternalFunctionExample;
    }(ns_accessmodifiers.FunctionExample));
    ns_accessmodifiers.InternalFunctionExample = InternalFunctionExample;
})(ns_accessmodifiers || (ns_accessmodifiers = {}));
