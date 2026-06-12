const questions = [
{
question:"Hayalindeki gün hangisi?",
answers:["🔧 Teknik işler","💻 Teknoloji","❤️ İnsanlara yardım","🎨 Tasarım","🚀 İş kurmak"]
},
{
question:"En sevdiğin ders?",
answers:["📐 Matematik","🧪 Fen","📚 Edebiyat","🎨 Resim","💼 Ekonomi"]
},
{
question:"Boş zamanda ne yaparsın?",
answers:["🎮 Oyun","📖 Kitap","⚽ Spor","💻 Bilgisayar","🎵 Müzik"]
},
{
question:"Nasıl çalışmayı seversin?",
answers:["👥 Takım","🏠 Tek başıma","🌍 Seyahat","🛠 Sahada","🏢 Ofiste"]
},
{
question:"Hangisi seni mutlu eder?",
answers:["💰 Para","❤️ Yardım","🏆 Başarı","🎨 Üretmek","🚀 Liderlik"]
}
];

let current=0;

const q=document.querySelector(".subtitle");
const a=document.querySelector(".answers-section");
const p=document.querySelector(".progress-section p");
const b=document.querySelector(".progress-bar");

function load(){

if(current>=questions.length){

finish();

return;

}

q.textContent=questions[current].question;

a.innerHTML="";

questions[current].answers.forEach(item=>{

let btn=document.createElement("button");

btn.className="answer-button";

btn.textContent=item;

btn.onclick=function(){

current++;

load();

};

a.appendChild(btn);

});

p.textContent=(current+1)+" / "+questions.length+" Soru";

b.style.width=((current+1)/questions.length*100)+"%";

}

function finish(){

q.innerHTML="🧭 Kariyer DNA'n Hazır!";

a.innerHTML=`

<div class="career-areas">

<h2>🚀 Geleceğin Seni Bekliyor!</h2>

<br>

<p>💻 Teknoloji</p>

<p>🔧 Teknik Meslekler</p>

<p>🚀 Girişimcilik</p>

<br>

<button class="start-button"

onclick="restart()">

🔄 Yeniden Başla

</button>

</div>

`;

p.textContent="Tamamlandı";

b.style.width="100%";

}

function restart(){

current=0;

load();

}

load();