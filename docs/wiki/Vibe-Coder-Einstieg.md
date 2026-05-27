# Vibe-Coder Einstieg: von null bis zur eigenen Änderung

Diese Anleitung ist für Menschen geschrieben, die noch nie oder kaum mit GitHub gearbeitet haben und das Projekt mit KI-Werkzeugen wie Claude, Codex, Cursor oder ähnlichen Tools weiterentwickeln wollen.

## 1. Was du brauchst

Installiere einmalig:

1. **Git**  
   Git speichert Versionen und verbindet deinen Computer mit GitHub.  
   Download: https://git-scm.com/downloads

2. **Node.js LTS**  
   Node startet und baut die Webapp. Dieses Projekt erwartet Node 20 oder neuer.  
   Download: https://nodejs.org/

3. **Ein Code-Editor oder KI-Editor**  
   Geeignet sind zum Beispiel:
   - Cursor
   - Visual Studio Code
   - Windsurf
   - Codex im Terminal/Desktop
   - Claude Code

4. **Ein GitHub-Konto**  
   GitHub ist der Online-Ort, an dem der Projektordner liegt.  
   Anmeldung: https://github.com/

## 2. Projekt auf den eigenen PC holen

### Variante A: Mit GitHub Desktop

Das ist für Einsteiger:innen oft am einfachsten.

1. Installiere GitHub Desktop: https://desktop.github.com/
2. Melde dich mit deinem GitHub-Konto an.
3. Gehe in GitHub zum Projekt:
   `https://github.com/scoinnotec/aicollective-hack-am-hof`
4. Klicke auf `Code`.
5. Wähle `Open with GitHub Desktop`.
6. Wähle einen Ordner auf deinem Computer.
7. Klicke `Clone`.

Danach liegt das Projekt auf deinem Computer.

### Variante B: Mit Terminal

Öffne Terminal, Eingabeaufforderung oder PowerShell:

```bash
git clone https://github.com/scoinnotec/aicollective-hack-am-hof.git
cd aicollective-hack-am-hof
```

## 3. Projekt starten

Im Projektordner:

```bash
npm install
npm run dev
```

Dann im Browser öffnen:

```text
http://127.0.0.1:5173/
```

Wenn das funktioniert, siehst du die Hack-am-Hof-Seite lokal auf deinem Computer.

## 4. Was du bearbeiten kannst

Die wichtigsten Orte:

| Ziel | Datei |
| --- | --- |
| Texte, Zielgruppen, Kartenpunkte, Missionen | `apps/web/src/data/platform.ts` |
| Aufbau der Hauptseite | `apps/web/src/App.tsx` |
| Klickdummy | `apps/web/src/components/AppClickDummy.tsx` |
| Farben, Layout, Größen | `apps/web/src/styles.css` |
| Bilder | `apps/web/public/pitch-images/` |
| Projektdokumentation | `README.md`, `docs/` |

## 5. Typischer Vibe-Coding-Ablauf

1. Projekt lokal starten: `npm run dev`
2. Wunsch formulieren, zum Beispiel:
   > "Bitte mache den Hero kompakter und zeige die Demo früher."
3. KI-Tool die betroffenen Dateien lesen lassen.
4. Änderung machen lassen.
5. Browser anschauen.
6. Tests ausführen:

```bash
npm run typecheck
npm run build
```

7. Wenn alles passt: Änderung speichern und zu GitHub hochladen.

## 6. Änderungen auf GitHub hochladen

### Mit GitHub Desktop

1. GitHub Desktop öffnen.
2. Du siehst links die geänderten Dateien.
3. Schreibe unten eine kurze Zusammenfassung, z. B.:
   `Doku für Vibe-Coder ergänzt`
4. Klicke `Commit to main` oder, besser, erstelle einen Branch.
5. Klicke `Push origin`.

### Mit Terminal

```bash
git status
git add README.md docs/wiki apps/web/src/App.tsx apps/web/src/data/platform.ts apps/web/src/styles.css
git commit -m "Dokumentation für Vibe-Coder ergänzen"
git push
```

Wenn du nicht auf `main` arbeiten willst:

```bash
git checkout -b docs/vibe-coder-einstieg
git add .
git commit -m "Dokumentation für Vibe-Coder ergänzen"
git push -u origin docs/vibe-coder-einstieg
```

Danach kannst du auf GitHub einen Pull Request erstellen.

## 7. Was ist ein Pull Request?

Ein Pull Request ist ein Vorschlag:

> "Ich habe etwas geändert. Bitte prüft es und übernehmt es ins Hauptprojekt."

Das ist sicherer als direkt auf `main` zu arbeiten.

## 8. Wenn etwas kaputt geht

Nicht panisch werden.

Prüfe zuerst:

```bash
npm run typecheck
npm run build
```

Wenn dort ein Fehler steht, kopiere ihn in dein KI-Tool und frage:

> "Bitte erkläre diesen Fehler einfach und schlage eine minimale Korrektur vor."

Wenn du mit Git arbeitest, kannst du sehen, was geändert wurde:

```bash
git status
git diff
```

Wichtig: Lösche oder überschreibe keine fremden Änderungen, wenn mehrere Personen am Projekt arbeiten.

## 9. Gute Prompts für dieses Projekt

Beispiele:

```text
Bitte lies README.md, docs/ARCHITECTURE.md und apps/web/src/App.tsx.
Erkläre mir danach, wo ich den Text im Hero ändern kann.
```

```text
Bitte mache nur den Buildathon-Bereich kompakter.
Keine anderen Sektionen ändern.
Danach npm run typecheck und npm run build ausführen.
```

```text
Ich bin Nicht-Programmierer:in.
Erkläre mir jede vorgeschlagene Code-Änderung in einfachen Worten,
bevor du sie umsetzt.
```

## 10. Sicherheitsregel

Bevor du hochlädst:

- Seite lokal im Browser anschauen.
- `npm run typecheck` ausführen.
- `npm run build` ausführen.
- `git status` lesen.
- Nur Dateien committen, die wirklich zu deiner Änderung gehören.
