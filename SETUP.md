# SETUP.md – Neues Projekt einrichten

## 1. Dependencies installieren
```bash
npm install
```

## 2. Claude Code Skills installieren
```bash
claude skills install ui-ux-pro-max
claude skills install frontend-design
claude skills install web-design-guidelines
claude skills install seo-audit
claude skills install find-skills
```

> Prüfe mit `claude skills list` welche bereits global installiert sind.

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
