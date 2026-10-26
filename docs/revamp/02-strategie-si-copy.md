# Nicobot.ro — Poziționare și copy complet (RO)

Document de lucru pentru dezvoltator. Tot textul de mai jos este final și poate fi lipit ca atare.
Convenții:
- `[[ ... ]]` = placeholder de completat de client. Dacă nu se completează, secțiunea se ascunde.
- „Componentă” = tipul de bloc UI recomandat.
- Register: paginile Acasă, Pentru cabinete, Contact și Confidențialitate folosesc **dumneavoastră / plural neutru** (publicul principal este B2B). Secțiunea dedicată utilizatorilor de pe Acasă și bara de pe `/chat` sunt scrise impersonal, ca să nu rupă registrul paginii. Singurul loc unde se folosește **„tu”** este mesajul de salut al chatbotului (deja existent în `vars.js`) și, dacă se dorește, viitoare pagini exclusiv pentru utilizatori.

Surse de adevăr folosite (nimic altceva nu este afirmat ca fapt):
- dezvoltat alături de psihologi acreditați, care au oferit feedback pe parcursul dezvoltării;
- construit pe un model de limbaj (site-ul actual: „asemănător cu ChatGPT”; politica: „tehnologia OpenAI”);
- preia conversații cu vizitatorii site-ului sau ai paginii de social media; există un widget de chat (`script-widget.js`);
- cabinetul stabilește regulile de comunicare și programare; orientare a vizitatorului către terapeutul potrivit;
- partener Calmly, integrat în platforma lor sub numele Camy; interviu Ziarul Financiar cu Calmly;
- conversație gratuită la `/chat`, disponibil oricând, de pe orice dispozitiv;
- mesajele sunt folosite exclusiv pentru generarea răspunsurilor; nu marketing, profilare sau partajare în alte scopuri;
- răspunsul poate dura 5–10 secunde (din `vars.js`);
- proces de colaborare: discuție de cunoaștere → plan de implementare → monitorizare și îmbunătățire;
- apel introductiv de 20 de minute (Calendly), contact@nicobot.ro, Instagram @nicobot.ro.

---

## 1. Poziționare, propunere de valoare, voce

### 1.1 Poziționare (un paragraf)

Nicobot este un chatbot de suport emoțional dezvoltat în România alături de psihologi acreditați. Cabinetele și clinicile de psihoterapie îl integrează pe site-ul lor pentru a primi vizitatorii la orice oră, a-i asculta fără judecată și a-i orienta către un specialist, după regulile stabilite de cabinet. Nicobot nu înlocuiește terapia; o face mai ușor de început.

### 1.2 Propunere de valoare — pentru cabinete și clinici

- **Primul contact, la orice oră.** Vizitatorii care ajung pe site seara sau în weekend găsesc o conversație calmă, nu un formular gol.
- **Conversații construite cu psihologi, nu doar cu ingineri.** Tonul și conținutul răspunsurilor au fost rafinate cu feedback de la psihologi acreditați.
- **Regulile dumneavoastră, aplicate întocmai.** Dumneavoastră stabiliți cum se comunică, când se face trimiterea către un terapeut și cum se programează; Nicobot le respectă.

### 1.3 Propunere de valoare — pentru persoane

- **O conversație, nu o evaluare.** Câteva minute de dialog calm, fără cont, fără judecată, fără cost.
- **Oricând ești pregătit.** Disponibil la orice oră, de pe orice dispozitiv conectat la internet.
- **Ce scrii rămâne între tine și conversație.** Mesajele sunt folosite doar pentru a genera răspunsuri, nu pentru marketing sau profilare.

### 1.4 Vocea brandului

Cinci adjective: **calm, precis, onest, respectuos, discret.**

Trei reguli „nu spunem niciodată”:
1. **Nu promitem rezultate clinice.** Niciodată „vindecă”, „rezolvă anxietatea”, „terapie prin AI”, „terapeut virtual”. Nicobot este un chatbot de suport, nu un tratament și nu un specialist.
2. **Nu folosim limbaj de hype.** Niciodată „revoluționar”, „magic”, „viitorul terapiei”, semne de exclamare în serie, emoji, gradienturi verbale de tip „AI-powered”.
3. **Nu afirmăm cifre, nume sau logo-uri fără sursă.** Nicio statistică, niciun testimonial, nicio certificare sau premiu care nu poate fi verificat de client. Unde ar ajuta, lăsăm un placeholder vizibil.

---

## 2. Arhitectura site-ului

### 2.1 Pagini

| URL | Nume | Scop | CTA principal | CTA secundar |
|---|---|---|---|---|
| `/` | Acasă | Poziționare B2B-first: ce este Nicobot, de ce e credibil, cum începe colaborarea. Secțiune scurtă pentru persoane. | Programați o discuție (Calendly) | Conversație gratuită (`/chat`) |
| `/gen-leads` | Pentru cabinete | Pagina de vânzare completă: pentru cine, ce primește cabinetul, cum funcționează, limite, FAQ. URL păstrat (este linkat din exterior). | Programați o discuție (Calendly) | Vedeți cum răspunde (`/chat`) |
| `/chat` | Încearcă gratuit | Rămâne iframe către vorbarie.ro. Se adaugă doar o bară subțire deasupra cu nota de criză (copy la §4.4). | — | — |
| `/contact` | Contact | Două căi clare: cabinete (apel + email) și persoane (chat + email). | Programați o discuție | contact@nicobot.ro |
| `/privacy` | Confidențialitate | Conținutul legal existent, cu o introducere mai clară și o casetă-rezumat. | — | — |

Decizie privind „Pentru tine”: nu se creează o pagină separată. Acasă primește o secțiune compactă pentru persoane (§3.1, secțiunea 8), cu CTA către `/chat`. Motive: publicul principal este B2B, chatul este deja o pagină întreagă, iar o a treia pagină de marketing ar dilua navigarea.

Pagina `/future` nu se publică (draft nefolosit). Dacă rămâne în repo, i se adaugă `<meta name="robots" content="noindex">`.

### 2.2 Navigație (4 linkuri + 1 buton)

| Etichetă | Link | Notă |
|---|---|---|
| Acasă | `/` | |
| Pentru cabinete | `/gen-leads` | înlocuiește „Business” |
| Încearcă gratuit | `/chat` | se deschide în tab nou |
| Contact | `/contact` | |
| **Programați o discuție** | Calendly, tab nou | buton evidențiat, stil primar |

Pe mobil, aceeași ordine; butonul rămâne ultimul.

### 2.3 Footer (toate paginile)

**Coloana 1 — identitate**
- Logo Nicobot
- „Chatbot de suport emoțional, dezvoltat alături de psihologi acreditați.”

**Coloana 2 — Navigare**
- Pentru cabinete → `/gen-leads`
- Încearcă gratuit → `/chat`
- Contact → `/contact`
- Politica de confidențialitate → `/privacy`

**Coloana 3 — Contact**
- contact@nicobot.ro
- Instagram: @nicobot.ro (link text simplu, fără buton colorat)
- Programați o discuție de 20 de minute → Calendly

**Linie de responsabilitate (deasupra liniei legale, pe toată lățimea):**
„Nicobot nu înlocuiește terapia sau consultul unui psiholog. În situații de urgență, sunați la 112.”

**Linie legală:**
„© 2025 Nicobot. Toate drepturile rezervate. · Politica de confidențialitate”

Recomandare: secțiunea Instagram cu buton gradient (`components/insta.html`) se elimină din corpul paginilor; linkul rămâne în footer.

---

## 3. Copy complet — pagini principale

### 3.1 Acasă (`/`)

Register: dumneavoastră / plural neutru. Secțiunea 8 este impersonală.

---

#### Secțiunea 1 — Hero
Scop: poziționare B2B în 5 secunde, două căi clare. Componentă: hero cu titlu, subtitlu, două butoane, linie de încredere sub butoane.

- **Supratitlu (mic, opțional):** Pentru cabinete și clinici de psihoterapie
- **H1:** Chatbot de suport emoțional, dezvoltat cu psihologi
- **Subtitlu:** Nicobot preia conversațiile cu vizitatorii site-ului dumneavoastră: îi ascultă fără judecată, la orice oră, și îi orientează către echipa dumneavoastră, după regulile stabilite de cabinet.
- **Buton primar:** Programați o discuție → Calendly (tab nou)
- **Buton secundar:** Conversație gratuită → `/chat` (tab nou)
- **Linie de încredere (sub butoane, text mic):** Dezvoltat alături de psihologi acreditați · Partener Calmly · Conversații confidențiale

---

#### Secțiunea 2 — Bandă de credibilitate
Scop: confirmare rapidă, fără cifre inventate. Componentă: logo strip / bandă cu 3 elemente pe un rând.

- Partener: **Calmly** (logo, link către calmly.ro)
- În presă: **Ziarul Financiar** (text sau favicon, link către articol)
- Text: **Dezvoltat alături de psihologi acreditați**

---

#### Secțiunea 3 — Contextul
Scop: numește problema reală a cabinetului, fără dramatizare. Componentă: titlu + grilă de 3 carduri.

- **H2:** Primul pas este cel mai greu de făcut
- **Intro (opțional):** Mulți oameni ajung pe site-ul unui cabinet seara, nehotărâți, și pleacă fără să scrie nimănui.

Card 1
- **Titlu:** Vizitatorii nu vin doar în program
- **Text:** Căutările pentru sprijin se întâmplă adesea seara sau în weekend, când nimeni nu poate răspunde. Un formular gol nu reține pe nimeni.

Card 2
- **Titlu:** Un mesaj este greu de scris
- **Text:** „Bună ziua, aș vrea o programare” presupune că persoana știe deja ce are nevoie. De cele mai multe ori nu știe încă.

Card 3
- **Titlu:** Echipa are timp limitat
- **Text:** Fiecare conversație de clarificare ia timp din orele de terapie. Partea de primire și orientare poate fi preluată.

---

#### Secțiunea 4 — Ce este Nicobot
Scop: definiție onestă + beneficii pentru cabinet. Componentă: titlu, paragraf, grilă de 4 carduri (sau 2×2).

- **H2:** Un chatbot care ascultă și orientează
- **Paragraf:** Nicobot este un chatbot construit pe un model de limbaj, dezvoltat alături de o echipă de psihologi acreditați. Poartă conversații în limbaj natural, calm și fără judecată, și îndrumă vizitatorul către echipa dumneavoastră.

Card 1
- **Titlu:** Disponibil oricând
- **Text:** Răspunde la orice oră, de pe orice dispozitiv conectat la internet, direct pe site-ul dumneavoastră.

Card 2
- **Titlu:** Dezvoltat alături de psihologi
- **Text:** Psihologi acreditați au oferit feedback pe parcursul dezvoltării, pentru tonul și acuratețea răspunsurilor. Nicobot este actualizat continuu.

Card 3
- **Titlu:** Orientare către echipa dumneavoastră
- **Text:** După ce înțelege ce caută vizitatorul, Nicobot îl poate îndruma către terapeutul potrivit sau către programare, conform regulilor cabinetului.

Card 4
- **Titlu:** Confidențial prin construcție
- **Text:** Mesajele sunt folosite exclusiv pentru generarea răspunsurilor. Nu sunt folosite pentru marketing, profilare sau alte scopuri.

---

#### Secțiunea 5 — Cum începe colaborarea
Scop: arată că procesul este simplu și condus de oameni. Componentă: steps (3 pași numerotați, orizontal), cu link către pagina detaliată.

- **H2:** Trei pași până la implementare

1. **Discuție de 20 de minute** — Înțelegem cabinetul dumneavoastră, serviciile și modul în care primiți pacienți noi.
2. **Plan de implementare** — Stabilim împreună regulile de comunicare, trimiterea către terapeuți și modul de programare.
3. **Integrare și monitorizare** — Integrăm Nicobot pe site și urmărim împreună cum răspunde, ajustând unde este nevoie.

- **Link text:** Vedeți detaliile pentru cabinete → `/gen-leads`

---

#### Secțiunea 6 — Spus clar
Scop: onestitate ca argument de încredere; versiune compactă a blocului complet de pe Pentru cabinete. Componentă: două coloane (face / nu face), câte 3 puncte.

- **H2:** Ce face și ce nu face Nicobot

**Nicobot face**
- Poartă conversații calme, în limbaj natural, fără judecată.
- Ajută vizitatorul să pună în cuvinte ce simte și ce caută.
- Îl orientează către echipa dumneavoastră, după regulile stabilite.

**Nicobot nu face**
- Nu pune diagnostice și nu recomandă tratamente.
- Nu înlocuiește terapia sau consultul unui psiholog.
- Nu este un serviciu de urgență. În situații de urgență: 112.

---

#### Secțiunea 7 — În presă
Scop: dovadă externă reală. Componentă: press card (logo/nume publicație, text, citat de titlu, link extern).

- **H2:** În presă
- **Publicație:** Ziarul Financiar
- **Text:** Partenerul nostru, Calmly, a vorbit într-un interviu pentru Ziarul Financiar despre integrarea Nicobot în platforma lor, sub numele Camy.
- **Titlul articolului (citat):** Start-up Pitch: Calmly, platformă de matchmaking pentru psihoterapie
- **Link:** Citiți articolul pe zf.ro → (URL existent în `components/press.html`, tab nou)

---

#### Secțiunea 8 — Pentru persoane
Scop: cale secundară pentru utilizatori, scrisă impersonal pentru a păstra registrul paginii; include nota de criză. Componentă: bandă pe fundal deschis, text centrat, un buton, o notă mică.

- **H2:** O conversație gratuită, oricând
- **Text:** Oricine poate încerca Nicobot: câteva minute de conversație calmă, fără cont și fără cost. Același chatbot pe care îl integrăm în cabinete.
- **Buton:** Conversație gratuită → `/chat` (tab nou)
- **Notă (text mic):** Nicobot nu înlocuiește terapia sau un psiholog. În situații de urgență, sunați la 112.

---

#### Secțiunea 9 — CTA final
Scop: conversia B2B. Componentă: CTA band pe fundal albastru închis, titlu, text scurt, buton, alternativă prin email.

- **H2:** Douăzeci de minute, fără obligații
- **Text:** Discutăm despre cabinetul dumneavoastră, vă arătăm cum răspunde Nicobot și stabilim împreună dacă are sens o implementare.
- **Buton:** Programați o discuție → Calendly (tab nou)
- **Alternativă (text mic):** Sau scrieți-ne la contact@nicobot.ro

---

#### Secțiunea 10 — Footer
Conform §2.3.

---

### 3.2 Pentru cabinete (`/gen-leads`)

Register: dumneavoastră. URL-ul rămâne neschimbat.

---

#### Secțiunea 1 — Hero
Scop: confirmă vizitatorului că este pe pagina potrivită și oferă CTA imediat. Componentă: hero cu supratitlu, titlu, subtitlu, două butoane.

- **Supratitlu:** Pentru cabinete, clinici și platforme de terapie
- **H1:** Nicobot pentru cabinete și clinici
- **Subtitlu:** Un chatbot de suport emoțional care întâmpină vizitatorii site-ului dumneavoastră, îi ascultă și îi orientează către echipa dumneavoastră, după regulile pe care le stabiliți.
- **Buton primar:** Programați o discuție → Calendly (tab nou)
- **Buton secundar:** Vedeți cum răspunde → `/chat` (tab nou)
- **Linie sub butoane (text mic):** 20 de minute, online, fără obligații

---

#### Secțiunea 2 — Pentru cine
Scop: segmentare clară, fiecare cititor se regăsește. Componentă: grilă de 3 carduri.

- **H2:** Pentru cine este Nicobot

Card 1
- **Titlu:** Cabinete individuale
- **Text:** Primiți vizitatorii și când sunteți în ședință. Nicobot preia conversația de început și vă transmite cererea de programare după regulile dumneavoastră.

Card 2
- **Titlu:** Clinici cu mai mulți terapeuți
- **Text:** Vizitatorul este ajutat să-și clarifice nevoia și orientat către terapeutul potrivit din echipă, conform criteriilor stabilite de clinică.

Card 3
- **Titlu:** Platforme de terapie
- **Text:** Nicobot poate fi integrat în platforma dumneavoastră, sub numele și identitatea dumneavoastră, așa cum este deja integrat în Calmly sub numele Camy.

---

#### Secțiunea 3 — Ce primește cabinetul
Scop: beneficii concrete, fără promisiuni numerice. Componentă: grilă de 4 carduri cu pictogramă.

- **H2:** Ce primește cabinetul dumneavoastră

Card 1
- **Titlu:** Primire la orice oră
- **Text:** Vizitatorii găsesc o conversație, nu un formular, indiferent de oră sau zi. Nicobot răspunde de pe orice dispozitiv conectat la internet.

Card 2
- **Titlu:** Conversație fără judecată
- **Text:** Nicobot poartă dialogul în limbaj natural, calm, cu un ton rafinat împreună cu psihologi acreditați. Vizitatorul este ascultat înainte de a fi trimis mai departe.

Card 3
- **Titlu:** Orientare către terapeutul potrivit
- **Text:** Pe baza a ceea ce caută vizitatorul și a criteriilor stabilite de dumneavoastră, Nicobot îl poate îndruma către un terapeut din echipă sau către programare.

Card 4
- **Titlu:** Control și flexibilitate
- **Text:** Dumneavoastră stabiliți regulile de comunicare și de programare. Noi le implementăm întocmai și le ajustăm împreună, ori de câte ori este nevoie.

---

#### Secțiunea 4 — Cum funcționează
Scop: procesul complet, condus de oameni. Componentă: steps (4 pași numerotați, verticali pe mobil, orizontali pe desktop).

- **H2:** Cum funcționează colaborarea

1. **Discuție de cunoaștere (20 de minute)**
   Vorbim online despre cabinetul dumneavoastră: servicii, echipă, cum ajung pacienții noi la dumneavoastră și unde se pierd. Vă arătăm cum răspunde Nicobot.

2. **Plan de implementare**
   Stabilim împreună regulile: ce spune Nicobot despre cabinet, când și cum trimite către un terapeut, cum se face programarea și ce rămâne la echipa dumneavoastră.

3. **Integrare pe site sau pe pagina de social media**
   Ne ocupăm de partea tehnică. De regulă, Nicobot este adăugat ca widget de chat pe site-ul dumneavoastră; detaliile le stabilim în funcție de platforma pe care o folosiți.

4. **Monitorizare și îmbunătățire**
   Colaborarea nu se încheie la implementare. Urmărim împreună cum decurg conversațiile și ajustăm regulile și răspunsurile acolo unde este nevoie.

---

#### Secțiunea 5 — Ce face și ce nu face Nicobot
Scop: blocul central de încredere; limitele spuse explicit. Componentă: două coloane (face / nu face), câte 5 puncte, cu o notă sub ele.

- **H2:** Ce face și ce nu face Nicobot
- **Intro:** Credem că limitele spuse clar sunt un argument, nu o slăbiciune. Iată ce puteți aștepta de la Nicobot.

**Nicobot face**
- Poartă conversații în limbaj natural, calm și fără judecată.
- Răspunde la orice oră, direct pe site-ul dumneavoastră.
- Ajută vizitatorul să pună în cuvinte ce simte și ce caută.
- Îl orientează către un terapeut sau către programare, după regulile cabinetului.
- Folosește mesajele exclusiv pentru a genera răspunsuri.

**Nicobot nu face**
- Nu pune diagnostice și nu recomandă tratamente.
- Nu înlocuiește terapia, un psiholog sau un psihiatru.
- Nu este un serviciu de urgență și nu intervine în situații de criză.
- Nu ia decizii în numele cabinetului; regulile sunt ale dumneavoastră.
- Nu folosește conversațiile pentru marketing, profilare sau alte scopuri.

- **Notă (text mic):** Pe site și în pagina de chat afișăm vizibil: Nicobot nu înlocuiește terapia sau un psiholog; în situații de urgență, sunați la 112.

---

#### Secțiunea 6 — Credibilitate
Scop: dovezi reale, nimic inventat. Componentă: bloc de încredere cu 3 elemente (text), un press card și un slot opțional de testimonial.

- **H2:** Pe ce se bazează încrederea

Element 1
- **Titlu:** Dezvoltat alături de psihologi acreditați
- **Text:** Pe parcursul dezvoltării, o echipă de psihologi acreditați a oferit feedback și sugestii pentru experiența conversației și acuratețea răspunsurilor.

Element 2
- **Titlu:** Partener Calmly
- **Text:** Nicobot este integrat în platforma de psihoterapie Calmly, sub numele Camy. (logo Calmly, link către calmly.ro)

Element 3
- **Titlu:** Confidențialitate asumată public
- **Text:** Politica noastră de confidențialitate este publicată și spune un singur lucru esențial: mesajele sunt folosite doar pentru generarea răspunsurilor. (link către `/privacy`)

Press card (același conținut ca pe Acasă, §3.1 secțiunea 7)
- **Publicație:** Ziarul Financiar
- **Text:** Partenerul nostru, Calmly, a vorbit într-un interviu pentru Ziarul Financiar despre integrarea Nicobot în platforma lor, sub numele Camy.
- **Link:** Citiți articolul pe zf.ro →

Testimonial (opțional; se afișează doar dacă este completat)
- **Citat:** [[TESTIMONIAL: de obținut de la Calmly — 1–2 fraze despre integrarea Camy, cu nume și funcție]]
- **Atribuire:** [[Nume, funcție, Calmly]]

---

#### Secțiunea 7 — Întrebări frecvente
Scop: răspunde obiecțiilor reale înainte de apel. Componentă: FAQ accordion (6 întrebări), marcat cu schema.org FAQPage.

- **H2:** Întrebări frecvente

**1. Cum se integrează Nicobot pe site-ul nostru?**
De regulă, Nicobot este adăugat ca widget de chat pe site-ul dumneavoastră; poate prelua și conversații de pe pagina de social media. Ne ocupăm noi de implementare, iar detaliile tehnice le stabilim la discuția de cunoaștere, în funcție de platforma pe care o folosiți.

**2. Ce se întâmplă cu datele vizitatorilor? Este conform GDPR?**
Mesajele sunt folosite exclusiv pentru generarea răspunsurilor în conversație. Nu sunt folosite pentru marketing, profilare sau alte scopuri. Prelucrarea se bazează pe consimțământul utilizatorului, conform GDPR. Politica completă este publicată pe site, iar aspectele specifice cabinetului dumneavoastră le parcurgem împreună la întâlnire.

**3. Cât costă?**
Costul depinde de cabinet: volum, mod de integrare, reguli de orientare și programare. Îl stabilim transparent după discuția de 20 de minute, care este gratuită și fără obligații.

**4. Ce se întâmplă în situații de criză?**
Nicobot nu este un serviciu de urgență și nu înlocuiește intervenția unui specialist. Pe site și în pagina de chat afișăm vizibil îndemnul de a suna la 112. Modul în care conversațiile sensibile ajung la echipa dumneavoastră îl stabilim împreună, la implementare.

**5. Cine a dezvoltat Nicobot?**
Nicobot este dezvoltat în România, pe un model de limbaj, alături de o echipă de psihologi acreditați care au oferit feedback pe parcursul dezvoltării. Este integrat în platforma Calmly sub numele Camy și este actualizat continuu.

**6. Cum începem?**
Programați o discuție online de 20 de minute. Înțelegem cabinetul dumneavoastră, vă arătăm cum răspunde Nicobot și, dacă are sens, stabilim un plan de implementare. Nu există niciun angajament înainte de acest plan.

---

#### Secțiunea 8 — CTA final
Scop: conversie. Componentă: CTA band, fundal albastru închis.

- **H2:** Să ne întâlnim online, 20 de minute
- **Text:** Fără prezentări lungi. Vorbim despre cabinetul dumneavoastră, vedeți Nicobot în funcțiune și decideți în cunoștință de cauză.
- **Buton:** Programați o discuție → Calendly (tab nou)
- **Alternativă (text mic):** Preferați emailul? Scrieți-ne la contact@nicobot.ro

---

#### Secțiunea 9 — Footer
Conform §2.3.

---

## 4. Contact, Confidențialitate, chat și microcopy

### 4.1 Contact (`/contact`)

Register: dumneavoastră / plural neutru. Componentă: header simplu + două carduri unul lângă altul + notă de criză.

- **H1:** Contact
- **Subtitlu:** Răspundem de la aceeași adresă, indiferent dacă reprezentați un cabinet sau doriți să încercați Nicobot.

Card 1 — **Pentru cabinete și clinici**
- **Text:** Cea mai rapidă cale este o discuție online de 20 de minute: ne cunoaștem, vă arătăm cum răspunde Nicobot și stabilim pașii următori.
- **Buton:** Programați o discuție → Calendly (tab nou)
- **Linie secundară:** sau scrieți-ne la contact@nicobot.ro

Card 2 — **Pentru persoane**
- **Text:** Nicobot poate fi încercat gratuit, fără cont. Pentru întrebări, sugestii sau solicitări legate de datele personale, scrieți-ne pe email.
- **Buton:** Conversație gratuită → `/chat` (tab nou)
- **Linie secundară:** contact@nicobot.ro

- **Notă de criză (sub carduri, vizibilă):** Nicobot nu este un serviciu de urgență și nu înlocuiește un psiholog. Dacă sunteți în pericol sau aveți nevoie de ajutor imediat, sunați la 112.

- **Linie de final (text mic):** Ne găsiți și pe Instagram: @nicobot.ro

Recomandare: butonul „Buy me a coffee” se elimină de pe pagina de contact. Nu se potrivește cu tonul clinic și poate ridica semne de întrebare unui director de clinică. Dacă clientul dorește să îl păstreze, se mută în footer ca link text discret: „Susțineți proiectul”.

Etichete de formular (dacă se adaugă un formular în viitor; pagina actuală nu are):
- Nume și prenume
- Cabinet / organizație (opțional)
- Adresa de email
- Mesaj
- Buton: Trimiteți mesajul
- Confirmare: Mulțumim. Revenim în cel mult două zile lucrătoare.
- Eroare: Mesajul nu a putut fi trimis. Scrieți-ne direct la contact@nicobot.ro.
- Consimțământ (checkbox): Am citit Politica de confidențialitate.

### 4.2 Confidențialitate (`/privacy`)

Conținutul legal existent (secțiunile 1–7 și data actualizării) se păstrează integral. Se înlocuiesc doar titlul paginii, caseta-rezumat și se adaugă introducerea de mai jos. Pagina primește același header, navigație și footer ca restul site-ului.

- **H1:** Politica de confidențialitate
- **Intro (paragraf nou, deasupra casetei):** Această pagină explică, pe scurt și apoi în detaliu, ce se întâmplă cu mesajele scrise în conversațiile cu Nicobot. Am scris-o astfel încât să poată fi citită atât de persoanele care folosesc chatul, cât și de cabinetele care îl integrează.

Casetă-rezumat (înlocuiește `.summary`):
- **Titlu casetă:** Pe scurt
- Mesajele scrise în conversație sunt folosite exclusiv pentru generarea răspunsurilor.
- Nu le folosim pentru marketing, profilare sau partajare în alte scopuri.
- Puteți solicita oricând accesul, rectificarea sau ștergerea datelor, la contact@nicobot.ro.

Titlul secțiunii legale rămâne: „Politica de Confidențialitate pentru Aplicația Nicobot”.

### 4.3 Pagina 404

Componentă: pagină simplă cu navigație și footer standard.

- **H1:** Pagina nu există
- **Text:** Linkul poate fi greșit sau pagina a fost mutată. Vă putem îndruma către ce căutați.
- **Buton primar:** Înapoi la Acasă → `/`
- **Buton secundar:** Pentru cabinete → `/gen-leads`
- **Link text:** Conversație gratuită → `/chat`

### 4.4 Pagina de chat (`/chat`) — bară deasupra iframe-ului

Iframe-ul rămâne neschimbat. Se adaugă o bară subțire (o linie, fundal deschis) deasupra, scrisă impersonal.

- **Text bară:** Conversație gratuită cu Nicobot · Nu înlocuiește terapia sau un psiholog · În situații de urgență, sunați la 112
- **Variantă scurtă pentru mobil:** Nu înlocuiește terapia · Urgență: 112
- **Notă opțională (tooltip sau text mic):** Un răspuns poate dura 5–10 secunde.

### 4.5 Microcopy comun (butoane, linii legale)

Butoane și linkuri:
- Programați o discuție
- Discuție de 20 de minute (variantă scurtă)
- Conversație gratuită
- Vedeți cum răspunde
- Încearcă gratuit (doar ca etichetă de navigație)
- Pentru cabinete
- Citiți articolul pe zf.ro
- Înapoi la Acasă
- Trimiteți mesajul

Texte alternative (alt) pentru imagini:
- Logo: „Nicobot”
- Logo partener: „Calmly, partener Nicobot”
- Favicon presă: „Ziarul Financiar”

Linie de responsabilitate (footer, toate paginile):
„Nicobot nu înlocuiește terapia sau consultul unui psiholog. În situații de urgență, sunați la 112.”

Linie legală (footer):
„© 2025 Nicobot. Toate drepturile rezervate.”

Cookie-uri: site-ul actual nu setează cookie-uri proprii, iar chatul rulează în iframe pe alt domeniu. Nu se adaugă banner de cookie-uri fără confirmarea clientului. Dacă se introduc instrumente de analiză, linia propusă este:
„Folosim doar cookie-uri strict necesare și, cu acordul dumneavoastră, cookie-uri de măsurare a traficului. Detalii în Politica de confidențialitate.” Butoane: „Accept” / „Doar strict necesare”.

Linkuri externe: toate se deschid în tab nou, cu `rel="noopener"`.

---

## 5. Meta titluri și descrieri

Limite: titlu ≤ 60 de caractere, descriere ≤ 155 de caractere (verificate).

**Acasă (`/`)**
- Title (49): `Nicobot — Chatbot pentru cabinete de psihoterapie`
- Description (145): `Chatbot de suport emoțional dezvoltat alături de psihologi acreditați. Integrat pe site-ul cabinetului, disponibil oricând. Conversație gratuită.`

**Pentru cabinete (`/gen-leads`)**
- Title (59): `Integrare chatbot pentru cabinete de psihoterapie | Nicobot`
- Description (150): `Nicobot întâmpină vizitatorii site-ului dumneavoastră la orice oră și îi orientează către echipa dumneavoastră. Programați o discuție de 20 de minute.`

**Contact (`/contact`)**
- Title (17): `Contact | Nicobot`
- Description (142): `Scrieți-ne la contact@nicobot.ro sau programați o discuție online de 20 de minute pentru cabinetul dumneavoastră. Chat gratuit pentru oricine.`

**Confidențialitate (`/privacy`)**
- Title (39): `Politica de confidențialitate | Nicobot`
- Description (149): `Cum folosește Nicobot mesajele din conversații: exclusiv pentru generarea răspunsurilor, fără marketing sau profilare. Drepturile dumneavoastră GDPR.`

Open Graph (toate paginile): `og:site_name` = „Nicobot”, `og:locale` = „ro_RO”, `og:title` și `og:description` identice cu meta.

---

## 6. Note pentru implementare

- Ordinea secțiunilor de pe Acasă este intenționat B2B-first; secțiunea pentru persoane (§3.1 secțiunea 8) rămâne a opta, nu urcă deasupra blocului „Spus clar”.
- Press card-ul este același component pe Acasă și pe Pentru cabinete; se poate păstra `components/press.html` cu textul actualizat.
- `components/insta.html` se retrage din corpul paginilor; linkul Instagram rămâne în footer.
- Placeholder-ele `[[ ... ]]` sunt singurele elemente de completat de client: un testimonial Calmly (opțional). Dacă nu se obține, slotul se ascunde; pagina este completă și fără el.
- Nicio cifră, logo suplimentar, certificare sau nume de persoană nu se adaugă fără confirmare scrisă din partea clientului.
