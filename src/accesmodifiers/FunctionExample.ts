namespace ns_accessmodifiers {

    export class FunctionExample {
        
        private privateField : string = "Hello, this is a PRIVATE field";

        protected protectedField: string = "Good morning, this is a PROTECTED field";

        public publicField: string = "Good afteroon, this is a PUBLIC field";

        private static PRIVATE_STATIC_FIELD : string = "Good evning, this is a PRIVATE STATIC field"; 

        private privateFunction() : string {
            return this.privateField;
        }

        protected protectedFunction() : string {
            return this.protectedField;
        }

        public publicFuncion() : string {
            return this.publicField;
        }

        public static PRIVATE_STATIC_FUCTION() {
            return FunctionExample.PRIVATE_STATIC_FIELD;
        }

    }
}