# KI-Tools für dieses Projekt

Dieses Projekt kann mit klassischen Code-Editoren oder mit KI-gestützten Werkzeugen bearbeitet werden. Die Werkzeuge ersetzen nicht das Nachdenken, aber sie helfen beim Lesen, Ändern, Testen und Dokumentieren.

## Grundregel für alle Tools

Gib dem Tool Kontext und Grenzen:

```text
Arbeite in diesem Repository.
Lies zuerst README.md und docs/ARCHITECTURE.md.
Ändere nur die Dateien, die für die Aufgabe notwendig sind.
Führe danach npm run typecheck und npm run build aus.
Erkläre die Änderungen für Nicht-Programmierer:innen.
```

## Codex

Codex eignet sich gut, wenn:

- Dateien im Projekt gelesen und geändert werden sollen,
- Terminalbefehle ausgeführt werden sollen,
- der lokale Browser geprüft werden soll,
- Änderungen systematisch umgesetzt werden sollen.

Guter Prompt:

```text
Bitte optimiere nur den Ranking-Block im Buildathon-Abschnitt.
Lies vorher App.tsx und styles.css.
Prüfe danach Desktop und Mobile im Browser sowie npm run build.
```

## Claude / Claude Code

Claude eignet sich gut für:

- größere Erklärungen,
- Refactoring-Vorschläge,
- Dokumentation,
- laienfreundliche Zusammenfassungen,
- strukturierte Pläne.

Guter Prompt:

```text
Ich bin Vibe-Coder und kenne React kaum.
Bitte erkläre mir, wie App.tsx, platform.ts und styles.css zusammenarbeiten.
Schlage danach kleine, sichere Änderungen vor.
```

Wenn Claude Code im Terminal arbeitet, gilt derselbe Ablauf wie bei Codex:

1. Dateien lesen.
2. Kleine Änderung machen.
3. Typecheck/Build ausführen.
4. Ergebnis im Browser prüfen.

## Cursor

Cursor ist ein Editor mit KI-Unterstützung.

Gut für:

- einzelne Text- oder Layoutänderungen,
- "Chat mit Codebase",
- gezielte Änderungen in einer Datei,
- schnelles Verstehen von Komponenten.

Empfohlener Ablauf:

1. Projektordner in Cursor öffnen.
2. Terminal in Cursor öffnen.
3. `npm install` und `npm run dev` ausführen.
4. Browser daneben offen lassen.
5. Kleine Änderungen machen.
6. Im Browser prüfen.

Guter Cursor-Prompt:

```text
Find where the Buildathon ranking podium is rendered.
Explain it in German for a non-programmer.
Then make the heading shorter and the podium more compact.
```

## Windsurf, Continue, VS Code Copilot und andere

Diese Tools funktionieren ähnlich:

- Projektordner öffnen.
- Relevante Dateien in den Kontext geben.
- Kleine Aufgaben stellen.
- Ergebnis prüfen.

Wichtig ist nicht das konkrete Tool, sondern der Arbeitsstil:

- nicht zu viele Ziele auf einmal,
- vorhandene Struktur respektieren,
- immer testen,
- Änderungen beschreiben lassen,
- bei Unsicherheit zuerst eine Erklärung verlangen.

## Welche Aufgaben eignen sich gut für Vibe Coding?

Gut geeignet:

- Texte kürzen oder umformulieren,
- Reihenfolge von Sektionen ändern,
- Kartenpunkte, Missionen oder Zielgruppen ergänzen,
- CSS-Abstände und Schriftgrößen optimieren,
- README/Wiki erweitern,
- einfache Komponenten aufräumen.

Mit Vorsicht:

- Paket-Updates,
- Authentifizierung,
- Datenbanken,
- echte Uploads,
- Datenschutzlogik,
- Deployment-Konfiguration,
- größere Architekturumbauten.

## Gute Kontrollfragen an ein KI-Tool

```text
Welche Datei ist für diese Änderung verantwortlich?
```

```text
Welche Nebenwirkungen könnte diese Änderung haben?
```

```text
Welche Tests oder Befehle soll ich nach der Änderung ausführen?
```

```text
Erkläre mir die Änderung in drei Sätzen für Nicht-Programmierer:innen.
```

## Minimaler Qualitätscheck

Vor jedem Upload:

```bash
npm run typecheck
npm run build
```

Im Browser prüfen:

- Startseite lädt.
- Keine sichtbare Fehlermeldung.
- Mobile Ansicht ist nicht seitlich verschoben.
- Wichtige Buttons reagieren.
- Neue Texte sind verständlich.
