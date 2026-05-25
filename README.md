# Hack am Hof - Museumsplattform

Pitchbarer Webapp-/PWA-Prototyp für eine ortsbezogene Erlebnis- und Betriebsplattform rund um das Museum Tiroler Bauernhöfe.

Das Repository knüpft an den AI-Hackathon im Museum Tiroler Bauernhöfe an und führt den entstandenen Projektstand als lauffähige Webdemo weiter.

## Ziel

In ca. drei Stunden soll ein vorzeigbarer Prototyp entstehen:

- kleine Pitch-Website,
- interaktive Museums-Karte,
- Zielgruppenmodi für Schulklassen, Hochzeiten, Kulinarik, Kräuter/Natur, Familien, Pensionisten, Chroniker und interne Wartung,
- Foto-/Avatar-Modul als KI-Zukunftsfeature,
- Guide Studio für Fachwissen, Dokumente und eingesprochene Geschichten,
- Ideenparkplatz für spätere Formate wie Geocaching, FPV-Events und Creator-Walks,
- saubere Grundlage für spätere PWA/App-Erweiterung.

## Stack

- React
- TypeScript
- Vite
- Leaflet / React Leaflet
- PWA-Grundstruktur
- statische TypeScript-Daten

## Start

### Fuer Entwickler

```bash
npm install
npm run dev
```

Dann im Browser:

```text
http://127.0.0.1:5173
```

### Fertige Demo bauen

```bash
npm install
npm run build
```

Danach liegt die fertige statische Demo unter:

```text
apps/web/dist/
```

### Lokal starten fuer Laien

Nach dem Build kann die Demo ohne Entwicklungsserver lokal gestartet werden:

- Windows: `start-demo.bat` doppelklicken
- Windows PowerShell: `start-demo.ps1` ausfuehren
- macOS/Linux: `./start-demo.sh` ausfuehren

Die Startdateien starten einen kleinen lokalen Server unter:

```text
http://127.0.0.1:8088/
```

Voraussetzung fuer den lokalen Laienstart ist Python. Wenn Python fehlt, zeigen die Startdateien eine verstaendliche Meldung.

### Online ueber GitHub Pages

Das Projekt ist fuer GitHub Pages vorbereitet. Beim Push auf `main` baut die GitHub Action `.github/workflows/deploy-pages.yml` die Webapp und veroeffentlicht `apps/web/dist`.

Fuer das Repository:

```text
https://github.com/scoinnotec/aicollective-hack-am-hof.git
```

muss in GitHub unter `Settings -> Pages` als Quelle `GitHub Actions` aktiviert sein.

## Projektstruktur

```text
apps/web/
  public/
    lageplan.webp
    manifest.webmanifest
    sw.js
  src/
    components/
    data/
    features/map/
    lib/
docs/
  ARCHITECTURE.md
  BACKLOG.md
  EVENT_BLUEPRINT.md
  PITCH.md
  UPDATELOG.md
```

## Prinzip

Der Prototyp startet bewusst lokal und datengetrieben. Später können Datenbank, Admin-Login, KI-Bildgenerierung, echte Uploads, QR-Codes, Offline-Modus und App-Verpackung mit Capacitor ergänzt werden.
