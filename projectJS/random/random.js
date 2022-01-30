
function randomInteger() {
    let min = +document.body.querySelector('.min').value
    let max = +document.body.querySelector('.max').value
    let rand = min + Math.random() * (max + 1 - min);
    
    return (Math.floor(rand));
};
function createArrRandom(){
    let min = +document.body.querySelector('.min').value
    let max = +document.body.querySelector('.max').value

    let count = +document.body.querySelector('.count-num').value
    let arr = []
if(min >= max || count == '' || count==0 || min == '' || max== ''){
    alert("Error")
}else{


    for(let i = 0;i<count;i++){
        let num = randomInteger()
        arr.push(num)
    }
    for (let i = 0 ;i < arr.length;i++){
        document.querySelector(".text-result").value += arr[i] + ', ';
        if(document.querySelector(".text-result").value.length == 20){
            
        }
    }
}
}







