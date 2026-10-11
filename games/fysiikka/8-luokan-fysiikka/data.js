const TASKS = {
  "2": [
    {
      "q": "Aineen jäähtyminen",
      "img": "jaahtyminen",
      "layout": "graph",
      "intro": "500 g ainetta jäähdytetään normaalissa ilmanpaineessa.",
      "fields": [
        {
          "label": "Kiehumispiste",
          "value": 80.1,
          "unit": "°C",
          "absTol": 5,
          "why": "A-osuuden tasanne on noin 80 °C:ssa."
        },
        {
          "label": "Sulamispiste",
          "value": 5.5,
          "unit": "°C",
          "absTol": 5,
          "why": "C-osuuden tasanne on noin 5,5 °C:ssa."
        },
        {
          "label": "Mitä tapahtuu A-osuudella?",
          "choices": [
            "Sulaminen",
            "Höyrystyminen",
            "Tiivistyminen",
            "Jähmettyminen"
          ],
          "answer": 2,
          "why": "Jäähtyvä kaasu muuttuu nesteeksi."
        },
        {
          "label": "Mitä tapahtuu C-osuudella?",
          "choices": [
            "Sulaminen",
            "Höyrystyminen",
            "Tiivistyminen",
            "Jähmettyminen"
          ],
          "answer": 3,
          "why": "Neste muuttuu kiinteäksi."
        },
        {
          "label": "Mihin suuntaan energia siirtyy?",
          "choices": [
            "Ympäristöstä näytteeseen",
            "Näytteestä ympäristöön",
            "Energiaa ei siirry"
          ],
          "answer": 1,
          "why": "Jäähtyvä ja jähmettyvä näyte luovuttaa energiaa ympäristöön."
        },
        {
          "label": "Näytteen olomuoto D-osuudella",
          "choices": [
            "Kiinteä",
            "Neste",
            "Kaasu",
            "Neste ja kaasu"
          ],
          "answer": 0,
          "why": "Jähmettymisen päätyttyä kiinteä aine jäähtyy."
        },
        {
          "label": "Kuinka kauan sulamispisteeseen jäähtyneen aineen jähmettyminen kestää?",
          "value": 3,
          "unit": "min",
          "why": "C alkaa 6 min ja päättyy 9 min: kesto on 3 min.",
          "tol": 0.12,
          "absTol": 0.5
        },
        {
          "label": "Mitä tapahtuu energialle C-osuudella?",
          "choices": [
            "Aine luovuttaa energiaa, vaikka lämpötila pysyy samana",
            "Energiaa ei siirry, koska lämpötila pysyy samana",
            "Aine vastaanottaa energiaa ympäristöstä",
            "Aineen massa muuttuu energiaksi"
          ],
          "answer": 0,
          "why": "Jähmettyminen vapauttaa energiaa ympäristöön ilman lämpötilan muutosta."
        }
      ],
      "why": "A-osuudella aine tiivistyy, B-osuudella neste jäähtyy, C-osuudella aine jähmettyy ja D-osuudella kiinteä aine jäähtyy."
    },
    {
      "q": "Veden lämmitys",
      "img": "portaat",
      "layout": "graph",
      "intro": "1,0 kg näytettä lämmitetään normaalissa ilmanpaineessa.",
      "fields": [
        {
          "label": "Sulamispiste",
          "value": 0,
          "unit": "°C",
          "why": "Sulamisvaihe B on 0 °C:ssa.",
          "tol": 0.02,
          "absTol": 5
        },
        {
          "label": "Kiehumispiste",
          "value": 100,
          "unit": "°C",
          "why": "Kiehumisvaihe D on 100 °C:ssa.",
          "tol": 0.02,
          "absTol": 5
        },
        {
          "label": "Näytteen olomuodot B-osuudella",
          "choices": [
            "Vain kiinteä",
            "Kiinteä ja neste",
            "Vain neste",
            "Neste ja kaasu"
          ],
          "answer": 1,
          "why": "B-osuudella jää sulaa: sekä jäätä että vettä on jäljellä."
        },
        {
          "label": "Olomuodot D-osuudella",
          "choices": [
            "Vain kiinteä",
            "Kiinteä ja neste",
            "Vain kaasu",
            "Neste ja kaasu"
          ],
          "answer": 3,
          "why": "D-osuudella vettä höyrystyy; kuvaaja päättyy ennen kuin kaikki vesi on höyrystynyt."
        },
        {
          "label": "Sulamiseen kulunut energia",
          "value": 333,
          "unit": "kJ",
          "why": "Sulamiseen kuluu 375 − 42 = 333 kJ.",
          "tol": 0.12
        },
        {
          "label": "Sulaneen veden lämpenemiseen kulunut energia",
          "value": 420,
          "unit": "kJ",
          "why": "Veden lämpenemiseen kuluu 795 − 375 = 420 kJ.",
          "tol": 0.12
        },
        {
          "label": "Veden ominaislämpökapasiteetti",
          "value": 4.2,
          "unit": "kJ/(kg·°C)",
          "why": "c = E/(mΔt) = 420/(1,0·100) = 4,2 kJ/(kg·°C).",
          "tol": 0.12
        },
        {
          "label": "Mihin B-osuudella näytteeseen siirtyvä energia kuluu?",
          "choices": [
            "Lämpötilan nousuun",
            "Olomuodonmuutokseen",
            "Massan lisäämiseen",
            "Energiaa ei siirry"
          ],
          "answer": 1,
          "why": "Lämmitys jatkuu. Energia kuluu sulamiseen, vaikka lämpötila pysyy vakiona."
        }
      ],
      "why": "Lämpenemiseen käytetään E = cmΔt, sulamiseen E = sm. Olomuodonmuutoksen aikana lämpötila pysyy vakiona."
    },
    {
      "q": "Etanolin sulaminen, lämpeneminen ja höyrystyminen",
      "img": "etanoli-portaat",
      "layout": "graph",
      "intro": "0,50 kg etanolia lämmitetään normaalissa ilmanpaineessa.",
      "fields": [
        {
          "label": "Sulamispiste",
          "value": -114,
          "unit": "°C",
          "why": "A-osuudella etanoli sulaa −114 °C:ssa.",
          "tol": 0.015,
          "absTol": 5
        },
        {
          "label": "Kiehumispiste",
          "value": 78,
          "unit": "°C",
          "why": "C-osuudella etanoli kiehuu 78 °C:ssa.",
          "tol": 0.015,
          "absTol": 5
        },
        {
          "label": "Sulamiseen kulunut energia",
          "value": 54,
          "unit": "kJ",
          "why": "E_A = 54 − 0 = 54 kJ.",
          "tol": 0.12
        },
        {
          "label": "Nestemäisen etanolin lämpenemiseen kulunut energia",
          "value": 230.4,
          "unit": "kJ",
          "why": "E_B = 284,4 − 54 = 230,4 kJ.",
          "tol": 0.12
        },
        {
          "label": "Höyrystymiseen kulunut energia",
          "value": 420,
          "unit": "kJ",
          "why": "E_C = 704,4 − 284,4 = 420 kJ.",
          "tol": 0.12
        },
        {
          "label": "Nesteen ominaislämpökapasiteetti c",
          "value": 2.4,
          "unit": "kJ/(kg·°C)",
          "why": "Δt = 78 − (−114) = 192 °C. c = E_B/(mΔt) = 230,4/(0,50·192) = 2,4 kJ/(kg·°C).",
          "tol": 0.12
        },
        {
          "label": "Ominaissulamislämpö s",
          "value": 108,
          "unit": "kJ/kg",
          "why": "s = E_A/m = 54/0,50 = 108 kJ/kg.",
          "tol": 0.12
        },
        {
          "label": "Ominaishöyrystymislämpö r",
          "value": 840,
          "unit": "kJ/kg",
          "why": "r = E_C/m = 420/0,50 = 840 kJ/kg.",
          "tol": 0.12
        },
        {
          "label": "Olomuodot C-osuudella",
          "choices": [
            "Vain neste",
            "Vain kaasu",
            "Neste ja kaasu",
            "Kiinteä ja neste"
          ],
          "answer": 2,
          "why": "C:n sisällä etanoli kiehuu: sekä nestettä että kaasua on jäljellä. C:n lopussa koko näyte on kaasua."
        },
        {
          "label": "Näytteen lämmittämiseen ja höyrystämiseen kulunut kokonaisenergia",
          "value": 704.4,
          "unit": "kJ",
          "why": "E = E_A + E_B + E_C = 54 + 230,4 + 420 = 704,4 kJ.",
          "tol": 0.12
        }
      ],
      "why": "Sulamiseen käytetään E = sm, nesteen lämpenemiseen E = cmΔt ja höyrystymiseen E = rm. Osuuden energia on sen loppu- ja alkukohdan erotus. Kuvaaja päättyy, kun koko näyte on höyrystynyt."
    },
    {
      "q": "Tuntemattoman aineen lämmitys",
      "img": "haastava-portaat",
      "layout": "graph",
      "challenge": true,
      "intro": "Näytettä lämmitetään tasaisella teholla. Taulukossa ovat neljän aineen sulamis- ja kiehumispisteet normaalissa ilmanpaineessa.",
      "fields": [
        {
          "label": "Sulamispiste kuvaajasta",
          "value": -98,
          "unit": "°C",
          "absTol": 7
        },
        {
          "label": "Kiehumispiste kuvaajasta",
          "value": 65,
          "unit": "°C",
          "absTol": 7
        },
        {
          "label": "Mikä aine on todennäköisimmin kyseessä?",
          "choices": [
            "Etanoli",
            "Vesi",
            "Bentseeni",
            "Metanoli"
          ],
          "answer": 3
        },
        {
          "label": "Kuinka paljon energiaa siirtyy ensimmäisten 100 sekunnin aikana?",
          "value": 20000,
          "unit": "J",
          "tol": 0.15
        },
        {
          "label": "Montako joulea energiaa siirtyy sekunnissa?",
          "value": 200,
          "unit": "J/s",
          "tol": 0.2
        },
        {
          "label": "Kuinka kauan höyrystyminen kestää?",
          "value": 550,
          "unit": "s",
          "absTol": 35
        }
      ],
      "why": "Sulamis- ja kiehumispisteet vastaavat metanolia. Ensimmäisten 100 s aikana siirtyy 20 kJ, joten energiaa siirtyy 200 J sekunnissa. Höyrystyminen kestää noin 550 s.",
      "referenceTable": [
        [
          "Etanoli",
          -114,
          78
        ],
        [
          "Vesi",
          0,
          100
        ],
        [
          "Bentseeni",
          5.5,
          80.1
        ],
        [
          "Metanoli",
          -98,
          65
        ]
      ]
    }
  ],
  "7": [
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
      "topic": "Ominaislämpökapasiteetti",
      "source": [
        "apu3/apu5",
        "Muokattu käyttäjän tehtäväaiheista"
      ]
    },
    {
      "q": "Rautakappaleen massa on 4,0 kg ja sen lämpötila nousee 12 °C. Raudan ominaislämpökapasiteetti on 0,45 kJ/(kg·°C). Kuinka paljon energiaa kappaleeseen siirtyy?",
      "g": [
        {
          "s": "m",
          "v": 4,
          "u": "kg"
        },
        {
          "s": "c",
          "v": 0.45,
          "u": "kJ/(kg*°C)"
        },
        {
          "s": "ΔT",
          "v": 12,
          "u": "°C"
        }
      ],
      "f": [
        "Q"
      ],
      "eq": [
        "E=c*m*dT"
      ],
      "value": 21600,
      "unit": "J",
      "work": "(0.45 kJ/(kg*°C))*(4 kg)*(12 °C)=21600 J",
      "modelWork": "(0.45 kJ/(kg*°C))*(4 kg)*(12 °C)=21600 J",
      "modelEquation": "E=c*m*dT",
      "sentence": "Rautakappaleeseen siirtyy 21,6 kJ energiaa.",
      "hint": "Laske tarvittaessa muutos ja ratkaise kysytty suure.",
      "modelReason": "Kirjaa lähtöarvot, valitse suureyhtälö ja sijoita arvot yksiköineen.",
      "challenge": false,
      "level": "easy",
      "topic": "Ominaislämpökapasiteetti",
      "source": [
        "apu3/apu5",
        "Muokattu käyttäjän tehtäväaiheista"
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
      "topic": "Olomuodonmuutos",
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
      "topic": "Olomuodonmuutos",
      "source": [
        "apu3/apu5",
        "Muokattu käyttäjän tehtäväaiheista"
      ]
    },
    {
      "q": "Sulamispisteessä oleva jää vastaanottaa sulaessaan 166,5 kJ energiaa. Jään ominaissulamislämpö on 333 kJ/kg. Laske sulavan jään massa.",
      "g": [
        {
          "s": "E",
          "v": 166.5,
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
      "value": 0.5,
      "unit": "kg",
      "work": "166.5 kJ / (333 kJ/kg) = 0.5 kg",
      "modelWork": "166.5 kJ / (333 kJ/kg) = 0.5 kg",
      "modelEquation": "m=E/s",
      "sentence": "Jäätä sulaa 0,50 kg.",
      "hint": "Laske tarvittaessa muutos ja ratkaise kysytty suure.",
      "modelReason": "Kirjaa lähtöarvot, valitse suureyhtälö ja sijoita arvot yksiköineen.",
      "challenge": false,
      "level": "medium",
      "topic": "Olomuodonmuutos",
      "source": [
        "apu3/apu5",
        "Muokattu käyttäjän tehtäväaiheista"
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
      "topic": "Ominaislämpökapasiteetti",
      "source": [
        "apu3/apu5",
        "Muokattu käyttäjän tehtäväaiheista"
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
      "level": "challenge"
    },
    {
      "q": "Lämpöeristetyssä astiassa sekoitetaan 0,20 kg vettä, jonka lämpötila on 80 °C, ja 0,30 kg vettä, jonka lämpötila on 20 °C. Astian lämpeneminen sivuutetaan. Laske vesisekoituksen lämpötila, kun lämpötilaerot ovat tasaantuneet.",
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
          "s": "T1",
          "v": 80,
          "u": "°C"
        },
        {
          "s": "T2",
          "v": 20,
          "u": "°C"
        }
      ],
      "f": [
        "Q"
      ],
      "eq": [
        "T=(m1*T1+m2*T2)/(m1+m2)"
      ],
      "work": "((0.20 kg)*(80 °C)+(0.30 kg)*(20 °C))/((0.20 kg)+(0.30 kg))=44 °C",
      "value": 44,
      "unit": "°C",
      "source": [
        "apu5",
        "kahden vesinäytteen lämpötasapaino"
      ],
      "challenge": true,
      "hint": "Lämmin vesi luovuttaa saman energian kuin kylmä vastaanottaa. Sama c supistuu pois.",
      "modelEquation": "T=(m1*T1+m2*T2)/(m1+m2)",
      "modelWork": "((0.20 kg)*(80 °C)+(0.30 kg)*(20 °C))/((0.20 kg)+(0.30 kg))=44 °C",
      "model": "T=(m1*T1+m2*T2)/(m1+m2); ((0.20 kg)*(80 °C)+(0.30 kg)*(20 °C))/((0.20 kg)+(0.30 kg))=44 °C",
      "sentence": "Vesisekoituksen lämpötila on 44 °C.",
      "modelReason": "Lämpimän veden luovuttama energia on kylmän veden vastaanottama energia. Koska vedellä on sama c, se supistuu yhtälöstä.",
      "baseEquations": [
        "c*m1*(T1-T)=c*m2*(T-T2)"
      ],
      "level": "challenge"
    },
    {
      "q": "Lämpöeristetyssä astiassa on 0,30 kg vettä, jonka lämpötila on 20 °C. Veteen upotetaan 0,20 kg:n rautapala, jonka lämpötila on 200 °C. Kuinka paljon veden lämpötila nousee, kun veden ja raudan lämpötilat ovat tasaantuneet? Raudan ominaislämpökapasiteetti on 0,45 kJ/(kg·°C) ja veden 4,2 kJ/(kg·°C). Astian lämpeneminen sivuutetaan.",
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
      "topic": "",
      "source": [
        "Käyttäjän palaute 10.10.2026",
        "Metallin ja veden lämpötasapaino"
      ],
      "baseEquations": [
        "c1*m1*(dT-dT2)=c2*m2*dT2"
      ]
    }
  ],
  "8": [
    {
      "q": "Pyöräilijä kulkee 360 m 45 sekunnissa. Laske keskinopeus.",
      "g": [
        {
          "s": "s",
          "v": 360,
          "u": "m"
        },
        {
          "s": "t",
          "v": 45,
          "u": "s"
        }
      ],
      "f": [
        "v"
      ],
      "eq": [
        "v=s/t"
      ],
      "value": 8,
      "unit": "m/s",
      "work": "(360 m)/(45 s)=8 m/s",
      "modelWork": "(360 m)/(45 s)=8 m/s",
      "modelEquation": "v=s/t",
      "sentence": "Pyöräilijän keskinopeus on 8,0 m/s.",
      "hint": "Laske tarvittaessa muutos ja ratkaise kysytty suure.",
      "modelReason": "Kirjaa lähtöarvot, valitse suureyhtälö ja sijoita arvot yksiköineen.",
      "challenge": false,
      "level": "easy",
      "topic": "Tasainen liike",
      "source": [
        "apu3/apu5",
        "Muokattu käyttäjän tehtäväaiheista"
      ]
    },
    {
      "q": "Juna kulkee tasaisesti 18 m/s. Kuinka pitkän matkan se kulkee 2 minuutissa?",
      "g": [
        {
          "s": "v",
          "v": 18,
          "u": "m/s"
        },
        {
          "s": "t",
          "v": 120,
          "u": "s"
        }
      ],
      "f": [
        "v"
      ],
      "eq": [
        "s=v*t"
      ],
      "value": 2160,
      "unit": "m",
      "work": "(18 m/s)*(120 s)=2160 m",
      "modelWork": "(18 m/s)*(120 s)=2160 m",
      "modelEquation": "s=v*t",
      "sentence": "Juna kulkee 2160 m eli noin 2,2 km.",
      "hint": "Laske tarvittaessa muutos ja ratkaise kysytty suure.",
      "modelReason": "Kirjaa lähtöarvot, valitse suureyhtälö ja sijoita arvot yksiköineen.",
      "challenge": false,
      "level": "easy",
      "topic": "Tasainen liike",
      "source": [
        "apu3/apu5",
        "Muokattu käyttäjän tehtäväaiheista"
      ]
    },
    {
      "q": "Leikkiauto kulkee 2,4 m 6 sekunnissa. Laske nopeus.",
      "g": [
        {
          "s": "s",
          "v": 2.4,
          "u": "m"
        },
        {
          "s": "t",
          "v": 6,
          "u": "s"
        }
      ],
      "f": [
        "v"
      ],
      "eq": [
        "v=s/t"
      ],
      "value": 0.4,
      "unit": "m/s",
      "work": "(2.4 m)/(6 s)=0.4 m/s",
      "modelWork": "(2.4 m)/(6 s)=0.4 m/s",
      "modelEquation": "v=s/t",
      "sentence": "Leikkiauton nopeus on 0,40 m/s.",
      "hint": "Laske tarvittaessa muutos ja ratkaise kysytty suure.",
      "modelReason": "Kirjaa lähtöarvot, valitse suureyhtälö ja sijoita arvot yksiköineen.",
      "challenge": false,
      "level": "easy",
      "topic": "Tasainen liike",
      "source": [
        "apu3/apu5",
        "Muokattu käyttäjän tehtäväaiheista"
      ]
    },
    {
      "q": "Vene liikkuu tasaisesti 5,0 m/s 80 sekuntia. Laske matka.",
      "g": [
        {
          "s": "v",
          "v": 5,
          "u": "m/s"
        },
        {
          "s": "t",
          "v": 80,
          "u": "s"
        }
      ],
      "f": [
        "v"
      ],
      "eq": [
        "s=v*t"
      ],
      "value": 400,
      "unit": "m",
      "work": "(5 m/s)*(80 s)=400 m",
      "modelWork": "(5 m/s)*(80 s)=400 m",
      "modelEquation": "s=v*t",
      "sentence": "Vene kulkee 400 m.",
      "hint": "Laske tarvittaessa muutos ja ratkaise kysytty suure.",
      "modelReason": "Kirjaa lähtöarvot, valitse suureyhtälö ja sijoita arvot yksiköineen.",
      "challenge": false,
      "level": "easy",
      "topic": "Tasainen liike",
      "source": [
        "apu3/apu5",
        "Muokattu käyttäjän tehtäväaiheista"
      ]
    },
    {
      "q": "Kelkan nopeus kasvaa 2 m/s:sta 14 m/s:iin 3 sekunnissa. Laske kiihtyvyys.",
      "g": [
        {
          "s": "v0",
          "v": 2,
          "u": "m/s"
        },
        {
          "s": "v",
          "v": 14,
          "u": "m/s"
        },
        {
          "s": "dt",
          "v": 3,
          "u": "s"
        }
      ],
      "f": [
        "a"
      ],
      "eq": [
        "a=(v-v0)/dt"
      ],
      "value": 4,
      "unit": "m/s2",
      "work": "((14 m/s)-(2 m/s))/(3 s)=4 m/s2",
      "modelWork": "((14 m/s)-(2 m/s))/(3 s)=4 m/s2",
      "modelEquation": "a=(v-v0)/dt",
      "sentence": "Kelkan kiihtyvyys on 4,0 m/s².",
      "hint": "Laske tarvittaessa muutos ja ratkaise kysytty suure.",
      "modelReason": "Kirjaa lähtöarvot, valitse suureyhtälö ja sijoita arvot yksiköineen.",
      "challenge": false,
      "level": "easy",
      "topic": "Kiihtyvä liike",
      "source": [
        "apu3/apu5",
        "Muokattu käyttäjän tehtäväaiheista"
      ]
    },
    {
      "q": "Auto hidastuu 20 m/s:sta 8 m/s:iin 6 sekunnissa. Eteenpäin on positiivinen suunta. Laske kiihtyvyys.",
      "g": [
        {
          "s": "v0",
          "v": 20,
          "u": "m/s"
        },
        {
          "s": "v",
          "v": 8,
          "u": "m/s"
        },
        {
          "s": "dt",
          "v": 6,
          "u": "s"
        }
      ],
      "f": [
        "a"
      ],
      "eq": [
        "a=(v-v0)/dt"
      ],
      "value": -2,
      "unit": "m/s2",
      "work": "((8 m/s)-(20 m/s))/(6 s)=-2 m/s2",
      "modelWork": "((8 m/s)-(20 m/s))/(6 s)=-2 m/s2",
      "modelEquation": "a=(v-v0)/dt",
      "sentence": "Auton kiihtyvyys on −2,0 m/s² eli nopeus pienenee 2,0 m/s joka sekunti.",
      "hint": "Laske tarvittaessa muutos ja ratkaise kysytty suure.",
      "modelReason": "Kirjaa lähtöarvot, valitse suureyhtälö ja sijoita arvot yksiköineen.",
      "challenge": false,
      "level": "easy",
      "topic": "Kiihtyvä liike",
      "source": [
        "apu3/apu5",
        "Muokattu käyttäjän tehtäväaiheista"
      ]
    },
    {
      "q": "Metallikappaleen massa on 135 g ja tilavuus 15 cm³. Laske tiheys yksikössä kg/m³.",
      "g": [
        {
          "s": "m",
          "v": 0.135,
          "u": "kg"
        },
        {
          "s": "V",
          "v": 1.5e-05,
          "u": "m3"
        }
      ],
      "f": [
        "rho"
      ],
      "eq": [
        "rho=m/V"
      ],
      "value": 9000,
      "unit": "kg/m3",
      "work": "(135 g)/(15 cm3)=9 g/cm3",
      "modelWork": "(135 g)/(15 cm3)=9 g/cm3",
      "modelEquation": "rho=m/V",
      "sentence": "Metallikappaleen tiheys on 9000 kg/m³.",
      "hint": "Laske tarvittaessa muutos ja ratkaise kysytty suure.",
      "modelReason": "Kirjaa lähtöarvot, valitse suureyhtälö ja sijoita arvot yksiköineen.",
      "challenge": false,
      "level": "easy",
      "topic": "Tiheys",
      "source": [
        "apu3/apu5",
        "Muokattu käyttäjän tehtäväaiheista"
      ]
    },
    {
      "q": "Astia sisältää 80 litraa ilmaa, jonka tiheys on 1,2 kg/m³. Laske ilman massa.",
      "g": [
        {
          "s": "V",
          "v": 0.08,
          "u": "m3"
        },
        {
          "s": "rho",
          "v": 1.2,
          "u": "kg/m3"
        }
      ],
      "f": [
        "rho"
      ],
      "eq": [
        "m=rho*V"
      ],
      "value": 0.096,
      "unit": "kg",
      "work": "(1.2 kg/m3)*(0.08 m3)=0.096 kg",
      "modelWork": "(1.2 kg/m3)*(0.08 m3)=0.096 kg",
      "modelEquation": "m=rho*V",
      "sentence": "Astian ilman massa on 0,096 kg.",
      "hint": "Laske tarvittaessa muutos ja ratkaise kysytty suure.",
      "modelReason": "Kirjaa lähtöarvot, valitse suureyhtälö ja sijoita arvot yksiköineen.",
      "challenge": false,
      "level": "easy",
      "topic": "Tiheys",
      "source": [
        "apu3/apu5",
        "Muokattu käyttäjän tehtäväaiheista"
      ]
    },
    {
      "q": "Laatikko kohdistaa alustaan 240 N:n voiman. Kosketuspinta-ala on 0,12 m². Kuinka suuren paineen laatikko aiheuttaa?",
      "g": [
        {
          "s": "F",
          "v": 240,
          "u": "N"
        },
        {
          "s": "A",
          "v": 0.12,
          "u": "m2"
        }
      ],
      "f": [
        "p"
      ],
      "eq": [
        "p=F/A"
      ],
      "value": 2000,
      "unit": "Pa",
      "work": "(240 N)/(0.12 m2)=2000 Pa",
      "modelWork": "(240 N)/(0.12 m2)=2000 Pa",
      "modelEquation": "p=F/A",
      "sentence": "Laatikko aiheuttaa 2000 Pa eli 2,0 kPa:n paineen.",
      "hint": "Laske tarvittaessa muutos ja ratkaise kysytty suure.",
      "modelReason": "Kirjaa lähtöarvot, valitse suureyhtälö ja sijoita arvot yksiköineen.",
      "challenge": false,
      "level": "easy",
      "topic": "Paine",
      "source": [
        "apu3/apu5",
        "Muokattu käyttäjän tehtäväaiheista"
      ]
    },
    {
      "q": "Veden tiheys on 1000 kg/m³ ja g = 10 N/kg. Laske hydrostaattinen paine 2,4 m syvyydessä.",
      "g": [
        {
          "s": "rho",
          "v": 1000,
          "u": "kg/m3"
        },
        {
          "s": "g",
          "v": 10,
          "u": "N/kg"
        },
        {
          "s": "h",
          "v": 2.4,
          "u": "m"
        }
      ],
      "f": [
        "ph"
      ],
      "eq": [
        "ph=rho*g*h"
      ],
      "value": 24000,
      "unit": "Pa",
      "work": "(1000 kg/m3)*(10 N/kg)*(2.4 m)=24000 Pa",
      "modelWork": "(1000 kg/m3)*(10 N/kg)*(2.4 m)=24000 Pa",
      "modelEquation": "ph=rho*g*h",
      "sentence": "Veden aiheuttama paine on 24 kPa.",
      "hint": "Laske tarvittaessa muutos ja ratkaise kysytty suure.",
      "modelReason": "Kirjaa lähtöarvot, valitse suureyhtälö ja sijoita arvot yksiköineen.",
      "challenge": false,
      "level": "easy",
      "topic": "Paine",
      "source": [
        "apu3/apu5",
        "Muokattu käyttäjän tehtäväaiheista"
      ]
    },
    {
      "q": "Pulkkaa vedetään 250 m liikkeen suuntaisella 12 N:n voimalla. Kuinka suuren työn vetovoima tekee?",
      "g": [
        {
          "s": "F",
          "v": 12,
          "u": "N"
        },
        {
          "s": "s",
          "v": 250,
          "u": "m"
        }
      ],
      "f": [
        "W"
      ],
      "eq": [
        "W=F*s"
      ],
      "value": 3000,
      "unit": "J",
      "work": "(12 N)*(250 m)=3000 J",
      "modelWork": "(12 N)*(250 m)=3000 J",
      "modelEquation": "W=F*s",
      "sentence": "Vetovoima tekee 3000 J eli 3,0 kJ:n työn.",
      "hint": "Laske tarvittaessa muutos ja ratkaise kysytty suure.",
      "modelReason": "Kirjaa lähtöarvot, valitse suureyhtälö ja sijoita arvot yksiköineen.",
      "challenge": false,
      "level": "easy",
      "topic": "Työ ja energia",
      "source": [
        "apu3/apu5",
        "Muokattu käyttäjän tehtäväaiheista"
      ]
    },
    {
      "q": "Kappaleen paino on 40 N. Se nostetaan 3,5 m korkeammalle. Laske potentiaalienergian kasvu.",
      "g": [
        {
          "s": "G",
          "v": 40,
          "u": "N"
        },
        {
          "s": "h",
          "v": 3.5,
          "u": "m"
        }
      ],
      "f": [
        "Ep"
      ],
      "eq": [
        "Ep=G*h"
      ],
      "value": 140,
      "unit": "J",
      "work": "(40 N)*(3.5 m)=140 J",
      "modelWork": "(40 N)*(3.5 m)=140 J",
      "modelEquation": "Ep=G*h",
      "sentence": "Kappaleen potentiaalienergia kasvaa 140 J.",
      "hint": "Laske tarvittaessa muutos ja ratkaise kysytty suure.",
      "modelReason": "Kirjaa lähtöarvot, valitse suureyhtälö ja sijoita arvot yksiköineen.",
      "challenge": false,
      "level": "easy",
      "topic": "Työ ja energia",
      "source": [
        "apu3/apu5",
        "Muokattu käyttäjän tehtäväaiheista"
      ]
    },
    {
      "q": "Pallon massa on 0,80 kg ja nopeus 5,0 m/s. Laske pallon liike-energia.",
      "g": [
        {
          "s": "m",
          "v": 0.8,
          "u": "kg"
        },
        {
          "s": "v",
          "v": 5,
          "u": "m/s"
        }
      ],
      "f": [
        "Ek"
      ],
      "eq": [
        "Ek=m*v^2/2"
      ],
      "value": 10,
      "unit": "J",
      "work": "(0.8 kg)*(5 m/s)^2/2=10 J",
      "modelWork": "(0.8 kg)*(5 m/s)^2/2=10 J",
      "modelEquation": "Ek=m*v^2/2",
      "sentence": "Pallon liike-energia on 10 J.",
      "hint": "Laske tarvittaessa muutos ja ratkaise kysytty suure.",
      "modelReason": "Kirjaa lähtöarvot, valitse suureyhtälö ja sijoita arvot yksiköineen.",
      "challenge": false,
      "level": "easy",
      "topic": "Työ ja energia",
      "source": [
        "apu3/apu5",
        "Muokattu käyttäjän tehtäväaiheista"
      ]
    },
    {
      "q": "Nostolaite tekee 900 J työn 6 sekunnissa. Laske keskimääräinen teho.",
      "g": [
        {
          "s": "W",
          "v": 900,
          "u": "J"
        },
        {
          "s": "t",
          "v": 6,
          "u": "s"
        }
      ],
      "f": [
        "P"
      ],
      "eq": [
        "P=W/t"
      ],
      "value": 150,
      "unit": "W",
      "work": "(900 J)/(6 s)=150 W",
      "modelWork": "(900 J)/(6 s)=150 W",
      "modelEquation": "P=W/t",
      "sentence": "Nostolaitteen keskimääräinen teho on 150 W.",
      "hint": "Laske tarvittaessa muutos ja ratkaise kysytty suure.",
      "modelReason": "Kirjaa lähtöarvot, valitse suureyhtälö ja sijoita arvot yksiköineen.",
      "challenge": false,
      "level": "easy",
      "topic": "Teho",
      "source": [
        "apu3/apu5",
        "Muokattu käyttäjän tehtäväaiheista"
      ]
    },
    {
      "q": "Lämmitin siirtää 48 kJ energiaa 40 sekunnissa. Laske teho.",
      "g": [
        {
          "s": "E",
          "v": 48000,
          "u": "J"
        },
        {
          "s": "t",
          "v": 40,
          "u": "s"
        }
      ],
      "f": [
        "P"
      ],
      "eq": [
        "P=E/t"
      ],
      "value": 1200,
      "unit": "W",
      "work": "(48 kJ)/(40 s)=1200 W",
      "modelWork": "(48 kJ)/(40 s)=1200 W",
      "modelEquation": "P=E/t",
      "sentence": "Lämmittimen teho on 1200 W eli 1,2 kW.",
      "hint": "Laske tarvittaessa muutos ja ratkaise kysytty suure.",
      "modelReason": "Kirjaa lähtöarvot, valitse suureyhtälö ja sijoita arvot yksiköineen.",
      "challenge": false,
      "level": "easy",
      "topic": "Teho",
      "source": [
        "apu3/apu5",
        "Muokattu käyttäjän tehtäväaiheista"
      ]
    },
    {
      "q": "Äänipulssi kulkee 240 m nopeudella 1500 m/s. Laske kulkuaika.",
      "g": [
        {
          "s": "s",
          "v": 240,
          "u": "m"
        },
        {
          "s": "v",
          "v": 1500,
          "u": "m/s"
        }
      ],
      "f": [
        "v"
      ],
      "eq": [
        "t=s/v"
      ],
      "value": 0.16,
      "unit": "s",
      "work": "(240 m)/(1500 m/s)=0.16 s",
      "modelWork": "(240 m)/(1500 m/s)=0.16 s",
      "modelEquation": "t=s/v",
      "sentence": "Äänipulssin kulkuaika on 0,16 s.",
      "hint": "Laske tarvittaessa muutos ja ratkaise kysytty suure.",
      "modelReason": "Kirjaa lähtöarvot, valitse suureyhtälö ja sijoita arvot yksiköineen.",
      "challenge": false,
      "level": "medium",
      "topic": "Tasainen liike",
      "source": [
        "apu3/apu5",
        "Muokattu käyttäjän tehtäväaiheista"
      ]
    },
    {
      "q": "Bussi kulkee tasaisesti 36 km/h. Kuinka kauan 450 m matka kestää?",
      "g": [
        {
          "s": "s",
          "v": 450,
          "u": "m"
        },
        {
          "s": "v",
          "v": 10,
          "u": "m/s"
        }
      ],
      "f": [
        "v"
      ],
      "eq": [
        "t=s/v"
      ],
      "value": 45,
      "unit": "s",
      "work": "(450 m)/(10 m/s)=45 s",
      "modelWork": "(450 m)/(10 m/s)=45 s",
      "modelEquation": "t=s/v",
      "sentence": "Bussin matka kestää 45 s.",
      "hint": "Laske tarvittaessa muutos ja ratkaise kysytty suure.",
      "modelReason": "Kirjaa lähtöarvot, valitse suureyhtälö ja sijoita arvot yksiköineen.",
      "challenge": false,
      "level": "medium",
      "topic": "Tasainen liike",
      "source": [
        "apu3/apu5",
        "Muokattu käyttäjän tehtäväaiheista"
      ]
    },
    {
      "q": "Nopeus kasvaa 3 m/s:sta 15 m/s:iin kiihtyvyydellä 2 m/s². Kuinka kauan muutos kestää?",
      "g": [
        {
          "s": "v0",
          "v": 3,
          "u": "m/s"
        },
        {
          "s": "v",
          "v": 15,
          "u": "m/s"
        },
        {
          "s": "a",
          "v": 2,
          "u": "m/s2"
        }
      ],
      "f": [
        "a"
      ],
      "eq": [
        "dt=(v-v0)/a"
      ],
      "value": 6,
      "unit": "s",
      "work": "((15 m/s)-(3 m/s))/(2 m/s2)=6 s",
      "modelWork": "((15 m/s)-(3 m/s))/(2 m/s2)=6 s",
      "modelEquation": "dt=(v-v0)/a",
      "sentence": "Nopeuden muutos kestää 6,0 s.",
      "hint": "Laske tarvittaessa muutos ja ratkaise kysytty suure.",
      "modelReason": "Kirjaa lähtöarvot, valitse suureyhtälö ja sijoita arvot yksiköineen.",
      "challenge": false,
      "level": "medium",
      "topic": "Kiihtyvä liike",
      "source": [
        "apu3/apu5",
        "Muokattu käyttäjän tehtäväaiheista"
      ]
    },
    {
      "q": "Alumiinikappaleen massa on 81 g. Tiheys on 2700 kg/m³. Laske tilavuus yksikössä cm³.",
      "g": [
        {
          "s": "m",
          "v": 0.081,
          "u": "kg"
        },
        {
          "s": "rho",
          "v": 2700,
          "u": "kg/m3"
        }
      ],
      "f": [
        "rho"
      ],
      "eq": [
        "V=m/rho"
      ],
      "value": 30,
      "unit": "cm3",
      "work": "(81 g)/(2700 kg/m3)=0.00003 m3",
      "modelWork": "(81 g)/(2700 kg/m3)=0.00003 m3",
      "modelEquation": "V=m/rho",
      "sentence": "Alumiinikappaleen tilavuus on 30 cm³.",
      "hint": "Laske tarvittaessa muutos ja ratkaise kysytty suure.",
      "modelReason": "Kirjaa lähtöarvot, valitse suureyhtälö ja sijoita arvot yksiköineen.",
      "challenge": false,
      "level": "medium",
      "topic": "Tiheys",
      "source": [
        "apu3/apu5",
        "Muokattu käyttäjän tehtäväaiheista"
      ]
    },
    {
      "q": "Alustaan kohdistuu 600 N voima ja paine on 15 kPa. Laske kosketuspinta-ala.",
      "g": [
        {
          "s": "F",
          "v": 600,
          "u": "N"
        },
        {
          "s": "p",
          "v": 15000,
          "u": "Pa"
        }
      ],
      "f": [
        "p"
      ],
      "eq": [
        "A=F/p"
      ],
      "value": 0.04,
      "unit": "m2",
      "work": "(600 N)/(15 kPa)=0.04 m2",
      "modelWork": "(600 N)/(15 kPa)=0.04 m2",
      "modelEquation": "A=F/p",
      "sentence": "Kosketuspinta-ala on 0,040 m².",
      "hint": "Laske tarvittaessa muutos ja ratkaise kysytty suure.",
      "modelReason": "Kirjaa lähtöarvot, valitse suureyhtälö ja sijoita arvot yksiköineen.",
      "challenge": false,
      "level": "medium",
      "topic": "Paine",
      "source": [
        "apu3/apu5",
        "Muokattu käyttäjän tehtäväaiheista"
      ]
    },
    {
      "q": "Vetovoima tekee 1,8 kJ työn 300 m matkalla. Voima on liikkeen suuntainen. Kuinka suuri se on?",
      "g": [
        {
          "s": "W",
          "v": 1800,
          "u": "J"
        },
        {
          "s": "s",
          "v": 300,
          "u": "m"
        }
      ],
      "f": [
        "W"
      ],
      "eq": [
        "F=W/s"
      ],
      "value": 6,
      "unit": "N",
      "work": "(1.8 kJ)/(300 m)=6 N",
      "modelWork": "(1.8 kJ)/(300 m)=6 N",
      "modelEquation": "F=W/s",
      "sentence": "Vetovoiman suuruus on 6,0 N.",
      "hint": "Laske tarvittaessa muutos ja ratkaise kysytty suure.",
      "modelReason": "Kirjaa lähtöarvot, valitse suureyhtälö ja sijoita arvot yksiköineen.",
      "challenge": false,
      "level": "medium",
      "topic": "Työ ja energia",
      "source": [
        "apu3/apu5",
        "Muokattu käyttäjän tehtäväaiheista"
      ]
    },
    {
      "q": "Nostolaitteen hyötyteho on 250 W. Kuinka kauan 2,0 kJ työn tekeminen kestää?",
      "g": [
        {
          "s": "W",
          "v": 2000,
          "u": "J"
        },
        {
          "s": "P",
          "v": 250,
          "u": "W"
        }
      ],
      "f": [
        "P"
      ],
      "eq": [
        "t=W/P"
      ],
      "value": 8,
      "unit": "s",
      "work": "(2 kJ)/(250 W)=8 s",
      "modelWork": "(2 kJ)/(250 W)=8 s",
      "modelEquation": "t=W/P",
      "sentence": "Nostotyö kestää 8,0 s.",
      "hint": "Laske tarvittaessa muutos ja ratkaise kysytty suure.",
      "modelReason": "Kirjaa lähtöarvot, valitse suureyhtälö ja sijoita arvot yksiköineen.",
      "challenge": false,
      "level": "medium",
      "topic": "Teho",
      "source": [
        "apu3/apu5",
        "Muokattu käyttäjän tehtäväaiheista"
      ]
    },
    {
      "q": "Kaksi moottorivenettä kulkee saman 24 km:n reitin. Ensimmäisen keskinopeus on 96 km/h ja toisen 72 km/h. Kuinka monta sekuntia lyhyempi ensimmäisen veneen matka-aika on?",
      "g": [
        {
          "s": "s",
          "v": 24,
          "u": "km"
        },
        {
          "s": "v1",
          "v": 96,
          "u": "km/h"
        },
        {
          "s": "v2",
          "v": 72,
          "u": "km/h"
        }
      ],
      "f": [
        "v"
      ],
      "eq": [
        "t=s/v2-s/v1",
        "t=t2-t1"
      ],
      "work": "24 km / (72 km/h) - 24 km / (96 km/h) = 300 s",
      "value": 300,
      "unit": "s",
      "source": [
        "apu5",
        "kahden ajajan ajansäästö"
      ],
      "challenge": true,
      "hint": "Laske kummankin ajon aika ja ota erotus.",
      "modelEquation": "t1=s/v1\nt2=s/v2\nt=t2-t1",
      "modelWork": "24 km / (72 km/h) - 24 km / (96 km/h) = 300 s",
      "model": "t1=s/v1\nt2=s/v2\nt=t2-t1; 24 km / (72 km/h) - 24 km / (96 km/h) = 300 s",
      "sentence": "Nopeampi autoilija säästää 300 sekuntia eli 5 minuuttia.",
      "modelReason": "Laske ajoajat erikseen. Ajansäästö on hitaamman ja nopeamman ajon aikaero.",
      "level": "challenge"
    },
    {
      "q": "Robottiauto lähtee testiradalla levosta ja saavuttaa tasaisesti kiihdyttäen nopeuden 12 m/s 6 sekunnissa. Se jatkaa tällä nopeudella 20 sekuntia ja pysähtyy tasaisesti jarruttaen 4 sekunnissa. Kuinka pitkän matkan auto kulkee?",
      "g": [
        {
          "s": "v",
          "v": 12,
          "u": "m/s"
        },
        {
          "s": "t1",
          "v": 6,
          "u": "s"
        },
        {
          "s": "t2",
          "v": 20,
          "u": "s"
        },
        {
          "s": "t3",
          "v": 4,
          "u": "s"
        }
      ],
      "f": [
        "v",
        "st"
      ],
      "eq": [
        "s=v*t1/2+v*t2+v*t3/2",
        "s=s1+s2+s3"
      ],
      "work": "(12 m/s)*(6 s)/2+(12 m/s)*(20 s)+(12 m/s)*(4 s)/2=300 m",
      "value": 300,
      "unit": "m",
      "source": [
        "apu3",
        "kiihdytyksen, tasaisen liikkeen ja jarrutuksen matkat; tilanne ja lukuarvot muokattu"
      ],
      "challenge": true,
      "hint": "Nopeuskuvaajan pinta-alat: kolmio, suorakulmio, kolmio.",
      "modelEquation": "s1=v*t1/2\ns2=v*t2\ns3=v*t3/2\ns=s1+s2+s3",
      "modelWork": "s1=(12 m/s)*(6 s)/2=36 m\ns2=(12 m/s)*(20 s)=240 m\ns3=(12 m/s)*(4 s)/2=24 m\ns=(36 m)+(240 m)+(24 m)=300 m",
      "model": "s1=v*t1/2\ns2=v*t2\ns3=v*t3/2\ns=s1+s2+s3; s1=(12 m/s)*(6 s)/2=36 m\ns2=(12 m/s)*(20 s)=240 m\ns3=(12 m/s)*(4 s)/2=24 m\ns=(36 m)+(240 m)+(24 m)=300 m",
      "sentence": "Raitiovaunun kokonaismatka on 300 m.",
      "modelReason": "Tasaisesti kiihdyttävässä ja jarruttavassa vaiheessa keskinopeus on puolet huippunopeudesta. Laske kolmen vaiheen matkat.",
      "level": "challenge"
    },
    {
      "q": "20 kg:n laatikkoa vedetään vaakasuoraan 50 N:n voimalla. Liikekitka on 18 N. Laatikko lähtee levosta. Kuinka suuri sen nopeus on 5 sekunnin kuluttua?",
      "g": [
        {
          "s": "m",
          "v": 20,
          "u": "kg"
        },
        {
          "s": "Fv",
          "v": 50,
          "u": "N"
        },
        {
          "s": "Fμ",
          "v": 18,
          "u": "N"
        },
        {
          "s": "t",
          "v": 5,
          "u": "s"
        },
        {
          "s": "v0",
          "v": 0,
          "u": "m/s"
        }
      ],
      "f": [
        "F",
        "vt"
      ],
      "eq": [
        "v=(Fv-Fmu)*t/m",
        "v=v0+a*t",
        "v=a*t"
      ],
      "work": "((50 N)-(18 N))*(5 s)/(20 kg)=8 m/s",
      "value": 8,
      "unit": "m/s",
      "source": [
        "apu3",
        "kitka ja nopeuden muutos"
      ],
      "challenge": true,
      "hint": "Ensin kokonaisvoima, sitten kiihtyvyys ja nopeus.",
      "modelEquation": "F=Fv-Fmu\na=F/m\nv=v0+a*t",
      "modelWork": "F=(50 N)-(18 N)=32 N\na=(32 N)/(20 kg)=1.6 m/s^2\nv=(0 m/s)+(1.6 m/s^2)*(5 s)=8 m/s",
      "model": "F=Fv-Fmu\na=F/m\nv=v0+a*t; F=(50 N)-(18 N)=32 N\na=(32 N)/(20 kg)=1.6 m/s^2\nv=(0 m/s)+(1.6 m/s^2)*(5 s)=8 m/s",
      "sentence": "Laatikon nopeus on 8 m/s.",
      "modelReason": "Veto ja kitka ovat vastakkaissuuntaiset. Laske kokonaisvoima, kiihtyvyys ja nopeuden muutos.",
      "level": "challenge"
    },
    {
      "q": "Sataman varastolattia kestää enintään 600 kPa:n paineen. Kahdeksanrenkaisen kuormausajoneuvon oma massa on 12 000 kg. Yhden renkaan kosketuspinta-ala lattiaan on 0,040 m². Kuinka suuri kuorman massa saa enintään olla? Käytä g = 10 N/kg.",
      "g": [
        {
          "s": "m0",
          "v": 12000,
          "u": "kg"
        },
        {
          "s": "A",
          "v": 0.32,
          "u": "m²"
        },
        {
          "s": "p",
          "v": 600000,
          "u": "Pa"
        },
        {
          "s": "g",
          "v": 10,
          "u": "N/kg"
        }
      ],
      "f": [
        "p",
        "G"
      ],
      "eq": [
        "m=p*A/g-m0",
        "m=F/g-m0",
        "m=p*A/g-m0"
      ],
      "work": "600 kPa * 0.32 m2 / (10 N/kg) - 12000 kg = 7200 kg",
      "value": 7200,
      "unit": "kg",
      "source": [
        "apu5",
        "paineesta johdettu kuormaraja; jäätien sijaan varastolattia, lukuarvot muokattu"
      ],
      "challenge": true,
      "hint": "Ratkaise sallittu kokonaismassa ja vähennä oma massa.",
      "modelEquation": "F=p*A\nm=F/g-m0",
      "modelWork": "600 kPa * 0.32 m2 / (10 N/kg) - 12000 kg = 7200 kg",
      "model": "F=p*A\nm=F/g-m0; 600 kPa * 0.32 m2 / (10 N/kg) - 12000 kg = 7200 kg",
      "sentence": "Hiekkakuorman massa saa olla enintään 7200 kg.",
      "modelReason": "Laske paineen sallima kokonaispaino ja siitä kokonaismassa. Vähennä auton oma massa.",
      "level": "challenge"
    },
    {
      "q": "Maatilan pumppu siirtää minuutissa 300 litraa vettä 22 m ylempänä olevaan säiliöön. Veden nostamiseen kuluu 75 % pumppuun siirtyvästä energiasta. Laske pumpun ottama teho. Veden tiheys on 1,0 kg/l ja g = 10 N/kg.",
      "g": [
        {
          "s": "m",
          "v": 300,
          "u": "kg"
        },
        {
          "s": "t",
          "v": 60,
          "u": "s"
        },
        {
          "s": "h",
          "v": 22,
          "u": "m"
        },
        {
          "s": "η",
          "v": 0.75,
          "u": ""
        },
        {
          "s": "g",
          "v": 10,
          "u": "N/kg"
        }
      ],
      "f": [
        "Ep",
        "P",
        "eta"
      ],
      "eq": [
        "P=m*g*h/(eta*t)",
        "P=E/t",
        "P=Et/t",
        "P=Ep/(eta*t)"
      ],
      "work": "300 kg * 10 N/kg * 22 m / (0.75 * 60 s) = 1466.67 W",
      "value": 1466.6666666666667,
      "unit": "W",
      "source": [
        "apu5",
        "pumpun hyötysuhde"
      ],
      "challenge": true,
      "hint": "Hyötyenergia / aika antaa hyötytehon; jaa hyötysuhteella.",
      "modelEquation": "Ep=m*g*h\nEt=Ep/eta\nP=Et/t",
      "modelWork": "300 kg * 10 N/kg * 22 m / (0.75 * 60 s) = 1466.67 W",
      "model": "Ep=m*g*h\nEt=Ep/eta\nP=Et/t; 300 kg * 10 N/kg * 22 m / (0.75 * 60 s) = 1466.67 W",
      "sentence": "Pumpun ottama teho on noin 1,5 kW.",
      "altFormulaSets": [
        [
          "G",
          "W",
          "P",
          "eta"
        ]
      ],
      "modelReason": "Nostamiseen tarvittava energia on hyötyenergia. Hyötysuhde kertoo hyötyenergian osuuden otetusta energiasta.",
      "level": "challenge"
    },
    {
      "q": "Auton massa on 1000 kg ja nopeus 72 km/h. Auto jarruttaa tasaisella tiellä. Liikettä vastustava kitkavoima on vakio 4000 N. Laske jarrutusmatka. Ilmanvastus sivuutetaan.",
      "g": [
        {
          "s": "m",
          "v": 1000,
          "u": "kg"
        },
        {
          "s": "v",
          "v": 20,
          "u": "m/s"
        },
        {
          "s": "F",
          "v": 4000,
          "u": "N"
        }
      ],
      "f": [
        "Ek",
        "W"
      ],
      "eq": [
        "s=m*v^2/(2*F)",
        "s=Ek/F"
      ],
      "work": "Ek=0.5*(1000 kg)*(72 km/h)^2=200000 J\ns=(200000 J)/(4000 N)=50 m",
      "value": 50,
      "unit": "m",
      "source": [
        "apu3",
        "auton jarrutusmatka"
      ],
      "challenge": true,
      "hint": "Aseta ½mv² = Fs.",
      "modelEquation": "Ek=m*v^2/2\nF*s=Ek\ns=Ek/F",
      "modelWork": "Ek=0.5*(1000 kg)*(72 km/h)^2=200000 J\ns=(200000 J)/(4000 N)=50 m",
      "model": "Ek=m*v^2/2\nF*s=Ek\ns=Ek/F; Ek=0.5*(1000 kg)*(72 km/h)^2=200000 J\ns=(200000 J)/(4000 N)=50 m",
      "sentence": "Auton jarrutusmatka on 50 m.",
      "modelReason": "Alkuperäinen liike-energia muuttuu jarrutustyöksi. Jarruttavan voiman suuruus annetaan positiivisena.",
      "level": "challenge"
    }
  ]
};
