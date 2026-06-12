const questions = [
{
question:"Hayalindeki gün hangisi?",
answers:[
{text:"🔧 Bir şey tamir etmek",type:"teknik"},
{text:"👨‍🍳 Yemek yapmak",type:"yaratici"},
{text:"💻 Yazılım geliştirmek",type:"teknoloji"},
{text:"❤️ İnsanlara yardım etmek",type:"sosyal"},
{text:"🚀 Kendi işimi kurmak",type:"girisimcilik"},
]
},

{
question:"En çok hangi alanda çalışmak isterdin?",
answers:[
{text:"🔬 Bilim ve Teknoloji",type:"teknoloji"},
{text:"📈 Finans ve İş",type:"girisimcilik"},
{text:"🎨 Sanat ve Tasarım",type:"yaratici"},
{text:"🏥 Sağlık",type:"sosyal"},
{text:"⚙️ Üretim",type:"teknik"},
]
},

{
question:"Hangisi seni daha çok heyecanlandırır?",
answers:[
{text:"🏗️ Büyük projeler",type:"teknik"},
{text:"📝 Yeni şeyler öğrenmek",type:"teknoloji"},
{text:"📢 İnsanları motive etmek",type:"sosyal"},
{text:"🎨 Yeni fikirler",type:"yaratici"},
{text:"🚀 Kendi işini kurmak",type:"girisimcilik"},
]
}
];

const scores={
teknoloji:0,
teknik:0,
girisimcilik:0,
sosyal:0,
yaratici:0
};

let currentQuestion=0;

const questionElement=document.querySelector(".subtitle");
const answersElement=document.querySelector(".answers-section");
const progressText=document.querySelector(".progress-section p");
const progressBar=document.querySelector(".progress-bar");

function loadQuestion(){

if(currentQuestion>=questions.length){

showResult();

return;

}

let q=questions[currentQuestion];

questionElement.textContent=q.question;

answersElement.innerHTML="";

q.answers.forEach(answer=>{

let button=document.createElement("button");

button.className="answer-button";

button.textContent=answer.text;

button.onclick=function(){

scores[answer.type]++;

currentQuestion++;

loadQuestion();

};

answersElement.appendChild(button);

});

progressText.textContent=(currentQuestion+1)+" / "+questions.length+" Soru";

progressBar.style.width=((currentQuestion+1)/questions.length*100)+"%";

}

function winner(){

let best="";

let max=-1;

for(let key in scores){

if(scores[key]>max){

max=scores[key];

best=key;

}

}

return best;

}

function resultInfo(type){

switch(type){

case "teknoloji":

return{
icon:"💻",
title:"Teknoloji",
jobs:["👨‍💻 Yazılımcı","🤖 Yapay Zeka","📊 Veri Analisti"]
};

case "teknik":

return{
icon:"🔧",
title:"Teknik",
jobs:["⚡ Elektrikçi","🚗 Oto Tamir","🏗️ Tekniker"]
};

case "girisimcilik":

return{
icon:"🚀",
title:"Girişimcilik",
jobs:["💼 Girişimci","📈 Yönetici","🏦 Finans"]
};

case "sosyal":

return{
icon:"❤️",
title:"Sosyal",
jobs:["👨‍🏫 Öğretmen","👩‍⚕️ Hemşire","🧠 Psikolog"]
};

default:

return{
icon:"🎨",
title:"Yaratıcı",
jobs:["🎨 Tasarımcı","📷 Fotoğrafçı","👨‍🍳 Aşçı"]
};

}

}

function showResult(){

let r=resultInfo(winner());

questionElement.innerHTML=
`
🧭 Kariyer DNA'n Hazır!
`;

answersElement.innerHTML=
`
<div class="career-areas">

<h2>${r.icon} ${r.title}</h2>

<p>

Kendini keşfet.
Mesleğini tanı.
Geleceğini planla.

</p>

<br>

<p>${r.jobs[0]}</p>

<p>${r.jobs[1]}</p>

<p>${r.jobs[2]}</p>

<br>

<button class="start-button" onclick="restartTest()">

🔄 Yeniden Başla

</button>

</div>
`;

progressText.textContent="Test Tamamlandı";

progressBar.style.width="100%";

}

function restartTest(){

currentQuestion=0;

scores.teknoloji=0;
scores.teknik=0;
scores.girisimcilik=0;
scores.sosyal=0;
scores.yaratici=0;

loadQuestion();

}

loadQuestion();