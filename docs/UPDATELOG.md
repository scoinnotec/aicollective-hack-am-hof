# Update Log

## 2026-05-24

### Initialer Aufbau

- Neues Projekt `hack-am-hof-platform` angelegt.
- Monorepo-Struktur mit `apps/web` vorbereitet.
- React/Vite/TypeScript eingerichtet.
- PWA-Dateien `manifest.webmanifest` und `sw.js` angelegt.
- Museums-Lageplan in `public/lageplan.webp` übernommen.

### Prototyp

- Pitch-Hero und Website-Struktur erstellt.
- Interaktive Leaflet-Karte mit Bild-Lageplan gebaut.
- Zielgruppenmodi:
  - Schulklasse,
  - Hochzeit,
  - Kulinarik/Kirchtag,
  - Kräuter/Natur,
  - Familien,
  - Pensionisten,
  - Chroniker,
  - Intern/Wartung.
- Kartenpunkte für Mission, Fotospots, Kulinarik, Kräuter, Familie, Pensionisten, Chronik und Wartung modelliert.
- Point-Detail-Drawer hinzugefügt.
- Rollen für Schulklassenmission angelegt.
- Avatar-Modul mit lokalem Foto-Preview ergänzt.
- Guide Studio für Dokumente, Audio und Geschichten eingebaut.
- Erweiterungsformate als Ideenparkplatz ergänzt: Geocaching, FPV-Drohnenrennen, Creator-Walks und Handwerkschallenge.
- Eventanalyse ergänzt: Tiroler-Schmankerl-Route und Kirchtag als ruhiges Genussformat übertragen.
- Kulinarik erweitert: Brandenberger Prügeltorte als konkrete Schmankerl-Station mit Vorführung, Audio, Geschenkoption und regionalem Alpbachtal-Bezug aufgenommen.
- Erweiterungsformate erweitert: Bustourismus, Motorrad-Einkehr, LARP/Living-History, Mittelalterfest und Oldtimer-Sternfahrt als spätere Partnerpakete aufgenommen.
- Statistik-Austria-Quelle aufgenommen: Tourismus- und Verkehrsdaten als Plausibilitätscheck für Saison, Anreise, Fahrzeuggruppen und Partnergespräche.
- Feierlayer ergänzt: freie Trauung, kirchliche Option/Kapelle prüfen, Taufe und Familienfeier als pitchbare Stationen mit Ablauf, Wetterplan, Partnerklärung und Foto-/Druck-Upsell.
- Pitch-Format geschärft: konkretes Ziel, fünf Pitch-Schritte, Pilotentscheidung, Ambassador-Fotos und Rattenberg-Busbrücke vor die Demo gezogen.
- Kartenkoordinaten anhand des Lageplans nachjustiert, damit Hof- und Stationsmarker näher bei Gebäuden und Beschriftungen liegen.
- VR/AR-Zeitreise als spätere Option ergänzt, inspiriert von Schloss Tratzberg und potenziell mit Tiroler XR-Partnern wie MSQ/MediaSquad.
- Buildathlon-Projekte T01 bis T10 aufgenommen und als Referenzschicht eingeordnet: MVP, Storytelling, Foto/Avatar, Eventpakete, Community, sichere Suche und Ideenworkshops.
- Seitenaufbau neu sortiert: zuerst Idee, danach ein klickbarer iPhone-Webapp-Prototyp, dann Prozess, danach Plattformdemo und Ausbau.
- iPhone-Prototyp ergänzt: Mission, Zeitreise, Foto und Guide als erste klickbare Screen-Zustände, inspiriert von Spiel am Hof, Tirol Timeslip Tales, Zeitreise Tirol, Hofjäger und Traditirol.
- Feste Nach-oben-Buttons optisch dezenter gemacht.
- Pitch-Erzählung um fünf Kontextblöcke erweitert: Höfemuseum, Besucherproblem, AI Collective/KINN/Buildathon, zehn Prototypen und mögliche Folgeschritte.
- Buildathon-Referenzen aus der großen Kartendarstellung herausgenommen und als Kontext, Best-of und Credits in die richtige Pitch-Logik verschoben.
- Modulideen vereinheitlicht: Schulklasse, Feier, Schmankerl-Route, Kräuter, Familien, Pensionisten, Chroniker, Betrieb, KI-Charaktere und Contentmodell öffnen jetzt ein gemeinsames Detail-Popover.
- Wissenssammlung und Guide Studio enger gekoppelt, damit klarer wird: erst sammeln, ordnen und freigeben, dann Missionen bauen.
- Kartenkoordinatenlogik korrigiert: Leaflet-Y-Achse wird gegen den Lageplan gespiegelt, damit Marker auf den Hofpositionen landen.
- Pitch-These und KINN-/AI-Collective-Verlinkung in den unteren Kontext-/Credits-Bereich verschoben und kontrastreicher gestaltet.
- Spielbaren App-Ausschnitt ergänzt: Besucher:innen können Modus wählen, Route wechseln, Stationen öffnen, Aufgaben beantworten, Sammelzeichen erhalten und einen Abschluss sehen.
- Lokaler Missionskatalog ergänzt: Kinder, Schulklasse, Geschichtsmodus, Feier/Fotopaket und Bauernhaus-Inspiration zeigen unterschiedliche Erlebnisse aus demselben Wissensmodell.
- Ausbaukarten als Kampagnen-Popover umgesetzt: jede Idee zeigt Bildausschnitt, Kampagne, Museumsnutzen, Rhythmus und Leitplanke.
- Zusatzideen ergänzt: 3D-Bogenparcours mit Jäger-/Wilderer-Story, optionaler Geschichtsmodus und Bauernhaus-Inspirationsmodus.

### Recherche-Einfluss

- Museum hat bereits Rallye, Audio-App, Kinderprogramme und Outdoor-Escape-Game.
- Positionierung geschärft: nicht "noch ein Escape Room", sondern digitales Missionssystem.
- Historische UX-Themen ergänzt:
  - geschlossener Hof,
  - Winter/Vorrat,
  - Rechtsstatus und Abgaben,
  - saisonale Arbeit im Alpenraum.

### Prozess- und Stilüberarbeitung

- Sichtbare deutsche Texte auf echte Umlaute umgestellt.
- Neue Prozesssektion ergänzt:
  - Wissen heben,
  - Wissen ordnen,
  - Erlebnisse bauen,
  - vor Ort nutzen.
- Stärker hervorgehoben, dass viel Wissen erst von Guides, Vereinsmitgliedern und Museumsprofis gesammelt und digitalisiert werden muss.
- Hero-Text umgebaut: zuerst Zielbild, danach Prozesslogik.
- Gestaltung in Richtung Museums-Feldbuch / Papier / ruhigeres historisches Thema verschoben.
- Weniger SaaS-Optik durch zurückgenommene Farben, kleinere Radien und historischere Flächen.

### Verifikation

- `npm run typecheck` erfolgreich ausgeführt.
- `npm run build` erfolgreich ausgeführt.
- Dev-Server unter `http://127.0.0.1:5173/` geprüft.

### Lesbarkeit und UX

- Neue Projekt-Markdowns eingelesen und die Leitlinie übernommen: Smartphone bleibt Werkzeug, der reale Ort bleibt Fokus.
- Kacheltexte gekürzt und auf jeweils einen Hauptgedanken reduziert.
- Display-Schrift entschärft und UI/Kacheln stärker auf lesbare Sans-Typografie umgestellt.
- Mobile Überlagerung durch den "Nach oben"-Button entfernt.

### App-Dummy und Event-Popups

- Neue Unterlagen aus `Iterationen/2026-05-24` eingelesen: Saisonkarte/Erlebnispass, physischer Hofpass, Minispiele, Gruppenscore und kollaboratives Score-System.
- App-Dummy deutlich spielbarer gemacht: Rollen, private Hinweise, gemeinsame Hinweiswand, Guide-Joker, Gruppenscore, Hofpass, Minispiel und gemeinsame Abschlusslösung.
- Startreihenfolge angepasst: Die anklickbare App steht jetzt direkt nach der Startansicht und vor dem Kontextteil.
- Ausbauformate mit individuellen Motivbildern und konkreten Popover-Beschreibungen ergänzt, damit jedes Eventformat anders wirkt und verständlicher wird.
