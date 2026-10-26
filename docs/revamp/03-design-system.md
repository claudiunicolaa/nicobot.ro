# Nicobot — Design System v1 · direcția „Clinic și de încredere”

Stack țintă: HTML static + Tailwind 3 CDN (`https://cdn.tailwindcss.com`) cu bloc `tailwind.config` inline + un singur fișier `/styles/main.css`. Fără build. Preview live: `03-styleguide.html` (același folder).

---

## 1. Direcție

Nicobot vinde clinicilor un lucru greu de cumpărat: încredere într-un sistem automat care vorbește cu pacienți vulnerabili. Site-ul trebuie să arate ca un produs medical, nu ca un start-up AI: alb mult, un singur albastru ferm (cel din logo), un bleumarin adânc pentru autoritate, tipografie cu serif în titluri (registru academic/editorial, ca o publicație clinică) și un sans neutru pentru text și UI. Nu există gradiente, nu există umbre grele, nu există „creier luminos”. Dovada vine din conținut construit în HTML (conversație reală, panou de clinică, cifre, numele psihologilor), nu din fotografii stock. Totul este liniștit, aliniat pe grilă, cu borduri de 1 px în albastru-gri în loc de umbre.

**Mood keywords:** `clinic` · `sobru` · `verificabil`

---

## 2. Paletă

Construită în jurul albastrului din logo `#4361EE`. Bleumarinul este același hue (≈228°) întunecat, iar tentele deschise sunt tot din acest hue, nu gri neutru.

### 2.1 Tokens

| Token (Tailwind) | Hex | Rol |
|---|---|---|
| `brand-500` (= `brand`) | `#4361EE` | Albastrul logo-ului. Fundal butoane primare, iconuri, linkuri pe alb, focus ring. |
| `brand-700` | `#3450D4` | Hover buton primar; text link pe fundaluri tentate; eyebrow. |
| `brand-800` | `#2A42B5` | Active/pressed. |
| `brand-300` | `#9DB0FF` | Linkuri și eyebrow pe bleumarin. |
| `brand-100` | `#DCE4FB` | Fundal icon-chip în carduri; selected state. |
| `brand-50` | `#EDF1FD` | Tentă pentru pill/badge informativ, chat bubble „vizitator”. |
| `navy-900` (= `navy`) | `#0F1D4A` | Titluri (h1–h3), benzi CTA, footer. |
| `navy-800` | `#142353` | Fundal card pe bleumarin, hover pe navy. |
| `navy-700` | `#1A2B61` | Borduri pe fundal navy. |
| `navy-100` | `#C7D0EA` | Text secundar pe navy. |
| `navy-200` | `#A9B5DA` | Text terțiar / meta pe navy. |
| `ink-900` | `#111A33` | Text puternic în UI (cifre, nume, labels). |
| `ink-700` | `#3A4766` | **Text body implicit.** |
| `ink-500` | `#5C6885` | Text secundar, small, captions. |
| `ink-400` | `#8792AB` | Doar placeholder / decorativ (nu trece AA pentru text normal). |
| `clinical` | `#F3F6FC` | Fundal secțiuni alternate („tenta clinică”). NU `gray-50`. |
| `clinical-deep` | `#EAF0F9` | Fundal pentru elemente în interiorul unei secțiuni `clinical` (ex. trust strip). |
| `line` | `#DCE3F1` | Bordură 1 px implicită (carduri, nav, footer). |
| `line-strong` | `#C3CDE6` | Bordură la hover, separatoare în tabele/FAQ. |
| `sage-700` | `#116B60` | Accent secundar (text): badge „Verificat”, „Acreditat”, success. |
| `sage-600` | `#177B6E` | Icon success, fundal buton de confirmare (rar). |
| `sage-300` | `#7FD1C3` | Badge-uri trust pe bleumarin. |
| `sage-50` | `#E6F4F1` | Fundal badge trust / success. |
| `warn-700` / `warn-50` | `#9A5B00` / `#FFF4E0` | Avertisment. |
| `danger-700` / `danger-50` | `#B42318` / `#FEF0EE` | Eroare / „nu este serviciu de urgență”. |
| `white` | `#FFFFFF` | Fundal principal, carduri. |

Reguli: o singură culoare „activă” (brand) pe ecran; sage apare doar în badge-uri mici și stări de succes, niciodată în butoane principale sau titluri. Albastrul brand ca text se folosește doar pe alb; pe orice tentă se trece la `brand-700`.

### 2.2 Contrast WCAG (calculat)

| Text | Fundal | Raport | AA |
|---|---|---|---|
| `ink-900 #111A33` | alb | 17.22:1 | ✓ |
| `ink-700 #3A4766` | alb | 9.24:1 | ✓ |
| `ink-500 #5C6885` | alb | 5.56:1 | ✓ |
| `ink-400 #8792AB` | alb | 3.12:1 | ✗ text normal · ✓ doar large (≥24px) / decorativ |
| `ink-900` | `clinical #F3F6FC` | 15.91:1 | ✓ |
| `ink-700` | `clinical` | 8.53:1 | ✓ |
| `ink-500` | `clinical` | 5.14:1 | ✓ |
| `navy-900 #0F1D4A` | alb | 16.22:1 | ✓ |
| `navy-900` | `clinical` | 14.98:1 | ✓ |
| `brand-500 #4361EE` | alb | 5.02:1 | ✓ |
| alb | `brand-500` (buton primar) | 5.02:1 | ✓ |
| alb | `brand-700` (hover) | 6.47:1 | ✓ |
| `brand-700 #3450D4` | alb | 6.47:1 | ✓ |
| `brand-700` | `brand-50 #EDF1FD` | 5.73:1 | ✓ |
| `brand-500` | `brand-50` | 4.45:1 | ✗ — de aceea pe tente folosim `brand-700` |
| `brand-700` | `clinical` | 5.98:1 | ✓ |
| alb | `navy-900` | 16.22:1 | ✓ |
| `navy-100 #C7D0EA` | `navy-900` | 10.53:1 | ✓ |
| `navy-200 #A9B5DA` | `navy-900` | 7.96:1 | ✓ |
| `brand-300 #9DB0FF` | `navy-900` | 7.79:1 | ✓ |
| `sage-300 #7FD1C3` | `navy-900` | 9.12:1 | ✓ |
| `sage-700 #116B60` | alb | 6.37:1 | ✓ |
| `sage-700` | `sage-50 #E6F4F1` | 5.64:1 | ✓ |
| alb | `sage-600 #177B6E` | 5.13:1 | ✓ |
| `warn-700` | `warn-50` | 4.98:1 | ✓ |
| `danger-700` | `danger-50` | 5.92:1 | ✓ |

Borduri (`line` 1.29:1, `line-strong` 1.59:1) sunt non-text și intenționat discrete; pentru controale interactive (input, checkbox) bordura trebuie să fie `line-strong` + `ink-400` la minimum, iar focus ring `brand` (2 px) rezolvă cerința 3:1 pentru UI components.

---

## 3. Tipografie

**Pairing ales: Source Serif 4 (titluri) + Inter (text/UI).**

De ce: Source Serif 4 este un serif „de tranziție” sobru, desenat pentru text academic, cu axă de dimensiune optică (opsz) — la 56 px are contrast fin și arată ca o publicație medicală, nu ca un blog lifestyle (Fraunces e prea „wonky”, Newsreader prea ziar). Inter este neutru, excelent la 14–16 px, cu cifre tabulare pentru statistici. Contrastul serif/sans separă vizual „vocea instituției” (titluri) de „produs” (UI), iar wordmark-ul geometric din logo nu intră în concurență cu niciunul. Ambele au subsetul `latin-ext` (ș, ț, ă, â, î cu virgulă, nu sedilă) și greutăți variabile → un singur request.

```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Source+Serif+4:opsz,wght@8..60,500;8..60,600&display=swap" rel="stylesheet">
```
Google Fonts css2 livrează automat subsetul `latin-ext` prin `unicode-range`; nu mai există parametrul `subset=`. Verificare: „Programează o discuție cu psihologii noștri” trebuie să randeze ș/ț identic cu restul literelor.

### 3.1 Scara tipografică

| Stil | Font / weight | Mobil (size/lh) | Desktop ≥ md | Tracking | Culoare | Clase Tailwind |
|---|---|---|---|---|---|---|
| **h1** | Source Serif 4 · 600 | 36px / 1.1 | 56px / 1.05 | −0.02em | navy | `font-display font-semibold text-4xl md:text-[3.5rem] leading-[1.1] md:leading-[1.05] tracking-[-0.02em] text-navy` |
| **h2** | Source Serif 4 · 600 | 30px / 1.15 | 40px / 1.1 | −0.015em | navy | `font-display font-semibold text-3xl md:text-[2.5rem] leading-[1.15] md:leading-[1.1] tracking-[-0.015em] text-navy` |
| **h3** | Source Serif 4 · 600 | 22px / 1.3 | 26px / 1.25 | −0.01em | navy | `font-display font-semibold text-[1.375rem] md:text-[1.625rem] leading-[1.3] md:leading-[1.25] tracking-[-0.01em] text-navy` |
| **h4** | Inter · 600 | 17px / 1.4 | 18px / 1.4 | −0.01em | ink-900 | `font-sans font-semibold text-[1.0625rem] md:text-lg leading-[1.4] tracking-[-0.01em] text-ink-900` |
| **lead** | Inter · 400 | 18px / 1.6 | 20px / 1.6 | 0 | ink-700 | `text-lg md:text-xl leading-relaxed text-ink-700` |
| **body** | Inter · 400 | 16px / 1.65 | 16px / 1.65 | 0 | ink-700 | `text-base leading-[1.65] text-ink-700` (implicit pe `body`) |
| **small** | Inter · 400/500 | 14px / 1.5 | 14px / 1.5 | 0 | ink-500 | `text-sm leading-normal text-ink-500` |
| **eyebrow** | Inter · 600 | 12px / 1 | 13px / 1 | +0.12em, uppercase | brand-700 | `text-xs md:text-[0.8125rem] font-semibold uppercase tracking-eyebrow text-brand-700` |
| **stat** | Inter · 600, tabular | 32px / 1 | 40px / 1 | −0.02em | navy | `font-semibold tabular-nums text-[2rem] md:text-[2.5rem] leading-none tracking-[-0.02em] text-navy` |

Reguli: titlurile au `text-wrap: balance` (din CSS), paragrafele `text-wrap: pretty`; lățime maximă text 65ch (`max-w-prose`). Nu folosim weight 700+ nicăieri; 600 este maximul (sobrietate). Nu folosim italic în titluri.

---

## 4. Layout

- **Container:** `mx-auto w-full max-w-site px-5 sm:px-6 lg:px-8` → 1200 px conținut. Text-only: `max-w-narrow` (704 px). Paragraf: `max-w-prose` (65ch).
- **Ritm vertical secțiuni:** `py-16 md:py-24` (64/96 px). Hero: `pt-14 pb-16 md:pt-24 md:pb-28`. Bloc titlu → grilă: `mb-10 md:mb-14`. Eyebrow → h2: `mb-3`. h2 → lead: `mt-4`.
- **Grilă carduri:** `grid gap-5 md:gap-6 sm:grid-cols-2 lg:grid-cols-3`; pași numerotați `lg:grid-cols-4`; statistici `grid-cols-2 lg:grid-cols-4`.
- **Raze:** butoane/inputs/pills-mari `rounded-control` (10 px); carduri `rounded-card` (16 px); panouri mari (hero mock, CTA band) `rounded-panel` (20 px); badge-uri `rounded-full`. Niciodată `rounded-3xl`+ pe carduri.
- **Borduri > umbre:** `border border-line` pe carduri; hover `border-line-strong`. Umbră doar pe elemente „plutitoare”: `shadow-panel` (hero mock, mobile menu, dropdown). Fără `shadow-lg`/`shadow-xl`.
- **Spacing tokens:** padding card `p-6 md:p-7`; padding panou `p-6 md:p-8`; gap inline icon-text `gap-2`; stack în card `space-y-3`.
- **Benzi:** alb → clinical → alb → navy (CTA) → footer. Niciodată două secțiuni clinical consecutive.

---

## 5. Componente (clase exacte)

Convenție: `btn-*` nu există ca clase custom; totul este Tailwind. Iconurile sunt SVG inline (vezi §6) cu `class="h-5 w-5"` și `aria-hidden="true"`.

### 5.1 Top nav (sticky, alb, bordură 1 px)
```html
<header class="sticky top-0 z-40 border-b border-line bg-white/95 backdrop-blur-[2px]">
  <div class="mx-auto flex h-16 max-w-site items-center justify-between px-5 sm:px-6 lg:px-8">
    <a href="/" class="flex items-center" aria-label="Nicobot — acasă">
      <img src="/logo/logo-2.1.svg" alt="Nicobot" class="h-8 w-auto">
    </a>
    <nav class="hidden items-center gap-8 md:flex" aria-label="Principal">
      <a href="/" class="text-sm font-medium text-ink-700 hover:text-navy">Acasă</a>
      <a href="/gen-leads" class="text-sm font-medium text-ink-700 hover:text-navy">Pentru clinici</a>
      <a href="/chat" class="text-sm font-medium text-ink-700 hover:text-navy">Demo chat</a>
      <a href="/contact" class="text-sm font-medium text-ink-700 hover:text-navy">Contact</a>
    </nav>
    <div class="hidden md:block">
      <a href="https://calendly.com/claudiu-nicolaa/25min" class="inline-flex h-10 items-center gap-2 rounded-control bg-brand px-4 text-sm font-semibold text-white hover:bg-brand-700 active:bg-brand-800">Programează o discuție</a>
    </div>
    <button type="button" class="inline-flex h-10 w-10 items-center justify-center rounded-control text-ink-700 hover:bg-clinical md:hidden" aria-controls="mobile-menu" aria-expanded="false" data-menu-toggle>
      <span class="sr-only">Deschide meniul</span>
      <!-- icon: menu (data-icon-open) / x (data-icon-close, hidden) -->
    </button>
  </div>
  <!-- 5.2 Mobile menu -->
  <div id="mobile-menu" class="hidden border-t border-line bg-white md:hidden" data-menu>
    <nav class="mx-auto max-w-site space-y-1 px-5 py-4 sm:px-6" aria-label="Mobil">
      <a href="/" class="block rounded-control px-3 py-2.5 text-base font-medium text-ink-900 hover:bg-clinical">Acasă</a>
      <a href="/gen-leads" class="block rounded-control px-3 py-2.5 text-base font-medium text-ink-900 hover:bg-clinical">Pentru clinici</a>
      <a href="/chat" class="block rounded-control px-3 py-2.5 text-base font-medium text-ink-900 hover:bg-clinical">Demo chat</a>
      <a href="/contact" class="block rounded-control px-3 py-2.5 text-base font-medium text-ink-900 hover:bg-clinical">Contact</a>
      <a href="https://calendly.com/claudiu-nicolaa/25min" class="mt-3 flex h-11 items-center justify-center rounded-control bg-brand text-base font-semibold text-white hover:bg-brand-700">Programează o discuție</a>
    </nav>
  </div>
</header>
```
Link activ: adaugă `text-navy` + `aria-current="page"`. JS (în `main.css` nu, într-un `<script>` la final de pagină): toggle `hidden` pe `[data-menu]`, comută `aria-expanded`, schimbă iconul menu/x, închide pe `Escape`.

### 5.3 Hero B2B (două coloane)
```html
<section class="bg-hero border-b border-line">
  <div class="mx-auto grid max-w-site items-center gap-12 px-5 pt-14 pb-16 sm:px-6 md:pt-24 md:pb-28 lg:grid-cols-12 lg:gap-16 lg:px-8">
    <div class="lg:col-span-6">
      <p class="eyebrow">Pentru cabinete și clinici de psihoterapie</p>
      <h1 class="h1 mt-3">Primul contact cu pacientul, gestionat clinic — 24/7.</h1>
      <p class="lead mt-5 max-w-prose">Nicobot preia conversația inițială pe site-ul clinicii, înțelege nevoia și propune terapeutul potrivit, după regulile stabilite de voi.</p>
      <div class="mt-8 flex flex-col gap-3 sm:flex-row">
        <!-- btn-primary / btn-secondary = pseudo-cod; se înlocuiesc cu stringurile din §5.5, mărimea lg -->
        <a class="btn-primary">Programează o discuție <svg arrow-right/></a>
        <a class="btn-secondary">Vezi demo-ul</a>
      </div>
      <ul class="mt-8 flex flex-wrap gap-x-6 gap-y-2 text-sm text-ink-500">
        <li class="inline-flex items-center gap-2"><svg shield-check class="h-4 w-4 text-sage-600"/> Dezvoltat cu psihologi acreditați</li>
        <li ...>Date în UE · GDPR</li>
        <li ...>Fără instalare pe site</li>
      </ul>
    </div>
    <div class="lg:col-span-6"><!-- proof panel --></div>
  </div>
</section>
```
Lățime coloană copy: `lg:col-span-6` (nu 7/5 — panelul are nevoie de aer). **Proof panel** = card de conversație construit în HTML, fără imagini:
- container `rounded-panel border border-line bg-white shadow-panel`;
- bară de titlu `flex items-center gap-3 border-b border-line px-5 py-3.5`: punct verde `h-2 w-2 rounded-full bg-sage-600` + „Nicobot · asistent clinică” `text-sm font-semibold text-ink-900` + badge dreapta „Confidențial” (sage);
- 3–4 bule: vizitator `ml-auto max-w-[80%] rounded-card rounded-br-[4px] bg-brand-50 px-4 py-3 text-[15px] text-ink-900`, Nicobot `max-w-[85%] rounded-card rounded-bl-[4px] border border-line bg-white px-4 py-3 text-[15px] text-ink-700`;
- „cardul de potrivire” la final: `rounded-card border border-sage-300/60 bg-sage-50 p-4` cu eyebrow „Terapeut propus”, nume + specializare, „joi, 14:00 · online”, și două butoane mici (primar + ghost);
- sub panou, un rând de 3 **stat tiles** mici (`grid grid-cols-3 divide-x divide-line rounded-card border border-line bg-white`).
Fundal secțiune: `.bg-hero` (tentă radială, §7) + opțional `.bg-bars` pe coloana dreaptă.

### 5.4 Eyebrow
`<p class="text-xs font-semibold uppercase tracking-eyebrow text-brand-700 md:text-[0.8125rem]">Pentru clinici</p>` — pe navy: `text-brand-300`. Variantă cu linie: `inline-flex items-center gap-2 before:h-px before:w-6 before:bg-brand`.

### 5.5 Butoane
- **Primar:** `inline-flex h-11 items-center justify-center gap-2 rounded-control bg-brand px-5 text-[15px] font-semibold text-white transition-colors hover:bg-brand-700 active:bg-brand-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2`
- **Secundar (outline):** `inline-flex h-11 items-center justify-center gap-2 rounded-control border border-line-strong bg-white px-5 text-[15px] font-semibold text-navy transition-colors hover:border-navy hover:bg-clinical active:bg-clinical-deep focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2`
- **Ghost:** `inline-flex h-11 items-center gap-2 rounded-control px-3 text-[15px] font-semibold text-brand-700 transition-colors hover:bg-brand-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2` (săgeata se mută 2 px la hover: `[&>svg]:transition-transform hover:[&>svg]:translate-x-0.5`)
- **Pe navy:** primar devine `bg-white text-navy hover:bg-brand-50`; secundar `border-navy-700 text-white hover:bg-navy-800`.
- Mărimi: `sm` → `h-9 px-3.5 text-sm`; `lg` → `h-12 px-6 text-base`. Icon mereu la dreapta (`h-4 w-4`), cu excepția telefonului.

### 5.6 Feature card cu icon
```html
<article class="group rounded-card border border-line bg-white p-6 transition-colors hover:border-line-strong md:p-7">
  <div class="inline-flex h-11 w-11 items-center justify-center rounded-control bg-brand-50 text-brand"><svg class="h-5 w-5" …/></div>
  <h3 class="h4 mt-5">Triaj conversațional</h3>
  <p class="mt-2 text-[15px] leading-relaxed text-ink-700">Nicobot clarifică motivul vizitei și urgența, fără să pună diagnostic.</p>
</article>
```
Pe fundal `clinical` cardul rămâne alb cu `border-line`.

### 5.7 Pas numerotat
```html
<li class="relative pl-14">
  <span class="absolute left-0 top-0 inline-flex h-10 w-10 items-center justify-center rounded-full border border-line bg-white font-display text-lg font-semibold text-brand">1</span>
  <h3 class="h4">Instalați scriptul</h3>
  <p class="mt-1.5 text-[15px] text-ink-700">O linie de cod pe site-ul clinicii. Noi configurăm restul.</p>
</li>
```
În grilă orizontală (`lg:grid-cols-4`) conectăm cercurile cu `lg:before:absolute lg:before:left-10 lg:before:top-5 lg:before:h-px lg:before:w-[calc(100%-2.5rem)] lg:before:bg-line` (ultimul element `lg:last:before:hidden`).

### 5.8 Stat / proof tile
```html
<div class="rounded-card border border-line bg-white p-5 md:p-6">
  <p class="stat">1.000+</p>
  <p class="mt-2 text-sm text-ink-500">ședințe intermediate de partenerul Calmly în 2024</p>
</div>
```
Variantă compactă (sub hero): `grid grid-cols-3 divide-x divide-line rounded-card border border-line bg-white [&>div]:px-4 [&>div]:py-3`. Cifre cu `tabular-nums`. Sursa cifrei se scrie mereu (credibilitate).

### 5.9 Quote / press card
```html
<figure class="rounded-card border border-line bg-white p-6 md:p-8">
  <div class="flex items-center gap-3">
    <span class="inline-flex h-9 items-center rounded-control border border-line bg-clinical px-3 text-xs font-semibold uppercase tracking-eyebrow text-ink-700">Ziarul Financiar</span>
    <span class="text-sm text-ink-500">Start-up Pitch · 2024</span>
  </div>
  <blockquote class="mt-5 font-display text-xl leading-snug text-navy md:text-2xl">„Anul acesta am intermediat peste 1.000 de ședințe de terapie.”</blockquote>
  <figcaption class="mt-4 text-sm text-ink-500">Calmly, partener care integrează Nicobot sub numele „Camy” · <a class="link">Citește articolul</a></figcaption>
</figure>
```
Fără favicon-uri externe; numele publicației ca „logo tipografic” într-un chip.

### 5.10 FAQ accordion (`<details>`)
```html
<div class="divide-y divide-line border-y border-line">
  <details class="faq group py-5">
    <summary class="flex cursor-pointer list-none items-center justify-between gap-6 text-left">
      <span class="h4">Nicobot pune diagnostice?</span>
      <svg chevron-down class="h-5 w-5 shrink-0 text-ink-500 transition-transform group-open:rotate-180"/>
    </summary>
    <div class="mt-3 max-w-prose text-[15px] leading-relaxed text-ink-700">Nu. Nicobot face triaj și orientare; diagnosticul și tratamentul rămân ale psihologului.</div>
  </details>
</div>
```
Markerul nativ se ascunde din CSS (§9). `summary` are focus-visible ring.

### 5.11 CTA band (navy)
```html
<section class="bg-navy bg-bars-dark">
  <div class="mx-auto max-w-site px-5 py-16 sm:px-6 md:py-20 lg:px-8">
    <div class="grid items-center gap-8 lg:grid-cols-12">
      <div class="lg:col-span-8">
        <p class="eyebrow text-brand-300">Discuție de 25 de minute</p>
        <h2 class="h2 mt-3 text-white">Vedeți cum ar răspunde Nicobot pe site-ul clinicii dumneavoastră.</h2>
        <p class="mt-4 max-w-prose text-lg text-navy-100">Fără obligații. Configurăm un demo cu regulile voastre de programare.</p>
      </div>
      <div class="flex flex-col gap-3 sm:flex-row lg:col-span-4 lg:justify-end">
        <a class="btn-primary-on-navy">Programează o discuție</a>
        <a class="btn-secondary-on-navy">contact@nicobot.ro</a>
      </div>
    </div>
  </div>
</section>
```

### 5.12 Footer (navy)
`<footer class="bg-navy text-navy-100">` → container `py-14` → grilă `grid gap-10 md:grid-cols-12`: coloana 1 (`md:col-span-5`) logo alb (`<img … class="h-7 w-auto brightness-0 invert">`) + descriere `text-sm text-navy-200 max-w-xs` + badge „Dezvoltat alături de psihologi acreditați” (sage pe navy); coloanele 2–3 (`md:col-span-2` fiecare) liste `text-sm` cu `hover:text-white`; coloana 4 (`md:col-span-3`) contact. Rând final `mt-12 flex flex-col gap-3 border-t border-navy-700 pt-6 text-xs text-navy-200 sm:flex-row sm:justify-between` cu © + disclaimer „Nicobot nu este un serviciu de urgență. În caz de urgență sunați la 112.”

### 5.13 Badge / pill
- Info: `inline-flex items-center gap-1.5 rounded-full bg-brand-50 px-2.5 py-1 text-xs font-semibold text-brand-700`
- Trust/success: `… bg-sage-50 text-sage-700` + icon `shield-check h-3.5 w-3.5`
- Neutru: `… border border-line bg-white text-ink-700`
- Pe navy: `… bg-navy-800 text-sage-300 ring-1 ring-inset ring-navy-700`
- Avertisment: `… bg-warn-50 text-warn-700`; Eroare: `… bg-danger-50 text-danger-700`

### 5.14 Trust strip
```html
<section class="border-y border-line bg-clinical">
  <div class="mx-auto flex max-w-site flex-col items-center gap-5 px-5 py-8 sm:px-6 md:flex-row md:justify-between lg:px-8">
    <p class="inline-flex items-center gap-2 text-sm font-medium text-ink-900"><svg shield-check class="h-5 w-5 text-sage-600"/> Dezvoltat alături de psihologi acreditați</p>
    <ul class="flex flex-wrap items-center justify-center gap-x-8 gap-y-3">
      <li class="font-display text-lg font-semibold text-ink-400">Calmly</li>
      <li class="font-display text-lg font-semibold text-ink-400">Ziarul Financiar</li>
      <li class="…">Camy</li>
    </ul>
  </div>
</section>
```
Logo-urile partenerilor ca wordmark tipografic în `ink-400` (monocrom, 3.12:1 e acceptabil pentru logo-uri decorative); când există SVG-uri oficiale: `h-6 w-auto opacity-60 grayscale hover:opacity-100`.

---

## 6. Iconografie

**Lucide** (ISC), SVG inline, `viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"`, mărime implicită `h-5 w-5`, în carduri în chip `h-11 w-11 bg-brand-50 text-brand`. Fără biblioteci JS de iconuri; copiază path-urile (toate sunt în `03-styleguide.html`, secțiunea Iconuri).

| Icon | Folosire |
|---|---|
| `shield-check` | confidențialitate, „verificat”, trust strip |
| `lock` | GDPR, date în UE |
| `heart-pulse` | sănătate mintală / clinic |
| `message-circle` | conversație, chat |
| `clock` | 24/7, timp de răspuns |
| `users` | clinici, echipe de psihologi |
| `calendar` | programare |
| `check` | liste de beneficii |
| `arrow-right` | CTA, linkuri |
| `file-text` | protocoale, documentație |
| `sparkles` | „asistat AI” (sobru, mic, niciodată ca hero) |
| `phone` | contact, 112 |
| `menu` / `x` / `chevron-down` | UI (nav, FAQ) |

---

## 7. Imagini

Politică: **fără fotografii stock** în v1. Dovada vizuală este produsul (chat mock), cifrele și numele. Când apar fotografii (echipa, psihologii parteneri) — portrete reale, fundal neutru, `rounded-card`, fără filtre.

Trei tratamente de fundal, toate în `main.css`:

**A. `.bg-hero` — tentă radială discretă** (alb + brand 12% + sage 7%):
```css
.bg-hero{
  background:
    radial-gradient(900px 480px at 88% -10%, rgba(67,97,238,.12), transparent 70%),
    radial-gradient(640px 420px at -8% 100%, rgba(23,123,110,.07), transparent 70%),
    #fff;
}
```

**B. `.bg-bars` — pattern derivat din barele rotunjite ale logo-ului** (bară 6×44 px, rază 3, două pe un tile 56×112, decalate ca în „N”; opacitate 9%), estompat radial ca să nu concureze cu textul:
```css
.bg-bars{
  background-image:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='56' height='112' viewBox='0 0 56 112'%3E%3Crect x='12' y='8' width='6' height='44' rx='3' fill='%234361EE' fill-opacity='.09'/%3E%3Crect x='38' y='60' width='6' height='44' rx='3' fill='%234361EE' fill-opacity='.09'/%3E%3C/svg%3E");
  background-size:56px 112px;
  -webkit-mask-image:radial-gradient(70% 70% at 70% 35%, #000 20%, transparent 80%);
          mask-image:radial-gradient(70% 70% at 70% 35%, #000 20%, transparent 80%);
}
.bg-bars-dark{ /* aceeași geometrie pe navy, bare albe 6% */ … }
```
Se aplică pe un `<div class="absolute inset-0 -z-10 bg-bars" aria-hidden="true">` în interiorul unei secțiuni `relative`, nu direct pe secțiune (ca masca să nu taie conținutul).

**C. `.bg-grid-faint`** — grilă 1 px `line` la 48 px pentru secțiunea „Cum funcționează” (opțional).

---

## 8. Motion

- Tranziții doar pe culoare/bordură: `transition-colors duration-150`. Fără `translateY` pe carduri, fără scale.
- Hover: buton primar → `brand-700`; secundar → `border-navy bg-clinical`; card → `border-line-strong`; link → `text-navy` + `underline underline-offset-4 decoration-line-strong`.
- Săgeata CTA: `translate-x-0.5` la hover (150 ms).
- FAQ: chevron `rotate-180` 200 ms; conținutul se deschide fără animație (nativ).
- **O singură revelare:** `.reveal` → la intrare în viewport (IntersectionObserver, threshold .15) primește `.is-visible`: opacity 0→1, translateY 8px→0, 500 ms, `ease-out`, întârziere în trepte de 60 ms pentru copii (`--reveal-i`). Se aplică doar pe carduri și pe hero mock, nu pe text.
- `@media (prefers-reduced-motion: reduce)` dezactivează complet revelarea, tranzițiile și `scroll-behavior:smooth`.

---

## 9. Cod

### 9.1 Bloc `tailwind.config` (în `<head>`, imediat după `<script src="https://cdn.tailwindcss.com"></script>`)
```html
<script>
tailwind.config = {
  theme: {
    extend: {
      colors: {
        brand: { DEFAULT:'#4361EE', 50:'#EDF1FD', 100:'#DCE4FB', 200:'#BFCCF8', 300:'#9DB0FF', 400:'#6E86F3', 500:'#4361EE', 600:'#4361EE', 700:'#3450D4', 800:'#2A42B5', 900:'#213590' },
        navy:  { DEFAULT:'#0F1D4A', 50:'#E8ECF7', 100:'#C7D0EA', 200:'#A9B5DA', 700:'#1A2B61', 800:'#142353', 900:'#0F1D4A', 950:'#0A1436' },
        ink:   { 900:'#111A33', 700:'#3A4766', 500:'#5C6885', 400:'#8792AB' },
        clinical: { DEFAULT:'#F3F6FC', deep:'#EAF0F9' },
        line:  { DEFAULT:'#DCE3F1', strong:'#C3CDE6' },
        sage:  { 50:'#E6F4F1', 100:'#C8E8E1', 300:'#7FD1C3', 600:'#177B6E', 700:'#116B60' },
        warn:  { 50:'#FFF4E0', 700:'#9A5B00' },
        danger:{ 50:'#FEF0EE', 700:'#B42318' }
      },
      fontFamily: {
        display: ['"Source Serif 4"', 'Georgia', '"Times New Roman"', 'serif'],
        sans: ['Inter', 'system-ui', '-apple-system', '"Segoe UI"', 'Roboto', 'sans-serif']
      },
      borderRadius: { control:'10px', card:'16px', panel:'20px' },
      boxShadow: {
        hairline: '0 1px 2px 0 rgba(15,29,74,0.06)',
        panel: '0 1px 2px rgba(15,29,74,0.04), 0 12px 32px -12px rgba(15,29,74,0.18)',
        'panel-dark': '0 1px 2px rgba(0,0,0,0.2), 0 16px 40px -16px rgba(0,0,0,0.5)'
      },
      maxWidth: { site:'1200px', narrow:'44rem', prose:'65ch' },
      letterSpacing: { eyebrow:'0.12em' }
    }
  }
}
</script>
```

### 9.2 `/styles/main.css` (complet)
```css
/* Nicobot — main.css v1 (direcția „Clinic și de încredere”). Se încarcă DUPĂ Tailwind CDN. */

:root{
  --brand:#4361EE; --brand-700:#3450D4; --navy:#0F1D4A;
  --ink-900:#111A33; --ink-700:#3A4766; --ink-500:#5C6885;
  --clinical:#F3F6FC; --line:#DCE3F1; --line-strong:#C3CDE6; --sage-600:#177B6E;
  --font-display:"Source Serif 4",Georgia,"Times New Roman",serif;
  --font-sans:Inter,system-ui,-apple-system,"Segoe UI",Roboto,sans-serif;
}

/* ---------- base ---------- */
html{ -webkit-text-size-adjust:100%; scroll-padding-top:5rem; }
@media (prefers-reduced-motion:no-preference){ html{ scroll-behavior:smooth; } }
body{
  font-family:var(--font-sans); font-size:1rem; line-height:1.65; color:var(--ink-700);
  background:#fff; -webkit-font-smoothing:antialiased; -moz-osx-font-smoothing:grayscale;
  font-feature-settings:"cv11","ss01"; /* Inter: a/t alternates, mai „tipografic” */
}
h1,h2,h3,.font-display{ font-family:var(--font-display); font-optical-sizing:auto; }
h1,h2,h3,h4{ color:var(--navy); text-wrap:balance; }
h4{ color:var(--ink-900); }
p{ text-wrap:pretty; }
strong{ font-weight:600; color:var(--ink-900); }
::selection{ background:#DCE4FB; color:var(--navy); }
img,svg{ display:block; }
.tabular{ font-variant-numeric:tabular-nums; }

/* ---------- utilitare tipografice (opționale, scurtcircuit pentru clasele lungi) ---------- */
.eyebrow{ font-size:.75rem; font-weight:600; letter-spacing:.12em; text-transform:uppercase; color:var(--brand-700); }
@media (min-width:768px){ .eyebrow{ font-size:.8125rem; } }
.h1{ font-family:var(--font-display); font-weight:600; font-size:2.25rem; line-height:1.1; letter-spacing:-.02em; color:var(--navy); }
.h2{ font-family:var(--font-display); font-weight:600; font-size:1.875rem; line-height:1.15; letter-spacing:-.015em; color:var(--navy); }
.h3{ font-family:var(--font-display); font-weight:600; font-size:1.375rem; line-height:1.3; letter-spacing:-.01em; color:var(--navy); }
.h4{ font-family:var(--font-sans); font-weight:600; font-size:1.0625rem; line-height:1.4; letter-spacing:-.01em; color:var(--ink-900); }
.lead{ font-size:1.125rem; line-height:1.6; color:var(--ink-700); }
.stat{ font-weight:600; font-variant-numeric:tabular-nums; font-size:2rem; line-height:1; letter-spacing:-.02em; color:var(--navy); }
@media (min-width:768px){
  .h1{ font-size:3.5rem; line-height:1.05; } .h2{ font-size:2.5rem; line-height:1.1; }
  .h3{ font-size:1.625rem; line-height:1.25; } .h4{ font-size:1.125rem; } .lead{ font-size:1.25rem; } .stat{ font-size:2.5rem; }
}
.link{ color:var(--brand-700); font-weight:500; text-decoration:underline; text-underline-offset:4px; text-decoration-color:var(--line-strong); }
.link:hover{ color:var(--navy); text-decoration-color:currentColor; }

/* ---------- focus ---------- */
:focus{ outline:none; }
:focus-visible{ outline:2px solid var(--brand); outline-offset:2px; border-radius:6px; }
.on-navy :focus-visible{ outline-color:#9DB0FF; }

/* ---------- fundaluri ---------- */
.bg-hero{
  background:
    radial-gradient(900px 480px at 88% -10%, rgba(67,97,238,.12), transparent 70%),
    radial-gradient(640px 420px at -8% 100%, rgba(23,123,110,.07), transparent 70%),
    #fff;
}
.bg-bars{
  background-image:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='56' height='112' viewBox='0 0 56 112'%3E%3Crect x='12' y='8' width='6' height='44' rx='3' fill='%234361EE' fill-opacity='.09'/%3E%3Crect x='38' y='60' width='6' height='44' rx='3' fill='%234361EE' fill-opacity='.09'/%3E%3C/svg%3E");
  background-size:56px 112px;
  -webkit-mask-image:radial-gradient(70% 70% at 70% 35%, #000 20%, transparent 80%);
          mask-image:radial-gradient(70% 70% at 70% 35%, #000 20%, transparent 80%);
}
.bg-bars-dark{
  background-image:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='56' height='112' viewBox='0 0 56 112'%3E%3Crect x='12' y='8' width='6' height='44' rx='3' fill='%23ffffff' fill-opacity='.06'/%3E%3Crect x='38' y='60' width='6' height='44' rx='3' fill='%23ffffff' fill-opacity='.06'/%3E%3C/svg%3E");
  background-size:56px 112px;
  -webkit-mask-image:radial-gradient(60% 90% at 100% 50%, #000 10%, transparent 75%);
          mask-image:radial-gradient(60% 90% at 100% 50%, #000 10%, transparent 75%);
}
.bg-grid-faint{
  background-image:linear-gradient(to right, var(--line) 1px, transparent 1px), linear-gradient(to bottom, var(--line) 1px, transparent 1px);
  background-size:48px 48px;
  -webkit-mask-image:radial-gradient(80% 80% at 50% 0%, #000 30%, transparent 90%);
          mask-image:radial-gradient(80% 80% at 50% 0%, #000 30%, transparent 90%);
}

/* ---------- details / summary (FAQ) ---------- */
details.faq summary{ list-style:none; }
details.faq summary::-webkit-details-marker{ display:none; }
details.faq summary::marker{ content:""; }
details.faq summary svg{ transition:transform .2s ease; }
details.faq[open] summary svg{ transform:rotate(180deg); }
details.faq summary:focus-visible{ outline:2px solid var(--brand); outline-offset:4px; border-radius:6px; }

/* ---------- chat mock ---------- */
.bubble-user{ margin-left:auto; max-width:80%; border-radius:16px 16px 4px 16px; background:#EDF1FD; color:var(--ink-900); padding:.75rem 1rem; font-size:.9375rem; line-height:1.5; }
.bubble-bot{ max-width:85%; border-radius:16px 16px 16px 4px; background:#fff; border:1px solid var(--line); color:var(--ink-700); padding:.75rem 1rem; font-size:.9375rem; line-height:1.5; }

/* ---------- motion ---------- */
.reveal{ opacity:0; transform:translateY(8px); transition:opacity .5s ease-out, transform .5s ease-out; transition-delay:calc(var(--reveal-i,0) * 60ms); }
.reveal.is-visible{ opacity:1; transform:none; }
@media (prefers-reduced-motion:reduce){
  *,*::before,*::after{ animation:none !important; transition:none !important; }
  .reveal{ opacity:1; transform:none; }
  html{ scroll-behavior:auto; }
}
```

### 9.3 Snippet JS (la final de `<body>`, în fiecare pagină sau în `nav.html`)
```html
<script>
(function(){
  var t=document.querySelector('[data-menu-toggle]'),m=document.querySelector('[data-menu]');
  if(t&&m){ t.addEventListener('click',function(){
    var open=m.classList.toggle('hidden')===false; t.setAttribute('aria-expanded',open);
    t.querySelector('[data-icon-open]').classList.toggle('hidden',open);
    t.querySelector('[data-icon-close]').classList.toggle('hidden',!open);
  });
  document.addEventListener('keydown',function(e){ if(e.key==='Escape'&&!m.classList.contains('hidden')) t.click(); }); }
  if('IntersectionObserver' in window && !matchMedia('(prefers-reduced-motion: reduce)').matches){
    var io=new IntersectionObserver(function(es){ es.forEach(function(e){ if(e.isIntersecting){ e.target.classList.add('is-visible'); io.unobserve(e.target);} }); },{threshold:.15});
    document.querySelectorAll('.reveal').forEach(function(el){ io.observe(el); });
  } else { document.querySelectorAll('.reveal').forEach(function(el){ el.classList.add('is-visible'); }); }
})();
</script>
```

### 9.4 Checklist de implementare
1. Înlocuiește Tailwind 2 CDN cu `<script src="https://cdn.tailwindcss.com"></script>` + blocul config (§9.1); apoi `<link href="/styles/main.css">`.
2. Fonturile (§3) înainte de Tailwind.
3. Șterge `.bg-gradient-primary`, `.hover-transition` și clasele `.bg-primary/.text-primary` vechi; folosește `bg-brand/text-brand`.
4. Logo în nav: `h-8 w-auto` (nu `w-42 h-12`); favicon rămâne `/logo/n-2.ico`.
5. `html lang="ro"`, `meta theme-color #0F1D4A`.
6. Verifică diacriticele cu virgulă (ș ț) în tot copy-ul.
