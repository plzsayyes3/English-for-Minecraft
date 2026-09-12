const lessons = [
  {
    stage: 1,
    stageTitle: "Forest",
    stageMessage: "Learn the things you can see.",
    type: "FIND IT",
    prompt: "Find a tree.",
    hint: "tree = 木",
    answer: "tree",
    feedback: "Tree means 木。英語を見て木を選べました。",
    choices: [
      { id: "tree", emoji: "🌳", label: "TREE" },
      { id: "stone", emoji: "🪨", label: "STONE" },
      { id: "pig", emoji: "🐷", label: "PIG" },
      { id: "water", emoji: "💧", label: "WATER" }
    ]
  },
  {
    stage: 1,
    stageTitle: "Forest",
    stageMessage: "Learn the things you can see.",
    type: "FIND IT",
    prompt: "Find water.",
    hint: "water = 水",
    answer: "water",
    feedback: "Water means 水。Minecraftでもよく見る単語です。",
    choices: [
      { id: "wood", emoji: "🪵", label: "WOOD" },
      { id: "water", emoji: "💧", label: "WATER" },
      { id: "bed", emoji: "🛏️", label: "BED" },
      { id: "cow", emoji: "🐄", label: "COW" }
    ]
  },
  {
    stage: 1,
    stageTitle: "Forest",
    stageMessage: "Learn the things you can see.",
    type: "FIND IT",
    prompt: "Find stone.",
    hint: "stone = 石",
    answer: "stone",
    feedback: "Stone means 石。次からは『すること』も読みます。",
    choices: [
      { id: "stone", emoji: "🪨", label: "STONE" },
      { id: "door", emoji: "🚪", label: "DOOR" },
      { id: "apple", emoji: "🍎", label: "APPLE" },
      { id: "tree", emoji: "🌳", label: "TREE" }
    ]
  },
  {
    stage: 2,
    stageTitle: "Shelter",
    stageMessage: "Read actions and build a safe place.",
    type: "DO IT",
    prompt: "Open the door.",
    hint: "open = 開ける / door = ドア",
    answer: "door",
    feedback: "Open the door. = ドアを開けよう。動詞 + もの、の形です。",
    choices: [
      { id: "chest", emoji: "📦", label: "CHEST" },
      { id: "door", emoji: "🚪", label: "DOOR" },
      { id: "bed", emoji: "🛏️", label: "BED" },
      { id: "food", emoji: "🍞", label: "FOOD" }
    ]
  },
  {
    stage: 2,
    stageTitle: "Shelter",
    stageMessage: "Read actions and build a safe place.",
    type: "DO IT",
    prompt: "Get wood.",
    hint: "get = 手に入れる / wood = 木材",
    answer: "wood",
    feedback: "Get wood. = 木材を手に入れよう。短い指示をそのまま読めています。",
    choices: [
      { id: "wood", emoji: "🪵", label: "WOOD" },
      { id: "water", emoji: "💧", label: "WATER" },
      { id: "stone", emoji: "🪨", label: "STONE" },
      { id: "food", emoji: "🍞", label: "FOOD" }
    ]
  },
  {
    stage: 2,
    stageTitle: "Shelter",
    stageMessage: "Read actions and build a safe place.",
    type: "DO IT",
    prompt: "Sleep in the bed.",
    hint: "sleep = ねる / bed = ベッド",
    answer: "bed",
    feedback: "Sleep in the bed. = ベッドで寝よう。文が少し長くなりました。",
    choices: [
      { id: "sword", emoji: "⚔️", label: "SWORD" },
      { id: "bed", emoji: "🛏️", label: "BED" },
      { id: "tree", emoji: "🌳", label: "TREE" },
      { id: "chest", emoji: "📦", label: "CHEST" }
    ]
  },
  {
    stage: 3,
    stageTitle: "Cave",
    stageMessage: "Read rules before you explore.",
    type: "READ THE RULE",
    prompt: "Do not break this block.",
    hint: "do not = 〜しないで / break = こわす",
    answer: "dont-break",
    feedback: "Do not break = こわさないで。サーバールールでよく使える読み方です。",
    choices: [
      { id: "break", emoji: "⛏️", label: "こわしていい" },
      { id: "dont-break", emoji: "🛑", label: "こわさない" },
      { id: "eat", emoji: "🍞", label: "食べる" },
      { id: "sleep", emoji: "🛏️", label: "ねる" }
    ]
  },
  {
    stage: 3,
    stageTitle: "Cave",
    stageMessage: "Read rules before you explore.",
    type: "READ THE RULE",
    prompt: "You can build here.",
    hint: "can = できる / build = 建てる / here = ここ",
    answer: "can-build",
    feedback: "You can build here. = ここでは建築できます。can は『できる』の目印です。",
    choices: [
      { id: "no-build", emoji: "🚫", label: "建築できない" },
      { id: "can-build", emoji: "🏠", label: "建築できる" },
      { id: "run", emoji: "🏃", label: "走る" },
      { id: "fight", emoji: "⚔️", label: "戦う" }
    ]
  },
  {
    stage: 3,
    stageTitle: "Cave",
    stageMessage: "Read rules before you explore.",
    type: "READ THE RULE",
    prompt: "Play with your friends.",
    hint: "with = 〜といっしょに / friends = 友だち",
    answer: "friends",
    feedback: "with your friends = 友だちといっしょに。サーバー紹介でも出やすい表現です。",
    choices: [
      { id: "alone", emoji: "🧍", label: "ひとりで" },
      { id: "friends", emoji: "🧑‍🤝‍🧑", label: "友だちと" },
      { id: "sleep", emoji: "🛏️", label: "ねる" },
      { id: "water", emoji: "💧", label: "水で" }
    ]
  },
  {
    stage: 4,
    stageTitle: "Server Gate",
    stageMessage: "Now read a real-style server description.",
    type: "SERVER INFO",
    prompt: "Survival server. Build houses and explore the world.",
    hint: "survival = サバイバル / explore = 探検する",
    answer: "build-explore",
    feedback: "サバイバルで、家を建てたり世界を探検したりするサーバーだと読めました。",
    choices: [
      { id: "build-explore", emoji: "🏠", label: "建築・探検" },
      { id: "only-fight", emoji: "⚔️", label: "戦うだけ" },
      { id: "no-build", emoji: "🚫", label: "建築禁止" },
      { id: "race", emoji: "🏁", label: "レース" }
    ]
  },
  {
    stage: 4,
    stageTitle: "Server Gate",
    stageMessage: "Now read a real-style server description.",
    type: "SERVER INFO",
    prompt: "PvP is off. Do not fight other players.",
    hint: "off = オフ / fight = 戦う / other players = ほかのプレイヤー",
    answer: "no-pvp",
    feedback: "PvP is off. = PvPはオフ。Do not fight = 戦わないで、まで読めました。",
    choices: [
      { id: "pvp", emoji: "⚔️", label: "PvPできる" },
      { id: "no-pvp", emoji: "🛡️", label: "PvPしない" },
      { id: "build", emoji: "🏠", label: "家を建てない" },
      { id: "sleep", emoji: "🛏️", label: "寝ない" }
    ]
  },
  {
    stage: 4,
    stageTitle: "Server Gate",
    stageMessage: "Now read a real-style server description.",
    type: "SERVER INFO",
    prompt: "Play with friends. Build anywhere. Be kind to other players.",
    hint: "anywhere = どこでも / be kind = やさしくする",
    answer: "friendly",
    feedback: "友だちと遊び、どこでも建築でき、ほかの人にやさしくするサーバーだと読めました。",
    choices: [
      { id: "friendly", emoji: "🤝", label: "協力して遊ぶ" },
      { id: "destroy", emoji: "💥", label: "他人の建築を壊す" },
      { id: "fight", emoji: "⚔️", label: "全員と戦う" },
      { id: "solo", emoji: "🧍", label: "必ず一人で遊ぶ" }
    ]
  }
];

const storageKey = "english-for-minecraft-progress-v1";
let currentIndex = Math.min(Number(localStorage.getItem(storageKey) || 0), lessons.length);
let locked = false;

const els = {
  lessonCard: document.getElementById("lessonCard"),
  completeCard: document.getElementById("completeCard"),
  lessonType: document.getElementById("lessonType"),
  promptText: document.getElementById("promptText"),
  miniHint: document.getElementById("miniHint"),
  choices: document.getElementById("choices"),
  hintButton: document.getElementById("hintButton"),
  hintBox: document.getElementById("hintBox"),
  feedback: document.getElementById("feedback"),
  progressCount: document.getElementById("progressCount"),
  progressTotal: document.getElementById("progressTotal"),
  progressBar: document.getElementById("progressBar"),
  stageLabel: document.getElementById("stageLabel"),
  stageTitle: document.getElementById("stageTitle"),
  stageMessage: document.getElementById("stageMessage"),
  worldScene: document.getElementById("worldScene"),
  resetButton: document.getElementById("resetButton"),
  playAgainButton: document.getElementById("playAgainButton")
};

const stageScenes = {
  1: ["🌳", "🌲", "🪨", "🌳", "🐷", "🌲", "💧", "🌳"],
  2: ["🌳", "🪵", "🏠", "🚪", "🛏️", "📦", "🌲", "🌙"],
  3: ["🪨", "⛏️", "🪨", "🕯️", "💎", "🪨", "🛡️", "🪨"],
  4: ["🌐", "🏠", "🧑‍🤝‍🧑", "🛡️", "🌳", "⛏️", "🤝", "✨"]
};

function renderWorld(stage) {
  els.worldScene.innerHTML = "";
  (stageScenes[stage] || stageScenes[1]).forEach((item, index) => {
    const block = document.createElement("span");
    block.className = "block";
    block.textContent = item;
    block.style.setProperty("--lift", `${(index % 3) * -5}px`);
    els.worldScene.appendChild(block);
  });
}

function render() {
  locked = false;
  els.progressTotal.textContent = lessons.length;
  els.progressCount.textContent = Math.min(currentIndex, lessons.length);
  els.progressBar.style.width = `${(currentIndex / lessons.length) * 100}%`;
  els.hintBox.hidden = true;
  els.feedback.hidden = true;
  els.feedback.classList.remove("bad");

  if (currentIndex >= lessons.length) {
    els.lessonCard.hidden = true;
    els.completeCard.hidden = false;
    els.stageLabel.textContent = "COMPLETE";
    els.stageTitle.textContent = "Server Reader";
    els.stageMessage.textContent = "You finished the first journey.";
    renderWorld(4);
    return;
  }

  els.lessonCard.hidden = false;
  els.completeCard.hidden = true;

  const lesson = lessons[currentIndex];
  els.lessonType.textContent = lesson.type;
  els.promptText.textContent = lesson.prompt;
  els.miniHint.textContent = lesson.stage === 4 ? "Read the whole message. What does it mean?" : "Tap the best answer.";
  els.stageLabel.textContent = `STAGE ${lesson.stage}`;
  els.stageTitle.textContent = lesson.stageTitle;
  els.stageMessage.textContent = lesson.stageMessage;
  renderWorld(lesson.stage);

  els.choices.innerHTML = "";
  lesson.choices.forEach(choice => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "choice";
    button.dataset.choice = choice.id;
    button.innerHTML = `<span class="choice-emoji" aria-hidden="true">${choice.emoji}</span><span class="choice-label">${choice.label}</span>`;
    button.addEventListener("click", () => checkAnswer(button, choice.id));
    els.choices.appendChild(button);
  });
}

function checkAnswer(button, choiceId) {
  if (locked) return;
  const lesson = lessons[currentIndex];

  if (choiceId !== lesson.answer) {
    button.classList.add("wrong");
    els.feedback.hidden = false;
    els.feedback.classList.add("bad");
    els.feedback.innerHTML = "<strong>Almost!</strong>もう一度、英語の中の知っている言葉を探してみよう。";
    window.setTimeout(() => button.classList.remove("wrong"), 500);
    return;
  }

  locked = true;
  button.classList.add("correct");
  els.feedback.hidden = false;
  els.feedback.classList.remove("bad");
  els.feedback.innerHTML = `<strong>Nice! ✓</strong>${lesson.feedback}`;

  window.setTimeout(() => {
    currentIndex += 1;
    localStorage.setItem(storageKey, String(currentIndex));
    render();
  }, 1100);
}

els.hintButton.addEventListener("click", () => {
  if (currentIndex >= lessons.length) return;
  els.hintBox.textContent = lessons[currentIndex].hint;
  els.hintBox.hidden = !els.hintBox.hidden;
});

els.resetButton.addEventListener("click", () => {
  const ok = window.confirm("さいしょからやり直しますか？");
  if (!ok) return;
  currentIndex = 0;
  localStorage.removeItem(storageKey);
  render();
});

els.playAgainButton.addEventListener("click", () => {
  currentIndex = 0;
  localStorage.removeItem(storageKey);
  render();
});

render();

if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => navigator.serviceWorker.register("./service-worker.js").catch(() => {}));
}
