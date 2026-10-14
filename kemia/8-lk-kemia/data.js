'use strict';
const ELEMENTS=[
['H','vety',1,1,1,[1],'epämetalli',1],['He','helium',2,1,18,[2],'epämetalli',0],['Li','litium',3,2,1,[2,1],'metalli',1],['Be','beryllium',4,2,2,[2,2],'metalli',2],['B','boori',5,2,13,[2,3],'puolimetalli',0],['C','hiili',6,2,14,[2,4],'epämetalli',0],['N','typpi',7,2,15,[2,5],'epämetalli',-3],['O','happi',8,2,16,[2,6],'epämetalli',-2],['F','fluori',9,2,17,[2,7],'epämetalli',-1],['Ne','neon',10,2,18,[2,8],'epämetalli',0],['Na','natrium',11,3,1,[2,8,1],'metalli',1],['Mg','magnesium',12,3,2,[2,8,2],'metalli',2],['Al','alumiini',13,3,13,[2,8,3],'metalli',3],['Si','pii',14,3,14,[2,8,4],'puolimetalli',0],['P','fosfori',15,3,15,[2,8,5],'epämetalli',-3],['S','rikki',16,3,16,[2,8,6],'epämetalli',-2],['Cl','kloori',17,3,17,[2,8,7],'epämetalli',-1],['Ar','argon',18,3,18,[2,8,8],'epämetalli',0],['K','kalium',19,4,1,[2,8,8,1],'metalli',1],['Ca','kalsium',20,4,2,[2,8,8,2],'metalli',2]
].map(([s,name,z,period,group,shells,type,charge])=>({s,name,z,period,group,shells,type,charge}));
const E=Object.fromEntries(ELEMENTS.map(e=>[e.s,e]));
const TITLES=['Jaksollinen järjestelmä','Ionit ja ioniyhdisteet','Kovalenttinen sidos','Hapot, emäkset ja pH','Neutraloituminen','Tuntemattomien aineiden laboratorio','Metallit ja hapettuminen','Sähkökemia'];
const ATOM_TASKS=['H','He','Li','C','N','O','Ne','Na','Mg','Cl','Al','S','K','Ca'].map((s,i)=>({s,prompt:i===13?'Etsi neljännen jakson maa-alkalimetalli. Rakenna sen mallit.':i===12?'Etsi alkuaine, jolla on neljä kuorta ja yksi ulkoelektroni.':`Rakenna ${E[s].name}atomin kuori- ja pistemalli.`,challenge:i>=10}));
const ION_TASKS=['Na','Cl','Mg','O','Ca','F','Al'].map(s=>({kind:'ion',s})).concat([
{kind:'salt',cation:'Na',anion:'Cl',cp:1,ap:1,cq:1,aq:-1,formula:'NaCl',name:'natriumkloridi'},
{kind:'salt',cation:'Mg',anion:'O',cp:1,ap:1,cq:2,aq:-2,formula:'MgO',name:'magnesiumoksidi'},
{kind:'salt',cation:'Ca',anion:'Cl',cp:1,ap:2,cq:2,aq:-1,formula:'CaCl2',name:'kalsiumkloridi'},
{kind:'salt',cation:'Al',anion:'O',cp:2,ap:3,cq:3,aq:-2,formula:'Al2O3',name:'alumiinioksidi'},
{kind:'salt',cation:'Na',anion:'SO4',cp:2,ap:1,cq:1,aq:-2,formula:'Na2SO4',name:'natriumsulfaatti'},
{kind:'salt',cation:'Mg',anion:'NO3',cp:1,ap:2,cq:2,aq:-1,formula:'Mg(NO3)2',name:'magnesiumnitraatti'},
{kind:'salt',cation:'Al',anion:'SO4',cp:2,ap:3,cq:3,aq:-2,formula:'Al2(SO4)3',name:'alumiinisulfaatti'}]);
// Coordinates show connectivity; Lewis diagrams do not claim exact bond angles.
const MOLECULES=[
{formula:'H2',name:'vety',a:[['H',175,150,0],['H',325,150,0]],b:[[0,1,1]]},
{formula:'Cl2',name:'kloori',a:[['Cl',175,150,3],['Cl',325,150,3]],b:[[0,1,1]]},
{formula:'HCl',name:'vetykloridi',a:[['H',175,150,0],['Cl',325,150,3]],b:[[0,1,1]]},
{formula:'O2',name:'happi',a:[['O',175,150,2],['O',325,150,2]],b:[[0,1,2]]},
{formula:'N2',name:'typpi',a:[['N',175,150,1],['N',325,150,1]],b:[[0,1,3]]},
{formula:'H2O',name:'vesi',a:[['O',250,115,2],['H',150,225,0],['H',350,225,0]],b:[[0,1,1],[0,2,1]]},
{formula:'NH3',name:'ammoniakki',a:[['N',250,135,1],['H',140,220,0],['H',360,220,0],['H',250,260,0]],b:[[0,1,1],[0,2,1],[0,3,1]]},
{formula:'CH4',name:'metaani',a:[['C',250,160,0],['H',250,50,0],['H',135,160,0],['H',365,160,0],['H',250,270,0]],b:[[0,1,1],[0,2,1],[0,3,1],[0,4,1]]},
{formula:'CO2',name:'hiilidioksidi',a:[['O',110,150,2],['C',250,150,0],['O',390,150,2]],b:[[0,1,2],[1,2,2]]},
{formula:'H2S',name:'rikkivety',a:[['S',250,115,2],['H',150,225,0],['H',350,225,0]],b:[[0,1,1],[0,2,1]]},
{formula:'F2',name:'fluori',a:[['F',175,150,3],['F',325,150,3]],b:[[0,1,1]]},
{formula:'H2O2',name:'vetyperoksidi',a:[['H',60,210,0],['O',175,150,2],['O',325,150,2],['H',440,210,0]],b:[[0,1,1],[1,2,1],[2,3,1]]},
{formula:'CS2',name:'hiilidisulfidi',a:[['S',110,150,2],['C',250,150,0],['S',390,150,2]],b:[[0,1,2],[1,2,2]]},
{formula:'C2H4',name:'eteeni',a:[['C',175,150,0],['C',325,150,0],['H',80,65,0],['H',80,235,0],['H',420,65,0],['H',420,235,0]],b:[[0,1,2],[0,2,1],[0,3,1],[1,4,1],[1,5,1]]}
];
const SAMPLES=[{name:'suolahappo',formula:'HCl',ph:1.5,kind:'hapan',ion:'H+'},{name:'etikkahappoliuos',formula:'CH3COOH',ph:3.4,kind:'hapan',ion:'H+'},{name:'ruokasuolaliuos',formula:'NaCl',ph:7,kind:'neutraali',ion:'yhtä paljon'},{name:'natriumhydroksidiliuos',formula:'NaOH',ph:12.5,kind:'emäksinen',ion:'OH-'},{name:'ammoniakkiliuos',formula:'NH3',ph:10.8,kind:'emäksinen',ion:'OH-'},{name:'hiilihappoa sisältävä vesi',formula:'H2CO3',ph:4.5,kind:'hapan',ion:'H+'}];
const F=(key,label,answer,type='text',options=null)=>({key,label,answer,type,options});
const selectF=(key,label,answer,options)=>F(key,label,answer,'select',options);
const PH_TASKS=[];
const METALS={Mg:{name:'magnesium',q:2,rank:0},Al:{name:'alumiini',q:3,rank:1},Zn:{name:'sinkki',q:2,rank:2},Fe:{name:'rauta',q:2,rank:3},Sn:{name:'tina',q:2,rank:4},Pb:{name:'lyijy',q:2,rank:5},H:{name:'vety',q:1,rank:6},Cu:{name:'kupari',q:2,rank:7},Ag:{name:'hopea',q:1,rank:8},Au:{name:'kulta',q:3,rank:9}};
const DISPLACEMENTS=[['Fe','Cu'],['Cu','Ag'],['Mg','Cu'],['Cu','Fe'],['Zn','Fe']].map(([m,ion])=>({kind:'displace',m,ion}));
const METAL_TASKS=DISPLACEMENTS.concat([
{prompt:'Sähköjohtimen ydin tehdään kuparista ja kuori muovista.',fields:[F('a','Kuparin kemiallinen merkki','Cu','formula'),selectF('b','Kuparissa sähköä kuljettavat','liikkuvat elektronit',['liikkuvat elektronit','liikkuvat atomiytimet']),selectF('c','Muovikuoren tehtävä on','sähköinen eristäminen',['sähköinen eristäminen','virran voimistaminen'])],explain:'Metallisidos sallii elektronien liikkumisen. Muovi eristää johtimen ympäristöstä.'},
{prompt:'Alumiinista valmistetaan ohutta foliota ja lämmönsiirtimiä.',fields:[F('a','Alumiinin kemiallinen merkki','Al','formula'),selectF('b','Folion valmistusta auttaa','muokattavuus',['muokattavuus','hauraus']),selectF('c','Lämmönsiirtimen ominaisuus','hyvä lämmönjohtavuus',['hyvä lämmönjohtavuus','lämmöneristävyys'])],explain:'Metalleille tyypillisiä ominaisuuksia ovat lämmön- ja sähkönjohtavuus, kiilto ja muokattavuus. Ominaisuuksissa on metallikohtaisia eroja.'},
{prompt:'Messinkiä käytetään soittimissa ja pronssia patsaissa.',fields:[F('a','Messingin päämetalli','kupari'),F('b','Messingin toinen metalli','sinkki'),F('c','Pronssin toinen metalli','tina')],explain:'Messinki on kuparin ja sinkin seos, pronssi tavallisesti kuparin ja tinan seos.'},
{prompt:'Ruostumaton teräs ja metalliseosten käyttö.',fields:[F('a','Teräksen päämetalli','rauta'),F('b','Ruostumattoman teräksen tärkeä seosaine','kromi'),selectF('c','Seostamisella voidaan','muuttaa ominaisuuksia',['muuttaa ominaisuuksia','muuttaa metalli epämetalliksi','poistaa kaikki elektronit'])],explain:'Kromin avulla syntyvä suojaava pintakerros parantaa korroosionkestävyyttä. Seos voi olla puhdasta metallia kovempi.'},
{prompt:'Alumiini on epäjalo metalli, mutta se kestää usein ulkoilmassa.',fields:[selectF('a','Pinnan suoja muodostuu','tiiviistä oksidikerroksesta',['tiiviistä oksidikerroksesta','paksusta ruosteesta','jalometallisuudesta']),selectF('b','Hapettuminen tarkoittaa','elektronien luovuttamista',['elektronien luovuttamista','elektronien vastaanottamista','neutronien häviämistä'])],explain:'Alumiini hapettuu, mutta sen tiivis oksidikerros suojaa alla olevaa metallia.'},
{prompt:'Raudan ruostumista verrataan neljässä astiassa: kuiva ilma, hapeton vesi, vesi ja ilma sekä suolavesi ja ilma.',fields:[selectF('a','Ruostuminen edellyttää tässä kokeessa','vettä ja happea',['vain vettä','vain happea','vettä ja happea']),selectF('b','Suolavesi tavallisesti','nopeuttaa korroosiota',['nopeuttaa korroosiota','estää korroosion kokonaan']),selectF('c','Kontrolloidussa kokeessa muutetaan','yhtä tekijää kerrallaan',['kaikkia tekijöitä','yhtä tekijää kerrallaan'])],explain:'Ruoste on pääasiassa raudan, hapen ja veden muodostamien yhdisteiden seos. Suolat parantavat veden sähkönjohtavuutta.'},
{prompt:'Teräsrunkoon liitetään sinkkipala. Molemmat ovat kosketuksessa meriveteen.',fields:[selectF('a','Uhrimetalli on','sinkki',['sinkki','rauta']),selectF('b','Se hapettuu','rautaa helpommin',['rautaa helpommin','rautaa vaikeammin']),selectF('c','Palan pitää','olla sähköisessä yhteydessä runkoon',['olla sähköisessä yhteydessä runkoon','olla eristetty rungosta'])],explain:'Epäjalompi sinkki hapettuu ja suojaa terästä. Pelkkä irrallinen sinkkipala ei anna samaa suojaa.'},
{prompt:'Kuparinen löylykauha kiinnitetään rautanaulalla. Liitos kastuu toistuvasti.',fields:[selectF('a','Herkkä syöpymään on','rautanaula',['rautanaula','kuparikauha']),selectF('b','Kosteus toimii','elektrolyyttinä',['elektrolyyttinä','elektronijohtimena']),selectF('c','Suojausta parantaa','sähköinen eristäminen',['sähköinen eristäminen','suolan lisääminen'])],explain:'Kostea kahden metallin liitos voi muodostaa sähkökemiallisen parin. Epäjalompi rauta hapettuu.'},
{prompt:'Sinkki ja kupari pannaan erikseen laimeaan suolahappoon. Vertaa ennustetta ja sen rajoja.',fields:[selectF('a','Vetyä tuottaa','sinkki',['sinkki','kupari','molemmat']),selectF('b','Voiko jännitesarjasta päätellä reaktioon kuluvan ajan?','ei',['kyllä','ei']),F('c','Syntyvän kaasun kaava','H2','formula')],explain:'Sinkki on vetyä epäjalompi. Jännitesarja ennustaa reaktion mahdollisuutta, mutta ei yksin nopeutta. Pinnat, pitoisuus ja lämpötila vaikuttavat.'}
]);
const UNKNOWN_SETS=[
{title:'Kolme valkoista ainetta',names:['sokeri','natriumkloridi','natriumhydroksidi'],samples:[{name:'sokeri',ph:7,conduct:false},{name:'natriumkloridi',ph:7,conduct:true},{name:'natriumhydroksidi',ph:12.5,conduct:true}],tests:['ph','conduct']},
{title:'Kaksi irronnutta etikettiä',names:['kalsiumhydroksidi','rikkihappo'],samples:[{name:'kalsiumhydroksidi',ph:12,conduct:true},{name:'rikkihappo',ph:1.5,conduct:true}],tests:['ph','conduct']},
{title:'Happo, suola vai emäs?',names:['suolahappo','natriumkloridi','ammoniakki'],samples:[{name:'suolahappo',ph:1.5,conduct:true},{name:'natriumkloridi',ph:7,conduct:true},{name:'ammoniakki',ph:10.8,conduct:true}],tests:['ph','conduct']},
{title:'Karbonaatti vai kloridi?',names:['natriumkarbonaatti','natriumkloridi'],samples:[{name:'natriumkarbonaatti',ph:11,conduct:true,gas:true},{name:'natriumkloridi',ph:7,conduct:true,gas:false}],tests:['ph','acid','conduct']},
{title:'Kaksi neutraalia liuosta',names:['sokeri','natriumkloridi'],samples:[{name:'sokeri',ph:7,conduct:false},{name:'natriumkloridi',ph:7,conduct:true}],tests:['ph','conduct']},
{title:'Sokeri, suola ja pesusooda',names:['sokeri','natriumkloridi','natriumkarbonaatti'],samples:[{name:'sokeri',ph:7,conduct:false,gas:false},{name:'natriumkloridi',ph:7,conduct:true,gas:false},{name:'natriumkarbonaatti',ph:11,conduct:true,gas:true}],tests:['ph','conduct','acid']}
];
const CELL_METALS={Mg:{name:'magnesium',rank:0,q:2},Zn:{name:'sinkki',rank:1,q:2},Fe:{name:'rauta',rank:2,q:2},Cu:{name:'kupari',rank:3,q:2}};
