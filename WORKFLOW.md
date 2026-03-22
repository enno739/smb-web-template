# WORKFLOW.md – Website-Entwicklung für Kunden

Standardisierter Workflow für Kundenprojekte. Claude orientiert sich an diesem Plan und unterstuetzt bei jeder Phase aktiv.

---

## Phase 1 – Vorbereitung

### 1.1 Content sammeln
- Alte Website des Kunden analysieren, Texte kopieren
- Oeffentlich zugaengliche Infos sammeln (Google Business, Branchenverzeichnisse, Social Media)
- Alles in `CONTENT.md` eintragen (Firma, Kontaktdaten, Oeffnungszeiten, Texte)
- **Skill:** -

### 1.2 Keyword-Recherche & SEO-Strategie
- Relevante Keywords fuer Branche und Standort identifizieren
- Suchintention pro Seite definieren
- Local SEO Strategie festlegen (NAP-Konsistenz, lokale Keywords)
- **Skills:** `seo-audit`, `rank-local`

### 1.3 Content-Struktur definieren
- Seitenbaum festlegen (welche Seiten, welche Inhalte wo)
- Navigation planen
- In `CONTENT.md` als Seitenstruktur dokumentieren
- `CLAUDE.md` Seiten-Liste aktualisieren

### 1.4 Content optimieren
- Texte SEO-optimiert umschreiben (Headlines, Meta-Descriptions, CTAs)
- Tone of Voice an Branche anpassen
- Alt-Texte fuer geplante Bilder vorbereiten
- **Skills:** `copywriting`, `seo-audit`

### 1.5 Bilder & Logo
- Provisorische Bilder sammeln (Platzhalter fuer Entwicklung)
- Logo erstellen oder vorhandenes aufbereiten
- Bilder optimieren (WebP/AVIF, responsive sizes)
- **Skills:** `ckm-design` (Logo), `image-optimization`

### 1.6 Design erarbeiten
- Farbpalette definieren (abgeleitet von Logo/Branche)
- Font-Pairing waehlen (Display + Body)
- Design Tokens als CSS Custom Properties anlegen
- Styleguide gemeinsam verfeinern bis zufrieden
- Ergebnisse in `DESIGN.md` dokumentieren
- `src/css/_variables.css` befuellen
- **Skills:** `ui-ux-pro-max`, `ckm-design-system`, `ckm-brand`

### 1.7 Projekt konfigurieren
- `CLAUDE.md` vollstaendig ausfuellen (Kontext, Seiten, Besonderheiten)
- `.htaccess` Security-Baseline pruefen
- `package.json`, `vite.config.js` anpassen
- `robots.txt`, `sitemap.xml` vorbereiten
- Committen und auf GitHub pushen
- Vite Dev-Server testen

---

## Phase 2 – Entwicklung

### 2.1 Seitenstruktur aufbauen
- Semantisches HTML fuer alle Seiten (gem. `CONTENT.md`)
- Mobile First entwickeln
- BEM-Klassen, keine Div-Suppe
- **Skill:** `frontend-design`

### 2.2 Styling & Layout
- CSS basierend auf Design Tokens aus `_variables.css`
- Grid/Flexbox Layouts, asymmetrische Kompositionen
- Responsive Breakpoints (Mobile First nach oben)
- **Skills:** `frontend-design`, `ui-ux-pro-max`

### 2.3 Micro-Interactions & Animationen
- Hover-Effekte, Scroll-Animationen, Smooth Transitions
- `prefers-reduced-motion` respektieren
- Mit Geschmack, nicht ueberladen

### 2.4 SEO-Implementation
- JSON-LD Strukturierte Daten (LocalBusiness, BreadcrumbList, FAQ)
- Meta-Tags, Open Graph, Twitter Cards
- Canonical URLs
- Interne Verlinkung mit sprechenden Ankertexten
- **Skills:** `schema-markup`, `seo-audit`, `rank-local`

### 2.5 AI-Search-Optimierung
- Content fuer AI-Suchmaschinen optimieren (ChatGPT Search, Perplexity)
- Strukturierte, gut parsbare Inhalte
- **Skill:** `ai-search-optimization`

### 2.6 Code-Review
- Code-Qualitaet pruefen (Lesbarkeit, Effizienz, Wiederverwendung)
- UI gegen Web Interface Guidelines pruefen
- Max 300 Zeilen pro Datei einhalten
- **Skills:** `simplify`, `web-design-guidelines`

### 2.7 Cross-Browser & Responsive Testing
- Alle gaengigen Browser testen
- Alle Breakpoints pruefen
- Keyboard-Navigation + Focus-Styles testen

---

## Phase 3 – Kunde

### 3.1 Kundenpraesentation
- Website dem Kunden vorstellen (wird von uns durchgefuehrt, ohne Claude)

### 3.2 Feedback einarbeiten
- Kundenwuensche umsetzen
- Echte Fotos/Assets einfuegen und optimieren
- **Skill:** `image-optimization`

---

## Phase 4 – Go-Live

### 4.1 Finaler SEO-Audit
- Alle Meta-Tags, strukturierte Daten, Ladezeiten pruefen
- Local SEO Checkliste durchgehen
- **Skills:** `seo-audit`, `rank-local`, `schema-markup`

### 4.2 Security Review
- `.htaccess` Security Headers verifizieren
- CSP, HSTS, X-Frame-Options pruefen
- Formulare: Input Sanitization, Honeypot, Rate Limiting
- Keine Inline-Styles/Scripts (CSP-kompatibel)

### 4.3 Performance-Test
- Lighthouse Score 90+ in allen Kategorien
- Core Web Vitals im gruenen Bereich
- LCP unter 2 Sekunden
- Bilder: WebP/AVIF, Lazy Loading, responsive sizes
- **Skill:** `image-optimization`

### 4.4 Accessibility-Check
- WCAG 2.1 AA Compliance pruefen
- Farbkontrast 4.5:1, Skip-to-Content, ARIA-Labels
- `prefers-color-scheme` + `prefers-reduced-motion`
- **Skill:** `web-design-guidelines`

### 4.5 Domain & Deployment
- Domain vom Kunden erhalten oder neue erstellen
- GitHub Repository mit Hostinger verbinden
- Auto-Deploy von `main` Branch konfigurieren
- DNS propagieren, finale Checks auf Live-URL

---

## Skill-Uebersicht

| Skill | Einsatzbereich |
|-------|---------------|
| `seo-audit` | Technisches SEO, Meta-Tags, Audit |
| `rank-local` | Local SEO, Google Business, NAP |
| `schema-markup` | JSON-LD Strukturierte Daten |
| `ai-search-optimization` | GEO/AEO, AI-Suchmaschinen |
| `copywriting` | Content-Optimierung, Headlines, CTAs |
| `image-optimization` | WebP/AVIF, Kompression, Lazy Loading |
| `ckm-design` | Logo-Erstellung, Brand Identity |
| `ckm-brand` | Brand Voice, Messaging |
| `ckm-design-system` | Design Tokens, CSS Custom Properties |
| `ui-ux-pro-max` | Farbpaletten, Font-Pairings, Styles |
| `frontend-design` | Distinctive UI, Production-Grade Code |
| `simplify` | Code-Review, Qualitaet |
| `web-design-guidelines` | UI/UX Review, Accessibility |
