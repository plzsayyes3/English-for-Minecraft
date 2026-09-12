const lessons = [
  {
    stage: 1, stageTitle: "Forest", stageMessage: "まずは日本語から英単語を見つけよう。", type: "ことばをみつけよう",
    prompt: "「木」はどれ？", hint: "マイクラで木を見つけた場面を思い出してみよう。", answer: "tree",
    feedback: "TREE = 木。まずはマイクラでよく見るものの名前を覚えよう。",
    choices: [{id:"tree",emoji:"🌳",label:"TREE"},{id:"stone",emoji:"🪨",label:"STONE"},{id:"pig",emoji:"🐷",label:"PIG"},{id:"water",emoji:"💧",label:"WATER"}]
  },
  {
    stage: 1, stageTitle: "Forest", stageMessage: "まずは日本語から英単語を見つけよう。", type: "ことばをみつけよう",
    prompt: "「水」はどれ？", hint: "W から始まるよ。", answer: "water", feedback: "WATER = 水。",
    choices: [{id:"wood",emoji:"🪵",label:"WOOD"},{id:"water",emoji:"💧",label:"WATER"},{id:"bed",emoji:"🛏️",label:"BED"},{id:"cow",emoji:"🐄",label:"COW"}]
  },
  {
    stage: 1, stageTitle: "Forest", stageMessage: "まずは日本語から英単語を見つけよう。", type: "ことばをみつけよう",
    prompt: "「石」はどれ？", hint: "S から始まるよ。", answer: "stone", feedback: "STONE = 石。次は、覚えた英語を読んで動いてみよう。",
    choices: [{id:"stone",emoji:"🪨",label:"STONE"},{id:"door",emoji:"🚪",label:"DOOR"},{id:"apple",emoji:"🍎",label:"APPLE"},{id:"tree",emoji:"🌳",label:"TREE"}]
  },
  {
    stage: 2, stageTitle: "Shelter", stageMessage: "英文を読んで、正しいものを選ぼう。", type: "えいごをよんでみよう",
    prompt: "Open the door.", hint: "open = 開ける", answer: "door", feedback: "Open the door. = ドアを開けよう。",
    hideChoiceLabels: true,
    choices: [{id:"chest",emoji:"📦",label:"CHEST"},{id:"door",emoji:"🚪",label:"DOOR"},{id:"bed",emoji:"🛏️",label:"BED"},{id:"food",emoji:"🍞",label:"FOOD"}]
  },
  {
    stage: 2, stageTitle: "Shelter", stageMessage: "英文を読んで、正しいものを選ぼう。", type: "えいごをよんでみよう",
    prompt: "Get wood.", hint: "get = 手に入れる", answer: "wood", feedback: "Get wood. = 木材を手に入れよう。",
    hideChoiceLabels: true,
    choices: [{id:"wood",emoji:"🪵",label:"WOOD"},{id:"water",emoji:"💧",label:"WATER"},{id:"stone",emoji:"🪨",label:"STONE"},{id:"food",emoji:"🍞",label:"FOOD"}]
  },
  {
    stage: 2, stageTitle: "Shelter", stageMessage: "英文を読んで、正しいものを選ぼう。", type: "えいごをよんでみよう",
    prompt: "Sleep in the bed.", hint: "sleep = ねる", answer: "bed", feedback: "Sleep in the bed. = ベッドで寝よう。",
    hideChoiceLabels: true,
    choices: [{id:"sword",emoji:"⚔️",label:"SWORD"},{id:"bed",emoji:"🛏️",label:"BED"},{id:"tree",emoji:"🌳",label:"TREE"},{id:"chest",emoji:"📦",label:"CHEST"}]
  },
  {
    stage: 3, stageTitle: "Cave", stageMessage: "サーバーのルールを読んでみよう。", type: "ルールをよもう",
    prompt: "Do not break this block.", hint: "do not = 〜しないで / break = こわす", answer: "dont-break", feedback: "Do not break = こわさないで。",
    choices: [{id:"break",emoji:"⛏️",label:"こわしていい"},{id:"dont-break",emoji:"🛑",label:"こわさない"},{id:"eat",emoji:"🍞",label:"食べる"},{id:"sleep",emoji:"🛏️",label:"ねる"}]
  },
  {
    stage: 3, stageTitle: "Cave", stageMessage: "サーバーのルールを読んでみよう。", type: "ルールをよもう",
    prompt: "You can build here.", hint: "can = できる / build = 建てる / here = ここ", answer: "can-build", feedback: "You can build here. = ここでは建築できる。",
    choices: [{id:"no-build",emoji:"🚫",label:"建築できない"},{id:"can-build",emoji:"🏠",label:"建築できる"},{id:"run",emoji:"🏃",label:"走る"},{id:"fight",emoji:"⚔️",label:"戦う"}]
  },
  {
    stage: 3, stageTitle: "Cave", stageMessage: "サーバーのルールを読んでみよう。", type: "ルールをよもう",
    prompt: "Play with your friends.", hint: "with = 〜といっしょに / friends = 友だち", answer: "friends", feedback: "with your friends = 友だちといっしょに。",
    choices: [{id:"alone",emoji:"🧍",label:"ひとりで"},{id:"friends",emoji:"🧑‍🤝‍🧑",label:"友だちと"},{id:"sleep",emoji:"🛏️",label:"ねる"},{id:"water",emoji:"💧",label:"水で"}]
  },
  {
    stage: 4, stageTitle: "Server Gate", stageMessage: "本物に近いサーバー紹介を読もう。", type: "サーバーしょうかい",
    prompt: "Survival server. Build houses and explore the world.", hint: "survival = サバイバル / explore = 探検する", answer: "build-explore", feedback: "家を建てたり、世界を探検したりするサバイバルサーバーだと読めたね。",
    choices: [{id:"build-explore",emoji:"🏠",label:"建築・探検"},{id:"only-fight",emoji:"⚔️",label:"戦うだけ"},{id:"no-build",emoji:"🚫",label:"建築禁止"},{id:"race",emoji:"🏁",label:"レース"}]
  },
  {
    stage: 4, stageTitle: "Server Gate", stageMessage: "本物に近いサーバー紹介を読もう。", type: "サーバーしょうかい",
    prompt: "PvP is off. Do not fight other players.", hint: "off = オフ / fight = 戦う / other players = ほかのプレイヤー", answer: "no-pvp", feedback: "PvPはオフで、ほかのプレイヤーとは戦わないルールだと読めたね。",
    choices: [{id:"pvp",emoji:"⚔️",label:"PvPできる"},{id:"no-pvp",emoji:"🛡️",label:"PvPしない"},{id:"build",emoji:"🏠",label:"家を建てない"},{id:"sleep",emoji:"🛏️",label:"寝ない"}]
  },
  {
    stage: 4, stageTitle: "Server Gate", stageMessage: "本物に近いサーバー紹介を読もう。", type: "サーバーしょうかい",
    prompt: "Play with friends. Build anywhere. Be kind to other players.", hint: "anywhere = どこでも / be kind = やさしくする", answer: "friendly", feedback: "友だちと遊び、どこでも建築でき、ほかの人にやさしくするサーバーだと読めたね。",
    choices: [{id:"friendly",emoji:"🤝",label:"協力して遊ぶ"},{id:"destroy",emoji:"💥",label:"他人の建築を壊す"},{id:"fight",emoji:"⚔️",label:"全員と戦う"},{id:"solo",emoji:"🧍",label:"必ず一人で遊ぶ"}]
  }
];

const storageKey = "english-for-minecraft-progress-v1";
let currentIndex = Math.min(Number(localStorage.getItem(storageKey) || 0), lessons.length);
let locked = false;

const els = {
  lessonCard: document.getElementById("lessonCard"), completeCard: document.getElementById("completeCard"), lessonType: document.getElementById("lessonType"),
  promptText: document.getElementById("promptText"), miniHint: document.getElementById("miniHint"), choices: document.getElementById("choices"),
  hintButton: document.getElementById("hintButton"), hintBox: document.getElementById("hintBox"), feedback: document.getElementById("feedback"),
  progressCount: document.getElementById("progressCount"), progressTotal: document.getElementById("progressTotal"), progressBar: document.getElementById("progressBar"),
  stageLabel: document.getElementById("stageLabel"), stageTitle: document.getElementById("stageTitle"), stageMessage: document.getElementById("stageMessage"),
  worldScene: document.getElementById("worldScene"), resetButton: document.getElementById("resetButton"), playAgainButton: document.getElementById("playAgainButton")
};

const stageScenes = {1:["🌳","🌲","🪨","🌳","🐷","🌲","💧","🌳"],2:["🌳","🪵","🏠","🚪","🛏️","📦","🌲","🌙"],3:["🪨","⛏️","🪨","🕯️","💎","🪨","🛡️","🪨"],4:["🌐","🏠","🧑‍🤝‍🧑","🛡️","🌳","⛏️","🤝","✨"]};
function renderWorld(stage){els.worldScene.innerHTML="";(stageScenes[stage]||stageScenes[1]).forEach((item,index)=>{const block=document.createElement("span");block.className="block";block.textContent=item;block.style.setProperty("--lift",`${(index%3)*-5}px`);els.worldScene.appendChild(block);});}
function render(){locked=false;els.progressTotal.textContent=lessons.length;els.progressCount.textContent=Math.min(currentIndex,lessons.length);els.progressBar.style.width=`${(currentIndex/lessons.length)*100}%`;els.hintBox.hidden=true;els.feedback.hidden=true;els.feedback.classList.remove("bad");if(currentIndex>=lessons.length){els.lessonCard.hidden=true;els.completeCard.hidden=false;els.stageLabel.textContent="COMPLETE";els.stageTitle.textContent="Server Reader";els.stageMessage.textContent="さいしょのぼうけん、クリア！";renderWorld(4);return;}els.lessonCard.hidden=false;els.completeCard.hidden=true;const lesson=lessons[currentIndex];els.lessonType.textContent=lesson.type;els.promptText.textContent=lesson.prompt;els.miniHint.textContent=lesson.stage===1?"英語をえらんでね。":lesson.stage===2?"英文を読んで、絵をえらんでね。":"いちばん近い意味をえらんでね。";els.stageLabel.textContent=`STAGE ${lesson.stage}`;els.stageTitle.textContent=lesson.stageTitle;els.stageMessage.textContent=lesson.stageMessage;renderWorld(lesson.stage);els.choices.innerHTML="";lesson.choices.forEach(choice=>{const button=document.createElement("button");button.type="button";button.className="choice";button.dataset.choice=choice.id;const label=lesson.hideChoiceLabels?"":`<span class="choice-label">${choice.label}</span>`;button.innerHTML=`<span class="choice-emoji" aria-hidden="true">${choice.emoji}</span>${label}`;button.setAttribute("aria-label",lesson.hideChoiceLabels?"えらぶ":choice.label);button.addEventListener("click",()=>checkAnswer(button,choice.id));els.choices.appendChild(button);});}
function checkAnswer(button,choiceId){if(locked)return;const lesson=lessons[currentIndex];if(choiceId!==lesson.answer){button.classList.add("wrong");els.feedback.hidden=false;els.feedback.classList.add("bad");els.feedback.innerHTML="<strong>おしい！</strong>もう一度考えてみよう。分からなければヒントを使ってOK。";window.setTimeout(()=>button.classList.remove("wrong"),500);return;}locked=true;button.classList.add("correct");els.feedback.hidden=false;els.feedback.classList.remove("bad");els.feedback.innerHTML=`<strong>せいかい！ ✓</strong>${lesson.feedback}`;window.setTimeout(()=>{currentIndex+=1;localStorage.setItem(storageKey,String(currentIndex));render();},950);}
els.hintButton.addEventListener("click",()=>{if(currentIndex>=lessons.length)return;els.hintBox.textContent=lessons[currentIndex].hint;els.hintBox.hidden=!els.hintBox.hidden;});
function resetProgress(){currentIndex=0;localStorage.removeItem(storageKey);render();}
els.resetButton.addEventListener("click",resetProgress);els.playAgainButton.addEventListener("click",resetProgress);
if("serviceWorker" in navigator){window.addEventListener("load",()=>navigator.serviceWorker.register("./service-worker.js").catch(()=>{}));}
render();