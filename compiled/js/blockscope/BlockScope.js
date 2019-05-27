"use strict";
var ns_blockscope;
(function (ns_blockscope) {
    function DoSomething(a) {
        var calculationValue = 5;
        if (a > 0) {
            var calculationValue_1 = Math.sqrt(a);
            window.setTimeout(function () {
                console.log(calculationValue_1);
            }, 100);
        }
        calculationValue = calculationValue / 2;
        return calculationValue;
    }
    ns_blockscope.DoSomething = DoSomething;
})(ns_blockscope || (ns_blockscope = {}));
