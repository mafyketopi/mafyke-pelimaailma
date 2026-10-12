'use strict';
const GAS_CARD_ART={
 H:{image:'H',alt:'Varhainen ilmalaiva taivaalla',caption:'Käyttöympäristö: varhainen ilmalaiva.',use:'Vetyä käytettiin varhaisten ilmalaivojen nostekaasuna. Vety on kevyttä mutta helposti syttyvää. Auringossa vetyä muuttuu fuusiossa heliumiksi.'},
 He:{image:'He',alt:'Ilmassa leijuva ilmapallokimppu',caption:'Käyttöympäristö: heliumilla täytetyt ilmapallot.',use:'Helium on kevyt jalokaasu. Sillä täytetyt ilmapallot kohoavat ilmassa. Helium ei pala.'},
 N:{image:'N',alt:'Pilviä ilmakehässä',caption:'Esiintymisympäristö: ilmakehä. Pilvet ovat vesipisaroita tai jääkiteitä; typpikaasu ei näy.',use:'Kuivasta ilmasta noin 78 % on typpeä. Typpikaasu on väritöntä. Typpiyhdisteitä tarvitaan esimerkiksi lannoitteissa.'},
 O:{image:'O',alt:'Sukellussäiliö ja sukellusmaski',caption:'Käyttöympäristö: sukellussäiliön hengityskaasu.',use:'Tarvitsemme happea soluhengitykseen. Tavallinen sukellussäiliö sisältää paineilmaa, jossa on noin 21 % happea. Kuvassa ei ole puhtaan hapen säiliö.'},
 F:{image:'F',alt:'Hammastahnaa ja hammasharja',caption:'Yhdisteen käyttö: hammastahnan fluoridit.',use:'Hammastahnan fluoridiyhdisteet suojaavat hampaita. Hammastahnassa ei ole puhdasta fluoria. Puhdas fluori on hyvin reaktiivinen kaasu.'},
 Ne:{image:'Ne',alt:'Punaoranssina hehkuva valoputki',caption:'Käyttöympäristö: neonvaloputki.',use:'Neon on jalokaasu. Neonkaasussa tapahtuva sähköpurkaus tuottaa punaoranssia valoa. Kaikki neonvaloksi kutsutut valot eivät sisällä neonia.'},
 Cl:{image:'Cl',alt:'Uima-allas',caption:'Yhdisteiden käyttö: allasveden desinfiointi.',use:'Klooripitoisia yhdisteitä käytetään allasveden desinfiointiin. Kuvassa on käyttöympäristö, ei puhtaan kloorikaasun näyte. Puhdas kloorikaasu on myrkyllistä.'},
 Ar:{image:'Ar',alt:'Hitsausmaski, hitsauspoltin ja metallikappale',caption:'Käyttöympäristö: suojakaasuhitsaus.',use:'Argon on jalokaasu. Sitä käytetään hitsauksen suojakaasuna, jotta kuuma metalli ei reagoi ilman hapen kanssa.'},
 Kr:{image:'Kr',alt:'Hehkulamppu',caption:'Käyttöympäristö: eräiden lamppujen täyttökaasu.',use:'Krypton on jalokaasu, jota käytetään eräiden lamppujen täyttökaasuna. Kuvan kaltainen lamppu voi sisältää kryptonia; kaikki hehkulamput eivät sisällä sitä.'},
 Xe:{image:'Xe',alt:'Satelliitti ja ionimoottori',caption:'Käyttöympäristö: avaruusaluksen ionimoottori.',use:'Ksenon on jalokaasu, jota käytetään esimerkiksi avaruusalusten ionimoottoreissa ja tehokkaissa lampuissa.'}
};
ELEMENTS.forEach(e=>{if(GAS_CARD_ART[e.symbol])e.use=GAS_CARD_ART[e.symbol].use});
