export const parseType = (keyword: string, type: any) => {
    switch (keyword) {
        case "NumberKeyword":
            return "number";
        case "StringKeyword":
            return "string";
        case "BooleanKeyword":
            return "boolean";
        case "UnionType":
            return type.type.types.map((t: any) =>
                t.typeName ?? t.literal?.text ?? t.kind
            ).join(
                " | ",
            );
        case "ArrayType":
            return "[]";
        case "AnyKeyword":
            return "any";
        case "NullKeyword":
            return "null";
        case "UndefinedKeyword":
            return "undefined";
        case "VoidKeyword":
            return "void";
        case "NeverKeyword":
            return "never";
        case "TypeReference":
            return type.type.typeName ?? type.type.kind;

        default:
            return keyword;
    }
};
