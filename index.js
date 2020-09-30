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
while(eventIndex < buttonLength){
    button[eventIndex].addEventListener('click',(e)=>{
        if(quiz[quizIndex].currect === e.target.textContent){
            window.alert('正解です');
            point++;
        }else{
            window.alert('不正解です');
        }
        quizIndex++;
        if(quizIndex < quizLenght){
            setQuiz();
        }else{
            window.alert('あなたの正解数は'+point+'/'+quizLenght+'です')
        }
    })
       eventIndex++;
}
localStorage.setItem('history',point )