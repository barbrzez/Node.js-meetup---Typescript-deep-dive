namespace ns_accessmodifiers {

    export class InternalFunctionExample extends FunctionExample {

        /**
         * @internal
         */
        internalField: string = "Wow, noone outside can see it! (kind of)";

        /**
         * @internal
         */
        internalHelperMethod() : string{
            return this.internalField;
        }
    }
}