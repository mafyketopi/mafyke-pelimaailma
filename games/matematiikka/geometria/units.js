'use strict';
// Bounded quantity parser: length powers, capacities and degree notation.
// Student input is never executed as code.
window.GeometryUnits=(()=>{
 const U={km:[1000,1],hm:[100,1],dam:[10,1],m:[1,1],dm:[.1,1],cm:[.01,1],mm:[.001,1],l:[.001,3],dl:[.0001,3],cl:[.00001,3],ml:[.000001,3],ha:[10000,2],mg:[.001,4],g:[1,4],kg:[1000,4],eur:[1,5]};
 const unitPattern=/\b(?:km|hm|dam|dm|cm|mm|ml|cl|dl|ha|kg|mg|g|eur|m|l)\b|(?:\d|\))\s*(?:km|hm|dam|dm|cm|mm|ml|cl|dl|ha|kg|mg|g|eur|m|l)(?=[²³^\s*+\-/)=]|$)/;
 const near=(a,b)=>Math.abs(a-b)<=1e-8*Math.max(1,Math.abs(a),Math.abs(b));
 function norm(s){return trigInput(s).replace(/≈/g,'=').replace(/€/g,'eur').replace(/,/g,'.').replace(/(\d+(?:\.\d+)?)[eE]([+-]?\d+)/g,'($1*10^($2))').replace(/²/g,'^2').replace(/³/g,'^3').replace(/π/g,'pi').replace(/α/g,'alpha').replace(/β/g,'beta').replace(/[−–]/g,'-').replace(/[×·]/g,'*');}
 function info(unit){if(unit==='°'||!unit)return {n:1,d:0};const s=norm(unit),m=s.match(/^([a-z]+)(?:\^([23]))?$/);if(!m||!U[m[1]])throw Error('Tuntematon yksikkö.');const u=U[m[1]],exp=+(m[2]||1);return {n:u[0]**exp,d:u[1]*exp};}
 function parse(raw,bindings={}){
  let s=norm(raw).trim();if(!s||s.length>240)throw Error('Kirjoita lasku tai yhtälö.');
  const tokens=s.match(/\d*\.\d+|\d+\.?\d*|[a-zA-Z]+|[()+\-*/^°]/g)||[];if(tokens.join('')!==s.replace(/\s/g,''))throw Error('Tarkista laskumerkit ja yksiköt.');let i=0,depth=0;
  const f={sqrt:Math.sqrt,cbrt:Math.cbrt,sin:x=>Math.sin(x*Math.PI/180),cos:x=>Math.cos(x*Math.PI/180),tan:x=>Math.tan(x*Math.PI/180),asin:x=>Math.asin(x)*180/Math.PI,acos:x=>Math.acos(x)*180/Math.PI,atan:x=>Math.atan(x)*180/Math.PI};
  const scalar=(n,tex)=>({n,d:0,tex});
  function atom(){if(++depth>30)throw Error('Liian monta sisäkkäistä suljetta.');const t=tokens[i++];let q;
   if(t==='('){q=sum();if(tokens[i++]!==')')throw Error('Tarkista sulkeet.');q={...q,tex:'\\left('+q.tex+'\\right)'};}
   else if(t in f){if(tokens[i++]!=='(')throw Error('Funktio tarvitsee sulkeet.');const a=sum();if(tokens[i++]!==')')throw Error('Tarkista sulkeet.');if(!['sqrt','cbrt'].includes(t)&&a.d!==0)throw Error('Trigonometriseen funktioon sijoitetaan kulma tai yksikötön suhde.');q={n:f[t](a.n),d:t==='sqrt'?a.d/2:t==='cbrt'?a.d/3:0,tex:t==='cbrt'?'\\sqrt[3]{'+a.tex+'}':t==='sqrt'?'\\sqrt{'+a.tex+'}':'\\'+(t[0]==='a'?t.slice(1)+'^{-1}':t)+' '+(/^(?:[a-z]|\\alpha|\\beta|\d+(?:\{,\}\d+)?(?:\^\{\\circ\})?)$/.test(a.tex)?a.tex:'\\left('+a.tex+'\\right)')};}
   else if(t==='pi')q=scalar(Math.PI,'\\pi');
   else if(bindings[t])q={...bindings[t],tex:t==='alpha'||t==='beta'?'\\'+t:t};
   else if(U[t])q={n:U[t][0],d:U[t][1],tex:'\\mathrm{'+t+'}'};
   else if(t&&/^(?:\d|\.)/.test(t))q=scalar(Number(t),t.replace('.','{,}'));
   else throw Error('Käytä tehtävän tuntematonta, lukuja ja tunnettuja yksiköitä.');depth--;return q;
  }
  function power(){let a=atom();if(tokens[i]==='°'){i++;a.tex+='^{\\circ}';}if(tokens[i]==='^'){i++;const b=unary();if(b.d!==0)throw Error('Eksponentti on yksikötön.');a={n:a.n**b.n,d:a.d*b.n,tex:a.tex+'^{'+b.tex+'}'};}return a;}
  function unary(){if(tokens[i]==='+'||tokens[i]==='-'){const op=tokens[i++],a=unary();return {...a,n:op==='-'?-a.n:a.n,tex:op+a.tex};}return power();}
  function starts(t){return !!t&&(/^(?:\d|\.|[a-zA-Z])/.test(t)||t==='(');}
  function product(){let a=unary();while(tokens[i]==='*'||tokens[i]==='/'||starts(tokens[i])){const implicit=starts(tokens[i]),op=implicit?'*':tokens[i++],b=unary();a=op==='*'?{n:a.n*b.n,d:a.d+b.d,tex:a.tex+(implicit?'\\,':'\\cdot ')+b.tex}:{n:a.n/b.n,d:a.d-b.d,tex:'\\frac{'+a.tex+'}{'+b.tex+'}'};}return a;}
  function sum(){let a=product();while(tokens[i]==='+'||tokens[i]==='-'){const op=tokens[i++],b=product();if(!near(a.d,b.d))throw Error('Yhteen- ja vähennyslaskussa tarvitaan samat yksiköt.');a={n:op==='+'?a.n+b.n:a.n-b.n,d:a.d,tex:a.tex+op+b.tex};}return a;}
  const q=sum();if(i!==tokens.length||!Number.isFinite(q.n))throw Error('Tarkista lasku.');return q;
 }
 function bindingsFor(raw,item,n){const funcs=new Set(['pi','sqrt','cbrt','sin','cos','tan','asin','acos','atan']);const words=norm(raw).match(/[a-zA-Z]+/g)||[],names=[...new Set(words.filter(w=>!funcs.has(w)&&!U[w]))];const u=info(item.unit);return Object.fromEntries(names.map(w=>[w,{n:n*u.n,d:u.d}]));}
 function checkRow(raw,item){
  if(!unitPattern.test(raw))return null;
  const target=info(item.unit),sides=norm(raw).split('=');if(sides.length>4)throw Error('Kirjoita yksi laskurivi.');
  const bindings=bindingsFor(raw,item,item.calc??item.answer),qs=sides.map((s,i)=>sides.length>1&&/^[A-Za-z]$/.test(s.trim())?{n:(item.calc??item.answer)*target.n,d:target.d,tex:s.trim()}:parse(s,bindings));
  if(qs.some(q=>!near(q.d,target.d)))throw Error('Tarkista laskun ja vastauksen yksiköt.');
  const rounded=(n,t)=>!item.exact&&significantRoundedMatch(n/target.n,t/target.n);const ok=sides.length===1?near(qs[0].n,item.answer*target.n)||rounded(qs[0].n,item.answer*target.n):qs.slice(1).every(q=>near(q.n,qs[0].n)||rounded(q.n,qs[0].n));
  const isolated=/^\s*(?:[A-Za-z]|alpha|beta)\s*=/.test(norm(raw))&&sides.length===2&&!/[a-zA-Z]/.test(sides[1].replace(/sqrt|cbrt|pi|asin|acos|atan|sin|cos|tan|km|hm|dam|dm|cm|mm|ml|cl|dl|ha|kg|mg|g|eur|m|l/g,''));
  return {ok,complete:ok&&isolated,answer:isolated?qs[1].n/target.n:null};
 }
 function answer(raw,item){raw=norm(raw);if(unitPattern.test(raw)){const q=parse(raw),u=info(item.unit);if(!near(q.d,u.d))throw Error('Tarkista vastauksen yksikkö.');return q.n/u.n;}return window.GeometryMath.value(raw);}
 function tex(raw,item){const sides=norm(raw).split('=');return sides.map(s=>parse(s,bindingsFor(raw,item||{unit:''},0)).tex).join('=');}
 return {parse,info,checkRow,answer,tex,hasUnits:s=>unitPattern.test(s)};
})();
