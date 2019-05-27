declare namespace ns_namespaces {
    import SecondNamespaceClass = ns_namespaces_external.SecondNamespaceClass;
    class Namespaces {
        dependency: SecondNamespaceClass;
        constructor();
    }
}
