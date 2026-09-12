const words=[
["tree","木","🌳","Find a tree.","木を見つける"],["wood","木材","🪵","Get wood.","木材を手に入れる"],["stone","石","🪨","Get stone.","石を手に入れる"],["water","水","💧","Find water.","水を見つける"],["pig","ブタ","🐷","Find a pig.","ブタを見つける"],
["cow","ウシ","🐄","Find a cow.","ウシを見つける"],["house","家","🏠","Build a house.","家を建てる"],["door","ドア","🚪","Open the door.","ドアを開ける"],["bed","ベッド","🛏️","Sleep in the bed.","ベッドで寝る"],["chest","チェスト","📦","Open the chest.","チェストを開ける"],
["sword","剣","⚔️","Use the sword.","剣を使う"],["pickaxe","つるはし","⛏️","Use the pickaxe.","つるはしを使う"],["food","食べ物","🍞","Get food.","食べ物を手に入れる"],["player","プレイヤー","🧑","Find a player.","プレイヤーを見つける"],["world","世界","🌍","Explore the world.","世界を探検する"],
["build","建てる","🧱","Build here.","ここに建てる"],["open","開ける","🔓","Open it.","それを開ける"],["break","こわす","💥","Do not break this block.","このブロックをこわさない"],["find","見つける","🔎","Find the chest.","チェストを見つける"],["get","手に入れる","✋","Get wood.","木材を手に入れる"],
["use","使う","🛠️","Use the pickaxe.","つるはしを使う"],["eat","食べる","🍎","Eat food.","食べ物を食べる"],["sleep","寝る","🌙","Sleep here.","ここで寝る"],["friend","友だち","🤝","Play with a friend.","友だちと遊ぶ"],["here","ここ","📍","You can build here.","ここでは建築できる"]
].map((w,i)=>({id:i,en:w[0],ja:w[1],icon:w[2],sentence:w[3],meaning:w[4]}));

const STORAGE="efm-beginner-v2";
const state=JSON.parse(localStorage.getItem(STORAGE)||'{"step":0,"cards":{}}');
const intervals=[3,8,18];
let locked=false;

// 25語を4回ずつ。新出→短期再生→間隔を空けた再生→文脈読解へ進む。
function buildSchedule(){
 const cards=words.map(w=>({id:w.id,seen:0,due:0})),out=[];let nextNew=0;
 for(let step=0;step<100;step++){
  const due=cards.filter(c=>c.seen>0&&c.seen<4&&c.due<=step).sort((a,b)=>a.due-b.due||a.id-b.id);
  let c;
  if(due.length&&(step%2===1||nextNew>=words.length)) c=due[0];
  else if(nextNew<words.length) c=cards[nextNew++];
  else c=cards.filter(x=>x.seen<4).sort((a,b)=>a.due-b.due)[0];
  const exposure=c.seen;c.seen++;c.due=step+(intervals[Math.min(exposure,2)]||18);out.push({wordId:c.id,exposure});
 }
 return out;
}
const schedule=buildSchedule();

const els={lessonCard:document.getElementById("lessonCard"),completeCard:document.getElementById("completeCard"),lessonType:document.getElementById("lessonType"),promptText:document.getElementById("promptText"),miniHint:document.getElementById("miniHint"),choices:document.getElementById("choices"),hintButton:document.getElementById("hintButton"),hintBox:document.getElementById("hintBox"),feedback:document.getElementById("feedback"),progressCount:document.getElementById("progressCount"),progressTotal:document.getElementById("progressTotal"),progressBar:document.getElementById("progressBar"),stageLabel:document.getElementById("stageLabel"),stageTitle:document.getElementById("stageTitle"),stageMessage:document.getElementById("stageMessage"),worldScene:document.getElementById("worldScene"),resetButton:document.getElementById("resetButton"),playAgainButton:document.getElementById("playAgainButton")};

function distractors(target){const pool=words.filter(w=>w.id!==target.id);let seed=(state.step+1)*17+target.id*7;const picks=[];while(picks.length<3){seed=(seed*9301+49297)%233280;const w=pool[seed%pool.length];if(!picks.some(x=>x.id===w.id))picks.push(w);}return picks;}
function shuffle(a){let x=[...a],s=(state.step+11)*31;for(let i=x.length-1;i>0;i--){s=(s*1664525+1013904223)>>>0;const j=s%(i+1);[x[i],x[j]]=[x[j],x[i]];}return x;}
function question(){const item=schedule[state.step],w=words[item.wordId],ds=distractors(w);if(item.exposure===0)return{type:"NEW WORD",prompt:`「${w.ja}」はどれ？`,sub:"英語をえらんでね。",answer:w.id,hint:`${w.en.toUpperCase()} = ${w.ja}`,choices:shuffle([w,...ds]).map(x=>({id:x.id,icon:x.icon,label:x.en.toUpperCase()})),feedback:`${w.en.toUpperCase()} = ${w.ja}`};if(item.exposure===1)return{type:"REMEMBER",prompt:w.en.toUpperCase(),sub:"意味に合う絵をえらんでね。",answer:w.id,hint:`${w.en} = ${w.ja}`,choices:shuffle([w,...ds]).map(x=>({id:x.id,icon:x.icon,label:""})),feedback:`${w.en} = ${w.ja}`};if(item.exposure===2)return{type:"RECALL",prompt:w.en.toUpperCase(),sub:"日本語の意味をえらんでね。",answer:w.id,hint:`マイクラで「${w.ja}」を使う場面を思い出そう。`,choices:shuffle([w,...ds]).map(x=>({id:x.id,icon:x.icon,label:x.ja})),feedback:`${w.en} = ${w.ja}`};return{type:"READ IT",prompt:w.sentence,sub:"英文にいちばん近い意味は？",answer:w.id,hint:`${w.en} = ${w.ja}`,choices:shuffle([w,...ds]).map(x=>({id:x.id,icon:x.icon,label:x.meaning})),feedback:`${w.sentence} = ${w.meaning}`};}
function levelInfo(){const n=state.step;if(n<25)return["LEVEL 1","はじめてのことば","新しいMinecraft英語に出会おう。"] ;if(n<50)return["LEVEL 2","おぼえてる？","少し間をあけて、絵から思い出そう。"] ;if(n<75)return["LEVEL 3","意味を思い出す","英単語を見て意味を取り出そう。"] ;return["LEVEL 4","文を読む","覚えた言葉を短い英文で読もう。"]}
function renderWorld(){const icons=["🌳","🪵","🪨","💧","🏠","📦","⛏️","🌍"];els.worldScene.innerHTML=icons.map(x=>`<span class="block">${x}</span>`).join("");}
function render(){locked=false;els.progressTotal.textContent=100;els.progressCount.textContent=Math.min(state.step,100);els.progressBar.style.width=`${Math.min(state.step,100)}%`;els.hintBox.hidden=true;els.feedback.hidden=true;const li=levelInfo();els.stageLabel.textContent=li[0];els.stageTitle.textContent=li[1];els.stageMessage.textContent=li[2];renderWorld();if(state.step>=100){els.lessonCard.hidden=true;els.completeCard.hidden=false;els.stageLabel.textContent="BEGINNER COMPLETE";els.stageTitle.textContent="100 Questions Clear!";els.stageMessage.textContent="初級25語を、4つの形でくり返しました。";return;}els.lessonCard.hidden=false;els.completeCard.hidden=true;const q=question();els.lessonType.textContent=q.type;els.promptText.textContent=q.prompt;els.miniHint.textContent=q.sub;els.choices.innerHTML="";q.choices.forEach(c=>{const b=document.createElement("button");b.type="button";b.className="choice";b.innerHTML=`<span class="choice-emoji" aria-hidden="true">${c.icon}</span>${c.label?`<span class="choice-label">${c.label}</span>`:""}`;b.addEventListener("click",()=>check(b,c.id,q));els.choices.appendChild(b);});}
function check(b,id,q){if(locked)return;if(id!==q.answer){b.classList.add("wrong");els.feedback.hidden=false;els.feedback.classList.add("bad");els.feedback.innerHTML="<strong>おしい！</strong> もう一度。分からなければヒントを使おう。";setTimeout(()=>b.classList.remove("wrong"),500);return;}locked=true;b.classList.add("correct");els.feedback.hidden=false;els.feedback.classList.remove("bad");els.feedback.innerHTML=`<strong>せいかい！ ✓</strong> ${q.feedback}`;setTimeout(()=>{state.step++;localStorage.setItem(STORAGE,JSON.stringify(state));render();},850);}
els.hintButton.addEventListener("click",()=>{if(state.step>=100)return;els.hintBox.textContent=question().hint;els.hintBox.hidden=!els.hintBox.hidden;});function reset(){state.step=0;state.cards={};localStorage.setItem(STORAGE,JSON.stringify(state));render();}els.resetButton.addEventListener("click",reset);els.playAgainButton.addEventListener("click",reset);if("serviceWorker"in navigator)window.addEventListener("load",()=>navigator.serviceWorker.register("./service-worker.js").catch(()=>{}));render();