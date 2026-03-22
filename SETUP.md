# SETUP.md – Neues Projekt einrichten

## 1. Dependencies installieren
```bash
npm install
```

## 2. Claude Code Skills installieren
```bash
npx skills add calm-north/seojuice-skills@rank-local -g -y
npx skills add kostja94/marketing-skills@schema-markup -g -y
npx skills add kostja94/marketing-skills@copywriting -g -y
npx skills add aj-geddes/useful-ai-prompts@image-optimization -g -y
npx skills add dirnbauer/webconsulting-skills@ai-search-optimization -g -y
```

> Die folgenden Skills sollten bereits global installiert sein:
> `ui-ux-pro-max`, `frontend-design`, `web-design-guidelines`, `seo-audit`,
> `ckm-design`, `ckm-brand`, `ckm-design-system`, `simplify`, `find-skills`
>
> Pruefen mit: `ls ~/.claude/skills/` oder im Claude Code Skill-Menu.

## 3. Projekt-Dateien befüllen
- [ ] `CONTENT.md` – Inhalte vom Kunden eintragen
- [ ] `DESIGN.md` – Typografie, Farben, Referenzen festlegen
- [ ] `CLAUDE.md` – Projektkontext, Seiten, offene Punkte
- [ ] `src/css/_variables.css` – Design Tokens eintragen
- [ ] `public/robots.txt` – `[domain]` ersetzen
- [ ] `public/sitemap.xml` – `[domain]` + alle Seiten eintragen
- [ ] `package.json` – `"name"` anpassen
- [ ] `vite.config.js` – `rollupOptions.input` mit allen Seiten befüllen

## 4. Dev-Server starten
```bash
npm run dev
```

## 5. Vor dem Deploy
```bash
npm run lint
npm run build
```
