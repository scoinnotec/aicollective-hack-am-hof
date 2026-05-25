# Hack am Hof - Museumsplattform

Pitchbarer Webapp-/PWA-Prototyp für eine ortsbezogene Erlebnis- und Betriebsplattform rund um das Museum Tiroler Bauernhöfe.

Das Repository knüpft an den AI-Hackathon im Museum Tiroler Bauernhöfe an und führt den entstandenen Projektstand als lauffähige Webdemo weiter.

![Stilisiertes Hack am Hof Gruppenmotiv](apps/web/public/pitch-images/hack-am-hof-teilnehmerinnen.png)

## Kontext

- [AI Collective](https://aicollective.at)
- [Hack am Hof](https://aicollective.at/hack-am-hof)
- [Webdemo auf GitHub Pages](https://scoinnotec.github.io/aicollective-hack-am-hof/)
- [Projekt-Wiki](https://github.com/scoinnotec/aicollective-hack-am-hof/wiki)

## Wichtige Dokumente

- [Pitch & Projektlogik](docs/PITCH.md)
- [Projekt-Backlog](docs/BACKLOG.md)
- [Roadmap und offene Aufgaben](docs/2026-05-25_Hack-am-Hof-Projekt-Backlog.md)
- [Architektur](docs/ARCHITECTURE.md)
- [Event-Blueprint](docs/EVENT_BLUEPRINT.md)
- [Buildathon-Referenzen](docs/BUILDATHON_REFERENCES.md)
- [Update-Log](docs/UPDATELOG.md)
- [Bildprompts](BILDPROMPTS.md)
- [GitHub-Webprojekt](https://github.com/scoinnotec/aicollective-hack-am-hof)
- [GitHub-Wiki](https://github.com/scoinnotec/aicollective-hack-am-hof/wiki)

## Was man sieht

Der Prototyp zeigt keine einzelne Museums-App, sondern ein wiederverwendbares System aus Hofpass, Karte, Guide-Wissen, Zielgruppenlayern und späteren Partnerpaketen.

![Lageplan Museum Tiroler Bauernhöfe](apps/web/public/lageplan.webp)

### Kernmodule

| Modul | Bild | Kurzbeschreibung |
| --- | --- | --- |
| Schulklassenmission | ![Schulklassenmission](apps/web/public/pitch-images/schulklassenmission.png) | Hofpass-Pilot mit Rollen, QR-Stationen, Karte, Aufgaben und Abschluss. Danach schrittweise erweiterbar für Familien, Senior:innen, Reisegruppen, Chroniker:innen und weitere Zielgruppen. |
| Guide Studio | ![Guide Studio](apps/web/public/pitch-images/contentmodell-guide-studio.png) | Guide-Wissen, Quellen, Fotos, Audio und Freigaben werden gesammelt, bevor daraus Missionen entstehen. |
| Foto & Feier | ![Feier- und Fotomodul](apps/web/public/pitch-images/feier-fotomodul.png) | Fotospots, freie Trauung, Taufe, Erinnerungsprodukt und Ambassador-Logik. |
| Schmankerl-Route | ![Tiroler-Schmankerl-Route](apps/web/public/pitch-images/tiroler-schmankerl-route.png) | Kulinarik, Hofgeschichten, Rezeptpass, Audio und Abschluss im Gasthaus. |
| Rattenberg-Brücke | ![Rattenberg-Busbrücke](apps/web/public/pitch-images/rattenberg-busbruecke.png) | Kombipaket aus Glasstadt, Museum, Schmankerl, Erinnerungsfoto und planbarer Rückfahrt. |
| Zeitreise Foto | ![KI-Charaktere und Souvenir](apps/web/public/pitch-images/ki-charaktere-souvenir.png) | Besucher:innen werden Teil einer historischen Hofszene, später mit Druck-/Souvenirprozess. |

Der erste sinnvolle Pilot ist die Schulklassenmission. Dieselbe technische und inhaltliche Grundlage kann danach Schritt für Schritt erweitert werden: für Familien mit kürzeren Runden, für Senior:innen mit ruhigen Wegen, größerer Schrift und Audio, für Reisegruppen mit planbaren Zeitfenstern, für Chroniker:innen mit Quellen- und Erinnerungsarbeit sowie für interne Teams mit Wartungs- und Dokumentationspunkten.

### Weitere Ausbaupfade

- Familienmodus, Pensionistenmodus, Chroniker-Modus und interner Betrieb.
- Bauernhaus-Inspiration für hochwertige Umbau- und Handwerksfragen.
- Kräuterpfad, Living History, Markt und Handwerk, Oldtimer-Tag, VR/AR-Zeitreise und weitere bewusst geparkte Ideen.
- Medien- und Audiofundament für QR-Hinweise, Guide-Joker und spätere PWA-/App-Erweiterung.

## Ziel

Der aktuelle Stand soll vor allem eine kleine, klare Pilotentscheidung ermöglichen:

- eine reale Schulroute mit 4 bis 5 Stationen,
- einen Guide-Studio-Workshop mit Museum, Guides und Verein,
- einen klickbaren Hofpass-Flow mit Rollen, QR-Start, Karte und Feedback,
- erste Partnerpakete als nächster Ausbau, etwa Foto/Feier und Schmankerl-Route,
- klare Trennung zwischen Pilot, nächstem Ausbau und Ideenpool.

## Stack

- React
- TypeScript
- Vite
- Leaflet / React Leaflet
- PWA-Grundstruktur
- statische TypeScript-Daten

## Start

### Für Entwickler

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

### Lokal starten für Laien

Nach dem Build kann die Demo ohne Entwicklungsserver lokal gestartet werden:

- Windows: `start-demo.bat` doppelklicken
- Windows PowerShell: `start-demo.ps1` ausführen
- macOS/Linux: `./start-demo.sh` ausführen

Die Startdateien starten einen kleinen lokalen Server unter:

```text
http://127.0.0.1:8088/
```

Voraussetzung für den lokalen Laienstart ist Python. Wenn Python fehlt, zeigen die Startdateien eine verständliche Meldung.

### Online über GitHub Pages

Das Projekt ist für GitHub Pages vorbereitet. Beim Push auf `main` baut die GitHub Action `.github/workflows/deploy-pages.yml` die Webapp und veröffentlicht `apps/web/dist`.

Für das Repository:

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
