# ELI5: So funktioniert das Projekt

ELI5 bedeutet: "Erkläre es so, als wäre ich fünf." Es geht nicht darum, jemanden klein zu machen. Es geht darum, die Idee ohne Fachsprache zu verstehen.

## Was ist dieses Projekt?

Das Projekt ist wie ein digitales Plakat und ein klickbarer Handy-Prototyp für ein Museum.

Stell dir vor:

- Das Museum hat viele Höfe, Geschichten, Bilder und Aufgaben.
- Besucher:innen sollen nicht nur Schilder lesen.
- Sie sollen am Handy Rollen bekommen, Stationen finden, kleine Aufgaben lösen und Geschichten hören.
- Das Museum soll später selbst Wissen sammeln, prüfen und daraus neue Erlebnisse bauen können.

Diese Website zeigt, wie das aussehen könnte.

## Was ist GitHub?

GitHub ist wie ein gemeinsamer Projektordner im Internet.

In diesem Ordner liegen:

- Texte,
- Bilder,
- Programmdateien,
- Aufgabenlisten,
- Versionen der Änderungen.

Wenn du das Projekt auf deinen Computer holst, machst du dir eine Kopie dieses Projektordners. Wenn du etwas verbesserst, kannst du deine Änderungen wieder zu GitHub hochladen.

## Was ist die App?

Die App ist keine fertige App aus dem App Store. Sie ist eine Webapp.

Das heißt:

- Sie läuft im Browser.
- Sie kann lokal auf deinem Computer gestartet werden.
- Später könnte sie als PWA oder echte Handy-App verpackt werden.

## Welche Datei macht was?

Sehr vereinfacht:

| Datei oder Ordner | Was ist das? |
| --- | --- |
| `README.md` | Startseite der Projektdokumentation |
| `docs/` | Ausführlichere Dokumente |
| `apps/web/src/App.tsx` | Die große Hauptseite: Reihenfolge der Abschnitte, Klicklogik, Inhalte zusammensetzen |
| `apps/web/src/data/platform.ts` | Viele Daten: Kartenpunkte, Zielgruppen, Missionen, Prototypen, Texte |
| `apps/web/src/components/` | Einzelteile der Seite, zum Beispiel Klickdummy, Karte, Guide Studio |
| `apps/web/src/styles.css` | Farben, Abstände, Schriftgrößen, Layout |
| `apps/web/public/` | Bilder, Lageplan, PWA-Dateien |

## Was passiert beim Starten?

1. Du startest den Entwicklungsserver mit `npm run dev`.
2. Der Browser öffnet `http://127.0.0.1:5173/`.
3. Vite baut aus den Dateien eine sichtbare Website.
4. Wenn du Code änderst, aktualisiert sich die Website meistens automatisch.

## Was kann ich gefahrlos ändern?

Am einfachsten:

- Texte in `apps/web/src/data/platform.ts`
- Reihenfolge und Formulierungen in `apps/web/src/App.tsx`
- Farben, Abstände und Größen in `apps/web/src/styles.css`
- Bilder in `apps/web/public/pitch-images/`
- Dokumentation in `README.md` und `docs/`

Vorsichtiger sein solltest du bei:

- Paketdateien wie `package.json`
- Build-Konfigurationen wie `vite.config.ts`
- TypeScript-Typen, wenn du nicht weisst, was sie bedeuten
- GitHub Actions in `.github/workflows/`

## Was bedeutet "Vibe Coding" hier?

Vibe Coding heißt hier: Du beschreibst einem KI-Tool, was du willst, und lässt dir beim Ändern helfen.

Beispiel:

> "Mach den Buildathon-Bereich kompakter. Die drei Sieger sollen oben bleiben, die restlichen zehn Prototypen sollen als sortierte Liste darunter stehen."

Ein gutes KI-Tool kann dann Code lesen, Dateien ändern und testen.

Wichtig: Du solltest trotzdem immer im Browser anschauen, ob das Ergebnis wirklich passt.

## Merksatz

Dieses Projekt ist ein Museums-Prototyp im Browser. GitHub ist der Projektordner im Internet. Dein Computer ist die Werkbank. KI-Tools helfen dir beim Umbauen.
