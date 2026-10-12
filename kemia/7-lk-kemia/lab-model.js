'use strict';
/* Qualitative teaching model. No fitted completion times or universal linear law.
   Mg mass .010 g, solution 5 ml. HCl mass percent converted using approximate density.
   Ribbon 2 mm wide x .1 mm thick; powder equal-mass spherical grains .025 mm diameter.
   Surface recedes. Acid is consumed stoichiometrically. Assumed first-order acid-dependent surface
   recession flux, with an illustrative oxide-layer induction time, assumed Ea 35 kJ/mol. Heat release and Newton cooling evolve.
   These assumptions are documented for teachers; not calibrated school predictions. */
const RateModel=(()=>{
 const mass=.010,molarMass=24.305,density=1.738,volume=.005,R=8.314;
 const forms={piece:{name:'Pala'},powder:{name:'Jauhe'}};
 const variants={concentration:{name:'Väkevyys',question:'Miten suolahapon väkevyys vaikuttaa reaktionopeuteen?',key:'percent',values:[1,5,10],base:{percent:1,form:'piece',temperature:21}},surface:{name:'Hienojakoisuus',question:'Miten magnesiumin hienojakoisuus vaikuttaa reaktionopeuteen?',key:'form',values:['piece','powder'],base:{percent:5,form:'piece',temperature:21}},temperature:{name:'Lämpötila',question:'Miten suolahapon alkulämpötila vaikuttaa reaktionopeuteen?',key:'temperature',values:[21,60],base:{percent:5,form:'piece',temperature:21}}};
 function properties(s){const vol=mass/density*1000,nMg=mass/molarMass,nH=5*(1+.0045*s.percent)*s.percent/100/36.46;const r0=s.form==='piece'?.05:.0125;const width=2,length=vol/(width*.1),count=vol/(4/3*Math.PI*r0**3);return {nMg,nH,r0,width,length,count,initialArea:s.form==='piece'?2*(width*length+.1*width+.1*length):count*4*Math.PI*r0*r0,c0:nH/volume,temperature:s.temperature,...s};}
 function temperatureFactor(c){return Math.exp(-35000/R*(1/(c+273.15)-1/294.15));}
 function remaining(p,depth){if(p.form==='powder')return Math.max(0,1-depth/p.r0)**3;return Math.max(0,1-depth/.05)*Math.max(0,1-2*depth/p.width)*Math.max(0,1-2*depth/p.length);}
 function area(p,depth){if(p.form==='powder')return p.count*4*Math.PI*Math.max(0,p.r0-depth)**2;const a=Math.max(0,p.width-2*depth),b=Math.max(0,p.length-2*depth),c=Math.max(0,.1-2*depth);return 2*(a*b+a*c+b*c);}
 function run(settings,seed=1,variation=true){const p=properties(settings);if(p.nH<=2*p.nMg)throw Error('Happoa on oltava ylimäärin.'); const factor=variation?.95+.10*(Math.abs(Math.sin(seed*77.71))):1;
 const induction=.65/(Math.pow(p.c0,.65)*temperatureFactor(settings.temperature));
 function velocity(c){const exposure=.15+.85*(1-Math.exp(-t/induction));return .0011*factor*temperatureFactor(T)*c*exposure;}
 let depth=0,t=0,T=settings.temperature,dt=.01,points=[];
 function sample(){const rem=remaining(p,depth),c=(p.nH-2*p.nMg*(1-rem))/volume,speed=velocity(c),rate=density/1000*area(p,depth)*speed;return {t,r:Math.max(0,p.r0-depth),remaining:rem,reacted:1-rem,rate,c,temperature:T,gasMoles:p.nMg*(1-rem)};}
 points.push(sample());while(depth<p.r0&&t<1200){const a=sample(),old=depth,step=Math.min(dt,(p.r0-depth)/velocity(a.c));depth=Math.min(p.r0,depth+velocity(a.c)*step);const reactedDelta=a.remaining-remaining(p,depth);T+=p.nMg*reactedDelta*467000/30-(T-21)/150*step;t+=step;points.push(sample());if(step<1e-8&&depth<p.r0)depth=p.r0;}
 if(depth<p.r0)throw Error('Mallin aikaraja ylitetty.');return {settings:{...settings},properties:p,points,completeAt:t,surfaceActivity:factor,gasMoles:p.nMg,initialRate:points[0].rate};}
 function at(run,t){if(t<=0)return run.points[0];if(t>=run.completeAt)return {...run.points.at(-1),rate:0};let lo=0,hi=run.points.length-1;while(hi-lo>1){const m=(lo+hi)>>1;if(run.points[m].t<=t)lo=m;else hi=m;}const a=run.points[lo],b=run.points[hi],w=(t-a.t)/(b.t-a.t),out={};for(const k of Object.keys(a))out[k]=a[k]+(b[k]-a[k])*w;return out;}
 return {mass,forms,variants,properties,run,at,temperatureFactor,defaults:id=>({...variants[id].base})};
})();
