
let arrayValue = []
function fnCall(key) {
    console.log(key)
    let value = (document.getElementById("enterButton").querySelector("input").value);
    let arr=value.split(",")
    let result = null;
    console.log(arr)
    if(arrayValue.length==0){
        arrayValue=arr;
    }
    switch (key) {
        case "length":
            result = arrayValue.length
            break;
        case "toString":
            result = arrayValue.toString()
            break;
        case "pop":
            arrayValue.pop()
            result = arrayValue
            break;
        case "push":
            arrayValue.push(value)
            result = arrayValue
            break;
        case "concat":
            result = arrayValue.concat(arr)
            break;
        default:
            break;
    }
    document.getElementById("result").querySelector("input").value = result;
}

