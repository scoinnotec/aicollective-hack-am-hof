export type ContentScope = "hof" | "gebaeude" | "raum" | "areal" | "objekt";

export interface HistoricalTheme {
  id: string;
  title: string;
  period: string;
  summary: string;
  uxHook: string;
  sourceLabel: string;
}

export interface ContentCollection {
  id: string;
  scope: ContentScope;
  title: string;
  description: string;
  examples: string[];
}

export const historicalThemes: HistoricalTheme[] = [
  {
    id: "closed-farm",
    title: "Der Hof als unteilbares Überlebenssystem",
    period: "ca. 1500-1700",
    summary:
      "In Tirol war die Erhaltung leistungsfähiger Höfe zentral. Hofteilung konnte die Existenz einer Familie gefährden; daraus entstand die Logik des geschlossenen Hofes.",
    uxHook:
      "Die Gruppe entscheidet nicht nur, wo etwas liegt, sondern warum ein ganzer Hof zusammenhalten muss.",
    sourceLabel: "Geschlossener Hof / Tiroler Höferecht",
  },
  {
    id: "winter",
    title: "Winter, Vorrat und Einteilung",
    period: "ca. 1500-1700",
    summary:
      "In alpinen Lagen war der Winter lang. Vorratshaltung, Tierfutter, Brennholz, Reparaturen und Einteilung entschieden über das Frühjahr.",
    uxHook:
      "Jede Rolle prüft einen Teil des Systems: Feuer, Tiere, Vorrat, Werkzeug. Erst zusammen ergibt es Sinn.",
    sourceLabel: "Bäuerlicher Alltag / Alpenraum",
  },
  {
    id: "status",
    title: "Bauern waren nicht alle gleich",
    period: "Spätmittelalter bis Frühe Neuzeit",
    summary:
      "Freie Bauern, Zinsbauern, hörige Bauern und unterschiedliche Besitzgrößen prägten Alltag, Rechte und Abgaben.",
    uxHook:
      "Ein Guide kann Rollen mit unterschiedlichem Status anlegen: Hofbauer, Magd, Knecht, Kind, Handwerker, Tagelöhner.",
    sourceLabel: "Bauernstand / Rechtsstatus",
  },
  {
    id: "work",
    title: "Arbeit war saisonal, körperlich und gemeinsam",
    period: "ca. 1500-1700",
    summary:
      "Landwirtschaft, Viehhaltung, Holz, Reparatur, Verarbeitung und Haushalt waren kein getrennter Berufsmix, sondern ein Jahreslauf.",
    uxHook:
      "Missionen sollten nie nur Quizfragen sein, sondern Beobachtungen, Entscheidungen und kleine Handlungen auslösen.",
    sourceLabel: "Alltag und Arbeit",
  },
];

export const contentCollections: ContentCollection[] = [
  {
    id: "hof-profile",
    scope: "hof",
    title: "Hofprofil",
    description: "Grunddaten je Hof: Herkunft, Baujahr, Bautyp, Region, Bewohnergeschichten, Quellen.",
    examples: ["Alter Segger Hof", "Tierstaller Hof", "Hackler Hof", "Gwiggen Hof"],
  },
  {
    id: "building-stories",
    scope: "gebaeude",
    title: "Gebäude & Nebengebäude",
    description: "Schmiede, Mühle, Schule, Badestube, Brücke, Speicher oder Stall als eigene Wissensorte.",
    examples: ["Schmiede: Reparatur", "Mühle: Getreide", "Schule: Kinderleben"],
  },
  {
    id: "room-audio",
    scope: "raum",
    title: "Raumgeschichten & Audio",
    description: "Guides können kurze Geschichten einsprechen: Was passierte hier, wer arbeitete hier, warum ist der Raum wichtig?",
    examples: ["Stube", "Rauchküche", "Kammer", "Stall"],
  },
  {
    id: "area-layer",
    scope: "areal",
    title: "Areal, Wege und Blickpunkte",
    description: "Routen, Fotospots, Kräuterpunkte, Sicherheitszonen und saisonale Besonderheiten.",
    examples: ["Weg der Sinne", "Brücke", "Rohrerhof Umfeld"],
  },
  {
    id: "object-clues",
    scope: "objekt",
    title: "Objekte als Hinweise",
    description: "Werkzeuge, Vorratsgefäße, Feuerstelle, Beschilderungen oder Markierungen als Missionselemente.",
    examples: ["Sense", "Topfhaken", "Getreidesack", "Hufeisen"],
  },
];
