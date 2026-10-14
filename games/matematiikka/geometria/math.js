function significantRoundedMatch(n,target){return Number.isFinite(n)&&Number.isFinite(target)&&[2,3].some(k=>Math.abs(n-Number(target.toPrecision(k)))<=Math.max(1e-9,Math.abs(n)*1e-10));}
'use strict';
// Preserve conventional displayed trig notation while accepting keyboard function syntax.
function trigInput(raw){return String(raw).replace(/\b(asin|acos|atan|sin|cos|tan)\s*(alpha|beta|[a-z]|[+-]?\d+(?:[.,]\d+)?°?)(?![a-z\d])/gi,(_,f,a)=>f+'('+a+')');}

function value(input){
 let s=trigInput(input).trim().toLowerCase().replace(/,/g,'.').replace(/π/g,'pi').replace(/²/g,'^2').replace(/³/g,'^3').replace(/(\d|\))°/g,'$1').replace(/[×·]/g,'*').replace(/[−–]/g,'-').replace(/\s+/g,'');
 if(!s||s.length>160)throw Error('Kirjoita lasku.');
 s=s.replace(/(\d|\))(?=pi|sqrt|cbrt|sin|cos|tan|asin|acos|atan|\()/g,'$1*').replace(/pi(?=\d|\()/g,'pi*');
 const tokens=s.match(/\d*\.\d+|\d+\.?\d*|[a-z]+|[+\-*/^()]/g)||[];
 if(tokens.join('')!==s)throw Error('Käytä lukuja, laskumerkkejä, sulkeita, pi ja sqrt.');let p=0;
 const funcs={sqrt:Math.sqrt,cbrt:Math.cbrt,sin:x=>Math.sin(x*Math.PI/180),cos:x=>Math.cos(x*Math.PI/180),tan:x=>Math.tan(x*Math.PI/180),asin:x=>Math.asin(x)*180/Math.PI,acos:x=>Math.acos(x)*180/Math.PI,atan:x=>Math.atan(x)*180/Math.PI};
 function primary(){let t=tokens[p++];if(t==='('){const x=sum();if(tokens[p++]!==')')throw Error('Tarkista sulkeet.');return x}if(t==='pi')return Math.PI;if(funcs[t]){if(tokens[p++]!=='(')throw Error('Funktio tarvitsee sulkeet.');const x=sum();if(tokens[p++]!==')')throw Error('Tarkista sulkeet.');return funcs[t](x)}if(t&&/^\d|^\./.test(t))return Number(t);throw Error('Tarkista laskulauseke.');}
 function power(){let x=primary();if(tokens[p]==='^'){p++;x=Math.pow(x,unary())}return x}
 function unary(){if(tokens[p]==='+'){p++;return unary()}if(tokens[p]==='-'){p++;return -unary()}return power()}
 function product(){let x=unary();while(tokens[p]==='*'||tokens[p]==='/'){const op=tokens[p++],y=unary();x=op==='*'?x*y:x/y}return x}
 function sum(){let x=product();while(tokens[p]==='+'||tokens[p]==='-'){const op=tokens[p++],y=product();x=op==='+'?x+y:x-y}return x}
 const result=sum();if(p!==tokens.length||!Number.isFinite(result))throw Error('Tarkista laskulauseke.');return result;
}
function checkCalculation(input,answer){
 const raw=trigInput(input).trim().toLowerCase().replace(/α/g,'alpha').replace(/β/g,'beta');
 if(!raw.includes('=')&&!/[+*/^−-]|sqrt|sin|cos|tan|\d\s*[a-z(]/i.test(raw))throw Error('Kirjoita laskukenttään myös laskutoimitus.');
 if(!raw.includes('=')){
  const n=value(raw);return Math.abs(n-answer)<=Math.max(.0001,Math.abs(answer)*.000001);
 }
 const sides=raw.split('=');
 if(sides.length!==2||sides.some(s=>!s.trim()))throw Error('Kirjoita yksi yhtälö, jossa on kaksi puolta.');
 const functions=new Set(['pi','sqrt','cbrt','sin','cos','tan','asin','acos','atan']);
 const variables=[...new Set((raw.match(/[a-z]+/g)||[]).filter(w=>!functions.has(w)))];
 if(variables.length!==1||!['x','a','b','c','d','h','r','s','v','p','l','t','alpha','beta'].includes(variables[0]))throw Error('Käytä yhtälössä yhtä tuntematonta, esimerkiksi x.');
 const symbol=variables[0];
 const at=(side,n)=>value(side.replace(/[a-z]+/g,w=>w===symbol?'('+String(n)+')':w));
 const left=at(sides[0],answer),right=at(sides[1],answer);
 const near=(a,b)=>Math.abs(a-b)<=Math.max(.000001,Math.max(Math.abs(a),Math.abs(b))*.000001);
 if(!near(left,right))return false;
 // A tautology such as x=x must not count as forming an equation.
 const delta=Math.max(1,Math.abs(answer)*.2);
 const samples=[answer+delta,answer+2.3*delta,Math.max(.123,answer-delta*.7)];
 if(samples.every(n=>{try{return near(at(sides[0],n),at(sides[1],n))}catch{return false}}))throw Error('Yhtälön pitää määrätä tuntematon. Pelkkä x=x ei riitä.');
 return true;
}
function latex(input){
 if(String(input).includes('≈'))return String(input).split('≈').map(x=>x.trim()?latex(x):'\\square').join('\\approx ');
 if(String(input).includes(' tai '))return String(input).split(/\s+tai\s+/).map(latex).join('\\quad\\text{tai}\\quad{}');
 let s=trigInput(input).trim().replace(/α/g,'alpha').replace(/β/g,'beta').replace(/,/g,'.').replace(/π/g,'pi').replace(/²/g,'^2').replace(/³/g,'^3').replace(/[×·]/g,'*').replace(/[−–]/g,'-').replace(/\s+/g,'');
 if(!s||s.length>160)throw Error('');
 if(s.includes('=')){const parts=s.split('=');if(parts.length!==2)throw Error('');return parts.map(latex).join('=');}
 if(s.includes(' tai '))return s.split(/\s+tai\s+/).map(latex).join('\\quad\\text{tai}\\quad{}');
 if(s.startsWith('±'))return '\\pm '+latex(s.slice(1));
 s=s.replace(/(\d|\))(?=[a-zA-Z]|\()/g,'$1*').replace(/pi(?=\d|\()/g,'pi*');
 const tokens=s.match(/\d*\.\d+|\d+\.?\d*|[a-zA-Z]+|[+\-*/^()°]/g)||[];if(tokens.join('')!==s)throw Error('');let p=0;
 const funcs=new Set(['sqrt','cbrt','sin','cos','tan','asin','acos','atan']);
 function primary(){const t=tokens[p++];if(t==='('){const x=sum();if(tokens[p++]!==')')throw Error('');return '\\left('+x+'\\right)';}if(funcs.has(t)){if(tokens[p++]!=='(')throw Error('');let x=sum();if(tokens[p++]!==')')throw Error('');if(['sin','cos','tan'].includes(t)&&/^[+-]?\d+(?:\{,\}\d+)?$/.test(x))x+='^{\\circ}';if(t==='cbrt')return '\\sqrt[3]{'+x+'}';if(t==='sqrt')return '\\sqrt{'+x+'}';const name=t.startsWith('a')?'\\'+t.slice(1)+'^{-1}':'\\'+t;return name+' '+(/^(?:[a-z]|\\alpha|\\beta|\d+(?:\{,\}\d+)?(?:\^\{\\circ\})?)$/.test(x)?x:'\\left('+x+'\\right)');}if(t==='pi')return '\\pi';if(t==='alpha'||t==='beta')return '\\'+t;if(t&&/^\d|^\./.test(t))return t.replace('.', '{,}');if(t&&/^[a-zA-Z]$/.test(t))return t;throw Error('');}
 function power(){let x=primary();if(tokens[p]==='°'){p++;x+='^{\\circ}';}if(tokens[p]==='^'){p++;x+='^{'+unary()+'}';}return x;}
 function unary(){if(tokens[p]==='+'||tokens[p]==='-'){const op=tokens[p++];return op+unary();}return power();}
 function product(){let x=unary();while(tokens[p]==='*'||tokens[p]==='/'){const op=tokens[p++],y=unary();x=op==='*'?x+'\\cdot '+y:'\\frac{'+x+'}{'+y+'}';}return x;}
 function sum(){let x=product();while(tokens[p]==='+'||tokens[p]==='-'){const op=tokens[p++];x+=op+product();}return x;}
 const result=sum();if(p!==tokens.length)throw Error('');return result;
}

window.GeometryMath={value,latex,checkCalculation};
