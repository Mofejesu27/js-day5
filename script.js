document.getElementById('title').innerHTML="My Fifth Javascript Experience";
document.getElementById('experience').innerHTML="In my fifth Javascript class, I was introduced to Conditional Statement. I learnt that with conditional statement, a certain condition must be met before the program can be executed.  I also learnt the 4 conditional statement in Javascript which are; if, else, else if and switch.";
document.getElementById('topic').innerHTML="Conditional Statement"
document.getElementById('grade').innerHTML="Examination Grading"

let score = 85;
if(score >= 70 && score <= 100){
    result = ('A');
}
else if(score >= 60 && score <= 69 ){
    result = ('B');
}
else if(score >= 50 && score <= 59){
    result = ('C');
}
else if(score >= 45 && score <= 49){
    result = ('D');
}
else if(score >= 40 && score <= 44){
    result = ('E');
}
else{
    result = ('F');
}


document.getElementById('score').innerHTML="<code>let score=85</code> <br/> <code> if score(score >=70) && score <= 100{ </code><br/> <code> Result = ('A'); <br>} </code> <br> <code> else if(score >= 60 && score <= 69) { </code> <br> <code> Result = ('B'); <br> } </code> <br> <code> else if(score >= 50 && score <= 59){ </code> <br> <code> Result = ('C'); <br>} </code> <br> <code> else if(score >= 45 && score <= 49){ </code> <br> <code> Result = ('D'); <br>} </code> <br> <code> else if(score >= 40 && score <= 44){ </code> <br> <code> Result = ('E'); <br>} </code><br> <code>else{</code> <br> <code> Result = ('F'); <br>} </code> <br>Grade:" + result;
console.log(result)

