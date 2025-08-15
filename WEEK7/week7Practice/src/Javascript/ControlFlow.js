let a = [2,34,322];

switch (typeof a) {
    case "number":
        console.log("Number")
        break;
    case 'boolean':
        console.log("boolean");
        break;

    case 'string':
        console.log("String");
        break;
    
    case 'object':
        console.log('Arrays');
        break;
        

    default:
        console.log("other")
        break;
}