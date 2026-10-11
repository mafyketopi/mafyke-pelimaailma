'use strict';
TASKS[7]=[
  {
    "q": "12 m pitkän kupariputken lämpötila nousee 30 °C. Kuparin pituuden lämpötilakerroin on 0,000017 1/°C. Laske putken piteneminen.",
    "g": [
      {
        "s": "l0",
        "v": 12,
        "u": "m"
      },
      {
        "s": "alpha",
        "v": 1.7e-05,
        "u": "1/°C"
      },
      {
        "s": "ΔT",
        "v": 30,
        "u": "°C"
      }
    ],
    "f": [
      "expand"
    ],
    "eq": [
      "dl=alpha*l0*dT"
    ],
    "value": 0.00612,
    "unit": "m",
    "work": "(0.000017 °C^-1)*(12 m)*(30 °C)=0.00612 m",
    "modelWork": "(0.000017 °C^-1)*(12 m)*(30 °C)=0.00612 m",
    "modelEquation": "dl=alpha*l0*dT",
    "sentence": "Kupariputki pitenee noin 6,1 mm.",
    "hint": "Laske tarvittaessa muutos ja ratkaise kysytty suure.",
    "modelReason": "Kirjaa lähtöarvot, valitse suureyhtälö ja sijoita arvot yksiköineen.",
    "challenge": false,
    "level": "easy",
    "topic": "Lämpölaajeneminen",
    "source": [
      "apu3/apu5",
      "Muokattu käyttäjän tehtäväaiheista"
    ]
  },
  {
    "q": "Ulkolavan rakenteessa on 39 m pitkä rautapalkki. Sen lämpötila nousee −10 °C:sta 35 °C:seen. Raudan pituuden lämpötilakerroin on 0,000012 1/°C. Kuinka paljon palkki pitenee?",
    "g": [
      {
        "s": "l0",
        "v": 39,
        "u": "m"
      },
      {
        "s": "dT",
        "v": 45,
        "u": "°C"
      },
      {
        "s": "alpha",
        "v": 1.2e-05,
        "u": "1/°C"
      }
    ],
    "f": [
      "expand"
    ],
    "eq": [
      "dl=alpha*l0*dT"
    ],
    "value": 0.02106,
    "unit": "m",
    "work": "0.000012 1/°C * 39 m * 45 °C = 0.02106 m",
    "modelWork": "0.000012 1/°C * 39 m * 45 °C = 0.02106 m",
    "modelEquation": "dl=alpha*l0*dT",
    "sentence": "Rautapalkki pitenee noin 21 mm.",
    "hint": "Laske tarvittaessa muutos ja ratkaise kysytty suure.",
    "modelReason": "Kirjaa lähtöarvot, valitse suureyhtälö ja sijoita arvot yksiköineen.",
    "challenge": false,
    "level": "easy",
    "topic": "Lämpölaajeneminen",
    "source": [
      "apu5",
      "rautapalkin lämpölaajeneminen, mitat ja lämpötilat muutettu"
    ]
  },
  {
    "q": "25 m pitkä kupariputki pitenee lämmityksessä 8,5 mm. Kuparin pituuden lämpötilakerroin on 0,000017 1/°C. Kuinka paljon putken lämpötila nousee?",
    "g": [
      {
        "s": "l0",
        "v": 25,
        "u": "m"
      },
      {
        "s": "dl",
        "v": 0.0085,
        "u": "m"
      },
      {
        "s": "alpha",
        "v": 1.7e-05,
        "u": "1/°C"
      }
    ],
    "f": [
      "expand"
    ],
    "eq": [
      "dT=dl/(alpha*l0)"
    ],
    "value": 20,
    "unit": "°C",
    "work": "(8.5 mm)/((0.000017 °C^-1)*(25 m))=20 °C",
    "modelWork": "(8.5 mm)/((0.000017 °C^-1)*(25 m))=20 °C",
    "modelEquation": "dT=dl/(alpha*l0)",
    "sentence": "Kupariputken lämpötila nousee 20 °C.",
    "hint": "Laske tarvittaessa muutos ja ratkaise kysytty suure.",
    "modelReason": "Kirjaa lähtöarvot, valitse suureyhtälö ja sijoita arvot yksiköineen.",
    "challenge": false,
    "level": "medium",
    "topic": "Lämpölaajeneminen",
    "source": [
      "apu3/apu5",
      "Muokattu käyttäjän tehtäväaiheista"
    ]
  },
  {
    "q": "Kuparinen kiinnitystanko pitenee 1,4 mm, kun sen lämpötila nousee 55 °C. Kuparin pituuden lämpötilakerroin on 0,000017 1/°C. Kuinka pitkä tanko oli ennen lämmitystä?",
    "g": [
      {
        "s": "dl",
        "v": 0.0014,
        "u": "m"
      },
      {
        "s": "alpha",
        "v": 1.7e-05,
        "u": "1/°C"
      },
      {
        "s": "dT",
        "v": 55,
        "u": "°C"
      }
    ],
    "f": [
      "expand"
    ],
    "eq": [
      "l0=dl/(alpha*dT)"
    ],
    "value": 1.4973262032085561,
    "unit": "m",
    "work": "1.4 mm/(0.000017 °C^-1*55 °C)=1.497326203 m≈1.5 m",
    "modelWork": "1.4 mm/(0.000017 °C^-1*55 °C)=1.497326203 m≈1.5 m",
    "modelEquation": "l0=dl/(alpha*dT)",
    "sentence": "Tangon alkuperäinen pituus oli noin 1,5 m.",
    "hint": "Valitse kaava ja ratkaise kysytty suure.",
    "challenge": false,
    "topic": "Lämpölaajeneminen",
    "source": [
      "apu3, aihe ja tehtävärakenne muokattu"
    ]
  },
  {
    "q": "3,0 kg vettä lämmitetään 18 °C:sta 68 °C:seen. Veden ominaislämpökapasiteetti on 4,2 kJ/(kg·°C). Kuinka paljon energiaa tarvitaan?",
    "g": [
      {
        "s": "m",
        "v": 3,
        "u": "kg"
      },
      {
        "s": "c",
        "v": 4.2,
        "u": "kJ/(kg*°C)"
      },
      {
        "s": "ΔT",
        "v": 50,
        "u": "°C"
      }
    ],
    "f": [
      "Q"
    ],
    "eq": [
      "E=c*m*dT"
    ],
    "value": 630000,
    "unit": "J",
    "work": "(4.2 kJ/(kg*°C))*(3 kg)*(50 °C)=630000 J",
    "modelWork": "(4.2 kJ/(kg*°C))*(3 kg)*(50 °C)=630000 J",
    "modelEquation": "E=c*m*dT",
    "sentence": "Veden lämmittämiseen tarvitaan 630 kJ energiaa.",
    "hint": "Laske tarvittaessa muutos ja ratkaise kysytty suure.",
    "modelReason": "Kirjaa lähtöarvot, valitse suureyhtälö ja sijoita arvot yksiköineen.",
    "challenge": false,
    "level": "easy",
    "topic": "Lämpötilan muutoksiin liittyvät energiat",
    "source": [
      "apu3/apu5",
      "Muokattu käyttäjän tehtäväaiheista"
    ]
  },
  {
    "q": "Termoskannussa on 2,5 litraa vettä, jonka lämpötila laskee 85 °C:sta 22 °C:seen. Kuinka paljon energiaa vesi luovuttaa jäähtyessään? Yhden vesilitran massa on 1,0 kg. Veden ominaislämpökapasiteetti on 4,2 kJ/(kg·°C).",
    "g": [
      {
        "s": "m",
        "v": 2.5,
        "u": "kg"
      },
      {
        "s": "c",
        "v": 4.2,
        "u": "kJ/(kg*°C)"
      },
      {
        "s": "dT",
        "v": 63,
        "u": "°C"
      }
    ],
    "f": [
      "Q"
    ],
    "eq": [
      "E=c*m*dT"
    ],
    "value": 661500,
    "unit": "J",
    "work": "4.2 kJ/(kg*°C)*2.5 kg*63 °C=661.5 kJ≈660 kJ",
    "modelWork": "4.2 kJ/(kg*°C)*2.5 kg*63 °C=661.5 kJ≈660 kJ",
    "modelEquation": "E=c*m*dT",
    "sentence": "Vesi luovuttaa noin 660 kJ energiaa.",
    "hint": "Valitse kaava ja ratkaise kysytty suure.",
    "challenge": false,
    "topic": "Lämpötilan muutoksiin liittyvät energiat",
    "source": [
      "apu3, aihe ja tehtävärakenne muokattu"
    ]
  },
  {
    "q": "Rautakuulan massa on 2,5 kg. Kuulaan siirtyy 9,0 kJ energiaa. Raudan ominaislämpökapasiteetti on 0,45 kJ/(kg·°C). Kuinka paljon kuulan lämpötila nousee?",
    "g": [
      {
        "s": "m",
        "v": 2.5,
        "u": "kg"
      },
      {
        "s": "E",
        "v": 9000,
        "u": "J"
      },
      {
        "s": "c",
        "v": 0.45,
        "u": "kJ/(kg*°C)"
      }
    ],
    "f": [
      "Q"
    ],
    "eq": [
      "dT=E/(m*c)"
    ],
    "value": 8,
    "unit": "°C",
    "work": "(9 kJ)/((2.5 kg)*(0.45 kJ/(kg*°C)))=8 °C",
    "modelWork": "(9 kJ)/((2.5 kg)*(0.45 kJ/(kg*°C)))=8 °C",
    "modelEquation": "dT=E/(m*c)",
    "sentence": "Rautakuulan lämpötila nousee 8,0 °C.",
    "hint": "Laske tarvittaessa muutos ja ratkaise kysytty suure.",
    "modelReason": "Kirjaa lähtöarvot, valitse suureyhtälö ja sijoita arvot yksiköineen.",
    "challenge": false,
    "level": "medium",
    "topic": "Lämpötilan muutoksiin liittyvät energiat",
    "source": [
      "apu3/apu5",
      "Muokattu käyttäjän tehtäväaiheista"
    ]
  },
  {
    "q": "Metallikappaleen massa on 0,80 kg. Siihen siirtyy 7,2 kJ energiaa, jolloin sen lämpötila nousee 20 °C. Laske metallin ominaislämpökapasiteetti.",
    "g": [
      {
        "s": "m",
        "v": 0.8,
        "u": "kg"
      },
      {
        "s": "E",
        "v": 7.2,
        "u": "kJ"
      },
      {
        "s": "dT",
        "v": 20,
        "u": "°C"
      }
    ],
    "f": [
      "Q"
    ],
    "eq": [
      "c=E/(m*dT)"
    ],
    "value": 450,
    "unit": "J/(kg*°C)",
    "work": "7.2 kJ/(0.80 kg*20 °C)=0.45 kJ/(kg*°C)",
    "modelWork": "7.2 kJ/(0.80 kg*20 °C)=0.45 kJ/(kg*°C)",
    "modelEquation": "c=E/(m*dT)",
    "sentence": "Ominaislämpökapasiteetti on 450 J/(kg·°C).",
    "hint": "Valitse kaava ja ratkaise kysytty suure.",
    "challenge": false,
    "topic": "Lämpötilan muutoksiin liittyvät energiat",
    "source": [
      "apu3, aihe ja tehtävärakenne muokattu"
    ]
  },
  {
    "q": "Sulamispisteessä olevaa jäätä on 0,75 kg. Kuinka paljon energiaa tarvitaan sen sulattamiseen? Jään ominaissulamislämpö on 333 kJ/kg.",
    "g": [
      {
        "s": "m",
        "v": 0.75,
        "u": "kg"
      },
      {
        "s": "s",
        "v": 333,
        "u": "kJ/kg"
      }
    ],
    "f": [
      "Qs"
    ],
    "eq": [
      "E=s*m"
    ],
    "value": 249750,
    "unit": "J",
    "work": "333 kJ/kg * 0.75 kg = 249.75 kJ",
    "modelWork": "333 kJ/kg * 0.75 kg = 249.75 kJ",
    "modelEquation": "E=s*m",
    "sentence": "Jään sulattamiseen tarvitaan noin 250 kJ energiaa.",
    "hint": "Laske tarvittaessa muutos ja ratkaise kysytty suure.",
    "modelReason": "Kirjaa lähtöarvot, valitse suureyhtälö ja sijoita arvot yksiköineen.",
    "challenge": false,
    "level": "easy",
    "topic": "Olomuodon muutokset",
    "source": [
      "apu3/apu5",
      "Muokattu käyttäjän tehtäväaiheista"
    ]
  },
  {
    "q": "Kiehumispisteessä olevaa etanolia on 0,30 kg. Kuinka paljon energiaa tarvitaan sen höyrystämiseen? Etanolin ominaishöyrystymislämpö on 840 kJ/kg.",
    "g": [
      {
        "s": "m",
        "v": 0.3,
        "u": "kg"
      },
      {
        "s": "r",
        "v": 840000,
        "u": "J/kg"
      }
    ],
    "f": [
      "Qr"
    ],
    "eq": [
      "E=r*m"
    ],
    "value": 252000,
    "unit": "J",
    "work": "(840 kJ/kg)*(0.30 kg)=252 kJ",
    "modelWork": "(840 kJ/kg)*(0.30 kg)=252 kJ",
    "modelEquation": "E=r*m",
    "sentence": "Etanolin höyrystämiseen tarvitaan 252 kJ energiaa.",
    "hint": "Laske tarvittaessa muutos ja ratkaise kysytty suure.",
    "modelReason": "Kirjaa lähtöarvot, valitse suureyhtälö ja sijoita arvot yksiköineen.",
    "challenge": false,
    "level": "easy",
    "topic": "Olomuodon muutokset",
    "source": [
      "apu3/apu5",
      "Muokattu käyttäjän tehtäväaiheista"
    ]
  },
  {
    "q": "Sulamispisteessä oleva jää vastaanottaa sulaessaan 120 kJ energiaa. Jään ominaissulamislämpö on 333 kJ/kg. Laske sulavan jään massa.",
    "g": [
      {
        "s": "E",
        "v": 120,
        "u": "kJ"
      },
      {
        "s": "s",
        "v": 333,
        "u": "kJ/kg"
      }
    ],
    "f": [
      "Qs"
    ],
    "eq": [
      "m=E/s"
    ],
    "value": 0.36036036036036034,
    "unit": "kg",
    "work": "120 kJ/(333 kJ/kg)=0.3603603604 kg≈0.36 kg",
    "modelWork": "120 kJ/(333 kJ/kg)=0.3603603604 kg≈0.36 kg",
    "modelEquation": "m=E/s",
    "sentence": "Sulavan jään massa on noin 0,36 kg.",
    "hint": "Laske tarvittaessa muutos ja ratkaise kysytty suure.",
    "modelReason": "Kirjaa lähtöarvot, valitse suureyhtälö ja sijoita arvot yksiköineen.",
    "challenge": false,
    "level": "medium",
    "topic": "Olomuodon muutokset",
    "source": [
      "apu3/apu5",
      "Muokattu käyttäjän tehtäväaiheista"
    ]
  },
  {
    "q": "Kiehumispisteessä olevaa vettä höyrystetään 0,20 kg. Höyrystämiseen kuluu 452 kJ energiaa. Laske veden ominaishöyrystymislämpö.",
    "g": [
      {
        "s": "m",
        "v": 0.2,
        "u": "kg"
      },
      {
        "s": "E",
        "v": 452,
        "u": "kJ"
      }
    ],
    "f": [
      "Qr"
    ],
    "eq": [
      "r=E/m"
    ],
    "value": 2260000,
    "unit": "J/kg",
    "work": "452 kJ/(0.20 kg)=2260 kJ/kg≈2300 kJ/kg",
    "modelWork": "452 kJ/(0.20 kg)=2260 kJ/kg≈2300 kJ/kg",
    "modelEquation": "r=E/m",
    "sentence": "Ominaishöyrystymislämpö on noin 2300 kJ/kg.",
    "hint": "Valitse kaava ja ratkaise kysytty suure.",
    "challenge": false,
    "topic": "Olomuodon muutokset",
    "source": [
      "apu3, aihe ja tehtävärakenne muokattu"
    ]
  },
  {
    "q": "Metallinäytteen massa on 0,25 kg. Kuvaaja näyttää, miten näytteen lämpötila muuttuu siihen siirtyvän energian kasvaessa. Määritä ominaislämpökapasiteetti kuvaajan avulla ja päättele taulukosta, mitä metallia näyte todennäköisesti on.",
    "g": [
      {
        "s": "m",
        "v": 0.25,
        "u": "kg"
      }
    ],
    "f": [
      "Q"
    ],
    "eq": [
      "c=E/(m*dT)"
    ],
    "value": 450,
    "unit": "J/(kg*°C)",
    "work": "3.6 kJ/(0.25 kg*32 °C)=0.45 kJ/(kg*°C)",
    "modelWork": "3.6 kJ/(0.25 kg*32 °C)=0.45 kJ/(kg*°C)",
    "modelEquation": "c=E/(m*dT)",
    "sentence": "Näyte on todennäköisesti rautaa.",
    "hint": "Valitse kaava ja ratkaise kysytty suure.",
    "challenge": true,
    "topic": "Lämpötilan muutoksiin liittyvät energiat",
    "source": [
      "apu3 tehtävä 22, uusi mittausaineisto ja kuvaaja"
    ],
    "kind": "thermal-graph21"
  },
  {
    "q": "Jään massa on 0,40 kg ja alkulämpötila −10 °C. Jää lämmitetään sulamispisteeseen ja sulatetaan kokonaan. Kuinka paljon energiaa tarvitaan? Jään ominaislämpökapasiteetti on 2,1 kJ/(kg·°C) ja ominaissulamislämpö 333 kJ/kg.",
    "g": [
      {
        "s": "m",
        "v": 0.4,
        "u": "kg"
      },
      {
        "s": "ΔT",
        "v": 10,
        "u": "°C"
      },
      {
        "s": "c",
        "v": 2.1,
        "u": "kJ/(kg*°C)"
      },
      {
        "s": "s",
        "v": 333,
        "u": "kJ/kg"
      }
    ],
    "f": [
      "Q",
      "Qs"
    ],
    "eq": [
      "E=c*m*dT+s*m",
      "E=E1+E2"
    ],
    "work": "2.1 kJ/(kg*°C) * 0.4 kg * 10 °C + 333 kJ/kg * 0.4 kg = 141.6 kJ",
    "value": 141600,
    "unit": "J",
    "source": [
      "apu3",
      "kylmän jään lämmitys ja sulatus"
    ],
    "challenge": true,
    "hint": "Laske kaksi eri vaihetta ja lisää energiat.",
    "modelEquation": "E1=c*m*dT\nE2=s*m\nE=E1+E2",
    "modelWork": "2.1 kJ/(kg*°C) * 0.4 kg * 10 °C + 333 kJ/kg * 0.4 kg = 141.6 kJ",
    "model": "E1=c*m*dT\nE2=s*m\nE=E1+E2; 2.1 kJ/(kg*°C) * 0.4 kg * 10 °C + 333 kJ/kg * 0.4 kg = 141.6 kJ",
    "sentence": "Jään lämmittämiseen ja sulattamiseen tarvitaan noin 142 kJ energiaa.",
    "modelReason": "Jään lämmitys ja sulaminen ovat eri vaiheita. Laske niiden energiat erikseen ja laske summa.",
    "level": "challenge",
    "topic": "Olomuodon muutokset"
  },
  {
    "q": "Valimossa sulatetaan 0,18 kg:n alumiinikappale, jonka alkulämpötila on 25 °C. Kuinka paljon energiaa tarvitaan, jotta kappale lämpenee sulamispisteeseensä ja sulaa kokonaan? Alumiinin sulamispiste on 660 °C, ominaislämpökapasiteetti 0,90 kJ/(kg·°C) ja ominaissulamislämpö 397 kJ/kg. Oletetaan, että kaikki siirtyvä energia kuluu alumiinin lämmittämiseen ja sulattamiseen.",
    "g": [],
    "f": [
      "Q"
    ],
    "eq": [
      "E=c*m*dT+s*m"
    ],
    "value": 174330,
    "unit": "J",
    "work": "0.90 kJ/(kg*°C)*0.18 kg*635 °C+397 kJ/kg*0.18 kg=174.33 kJ≈170 kJ",
    "modelWork": "0.90 kJ/(kg*°C)*0.18 kg*635 °C+397 kJ/kg*0.18 kg=174.33 kJ≈170 kJ",
    "modelEquation": "E=c*m*dT+s*m",
    "sentence": "Tarvitaan noin 170 kJ energiaa.",
    "hint": "Valitse kaava ja ratkaise kysytty suure.",
    "challenge": true,
    "topic": "Olomuodon muutokset",
    "source": [
      "apu3 tehtävä 35, konteksti ja lukuarvot muutettu"
    ]
  },
  {
    "q": "Lämpöeristetyssä astiassa on 0,30 kg vettä, jonka lämpötila on 20 °C. Veteen upotetaan 0,20 kg:n rautapala, jonka lämpötila on 200 °C. Kuinka paljon veden lämpötila nousee, kun veden ja raudan lämpötilat ovat tasaantuneet? Raudan ominaislämpökapasiteetti on 0,45 kJ/(kg·°C) ja veden 4,2 kJ/(kg·°C). Oletetaan, ettei energiaa siirry astiaan tai ympäristöön.",
    "g": [
      {
        "s": "m1",
        "v": 0.2,
        "u": "kg"
      },
      {
        "s": "m2",
        "v": 0.3,
        "u": "kg"
      },
      {
        "s": "c1",
        "v": 0.45,
        "u": "kJ/(kg*°C)"
      },
      {
        "s": "c2",
        "v": 4.2,
        "u": "kJ/(kg*°C)"
      },
      {
        "s": "dT",
        "v": 180,
        "u": "°C"
      }
    ],
    "f": [
      "Q"
    ],
    "eq": [
      "dT2=c1*m1*dT/(c1*m1+c2*m2)"
    ],
    "value": 12,
    "unit": "°C",
    "work": "((0.45 kJ/(kg*°C))*(0.20 kg)*(180 °C))/((0.45 kJ/(kg*°C))*(0.20 kg)+(4.2 kJ/(kg*°C))*(0.30 kg))=12 °C",
    "modelWork": "((0.45 kJ/(kg*°C))*(0.20 kg)*(180 °C))/((0.45 kJ/(kg*°C))*(0.20 kg)+(4.2 kJ/(kg*°C))*(0.30 kg))=12 °C",
    "modelEquation": "c1*m1*(dT-dT2)=c2*m2*dT2\ndT2=c1*m1*dT/(c1*m1+c2*m2)",
    "sentence": "Veden lämpötila nousee 12 °C. Loppulämpötila on 32 °C.",
    "hint": "Raudan luovuttama energia on veden vastaanottama energia. Raudan lämpötila laskee enemmän kuin veden lämpötila nousee.",
    "modelReason": "Raudan jäähtyessä luovuttama energia siirtyy veteen. Lopussa niiden lämpötilat ovat samat.",
    "challenge": true,
    "level": "challenge",
    "topic": "Lämpötilan muutoksiin liittyvät energiat",
    "source": [
      "Käyttäjän palaute 10.10.2026",
      "Metallin ja veden lämpötasapaino"
    ],
    "baseEquations": [
      "c1*m1*(dT-dT2)=c2*m2*dT2"
    ]
  }
];
