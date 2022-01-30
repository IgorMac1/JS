const question = document.body.querySelector('.question');

const answer1 = document.querySelector('.answer-0')
const answer2 = document.querySelector('.answer-1')
const answer3 = document.querySelector('.answer-2')
const answer4 = document.querySelector('.answer-3')
const allAnswers = document.querySelectorAll('.answer button')
const help = document.querySelectorAll('.help button')

let score = 0
let count = 0

let modal = document.getElementById("myModal");

const questions = [
    {
        question : 'Как в JavaScript вычислить процент от числа ?', //1
        options : [
            'Так в JavaScript нельзя делать',
            'Оператор : %',
            'Умножить на кол-во процентов и разделить на 100',
            'Вывод метода findPrecent()',
        ],
        rightAnswer: 2
    },
    {
        question : 'Результат выражения "13" + 7 ', //2
        options : [
            '20',
            '137',
            'undefined',
            'error',
        ],
        rightAnswer: 1
    },
    {
        question : 'На JavaScript нельзя писать :',//3
        options : [
            'Игры',
            'Скрипты для сайтов',
            'Десктопные приложения',
            'Плохо',
        ],
        rightAnswer: 3
    },
    {
        question : 'Внутрь какого HTML-элемента вставляется JavaScript ?',//4
        options : [
            'script',
            'scriptyng',
            'js',
            'javascript',
        ],
        rightAnswer: 0
    },
    {
        question : 'Как создать функцию в JavaScript ?',//5
        options : [
            'function : myFunction()',
            'function  myFunction()',
            'function = myFunction()',
            'function - myFunction()',
        ],
        rightAnswer: 1
    },
    {
        question : 'Как вызвать функцию в JavaScript ?',//6
        options : [
            'myFunction()',
            'call myFunction()',
            'call.myFunction()',
            'myFunction',
        ],
        rightAnswer: 0
    },
    {
        question : 'Инструмент работы и динамических изменений на странице ?',//7
        options : [
            'BOM',
            'MOM',
            'DOM',
            'TOM',
        ],
        rightAnswer: 2
    },
    {
        question : 'Что означает CSS ?',//8
        options : [
            'Каскадные таблицы стилей',
            'Компьютерные таблицы стилей',
            'Творческие таблицы стилей',
            'Красочные таблицы стилей',
        ],
        rightAnswer: 0
    },
    {
        question : 'Где в HTML документе правильно ссылаться на внешнюю таблицу стилей ?',//9
        options : [
            'body',
            'header',
            'foter',
            'так нельзя делать',
        ],
        rightAnswer: 1
    },
    {
        question : 'Как написать оператор IF в JavaScript ?',//10
        options : [
            'if i = 5 then',
            'if i == 5',
            'if (i == 5)',
            'if (i = 5)',
        ],
        rightAnswer: 2
    },
    {
        question : 'Какой HTML тег используется для определения внутренней таблицы стилей ?',//11
        options : [
            'script',
            'css',
            'style',
            'div',
        ],
        rightAnswer: 2
    },
    {
        question : 'Какой синтаксис CSS является правильным ?',//12
        options : [
            'body{color:black}',
            'body=color:black',
            'color-black=body',
            'Нет правильных ответов',
        ],
        rightAnswer: 0
    },
    {
        question : 'Как написать Привет Мир в окне оповещения JS ?',//13
        options : [
            'alertbox("Привет Мир")',
            'msg(Привет Мир)',
            'echo(Привет Мир)',
            'alert("Привет Мир")',
        ],
        rightAnswer: 3
    },
    {
        question : 'Какое из слов не является зарезервированным в JS ?',//14
        options : [
            'default',
            'throw',
            'finally',
            'undefined',
        ],
        rightAnswer: 3
    },
    {
        question : 'В React все является ... ?',//15
        options : [
            'Модулем',
            'Компонентом',
            'Пакетом',
            'Классом',
        ],
        rightAnswer: 1
    },
]


const load = () => {
    question.innerHTML = questions[count].question
    answer1.innerHTML = questions[count].options[0]
    answer2.innerHTML = questions[count].options[1]
    answer3.innerHTML = questions[count].options[2]
    answer4.innerHTML = questions[count].options[3]
    console.log(count)
    console.log(score)
}


for (answer of allAnswers){
    answer.addEventListener('click',e =>checkAnswer(e))
}
for (helpButton of help){
    helpButton.addEventListener('click',e => checkHelp(e))
}





const checkAnswer = el => {
    
    if (el.target.dataset.id == questions[count].rightAnswer){
        el.target.classList.add('correct')
        score++
        document.querySelector('.stage' + score).classList.add('correct-result');
        if(score==15){
            modal.style.display = "block";
            document.querySelector('.modal-content h1').innerHTML= 'Поздравляем'
            document.querySelector('.result').innerHTML= `Вы получаете 1 000 000!`
        }
        setTimeout(continueGame ,2000)
       }
    else if(el.target.dataset.id != questions[count].rightAnswer){
        el.target.classList.add('wrong')
        setTimeout(gameOver,3000)
       
       
        }
     disabledAnswers()
}

const disabledAnswers = ()=>{
    allAnswers.forEach(item => {
        item.classList.add('disabled')
        if (item.dataset.id == questions[count].rightAnswer){
            item.classList.add('correct')
            
        }
    })
}


const continueGame = () => {
    enableAnswers()
    count++
    load()
    num1 = document.querySelector('.answer-0')
    num1.style.visibility="visible"
    num2 = document.querySelector('.answer-1')
    num2.style.visibility="visible"
    num1 = document.querySelector('.answer-2')
    num1.style.visibility="visible"
    num2 = document.querySelector('.answer-3')
    num2.style.visibility="visible"
}

const enableAnswers = () =>{
    allAnswers.forEach(item => {
        item.classList.remove('disabled','correct','wrong','hall-help','friend-call')
    })
}

const checkHelp = el => {
    console.log(el.target.dataset.id)
    if(el.target.dataset.id == 'fifty'){
        a = randIntExcep();
        b = randIntExcep();
        if(a==b){
            a = randIntExcep();
            
        }
        num1 = document.querySelector('.answer-' + a)
        num1.style.visibility="hidden"
        num2 = document.querySelector('.answer-' + b)
        num2.style.visibility="hidden"
        fifty = document.querySelector('#fifty')
        fifty.style.visibility="hidden"
        
    }
    else if (el.target.dataset.id == 'call'){
        a = randomInteger();
        num1 = document.querySelector('.answer-' + a)
        num1.classList.add('friend-call')
        friendCall = document.querySelector('#friend-call')
        friendCall.style.visibility="hidden"
    }
    else if (el.target.dataset.id == 'hall-help'){
        a = randomInteger();
        num1 = document.querySelector('.answer-' + a)
        num1.classList.add('hall-help')
        friendCall = document.querySelector('#hall-help')
        friendCall.style.visibility="hidden"
    }
}





function randIntExcep(min = 0, max = 3, exp=questions[count].rightAnswer) {
    let n;
    while(true){
        if((n = Math.floor(Math.random() * (max - min + 1)) + min) != exp)
        return n;
    }
}
function randomInteger(min=0, max=3) {
    let rand = min + Math.random() * (max + 1 - min);
    return Math.floor(rand);
}

function gameOver () {
    modal.style.display = "block";
    if ( score >= 0 && score < 5){
        // document.querySelector('.modal-content h1').innerHTML= 'Game Over'
        document.querySelector('.result p').innerHTML= 'Вы ничего не получаете !'
    }else if (score == 5 && score <10){
        // document.querySelector('.modal-content h1').innerHTML= 'Game Over'
        document.querySelector('.result p').innerHTML= 'Вы получаете 1000!'
    }else if (score == 10 && score < 15){
        // document.querySelector('.modal-content h1').innerHTML= 'Game Over'
        document.querySelector('.result p').innerHTML= 'Вы получаете 32000!'
    }
}

window.addEventListener('load',()=>{
   
load()

})











