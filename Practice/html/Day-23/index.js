/*****************Question 1*****************/ 

function shiftPosition(){
    // debugger
    let zeroesAndOnes = document.getElementById('zerosAndOnes').value;
    let inputData = [];
    if(zeroesAndOnes.value!=""){
         inputData = zeroesAndOnes.split("");
    }
    for(let i=0; i<inputData.length; i++){
        for(let j=0; j<inputData.length; j++){
            if(inputData[i]=='1' && inputData[j]=='0'){
                let temp=inputData[i];
                inputData[i]=inputData[j];
                inputData[j]=temp;
            }
        }
    }
    localStorage.setItem('Question1_output',JSON.stringify(inputData));
    window.open("display1.html","_blank");
}


/*****************Question 2*****************/

function identifyPangram(){
    //debugger
    let pangram = document.getElementById('pangram').value;
    let str = pangram.toLowerCase();
    let inputData = [];
    if(str!=""){
        inputData = str.split("");
    }
    let characterArr = [];
    for(let i=0; i<inputData.length; i++){
        if(inputData[i]!=' '){
            if(characterArr.includes(inputData[i]))
                    continue;
            else { 
                characterArr.push(inputData[i]);
            }
        }           
    }
    if(characterArr.length==26){
        console.log(characterArr);
        console.log("This String is Pangram");
    }
    else{
        console.log("This String is not a Pangram");
    }
    localStorage.setItem('Question2_output',JSON.stringify(characterArr));
    window.open("display2.html","_blank");
}


/****************Question 3*****************/ 

function findPairs(){
    //debugger
    let arrayElements = document.getElementById('array').value;
    let target = document.getElementById('target').value;
    let new_target = parseInt(target);
    console.log(typeof new_target);
    let new_arrayElements = arrayElements.split("");
    console.log('new_arrayElements', new_arrayElements)
    let arrayData = [];
    for(let i=0; i<new_arrayElements.length; i++){
        let num;
        num=parseInt(new_arrayElements[i]);
        arrayData.push(num);
    }

    let pair = [];
    let resultantArr = [];
    for(let i=0; i<arrayData.length; i++){
        //debugger
        for(let j=1; j<arrayData.length-1; j++){
            if(arrayData[i]+arrayData[j]==new_target){
                pair.push(arrayData[i],arrayData[j]);
            }
        }
        resultantArr.push(pair);
        pair = [];
    }
    var filteredArray = resultantArr.filter(arr => arr.length !== 0);
    // console.log('filteredArray', filteredArray)

    localStorage.setItem('Question3_output',JSON.stringify(filteredArray));
    window.open("display3.html","_blank");
    arrayElements = "";
}


/*****************Page navigation Section ***************/
 
let firstQuestionDiv = document.getElementById('question_1');
let secondQuestionDiv = document.getElementById('question_2');
let thirdQuestionDiv = document.getElementById('question_3');
let previousBtn = document.getElementById('previousBtn');
let nextBtn = document.getElementById('nextBtn')

let counter=0;

function moveForward(){
    counter++;
    if(counter==1){
        firstQuestionDiv.style.display="none";
        secondQuestionDiv.style.display="block";
    }
    else if(counter==2){
        secondQuestionDiv.style.display="none";
        thirdQuestionDiv.style.display="block";
        nextBtn.innerHTML="Submit";
    }
}

function movePrevious(){
    counter--;
    if(counter==1){
        thirdQuestionDiv.style.display="none";
        secondQuestionDiv.style.display="block";
        nextBtn.innerHTML="next";
    }
    else if(counter==0){
        secondQuestionDiv.style.display="none";
        firstQuestionDiv.style.display="block";
        previousBtn.style.display="none";
    }
}
