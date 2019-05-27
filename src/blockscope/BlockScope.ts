namespace ns_blockscope {
    export function DoSomething(a: number) {
        let calculationValue = 5;

        if (a > 0) {
            let calculationValue = Math.sqrt(a);
            window.setTimeout(() => {
                console.log(calculationValue);
            }, 100);
        }

        calculationValue = calculationValue / 2;

        return calculationValue;
    }
}