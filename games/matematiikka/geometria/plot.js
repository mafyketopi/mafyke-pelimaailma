'use strict';
window.GeometryPlot=(()=>{
 const origin=320,step=50;
 const xy=(x,y)=>[origin+x*step,origin-y*step];
 const gridAt=(px,py)=>[Math.round((px-origin)/step),Math.round((origin-py)/step)];
 const line=(a,b,attrs='')=>`<line x1="${a[0]}" y1="${a[1]}" x2="${b[0]}" y2="${b[1]}" ${attrs}/>`;
 function base(item,r={}){
  let s=window.GeometryGridBackground||'<rect width="640" height="640" fill="white"/>';
  if(!window.GeometryGridBackground){for(let n=-5;n<=5;n++){const [x,y]=xy(n,n);s+=line([x,70],[x,570],'stroke="#ddd"')+line([70,y],[570,y],'stroke="#ddd"');if(n!==0)s+=`<text x="${x}" y="346" text-anchor="middle">${n}</text><text x="295" y="${y+7}" text-anchor="end">${n}</text>`;}s+=line([55,320],[580,320],'stroke="black"')+line([320,585],[320,55],'stroke="black"');}
  s+=window.GeometryGridForeground||'';const label=(x,y,k,color='black')=>{const q=window.GeometryGridGlyphs?.[k];if(!q)return `<text x="${x}" y="${y}" fill="${color}">${esc(k)}</text>`;const vb=q.viewBox.split(' ').map(Number),h=23,w=h*vb[2]/vb[3],inner=q.inner.replace(/fill:rgb\(0%,0%,0%\)/g,'fill:'+color);return `<svg x="${x}" y="${y-23}" width="${w}" height="${h}" viewBox="${q.viewBox}">${inner}</svg>`;};
  if(item.mirror==='diagonal')s+=line(xy(-5,-5),xy(5,5),'stroke="black" stroke-width="2" stroke-dasharray="8 6"')+label(590,72,'s');
  if(item.mirror==='vertical'){const x=xy(item.mirrorAt,0)[0];s+=line([x,60],[x,580],'stroke="black" stroke-width="2" stroke-dasharray="8 6"')+label(x+12,60,'s');}
  function chain(keys,points,closed=false,color='black'){const pts=keys.filter(k=>points[k]).map(k=>xy(...points[k]));if(pts.length>1)s+=`<polyline points="${pts.map(p=>p.join(',')).join(' ')}${closed?' '+pts[0].join(','):''}" fill="none" stroke="${color}" stroke-width="2"/>`;}
  if(item.originalConnect)chain(item.originalConnect,item.shown,true);
  if(item.segments)for(const pair of item.segments)chain(pair,r.marks||{},false);if(item.connect)chain(item.connect,r.marks||{},item.connect.length>2,item.mirror?'#007e84':'black');
  for(const [k,v] of Object.entries(item.shown||{})){const [x,y]=xy(...v);s+=`<circle cx="${x}" cy="${y}" r="5" fill="black"/>`+label(x+11,y-12,k);}
  for(const [k,v] of Object.entries(r.marks||{})){const [x,y]=xy(...v);s+=`<circle cx="${x}" cy="${y}" r="6" fill="${item.mirror?'#007e84':'black'}"/>`+label(x+11,y-13,k,item.mirror?'#007e84':'black');}
  
  return '<g font-family="Latin Modern Math,Georgia,serif" font-size="27">'+s+'</g>';
 }
 function eventPoint(event,svg){const matrix=svg.getScreenCTM?.();if(matrix&&typeof DOMPoint!=='undefined'){const p=new DOMPoint(event.clientX,event.clientY).matrixTransform(matrix.inverse());return gridAt(p.x,p.y);}const r=svg.getBoundingClientRect(),scale=Math.min(r.width/640,r.height/640),ox=(r.width-640*scale)/2,oy=(r.height-640*scale)/2;return gridAt((event.clientX-r.left-ox)/scale,(event.clientY-r.top-oy)/scale);}
 function matches(item,r){return Object.keys(item.points).every(k=>r.marks?.[k]&&r.marks[k][0]===item.points[k][0]&&r.marks[k][1]===item.points[k][1]);}
 function bind(host,item,r,changed){
  const svg=host.querySelector('svg'),keys=Object.keys(item.points),note=host.querySelector('.point-status');let active=keys.find(k=>!r.marks?.[k])||keys[0],drag=null,cursor=r.marks?.[active]?.slice()||[0,0],keyboard=false;
  const redraw=()=>{let drawing=base(item,r);if(keyboard){const [x,y]=xy(...cursor);drawing+=`<path d="M${x-12},${y}h24 M${x},${y-12}v24" stroke="#007e84" stroke-width="2"/>`;}svg.innerHTML=drawing;if(note)note.textContent=keyboard?`${active}: (${cursor.join(', ')}) — Enter merkitsee pisteen.`:keys.every(k=>r.marks?.[k])?'Kaikki pisteet merkitty. Voit siirtää pisteitä vetämällä.':`Merkitse piste ${active}.`;};
  function place(pt){if(pt.some(v=>Math.abs(v)>5))return;r.marks=r.marks||{};r.marks[drag||active]=pt.slice();cursor=pt.slice();r.correct=false;changed();redraw();}
  svg.onpointerdown=e=>{const p=eventPoint(e,svg),near=keys.find(k=>r.marks?.[k]&&Math.hypot(r.marks[k][0]-p[0],r.marks[k][1]-p[1])<.5);if(!near&&keys.every(k=>r.marks?.[k]))return;keyboard=false;drag=near||null;active=near||keys.find(k=>!r.marks?.[k])||active;place(p);svg.setPointerCapture?.(e.pointerId);svg.focus({preventScroll:true});};
  svg.onpointermove=e=>{if(e.buttons&&drag)place(eventPoint(e,svg));};svg.onpointerup=()=>{drag=null;active=keys.find(k=>!r.marks?.[k])||active;redraw();};svg.onpointercancel=()=>{drag=null;};
  svg.onkeydown=e=>{if(!['ArrowLeft','ArrowRight','ArrowUp','ArrowDown','Enter'].includes(e.key))return;e.preventDefault();keyboard=true;if(e.key==='Enter'){place(cursor);active=keys.find(k=>!r.marks?.[k])||keys[(keys.indexOf(active)+1)%keys.length];cursor=r.marks?.[active]?.slice()||[0,0];}else{cursor[0]=Math.max(-5,Math.min(5,cursor[0]+(e.key==='ArrowRight'?1:e.key==='ArrowLeft'?-1:0)));cursor[1]=Math.max(-5,Math.min(5,cursor[1]+(e.key==='ArrowUp'?1:e.key==='ArrowDown'?-1:0)));}redraw();};redraw();
 }
 return {xy,gridAt,base,bind,matches,eventPoint};
})();
