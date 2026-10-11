const MCBANKS = {
  "heat": [
    {
      "q": "Pakastimessa on −20 °C. Lämpötila kelvineinä on likimäärin",
      "options": [
        "253 K",
        "293 K",
        "−293 K",
        "−253 K"
      ],
      "answer": 0,
      "why": "Lisää Celsius-lukemaan 273."
    },
    {
      "q": "Lämpötila muuttuu 15 °C:sta 25 °C:seen. Muutos kelvineinä on",
      "options": [
        "298 K",
        "10 K",
        "283 K",
        "−10 K"
      ],
      "answer": 1,
      "why": "Lämpötilaero on sama celsiusasteina ja kelvineinä."
    },
    {
      "q": "Jää–vesiseosta lämmitetään. Lämpötila pysyy 0 °C:ssa. Mitä tapahtuu?",
      "options": [
        "Vesi lämpenee, vaikka mittarin lukema ei muutu",
        "Seoksesta poistuu energiaa",
        "Jäätä sulaa ja nestemäisen veden määrä kasvaa",
        "Jään määrä kasvaa"
      ],
      "answer": 2,
      "why": "Lämmittimestä siirtyvä energia kuluu jään sulamiseen."
    },
    {
      "q": "Nestelämpömittarin lukema nousee lämpimässä vedessä. Mikä selitys on oikea?",
      "options": [
        "Nesteen hiukkaset suurenevat ja siksi täyttävät enemmän tilaa",
        "Lasiputken tilavuus pienenee lämpötilan noustessa",
        "Nesteen massa kasvaa ja nostaa nestepatsasta",
        "Neste laajenee lämmetessään enemmän kuin sitä ympäröivä lasi"
      ],
      "answer": 3,
      "why": "Lämpeneminen muuttaa hiukkasten liikettä ja välimatkoja. Hiukkaset eivät itse suurene."
    },
    {
      "q": "Haihtumista tapahtuu",
      "options": [
        "Myös alle kiehumispisteen suuruisissa lämpötiloissa, nesteen pinnalta",
        "Vain silloin, kun ympäristö lämmittää nestettä",
        "Myös alle kiehumispisteen suuruisissa lämpötiloissa, kuplina koko nesteessä",
        "Vain kiehumispisteessä, pinnalta"
      ],
      "answer": 0,
      "why": "Pinnasta voi poistua molekyylejä monissa lämpötiloissa."
    },
    {
      "q": "Kylmän mehukannun ulkopinta kastuu lämpimässä huoneessa. Kannu ei vuoda. Mistä vesi tulee?",
      "options": [
        "Huoneilman vesihöyry jähmettyy nestemäiseksi",
        "Huoneilman vesihöyry tiivistyy kylmään pintaan",
        "Kannu luovuttaa vettä ilman jäähtyessä",
        "Kylmä neste haihtuu kannun seinämän läpi"
      ],
      "answer": 1,
      "why": "Ilman vesihöyry tiivistyy, kun se jäähtyy riittävästi kannun pinnalla."
    },
    {
      "q": "Metalli ja puu ovat samassa huoneessa. Metalli tuntuu kylmemmältä. Miksi?",
      "options": [
        "Puun ominaislämpökapasiteetti määrää sen lämpötilan",
        "Metalli luovuttaa käteen vähemmän säteilyä",
        "Metalli johtaa kädestä lämpöä nopeammin",
        "Metallin lämpötila on alempi"
      ],
      "answer": 2,
      "why": "Kosketustuntemukseen vaikuttaa lämmön siirtyminen, ei vain lämpötila."
    },
    {
      "q": "Kahdessa astiassa on 40-asteista vettä. Toisessa on vettä kaksinkertainen määrä. Mikä väite on oikein?",
      "options": [
        "Pienemmän vesimäärän lämpötila on alempi",
        "Suuremman vesimäärän lämpötila on kaksinkertainen",
        "Molempien jäähdyttäminen 20 °C:seen vapauttaa yhtä paljon energiaa",
        "Suuremman vesimäärän jäähdyttäminen 20 °C:seen vapauttaa enemmän energiaa"
      ],
      "answer": 3,
      "why": "Samansuuruinen lämpötilan lasku vapauttaa samasta aineesta sitä enemmän energiaa, mitä suurempi massa on."
    },
    {
      "q": "Samaa ainetta olevien näytteiden massat ovat 1 kg ja 3 kg. Molempia lämmitetään 1 °C. Suurempi näyte tarvitsee energiaa pienempään verrattuna",
      "options": [
        "Kolminkertainen määrä",
        "Kolmannes",
        "Yhdeksänkertainen määrä",
        "Yhtä paljon"
      ],
      "answer": 0,
      "why": "E = cmΔT: energia on verrannollinen massaan."
    },
    {
      "q": "Vettä (1 kg) ja öljyä (1 kg) lämmitetään samalla teholla yhtä kauan, jolloin niihin siirtyy yhtä paljon energiaa. Vesi lämpenee vähemmän. Miksi?",
      "options": [
        "Öljyn alkulämpötila määrää aina lämpötilan nousun",
        "Veden ominaislämpökapasiteetti on suurempi",
        "Veden tiheys on suurempi",
        "Vesi johtaa lämpöä hitaammin"
      ],
      "answer": 1,
      "why": "Ominaislämpökapasiteetti yhdistää massan, energian ja lämpötilan muutoksen."
    },
    {
      "q": "Näytteeseen siirtyy 600 J energiaa ja sen lämpötila nousee 3 °C. Kaksinkertainen energiamäärä nostaa lämpötilaa samoissa oloissa",
      "options": [
        "9 °C",
        "3 °C",
        "6 °C",
        "1,5 °C"
      ],
      "answer": 2,
      "why": "Ilman olomuodonmuutosta lämpötilan nousu on verrannollinen siirtyvään energiaan."
    },
    {
      "q": "Vesi kiehuu avoimessa astiassa. Lämmittimen tehoa lisätään. Mitä tapahtuu normaalissa ilmanpaineessa?",
      "options": [
        "Vettä höyrystyy vähemmän samassa ajassa",
        "Veden kiehumispiste nousee",
        "Veden lämpötila nousee jatkuvasti",
        "Vettä höyrystyy enemmän samassa ajassa"
      ],
      "answer": 3,
      "why": "Kiehuvan veden lämpötila pysyy noin 100 °C:ssa. Suurempi lämmitysteho nopeuttaa höyrystymistä."
    },
    {
      "q": "Metallisauva pitenee 0,4 mm lämpötilan noustessa 20 °C. Nousu 60 °C aiheuttaa samoissa oloissa pitenemisen",
      "options": [
        "1,2 mm",
        "2,4 mm",
        "0,13 mm",
        "0,8 mm"
      ],
      "answer": 0,
      "why": "Lämpötilan muutos kolminkertaistuu."
    },
    {
      "q": "Metallilevyn keskellä on reikä. Levyä lämmitetään tasaisesti. Reikä yleensä",
      "options": [
        "Pienenee metallin laajetessa sisäänpäin",
        "Suurenee levyn mukana",
        "Suurenee vain levyn paksuussuunnassa",
        "Säilyy samana, koska reikää ei lämmitetä"
      ],
      "answer": 1,
      "why": "Kaikki levyn pituudet, myös reiän halkaisija, kasvavat."
    },
    {
      "q": "Metallinen kehys lämpenee tasaisesti. Sen massa säilyy ja tilavuus kasvaa. Mitä tiheydelle tapahtuu?",
      "options": [
        "Tiheys säilyy, koska massa säilyy",
        "Tiheys pienenee vain, jos kehys menettää ainetta",
        "Tiheys pienenee",
        "Tiheys kasvaa tilavuuden mukana"
      ],
      "answer": 2,
      "why": "Tiheys on massa jaettuna tilavuudella. Sama massa jakautuu suurempaan tilavuuteen."
    },
    {
      "q": "Kuuma metallipala pudotetaan viileään veteen. Astia eristetään ympäristöstä. Mikä toteutuu lämpötilojen tasoituttua?",
      "options": [
        "Metalli lakkaa luovuttamasta energiaa vasta jäähdyttyään huoneenlämpötilaan",
        "Veden lämpötilan nousu on metallin lämpötilan laskun suuruinen",
        "Loppulämpötila on aina alkulämpötilojen keskiarvo",
        "Metallin luovuttama energia on veden vastaanottaman energian suuruinen"
      ],
      "answer": 3,
      "why": "Energia säilyy. Lämpötilan muutos riippuu myös massasta ja ominaislämpökapasiteetista."
    },
    {
      "q": "Märkä iho viilenee ilman ollessa lämpimämpää kuin iho. Mikä selittää ilmiön?",
      "options": [
        "Veden haihtuminen sitoo energiaa",
        "Veden lämpötila on aina ilman lämpötilaa alempi",
        "Vesi johtaa lämpöä aina iholta pois",
        "Veden tiivistyminen sitoo energiaa"
      ],
      "answer": 0,
      "why": "Haihtuminen voi viilentää, vaikka lämpöä siirtyy ilmasta ihoon."
    },
    {
      "q": "Lumivarasto peitetään kesäksi paksulla puuhakekerroksella. Miksi lumi voi säilyä pitkään?",
      "options": [
        "Hake jäähdyttää lumen ympäristöä kylmemmäksi energiaa kuluttamatta",
        "Hake hidastaa lämmön siirtymistä ja lumen sulaminen sitoo energiaa",
        "Hake nostaa lumen sulamispistettä ja lumi kestää korkeampaa lämpötilaa",
        "Hake estää lämmön siirtymisen kokonaan ja lumi ei enää sula"
      ],
      "answer": 1,
      "why": "Eriste hidastaa lämmönsiirtoa. Sulamiseen tarvitaan energiaa, vaikka lämpötila ei sulamisen aikana nouse."
    },
    {
      "q": "Halutaan verrata tumman ja vaalean levyn kykyä imeä säteilyä. Luotettavan vertailun tekemiseksi levyillä on oltava…",
      "options": [
        "Vain sama alkulämpötila",
        "Vain sama massa",
        "Sama massa ja materiaali, sama alkulämpötila sekä sama etäisyys säteilylähteestä",
        "Sama loppulämpötila"
      ],
      "answer": 2,
      "why": "Muut olennaiset tekijät pidetään samoina."
    },
    {
      "q": "Samanlaisissa tummassa ja kiiltävässä metalliastiassa on yhtä kuumaa vettä. Miksi tumma astia voi jäähtyä nopeammin?",
      "options": [
        "Kiiltävä pinta vastaanottaa kylmyyttä hitaammin",
        "Tumma pinta tekee veden ominaislämpökapasiteetista pienemmän",
        "Kiiltävä pinta estää kaiken lämmön siirtymisen",
        "Tumma pinta lähettää lämpösäteilyä tehokkaammin"
      ],
      "answer": 3,
      "why": "Tumma maalipinta luovuttaa yleensä enemmän lämpösäteilyä kuin kiillotettu metallipinta."
    },
    {
      "q": "Vesihöyry tiivistyy iholle. Miksi se voi polttaa tehokkaasti?",
      "options": [
        "Tiivistyminen vapauttaa energiaa iholle",
        "Höyry on aina yli 100 °C:ssa",
        "Tiivistyminen sitoo energiaa iholta",
        "Höyryn pienempi tiheys kasvattaa sen lämpötilaa"
      ],
      "answer": 0,
      "why": "Tiivistyminen luovuttaa energiaa ympäristöön."
    },
    {
      "q": "Kuuma kaurapuuro ja kuiva leipä ovat samassa lämpötilassa. Puuro polttaa suuta herkemmin. Mikä on paras selitys?",
      "options": [
        "Puurossa on korkeampi lämpötila, vaikka mittari näyttää samaa",
        "Puuro siirtää kosketuksessa suuhun enemmän energiaa kuin samanlämpöinen kuiva leipä",
        "Samassa lämpötilassa olevat ruoat siirtävät suuhun yhtä paljon energiaa",
        "Puuro lämmittää suuta, koska sen tiheys yksin määrää lämpövirran"
      ],
      "answer": 1,
      "why": "Pelkkä lämpötila ei määrää kosketuksessa siirtyvää energiaa. Vesi ja tehokas kosketus vaikuttavat puuron polttavuuteen."
    },
    {
      "q": "Märkä pyyhe kuivuu 25 °C:n lämpötilassa. Mikä kuvaus on oikea?",
      "options": [
        "Vesi kiehuu hitaasti, koska pyyhkeen pinta-ala on suuri",
        "Vesi tiivistyy ilmaan ja samalla pyyhe kuivuu",
        "Pinnalta poistuu vesihiukkasia, vaikka vesi ei kiehu",
        "Kaikki vesimolekyylit muuttuvat kaasuksi yhtä aikaa"
      ],
      "answer": 2,
      "why": "Haihtumista tapahtuu nesteen pinnalta myös alle kiehumispisteen suuruisissa lämpötiloissa."
    },
    {
      "q": "Rannikolla maa lämpenee aurinkoisena päivänä vettä nopeammin. Miksi ilma voi virrata mereltä maalle?",
      "options": [
        "Merellä lämpenevä ilma kohoaa ja vetää maalta ilmaa merelle",
        "Maalla oleva ilma tihenee lämmetessään ja vetää meri-ilmaa puoleensa",
        "Ilma kulkee aina lämpimästä kylmään samalla tavalla kuin lämpöenergia",
        "Maan päällä lämmennyt ilma kohoaa ja viileämpää ilmaa virtaa tilalle"
      ],
      "answer": 3,
      "why": "Maan yläpuolella kohoava lämmin ilma ja paine-erot synnyttävät kiertoliikkeen."
    }
  ],
  "forces": [
    {
      "q": "Kirja lepää pöydällä. Painovoima on 5 N. Tukivoima on",
      "options": [
        "5 N ylöspäin",
        "5 N alaspäin",
        "10 N ylöspäin",
        "0 N"
      ],
      "answer": 0,
      "why": "Levossa kokonaisvoima on nolla."
    },
    {
      "q": "Kaksi oppilasta työntää laatikkoa samaan suuntaan. Toinen työntää 30 N:n ja toinen 50 N:n voimalla. Kuinka suuri on työntövoimien yhteisvaikutus?",
      "options": [
        "1500 N",
        "80 N",
        "20 N",
        "40 N"
      ],
      "answer": 1,
      "why": "Samaan suuntaan vaikuttavien voimien suuruudet lasketaan yhteen: 30 N + 50 N = 80 N."
    },
    {
      "q": "Laatikkoa vetää 9 N oikealle ja kitka on 4 N vasemmalle. Kokonaisvoima on",
      "options": [
        "5 N vasemmalle",
        "13 N oikealle",
        "5 N oikealle",
        "9 N oikealle"
      ],
      "answer": 2,
      "why": "Vastakkaissuuntaiset voimat vähennetään."
    },
    {
      "q": "Laatikko liikkuu oikealle vakionopeudella. Veto on 12 N. Liikekitka on",
      "options": [
        "Yli 12 N vasemmalle",
        "12 N oikealle",
        "0 N",
        "12 N vasemmalle"
      ],
      "answer": 3,
      "why": "Vakionopeus edellyttää tasapainoa vaakasuunnassa."
    },
    {
      "q": "Voimien summa on nolla. Kappale",
      "options": [
        "Voi olla levossa tai liikkua muuttumattomalla nopeudella",
        "Liikkuu välttämättä vakionopeudella",
        "On välttämättä levossa",
        "Hidastuu, koska liikettä ylläpitävää voimaa ei ole"
      ],
      "answer": 0,
      "why": "Nollakokonaisvoima tarkoittaa, ettei nopeus muutu."
    },
    {
      "q": "Kiekko liukuu ilman kitkaa. Työntäminen loppuu. Kiekko",
      "options": [
        "Hidastuu tasaisesti",
        "Jatkaa muuttumattomalla nopeudella",
        "Pysähtyy heti",
        "Nopeutuu hetken työntämisen jälkeen"
      ],
      "answer": 1,
      "why": "Liike ei tarvitse jatkuvaa voimaa."
    },
    {
      "q": "Auto liikkuu oikealle ja hidastuu. Kokonaisvoima on",
      "options": [
        "Nolla",
        "Alaspäin",
        "Vasemmalle",
        "Oikealle"
      ],
      "answer": 2,
      "why": "Kokonaisvoima on kiihtyvyyden suuntainen."
    },
    {
      "q": "Kuula irrotetaan levosta. Ilmanvastus sivuutetaan. Irrotuksen jälkeen siihen vaikuttaa",
      "options": [
        "Painovoima ja liikkeen suuntainen voima",
        "Painovoima ja ylöspäin suuntautuva tukivoima",
        "Painovoima ja alaspäin suuntautuva irrotusvoima",
        "Vain painovoima"
      ],
      "answer": 3,
      "why": "Irrotettu kappale ei ole enää kosketuksessa tukeen."
    },
    {
      "q": "Palikka liukuu oikealle. Liikekitka on",
      "options": [
        "Vasemmalle",
        "Oikealle",
        "Aina vetävän käden suuntainen",
        "Nolla, jos nopeus on vakio"
      ],
      "answer": 0,
      "why": "Kitka vastustaa pintojen suhteellista liukumista."
    },
    {
      "q": "Palikkaa työnnetään 3 N voimalla, mutta se pysyy levossa. Lepokitka on",
      "options": [
        "Yli 3 N työntöä vastaan",
        "3 N työntöä vastaan",
        "Aina enimmäisarvonsa suuruinen",
        "0 N, koska palikka ei liiku"
      ],
      "answer": 1,
      "why": "Lepokitka mukautuu tarvittavaan arvoon."
    },
    {
      "q": "Palikan päälle lisätään punnuksia. Samoilla kuivilla pinnoilla liikekitka yleensä",
      "options": [
        "Säilyy, jos kosketuspinta-ala säilyy",
        "Pienenee",
        "Kasvaa tukivoiman mukana",
        "Kasvaa vain liikkeellelähdössä"
      ],
      "answer": 2,
      "why": "Liikekitka riippuu tukivoimasta."
    },
    {
      "q": "Astronautti siirtyy Kuuhun. Hänen",
      "options": [
        "Massansa pienenee ja painonsa säilyy",
        "Massansa ja painonsa pienenevät",
        "Massansa ja painonsa säilyvät",
        "Massansa säilyy ja painonsa pienenee"
      ],
      "answer": 3,
      "why": "Massa ei riipu paikallisesta putoamiskiihtyvyydestä."
    },
    {
      "q": "4 kg kärryyn vaikuttaa 12 N kokonaisvoima. Kiihtyvyys on",
      "options": [
        "3 m/s²",
        "48 m/s²",
        "8 m/s²",
        "0,33 m/s²"
      ],
      "answer": 0,
      "why": "Jaa kokonaisvoima massalla."
    },
    {
      "q": "Sama voima vaikuttaa 2 kg ja 6 kg kappaleisiin. Pienemmän kiihtyvyys on",
      "options": [
        "Yhdeksänkertainen",
        "Kolminkertainen",
        "Sama",
        "Kolmannes"
      ],
      "answer": 1,
      "why": "a = F/m."
    },
    {
      "q": "Kokonaisvoima kaksinkertaistuu ja massa kaksinkertaistuu. Kiihtyvyys",
      "options": [
        "Puolittuu",
        "Kaksinkertaistuu",
        "Pysyy samana",
        "Nelinkertaistuu"
      ],
      "answer": 2,
      "why": "Voiman ja massan suhde säilyy."
    },
    {
      "q": "Laskuvarjohyppääjä putoaa vakionopeudella. Ilmanvastus on",
      "options": [
        "Nolla, koska nopeus ei muutu",
        "Painovoimaa suurempi",
        "Painovoimaa pienempi",
        "Painovoiman suuruinen"
      ],
      "answer": 3,
      "why": "Voimat tasapainottuvat."
    },
    {
      "q": "Bussi lähtee levosta kiihtyen eteenpäin. Seisova matkustaja horjahtaa taaksepäin. Mikä selittää tämän?",
      "options": [
        "Lattia kiihdyttää jalkoja eteenpäin, mutta ylävartalo pyrkii säilyttämään aiemman liiketilansa",
        "Bussin liike siirtää matkustajan painovoiman taaksepäin",
        "Matkustaja kiihdyttää taaksepäin suhteessa tiehen, koska bussi kiihtyy eteenpäin",
        "Matkustajaan syntyy taaksepäin suuntautuva painovoima"
      ],
      "answer": 0,
      "why": "Horjahdus johtuu hitaudesta: kehon eri osat eivät lähde yhtä nopeasti bussin mukana."
    },
    {
      "q": "Kärpänen törmää tuulilasiin. Auton voima kärpäseen on",
      "options": [
        "Suurempi kuin kärpäsen voima autoon",
        "Yhtä suuri kuin kärpäsen voima autoon",
        "Yhtä suuri vain, jos auto pysähtyy",
        "Pienempi kuin kärpäsen voima autoon"
      ],
      "answer": 1,
      "why": "Vuorovaikutusvoimat ovat yhtä suuret."
    },
    {
      "q": "Voima ja vastavoima eivät kumoa toisiaan yhden kappaleen voimakuviossa, koska",
      "options": [
        "Vastavoima alkaa myöhemmin",
        "Suurempi massa kokee suuremman voiman",
        "Ne vaikuttavat eri kappaleisiin",
        "Voimat eivät ole vastakkaissuuntaisia"
      ],
      "answer": 2,
      "why": "Newtonin kolmannen lain pari kuuluu kahteen kappaleeseen."
    },
    {
      "q": "Kirjan painovoiman vastavoima on",
      "options": [
        "Maan voima pöytään",
        "Kirjan voima pöytään",
        "Pöydän tukivoima kirjaan",
        "Kirjan vetovoima Maahan"
      ],
      "answer": 3,
      "why": "Pari muodostuu Maan ja kirjan välisestä vuorovaikutuksesta."
    },
    {
      "q": "Samanlaisia puupalikoita vedetään samalla alustalla. Toisen päälle lisätään punnuksia. Mitä mitataan, kun tutkitaan massan vaikutusta liikekitkan suuruuteen?",
      "options": [
        "Tasaisen liikkeen ylläpitämiseen tarvittavaa vetovoimaa",
        "Palikan kiihtyvyyttä heti vedon alussa",
        "Liikkeellelähtöön tarvittavaa suurinta vetovoimaa",
        "Punnusten palikkaan kohdistamaa painoa"
      ],
      "answer": 0,
      "why": "Liikekitkaa tutkitaan palikan liikkuessa tasaisesti; liikkeellelähtöön tarvittava voima kuvaa lepokitkaa."
    },
    {
      "q": "Jarrutuksessa renkaan ja tien väliin jää vesikerros. Miksi auto voi liukua lähes ohjaamattomana?",
      "options": [
        "Vesi poistaa autoon kohdistuvan painovoiman",
        "Renkaan kosketus tiehen heikkenee ja tiehen välittyvä kitkavoima pienenee",
        "Renkaan ja veden välinen kitka on aina suurempi kuin kuivan tien kitka",
        "Vesikerros kasvattaa auton massaa ja siksi jarrutusvoima lakkaa"
      ],
      "answer": 1,
      "why": "Vesiliirrossa vesi voi erottaa renkaan tien pinnasta. Jarrutus ja suunnan muuttaminen tarvitsevat riittävän kitkavoiman."
    },
    {
      "q": "Kuljetuskärryn kuorma siirretään alemmas. Kärryn leveys ja kuorman massa säilyvät. Miksi kärry kaatuu sivulle vaikeammin?",
      "options": [
        "Pyörien kitka kasvaa aina kuorman korkeuden pienentyessä",
        "Kärryn kokonaismassa pienenee painopisteen laskiessa",
        "Painopiste laskee, joten kärryä täytyy kallistaa enemmän ennen kaatumista",
        "Painovoima pienenee kuorman ollessa alempana"
      ],
      "answer": 2,
      "why": "Painopisteen korkeus vaikuttaa siihen, milloin painovoiman vaikutussuora siirtyy tukialueen ulkopuolelle."
    },
    {
      "q": "Vaunua vedetään 18 N voimalla oikealle. Kitka on 6 N vasemmalle. Vaunun massa on 4 kg. Mikä kuvaus on oikea?",
      "options": [
        "Kokonaisvoima on 24 N oikealle ja kiihtyvyys 6 m/s² oikealle",
        "Kokonaisvoima on 18 N oikealle ja kiihtyvyys 4,5 m/s² oikealle",
        "Kokonaisvoima on 12 N oikealle ja nopeus 3 m/s",
        "Kokonaisvoima on 12 N oikealle ja kiihtyvyys 3 m/s² oikealle"
      ],
      "answer": 3,
      "why": "Vastakkaiset voimat vähennetään. Kiihtyvyys saadaan jakamalla kokonaisvoima massalla."
    }
  ],
  "density": [
    {
      "q": "Kappaleen massa on 54 g ja tilavuus 20 cm³. Tiheys on",
      "options": [
        "2,7 g/cm³",
        "1080 g/cm³",
        "34 g/cm³",
        "0,37 g/cm³"
      ],
      "answer": 0,
      "why": "ρ = m/V."
    },
    {
      "q": "Samasta aineesta oleva kappale jaetaan puoliksi. Yhden puolikkaan tiheys",
      "options": [
        "Kaksinkertaistuu",
        "Säilyy samoissa oloissa",
        "Puolittuu",
        "Riippuu jakopinnan pinta-alasta"
      ],
      "answer": 1,
      "why": "Tiheys on aineen ominaisuus."
    },
    {
      "q": "Näytteen A massa on 72 g ja tilavuus 24 cm³. Näytteen B massa on 100 g ja tilavuus 40 cm³. Kumpi on tiheämpi?",
      "options": [
        "B, koska sen massa on suurempi",
        "B, koska sen tilavuus on suurempi",
        "A, koska massan ja tilavuuden suhde on suurempi",
        "Tiheydet ovat samat, koska kummassakin massa on tilavuutta suurempi"
      ],
      "answer": 2,
      "why": "A:n tiheys on 3 g/cm³ ja B:n 2,5 g/cm³. Pelkkä massa ei ratkaise vertailua."
    },
    {
      "q": "Uimari sukeltaa vedessä syvemmälle. Miten veden aiheuttama paine muuttuu?",
      "options": [
        "Paine pysyy samana, jos uimarin massa säilyy",
        "Paine kasvaa vain, jos uimari liikkuu nopeammin",
        "Paine pienenee",
        "Paine kasvaa"
      ],
      "answer": 3,
      "why": "Veden aiheuttama paine kasvaa syvyyden mukana."
    },
    {
      "q": "Kappale kelluu levossa. Noste on",
      "options": [
        "Painovoiman suuruinen",
        "Painovoimaa pienempi",
        "Painovoimaa suurempi",
        "Nolla, koska jousivaakaa ei ole"
      ],
      "answer": 0,
      "why": "Levossa pystysuuntaiset voimat tasapainottuvat."
    },
    {
      "q": "Kappaleen paino on 12 N ja jousivaaka näyttää vedessä 9 N. Noste on",
      "options": [
        "12 N",
        "3 N",
        "9 N",
        "21 N"
      ],
      "answer": 1,
      "why": "Noste on lukemien erotus."
    },
    {
      "q": "Pintaan kohdistuu 80 N voima 0,02 m² alalle. Paine on",
      "options": [
        "1,6 Pa",
        "160 Pa",
        "4000 Pa",
        "0,00025 Pa"
      ],
      "answer": 2,
      "why": "p = F/A."
    },
    {
      "q": "Sama retkeilijä seisoo lumessa kengillä tai lumikengillä. Lumikenkien kosketuspinta-ala on nelinkertainen. Mitä muuttuu?",
      "options": [
        "Paine ja painovoima pienenevät molemmat neljäsosaan",
        "Paine kasvaa nelinkertaiseksi; painovoima säilyy",
        "Paine säilyy, koska retkeilijän massa säilyy",
        "Lumeen kohdistuva keskimääräinen paine pienenee neljäsosaan; painovoima säilyy"
      ],
      "answer": 3,
      "why": "Sama voima jakautuu suuremmalle pinta-alalle. Paine on voima jaettuna pinta-alalla."
    },
    {
      "q": "Veden syvyys kaksinkertaistuu. Hydrostaattinen paine",
      "options": [
        "Kaksinkertaistuu",
        "Puolittuu",
        "Nelinkertaistuu",
        "Säilyy"
      ],
      "answer": 0,
      "why": "p_h = ρgh."
    },
    {
      "q": "Avoimissa erimuotoisissa astioissa on vettä. Samalla syvyydellä hydrostaattinen paine on",
      "options": [
        "Suurempi leveässä astiassa",
        "Sama",
        "Suurempi siinä, jossa on enemmän vettä",
        "Suurempi kapeassa astiassa"
      ],
      "answer": 1,
      "why": "Hydrostaattinen paine riippuu syvyydestä ja tiheydestä."
    },
    {
      "q": "Vesipullon kyljessä on reiät eri korkeuksilla. Miksi alimmasta reiästä vesi suihkuaa voimakkaimmin?",
      "options": [
        "Ylimmän reiän kohdalla veteen ei vaikuta painovoima",
        "Veden tiheys on alimpana suurin",
        "Veden aiheuttama paine on alimpana suurin",
        "Alin reikä kasvattaa pullossa olevan veden massaa"
      ],
      "answer": 2,
      "why": "Syvemmällä veden aiheuttama paine on suurempi."
    },
    {
      "q": "Samasta metallikappaleesta upotetaan ensin puolet ja sitten koko kappale veteen. Kappale ei kosketa astiaa. Miten noste muuttuu?",
      "options": [
        "Noste puolittuu",
        "Noste säilyy, koska kappaleen massa ei muutu",
        "Noste häviää, kun kappale on kokonaan veden alla",
        "Noste kaksinkertaistuu"
      ],
      "answer": 3,
      "why": "Syrjäytetyn veden tilavuus kaksinkertaistuu, joten myös noste kaksinkertaistuu."
    },
    {
      "q": "Sama kappale upotetaan kokonaan ensin hanaveteen ja sitten selvästi tiheämpään suolaveteen. Kummassa noste on suurempi?",
      "options": [
        "Suolavedessä",
        "Nosteet ovat yhtä suuret, koska kappaleen tilavuus säilyy",
        "Hanavedessä",
        "Nosteet ovat yhtä suuret, koska kappaleen massa säilyy"
      ],
      "answer": 0,
      "why": "Sama kappale syrjäyttää saman tilavuuden nestettä. Tiheämmän nesteen syrjäytetty massa ja noste ovat suurempia."
    },
    {
      "q": "Kaksi erimassaista kappaletta syrjäyttää saman tilavuuden vettä. Nosteet ovat",
      "options": [
        "Kääntäen massojen suhteessa",
        "Yhtä suuret",
        "Massojen suhteessa",
        "Yhtä suuret vain, jos kappaleet ovat samaa ainetta"
      ],
      "answer": 1,
      "why": "Syrjäytetyn nesteen paino määrää nosteen."
    },
    {
      "q": "Massa–tilavuus-kuvaajassa massa on pystyakselilla. Suoran kulmakerroin on",
      "options": [
        "Massa",
        "Tilavuus",
        "Tiheys",
        "Paine"
      ],
      "answer": 2,
      "why": "Kulmakerroin Δm/ΔV on tiheys."
    },
    {
      "q": "Mittalasi nesteineen painaa 92 g, kun nesteen tilavuus on 50 cm³. Kun nesteen tilavuus on 100 cm³, yhteismassa on 132 g. Mikä päätelmä on oikein?",
      "options": [
        "Nesteen tiheys on 1,32 g/cm³ ja mittalasin massa 0 g",
        "Nesteen tiheys on 1,84 g/cm³ ja mittalasin massa 40 g",
        "Nesteen tiheys on 0,4 g/cm³ ja mittalasin massa 72 g",
        "Nesteen tiheys on 0,8 g/cm³ ja mittalasin massa 52 g"
      ],
      "answer": 3,
      "why": "Nesteen massan lisäys on 40 g ja tilavuuden lisäys 50 cm³. Tiheys on 0,8 g/cm³ ja astian massa 52 g."
    },
    {
      "q": "Vene kelluu ensin makeassa vedessä ja sitten tiheämmässä suolavedessä. Kuorma säilyy. Mikä muuttuu?",
      "options": [
        "Suolavedessä vene syrjäyttää pienemmän tilavuuden; noste säilyy painon suuruisena",
        "Suolavedessä noste kasvaa painoa suuremmaksi ja vene jää pysyvästi kiihtyvään liikkeeseen",
        "Vene syrjäyttää saman tilavuuden, koska sen massa säilyy",
        "Suolavedessä vene syrjäyttää suuremman tilavuuden, koska neste on tiheämpää"
      ],
      "answer": 0,
      "why": "Kelluvan veneen noste tasapainottaa painovoiman. Tiheämpää nestettä tarvitaan pienempi syrjäytetty tilavuus."
    },
    {
      "q": "Avonaisessa kevyessä kuumailmapallossa ilma lämmitetään ympäröivää ilmaa lämpimämmäksi. Mikä auttaa palloa kohoamaan?",
      "options": [
        "Ilman lämpötila kasvaa, mutta tiheys säilyy aina samana",
        "Pallon sisällä ilman tiheys pienenee ja noste voi ylittää kokonaispainon",
        "Noste syntyy vain pallon sisäisen paineen kasvusta",
        "Ilmamolekyylien massa pienenee ja siksi ne kohoavat"
      ],
      "answer": 1,
      "why": "Lämpenevä ilma laajenee. Avonaisessa pallossa ilmaa poistuu ja sisäilman tiheys pienenee."
    }
  ],
  "energy": [
    {
      "q": "Millä suureella kuvataan laitteen tekemää työtä aikayksikössä?",
      "options": [
        "Teholla",
        "Energialla",
        "Voimalla",
        "Hyötysuhteella"
      ],
      "answer": 0,
      "why": "Teho kertoo, kuinka paljon työtä tehdään aikayksikössä."
    },
    {
      "q": "5 N:n voima siirtää kappaletta voiman suuntaan 4 m. Kuinka suuren työn voima tekee?",
      "options": [
        "1,25 J",
        "20 J",
        "0,8 J",
        "9 J"
      ],
      "answer": 1,
      "why": "W = Fs."
    },
    {
      "q": "Kannattelet kassia paikallaan. Kassiin tehty työ on",
      "options": [
        "Kassin potentiaalienergian suuruinen",
        "Voiman ja ajan tulo",
        "Nolla, koska siirtymä on nolla",
        "Kassin painon suuruinen"
      ],
      "answer": 2,
      "why": "Mekaaninen työ edellyttää siirtymää."
    },
    {
      "q": "Kappaleen paino on 20 N ja nostokorkeus 2,5 m. Potentiaalienergian kasvu on",
      "options": [
        "0,125 J",
        "22,5 J",
        "8 J",
        "50 J"
      ],
      "answer": 3,
      "why": "E_p = Gh."
    },
    {
      "q": "Sama kuorma nostetaan samaan korkeuteen eri ajoissa. Nostotyö",
      "options": [
        "On sama",
        "Riippuu vain käytetystä ajasta",
        "On suurempi hitaassa nostossa",
        "On suurempi nopeassa nostossa"
      ],
      "answer": 0,
      "why": "Nostotyö riippuu painosta ja korkeudesta."
    },
    {
      "q": "Mikä vastaa yhden watin tehoa?",
      "options": [
        "Yksi newtonmetri sekunnin neliössä",
        "Yksi joule sekunnissa",
        "Yksi joule metrissä",
        "Yksi newton sekunnissa"
      ],
      "answer": 1,
      "why": "Watti tarkoittaa energian siirtymisnopeutta."
    },
    {
      "q": "120 J työ tehdään 3 sekunnissa. Teho on",
      "options": [
        "0,025 W",
        "123 W",
        "40 W",
        "360 W"
      ],
      "answer": 2,
      "why": "P = W/t."
    },
    {
      "q": "Sama työ tehdään puolessa ajassa. Teho",
      "options": [
        "Säilyy",
        "Nelinkertaistuu",
        "Puolittuu",
        "Kaksinkertaistuu"
      ],
      "answer": 3,
      "why": "Teho on työn ja ajan suhde."
    },
    {
      "q": "Massa kaksinkertaistuu nopeuden säilyessä. Liike-energia",
      "options": [
        "Kaksinkertaistuu",
        "Nelinkertaistuu",
        "Puolittuu",
        "Säilyy"
      ],
      "answer": 0,
      "why": "Liike-energia on verrannollinen massaan."
    },
    {
      "q": "Nopeus kaksinkertaistuu massan säilyessä. Liike-energia",
      "options": [
        "Puolittuu",
        "Nelinkertaistuu",
        "Kaksinkertaistuu",
        "Säilyy"
      ],
      "answer": 1,
      "why": "Liike-energia riippuu nopeuden neliöstä."
    },
    {
      "q": "Keinu heilahtaa korkealta alas ja takaisin ylös. Kitka sivuutetaan. Mitä tapahtuu alimmassa kohdassa?",
      "options": [
        "Liike-energia ja potentiaalienergia ovat molemmat suurimmillaan",
        "Liike-energia on nolla, koska liikkeen suunta muuttuu",
        "Liike-energia on suurimmillaan ja potentiaalienergia pienimmillään",
        "Potentiaalienergia muuttuu kokonaan lämpöenergiaksi"
      ],
      "answer": 2,
      "why": "Alimmassa kohdassa keinun nopeus on suurimmillaan. Liikkeen suunta vaihtuu vasta ääriasennossa."
    },
    {
      "q": "Pallo heitetään pystysuoraan ylöspäin. Ilmanvastus sivuutetaan. Mikä väite pitää paikkansa pallon ollessa ylimmässä kohdassa?",
      "options": [
        "Liike-energia ja potentiaalienergia ovat yhtä suuret",
        "Liike-energia ja potentiaalienergia ovat molemmat nollia",
        "Liike-energia on suurimmillaan ja potentiaalienergia pienimmillään",
        "Liike-energia on nolla ja potentiaalienergia suurimmillaan"
      ],
      "answer": 3,
      "why": "Ylimmässä kohdassa pallon nopeus on hetkellisesti nolla ja korkeus suurimmillaan."
    },
    {
      "q": "Laitteeseen siirtyy 1000 J energiaa. Tästä 700 J saadaan hyötyenergiaksi. Mikä on laitteen hyötysuhde?",
      "options": [
        "70 %",
        "30 %",
        "700 %",
        "143 %"
      ],
      "answer": 0,
      "why": "Hyötysuhde on hyödyllisen ja otetun energian suhde."
    },
    {
      "q": "Polttomoottori käyttää 600 J polttoaineen energiaa ja tekee 180 J hyödyllistä työtä. Mikä kuvaus on oikea?",
      "options": [
        "Hyötysuhde on 30 %; käyttämätön energia lakkaa olemasta",
        "Hyötysuhde on 30 %; loppuenergia siirtyy muihin muotoihin, pääosin lämpöenergiaksi",
        "Hyötysuhde on 333 %; moottori tuottaa energiaa polttoaineen lisäksi",
        "Hyötysuhde on 70 %; loppuenergia häviää"
      ],
      "answer": 1,
      "why": "Hyötysuhde on hyödyllisen energian osuus otetusta energiasta. Kokonaisenergia säilyy."
    },
    {
      "q": "Pumppu nostaa saman vesimäärän kaksinkertaiseen korkeuteen. Miten hyödyksi saatu työ muuttuu?",
      "options": [
        "Säilyy",
        "Nelinkertaistuu",
        "Kaksinkertaistuu",
        "Puolittuu"
      ],
      "answer": 2,
      "why": "Paino säilyy ja korkeusero kaksinkertaistuu."
    },
    {
      "q": "Sama kuorma nostetaan samaan korkeuteen kaksinkertaisella nopeudella. Nostoteho",
      "options": [
        "Nelinkertaistuu",
        "Säilyy",
        "Puolittuu",
        "Kaksinkertaistuu"
      ],
      "answer": 3,
      "why": "Sama työ tehdään puolessa ajassa."
    },
    {
      "q": "Kuorman massa kaksinkertaistuu nostonopeuden säilyessä. Nostoteho",
      "options": [
        "Kaksinkertaistuu",
        "Säilyy",
        "Puolittuu",
        "Nelinkertaistuu"
      ],
      "answer": 0,
      "why": "P = mgv."
    },
    {
      "q": "Sama kuorma nostetaan vakionopeudella korkeammalle. Keskimääräinen nostoteho",
      "options": [
        "Pienenee korkeuden mukana",
        "Säilyy",
        "Kasvaa työn neliön mukana",
        "Kasvaa korkeuden mukana"
      ],
      "answer": 1,
      "why": "Työ ja aika kasvavat samassa suhteessa."
    },
    {
      "q": "Moottori käy 0,25 tuntia. Tänä aikana siihen siirtyy 18 kJ energiaa. Kuinka suuri on moottorin keskimääräinen ottama teho?",
      "options": [
        "1200 W",
        "4500 W",
        "20 W",
        "72 W"
      ],
      "answer": 2,
      "why": "0,25 tuntia on 900 sekuntia ja 18 kJ on 18 000 J. Teho on 18 000 J / 900 s = 20 W."
    },
    {
      "q": "Kaksi jääkaappia jäähdyttää saman määrän samaa ruokaa samasta alkulämpötilasta samaan loppulämpötilaan. Ympäristön lämpötila on sama. Toinen kuluttaa tähän 15 % vähemmän sähköenergiaa. Mikä voidaan päätellä?",
      "options": [
        "Ruoasta poistuu vähemmän energiaa",
        "Ruoka jäähtyy välttämättä nopeammin",
        "Jääkaappien tehot ovat välttämättä yhtä suuret",
        "Sama jäähdytystulos saavutetaan pienemmällä sähköenergian kulutuksella"
      ],
      "answer": 3,
      "why": "Vertailussa pidetään jäähdytystulos samana. Pienempi energiankulutus ei tarkoita heikompaa jäähdytystä."
    }
  ]
};
