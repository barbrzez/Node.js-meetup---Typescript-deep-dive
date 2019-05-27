namespace ns_namespaces {
    import SecondNamespaceClass = ns_namespaces_external.SecondNamespaceClass;

    export class Namespaces {

        public dependency : SecondNamespaceClass;

        constructor() {
            this.dependency = new SecondNamespaceClass();
        }
    }
}