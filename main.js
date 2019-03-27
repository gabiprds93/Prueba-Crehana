//caso 1
function sortWeights(){
    let inputList = document.getElementById("list").value;
    let resultList = document.getElementById("resultWeights");
    let arrayObjects = [];
    let arrayNums = inputList.split(' ');

    resultList.textContent = "";
    
    if(arrayNums[0] != ""){
        arrayNums.forEach(function(item, index){
            arrayObjects[index] = {numWeight: item};
        });

        arrayObjects.forEach(function(obj, index){
            array = obj.numWeight.split('');
            arrayObjects[index].addDigits = array.reduce(function(total, item){
                item = parseInt(item);
                return total + item;
            }, 0);
        });

        arrayObjects.sort(function(a, b){
            return a.addDigits - b.addDigits;
        });

        arrayObjects.forEach(function(item){
            resultList.innerHTML += item.numWeight + " ";
        });
    }
    else{
        resultList.textContent = "Lista vacía"
    }
}

//caso 2
function indetifyIPv4() {
    let inputText = document.getElementById("text").value;
    let resultLbl = document.getElementById("result");
    let result = false;
    let arrayOctets = inputText.split('.');

    if (arrayOctets.length == 4) {
        result = arrayOctets.every(checkNumbers);
    }

    if(result){
        resultLbl.textContent = "Entrada valida";
    }
    else{
        resultLbl.textContent = "Entrada inválida";
    }
}

function checkNumbers(num) {
    if(num.length > 1 && num[0] == 0){
        return false
    }
    num = parseInt(num);
    return num >= 0 && num <= 255;
}

//caso 3
let object = { 'a': [{ 'b': { 'c': 3 } }] };
let path = 'a.b.c';
let defaultValue = 'default';
let object2 = {a: { b: { c: 3 } } };
let defaultValue2 = 5; 
let path2 = 'a.b.d';

const value = getIn(object, path, defaultValue);
const value2 = getIn(object2, path, defaultValue2);
const value3 = getIn(object2, path2, defaultValue2);

let result1 = document.getElementById("getIn1");
let result2 = document.getElementById("getIn2");
let result3 = document.getElementById("getIn3");

result1.innerHTML += value;
result2.innerHTML += value2;
result3.innerHTML += value3;

function getIn(object, path, defaultValue)
{
    let pathArray = path.split('.');  
    let result;
    for(let n in object)
    {
        if(n == pathArray[0])
        {
            object = object[pathArray[0]];
            path = pathArray.slice(1).join('.');
            if(path == "")
            {
                return object;
            }
            result = getIn(object, path, defaultValue)
        }
    }
    if(result == undefined)
    {
        return defaultValue;
    }
    else
    {
        return result;        
    }
}