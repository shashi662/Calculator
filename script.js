function gethistory() {
    return document.getElementById('history').innerText;
}

function printhistory(num){
    document.getElementById('history').innerText=num;
}

function getoutput(){
    return document.getElementById('output').innerText;
}

function printoutput(num) {
    if(num=="-"){
        return "";
    }
    if (num=="") {
        document.getElementById('output').innerText="";
    } else {
        document.getElementById('output').innerText=getFormattedNumber(num);
    }
}

function getFormattedNumber(num) {
    let n= Number(num);
    let value=n.toLocaleString("en");
    return value;
}
// alert(getFormattedNumber("Your Calculator is Ready"))
alert("Your Calculator is ready..!")

function reverseNumberFormat(num) {
    return Number(num.replace(/,/g,''));
}

var operator=document.getElementsByClassName("operator");
for (let i = 0; i < operator.length; i++) {
    operator[i].addEventListener('click',function () {
        if (this.id=="clear") {
            printoutput("");
            printhistory("");
        }
        if (this.id=="backspace") {
            var output=reverseNumberFormat(getoutput()).toString();
            if (output) {
                output=output.substr(0,output.length-1);
                printoutput(output);
            }
        }
        
        else{
            var output=getoutput();
            var history=gethistory();
            if (history!="" && output=="") {
                if (isNaN(history[history.length-1])) {
                    history=history.substr(0,history.length-1);
                }
            }
            if(output!="" || history!=""){
                output= output==""?
                output:reverseNumberFormat(output);
                history=history+output;
                if (this.id=="=") {
                    var result=eval(history);
                    printoutput(result);
                    printhistory("");
                }
                else{
                    history=history+this.id;
                    printhistory(history);
                    printoutput("");
                }
            }    
        }
    })
}

var number=document.getElementsByClassName("number");
for (let i = 0; i < number.length; i++) {
    number[i].addEventListener('click',function () {
        var output=reverseNumberFormat(getoutput());
        if (output!=NaN || output==".") {
            output=output + this.id;
            printoutput(output);
        }
    })
}



