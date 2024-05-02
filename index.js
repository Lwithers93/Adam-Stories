const startBtn = document.getElementById("startBtn");
const headingSection = document.getElementById("heading-section");
const questionSection = document.getElementById("question-section");
const textContainer = document.getElementById("text-container");
const author = document.getElementById("author");
const finishSection = document.getElementById("finish-section");
const btnContainer = document.getElementById("button-container");

let questionNumber = 0;

const questionContent = [
  {
    author: " <span>Luke</span>",
    text: `<p>Us absolutely <span>cowering</span> underneath a <span>rock ledge</span> in the <span>French Alps</span>, after being caught out by a <span>thunderstorm</span> on our first day of <span>trekking</span>.</p>`,
    questionNumber: 1,
  },
  {
    author: " <span>Gregg</span>",
    text: `<p>The time Adam <span>crashed</span> my <span>Corsa</span> on his final <span>journey home</span> after a month of <span>borrowing</span> it for his daily <span>commute to work</span>.
    </p>`,
    questionNumber: 2,
  },
  {
    author: " <span>James</span>",
    text: `<p>The time he came to <span>visit</span> me at <span>uni</span> and we went for a night out at <span>Smack</span>. It was <span>£1 vodka red bulls</span> and I was on the <span>dance floor</span> when I felt my <span>phone ringing in my pocket</span>. It was <span>Dad</span> who told me he had just had a <span>call from a policeman</span> who had found <span>Adam throwing up in a gutter</span> outside.</p>`,
    questionNumber: 3,
  },
  {
    author: " <span>Sam</span>",
    text: `<p>We were out at <span>dinner</span> at the <span>Assembly Rooms</span> in Bristol. For some reason we decided to try a <span>vegan pizza</span>. It arrived and turned out to be a <span>pitta bread</span> with <span>tomato paste</span>. We both went <span>to the bar</span> to ask <span>the waitress</span> to <span>swap</span> it. She <span>reluctantly agreed</span> so we <span>turned round</span> to <span>sit back down</span>. Just as we had turned our backs, she <span>yelled</span> at us, much <span>louder</span> than I think she expected: <span>“Suck a DICK”</span>.</p>`,
    questionNumber: 4,
  },
  {
    author: " <span>Pete</span>",
    text: `<p>A long <span>bike ride</span> on a roasting <span>hot summer day</span>. I did struggle to <span>keep up with</span> the 2 <span>athletes</span> I was with. But it was all followed by a fab <span>family BBQ</span> to finish off what was truly a <span>great day</span>!
    </p>`,
    questionNumber: 5,
  },
  {
    author: " <span>Mike</span>",
    text: `<p>Following a <span>visit to my uni</span>, and taste testing the <span>quaddie voddie</span> all night, I had to walk <span>Adam and Joff</span> home, but they kept <span>chasing each other</span> for no reason and <span>falling face first on the grass</span> every 50m.</p>`,
    questionNumber: 6,
  },
  {
    author: " <span>Joff</span>",
    text: `<p>Safe to say that this was a different kind of <span>vacation</span> at <span>Butlins</span>. <span>Bugged Out</span> festival was fantastic every year, having our very own rooms and the luxury of a <span>personal toilet</span> made this the <span>cushiest</span> festival we've ever been to.
    It featured some of our favourite <span>DJs</span> like <span>Night Slugs and Objekt</span>, as well as the legendary <span>Fatboy Slim</span> who hosted a party at the <span>water park</span>! But the real highlight was meeting an idol, <span>Mr Blobby</span>. He's a man (?) of few words. But it was still a <Span>privilege</span> to share a <span>short time</span> with him, presumably as he was making his way between <span>exclusive VIP events</span> and <span>after-parties</span>. We then <span>waved goodbye</span> and he <span>left charging across the arena</span> shouting <span>"BLOBBBBBYY!!!!"</span> and <span>crashing into the arcade games</span> at full speed. Classic <span>Mr Blobby</span>.</p>`,
    questionNumber: 7,
  },
];

const renderBtns = () => {
  btnContainer.innerHTML = `<button id="revealBtn" onclick="reveal()">Reveal All</button>
    <button id="backBtn" onclick="getPrevQuestion()">Back</button>
    <button id="nextBtn" onclick="getNextQuestion()">Next</button>`;
};

const restart = () => {
  questionNumber = 0;
  finishSection.style.display = "none";
  headingSection.style.display = "flex";
};

const reveal = () => {
  document.querySelectorAll("span").forEach((span) => {
    span.style.backgroundColor = "transparent"; // Use "transparent" instead of "none"
  });
  const revealBtn = document.getElementById("revealBtn");
  revealBtn.innerText = "Hide All";
  revealBtn.setAttribute("onclick", "hide()");
};

const hide = () => {
  document.querySelectorAll("span").forEach((span) => {
    span.style.backgroundColor = "black"; // Use "transparent" instead of "none"
  });
  const revealBtn = document.getElementById("revealBtn");

  revealBtn.innerText = "Reveal All";
  revealBtn.setAttribute("onclick", "reveal()");
};

const finishGame = () => {
  questionSection.style.display = "none";
  finishSection.style.display = "flex";
};

const renderQuestion = (number) => {
  textContainer.innerHTML = questionContent[number].text;
  author.innerHTML = questionContent[number].author;
  document.querySelectorAll("span").forEach((span) => {
    span.addEventListener("click", (e) => {
      e.target.style.backgroundColor = "transparent"; // Use "transparent" instead of "none"
    });
  });
  renderBtns();
};

const getNextQuestion = (number = questionNumber) => {
  renderQuestion(number);
  const nextBtn = document.getElementById("nextBtn");
  questionNumber++;
  if (questionNumber >= questionContent.length) {
    nextBtn.innerText = "Finish";
    nextBtn.setAttribute("onclick", "finishGame()");
  }
};
const getPrevQuestion = (number = questionNumber - 1) => {
  number--;
  if (number < 0) {
    headingSection.style.display = "flex";
    questionSection.style.display = "none";
    questionNumber = 0;
  } else {
    renderQuestion(number);
    questionNumber--;
  }
  const nextBtn = document.getElementById("nextBtn");
  if (questionNumber !== questionContent.length) {
    nextBtn.innerText = "Next";
    nextBtn.setAttribute("onclick", "getNextQuestion()");
  }
};
const start = () => {
  headingSection.style.display = "none";
  questionSection.style.display = "flex";
  getNextQuestion();
};
