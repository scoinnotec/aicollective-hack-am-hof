# Hack am Hof Iteration I - Priorisierte Optimierungspakete

Stand: 2026-05-25  
Basis: Review-Dokument `2026-05-25_Hack-am-Hof-Iteration-I-Review.md`

## Ziel dieser Paketplanung

Die Optimierungen sollen nicht als großer Umbau passieren, sondern in kleinen, kontrollierbaren Paketen. Jedes Paket soll einzeln besprochen, umgesetzt, getestet und bei Bedarf verworfen oder angepasst werden können.

Leitprinzip: Erst Entscheidungsschärfe, dann Pitch-Dramaturgie, dann Produkt-/Datenfundament, dann Ausbauideen.

## Prioritätslogik

- **P0**: Muss vor der nächsten ernsthaften Präsentation oder Vorstandsrunde passieren.
- **P1**: Wichtig für einen belastbaren Pilot, aber nicht zwingend für die erste gekürzte Pitch-Version.
- **P2**: Wichtig für Plattformausbau, Förderlogik oder echte Produktentwicklung.
- **P3**: Ideenparkplatz, erst nach Validierung des Piloten relevant.

## Paket 1 - Pilotentscheidung schärfen

**Priorität:** P0  
**Größe:** klein  
**Abhängigkeiten:** keine  
**Ziel:** Der Pitch soll nicht mehr wie eine Gesamtausbauentscheidung wirken, sondern auf einen kleinen, entscheidbaren Pilot führen.

### Inhalt

- Eine klare Beschlussfrage formulieren.
- Pilotumfang festlegen:
  - eine Schulroute,
  - 4 bis 5 Stationen,
  - QR-/Code-Start,
  - Rollen und Aufgaben,
  - Guide-Studio-Workshop,
  - Feedbackauswertung.
- Alle anderen Ideen sichtbar als `später`, `Partnerpaket` oder `Ideenpool` markieren.
- Kostenkorridor für genau diesen Pilot konkretisieren.

### Nicht enthalten

- Keine technische Umsetzung.
- Kein Redesign.
- Keine Erweiterung neuer Ideen.

### Definition of Done

- Es gibt einen kurzen Abschnitt `Beschlussvorschlag`.
- Der Vorstand kann mit Ja/Nein über den nächsten Schritt entscheiden.
- Der Unterschied zwischen Pilot und späterem Ausbau ist eindeutig.

## Paket 2 - 5-Minuten-Pitchdramaturgie bauen

**Priorität:** P0  
**Größe:** klein bis mittel  
**Abhängigkeiten:** Paket 1  
**Ziel:** Eine kompakte Erzählreihenfolge für Live-Pitch und Vorstand.

### Inhalt

- Pitch auf 5 Kernschritte reduzieren:
  1. Problem.
  2. Lösung.
  3. Pilotflow.
  4. Nutzen.
  5. Beschluss.
- Aus der bestehenden Seite eine klare Demo-Reihenfolge ableiten.
- Definieren, welche 5 bis 7 Klicks live gezeigt werden.
- Alles markieren, was im Pitch nicht aktiv gezeigt wird.

### Nicht enthalten

- Keine komplette Seitenänderung.
- Keine neue Funktion.

### Definition of Done

- Es gibt ein Demo-Script für 5 Minuten.
- Die Live-Demo springt nicht wahllos durch die Seite.
- Jeder gezeigte Abschnitt beantwortet eine konkrete Pitchfrage.

## Paket 3 - Seitenstruktur in drei Ebenen ordnen

**Priorität:** P0  
**Größe:** mittel  
**Abhängigkeiten:** Paket 1 und 2  
**Ziel:** Die bestehende Seite soll auf einen Blick zwischen Pilot, nächstem Ausbau und Ideenpool unterscheiden.

### Inhalt

- Sichtbare Labels einführen:
  - `Pilot jetzt`,
  - `Nächster Ausbau`,
  - `Ideenpool`,
  - `Spätere Plattform`.
- Erweiterungsformate wie FPV, LARP, XR, Oldtimer, Tracht als Ideenpool gruppieren.
- Schulroute, Guide Studio und QR-Mission nach vorne ziehen.
- Partnerpakete wie Foto/Feier, Schmankerl, Rattenberg als zweite Ebene darstellen.

### Nicht enthalten

- Keine inhaltliche Löschung.
- Keine neue Datenbankstruktur.

### Definition of Done

- Ein Erstbetrachter versteht innerhalb von 60 Sekunden, was jetzt entschieden werden soll.
- Spätere Ideen wirken nicht mehr wie Teil des Sofortumfangs.
- Die Seite bleibt als Gesamtvision nutzbar.

## Paket 4 - Produktbegriffe vereinheitlichen

**Priorität:** P0  
**Größe:** klein  
**Abhängigkeiten:** Paket 1  
**Ziel:** Begriffe sollen nicht zwischen Projektname, Appname, Modulname und Pitchbegriff verschwimmen.

### Inhalt

- Begriffsset festlegen:
  - `Hack am Hof` als Projekt-/Arbeitsname,
  - `Hofrunde` als Besucherprodukt,
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

**Priorität:** P1  
**Größe:** mittel  
**Abhängigkeiten:** Paket 2  
**Ziel:** Der Klickdummy soll den Pilotflow klarer zeigen und nicht wie ein kompletter App-Produktumfang wirken.

### Inhalt

- Standardflow auf Schulklasse setzen.
- Gruppenerstellung, Warteraum, Rollen, erste Station, Abschluss als Hauptpfad definieren.
- Optionale Modi im Klickdummy reduzieren oder klar als Beispiele kennzeichnen.
- Antwortoptionen und Stationen stabilisieren.
- Minispiel entweder sichtbar in den Hauptflow integrieren oder vorerst weglassen.

### Nicht enthalten

- Kein echter Mehrgeräte-Gruppenraum.
- Keine echte QR-/NFC-Funktion.

### Definition of Done

- Eine Person kann den Flow ohne Erklärung durchklicken.
- Der Flow passt zur Pilotentscheidung.
- Der Klickdummy zeigt nicht mehr zu viele parallele Produktversprechen.

## Paket 6 - Karte auf Pilotroute verdichten

**Priorität:** P1  
**Größe:** mittel  
**Abhängigkeiten:** Paket 1  
**Ziel:** Die Karte soll im Pitch zuerst eine reale Pilotroute zeigen, nicht alle Möglichkeiten gleichzeitig.

### Inhalt

- Schulmodus initial auf 4 bis 5 Pilotstationen begrenzen.
- Höfe weiterhin sichtbar, aber weniger dominant.
- Pilotroute visuell hervorheben.
- Kartenpunkte mit klaren Labels versehen.
- Marker-Accessibility verbessern.

### Nicht enthalten

- Keine neue Kartenengine.
- Keine echten GPS-/Outdoor-Funktionen.

### Definition of Done

- Die Schulroute ist sofort erkennbar.
- Detail-Drawer erklärt pro Station Aufgabe, Wissen und Nutzen.
- Andere Zielgruppenlayer bleiben erreichbar, aber nicht im Vordergrund.

## Paket 7 - Guide-Studio-Fundament konkretisieren

**Priorität:** P1  
**Größe:** mittel  
**Abhängigkeiten:** Paket 4  
**Ziel:** Das Guide Studio soll weniger wie ein UI-Mockup und mehr wie ein fachlicher Arbeitsprozess wirken.

### Inhalt

- Contentstatus einführen:
  - Entwurf,
  - fachlich geprüft,
  - freigegeben,
  - gesperrt,
  - unsicher.
- Minimalfelder definieren:
  - Hof,
  - Ort/Gebäude/Raum/Objekt,
  - Aussage,
  - Quelle,
  - Altersstufe,
  - Zielgruppe,
  - Freigabestatus.
- In der UI zeigen, dass Upload und Aufnahme derzeit Prototyp sind.
- Beispiel für eine echte Station mit Fakten, Anekdote, Quelle und Freigabe anlegen.

### Nicht enthalten

- Kein echter Upload.
- Keine Datenbank.
- Keine Benutzerverwaltung.

### Definition of Done

- Museum/Guides verstehen, was sie liefern müssen.
- KI-Generierung wirkt klar an Freigaben gebunden.
- Der Contentprozess ist als Vorbedingung für die App sichtbar.

## Paket 8 - Risiken und Vorstandsfragen sichtbar machen

**Priorität:** P1  
**Größe:** klein  
**Abhängigkeiten:** Paket 1  
**Ziel:** Der Pitch soll Vertrauen schaffen, indem Risiken kontrolliert benannt werden.

### Inhalt

- Kurzer Abschnitt `Was vor dem Pilot geklärt wird`.
- Risiken aufnehmen:
  - historische Freigabe,
  - Datenschutz/Kinderfotos,
  - Betrieb vor Ort,
  - Netz/Offline,
  - Rollen und Verantwortlichkeiten,
  - Pflege nach Pilot.
- Zu jedem Risiko eine Gegenmassnahme notieren.

### Nicht enthalten

- Kein vollständiges Datenschutzkonzept.
- Keine Rechtsberatung.

### Definition of Done

- Kritische Fragen werden nicht versteckt.
- Der Vorstand sieht, dass der Pilot bewusst begrenzt ist.
- Risiken blockieren nicht den Pilot, sondern werden als Arbeitspunkte geführt.

## Paket 9 - Erfolgsmessung für Pilot definieren

**Priorität:** P1  
**Größe:** klein  
**Abhängigkeiten:** Paket 1  
**Ziel:** Nach dem Pilot soll objektiver entschieden werden können, ob ein Ausbau sinnvoll ist.

### Inhalt

- 5 bis 8 Erfolgskriterien definieren:
  - Anzahl getesteter Gruppen,
  - Abschlussquote,
  - Verständlichkeit,
  - Guide-/Lehrerfeedback,
  - technische Probleme,
  - Contentaufwand,
  - Wiederverwendungswert,
  - Partnerinteresse.
- Feedbackfragen für Lehrperson, Guide und Besuchergruppe skizzieren.
- Auswertung als Teil des Pilotumfangs benennen.

### Nicht enthalten

- Kein echtes Analytics-System.
- Kein fertiges Formular.

### Definition of Done

- Der Pilot hat messbare Ziele.
- Ausbauentscheidung basiert nicht nur auf Bauchgefühl.
- Erfolg und Abbruchkriterien sind klar.

## Paket 10 - Technisches Datenmodell skizzieren

**Priorität:** P2  
**Größe:** mittel  
**Abhängigkeiten:** Paket 7  
**Ziel:** Vor echter Entwicklung soll klar sein, welche Daten später gepflegt werden.

### Inhalt

- Tabellen/Entitäten skizzieren:
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
- Pflichtfelder für Pilot markieren.
- Spätere Felder für Plattform markieren.

### Nicht enthalten

- Keine Datenbankmigration.
- Keine API.

### Definition of Done

- Entwickler können aus dem Modell eine erste technische Architektur ableiten.
- Museum/Guides können prüfen, ob das Modell fachlich passt.
- MVP- und Plattformdaten sind getrennt.

## Paket 11 - Performance und technische Hygiene

**Priorität:** P2  
**Größe:** klein bis mittel  
**Abhängigkeiten:** keine, aber sinnvoll nach Paket 3  
**Ziel:** Die App soll für mobile Vor-Ort-Nutzung vorbereitet werden.

### Inhalt

- Bundle-Hinweis analysieren.
- Code-Splitting für schwere Bereiche prüfen:
  - Karte/Leaflet,
  - Modals,
  - Avatar/Fotos,
  - große Datenlisten.
- Statische Datenmodule fachlich trennen.
- Basis-Tests für kritische Flows ergänzen.

### Nicht enthalten

- Keine komplette Architekturumstellung.
- Keine Backend-Integration.

### Definition of Done

- Build läuft ohne neue Warnungen oder mit dokumentierter Begründung.
- Kritische UI-Flows sind leichter testbar.
- Der Code ist besser auf echte Pilotentwicklung vorbereitet.

## Paket 12 - Partnerpakete strukturieren

**Priorität:** P2  
**Größe:** mittel  
**Abhängigkeiten:** Paket 3 und 9  
**Ziel:** Foto/Feier, Schmankerl und Rattenberg sollen als reale nächste Pakete prüfbar werden.

### Inhalt

- Drei Partnerpakete definieren:
  - Feier/Fotopunkt,
  - Schmankerlroute,
  - Rattenberg/Busgruppe.
- Pro Paket klären:
  - Zielgruppe,
  - Partner,
  - Leistung,
  - Buchungslogik,
  - Museumsnutzen,
  - Risiken,
  - nächster Test.
- Alles andere im Ideenpool lassen.

### Nicht enthalten

- Keine echte Buchungsfunktion.
- Keine Preisverhandlung.

### Definition of Done

- Jedes Partnerpaket ist als Gesprächsgrundlage nutzbar.
- Der Unterschied zwischen Besucher-App und buchbarem Angebot ist klar.
- Partnerpakete konkurrieren nicht mehr mit dem Schulpilot.

## Paket 13 - Ideenpool parken und kuratieren

**Priorität:** P3  
**Größe:** klein  
**Abhängigkeiten:** Paket 3  
**Ziel:** Gute Ideen bleiben erhalten, stören aber nicht die Pilotentscheidung.

### Inhalt

- Ideenpool in Kategorien ordnen:
  - direkt appnah,
  - touristisch/partnerbezogen,
  - Event/Sonderformat,
  - Technologie/XR,
  - Premium/Beratung.
- Jede Idee bekommt Status:
  - `parken`,
  - `später prüfen`,
  - `nur mit Partner`,
  - `nicht für Pilot`.
- Im Pitch nur 3 bis 5 Ideen sichtbar hervorheben.

### Nicht enthalten

- Keine weitere Ausarbeitung jeder Idee.

### Definition of Done

- Ideen werden nicht verloren.
- Der Pitch wirkt nicht überladen.
- Der Pilot bleibt priorisiert.

## Empfohlene Reihenfolge

1. Paket 1 - Pilotentscheidung schärfen
2. Paket 2 - 5-Minuten-Pitchdramaturgie bauen
3. Paket 4 - Produktbegriffe vereinheitlichen
4. Paket 3 - Seitenstruktur in drei Ebenen ordnen
5. Paket 5 - Klickdummy fokussieren
6. Paket 6 - Karte auf Pilotroute verdichten
7. Paket 8 - Risiken und Vorstandsfragen sichtbar machen
8. Paket 9 - Erfolgsmessung für Pilot definieren
9. Paket 7 - Guide-Studio-Fundament konkretisieren
10. Paket 10 - Technisches Datenmodell skizzieren
11. Paket 12 - Partnerpakete strukturieren
12. Paket 11 - Performance und technische Hygiene
13. Paket 13 - Ideenpool parken und kuratieren

## Kontrollierter Arbeitsmodus

Pro Paket sollte nur eine kleine Entscheidung getroffen werden:

- **Startfrage:** Was soll nach diesem Paket klarer sein?
- **Änderungsumfang:** Welche Dateien oder Inhalte werden angefasst?
- **Review:** Ist der Pitch danach klarer oder nur voller?
- **Stop-Kriterium:** Was wird bewusst nicht gemacht?

## Arbeitsregel für jede Phase

Vor jeder Umsetzung wird kurz dokumentiert:

- **Was ich in dieser Phase ändern würde:** konkrete sichtbare und inhaltliche Änderungen.
- **Warum diese Änderung jetzt dran ist:** Bezug zum Paket und zur Entscheidungsschärfe.
- **Was bewusst nicht geändert wird:** Schutz vor Scope-Creep.

Nach jeder sichtbaren Umsetzung wird kurz dokumentiert:

- **Sichtbar umgesetzt:** welche UI-, Text-, Struktur- oder Doku-Änderung jetzt im Projekt sichtbar ist.
- **Prüfung:** wo die Änderung kontrolliert wurde, zum Beispiel Browser, Build oder Doku-Lesetest.
- **Nächster kleiner Schritt:** welches Paket oder welcher Teilbereich als nächstes sinnvoll ist.

Diese Rückmeldung soll pro Phase knapp bleiben, aber konkret genug sein, damit jederzeit nachvollziehbar ist, was geplant war und was wirklich sichtbar umgesetzt wurde.

## Erste sinnvolle Arbeitseinheit

Als nächster konkreter Schritt empfiehlt sich **Paket 1**:

> Aus der aktuellen Vision einen knappen Beschlussvorschlag für einen Schulklassen-Pilot machen.

Das ist der größte Hebel, weil alle weiteren Pakete davon abhängen. Solange der Pilotumfang nicht sauber abgegrenzt ist, werden UI, Texte, Technik und Partnerideen automatisch weiter auseinanderlaufen.
