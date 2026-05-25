# Architecture

## Entscheidung

Start als React/Vite-Webapp mit PWA-Grundstruktur. Später kann dieselbe Webapp mit Capacitor als iOS-/Android-App verpackt werden.

## Warum Webapp zuerst

- schneller pitchbar,
- auf jedem Handy im Browser testbar,
- keine App-Store-Hürde im Pilot,
- dieselbe UI kann später als PWA oder App laufen,
- Datenmodell kann früh validiert werden.

## Kernmodule

### Experience Layer

- Schulklassenmission,
- Hochzeits-, Feier- und Fotospotmodus,
- Kulinarik-/Kirchtagmodus,
- Kräuter-/Naturmodus,
- Familienmodus,
- Pensionistenmodus,
- Chroniker-/Archivmodus,
- interner Wartungsmodus,
- Avatar-Modul,
- Guide Studio,
- Erweiterungsformate wie Geocaching, FPV-Events, Creator-Walks, Bustourismus, Motorrad-Einkehr, LARP/Living-History, Mittelalterfest und Oldtimer-Sternfahrt als nachgelagerte Optionen.
- Feierformate wie freie Trauung, kirchliche Option, Taufe und Familienfeier bleiben als eigener Layer modelliert, weil sie Ablauf, Partner, Zuständigkeit und sensible Orte brauchen.
- Statistik-Austria-Daten zu Tourismus und Verkehr werden als externer Plausibilitätslayer genutzt, nicht als primäre Produktdatenbank.
- Ambassador-Logik ist ein eigener Funnel: Foto/Avatar erzeugen, digital bereitstellen, Druck upsellen, Sharing für Reisegruppen ermöglichen.
- XR-Zeitreise bleibt optionales Zusatzmodul. Sie darf erst entstehen, wenn Content, Quellen, Altersfreigabe, Betrieb und Partnerzuständigkeit geklärt sind.

### Map Layer

- aktuell Leaflet mit Museumsplan als `ImageOverlay`,
- später optional OSM/OpenMapTiles/PMTiles,
- eigene Layer für Mission, Foto, Kulinarik, Kräuter, Familie, Chronik und Wartung.

### Content Layer

- heute statische TypeScript-Daten,
- später Datenbanktabellen für Höfe, Gebäude, Räume, Objekte, Quellen, Medien, Missionen und Aufgaben.

### AI Layer später

- Avatar-Erzeugung aus Foto + Rollenprofil,
- Missionsvorschläge aus geprüften Guide-Inhalten,
- Zusammenfassungen aus Audio-Transkripten,
- keine freie historische Halluzination ohne Quellenbasis.

## Datenschutz-Hinweis für MVP

Der Prototyp verarbeitet Foto-Uploads nur lokal im Browser. Es findet kein echter Upload und keine Speicherung statt.

## Spätere App-Fähigkeit

Empfohlen:

- PWA-Offline-Cache,
- IndexedDB für lokale Inhalte,
- Supabase/Postgres oder vergleichbare Datenbank,
- Storage für Medien,
- Capacitor für App-Verpackung,
- rollenbasierte Rechte: Besucher, Guide, Admin, Intern.
