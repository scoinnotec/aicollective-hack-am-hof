# Hack am Hof Iteration I - Review aus mehreren Blickwinkeln

Stand: 2026-05-25  
Betrachtet wurde die lokale Webapp unter `http://127.0.0.1:5175/` von oben nach unten: Hero, Klickdummy, Smartphone-Prototyp, Karte, Avatar-Modul, Modul-Popups, Kontext, Buildathon-Referenzen, Prozess, Guide Studio, Besuchsanlaesse, Entscheidung, Aufwand und Skalierung.

## Kurzfazit

Der Prototyp ist inhaltlich stark und zeigt bereits ein plausibles Zielbild: Aus Museumswissen, Höferouten, Guide-Erzählungen, Fotos und Partnerangeboten soll ein wiederverwendbares Erlebnis- und Buchungssystem entstehen. Die größte Stärke ist die Breite der Ideen und die Verbindung aus realem Ort, Buildathon-Ergebnissen, Zielgruppenmodi, Wissensbasis und Pilotentscheidung.

Die größte Schwäche ist dieselbe Breite: Für Erstbetrachter wirkt die Seite stellenweise wie Pitch, Produktvision, App-Demo, Ideenparkplatz, Projektplan und Förderargument gleichzeitig. Das ist wertvoll als Arbeitsstand, aber für Vorstand, Partner oder Pilotentscheidung sollte die Geschichte stärker priorisiert werden.

Empfehlung: Die nächste Iteration sollte nicht mehr hauptsächlich neue Ideen ergänzen, sondern die vorhandenen Inhalte in drei klare Ebenen ordnen:

1. **Pilot jetzt**: Schulroute, Guide-Studio-Workshop, erste QR-Stationen, Feedbackauswertung.
2. **Partnerpakete danach**: Foto/Feier, Schmankerl, Rattenberg/Busgruppe, Familienroute.
3. **Spätere Plattform**: Buchung, Rollenrechte, KI-Avatar, Mission Builder, andere Museen, White Label.

## Was beim Durchklicken klar wird

### Klar

- Das zentrale Problem ist nicht fehlender Inhalt, sondern Übersetzung, Wiederverwendung und Sichtbarkeit für unterschiedliche Zielgruppen.
- Die Plattformthese ist stark: Eine Wissensbasis speist mehrere Besucherlayer.
- Der Pilot soll bewusst klein bleiben und nicht als fertige Komplett-App verkauft werden.
- Der Klickdummy macht den groben Besucherflow greifbar: Gruppe starten, QR/Code/NFC, Rollen, Station, Antwort, Punkte, Abschluss.
- Die Karte zeigt gut, dass je Zielgruppe andere Punkte und Angebote relevant werden.
- Das Guide Studio erklärt nachvollziehbar, dass die eigentliche Wertarbeit vor der App liegt: Sammeln, ordnen, Quellen und Freigaben klären.
- Die Kostenkorridore helfen, den Vorstand nicht in eine falsche "wir bauen gleich alles"-Entscheidung zu drücken.

### Unklar

- Der Produktname ist noch nicht entschieden: `Hack am Hof` wirkt als Projekt-/Buildathonname, aber noch nicht zwingend als Besucherprodukt.
- Die Kernzielgruppe des ersten Piloten konkurriert mit vielen anderen Zielgruppen. Schulklasse wirkt als Start logisch, wird aber durch Hochzeit, Kulinarik, Rattenberg, FPV, LARP, XR, Oldtimer usw. stark flankiert.
- Die Grenze zwischen MVP, Pilot, Partnerpaket und späterer Plattform ist im Seitenfluss nicht immer sichtbar.
- Es ist noch nicht klar, wer welche Inhalte freigibt: Museum, Verein, Guides, Gemeinde, Pfarre, Gasthaus, Tourismuspartner.
- Die Datenbasis ist konzeptionell beschrieben, aber noch nicht als verbindliches Modell mit Feldern, Status, Rollen und Workflows greifbar.
- Die Erfolgsmessung fehlt noch: Was wäre nach einem Pilot ein Erfolg? Anzahl Klassen, Verweildauer, Wiederbesuch, Feedback, Buchungen, Umsatz, Contentfortschritt?

## Pitch-Sicht

### Was stark ist

- Der Einstieg "Aus Museumswissen wird ein buchbares Erlebnis" ist prägnant und trifft den wirtschaftlichen Kern besser als eine reine App-These.
- Die Seite führt früh zu einer Entscheidung: Pilot freigeben, Karte + Guide Studio starten, Partnernutzen prüfen.
- Die Buildathon-Prototypen werden nicht blind übernommen, sondern als Baukasten eingeordnet. Das ist für einen Pitch wichtig, weil es Reife signalisiert.
- Der Smartphone-Klickdummy gibt dem Vorstand und Partnern etwas Greifbares. Das reduziert abstrakte KI-/Digitalisierungsdiskussion.
- Die Ambassador-These über Fotos ist pitchtauglich, weil sie Nutzen ausserhalb des Museumsbesuchs zeigt.

### Was im Pitch noch stört

- Die Seite hat mehrere starke Einstiege hintereinander: Hero, Klickdummy, Smartphone-Prototyp, Karte, Avatar, Module, Kontext. Dadurch ist unklar, welcher Moment der eigentliche Aha-Moment sein soll.
- "Besucher werden zu Ambassadors", "Rattenberg-Brücke", "KI nur auf freigegebenem Wissen", "Guide Studio", "eine Karte, acht Zielgruppen" sind alle gute Thesen, aber sie konkurrieren um Aufmerksamkeit.
- Einige spätere Formate wirken für eine Freigabeentscheidung zu weit weg: FPV-Drohnenrennen, LARP, XR, Oldtimer, Trachtenmodenschau. Sie sind als Ideenpool interessant, können aber den Eindruck erzeugen, dass das Projekt ausufert.
- Der Pitch nennt Kosten, aber noch keine Gegenleistung pro Stufe in einer entscheidungsfähigen Form: Was bekomme ich für 12.000-30.000 EUR ganz konkret am Ende?

### Optimierung für Pitch

- Einen klaren 5-Minuten-Pitch bauen:
  1. Problem: Inhalt ist da, aber nicht zielgruppenspezifisch aktivierbar.
  2. Lösung: Eine Wissensbasis, mehrere Erlebnislayer.
  3. Pilot: Eine Schulroute mit QR, Rollen, Karte, Feedback.
  4. Nutzen: Besucherbindung, Partnerpakete, Content bleibt im Museum.
  5. Entscheidung: Workshop + Pilotbudget + Verantwortliche.
- Alle Erweiterungsformate sichtbar als "später" markieren oder in einen Ideenparkplatz verschieben.
- Den Pitch mit einer einzigen Beschlussfrage abschließen: "Dürfen wir in X Wochen eine reale Schulroute mit Y Stationen, Z Content-Workshop und Feedbackauswertung pilotieren?"
- Pro Abschnitt eine klare Kernbotschaft verwenden. Derzeit sind viele Abschnitte in sich gut, aber zusammen sehr dicht.

## Entwicklersicht

### Was klar ist

- Technisch ist der aktuelle Stand eine React/Vite-Webapp mit statischen TypeScript-Daten.
- Der Start als Webapp/PWA ist sinnvoll: schneller vorführbar, keine App-Store-Hürde, später mit Capacitor verpackbar.
- Leaflet mit `ImageOverlay` für den Museumsplan ist für einen Prototyp passend.
- Die Komponenten sind grob sinnvoll getrennt: Klickdummy, Smartphone-Prototyp, Karte, Drawer, Avatar Lab, Guide Studio, Modul-/Future-Popups.
- Der Produktionsbuild läuft durch.

### Technische Risiken und Unklarheiten

- Das Bundle ist bereits groß: Vite meldet `index-CFxMhLGt.js` mit 527.32 kB minified / 162.68 kB gzip. Für einen Pitch ist das ok, für mobile Vor-Ort-Nutzung sollte Code-Splitting später geprüft werden.
- Sehr viele Inhalte liegen statisch in `platform.ts` und `contentStudio.ts`. Das ist für den Prototyp effizient, wird aber ab Pilot schnell schwer wartbar.
- Die App hat viele interaktive Oberflächen, aber noch keine zentrale Zustands-/Datenlogik. Später braucht es ein echtes Modell für `Location`, `Building`, `Room`, `Object`, `Source`, `Media`, `Mission`, `Role`, `Task`, `Consent`, `ReleaseStatus`.
- Der Klickdummy simuliert Gruppenräume, QR/NFC, Teilnehmer, Punkte und Rollen lokal. Das muss für den Pilot sauber getrennt werden in "Demo-Fake" und "echte Pilotfunktion".
- Uploads im Guide Studio und Avatar Lab sind teilweise nur UI-Prototyp. Das muss klar beschriftet bleiben, damit niemand echte Upload-/KI-Faehigkeit annimmt.
- Accessiblity ist solide angelegt, aber die Leaflet-Marker erscheinen im DOM als unbenannte Buttons. Für echte Nutzung sollten Marker klare Labels bekommen.

### Entwicklerische Optimierungen

- Datenmodell dokumentieren und aus den statischen Daten ableiten, bevor weitere UI-Module entstehen.
- `platform.ts` in fachliche Datenmodule trennen: `audiences`, `mapPoints`, `missions`, `futureFormats`, `buildathonReferences`, `moduleIdeas`.
- Konfigurierbare Statuswerte einführen: `idea`, `candidate`, `pilot`, `validated`, `parked`.
- Demo-Interaktionen testen: Klickdummy-Flow, Kartenmoduswechsel, Drawer/Modal, Avatar-Flow, Guide-Studio-Tabs.
- Code-Splitting für schwere Bereiche prüfen: Leaflet/Karte, Modals, Avatar/Foto, Future-Formate.
- Den Unterschied zwischen Prototyp-UI und zukünftiger Produktfunktion im Code und in der Doku konsequent markieren.

## UI-/UX-Sicht

### Was stark ist

- Die Seite fühlt sich bereits wie ein echtes Erlebnisprojekt an, nicht wie eine trockene Förderfolie.
- Die visuellen Assets geben dem Pitch Atmosphäre und zeigen viele Zielgruppen direkt im Kontext.
- Die Interaktionen sind vielfältig: Gruppe anlegen, Warteraum, Rollen, Hinweise, Stationen, Kartenlayer, Drawer, Popups, Avatar, Guide Studio.
- Die Zielgruppenmodi der Karte sind für Nicht-Techniker gut verständlich.
- Die Smartphone-Frames helfen, die abstrakte Plattformidee in Besuchssituationen zu übersetzen.

### UX-Probleme

- Die Seite ist sehr lang. Für Erstnutzer gibt es keinen klaren Fortschrittspfad ausser Scrollen und Ausprobieren.
- Der Klickdummy und der Smartphone-Prototyp zeigen ähnliche Dinge, aber mit unterschiedlicher UI-Sprache. Das kann verwirren: Ist das eine echte App, ein Pitchscreen oder zwei verschiedene Produkte?
- Die App hat viele "Pitch-Popup öffnen"-Karten. Das funktioniert als Arbeitsstand, wirkt aber in der Menge repetitiv.
- Die Karte hat sehr viele Hofpunkte und Buttons. Für Pitch und Pilot wäre eine fokussierte Route mit wenigen Stationen leichter lesbar.
- Der Avatar-/Foto-Teil wirkt emotional stark, benötigt aber noch klare Datenschutz-, Kinder- und Einwilligungslogik.
- Auf mobilen Viewports bleibt die Informationsmenge hoch. Die Struktur ist vorhanden, aber die Seite ist für echtes mobiles Lesen sehr lang.
- Die Seitennavigation unten ist nützlich, aber sie wirkt eher wie ein Review-/Präsentationswerkzeug als wie ein Endnutzer-Interface.

### UI-/UX-Optimierung

- Eine "Pitch Mode"-Route bauen: reduzierte Version mit 6 bis 8 Abschnitten und klarer Dramaturgie.
- Eine "App Mode"-Route bauen: nur der Besucherflow, ohne Vorstandstexte, Kosten und Buildathon-Kontext.
- Doppelte Smartphone-/App-Demo zusammenführen oder klar beschriften:
  - "Live-Klickdummy für Pilotflow"
  - "Konzeptscreens für spätere Module"
- Kartenansicht für die Schulroute zuerst auf 4 bis 5 echte Pilotstationen begrenzen.
- Popups priorisieren: maximal 3 im Live-Pitch zeigen, Rest als Ideenpool.
- In jeder Sektion sichtbarer machen, ob es um `Pilot`, `Später`, `Idee`, `Betrieb` oder `Partnerpaket` geht.
- Für den Vorstand eine kompakte Druck-/PDF-Ansicht oder ein Deck vorbereiten.

## Projektleiter-Sicht

### Was klar ist

- Der sinnvollste Start ist kein Vollausbau, sondern ein begrenzter Pilot.
- Vor Entwicklung muss ein Content-Workshop stattfinden.
- Es braucht reale Museumspartner für Freigaben, Geschichten, Fotos, Routen und historische Sicherheit.
- Die Schulroute ist der belastbarste erste Test, weil sie Lernziel, Gruppe, Zeitfenster und Feedback gut messbar macht.
- Foto-/Feierpaket und Schmankerlroute sind naheliegende zweite Bausteine, weil sie Partnernutzen und Umsatzlogik zeigen.

### Was für Umsetzung noch unklar ist

- Wer ist Product Owner auf Museumsseite?
- Wer entscheidet fachlich über historische Inhalte?
- Wer darf Inhalte hochladen, bearbeiten, freigeben und zurückziehen?
- Welche Stationen sind im Pilot real nutzbar und vor Ort beschilderbar?
- Gibt es WLAN/Mobilfunk/Offline-Anforderungen am Gelände?
- Wer betreut Gruppen bei Problemen vor Ort?
- Wie werden QR-Codes, NFC oder Startcodes physisch am Eingang und an Stationen platziert?
- Wie werden Kinderfotos, Gruppenbilder und Einwilligungen behandelt?
- Welche Partner sind für Paketideen wirklich entscheidungsfähig: Gasthaus, Tourismusverband, Rattenberg, Busunternehmen, Pfarre/Gemeinde?

### Projektstruktur für die nächste Phase

- **Phase 0: Entscheidungsvorbereitung**
  - Pitch kürzen.
  - Pilotumfang definieren.
  - Verantwortliche benennen.
  - Budgetkorridor bestätigen.

- **Phase 1: Content-Workshop**
  - 4 bis 5 Stationen wählen.
  - je Station Fakten, Anekdoten, Quellen, Bilder, Freigaben erfassen.
  - Zielgruppe und Sprache festlegen.
  - Datenschutz und Kindergruppen klären.

- **Phase 2: Pilot bauen**
  - Gruppenstart.
  - Rollen.
  - QR-Stationen.
  - einfache Karte.
  - Aufgaben/Fragen.
  - Lehrer-/Guide-Ansicht.
  - Feedbackauswertung.

- **Phase 3: Testbetrieb**
  - 2 bis 3 Schulklassen.
  - Guide-Feedback.
  - technische Stabilität.
  - Contentverständlichkeit.
  - Auswertung: Was wurde verstanden, wo wurde abgebrochen, was war zu lang?

- **Phase 4: Vorstandsbeschluss Ausbau**
  - Entscheiden, ob Foto-/Feierpaket, Schmankerlroute oder Familienmodus als nächstes kommt.
  - Datenmodell und Rechtekonzept in echte Plattform überführen.

## Vorstandssicht

### Was für eine Freigabe spricht

- Das Projekt nutzt vorhandene Stärken des Museums, statt eine fremde Digitalidee aufzusetzen.
- Die Investition kann wiederverwendbare Inhalte schaffen, nicht nur eine einmalige Kampagne.
- Der Pilot kann klein und kontrollierbar bleiben.
- Es gibt klare Partnerchancen: Schulen, Tourismus, Rattenberg, Gasthaus, Feiern, Gruppen.
- Das Projekt kann dem Museum helfen, junge Zielgruppen, Gruppen und internationale Besucher:innen besser zu erreichen.
- Die Kosten werden als Korridor und nicht als falsche Festpreis-Sicherheit dargestellt.

### Was ein Vorstand vor Freigabe klären sollte

- Ist die fachliche Qualität historischer Inhalte gesichert?
- Wer trägt Verantwortung für Datenschutz, Kinderfotos und Einwilligungen?
- Wird das Museum im Pilot personell entlastet oder zusätzlich belastet?
- Gibt es einen realistischen Betrieb ohne dauernde externe Agenturabhängigkeit?
- Gibt es einen Plan, falls die App vor Ort wegen Netz, Akku, Bedienung oder Wetter nicht funktioniert?
- Welche Entscheidungen müssen intern getroffen werden, bevor externe Entwicklung startet?
- Welche Förderungen oder Partnerbeiträge sind realistisch, ohne den Pilot zu überfrachten?

### Empfehlung für Vorstandsbeschluss

Nicht den Vollausbau freigeben. Sinnvoll wäre ein Beschluss dieser Art:

> Freigabe für einen begrenzten Pilot: eine Schulroute mit 4 bis 5 Stationen, Guide-Studio-Workshop, einfachem Webapp-Klickflow, QR-Start, Feedbackauswertung und Datenschutzklärung. Nach dem Pilot entscheidet der Vorstand über Ausbau in Foto-/Feierpaket, Schmankerlroute oder weitere Zielgruppen.

## Vereinheitlichung: Begriffe und Ebenen

### Begriffe, die vereinheitlicht werden sollten

- `Hack am Hof`: Projektname, Eventname oder Produktname?
- `Hofpass`: Besucherprodukt für Gruppen/Kinder.
- `Guide Studio`: internes Content- und Freigabewerkzeug.
- `Mission`: konkrete Besucherroute mit Rollen und Aufgaben.
- `Layer` oder `Modus`: Zielgruppenansicht auf dieselbe Karte.
- `Paket`: buchbares Angebot mit Partnern, Zeitfenster und Leistung.
- `Ideenpool`: nicht Teil des Piloten, sondern spätere Möglichkeiten.

### Empfohlene Produktarchitektur in Sprache

- **Hofpass**: Das sichtbare Besuchserlebnis.
- **Guide Studio**: Das interne Wissens- und Freigabesystem.
- **Partnerpakete**: Buchbare Angebote für Gruppen, Feiern und Tourismus.
- **Plattformkern**: Karte, Datenmodell, Rechte, Medien, Missionen, Feedback.

## Priorisierte Optimierungsliste

### P0 - Vor der nächsten Präsentation

- Pitch auf einen klaren Pilotentscheid kürzen.
- Startzielgruppe eindeutig auf Schulroute setzen.
- Erweiterungsformate als späteren Ideenpool markieren.
- Demo-Script schreiben: welche 5 Klicks werden im Vorstand gezeigt?
- Drei Kernzahlen definieren: Pilotdauer, Budget, Erfolgskriterien.
- Risiken benennen: Contentfreigabe, Datenschutz, Betrieb.

### P1 - Vor einem echten Pilot

- Pilotroute mit Museum fachlich prüfen.
- QR-/NFC-/Code-Mechanik als echte Minimalfunktion planen.
- Contentmodell finalisieren.
- Rollen- und Rechtekonzept definieren.
- Lehrer-/Guide-Ansicht skizzieren.
- Feedbackformular und Auswertung definieren.
- Offline-/Netzstrategie für das Gelände prüfen.

### P2 - Vor Plattformausbau

- Medien-Upload, Transkription und Quellenverwaltung entwickeln.
- KI-Funktionen erst nach Freigabe- und Quellenmodell aktivieren.
- Buchungslogik für Partnerpakete getrennt vom Museumscontent planen.
- App-Verpackung mit Capacitor erst nach validiertem Webpilot entscheiden.
- Code-Splitting und Performance für mobile Vor-Ort-Nutzung optimieren.

## Schlussbewertung

Iteration I ist als Visions- und Pitch-Prototyp deutlich weiter als ein reines Mockup. Man erkennt die Produktidee, die Zielgruppen, den Nutzen für Museum und Partner sowie eine mögliche technische Linie. Für die nächste Iteration sollte die Arbeit weniger in Breite und mehr in Entscheidungsschärfe gehen.

Der wichtigste Satz für die Weiterarbeit:

> Nicht noch mehr Möglichkeiten zeigen, sondern aus den vorhandenen Möglichkeiten einen entscheidbaren Pilot machen.
