# Pythagoraan torjuntajoukot

Kaksikenttäinen matematiikkapeli Pythagoraan lauseen harjoitteluun. Kentissä on yhteensä 16 arvottavaa tehtävää, komentajan äänet, kenttäkohtainen kalusto ja torjunta-animaatiot.

## Käynnistä paikallisesti

Vaatimus: Node.js 22.13 tai uudempi.

```bash
npm ci
npm run dev
```

Avaa terminaalissa näkyvä paikallinen osoite selaimeen.

## Tarkista tuotantoversio

```bash
npm run build
npm run start
```

## GitHubiin

1. Luo GitHubissa tyhjä repository.
2. Pura ZIP ja siirrä tämän kansion sisältö repositoryyn.
3. Tee ensimmäinen commit ja push.

Sovellus käyttää Vinextiä ja Cloudflare Workers -ympäristöä, joten se ei ole pelkkä GitHub Pagesiin kopioitava staattinen `index.html`. GitHub toimii lähdekoodin säilytykseen ja versionhallintaan; julkaistu peliversio voi jatkaa nykyisessä Sites-osoitteessaan.

## Pelisäännön täsmennys

Kentässä näkyy kaksi sallittua hutia. Kolmas huti tuhoaa patterin. Punainen vaaravälke poistuu, kun lähestyminen on onnistuneesti torjuttu.
