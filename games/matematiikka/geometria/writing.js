'use strict';
// Shared writing support: no automatic algebra operations or answer insertion.
function normalizedRow(raw){return trigInput(raw).replace(/≈/g,'=').trim().toLowerCase().replace(/α/g,'alpha').replace(/β/g,'beta').replace(/π/g,'pi').replace(/²/g,'^2').replace(/³/g,'^3').replace(/(\d|\))°/g,'$1').replace(/[−–]/g,'-').replace(/[×·]/g,'*');}
function solvedExpression(raw,t){
 const s=normalizedRow(raw).replace(/\s/g,''),sides=s.split('=');if(sides.length!==2)return null;
 const isVariable=x=>/^(?:[a-z]|alpha|beta)$/.test(x);
 const v=isVariable(sides[0])?sides[1]:isVariable(sides[1])?sides[0]:null;if(v===null)return null;
 const number=/^[+-]?\d+(?:[.,]\d+)?$/;
 const exact=t.exact&&(/sqrt\(/.test(v)||v.includes('/'))&&!/[a-z]/.test(v.replace(/sqrt|cbrt|pi/g,''));
 if(/[a-z]/.test(v.replace(/sqrt|cbrt|pi|asin|acos|atan|sin|cos|tan/g,'')))return null;
 const n=value(v);if(!answerMatches(n,t))return null;
 if(t.exactForm==='root'&&!/sqrt|\^/.test(v))return null;
 if(t.exactForm==='fraction'&&!v.includes('/'))return null;
 return v;
}
function checkSolutionRow(raw,t){
 if(!String(raw).trim())throw Error('Kirjoita lasku tai yhtälörivi.');
 const complete=solvedExpression(raw,t);if(complete!==null)return {ok:true,complete:true,answer:complete};
 const s=normalizedRow(raw),sides=s.split('=');
 if(sides.length===1)return {ok:checkCalculation(s,t.calc),complete:false};
 if(sides.some(x=>!x.trim())||sides.length>4)throw Error('Tarkista yhtälörivin molemmat puolet.');
 const functions=['pi','sqrt','cbrt','sin','cos','tan','asin','acos','atan'];
 const vars=[...new Set((s.match(/[a-z]+/g)||[]).filter(x=>!functions.includes(x)))];
 if(!vars.length){
  const nums=sides.map(value),eps=Math.max(1e-7,Math.abs(nums[0])*1e-8);
  if(!/[+*/^]|sqrt|sin|cos|tan/.test(s))throw Error('Kirjoita ratkaisun laskutoimitus tai tuntematon.');
  return {ok:nums.every(n=>Math.abs(n-nums[0])<eps||!t.exact&&significantRoundedMatch(n,nums[0])),complete:false};
 }
 let meaningful=false;
 for(let i=1;i<sides.length;i++){
  try{if(!checkCalculation(sides[0]+'='+sides[i],t.calc))return {ok:false,complete:false};meaningful=true;}
  catch(e){if(!/Yhtälön pitää määrätä/.test(e.message))throw e;}
 }
 if(!meaningful)throw Error('Yhtälön pitää määrätä tuntematon.');
 return {ok:true,complete:false};
}
const FORMULAS={
 pyth:[['Pythagoras','a^2+b^2=c^2']],
 plane:[['Kolmio','A=a*h/2'],['Suorakulmio','A=a*b'],['Puolisuunnikas','A=(a+b)*h/2']],
 circle:[['Kehän pituus','p=2*pi*r'],['Pinta-ala','A=pi*r^2'],['Kaaren pituus','b=alpha/360*2*pi*r'],['Sektorin ala','A=alpha/360*pi*r^2']],
 trig:[['Sini','sin(alpha)=a/c'],['Kosini','cos(alpha)=b/c'],['Tangentti','tan(alpha)=a/b']],
 solid:[['Kuution tilavuus','V=a^3'],['Särmiön tilavuus pohjan alasta','V=A*h'],['Kartion tilavuus pohjan alasta','V=A*h/3'],['Särmiön tilavuus','V=a*b*h'],['Lieriön tilavuus','V=pi*r^2*h'],['Lieriön vaippa','A=2*pi*r*h'],['Kartion tilavuus','V=pi*r^2*h/3'],['Kartion vaippa','A=pi*r*s'],['Pallon tilavuus','V=4*pi*r^3/3'],['Pallon pinta-ala','A=4*pi*r^2'],['Pyramidin tilavuus','V=a^2*h/3'],['Särmiön kokonaispinta-ala','A=2*(a*b+a*h+b*h)'],['Lieriön kokonaispinta-ala','A=2*pi*r^2+2*pi*r*h'],['Pyramidin vaippa','A=2*a*s']]
};
function formulaChoices(course){if(course===3)return [...FORMULAS.plane,['Monikulmion kulmien summa','(n-2)*180°']];if(course>=8&&course<=10)return FORMULAS.solid;if(course===7)return [...FORMULAS.trig,...FORMULAS.pyth];if(course===5)return FORMULAS.circle;if(course===4)return FORMULAS.pyth;if(course===2||course===3)return FORMULAS.plane;return [];}
function formulaBank(course){const legend=course>=8?'V on tilavuus, A pinta-ala, r säde, h korkeus ja s kartion sivujana.':course===7?'a ja b ovat kateetteja, c hypotenuusa; α on a:n vastainen kulma.':course===5?'r on säde ja α keskuskulma asteina.':'h on korkeus; a ja b ovat kuvion sivuja tai kantoja.';const f=formulaChoices(course);if(!f.length)return '';return '<details class="formula-bank"><summary>Kaavat</summary><div class="formula-options">'+f.map(([label,raw],i)=>`<button class="secondary" data-formula="${i}"><span>${esc(label)}</span><span>\\(${esc(latex(raw))}\\)</span></button>`).join('')+'</div><p class="countnote">Valitse sopiva kaava ja sijoita tunnetut luvut itse. '+legend+'</p></details>';}
function mathToolbar(course){const keys=[['√','sqrt()'],['∛','cbrt()'],['tai',' tai '],['x²','^2'],['x³','^3'],['π','pi'],['°','°'],['(', '('],[')',')'],['÷','/'],['=','='],['≈','≈']];if(course===7)keys.push(['sin','sin()'],['cos','cos()'],['tan','tan()'],['sin⁻¹','asin()'],['cos⁻¹','acos()'],['tan⁻¹','atan()']);return '<div class="math-toolbar" role="toolbar" aria-label="Kirjoittamisen apupalkki">'+keys.map(([label,raw],i)=>`<button class="secondary" data-symbol="${i}" data-insert="${esc(raw)}" aria-label="Lisää ${esc(label)}">${label}</button>`).join('')+'</div>';}
function insertTextAt(text,start,end,token){const content=token.endsWith('()')?token.slice(0,-1)+text.slice(start,end)+')':token;return {text:text.slice(0,start)+content+text.slice(end),cursor:token.endsWith('()')?start+token.length-1+(end-start):start+content.length};}
let activeMathField=null;
function setupWritingTools(){
 activeMathField=$('#calc')||$('#answer')||app.querySelector('input');
 app.querySelectorAll('input,textarea').forEach(el=>el.onfocus=()=>{activeMathField=el;});
 function insert(token){const el=activeMathField;if(!el||!document.contains(el))return;const r=insertTextAt(el.value,el.selectionStart??el.value.length,el.selectionEnd??el.value.length,token);el.value=r.text;el.focus();el.setSelectionRange(r.cursor,r.cursor);saveDraft();if(el.id==='calc')previewCalculation();if(el.id==='playground')el.oninput?.();}
 app.querySelectorAll('[data-symbol]').forEach(b=>{b.onpointerdown=e=>e.preventDefault();b.onclick=()=>insert(b.dataset.insert);});
 app.querySelectorAll('[data-formula]').forEach(b=>b.onclick=()=>{const el=$('#calc');if(!el)return;activeMathField=el;const f=formulaChoices(ci)[+b.dataset.formula][1];el.value=f;el.focus();el.setSelectionRange(0,f.length);saveDraft();previewCalculation();app.querySelectorAll('[data-formula]').forEach(x=>x.classList.toggle('active',x===b));});
}
window.GeometryWriting={checkSolutionRow,solvedExpression,insertTextAt,formulaChoices};
