**Site: https://elod3.github.io/tamas/**

# Tamás Koréh: pagina de donații (demo)

Pagina e statică: `index.html`, `style.css` și `app.js`, în trei limbi (RO, HU, EN).
Limba se poate alege din link cu `?lang=hu` sau `?lang=en`.

Ca s-o vezi local: `python3 -m http.server` în folderul ăsta, apoi deschizi http://localhost:8000.

## Ce e inventat și trebuie confirmat

- Ce cumpără fiecare sumă (în `app.js`, la `buys`): 50 lei = o taxă de înscriere,
  100 = plinul până la cursă, 250 = o pereche de cauciucuri, 500 = un weekend de concurs.
- „În decembrie am concurat pe velodrom, în Bulgaria”: e scris din ce a povestit Előd, mai
  trebuie verificat.
- Numărul 212 e cel cu care apare în clasamentul U15 de pe cronometraj.ro (locul 3).
- Dacă tricoul tricolor de pe podiumul de la velodrom e de campion național, merită spus pe pagină.

Toată pagina e scrisă la persoana întâi, cu vocea lui Tamás, pentru sponsori. Secțiunea „Firma ta, pe tricoul meu” scrie live numele firmei pe pieptul tricoului.

## Plata

Totul se schimbă din `CONFIG`, la începutul lui `app.js`:
- Cât timp nu e pus niciun link de plată, butonul deschide datele pentru transfer bancar.
- `bank`: titularul contului, IBAN-ul și banca.
- `sponsorEmail`: adresa pe care scriu firmele care vor să-l sponsorizeze.

## Fotografii

Pozele din `assets/img` vin de la tata și de la mama, pe WhatsApp, 14 oct 2026.
Cele de pe șosea sunt de la fotograful Linia20, care e trecut jos pe pagină.
