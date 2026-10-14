'use strict';
// Bounded evaluations only; no JavaScript evaluation of student strings.
window.GeometryReview=(()=>{
 const fn=new Set(['pi','sqrt','cbrt','sin','cos','tan','asin','acos','atan','tai']);
 const norm=s=>trigInput(String(s)).replace(/α/g,'alpha').replace(/β/g,'beta').replace(/π/g,'pi').replace(/[×·]/g,'*').replace(/[−–]/g,'-').replace(/²/g,'^2').replace(/³/g,'^3').replace(/:/g,'/');
 function names(s){return [...new Set((norm(s).match(/[A-Za-z]+/g)||[]).flatMap(w=>fn.has(w.toLowerCase())?[]:/^(alpha|beta)$/i.test(w)?[w]:w.split('')))];}
 function evaluate(raw,b={}){let s=norm(raw).replace(/[A-Za-z]+/g,w=>fn.has(w.toLowerCase())?w.toLowerCase():w==='alpha'||w==='beta'?'('+b[w]+')':w.split('').map(k=>{if(!(k in b))throw Error('Tuntematon '+k);return '('+b[k]+')';}).join('*'));return value(s);}
 const near=(a,b)=>Math.abs(a-b)<1e-7*Math.max(1,Math.abs(a),Math.abs(b));
 function symbolic(raw,models){const sides=norm(raw).split('=');if(sides.length!==2||names(raw).length<2)return false;
  for(let model of models){model=({'sin(alpha)=a/c':'a=c*sin(alpha)','cos(alpha)=b/c':'b=c*cos(alpha)','tan(alpha)=a/b':'a=b*tan(alpha)','a^2+b^2=c^2':'c^2=a^2+b^2'})[model]||model;const [left,right]=norm(model).split('=');if(!right)continue;const vars=names(model),candidate=names(raw);if(candidate.some(k=>!vars.includes(k)&&!(k==='d'&&vars.includes('r'))))continue;
   let success=0,off=0;
   for(let i=0;i<16;i++){try{const b={};for(let j=0;j<vars.length;j++)b[vars[j]]=1.17+(i+1)*(j+2)*.317+(i%3)*.113;if(vars.includes('alpha'))b.alpha=17+i*3.1;
    let dep=left.trim(),square=false;if(/^[A-Za-z]\^2$/.test(dep)){dep=dep[0];square=true;}if(!/^[A-Za-z]$/.test(dep))break;
    b[dep]=evaluate(right,b);if(square)b[dep]=Math.sqrt(b[dep]);if(vars.includes('r'))b.d=2*b.r;
    if(!near(evaluate(sides[0],b),evaluate(sides[1],b)))break;success++;
    const changed={...b,[dep]:b[dep]*1.27+.19};if(vars.includes('r')&&dep==='r')changed.d=2*changed.r;
    if(!near(evaluate(sides[0],changed),evaluate(sides[1],changed)))off++;
   }catch{break;}}
   if(success===16&&off>=12)return true;
  }return false;
 }
 function literalResult(raw,p){const x=String(raw).trim();if(p.exact)return true;return /^[+-]?\d[\d\s]*(?:[.,]\d[\d\s]*)?(?:\s*(?:°|(?:km|hm|dam|dm|cm|mm|m|l|dl|cl|ml|kg|mg|g|eur|€)(?:[²³]|\^[23])?))?$/.test(x);}
 function transformed(previous,current,op){const A=norm(previous).split('='),B=norm(current).split('=');if(A.length!==2||B.length!==2)return false;const z=norm(op),kind=z[0],operand=z.slice(1);if(!['+','-','*','/'].includes(kind))return false;
  const vars=[...new Set([...names(previous),...names(current),...names(operand)])];let ok=0;
  for(let i=0;i<10;i++){const b=Object.fromEntries(vars.map((v,j)=>[v,1.31+(i+1)*(j+1)*.271]));try{const q=evaluate(operand,b),f=n=>kind==='+'?n+q:kind==='-'?n-q:kind==='*'?n*q:n/q;if(near(q,0)&&['*','/'].includes(kind))return false;const targets=A.map(x=>f(evaluate(x,b))),actual=B.map(x=>evaluate(x,b));if(!(targets.every((x,j)=>near(x,actual[j]))||targets.every((x,j)=>near(x,actual[1-j]))))return false;ok++;}catch{}}
  return ok>=8;
 }
 return {names,evaluate,symbolic,literalResult,transformed,norm};
})();
