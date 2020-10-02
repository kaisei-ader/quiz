let quiz = [
    {
    question: 'けんすけのお姉ちゃんの名前はどれ？',
    anwers: ['りこ','まみこ','れな','ゆうき'],
    currect: 'ゆうき'},
    {  
    question: 'かいせいの苗字は？',
    anwers: ['増田','稲田','久保','岩田'],
    currect: '稲田'},
    {    
    question: 'Facebookの創設者は誰？',
    anwers: ['スティーブ・ジョブズ','ビル・ゲイツ','マーク・ザッカーバーグ','ジェフ・べゾス'],
    currect: 'マーク・ザッカーバーグ'}
]
let   point = 0;
const quizLenght = quiz.length;
let   quizIndex = 0;
const button = document.getElementsByTagName('button');
const buttonLength = button.length;

const setQuiz = () =>{
 document.getElementById('js-text').textContent = quiz[quizIndex].question;
 let buttonIndex = 0;
  while(buttonIndex < buttonLength){
    button[buttonIndex].textContent = quiz[quizIndex].anwers[buttonIndex]
    buttonIndex++;
  }
}
setQuiz();



let eventIndex = 0;
while (eventIndex < buttonLength){
    button[eventIndex].addEventListener('click',(e)=>{
        if (quiz[quizIndex].currect === e.target.textContent){
            window.alert('正解です');
            point++;
        } else {
            window.alert('不正解です');
        }
        quizIndex++;
        if (quizIndex < quizLenght){
            setQuiz();
        } else {
            window.alert('あなたの正解数は'+point+'/'+quizLenght+'です')
            let today = new Date();
            histories.push({time:today.getFullYear() + ':' + (today.getMonth() + 1 ) + ':' + today.getDate(),
            point:point})
            localStorage.setItem("history", JSON.stringify(histories));
            const historiesEl = document.getElementById("histories");
            let newElement = document.createElement("p");
            newElement.setAttribute("class", "history");
            newElement.innerHTML = `${ histories.slice(-1)[0].time }: ${ histories.slice(-1)[0].point }`
            historiesEl.appendChild(newElement)
            quizIndex = 0;
            point = 0;    
            setQuiz();     
        }
    })
       eventIndex++;
}
histories = JSON.parse(localStorage.getItem("history"))
if(!histories){
    localStorage.setItem("history",JSON.stringify([]))
    histories = []
}
const localsetUp = () => {
    const historiesEl = document.getElementById("histories");
    histories.forEach((item) => {
        let newElement = document.createElement("p");
        newElement.setAttribute("class", "history");
        newElement.innerHTML = `${ item.time }: ${ item.point }`
        historiesEl.appendChild(newElement)
    })
}
localsetUp();