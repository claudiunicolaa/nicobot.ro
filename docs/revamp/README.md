# Direcția de revamp nicobot.ro

Decizii luate la kickoff: publicul principal sunt **cabinetele și clinicile de psihoterapie** (B2B), tonul vizual este **„clinic și de încredere”**, logo-ul actual rămâne, stack-ul rămâne static HTML + Tailwind.

## Pe scurt

**Poziționare.** Nicobot este un chatbot de suport emoțional dezvoltat în România alături de psihologi acreditați. Cabinetele îl integrează pe site pentru a primi vizitatorii la orice oră, a-i asculta fără judecată și a-i orienta către un specialist, după regulile cabinetului. Nicobot nu înlocuiește terapia; o face mai ușor de început.

**Vocea.** Calm, precis, onest, respectuos, discret. Niciodată promisiuni clinice, hype sau cifre fără sursă. Limitele produsului sunt spuse explicit, ca argument de încredere.

**Vizual.** Alb + un singur albastru (cel din logo, #4361EE) + navy profund (#0F1D4A). Borduri fine în loc de umbre, fără gradiente sau clișee „AI”. Source Serif 4 pentru titluri, Inter pentru text. Un singur accent secundar (salvie) pentru semnalele de încredere.

**Structură.** Acasă vinde parteneriatul B2B și are o singură secțiune pentru persoane. `/gen-leads` devine „Pentru cabinete” (URL păstrat). `/chat` rămâne iframe, cu o bară de responsabilitate deasupra. Contact cu două căi clare. Privacy cu introducere și rezumat, text legal neschimbat.

## Documente

| Fișier | Conținut |
|---|---|
| `01-cercetare.md` | Tipare de credibilitate în site-urile de mental health B2B, semnale de încredere pe care Nicobot le poate folosi onest, anti-tipare, note de conformitate. |
| `02-strategie-si-copy.md` | Poziționare, hartă site, copy complet pentru toate paginile, meta tags. Sursa de adevăr pentru text. |
| `03-design-system.md` | Paletă (cu rapoarte de contrast), tipografie, layout, componente cu clasele exacte, iconografie, mișcare. |
| `styleguide.html` | Previzualizare a sistemului de design (deschideți în browser; folosește Tailwind CDN doar pentru preview). |

## Cum se lucrează pe site

```
npm install
npm run build:css     # recompilează public/styles/tailwind.css după orice schimbare de clase în HTML
npm run watch:css     # același lucru, continuu, în timpul lucrului
npm run dev           # serverul local wrangler
```

Nav-ul și footer-ul sunt în `public/components/` și sunt încărcate de `public/site.js`. Textul se editează direct în HTML; dacă adăugați clase Tailwind noi, rulați `build:css` și comiteți CSS-ul rezultat.

## Decizii și lucruri de confirmat de client

1. **Numere de criză.** Pe site apare doar 112. Cercetarea a identificat DepreHUB 0374 456 420 (non-stop), Telefonul Copilului 116 111 și TelVerde Antisuicid 0800 801 200, dar programul lor nu a putut fi confirmat; se pot adăuga în bara de pe `/chat` și în footer după verificare.
2. **Date în UE.** Politica de confidențialitate menționează tehnologia OpenAI; nu afirmăm „date găzduite în UE” până nu se confirmă rezidența datelor pentru API și backend-ul api.vorbarie.ro.
3. **Testimonial Calmly.** Singurul placeholder din copy (`[[TESTIMONIAL]]`) nu este randat; dacă se obține un citat cu nume și funcție, se adaugă în secțiunea „Pe ce se bazează încrederea”.
4. **Logo Calmly.** Este încărcat de pe calmly.blog; dacă nu se încarcă, apare automat ca wordmark tipografic. Ideal ar fi un SVG oficial în repo.
5. **Butonul „Buy me a coffee”** a fost scos de pe pagina de contact (nu se potrivește tonului clinic). Poate reveni ca link discret în footer („Susțineți proiectul”).
6. **Pagina `/future`** (draft nefolosit) și blocul Instagram cu gradient au fost eliminate; Instagram rămâne ca link în footer.
7. **Chatul pe alt domeniu.** Un director de clinică va observa că demo-ul rulează pe vorbarie.ro; pe termen mediu merită mutat UI-ul de chat pe nicobot.ro.
8. **Captură de produs.** Hero-ul folosește un mock de conversație construit în HTML. O captură reală a widget-ului integrat pe site-ul unui cabinet ar fi și mai convingătoare.
