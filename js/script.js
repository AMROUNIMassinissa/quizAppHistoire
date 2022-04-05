const quizData = [{
        question: "En quelle année la Kabylie a-t-elle perdu la résistance conte le colonisateur français ?",
        r_1: "En 1848",
        r_2: "En 1857",
        r_3: "En 1871",
        correct: "c",
    },
    {
        question: "Quel était le nom de celui qui a conduit l'insurrection kabyle de 1871 ?",
        r_1: "Cheikh Mohand Oulhoucine",
        r_2: "Cheikh Aheddad",
        r_3: "Cheikh El Warthilani",
        correct: "b",
    },
    {
        question: "En 1924, les Kabyles de France créèrent à Paris une organisation politique indépendantiste, quel est le nom de cette organisation ?",
        r_1: "Le Parti du peuple algérien",
        r_2: "L'Etoile nord-africaine",
        r_3: "Le Mouvement pour une Algérie algérienne",
        correct: "b",
    },
    {
        question: "En quelle année Ait Amrane et ses compagnons de lutte écrivent-ils la célèbre chanson 'Ekker a mmis umazigh' ?  ",
        r_1: "En 1993",
        r_2: "En 1942",
        r_3: "En 1945",
        correct: "c",
    },
    {
        question: "Pourquoi des militants kabyles du PPA/MTLD furent-ils assassinés par les partisans de Messali ?",
        r_1: "Ils étaient contre l'indépendance de l'Algérie.",
        r_2: "Ils s'opposèrent au concept de l'Algérie algérienne.",
        r_3: "Ils demandèrent la consécration de la dimension amazighe dans l'identité nationale.",
        correct: "c",
    },
];
const quiz = document.getElementById("quiz");
const question = document.getElementById("question");
const r_1 = document.getElementById("r_1");
const r_2 = document.getElementById("r_2");
const r_3 = document.getElementById("r_3");
const submitbtn = document.getElementById("submit");
const answerEls = document.querySelectorAll(".ansewer");

let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz() {
    deselectedAnswer();
    const currentQuizData = quizData[currentQuiz];
    question.innerText = currentQuizData.question;
    r_1.innerText = currentQuizData.r_1;
    r_2.innerText = currentQuizData.r_2;
    r_3.innerText = currentQuizData.r_3;
}

function getSelected() {
    let answ = undefined;
    answerEls.forEach((ansewerEL) => {
        if (ansewerEL.checked) {
            answ = ansewerEL.id;
        }
    });

    return answ;
}

function deselectedAnswer() {
    answerEls.forEach((ansewerEL) => {
        ansewerEL.checked = false;
    });
}

submitbtn.addEventListener("click", () => {
    const ansewer = getSelected();
    if (ansewer) {
        if (ansewer === quizData[currentQuiz].correct) {
            score++;
        }
        currentQuiz++;

        if (currentQuiz < quizData.length) {
            loadQuiz();
        } else {
            console.log(score);
            quiz.innerHTML =
                "<h2> Vous avez eu " +
                score +
                "/" +
                quizData.length +
                " </h2><button onclick='location.reload()'>Relead</button>";
        }
    }
});