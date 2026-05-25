# Hack am Hof Iteration I - Priorisierte Optimierungspakete

Stand: 2026-05-25  
Basis: Review-Dokument `2026-05-25_Hack-am-Hof-Iteration-I-Review.md`

## Ziel dieser Paketplanung

Die Optimierungen sollen nicht als grosser Umbau passieren, sondern in kleinen, kontrollierbaren Paketen. Jedes Paket soll einzeln besprochen, umgesetzt, getestet und bei Bedarf verworfen oder angepasst werden koennen.

Leitprinzip: Erst Entscheidungsschaerfe, dann Pitch-Dramaturgie, dann Produkt-/Datenfundament, dann Ausbauideen.

## Prioritaetslogik

- **P0**: Muss vor der naechsten ernsthaften Praesentation oder Vorstandsrunde passieren.
- **P1**: Wichtig fuer einen belastbaren Pilot, aber nicht zwingend fuer die erste gekuerzte Pitch-Version.
- **P2**: Wichtig fuer Plattformausbau, Foerderlogik oder echte Produktentwicklung.
- **P3**: Ideenparkplatz, erst nach Validierung des Piloten relevant.

## Paket 1 - Pilotentscheidung schaerfen

**Prioritaet:** P0  
**Groesse:** klein  
**Abhaengigkeiten:** keine  
**Ziel:** Der Pitch soll nicht mehr wie eine Gesamtausbauentscheidung wirken, sondern auf einen kleinen, entscheidbaren Pilot fuehren.

### Inhalt

- Eine klare Beschlussfrage formulieren.
- Pilotumfang festlegen:
  - eine Schulroute,
  - 4 bis 5 Stationen,
  - QR-/Code-Start,
  - Rollen und Aufgaben,
  - Guide-Studio-Workshop,
  - Feedbackauswertung.
- Alle anderen Ideen sichtbar als `spaeter`, `Partnerpaket` oder `Ideenpool` markieren.
- Kostenkorridor fuer genau diesen Pilot konkretisieren.

### Nicht enthalten

- Keine technische Umsetzung.
- Kein Redesign.
- Keine Erweiterung neuer Ideen.

### Definition of Done

- Es gibt einen kurzen Abschnitt `Beschlussvorschlag`.
- Der Vorstand kann mit Ja/Nein ueber den naechsten Schritt entscheiden.
- Der Unterschied zwischen Pilot und spaeterem Ausbau ist eindeutig.

## Paket 2 - 5-Minuten-Pitchdramaturgie bauen

**Prioritaet:** P0  
**Groesse:** klein bis mittel  
**Abhaengigkeiten:** Paket 1  
**Ziel:** Eine kompakte Erzaehlreihenfolge fuer Live-Pitch und Vorstand.

### Inhalt

- Pitch auf 5 Kernschritte reduzieren:
  1. Problem.
  2. Loesung.
  3. Pilotflow.
  4. Nutzen.
  5. Beschluss.
- Aus der bestehenden Seite eine klare Demo-Reihenfolge ableiten.
- Definieren, welche 5 bis 7 Klicks live gezeigt werden.
- Alles markieren, was im Pitch nicht aktiv gezeigt wird.

### Nicht enthalten

- Keine komplette Seitenaenderung.
- Keine neue Funktion.

### Definition of Done

- Es gibt ein Demo-Script fuer 5 Minuten.
- Die Live-Demo springt nicht wahllos durch die Seite.
- Jeder gezeigte Abschnitt beantwortet eine konkrete Pitchfrage.

## Paket 3 - Seitenstruktur in drei Ebenen ordnen

**Prioritaet:** P0  
**Groesse:** mittel  
**Abhaengigkeiten:** Paket 1 und 2  
**Ziel:** Die bestehende Seite soll auf einen Blick zwischen Pilot, naechstem Ausbau und Ideenpool unterscheiden.

### Inhalt

- Sichtbare Labels einfuehren:
  - `Pilot jetzt`,
  - `Naechster Ausbau`,
  - `Ideenpool`,
  - `Spaetere Plattform`.
- Erweiterungsformate wie FPV, LARP, XR, Oldtimer, Tracht als Ideenpool gruppieren.
- Schulroute, Guide Studio und QR-Mission nach vorne ziehen.
- Partnerpakete wie Foto/Feier, Schmankerl, Rattenberg als zweite Ebene darstellen.

### Nicht enthalten

- Keine inhaltliche Loeschung.
- Keine neue Datenbankstruktur.

### Definition of Done

- Ein Erstbetrachter versteht innerhalb von 60 Sekunden, was jetzt entschieden werden soll.
- Spaetere Ideen wirken nicht mehr wie Teil des Sofortumfangs.
- Die Seite bleibt als Gesamtvision nutzbar.

## Paket 4 - Produktbegriffe vereinheitlichen

**Prioritaet:** P0  
**Groesse:** klein  
**Abhaengigkeiten:** Paket 1  
**Ziel:** Begriffe sollen nicht zwischen Projektname, Appname, Modulname und Pitchbegriff verschwimmen.

### Inhalt

- Begriffsset festlegen:
  - `Hack am Hof` als Projekt-/Arbeitsname,
  - `Hofpass` als Besucherprodukt,
  - `Guide Studio` als internes Werkzeug,
  - `Mission` als Route mit Aufgaben,
  - `Layer` oder `Modus` als Zielgruppenansicht,
  - `Partnerpaket` als buchbares Angebot.
- Texte auf diese Begriffe anpassen.
- Uneinheitliche Begriffe reduzieren.

### Nicht enthalten

- Kein finales Branding.
- Kein Logo.

### Definition of Done

- Es gibt eine kleine Begriffsliste in der Doku.
- Die UI verwendet die wichtigsten Begriffe konsistent.
- `Hack am Hof` wird nicht gleichzeitig als Event, App, Plattform und Besucherprodukt verwendet.

## Paket 5 - Klickdummy fokussieren

**Prioritaet:** P1  
**Groesse:** mittel  
**Abhaengigkeiten:** Paket 2  
**Ziel:** Der Klickdummy soll den Pilotflow klarer zeigen und nicht wie ein kompletter App-Produktumfang wirken.

### Inhalt

- Standardflow auf Schulklasse setzen.
- Gruppenerstellung, Warteraum, Rollen, erste Station, Abschluss als Hauptpfad definieren.
- Optionale Modi im Klickdummy reduzieren oder klar als Beispiele kennzeichnen.
- Antwortoptionen und Stationen stabilisieren.
- Minispiel entweder sichtbar in den Hauptflow integrieren oder vorerst weglassen.

### Nicht enthalten

- Kein echter Mehrgeraete-Gruppenraum.
- Keine echte QR-/NFC-Funktion.

### Definition of Done

- Eine Person kann den Flow ohne Erklaerung durchklicken.
- Der Flow passt zur Pilotentscheidung.
- Der Klickdummy zeigt nicht mehr zu viele parallele Produktversprechen.

## Paket 6 - Karte auf Pilotroute verdichten

**Prioritaet:** P1  
**Groesse:** mittel  
**Abhaengigkeiten:** Paket 1  
**Ziel:** Die Karte soll im Pitch zuerst eine reale Pilotroute zeigen, nicht alle Moeglichkeiten gleichzeitig.

### Inhalt

- Schulmodus initial auf 4 bis 5 Pilotstationen begrenzen.
- Hoefe weiterhin sichtbar, aber weniger dominant.
- Pilotroute visuell hervorheben.
- Kartenpunkte mit klaren Labels versehen.
- Marker-Accessibility verbessern.

### Nicht enthalten

- Keine neue Kartenengine.
- Keine echten GPS-/Outdoor-Funktionen.

### Definition of Done

- Die Schulroute ist sofort erkennbar.
- Detail-Drawer erklaert pro Station Aufgabe, Wissen und Nutzen.
- Andere Zielgruppenlayer bleiben erreichbar, aber nicht im Vordergrund.

## Paket 7 - Guide-Studio-Fundament konkretisieren

**Prioritaet:** P1  
**Groesse:** mittel  
**Abhaengigkeiten:** Paket 4  
**Ziel:** Das Guide Studio soll weniger wie ein UI-Mockup und mehr wie ein fachlicher Arbeitsprozess wirken.

### Inhalt

- Contentstatus einfuehren:
  - Entwurf,
  - fachlich geprueft,
  - freigegeben,
  - gesperrt,
  - unsicher.
- Minimalfelder definieren:
  - Hof,
  - Ort/Gebaeude/Raum/Objekt,
  - Aussage,
  - Quelle,
  - Altersstufe,
  - Zielgruppe,
  - Freigabestatus.
- In der UI zeigen, dass Upload und Aufnahme derzeit Prototyp sind.
- Beispiel fuer eine echte Station mit Fakten, Anekdote, Quelle und Freigabe anlegen.

### Nicht enthalten

- Kein echter Upload.
- Keine Datenbank.
- Keine Benutzerverwaltung.

### Definition of Done

- Museum/Guides verstehen, was sie liefern muessen.
- KI-Generierung wirkt klar an Freigaben gebunden.
- Der Contentprozess ist als Vorbedingung fuer die App sichtbar.

## Paket 8 - Risiken und Vorstandsfragen sichtbar machen

**Prioritaet:** P1  
**Groesse:** klein  
**Abhaengigkeiten:** Paket 1  
**Ziel:** Der Pitch soll Vertrauen schaffen, indem Risiken kontrolliert benannt werden.

### Inhalt

- Kurzer Abschnitt `Was vor dem Pilot geklaert wird`.
- Risiken aufnehmen:
  - historische Freigabe,
  - Datenschutz/Kinderfotos,
  - Betrieb vor Ort,
  - Netz/Offline,
  - Rollen und Verantwortlichkeiten,
  - Pflege nach Pilot.
- Zu jedem Risiko eine Gegenmassnahme notieren.

### Nicht enthalten

- Kein vollstaendiges Datenschutzkonzept.
- Keine Rechtsberatung.

### Definition of Done

- Kritische Fragen werden nicht versteckt.
- Der Vorstand sieht, dass der Pilot bewusst begrenzt ist.
- Risiken blockieren nicht den Pilot, sondern werden als Arbeitspunkte gefuehrt.

## Paket 9 - Erfolgsmessung fuer Pilot definieren

**Prioritaet:** P1  
**Groesse:** klein  
**Abhaengigkeiten:** Paket 1  
**Ziel:** Nach dem Pilot soll objektiver entschieden werden koennen, ob ein Ausbau sinnvoll ist.

### Inhalt

- 5 bis 8 Erfolgskriterien definieren:
  - Anzahl getesteter Gruppen,
  - Abschlussquote,
  - Verstaendlichkeit,
  - Guide-/Lehrerfeedback,
  - technische Probleme,
  - Contentaufwand,
  - Wiederverwendungswert,
  - Partnerinteresse.
- Feedbackfragen fuer Lehrperson, Guide und Besuchergruppe skizzieren.
- Auswertung als Teil des Pilotumfangs benennen.

### Nicht enthalten

- Kein echtes Analytics-System.
- Kein fertiges Formular.

### Definition of Done

- Der Pilot hat messbare Ziele.
- Ausbauentscheidung basiert nicht nur auf Bauchgefuehl.
- Erfolg und Abbruchkriterien sind klar.

## Paket 10 - Technisches Datenmodell skizzieren

**Prioritaet:** P2  
**Groesse:** mittel  
**Abhaengigkeiten:** Paket 7  
**Ziel:** Vor echter Entwicklung soll klar sein, welche Daten spaeter gepflegt werden.

### Inhalt

- Tabellen/Entitaeten skizzieren:
  - `Location`,
  - `Building`,
  - `Room`,
  - `Object`,
  - `Source`,
  - `Media`,
  - `Mission`,
  - `Role`,
  - `Task`,
  - `Release`,
  - `Feedback`.
- Beziehungen darstellen.
- Pflichtfelder fuer Pilot markieren.
- Spaetere Felder fuer Plattform markieren.

### Nicht enthalten

- Keine Datenbankmigration.
- Keine API.

### Definition of Done

- Entwickler koennen aus dem Modell eine erste technische Architektur ableiten.
- Museum/Guides koennen pruefen, ob das Modell fachlich passt.
- MVP- und Plattformdaten sind getrennt.

## Paket 11 - Performance und technische Hygiene

**Prioritaet:** P2  
**Groesse:** klein bis mittel  
**Abhaengigkeiten:** keine, aber sinnvoll nach Paket 3  
**Ziel:** Die App soll fuer mobile Vor-Ort-Nutzung vorbereitet werden.

### Inhalt

- Bundle-Hinweis analysieren.
- Code-Splitting fuer schwere Bereiche pruefen:
  - Karte/Leaflet,
  - Modals,
  - Avatar/Fotos,
  - grosse Datenlisten.
- Statische Datenmodule fachlich trennen.
- Basis-Tests fuer kritische Flows ergaenzen.

### Nicht enthalten

- Keine komplette Architekturumstellung.
- Keine Backend-Integration.

### Definition of Done

- Build laeuft ohne neue Warnungen oder mit dokumentierter Begruendung.
- Kritische UI-Flows sind leichter testbar.
- Der Code ist besser auf echte Pilotentwicklung vorbereitet.

## Paket 12 - Partnerpakete strukturieren

**Prioritaet:** P2  
**Groesse:** mittel  
**Abhaengigkeiten:** Paket 3 und 9  
**Ziel:** Foto/Feier, Schmankerl und Rattenberg sollen als reale naechste Pakete pruefbar werden.

### Inhalt

- Drei Partnerpakete definieren:
  - Feier/Fotopunkt,
  - Schmankerlroute,
  - Rattenberg/Busgruppe.
- Pro Paket klaeren:
  - Zielgruppe,
  - Partner,
  - Leistung,
  - Buchungslogik,
  - Museumsnutzen,
  - Risiken,
  - naechster Test.
- Alles andere im Ideenpool lassen.

### Nicht enthalten

- Keine echte Buchungsfunktion.
- Keine Preisverhandlung.

### Definition of Done

- Jedes Partnerpaket ist als Gespraechsgrundlage nutzbar.
- Der Unterschied zwischen Besucher-App und buchbarem Angebot ist klar.
- Partnerpakete konkurrieren nicht mehr mit dem Schulpilot.

## Paket 13 - Ideenpool parken und kuratieren

**Prioritaet:** P3  
**Groesse:** klein  
**Abhaengigkeiten:** Paket 3  
**Ziel:** Gute Ideen bleiben erhalten, stoeren aber nicht die Pilotentscheidung.

### Inhalt

- Ideenpool in Kategorien ordnen:
  - direkt appnah,
  - touristisch/partnerbezogen,
  - Event/Sonderformat,
  - Technologie/XR,
  - Premium/Beratung.
- Jede Idee bekommt Status:
  - `parken`,
  - `spaeter pruefen`,
  - `nur mit Partner`,
  - `nicht fuer Pilot`.
- Im Pitch nur 3 bis 5 Ideen sichtbar hervorheben.

### Nicht enthalten

- Keine weitere Ausarbeitung jeder Idee.

### Definition of Done

- Ideen werden nicht verloren.
- Der Pitch wirkt nicht ueberladen.
- Der Pilot bleibt priorisiert.

## Empfohlene Reihenfolge

1. Paket 1 - Pilotentscheidung schaerfen
2. Paket 2 - 5-Minuten-Pitchdramaturgie bauen
3. Paket 4 - Produktbegriffe vereinheitlichen
4. Paket 3 - Seitenstruktur in drei Ebenen ordnen
5. Paket 5 - Klickdummy fokussieren
6. Paket 6 - Karte auf Pilotroute verdichten
7. Paket 8 - Risiken und Vorstandsfragen sichtbar machen
8. Paket 9 - Erfolgsmessung fuer Pilot definieren
9. Paket 7 - Guide-Studio-Fundament konkretisieren
10. Paket 10 - Technisches Datenmodell skizzieren
11. Paket 12 - Partnerpakete strukturieren
12. Paket 11 - Performance und technische Hygiene
13. Paket 13 - Ideenpool parken und kuratieren

## Kontrollierter Arbeitsmodus

Pro Paket sollte nur eine kleine Entscheidung getroffen werden:

- **Startfrage:** Was soll nach diesem Paket klarer sein?
- **Aenderungsumfang:** Welche Dateien oder Inhalte werden angefasst?
- **Review:** Ist der Pitch danach klarer oder nur voller?
- **Stop-Kriterium:** Was wird bewusst nicht gemacht?

## Arbeitsregel fuer jede Phase

Vor jeder Umsetzung wird kurz dokumentiert:

- **Was ich in dieser Phase aendern wuerde:** konkrete sichtbare und inhaltliche Aenderungen.
- **Warum diese Aenderung jetzt dran ist:** Bezug zum Paket und zur Entscheidungsschaerfe.
- **Was bewusst nicht geaendert wird:** Schutz vor Scope-Creep.

Nach jeder sichtbaren Umsetzung wird kurz dokumentiert:

- **Sichtbar umgesetzt:** welche UI-, Text-, Struktur- oder Doku-Aenderung jetzt im Projekt sichtbar ist.
- **Pruefung:** wo die Aenderung kontrolliert wurde, zum Beispiel Browser, Build oder Doku-Lesetest.
- **Naechster kleiner Schritt:** welches Paket oder welcher Teilbereich als naechstes sinnvoll ist.

Diese Rueckmeldung soll pro Phase knapp bleiben, aber konkret genug sein, damit jederzeit nachvollziehbar ist, was geplant war und was wirklich sichtbar umgesetzt wurde.

## Erste sinnvolle Arbeitseinheit

Als naechster konkreter Schritt empfiehlt sich **Paket 1**:

> Aus der aktuellen Vision einen knappen Beschlussvorschlag fuer einen Schulklassen-Pilot machen.

Das ist der groesste Hebel, weil alle weiteren Pakete davon abhaengen. Solange der Pilotumfang nicht sauber abgegrenzt ist, werden UI, Texte, Technik und Partnerideen automatisch weiter auseinanderlaufen.
