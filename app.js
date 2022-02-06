

let myArray = [];

document.getElementById("addToArray").addEventListener("click",event => {
    myArray.push( parseInt(document.getElementById("myNumber").value) );
    document.getElementById("myNumber").value = "";
});
document.getElementById("result").addEventListener("click",event => {
    document.getElementById("output").textContent = JSON.stringify(myArray);
});
    

});

