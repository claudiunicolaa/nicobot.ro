# Nicobot.ro — Research memo: credibility patterns for a B2B-first AI wellbeing assistant

Research Lead, 2026-10-26. Method: web search on 14 reference sites (Wysa, Woebot Health, Limbic, Headspace for Organizations, Calm Business, Kooth, ieso/Mindler, Spring Health, Lyra, Calmly, Hilio, Therapia, Psiholog.ro, Clinica Oana Nicolau) plus the current nicobot.ro source. Direct page fetches were blocked by the sandbox proxy, so hero wording comes from indexed copy and press; treat exact strings as approximate and Romanian-site notes as partial.

## 1. Recurring patterns on credible sites

1. **One-line hero naming the buyer and the outcome, not the technology.** Limbic: "The most proven AI in mental healthcare"; Wysa for Work: "Mental health support that meets people where they are"; Lyra: "The most comprehensive mental health benefit". Nobody leads with "chatbot". Nicobot's current hero ("Descoperă Nicobot") names nothing.
2. **One proof word in the subheadline, evidence further down.** Wysa: "Anonymous, clinically evidenced and completely unlimited"; Limbic cites a Nature Medicine paper and NHS case studies; ieso: "BABCP accredited therapists" plus a BJPsych Open study.
3. **Low-commitment, demo-framed B2B CTA.** Headspace: "Request a demo"; Calm: "Curious how Calm works?"; Lyra: "Request a quote". Nicobot's "Programează o discuție de 20 de minute" already fits; keep it.
4. **Numbers are verifiable and attributed.** Calm "3,500+ organizations", Headspace "4,000+", Limbic "93% accuracy / ~400,000 assessments", Calmly "peste 1.000 de ședințe, 21 terapeuți" (ZF). Each is a count the company owns or a cited study; never "thousands of happy users".
5. **Security/regulatory badges get their own quiet strip, not the hero.** Wysa: ISO 27001/27701, NHS DCB0129, ORCHA; Limbic: UKCA Class IIa; Kooth: BACP accreditation. Placed after the product explanation as a logo row or "Safety & privacy" section.
6. **"Human in the loop" is explicit.** Limbic: AI "supporting therapists rather than replacing the human-led assessment"; Kooth: "every chat is checked by professionals"; Calmly on Camy: "creat și validat de psihologi, care nu înlocuiește terapia". For clinic buyers this is the deciding reassurance: the tool extends the practice, it does not compete with it.
7. **Dual audience is solved by routing, not mixing.** Wysa, Headspace, Calm, Woebot split the nav (Individuals / Work / Health Systems) with separate landing pages; Woebot shut its consumer app (June 2025) to go enterprise-only; Hilio says "for individual users and for companies" and then separates. The homepage serves the primary buyer; the other audience gets one clear link.
8. **Press and partners as one named row.** Hilio names Raiffeisen, Allianz, Mastercard; Spring Health names Microsoft, Target. One or two real logos with a sentence each beat a wall of greyed logos.
9. **Palette: white, one deep blue/teal, generous whitespace.** Limbic, ieso, Spring Health and Lyra use white backgrounds with a saturated blue/teal accent and a single warm highlight; gradients and oranges belong to the consumer brands (Calm, Headspace, Wysa). Behavioral-health marketing guidance converges on cool palettes and calm typography.
10. **Imagery: product UI or real people, not stock "AI".** Limbic and ieso show product screens and clinician photos; several behavioral-health marketing sources report that staged stock and AI-generated imagery read as inauthentic and lower inquiries.
11. **Plain-language privacy and credentials near the CTA.** Wysa: "Anonymous"; Kooth: "free, safe, anonymous"; Calmly, Hilio, Therapia all lean on "psihologi acreditați / atestați de Colegiul Psihologilor", the single most recognised credential in Romania. Use that exact wording.
12. **"How it works" in 3 steps before contact.** Headspace, Calm Business, Limbic (intake → triage → therapy) and Nicobot's gen-leads page do this. Keep it, but make the steps concrete (where the widget sits, what the clinic sees, what the patient sees).

## 2. Trust signals Nicobot can use today, and what not to fake

**Usable now (verified in brief or repo):**
- "Dezvoltat împreună cu psihologi acreditați" — already in copy; add how (feedback on responses during development). Never "validat clinic" or "testat clinic"; there is no study.
- Partner Calmly: real and public; the ZF article (zf.ro/zf-it-generation/…-22806068) confirms Nicobot is integrated as "Camy". Reuse Calmly's own framing ("creat și validat de psihologi, nu înlocuiește terapia").
- Ziarul Financiar: one logo, one quote, one link, labelled honestly as the partner's interview (the current press component does this).
- Free demo chat: the strongest live signal for a clinic director ("încearcă-l în 2 minute, fără cont"). Make it prominent on the Business page.
- GDPR: the privacy policy already states consent basis, no marketing/profiling, no third-party sharing.
- Calendly 20–25 min call, named founder email, Instagram: small but real.

**Do NOT claim without verification:**
- "Date găzduite în UE". The privacy page says Nicobot is "construit pe baza tehnologiei OpenAI"; unless the client confirms EU data residency for the OpenAI API and the api.vorbarie.ro backend, say "conform GDPR" and "mesajele nu sunt folosite în alte scopuri", not "stocate în UE".
- Any number (users, conversations, clinics, satisfaction %). None are public. Calmly's "1.000+ ședințe" only when attributed to Calmly.
- Testimonials: none exist. Use the ZF quote or an honest "primii parteneri" invitation instead.
- Certifications: no ISO 27001, no CE/UKCA, no CPR endorsement (CPR accredits people, not products); do not use CPR's logo.
- "Terapie", "diagnostic", "tratament" as what the product does.
- Also: the chat is an iframe on vorbarie.ro, a different domain, which a clinic buyer will notice. Either name it ("platforma tehnică Vorbărie") or move the chat UI to nicobot.ro.

## 3. Recommended page order

**Homepage (B2B-first)**
1. Hero: headline naming clinics + outcome (e.g. "Asistentul AI pentru cabinetele de psihoterapie, construit cu psihologi acreditați"); subhead with the human-in-the-loop promise; primary CTA "Programează o discuție de 20 min", secondary "Încearcă demo-ul gratuit". Rationale: pattern 1–3; the free chat doubles as the demo for buyers.
2. Proof strip: "Dezvoltat cu psihologi acreditați · Partener Calmly · Apărut în Ziarul Financiar · Conform GDPR". Rationale: pattern 5/8, all four are real.
3. What it does for a clinic (3 cards: preia primul contact 24/7, orientează spre terapeutul potrivit, respectă regulile cabinetului). Rationale: existing "Beneficii pentru cabinete" content, reframed as outcomes.
4. How it works, 3 steps (discuție → plan de implementare → monitorizare), already on gen-leads. Rationale: pattern 12.
5. Safety & ethics block: "Nu înlocuiește terapia", crisis routing, confidentiality, psychologists' role. Rationale: pattern 6; for clinic directors this is the deciding section.
6. Partner case: Calmly/Camy with the ZF quote. Rationale: pattern 8.
7. Secondary audience band: "Ești o persoană care caută sprijin? Încearcă Nicobot gratuit" → /chat. Rationale: pattern 7, routing not mixing.
8. Final CTA + contact; footer with privacy, contact, crisis numbers.

**Business page (/gen-leads → suggest /business or /cabinete)**
1. Hero with the Calendly CTA and a one-line "Ce primești în 20 de minute".
2. The problem clinic directors recognise (missed first contacts, after-hours messages, intake triage) — keep it short, no invented stats.
3. What the integration looks like (website widget / social page; what the patient sees; what the clinic receives). Product screenshot, not an illustration.
4. Clinical safeguards: psychologists' involvement, scope limits, crisis protocol, data handling, "tu stabilești regulile".
5. How we work together (3 steps, existing).
6. Partner proof (Calmly + ZF).
7. FAQ (6–8 questions: cost model, GDPR, what happens in a crisis, can it book appointments, does it diagnose, who owns the data).
8. Calendly CTA repeated + email.

## 4. Anti-patterns for this niche

- Stock "AI brain", glowing neural nets, robots, purple-to-cyan gradients: generic SaaS, the opposite of the requested "clinic" tone.
- Overpromising: "terapeut virtual", "tratăm anxietatea", "înlocuiește psihologul". ZF's own AI-therapy coverage stresses such tools "nu sunt specialiști… nu sunt acreditate"; the market is primed to distrust this.
- No crisis disclaimer: the current site has none anywhere. Serious omission for a product handling emotional conversations.
- Fake or vague numbers, fake client logos, "trusted by 100+ clinics".
- Mixing both audiences in the hero (the current site does: consumer hero, business section, consumer CTA).
- Urgency and dark patterns ("doar 3 locuri", countdowns).
- Playful mascot or chatty copy on B2B pages; warmth belongs in the end-user chat, not the clinic pitch.
- Clinic-facing demo on a third-party domain with no explanation (§2).

## 5. Compliance / ethics copy notes

- **Scope statement, everywhere the chat is offered:** "Nicobot nu înlocuiește psihoterapia, consilierea psihologică sau un diagnostic medical. Este un asistent conversațional de sprijin emoțional, dezvoltat împreună cu psihologi acreditați." Mirror Calmly's public framing of Camy for consistency.
- **AI disclosure:** state plainly that the user talks to an AI, not a person (EU AI Act Art. 50 transparency duty for chatbots applies from 2 Aug 2026 per secondary sources; verify against Regulation 2024/1689 text). One sentence in the chat intro and the footer suffices.
- **Crisis block (verify status with each operator before launch; search evidence as of Oct 2026):**
  - **112** — urgențe (immediate danger). Certain.
  - **Telefonul Copilului 116 111** — copii și adolescenți; gratuit; operated by Asociația Telefonul Copilului; Ministry of Health protocol signed Feb 2026. Hours: older sources say 08:00–24:00; confirm on telefonulcopilului.ro.
  - **DepreHUB 0374 456 420** — adulți, non-stop, gratuit, confidențial (per findahelpline.com and a Metrorex campaign); teen line 0374 461 461. Confirm on deprehub.ro.
  - **TelVerde Antisuicid 0800 801 200** — Alianța Română de Prevenție a Suicidului; sources conflict on hours (19:00–07:00 daily vs. weekend nights only). Publish the number with "verifică programul" or confirm with ARPS first.
  - **116 123** — European emotional-support number, assigned in Romania by ANCOM, free; operator and national coverage unconfirmed. Do not list unless verified.
  Recommended copy: "Dacă ești în pericol imediat, sună la 112. Pentru sprijin emoțional: DepreHUB 0374 456 420 (non-stop), Telefonul Copilului 116 111, TelVerde Antisuicid 0800 801 200."
- **GDPR language** (consistent with the existing policy): temei legal = consimțământ (art. 6(1)(a)); scop = exclusiv generarea răspunsurilor; fără marketing, profilare sau partajare cu terți; drepturi de acces/rectificare/ștergere; contact@nicobot.ro. Add: the data operator's identity, the sub-processor (OpenAI) and its data-location terms, retention period, and that conversations are not shared with the clinic unless the user agrees. On the B2B page, mention a DPA (acord de prelucrare) only if the client has one.
- **Age:** 18+ or "cu acordul părintelui" for the public demo; Telefonul Copilului is the pointer for minors.

Open items for the client: (1) confirm OpenAI/backend data residency before any "UE" claim; (2) confirm crisis-line hours; (3) decide whether the chat UI moves to nicobot.ro; (4) provide a product screenshot and, ideally, one named psychologist willing to be quoted.
