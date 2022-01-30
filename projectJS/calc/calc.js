function insert(num){
    document.form.textview.value = document.form.textview.value + num;
}
function clean(){
    document.form.textview.value = '';
}
function back(){
    let numb = document.form.textview.value;
    document.form.textview.value = numb.substring(0,numb.length - 1);
}
function equal(){
	let exp = document.form.textview.value;
	if(exp){
		document.form.textview.value = eval(exp);
        
    }
}

function procent(){
let str = document.form.textview.value;
    
let result = str.split('+')
    let aArr =[]
    let separator = ''
    let i = -1
    let a = ''
    let b = ''
    for(let char of str) {
        i++
        if(char == '+' || char == '-' || char == '/' || char == '*'){
            separator += char
            break
        }
    }
for(let j =0;j <i;j++){
    a += str[j]
}
for(i=i+1;i<str.length;i++){
    b += str[i]
}
 let resultNum
switch(separator){
    case "+":
        resultNum = +a + (+a * +b / 100);
        break;
    case "-":
        resultNum = +a - (+a * +b / 100);
        break;   
    case "/":
        resultNum = ((+a / +b) * 100);
        break; 
    case "*":
        resultNum = ((+a * +b) / 100);
        break;  
    }
    
 
document.form.textview.value = resultNum;
}