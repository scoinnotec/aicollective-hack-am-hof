# Hack am Hof - Projekt-Backlog

Stand: 2026-05-25  
Basis: Review und Optimierungspakete aus Iteration I

## Backlog-Ziel

Dieser Backlog übersetzt die Review-Erkenntnisse in kleine, bearbeitbare Tickets. Er ist bewusst nicht nach Ideenbreite sortiert, sondern nach dem Weg zu einem entscheidbaren und danach pilotierbaren Projekt.

## Statuswerte

- `todo`: noch nicht begonnen
- `ready`: fachlich klar genug für Umsetzung
- `doing`: in Arbeit
- `review`: umgesetzt, wartet auf Sichtprüfung
- `done`: umgesetzt und geprüft
- `parked`: bewusst später

## Prioritäten

- `P0`: vor der nächsten Präsentation/Vorstandsrunde
- `P1`: vor einem echten Pilot
- `P2`: vor Plattformausbau oder Förder-/Partnergesprächen
- `P3`: Ideenpool

## Sprint 0 - Entscheidungsschärfe

### HAH-001 - Beschlussvorschlag für Pilot formulieren

**Priorität:** P0  
**Typ:** Pitch / Strategie  
**Status:** done  
**Abhängigkeit:** keine

**Beschreibung:**  
Einen kurzen Beschlussvorschlag formulieren, der klar macht, dass nicht der Vollausbau, sondern ein begrenzter Schulklassen-Pilot freigegeben werden soll.

**Akzeptanzkriterien:**

- Beschlussfrage ist in 2 bis 4 Sätzen formulierbar.
- Umfang nennt Route, Stationen, QR-/Code-Start, Rollen, Guide-Studio-Workshop und Feedbackauswertung.
- Ausbauideen sind nicht Teil der Freigabe.

**Umsetzung 2026-05-25:**

- Hero enthält einen sichtbaren Beschlussvorschlag für einen begrenzten Schulklassen-Pilot.
- Entscheidungsabschnitt grenzt Pilot, Vorbereitung und spätere Ausbaustufen sichtbar voneinander ab.
- Button `Beschluss ansehen` führt direkt zur Beschlusslogik.

### HAH-002 - Pilotumfang in der Seite sichtbar markieren

**Priorität:** P0  
**Typ:** UI / Content  
**Status:** doing  
**Abhängigkeit:** HAH-001

**Beschreibung:**  
Die Seite soll sichtbar zwischen `Pilot jetzt`, `Nächster Ausbau`, `Ideenpool` und `Spätere Plattform` unterscheiden.

**Akzeptanzkriterien:**

- Schulroute und Guide Studio sind als Pilotkern erkennbar.
- Foto/Feier, Schmankerl und Rattenberg sind als nächster Ausbau markiert.
- FPV, LARP, XR, Oldtimer und ähnliche Formate sind als Ideenpool markiert.

### HAH-003 - 5-Minuten-Demo-Script schreiben

**Priorität:** P0  
**Typ:** Pitch / Demo  
**Status:** todo  
**Abhängigkeit:** HAH-001

**Beschreibung:**  
Ein kurzes Script für den Live-Pitch erstellen: welche Abschnitte werden gezeigt, welche Klicks werden ausgeführt, welche Aussage gehört dazu.

**Akzeptanzkriterien:**

- Script enthält maximal 7 aktive Klicks.
- Jeder Klick hat eine Pitch-Aussage.
- Demo endet mit der Beschlussfrage.

### HAH-004 - Produktbegriffe vereinheitlichen

**Priorität:** P0  
**Typ:** Content / Produktstrategie  
**Status:** todo  
**Abhängigkeit:** HAH-001

**Beschreibung:**  
Ein konsistentes Begriffsset einführen: `Hack am Hof`, `Hofrunde`, `Guide Studio`, `Mission`, `Layer/Modus`, `Partnerpaket`.

**Akzeptanzkriterien:**

- Begriffsliste ist dokumentiert.
- UI-Texte verwenden die Begriffe konsistent.
- `Hack am Hof` wird nicht gleichzeitig als Event, App, Plattform und Besucherprodukt verwendet.

## Sprint 1 - Pitch und UI fokussieren

### HAH-005 - Hero auf Pilotentscheidung nachschärfen

**Priorität:** P0  
**Typ:** UI / Copy  
**Status:** review  
**Abhängigkeit:** HAH-001, HAH-004

**Beschreibung:**  
Der Hero soll sofort klarer machen: Es geht um einen kleinen Pilot, nicht um eine sofort vollständige Plattform.

**Akzeptanzkriterien:**

- Headline bleibt stark, aber führt zur Pilotentscheidung.
- Entscheidungsvorschlag nennt den nächsten konkreten Schritt.
- Sekundäre Thesen konkurrieren nicht mit der Hauptaussage.

**Umsetzung 2026-05-25:**

- Hero-Text wurde auf den Pilotentscheid statt auf die Gesamtplattform zugespitzt.
- Beschlussvorschlag steht direkt im ersten Abschnitt.

### HAH-006 - Klickdummy auf Schulklassen-Pilot fokussieren

**Priorität:** P1  
**Typ:** UI / Produktflow  
**Status:** todo  
**Abhängigkeit:** HAH-003

**Beschreibung:**  
Der Klickdummy soll primär den Schulklassen-Pilot zeigen: Gruppe erstellen, Warteraum, Rollen, Station, Abschluss.

**Akzeptanzkriterien:**

- Standardpfad ist Schulklasse.
- Besucher können den Flow ohne Erklärung durchklicken.
- Optionale Modi sind reduziert oder klar als Beispiele markiert.

### HAH-007 - Smartphone-Prototyp vom Klickdummy abgrenzen

**Priorität:** P1  
**Typ:** UI / Informationsarchitektur  
**Status:** todo  
**Abhängigkeit:** HAH-006

**Beschreibung:**  
Klarstellen, warum es sowohl Klickdummy als auch Smartphone-Konzeptscreens gibt.

**Akzeptanzkriterien:**

- Klickdummy ist als Pilotflow beschriftet.
- Smartphone-Prototyp ist als spätere Modulvorschau beschriftet.
- Redundante Erklärungen sind reduziert.

### HAH-008 - Kartenansicht auf Pilotroute verdichten

**Priorität:** P1  
**Typ:** UI / Karte  
**Status:** todo  
**Abhängigkeit:** HAH-002

**Beschreibung:**  
Die Karte soll im Einstieg nicht alle Möglichkeiten gleich stark zeigen, sondern zuerst die Pilotroute.

**Akzeptanzkriterien:**

- 4 bis 5 Pilotstationen sind visuell hervorgehoben.
- Höfe bleiben sichtbar, aber zweitrangig.
- Marker haben klare Labels für Barrierefreiheit und QA.

## Sprint 2 - Vorstands- und Pilotfähigkeit

### HAH-009 - Risikoabschnitt für Vorstand ergänzen

**Priorität:** P1  
**Typ:** Pitch / Governance  
**Status:** todo  
**Abhängigkeit:** HAH-001

**Beschreibung:**  
Risiken offen benennen und mit Gegenmassnahmen verbinden.

**Akzeptanzkriterien:**

- Historische Freigabe, Datenschutz, Kinderfotos, Netz/Offline und Betrieb sind genannt.
- Zu jedem Risiko gibt es eine nächste Maßnahme.
- Der Abschnitt blockiert den Pilot nicht, sondern macht ihn kontrollierbar.

### HAH-010 - Erfolgsmessung für Pilot definieren

**Priorität:** P1  
**Typ:** Projektleitung / Evaluation  
**Status:** todo  
**Abhängigkeit:** HAH-001

**Beschreibung:**  
Messbare Kriterien festlegen, damit nach dem Pilot über Ausbau entschieden werden kann.

**Akzeptanzkriterien:**

- 5 bis 8 Erfolgskriterien sind definiert.
- Feedbackfragen für Lehrperson, Guide und Gruppe sind skizziert.
- Abbruch- oder Nachbesserungskriterien sind benannt.

### HAH-011 - Guide-Studio-Arbeitsprozess konkretisieren

**Priorität:** P1  
**Typ:** Content / Fachprozess  
**Status:** todo  
**Abhängigkeit:** HAH-004

**Beschreibung:**  
Das Guide Studio soll zeigen, welche Inhalte in welcher Qualität gebraucht werden.

**Akzeptanzkriterien:**

- Contentstatus ist sichtbar: Entwurf, geprüft, freigegeben, gesperrt, unsicher.
- Minimalfelder für Stationen sind dokumentiert.
- Mindestens ein Beispiel zeigt Fakt, Anekdote, Quelle und Freigabe.

### HAH-012 - Pilotroute fachlich prüfbar machen

**Priorität:** P1  
**Typ:** Museum / Content  
**Status:** todo  
**Abhängigkeit:** HAH-008, HAH-011

**Beschreibung:**  
Die Route `Ein Winter ohne Supermarkt` so ausarbeiten, dass Museum und Guides sie fachlich prüfen können.

**Akzeptanzkriterien:**

- Jede Station hat Ort, Aufgabe, historische Aussage und Quelle/Freigabefeld.
- Sprache ist für Schulklasse geeignet.
- Unsichere Inhalte sind markiert.

## Sprint 3 - Technisches Fundament

### HAH-013 - Datenmodell für Pilot skizzieren

**Priorität:** P2  
**Typ:** Architektur  
**Status:** todo  
**Abhängigkeit:** HAH-011

**Beschreibung:**  
Ein erstes Datenmodell für Pilot und spätere Plattform dokumentieren.

**Akzeptanzkriterien:**

- Entitäten sind skizziert: Location, Building, Room, Object, Source, Media, Mission, Role, Task, Release, Feedback.
- Pflichtfelder für Pilot sind markiert.
- Spätere Plattformfelder sind getrennt.

### HAH-014 - Statische Daten fachlich aufteilen

**Priorität:** P2  
**Typ:** Code / Wartbarkeit  
**Status:** todo  
**Abhängigkeit:** HAH-013

**Beschreibung:**  
Die großen statischen Datenmodule in fachliche Bereiche trennen.

**Akzeptanzkriterien:**

- Daten sind nach Audiences, MapPoints, Missions, FutureFormats, ModuleIdeas und References getrennt.
- Keine UI-Funktion geht verloren.
- Build läuft.

### HAH-015 - Bundle-Größe und Code-Splitting prüfen

**Priorität:** P2  
**Typ:** Performance  
**Status:** todo  
**Abhängigkeit:** HAH-014 optional

**Beschreibung:**  
Den Vite-Hinweis auf großes JS-Bundle analysieren und sinnvolle Splits prüfen.

**Akzeptanzkriterien:**

- Leaflet/Karte ist als möglicher Split bewertet.
- Modals/Future-Formate sind bewertet.
- Build-Ergebnis ist dokumentiert.

### HAH-016 - Kritische UI-Flows testen

**Priorität:** P2  
**Typ:** QA  
**Status:** todo  
**Abhängigkeit:** HAH-006, HAH-008

**Beschreibung:**  
Basis-QA für die wichtigsten sichtbaren Flows definieren und ausführen.

**Akzeptanzkriterien:**

- Klickdummy-Hauptpfad getestet.
- Kartenmodus und Detail-Drawer getestet.
- Avatar-Flow getestet.
- Guide-Studio-Tabs getestet.
- Mobile Sichtprüfung dokumentiert.

## Sprint 4 - Partnerpakete und Ausbau

### HAH-017 - Foto-/Feierpaket als Partnerangebot strukturieren

**Priorität:** P2  
**Typ:** Partner / Angebot  
**Status:** todo  
**Abhängigkeit:** HAH-002, HAH-010

**Beschreibung:**  
Das Foto-/Feiermodul als reales Partnerpaket beschreiben, nicht nur als App-Idee.

**Akzeptanzkriterien:**

- Zielgruppe, Leistung, Partner, Ablauf und Risiken sind beschrieben.
- Datenschutz/Einwilligung ist als Klärungspunkt enthalten.
- Paket ist nicht Teil des Schulpiloten.

### HAH-018 - Schmankerlroute als Partnerangebot strukturieren

**Priorität:** P2  
**Typ:** Partner / Angebot  
**Status:** todo  
**Abhängigkeit:** HAH-002, HAH-010

**Beschreibung:**  
Die Schmankerlroute als prüfbares Angebot mit Gastronomie-/Kulinarikbezug formulieren.

**Akzeptanzkriterien:**

- Zielgruppe, Route, Partner, Angebot und Museumsnutzen sind beschrieben.
- Kein Buchungssystem wird vorausgesetzt.
- Nächster Testschritt ist benannt.

### HAH-019 - Rattenberg-/Busgruppenpaket strukturieren

**Priorität:** P2  
**Typ:** Tourismus / Partner  
**Status:** todo  
**Abhängigkeit:** HAH-002, HAH-010

**Beschreibung:**  
Rattenberg als Brücke für Busgruppen und Halbtagesausflüge konkretisieren.

**Akzeptanzkriterien:**

- Aufenthaltsdauer, Anreise, Museumsroute, Schmankerl und Foto sind als Ablauf skizziert.
- Offene Partnerfragen sind notiert.
- Paket ist als Ausbau nach Pilot markiert.

### HAH-020 - Ideenpool kuratieren

**Priorität:** P3  
**Typ:** Strategie / Content  
**Status:** todo  
**Abhängigkeit:** HAH-002

**Beschreibung:**  
Spätere Ideen so parken, dass sie erhalten bleiben, aber den Pilot nicht überladen.

**Akzeptanzkriterien:**

- Ideen sind kategorisiert: appnah, touristisch, Event, Technologie/XR, Premium/Beratung.
- Jede Idee hat einen Status.
- Im Pitch sind nur wenige Ideen sichtbar hervorgehoben.

## Sprint 5 - Auslieferung und Laienstart

### HAH-021 - Deployment-Strategie für GitHub und lokale Nutzung festlegen

**Priorität:** P1  
**Typ:** Deployment / Produktverpackung  
**Status:** done  
**Abhängigkeit:** HAH-005

**Beschreibung:**  
Festlegen, wie das Projekt für Laien gestartet werden soll: GitHub Pages, ZIP-Paket mit lokalem Starter oder echte Desktop-App.

**Akzeptanzkriterien:**

- Es gibt eine klare Empfehlung für `online ansehen`, `lokal starten` und `offline weitergeben`.
- Voraussetzungen sind für Laien verständlich dokumentiert.
- Der Unterschied zwischen Quellcode-Repo und fertigem Demo-Paket ist klar.

### HAH-022 - Statisches Build für GitHub Pages vorbereiten

**Priorität:** P1  
**Typ:** Deployment / Build  
**Status:** done  
**Abhängigkeit:** HAH-021

**Beschreibung:**  
Die Vite-Konfiguration so vorbereiten, dass das Projekt als statische Website auf GitHub Pages oder einem beliebigen Webserver läuft.

**Akzeptanzkriterien:**

- `npm run build` erzeugt ein veröffentlichbares `dist`.
- Asset-Pfade funktionieren für GitHub Pages.
- README erklärt, wie die Seite online gehostet wird.

### HAH-023 - Laien-Starter für Windows/macOS/Linux erstellen

**Priorität:** P2  
**Typ:** Tooling / Demo-Paket  
**Status:** done  
**Abhängigkeit:** HAH-021, HAH-022

**Beschreibung:**  
Einfache Startdateien erstellen, damit ein gebautes Demo-Paket lokal mit Doppelklick oder Terminalstart läuft.

**Akzeptanzkriterien:**

- Windows: `.bat` oder `.ps1` startet einen lokalen Server und öffnet die Seite.
- macOS/Linux: `.sh` startet einen lokalen Server und zeigt die lokale URL.
- Fehlermeldungen erklären, falls Node oder Python fehlt.
- README enthält eine Ein-Klick-/Doppelklick-Anleitung.

### HAH-024 - Optional: echte Desktop-App prüfen

**Priorität:** P3  
**Typ:** Packaging / Desktop  
**Status:** parked  
**Abhängigkeit:** HAH-021

**Beschreibung:**  
Prüfen, ob später eine echte installierbare App mit Tauri oder Electron sinnvoll ist, wenn das Projekt ohne Node/Python auf beliebigen PCs laufen soll.

**Akzeptanzkriterien:**

- Vor- und Nachteile von Tauri und Electron sind dokumentiert.
- Aufwand, Paketgröße und Update-Logik sind grob eingeschätzt.
- Entscheidung ist erst nach validiertem Pilot nötig.

## Erste empfohlene Tickets

1. `HAH-001` - Beschlussvorschlag für Pilot formulieren
2. `HAH-003` - 5-Minuten-Demo-Script schreiben
3. `HAH-004` - Produktbegriffe vereinheitlichen
4. `HAH-002` - Pilotumfang in der Seite sichtbar markieren
5. `HAH-021` - Deployment-Strategie für GitHub und lokale Nutzung festlegen

Diese Tickets bilden die Grundlage. Erst danach lohnt sich die sichtbare UI-Umsortierung, weil sonst unklar bleibt, worauf die Seite eigentlich optimiert und wie sie später weitergegeben wird.
