let a = "12.220";

switch (typeof a) {
    case "number":
        console.log("Number")
        break;
    case 'boolean':
        console.log("boolean");
        break;
        

    default:
        console.log("other")
        break;
}