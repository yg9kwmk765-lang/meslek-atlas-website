// Questions array
const questions = [
  {
    question: "Hayalindeki gün hangisi?",
    answers: [
      "🔧 Bir şey tamir etmek",
      "👨‍🍳 Yemek yapmak",
      "💻 Yazılım geliştirmek",
      "❤️ İnsanlara yardım etmek",
      "🚀 Kendi işimi kurmak",
    ],
  },
  {
    question: "En çok hangi alanda çalışmak isterdin?",
    answers: [
      "🔬 Bilim & Teknoloji",
      "📈 Finans & İş",
      "🎨 Sanat & Tasarım",
      "🏥 Sağlık & Bakım",
      "⚙️ Endüstri & Üretim",
    ],
  },
  {
    question: "Hangisi seni daha çok heyecanlandırır?",
    answers: [
      "🏗️ Büyük projeler yaratmak",
      "📝 Yeni şeyler öğrenmek",
      "📢 İnsanları motive etmek",
      "🎯 Zor problemleri çözmek",
      "🌍 Dünyayı değiştirmek",
    ],
  },
  {
    question: "Neleri başarmak seni daha mutlu ederdi?",
    answers: [
      "🏆 Liderlik yapmak",
      "📚 Yeni bilgiler araştırmak",
      "🖌️ Yaratıcı ürünler geliştirmek",
      "💪 Topluma katkıda bulunmak",
      "🌟 Kendine ait bir marka yaratmak",
    ],
  },
  {
    question: "Çözmek isteyeceğin bir problem hangisi olurdu?",
    answers: [
      "♻️ Çevre sorunlarını çözmek",
      "🧑‍🎓 Eğitimde fırsat eşitliği sağlamak",
      "🧠 Mental sağlığı desteklemek",
      "💡 Yeni teknolojiler geliştirmek",
      "🏛️ Daha iyi bir toplum düzeni oluşturmak",
    ],
  },
  {
    question: "Bir ekipte üstlenmek istediğin rol nedir?",
    answers: [
      "🎯 Hedef belirleyen kişi",
      "⚙️ Analiz yaparak strateji geliştiren kişi",
      "🔥 Takımı motive eden kişi",
      "🎨 Yaratıcı fikirler üreten kişi",
      "👥 İnsanları bir araya getiren kişi",
    ],
  },
  {
    question: "Hangi ortamda çalışmayı tercih edersin?",
    answers: [
      "🏢 Ofis ortamında",
      "🏠 Evden çalışma",
      "🌍 Seyahat ederek",
      "🛠️ Sahada çalışma",
      "🔬 Laboratuvar ortamında",
    ],
  },
  {
    question: "Bir projeye başlarken seni motive eden şey nedir?",
    answers: [
      "💡 Yeni ve yaratıcı bir fikir",
      "📈 Büyük bir başarıya ulaşma hedefi",
      "🛠️ Çözülmesi gereken zorlu problemler",
      "👥 İnsanların hayatına dokunmak",
      "🚀 Kendi yeteneklerini geliştirme fırsatı",
    ],
  },
  {
    question: "Boş zamanlarında en çok yaptığın şey nedir?",
    answers: [
      "🎮 Video oyunları oynamak",
      "📖 Kitap okumak",
      "⚽ Spor yapmak",
      "🎨 Çizim veya fotoğraf çekmek",
      "✨ Yeni bir şeyler denemek",
    ],
  },
  {
    question: "Hangi başarı hikayesi seni daha çok etkiler?",
    answers: [
      "🏆 Spor alanında zirveye ulaşmak",
      "🎓 Bilimsel bir keşfe imza atmak",
      "👩‍🍳 Gurme bir restoran sahibi olmak",
      "💻 Ünlü bir yazılım geliştirmek",
      "🌟 Sosyal bir girişim başlatmak",
    ],
  },
  {
    question: "Hangi becerileri geliştirmeyi en heyecan verici buluyorsun?",
    answers: [
      "🔩 Teknik beceriler",
      "🔍 Analitik düşünme",
      "🎭 Sosyal beceriler",
      "🎨 Sanatsal beceriler",
      "🔥 Girişimcilik becerileri",
    ],
  },
  {
    question: "Bir proje tamamlandıktan sonra seni en çok ne memnun eder?",
    answers: [
      "📊 Sonuçların başarısı",
      "🌟 İnsanlara kattığı değer",
      "💼 Profesyonel kariyerime katkısı",
      "🏅 Takımın başarısındaki rolüm",
      "🚀 Yeni bir başlangıç yapma fırsatı",
    ],
  },
];

let currentQuestionIndex = 0; // Track the current question
const userAnswers = []; // Store answers

// DOM Elements
const questionElement = document.querySelector(".subtitle");
const answersContainer = document.querySelector(".answers-section");
const progressText = document.querySelector(".progress-section p");
const progressBar = document.querySelector(".progress-bar");


// Initialize the first question
function loadQuestion() {
  if (currentQuestionIndex < questions.length) {
    const currentQuestion = questions[currentQuestionIndex];
    questionElement.textContent = currentQuestion.question;

    // Reset and populate answers
    answersContainer.innerHTML = "";
    currentQuestion.answers.forEach((answer) => {
      const button = document.createElement("button");
      button.classList.add("answer-button");
      button.textContent = answer;
      button.addEventListener("click", () => selectAnswer(answer));
      answersContainer.appendChild(button);
    });

    // Update progress info
    updateProgress();
  } else {
    showCompletionMessage();
  }
}

// Save the answer and load the next question
function selectAnswer(answer) {
  userAnswers.push(answer); // Save user answer
  currentQuestionIndex++; // Increment question index
  loadQuestion(); // Load the next question
}

// Update progress bar and text
function updateProgress() {
  const progressPercentage = ((currentQuestionIndex + 1) / questions.length) * 100;
  progressText.textContent = `${currentQuestionIndex + 1} / ${questions.length} Soru`;
  progressBar.style.width = `${progressPercentage}%`;
}

// Show the completion message
function showCompletionMessage() {
  // Display the title and completion message
  questionElement.textContent = "🧭 Kariyer DNA’n Hazır!";
  answersContainer.innerHTML = `
    <p style="font-size: 1.25rem; margin: 20px 0; color: #004d80;">
      Tebrikler! Testi tamamladın.
    </p>
    <div class="career-areas">
      <p>🥇 Teknoloji</p>
      <p>🥈 Teknik ve Ustalık</p>
      <p>🥉 Girişimcilik</p>
    </div>
  `;

  // Add a restart button
  const restartButton = document.createElement("button");
  restartButton.classList.add("start-button");
  restartButton.textContent = "Yeniden Başla";
  restartButton.addEventListener("click", restartTest);

  // Append the restart button to the footer
  answersContainer.appendChild(restartButton);

  // Update progress
  progressText.textContent = "Test Tamamlandı";
  progressBar.style.width = "100%";
}

// Restart the test
function restartTest() {
  currentQuestionIndex = 0; // Reset to the first question
  userAnswers.length = 0; // Clear previous answers
  loadQuestion(); // Reload the first question
}

// Start the test
loadQuestion();