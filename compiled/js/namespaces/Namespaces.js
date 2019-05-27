"use strict";
var ns_namespaces;
(function (ns_namespaces) {
    var SecondNamespaceClass = ns_namespaces_external.SecondNamespaceClass;
    var Namespaces = /** @class */ (function () {
        function Namespaces() {
            this.dependency = new SecondNamespaceClass();
        }
        return Namespaces;
    }());
    ns_namespaces.Namespaces = Namespaces;
})(ns_namespaces || (ns_namespaces = {}));
