# Hack am Hof - Projekt-Backlog

Stand: 2026-05-25  
Basis: Review und Optimierungspakete aus Iteration I

## Backlog-Ziel

Dieser Backlog uebersetzt die Review-Erkenntnisse in kleine, bearbeitbare Tickets. Er ist bewusst nicht nach Ideenbreite sortiert, sondern nach dem Weg zu einem entscheidbaren und danach pilotierbaren Projekt.

## Statuswerte

- `todo`: noch nicht begonnen
- `ready`: fachlich klar genug fuer Umsetzung
- `doing`: in Arbeit
- `review`: umgesetzt, wartet auf Sichtpruefung
- `done`: umgesetzt und geprueft
- `parked`: bewusst spaeter

## Prioritaeten

- `P0`: vor der naechsten Praesentation/Vorstandsrunde
- `P1`: vor einem echten Pilot
- `P2`: vor Plattformausbau oder Foerder-/Partnergespraechen
- `P3`: Ideenpool

## Sprint 0 - Entscheidungsschaerfe

### HAH-001 - Beschlussvorschlag fuer Pilot formulieren

**Prioritaet:** P0  
**Typ:** Pitch / Strategie  
**Status:** todo  
**Abhaengigkeit:** keine

**Beschreibung:**  
Einen kurzen Beschlussvorschlag formulieren, der klar macht, dass nicht der Vollausbau, sondern ein begrenzter Schulklassen-Pilot freigegeben werden soll.

**Akzeptanzkriterien:**

- Beschlussfrage ist in 2 bis 4 Saetzen formulierbar.
- Umfang nennt Route, Stationen, QR-/Code-Start, Rollen, Guide-Studio-Workshop und Feedbackauswertung.
- Ausbauideen sind nicht Teil der Freigabe.

### HAH-002 - Pilotumfang in der Seite sichtbar markieren

**Prioritaet:** P0  
**Typ:** UI / Content  
**Status:** todo  
**Abhaengigkeit:** HAH-001

**Beschreibung:**  
Die Seite soll sichtbar zwischen `Pilot jetzt`, `Naechster Ausbau`, `Ideenpool` und `Spaetere Plattform` unterscheiden.

**Akzeptanzkriterien:**

- Schulroute und Guide Studio sind als Pilotkern erkennbar.
- Foto/Feier, Schmankerl und Rattenberg sind als naechster Ausbau markiert.
- FPV, LARP, XR, Oldtimer und aehnliche Formate sind als Ideenpool markiert.

### HAH-003 - 5-Minuten-Demo-Script schreiben

**Prioritaet:** P0  
**Typ:** Pitch / Demo  
**Status:** todo  
**Abhaengigkeit:** HAH-001

**Beschreibung:**  
Ein kurzes Script fuer den Live-Pitch erstellen: welche Abschnitte werden gezeigt, welche Klicks werden ausgefuehrt, welche Aussage gehoert dazu.

**Akzeptanzkriterien:**

- Script enthaelt maximal 7 aktive Klicks.
- Jeder Klick hat eine Pitch-Aussage.
- Demo endet mit der Beschlussfrage.

### HAH-004 - Produktbegriffe vereinheitlichen

**Prioritaet:** P0  
**Typ:** Content / Produktstrategie  
**Status:** todo  
**Abhaengigkeit:** HAH-001

**Beschreibung:**  
Ein konsistentes Begriffsset einfuehren: `Hack am Hof`, `Hofpass`, `Guide Studio`, `Mission`, `Layer/Modus`, `Partnerpaket`.

**Akzeptanzkriterien:**

- Begriffsliste ist dokumentiert.
- UI-Texte verwenden die Begriffe konsistent.
- `Hack am Hof` wird nicht gleichzeitig als Event, App, Plattform und Besucherprodukt verwendet.

## Sprint 1 - Pitch und UI fokussieren

### HAH-005 - Hero auf Pilotentscheidung nachschaerfen

**Prioritaet:** P0  
**Typ:** UI / Copy  
**Status:** todo  
**Abhaengigkeit:** HAH-001, HAH-004

**Beschreibung:**  
Der Hero soll sofort klarer machen: Es geht um einen kleinen Pilot, nicht um eine sofort vollstaendige Plattform.

**Akzeptanzkriterien:**

- Headline bleibt stark, aber fuehrt zur Pilotentscheidung.
- Entscheidungsvorschlag nennt den naechsten konkreten Schritt.
- Sekundaere Thesen konkurrieren nicht mit der Hauptaussage.

### HAH-006 - Klickdummy auf Schulklassen-Pilot fokussieren

**Prioritaet:** P1  
**Typ:** UI / Produktflow  
**Status:** todo  
**Abhaengigkeit:** HAH-003

**Beschreibung:**  
Der Klickdummy soll primaer den Schulklassen-Pilot zeigen: Gruppe erstellen, Warteraum, Rollen, Station, Abschluss.

**Akzeptanzkriterien:**

- Standardpfad ist Schulklasse.
- Besucher koennen den Flow ohne Erklaerung durchklicken.
- Optionale Modi sind reduziert oder klar als Beispiele markiert.

### HAH-007 - Smartphone-Prototyp vom Klickdummy abgrenzen

**Prioritaet:** P1  
**Typ:** UI / Informationsarchitektur  
**Status:** todo  
**Abhaengigkeit:** HAH-006

**Beschreibung:**  
Klarstellen, warum es sowohl Klickdummy als auch Smartphone-Konzeptscreens gibt.

**Akzeptanzkriterien:**

- Klickdummy ist als Pilotflow beschriftet.
- Smartphone-Prototyp ist als spaetere Modulvorschau beschriftet.
- Redundante Erklaerungen sind reduziert.

### HAH-008 - Kartenansicht auf Pilotroute verdichten

**Prioritaet:** P1  
**Typ:** UI / Karte  
**Status:** todo  
**Abhaengigkeit:** HAH-002

**Beschreibung:**  
Die Karte soll im Einstieg nicht alle Moeglichkeiten gleich stark zeigen, sondern zuerst die Pilotroute.

**Akzeptanzkriterien:**

- 4 bis 5 Pilotstationen sind visuell hervorgehoben.
- Hoefe bleiben sichtbar, aber zweitrangig.
- Marker haben klare Labels fuer Barrierefreiheit und QA.

## Sprint 2 - Vorstands- und Pilotfaehigkeit

### HAH-009 - Risikoabschnitt fuer Vorstand ergaenzen

**Prioritaet:** P1  
**Typ:** Pitch / Governance  
**Status:** todo  
**Abhaengigkeit:** HAH-001

**Beschreibung:**  
Risiken offen benennen und mit Gegenmassnahmen verbinden.

**Akzeptanzkriterien:**

- Historische Freigabe, Datenschutz, Kinderfotos, Netz/Offline und Betrieb sind genannt.
- Zu jedem Risiko gibt es eine naechste Massnahme.
- Der Abschnitt blockiert den Pilot nicht, sondern macht ihn kontrollierbar.

### HAH-010 - Erfolgsmessung fuer Pilot definieren

**Prioritaet:** P1  
**Typ:** Projektleitung / Evaluation  
**Status:** todo  
**Abhaengigkeit:** HAH-001

**Beschreibung:**  
Messbare Kriterien festlegen, damit nach dem Pilot ueber Ausbau entschieden werden kann.

**Akzeptanzkriterien:**

- 5 bis 8 Erfolgskriterien sind definiert.
- Feedbackfragen fuer Lehrperson, Guide und Gruppe sind skizziert.
- Abbruch- oder Nachbesserungskriterien sind benannt.

### HAH-011 - Guide-Studio-Arbeitsprozess konkretisieren

**Prioritaet:** P1  
**Typ:** Content / Fachprozess  
**Status:** todo  
**Abhaengigkeit:** HAH-004

**Beschreibung:**  
Das Guide Studio soll zeigen, welche Inhalte in welcher Qualitaet gebraucht werden.

**Akzeptanzkriterien:**

- Contentstatus ist sichtbar: Entwurf, geprueft, freigegeben, gesperrt, unsicher.
- Minimalfelder fuer Stationen sind dokumentiert.
- Mindestens ein Beispiel zeigt Fakt, Anekdote, Quelle und Freigabe.

### HAH-012 - Pilotroute fachlich pruefbar machen

**Prioritaet:** P1  
**Typ:** Museum / Content  
**Status:** todo  
**Abhaengigkeit:** HAH-008, HAH-011

**Beschreibung:**  
Die Route `Ein Winter ohne Supermarkt` so ausarbeiten, dass Museum und Guides sie fachlich pruefen koennen.

**Akzeptanzkriterien:**

- Jede Station hat Ort, Aufgabe, historische Aussage und Quelle/Freigabefeld.
- Sprache ist fuer Schulklasse geeignet.
- Unsichere Inhalte sind markiert.

## Sprint 3 - Technisches Fundament

### HAH-013 - Datenmodell fuer Pilot skizzieren

**Prioritaet:** P2  
**Typ:** Architektur  
**Status:** todo  
**Abhaengigkeit:** HAH-011

**Beschreibung:**  
Ein erstes Datenmodell fuer Pilot und spaetere Plattform dokumentieren.

**Akzeptanzkriterien:**

- Entitaeten sind skizziert: Location, Building, Room, Object, Source, Media, Mission, Role, Task, Release, Feedback.
- Pflichtfelder fuer Pilot sind markiert.
- Spaetere Plattformfelder sind getrennt.

### HAH-014 - Statische Daten fachlich aufteilen

**Prioritaet:** P2  
**Typ:** Code / Wartbarkeit  
**Status:** todo  
**Abhaengigkeit:** HAH-013

**Beschreibung:**  
Die grossen statischen Datenmodule in fachliche Bereiche trennen.

**Akzeptanzkriterien:**

- Daten sind nach Audiences, MapPoints, Missions, FutureFormats, ModuleIdeas und References getrennt.
- Keine UI-Funktion geht verloren.
- Build laeuft.

### HAH-015 - Bundle-Groesse und Code-Splitting pruefen

**Prioritaet:** P2  
**Typ:** Performance  
**Status:** todo  
**Abhaengigkeit:** HAH-014 optional

**Beschreibung:**  
Den Vite-Hinweis auf grosses JS-Bundle analysieren und sinnvolle Splits pruefen.

**Akzeptanzkriterien:**

- Leaflet/Karte ist als moeglicher Split bewertet.
- Modals/Future-Formate sind bewertet.
- Build-Ergebnis ist dokumentiert.

### HAH-016 - Kritische UI-Flows testen

**Prioritaet:** P2  
**Typ:** QA  
**Status:** todo  
**Abhaengigkeit:** HAH-006, HAH-008

**Beschreibung:**  
Basis-QA fuer die wichtigsten sichtbaren Flows definieren und ausfuehren.

**Akzeptanzkriterien:**

- Klickdummy-Hauptpfad getestet.
- Kartenmodus und Detail-Drawer getestet.
- Avatar-Flow getestet.
- Guide-Studio-Tabs getestet.
- Mobile Sichtpruefung dokumentiert.

## Sprint 4 - Partnerpakete und Ausbau

### HAH-017 - Foto-/Feierpaket als Partnerangebot strukturieren

**Prioritaet:** P2  
**Typ:** Partner / Angebot  
**Status:** todo  
**Abhaengigkeit:** HAH-002, HAH-010

**Beschreibung:**  
Das Foto-/Feiermodul als reales Partnerpaket beschreiben, nicht nur als App-Idee.

**Akzeptanzkriterien:**

- Zielgruppe, Leistung, Partner, Ablauf und Risiken sind beschrieben.
- Datenschutz/Einwilligung ist als Klaerungspunkt enthalten.
- Paket ist nicht Teil des Schulpiloten.

### HAH-018 - Schmankerlroute als Partnerangebot strukturieren

**Prioritaet:** P2  
**Typ:** Partner / Angebot  
**Status:** todo  
**Abhaengigkeit:** HAH-002, HAH-010

**Beschreibung:**  
Die Schmankerlroute als pruefbares Angebot mit Gastronomie-/Kulinarikbezug formulieren.

**Akzeptanzkriterien:**

- Zielgruppe, Route, Partner, Angebot und Museumsnutzen sind beschrieben.
- Kein Buchungssystem wird vorausgesetzt.
- Naechster Testschritt ist benannt.

### HAH-019 - Rattenberg-/Busgruppenpaket strukturieren

**Prioritaet:** P2  
**Typ:** Tourismus / Partner  
**Status:** todo  
**Abhaengigkeit:** HAH-002, HAH-010

**Beschreibung:**  
Rattenberg als Bruecke fuer Busgruppen und Halbtagesausfluege konkretisieren.

**Akzeptanzkriterien:**

- Aufenthaltsdauer, Anreise, Museumsroute, Schmankerl und Foto sind als Ablauf skizziert.
- Offene Partnerfragen sind notiert.
- Paket ist als Ausbau nach Pilot markiert.

### HAH-020 - Ideenpool kuratieren

**Prioritaet:** P3  
**Typ:** Strategie / Content  
**Status:** todo  
**Abhaengigkeit:** HAH-002

**Beschreibung:**  
Spaetere Ideen so parken, dass sie erhalten bleiben, aber den Pilot nicht ueberladen.

**Akzeptanzkriterien:**

- Ideen sind kategorisiert: appnah, touristisch, Event, Technologie/XR, Premium/Beratung.
- Jede Idee hat einen Status.
- Im Pitch sind nur wenige Ideen sichtbar hervorgehoben.

## Sprint 5 - Auslieferung und Laienstart

### HAH-021 - Deployment-Strategie fuer GitHub und lokale Nutzung festlegen

**Prioritaet:** P1  
**Typ:** Deployment / Produktverpackung  
**Status:** done  
**Abhaengigkeit:** HAH-005

**Beschreibung:**  
Festlegen, wie das Projekt fuer Laien gestartet werden soll: GitHub Pages, ZIP-Paket mit lokalem Starter oder echte Desktop-App.

**Akzeptanzkriterien:**

- Es gibt eine klare Empfehlung fuer `online ansehen`, `lokal starten` und `offline weitergeben`.
- Voraussetzungen sind fuer Laien verstaendlich dokumentiert.
- Der Unterschied zwischen Quellcode-Repo und fertigem Demo-Paket ist klar.

### HAH-022 - Statisches Build fuer GitHub Pages vorbereiten

**Prioritaet:** P1  
**Typ:** Deployment / Build  
**Status:** done  
**Abhaengigkeit:** HAH-021

**Beschreibung:**  
Die Vite-Konfiguration so vorbereiten, dass das Projekt als statische Website auf GitHub Pages oder einem beliebigen Webserver laeuft.

**Akzeptanzkriterien:**

- `npm run build` erzeugt ein veroeffentlichbares `dist`.
- Asset-Pfade funktionieren fuer GitHub Pages.
- README erklaert, wie die Seite online gehostet wird.

### HAH-023 - Laien-Starter fuer Windows/macOS/Linux erstellen

**Prioritaet:** P2  
**Typ:** Tooling / Demo-Paket  
**Status:** done  
**Abhaengigkeit:** HAH-021, HAH-022

**Beschreibung:**  
Einfache Startdateien erstellen, damit ein gebautes Demo-Paket lokal mit Doppelklick oder Terminalstart laeuft.

**Akzeptanzkriterien:**

- Windows: `.bat` oder `.ps1` startet einen lokalen Server und oeffnet die Seite.
- macOS/Linux: `.sh` startet einen lokalen Server und zeigt die lokale URL.
- Fehlermeldungen erklaeren, falls Node oder Python fehlt.
- README enthaelt eine Ein-Klick-/Doppelklick-Anleitung.

### HAH-024 - Optional: echte Desktop-App pruefen

**Prioritaet:** P3  
**Typ:** Packaging / Desktop  
**Status:** parked  
**Abhaengigkeit:** HAH-021

**Beschreibung:**  
Pruefen, ob spaeter eine echte installierbare App mit Tauri oder Electron sinnvoll ist, wenn das Projekt ohne Node/Python auf beliebigen PCs laufen soll.

**Akzeptanzkriterien:**

- Vor- und Nachteile von Tauri und Electron sind dokumentiert.
- Aufwand, Paketgroesse und Update-Logik sind grob eingeschaetzt.
- Entscheidung ist erst nach validiertem Pilot noetig.

## Erste empfohlene Tickets

1. `HAH-001` - Beschlussvorschlag fuer Pilot formulieren
2. `HAH-003` - 5-Minuten-Demo-Script schreiben
3. `HAH-004` - Produktbegriffe vereinheitlichen
4. `HAH-002` - Pilotumfang in der Seite sichtbar markieren
5. `HAH-021` - Deployment-Strategie fuer GitHub und lokale Nutzung festlegen

Diese Tickets bilden die Grundlage. Erst danach lohnt sich die sichtbare UI-Umsortierung, weil sonst unklar bleibt, worauf die Seite eigentlich optimiert und wie sie spaeter weitergegeben wird.
