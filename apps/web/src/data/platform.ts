import {
  BookOpen,
  Camera,
  ClipboardCheck,
  Clock,
  Flower2,
  Hammer,
  HeartHandshake,
  House,
  School,
  Utensils,
  Users,
  type LucideIcon,
} from "lucide-react";

export type AudienceMode =
  | "school"
  | "wedding"
  | "culinary"
  | "herbs"
  | "family"
  | "pensioners"
  | "chroniclers"
  | "maintenance";

export type MapPointType =
  | "mission"
  | "photo"
  | "celebration"
  | "culinary"
  | "herb"
  | "family"
  | "hof"
  | "pensioner"
  | "chronicler"
  | "maintenance";

export interface Audience {
  id: AudienceMode;
  title: string;
  shortTitle: string;
  claim: string;
  value: string;
  accent: string;
  icon: LucideIcon;
}

export interface MapPoint {
  id: string;
  type: MapPointType;
  title: string;
  subtitle: string;
  description: string;
  x: number;
  y: number;
  audience: AudienceMode[];
  tags: string[];
  status?: "open" | "planned" | "done" | "verified";
  priority?: "low" | "medium" | "high";
  details?: string[];
  eventInfo?: {
    title: string;
    bullets: string[];
    cta?: string;
  };
  photoStudio?: {
    title: string;
    description: string;
    options: string[];
  };
}

export interface MissionRole {
  id: string;
  name: string;
  description: string;
  privateHint: string;
}

export interface MissionVariant {
  title: string;
  audience: string;
  duration: string;
  description: string;
}

export interface GeneratedMission {
  id: string;
  title: string;
  setup: string;
  audience: string;
  duration: string;
  roles: string[];
  stations: string[];
  knowledge: string;
  finale: string;
}

export interface ClickDummyMode {
  id: string;
  label: string;
  title: string;
  description: string;
  benefit: string;
}

export interface ClickDummyStation {
  id: string;
  title: string;
  place: string;
  task: string;
  choices: string[];
  correctChoice: string;
  reward: string;
  knowledge: string;
}

export interface ClickDummyMission {
  id: string;
  modeId: string;
  title: string;
  audience: string;
  duration: string;
  hook: string;
  roles: string[];
  stations: ClickDummyStation[];
  finale: string;
}

export interface RoadmapItem {
  phase: string;
  title: string;
  description: string;
}

export interface ProcessStep {
  number: string;
  title: string;
  description: string;
  need: string;
}

export interface FutureFormat {
  id: string;
  title: string;
  audience: string;
  description: string;
  guardrail: string;
  stage: string;
  campaign: string;
  museumBenefit: string;
  cadence: string;
}

export interface EventLearning {
  id: string;
  title: string;
  signal: string;
  transfer: string;
  appUse: string;
}

export interface CulinaryInspiration {
  id: string;
  name: string;
  angle: string;
  routeUse: string;
}

export interface BuildathonReference {
  id: string;
  title: string;
  source: string;
  summary: string;
  takeaway: string;
}

export interface PrototypeScreen {
  id: string;
  label: string;
  title: string;
  subtitle: string;
  action: string;
  chips: string[];
  insight: string;
  source: string;
}

export interface ExpansionArea {
  id: string;
  title: string;
  description: string;
  examples: string[];
}

export interface ModuleIdea {
  id: string;
  title: string;
  description: string;
  detailTitle: string;
  detail: string;
  examples: string[];
}

export const pitchGoalCards = [
  {
    id: "decision",
    title: "Konkretes Ziel",
    text: "Am Ende soll eine Pilotentscheidung stehen: erste Schulroute, Guide-Studio-Workshop und ein bis zwei buchbare Besucherpakete.",
  },
  {
    id: "value",
    title: "Wert für Museum und Partner",
    text: "Aus vorhandenem Wissen entstehen wiederverwendbare Module für Vermittlung, Events, Gruppen, Kulinarik und Betrieb.",
  },
  {
    id: "reach",
    title: "Reichweite durch Besucherfotos",
    text: "Historische Ambiente-Fotos machen Gäste zu Botschafter:innen in ihren Communities und Reiseländern.",
  },
];

export const pitchSteps = [
  "Reale Orte werden für Besucher:innen leichter verständlich und wiederbesuchbar.",
  "Das Wissen der Guides, des Vereins und des Museums wird geordnet und bleibt nutzbar.",
  "Eine Karte zeigt je nach Zielgruppe andere Erlebnisse, Routen und Angebote.",
  "Schule, Feier, Kulinarik, Gruppenreisen, Rattenberg und interner Betrieb profitieren vom selben System.",
  "Der nächste Beschluss kann klein bleiben: Pilotroute, Wissensworkshop und erste Besucherpakete.",
];

export const ambassadorLevers = [
  {
    title: "Foto als Mitnahmegrund",
    text: "Gäste erhalten ein teilbares Erinnerungsbild im historischen Ambiente, optional als Druck, Holzlaser, Glasgravur oder antik wirkender Holzrahmen an der Kasse.",
  },
  {
    title: "Communities aktivieren",
    text: "Gerade Reisende aus Asien oder dem Nahen Osten teilen besondere Orte stark in Familie, Reisegruppen und Social Feeds.",
  },
  {
    title: "Rattenberg als Brücke",
    text: "Die Nähe zur Glasstadt macht kurze Kombipakete realistisch: Rattenberg, Busparkplatz, Museum, Schmankerl und Foto.",
  },
];

export const buildathonReferences: BuildathonReference[] = [
  {
    id: "T01",
    title: "Ideenhof",
    source: "https://ideenhof.lovable.app",
    summary: "Strategieplattform, in der neue Ideen gesammelt und per KI bewertet werden.",
    takeaway: "Als Admin-/Partner-Modul aufnehmen: Ideen sammeln, priorisieren, freigeben.",
  },
  {
    id: "T02",
    title: "musealive",
    source: "https://tirol-timeslip-tales.lovable.app/",
    summary: "Museum wird durch Timeslip-/Storytelling lebendiger erzählt.",
    takeaway: "Als erzählerische Hülle für Missionen und historische Rollen nutzen.",
  },
  {
    id: "T03",
    title: "Spiel am Hof",
    source: "https://place-whispers-ai.lovable.app",
    summary: "Mobiles Erlebnis für Schulklassen im Freilichtmuseum mit 37 Originalbauten.",
    takeaway: "Die erste Schulroute bleibt der belastbare Start.",
  },
  {
    id: "T04",
    title: "Morandell Events",
    source: "https://morandell-events.lovable.app/",
    summary: "Event-Marketplace für Angebote und Buchungen.",
    takeaway: "Für Feier, Schmankerl-Route und Gruppenpakete als spätere Buchungsschicht vormerken.",
  },
  {
    id: "T05",
    title: "Tiroler Bauernhöfe",
    source: "https://tirolerbauernhoefe.lovable.app/",
    summary: "Eigener Prototyp rund um das Museum Tiroler Bauernhöfe.",
    takeaway: "Für Bildsprache, Besucherführung und Museumspositionierung als Referenz prüfen.",
  },
  {
    id: "T06",
    title: "Idea wizard",
    source: "https://aicollective.at/api/share?e=hack-am-hof&t=T06",
    summary: "Ideenassistent aus dem Buildathlon.",
    takeaway: "Kann in Guide Studio oder Partner-Workshop als Ideengenerator aufgehen.",
  },
  {
    id: "T07",
    title: "SafeQuery",
    source: "https://safe-data-whisperer.lovable.app/",
    summary: "Sicheres Suchen in Datenbeständen.",
    takeaway: "Wichtig für Quellen, Freigaben, Rollenrechte und sensible Museumsdaten.",
  },
  {
    id: "T08",
    title: "OUT.",
    source: "https://out-and-about-tirol.lovable.app",
    summary: "Social-Discovery-App, die junge Menschen wieder ins echte Leben bringen soll.",
    takeaway: "Als Community- und Ambassador-Mechanik für reale Besuche und Gruppen nutzen.",
  },
  {
    id: "T09",
    title: "Hofjäger",
    source: "https://museum.flowmade.cloud/",
    summary: "Jagd durchs Museum.",
    takeaway: "Als spielerisches Format nur dosiert übernehmen: Suche ja, Action nicht dominieren lassen.",
  },
  {
    id: "T10",
    title: "Traditirol",
    source: "https://traditirol.lovable.app",
    summary: "Selfie aufnehmen, QR-Codes scannen und sich selbst in alten Hofräumen entdecken.",
    takeaway: "Stärkt unsere Foto-/Avatar- und Ambassador-These direkt.",
  },
];

export const prototypeScreens: PrototypeScreen[] = [
  {
    id: "mission",
    label: "Mission",
    title: "Ein Winter ohne Supermarkt",
    subtitle: "Schulklassen starten als Rollen-Team und öffnen Stationen direkt vor Ort.",
    action: "Station am Tierstaller Hof öffnen",
    chips: ["Rollen", "QR", "Teamabschluss"],
    insight: "Übernommen aus Spiel am Hof und Hofjäger: suchen, scannen, gemeinsam lösen.",
    source: "Best-of aus Spiel am Hof und Hofjäger",
  },
  {
    id: "timeslip",
    label: "Zeitreise",
    title: "Die Stube spricht",
    subtitle: "Ein Objekt erzählt, was es über Wärme, Arbeit, Vorrat und Familie weiß.",
    action: "Mit Bewohnerfigur sprechen",
    chips: ["Objektstimme", "Audio", "400 Jahre"],
    insight: "Übernommen aus Tirol Timeslip Tales und Zeitreise Tirol: Räume werden zu Erzählern.",
    source: "Best-of aus Zeitreise-Prototypen",
  },
  {
    id: "photo",
    label: "Foto",
    title: "Historisches Erinnerungsbild",
    subtitle: "Besucher wählen Hof, Rolle und Bildstil. Das Ergebnis wird digital oder an der Kasse gedruckt.",
    action: "Foto-Setting am Hof wählen",
    chips: ["Selfie", "Avatar", "Druck"],
    insight: "Übernommen aus Traditirol: Besucher sehen sich selbst im historischen Ambiente.",
    source: "Best-of aus Traditirol",
  },
  {
    id: "guide",
    label: "Guide",
    title: "Wissen prüfen und freigeben",
    subtitle: "Guides speichern Anekdoten, Quellen und Freigaben, bevor daraus Missionen entstehen.",
    action: "Guide-Notiz hinzufügen",
    chips: ["Quelle", "Freigabe", "Museum entscheidet"],
    insight: "Das Museum behält die Kontrolle: Aus freigegebenem Wissen entstehen verständliche Erlebnisse.",
    source: "Best-of aus Guide- und Museumsprototypen",
  },
];

export const expansionAreas: ExpansionArea[] = [
  {
    id: "hofemuseum",
    title: "Höfemuseum Kramsach",
    description: "Schulklassen, Feiern, Schmankerl-Route, Chronik, interne Wartung und Ambassador-Fotos.",
    examples: ["Hofmission", "Trauung & Taufe", "Busgruppe Rattenberg"],
  },
  {
    id: "museums",
    title: "Andere Museen",
    description: "Jedes Haus kann Räume, Objekte und Guide-Wissen in eigene Besucherlayer übersetzen.",
    examples: ["Stadtmuseum", "Technikmuseum", "Freilichtmuseum"],
  },
  {
    id: "events",
    title: "Events & Orte",
    description: "Feste, Märkte und historische Areale bekommen Navigation, Story, Fotopunkte und Besucherlenkung.",
    examples: ["Kirchtag", "Mittelalterfest", "Oldtimer-Tag"],
  },
  {
    id: "tours",
    title: "Firmenführungen",
    description: "Betriebe erklären Produktion, Geschichte, Sicherheit und Marke als geführte Smartphone-Tour.",
    examples: ["Brauerei", "Manufaktur", "Factory Tour"],
  },
];

export const moduleIdeas: ModuleIdea[] = [
  {
    id: "school",
    title: "Schulklassenmission",
    description: "Rollen, QR-Stationen, gemeinsamer Abschluss.",
    detailTitle: "Ein Winter ohne Supermarkt",
    detail: "Die erste echte Pilotroute: vier Rollen, mehrere Höfe, Beobachtungsaufgaben und ein gemeinsamer Abschluss statt reiner Quizfragen.",
    examples: ["Feuerhüter:in", "Tierkenner:in", "Vorrat", "Werkzeug"],
  },
  {
    id: "celebration",
    title: "Feier- & Fotomodul",
    description: "Trauung, Taufe, Fotospots, hochwertige Erinnerungen.",
    detailTitle: "Feiern am echten Ort",
    detail: "Freie Trauung, kirchliche Option, Taufe oder Familienfeier werden als ruhige Pakete mit Wetterplan, Fotopunkten und hochwertigen Mitnahmeprodukten gedacht.",
    examples: ["Freie Trauung", "Taufe", "Holzlaser", "Glasgravur"],
  },
  {
    id: "culinary",
    title: "Tiroler-Schmankerl-Route",
    description: "Gasthaus, Schmankerl, Brauchtum.",
    detailTitle: "Schmankerl als Rundgang",
    detail: "Die Kulinarik wird nicht als eigene lange Website-Sektion erzählt, sondern als buchbare Idee: Hofstationen, Rezeptpass, Prügeltorte, Kirchtag und Gasthausabschluss.",
    examples: ["Rezeptpass", "Prügeltorte", "Kiachl", "Gasthaus"],
  },
  {
    id: "herbs",
    title: "Kräuterpfad",
    description: "Saisonpunkte, Sicherheit, Workshops.",
    detailTitle: "Kräuterwissen mit Fachfreigabe",
    detail: "Kräuterfundorte werden nicht als Sammelaufforderung gezeigt, sondern als sichere Schau-, Riech- und Workshopstationen mit saisonaler Freigabe.",
    examples: ["Saison", "Bauerngarten", "Warnhinweise", "Workshop"],
  },
  {
    id: "family",
    title: "Familienmodus",
    description: "Kurze Wege, Pausen, einfache Aufgaben.",
    detailTitle: "Kurze Familienrunde",
    detail: "Kinder und Begleitpersonen bekommen kurze Wege, Sinnesaufgaben, Pausenpunkte und optional einen Avatar als Erinnerung.",
    examples: ["Sammelkarte", "Pausenpunkt", "Avatar", "leichte Sprache"],
  },
  {
    id: "pensioners",
    title: "Pensionistenmodus",
    description: "Ruhige Routen, Sitzpunkte, Audio.",
    detailTitle: "Ruhige Route",
    detail: "Dieser Modus priorisiert große Schrift, Audio, Sitzpunkte, kurze Wege und Erinnerungsfragen statt langer Texte.",
    examples: ["Audio", "Sitzpunkt", "große Schrift", "Einkehr"],
  },
  {
    id: "chroniclers",
    title: "Chroniker-Modus",
    description: "Quellen und Objektwissen am Standort.",
    detailTitle: "Wissen am Ort sichern",
    detail: "Chroniker:innen und Guides können Audio, Dokumente, Fotos und Objektgeschichten genau dort erfassen, wo sie später gebraucht werden.",
    examples: ["Quelle", "Audio", "Objektfoto", "Freigabe"],
  },
  {
    id: "maintenance",
    title: "Interner Betrieb",
    description: "Reparaturen, Fotos, Prioritäten.",
    detailTitle: "Betrieb direkt am Gelände",
    detail: "Interne Teams dokumentieren Reparaturen, QR-Codes, Wegkanten und Prioritäten als Standortaufgaben.",
    examples: ["Foto", "Priorität", "Status", "QR-Code"],
  },
  {
    id: "avatar",
    title: "KI-Charaktere",
    description: "Foto hochladen, Rolle erleben.",
    detailTitle: "Besucher werden sichtbar",
    detail: "Aus Fotos entstehen historische Ambiente-Bilder: digital teilbar, als Erinnerung druckbar, auf Holz gelasert, in Glas graviert oder im antik wirkenden Holzrahmen mitnehmbar.",
    examples: ["Selfie", "Holzlaser", "Glasgravur", "Holzrahmen"],
  },
  {
    id: "content",
    title: "Contentmodell",
    description: "Eine Datenbasis für alle Layer.",
    detailTitle: "Einmal erfassen, mehrfach nutzen",
    detail: "Hof, Raum, Objekt, Quelle, Medium, Freigabe und Zielgruppe werden einmal strukturiert. Daraus entstehen Missionen, Routen, Popovers und spätere App-Screens.",
    examples: ["Hof", "Quelle", "Zielgruppe", "Status"],
  },
  {
    id: "inspiration",
    title: "Inspirationsmodus",
    description: "Ideen für Bauernhaus, Umbau und Handwerk.",
    detailTitle: "Vom Museumsdetail zur Wohnidee",
    detail: "Besitzer:innen eines hochwertigen Bauernhauses können sich Details zu Holz, Stube, Ofen, Türen, Beschlägen, Vorratsräumen und Materiallogik ansehen und später Beratung durch passende Handwerker:innen anfragen.",
    examples: ["Kitzbühel", "Material", "Stube", "Handwerk"],
  },
  {
    id: "history",
    title: "Geschichtsmodus",
    description: "Optional tiefer lernen, ohne Kinder- und Abenteuerfluss zu ersetzen.",
    detailTitle: "Ein paralleler Modus für Kulturinteressierte",
    detail: "Der Geschichtsmodus läuft neben Kinder-, Familien- und Abenteuerformaten. Wer mehr Tiefe will, bekommt Themenpfade zu Holztrift, Bergbau, Wasser, Wald, Rattenberg und der Frage, wie diese Tiroler Geschichte mit Höfen und Alltag zusammenhängt.",
    examples: ["Holztrift", "Bergbau", "Wasser", "Rattenberg"],
  },
];

export const allAudienceModes: AudienceMode[] = [
  "school",
  "wedding",
  "culinary",
  "herbs",
  "family",
  "pensioners",
  "chroniclers",
  "maintenance",
];

const historicPhotoStudio = {
  title: "Historisches Ambiente-Foto",
  description:
    "Aus Besucherfoto und Hofkulisse entsteht ein Bild im historischen Setting. Digital abrufbar oder als hochwertiges Mitnahmeprodukt an der Kasse.",
  options: ["Digital-Link", "Kassen-Druck", "Holzlaser", "Glasgravur", "Antik-Holzrahmen"],
};

export const audiences: Audience[] = [
  {
    id: "school",
    title: "Schulklassen-Mission",
    shortTitle: "Schule",
    claim: "Geschichte als Teamaufgabe.",
    value: "Rollen, Hinweise, Karte, Abschluss.",
    accent: "#1d6b57",
    icon: School,
  },
  {
    id: "wedding",
    title: "Hochzeit & private Feiern",
    shortTitle: "Hochzeit",
    claim: "Trauungen, Fotospots, Erinnerungen.",
    value: "Ort, Ablauf, Wetterplan, Foto-Upsell.",
    accent: "#a35274",
    icon: Camera,
  },
  {
    id: "culinary",
    title: "Kulinarik & Kirchtag",
    shortTitle: "Kulinarik",
    claim: "Essen, Feiern, Geschichten.",
    value: "Gasthaus, Kirchtag, Schmankerl.",
    accent: "#8a4f1f",
    icon: Utensils,
  },
  {
    id: "herbs",
    title: "Kräuter & Natur",
    shortTitle: "Kräuter",
    claim: "Saisonwissen vor Ort.",
    value: "Kräuter, Gärten, Sicherheit.",
    accent: "#5d8d3b",
    icon: Flower2,
  },
  {
    id: "family",
    title: "Familienmodus",
    shortTitle: "Familien",
    claim: "Kurze Wege, klare Aufgaben.",
    value: "Entdecken ohne Überforderung.",
    accent: "#b56b34",
    icon: Users,
  },
  {
    id: "pensioners",
    title: "Pensionistenmodus",
    shortTitle: "Pensionisten",
    claim: "Ruhige Wege und Erinnerungen.",
    value: "Sitzpunkte, Audio, große Schrift.",
    accent: "#6f6a42",
    icon: Clock,
  },
  {
    id: "chroniclers",
    title: "Chroniker- und Archivmodus",
    shortTitle: "Chroniker",
    claim: "Wissen am Ort sichern.",
    value: "Quellen, Audio, Objektgeschichten.",
    accent: "#73543f",
    icon: BookOpen,
  },
  {
    id: "maintenance",
    title: "Intern & Wartung",
    shortTitle: "Intern",
    claim: "Aufgaben direkt am Standort.",
    value: "Fotos, Prioritäten, Status.",
    accent: "#9a5b2d",
    icon: ClipboardCheck,
  },
];

export const missionRoles: MissionRole[] = [
  {
    id: "fire",
    name: "Feuerhüter:in",
    description: "Achtet auf Wärme, Herd und Tagesablauf.",
    privateHint: "Ohne Glut am Morgen dauert alles länger: Essen, Wärme und Arbeit hängen zusammen.",
  },
  {
    id: "animals",
    name: "Tierkenner:in",
    description: "Versteht, warum Tiere mehr waren als Nahrung.",
    privateHint: "Tiere liefern Milch, Kraft, Mist und Wärme. Ein Hof verliert ohne sie mehrere Systeme zugleich.",
  },
  {
    id: "storage",
    name: "Vorratsmeister:in",
    description: "Denkt in Vorrat, Lagerung und Winterplanung.",
    privateHint: "Der Winter beginnt nicht im Dezember, sondern im Herbst: trocknen, einteilen, schützen.",
  },
  {
    id: "repair",
    name: "Werkzeugprofi",
    description: "Sucht nach Spuren von Reparatur und Handwerk.",
    privateHint: "Ein kaputtes Werkzeug stoppt nicht nur eine Aufgabe, sondern oft den ganzen Tagesplan.",
  },
];

export const missionVariants: MissionVariant[] = [
  {
    title: "Ein Winter ohne Supermarkt",
    audience: "Schulklasse, 10-13 Jahre",
    duration: "60-75 Minuten",
    description: "Die Gruppe prüft Feuer, Tiere, Vorrat und Werkzeuge. Am Ende wird klar, warum ein Hof nur als ganzes System funktioniert.",
  },
  {
    title: "Der verschwundene Mehlsack",
    audience: "Familien mit Kindern",
    duration: "30-40 Minuten",
    description: "Eine kurze Suchgeschichte führt von Speicher, Mühle und Küche zu einfachen Fragen über Vorrat, Teilen und Festtage.",
  },
  {
    title: "Wilderer, Jäger und der Wald",
    audience: "Jugendgruppen oder Vereine",
    duration: "45-60 Minuten",
    description: "Eine ruhige Outdoor-Story verbindet Waldrechte, Armut, Jagd, Regeln und Verantwortung mit wenigen Stationen am Gelände.",
  },
  {
    title: "Die Stube vor dem Fest",
    audience: "Mehrgenerationengruppe",
    duration: "25-35 Minuten",
    description: "Objekte in Stube, Küche und Vorratsraum erklären, was vor einem Kirchtag oder Familienfest vorbereitet werden musste.",
  },
  {
    title: "Das Haus will repariert werden",
    audience: "Lehrlinge, Handwerk, interne Teams",
    duration: "40-60 Minuten",
    description: "Aus historischen Reparaturspuren entsteht eine Beobachtungsmission zu Holz, Werkzeug, Material und Pflege.",
  },
];

export const generatedMissionCatalog: GeneratedMission[] = [
  {
    id: "winter-system-school",
    title: "Ein Winter ohne Supermarkt",
    setup: "Der erste Schnee kommt früher als erwartet. Die Gruppe muss herausfinden, ob Hof, Tiere, Vorrat und Werkzeuge den Winter schaffen.",
    audience: "Schulklasse",
    duration: "75 Minuten",
    roles: ["Feuerhüter:in", "Tierkenner:in", "Vorratsmeister:in", "Werkzeugprofi"],
    stations: ["Portner Hof", "Tierstaller Hof", "Alter Segger Hof", "Schmiede"],
    knowledge: "Vorrat, Wärme, Tierhaltung und Reparatur hängen als Hofsystem zusammen.",
    finale: "Welche Entscheidung hilft dem ganzen Hof, nicht nur einer einzelnen Person?",
  },
  {
    id: "flour-family",
    title: "Der verschwundene Mehlsack",
    setup: "Vor dem Fest fehlt ein Mehlsack. Kinder und Erwachsene suchen Spuren zwischen Speicher, Mühle und Küche.",
    audience: "Familien",
    duration: "35 Minuten",
    roles: ["Spurensucher:in", "Mühlenhelfer:in", "Küchenwache", "Festplaner:in"],
    stations: ["Alter Segger Hof", "Mühle", "Portner Hof"],
    knowledge: "Mehl war Vorrat, Arbeit und Festtagsgrundlage zugleich.",
    finale: "Warum wäre Verschwendung früher ein echtes Problem gewesen?",
  },
  {
    id: "hunter-forest",
    title: "Wilderer, Jäger und der Wald",
    setup: "Im Wald gibt es Streit: Wer darf jagen, wer braucht Holz, und welche Regeln schützen Hof und Menschen?",
    audience: "Jugendgruppe",
    duration: "55 Minuten",
    roles: ["Waldwächter:in", "Spurenleser:in", "Regelkundige:r", "Hofsprecher:in"],
    stations: ["Waldkante", "Herrschaft", "Tierstaller Hof", "Rastpunkt"],
    knowledge: "Jagd, Armut, Besitzrechte und Naturressourcen waren eng miteinander verbunden.",
    finale: "Wann wird aus Überleben ein Regelbruch, und wer entscheidet das?",
  },
  {
    id: "wood-water",
    title: "Vom Wald zum Wasser",
    setup: "Die Gruppe folgt der Frage, wie Holz aus dem Brandenberger Tal nach Kramsach kam und warum Wald, Wasser und Arbeit zusammengehören.",
    audience: "Kulturinteressierte",
    duration: "55 Minuten",
    roles: ["Triftmeister:in", "Waldkundige:r", "Wasserleser:in", "Kohlewächter:in"],
    stations: ["Wirtschaft", "Landschaft", "Rohrerhof", "Kartenpunkt Brandenberg"],
    knowledge: "Holz war Bau-, Brenn- und Arbeitsstoff; Wasserwege verbanden Landschaft, Wirtschaft und Alltag.",
    finale: "Welche Spuren sieht man heute noch, wenn man weiß, wonach man sucht?",
  },
  {
    id: "mining-rattenberg",
    title: "Bergsegen und Rattenberg",
    setup: "Ein Erzfund verändert Wege, Arbeit und Macht. Die Gruppe verbindet Hofalltag mit Bergbau, Handel und der nahen Stadt Rattenberg.",
    audience: "Geschichtsinteressierte",
    duration: "60 Minuten",
    roles: ["Bergkundler:in", "Stadtschreiber:in", "Hofbauer", "Routenplaner:in"],
    stations: ["Herrschaft", "Wirtshaus", "Rattenberg-Brücke", "Chronikerpunkt"],
    knowledge: "Bergbau war nicht nur Technik, sondern beeinflusste Recht, Migration, Handel, Ernährung und Herrschaft.",
    finale: "Warum kann ein Bauernhof helfen, Tiroler Wirtschafts- und Sozialgeschichte zu verstehen?",
  },
  {
    id: "festival-stube",
    title: "Die Stube vor dem Kirchtag",
    setup: "Der Kirchtag steht bevor. Die Gruppe entdeckt, welche Dinge vorbereitet, geteilt und erzählt werden mussten.",
    audience: "Mehrgenerationengruppe",
    duration: "40 Minuten",
    roles: ["Stubenmeister:in", "Rezeptwächter:in", "Musikbot:in", "Erinnerungssammler:in"],
    stations: ["Portner Hof", "Wirtshaus", "Schmankerl-Station", "Stube"],
    knowledge: "Feste verbanden Essen, Arbeit, Status, Musik und Gemeinschaft.",
    finale: "Was macht aus Essen eine Erinnerung, die Menschen weitererzählen?",
  },
  {
    id: "repair-craft",
    title: "Das Haus will repariert werden",
    setup: "Ein Weg, ein Werkzeug und ein Holzteil brauchen Aufmerksamkeit. Die Gruppe entscheidet, was zuerst repariert wird.",
    audience: "Lehrlinge",
    duration: "60 Minuten",
    roles: ["Holzprüfer:in", "Werkzeugprofi", "Sicherheitsblick", "Dokumentar:in"],
    stations: ["Schmiede", "Hackler Hof", "Wegkante", "Guide Studio"],
    knowledge: "Pflege, Reparatur und Materialwissen halten einen Hof über Generationen nutzbar.",
    finale: "Welche Reparatur ist dringend, welche wichtig, und welche braucht zuerst Wissen?",
  },
  {
    id: "quiet-memory",
    title: "Der stille Rundgang",
    setup: "Eine kleine Gruppe hört kurze Erinnerungen und vergleicht eigenes Wissen mit Hofgeschichten.",
    audience: "Pensionisten",
    duration: "30 Minuten",
    roles: ["Erzähler:in", "Zuhörer:in", "Objektfinder:in", "Wegwächter:in"],
    stations: ["Zenzl's Hof", "Sitzpunkt", "Stube", "Gasthaus"],
    knowledge: "Biografische Erinnerungen machen Alltagsgeschichte anschlussfähig.",
    finale: "Welche Erinnerung sollte aufgenommen werden, bevor sie verloren geht?",
  },
  {
    id: "house-inspiration",
    title: "Vom Hofdetail zur Wohnidee",
    setup: "Ein Besitzer eines Bauernhauses sucht Inspiration: Was kann man übernehmen, ohne Geschichte zu kopieren?",
    audience: "Hausbesitzer:innen",
    duration: "45 Minuten",
    roles: ["Materialblick", "Stubenblick", "Handwerksfrage", "Quellencheck"],
    stations: ["Portner Hof", "Hörl Hof", "Hackler Hof", "Guide Studio"],
    knowledge: "Historische Details werden wertvoll, wenn Material, Funktion und Kontext verstanden werden.",
    finale: "Welche Idee passt zum eigenen Haus, und welche sollte bewusst im Museum bleiben?",
  },
];

export const clickDummyModes: ClickDummyMode[] = [
  {
    id: "kids",
    label: "Kinder",
    title: "Abenteuer für Kinder",
    description: "Kurze Aufgaben, Rollen, Abzeichen und klare Sprache.",
    benefit: "Kinder bleiben aktiv, Guides bekommen strukturierte Stationen und Familien haben einen Grund wiederzukommen.",
  },
  {
    id: "school",
    label: "Schule",
    title: "Lernmission für Schulklassen",
    description: "Teamrollen, Wissensfragen und gemeinsamer Abschluss.",
    benefit: "Lehrpersonen sehen Lernziel, Ablauf und Dauer sofort.",
  },
  {
    id: "history",
    label: "Geschichte",
    title: "Vertiefung für Kulturinteressierte",
    description: "Tiroler Geschichte, Holztrift, Bergbau, Rattenberg, Wald und Wasser.",
    benefit: "Erwachsene und Vereine bekommen Tiefe, ohne Kinderangebote zu verdrängen.",
  },
  {
    id: "celebration",
    label: "Feier",
    title: "Foto- und Feierroute",
    description: "Fotospots, Ablauf, Erinnerungsbild und hochwertige Mitnahmeprodukte.",
    benefit: "Aus dem Besuch wird ein buchbares Angebot mit Zusatzumsatz.",
  },
  {
    id: "inspiration",
    label: "Inspiration",
    title: "Bauernhaus-Ideen",
    description: "Material, Stube, Türen, Beschläge, Ofen und Handwerksberatung.",
    benefit: "Das Museumswissen wird auch für hochwertige Bau- und Wohnprojekte wertvoll.",
  },
];

export const clickDummyMissions: ClickDummyMission[] = [
  {
    id: "kids-flour",
    modeId: "kids",
    title: "Der verschwundene Mehlsack",
    audience: "Familien mit Kindern",
    duration: "35 Minuten",
    hook: "Kurz vor dem Fest fehlt ein Mehlsack. Wer findet heraus, wo er geblieben ist?",
    roles: ["Spurensucher:in", "Mühlenhelfer:in", "Küchenwache"],
    stations: [
      {
        id: "kids-flour-storage",
        title: "Speicher prüfen",
        place: "Alter Segger Hof",
        task: "Was musste im Speicher vor allem geschützt werden?",
        choices: ["Nässe und Mäuse", "Sonnenlicht", "laute Musik"],
        correctChoice: "Nässe und Mäuse",
        reward: "Vorratszeichen",
        knowledge: "Vorrat war früher Überlebensplanung, nicht nur Lagerung.",
      },
      {
        id: "kids-flour-mill",
        title: "Mühle befragen",
        place: "Mühle",
        task: "Warum war Mehl für ein Fest so wichtig?",
        choices: ["Für Brot, Krapfen und Kuchen", "Zum Streuen auf Wege", "Als Farbe für Wände"],
        correctChoice: "Für Brot, Krapfen und Kuchen",
        reward: "Mühlenzeichen",
        knowledge: "Getreide verband Feldarbeit, Mühle, Küche und Festtag.",
      },
      {
        id: "kids-flour-kitchen",
        title: "Küche öffnen",
        place: "Portner Hof",
        task: "Was zeigt die Küche am besten?",
        choices: ["Essen, Wärme und Gemeinschaft", "Nur schöne Möbel", "Wo man heute einkauft"],
        correctChoice: "Essen, Wärme und Gemeinschaft",
        reward: "Festzeichen",
        knowledge: "Die Stube und Küche waren Mittelpunkt von Arbeit, Wärme und Gespräch.",
      },
    ],
    finale: "Die Kinder lösen den Fall und bekommen ein digitales Sammelbild aus dem Hof.",
  },
  {
    id: "school-winter",
    modeId: "school",
    title: "Ein Winter ohne Supermarkt",
    audience: "Schulklasse",
    duration: "75 Minuten",
    hook: "Der Winter kommt. Jede Gruppe übernimmt eine Rolle und prüft, ob der Hof vorbereitet ist.",
    roles: ["Feuerhüter:in", "Tierkenner:in", "Vorratsmeister:in", "Werkzeugprofi"],
    stations: [
      {
        id: "school-fire",
        title: "Feuer sichern",
        place: "Portner Hof",
        task: "Was hängt morgens alles vom Feuer ab?",
        choices: ["Wärme, Kochen und Tagesbeginn", "Nur Licht", "Nur Dekoration"],
        correctChoice: "Wärme, Kochen und Tagesbeginn",
        reward: "Glutzeichen",
        knowledge: "Ohne Feuer verzögern sich Essen, Wärme und Arbeit.",
      },
      {
        id: "school-animals",
        title: "Tiere verstehen",
        place: "Tierstaller Hof",
        task: "Warum waren Tiere mehr als Nahrung?",
        choices: ["Milch, Mist, Zugkraft und Wärme", "Sie waren nur Haustiere", "Sie ersetzten Werkzeuge immer"],
        correctChoice: "Milch, Mist, Zugkraft und Wärme",
        reward: "Stallzeichen",
        knowledge: "Tiere hielten mehrere Bereiche des Hofsystems in Gang.",
      },
      {
        id: "school-repair",
        title: "Werkzeug retten",
        place: "Schmiede",
        task: "Warum wurde repariert statt weggeworfen?",
        choices: ["Weil Material, Zeit und Wege kostbar waren", "Weil Neues verboten war", "Weil Werkzeug egal war"],
        correctChoice: "Weil Material, Zeit und Wege kostbar waren",
        reward: "Werkzeugzeichen",
        knowledge: "Reparaturwissen war ein Teil der Versorgungssicherheit.",
      },
    ],
    finale: "Die Klasse entscheidet gemeinsam, welche Maßnahme den ganzen Hof am besten durch den Winter bringt.",
  },
  {
    id: "history-wood",
    modeId: "history",
    title: "Vom Wald zum Wasser",
    audience: "Kultur- und Geschichtsinteressierte",
    duration: "55 Minuten",
    hook: "Wie hängen Wald, Holztrift, Wasser, Hofwirtschaft und Rattenberg zusammen?",
    roles: ["Triftmeister:in", "Waldkundige:r", "Wasserleser:in", "Chronist:in"],
    stations: [
      {
        id: "history-forest",
        title: "Wald als Ressource",
        place: "Landschaftspunkt",
        task: "Warum war Holz mehr als Brennmaterial?",
        choices: ["Bauen, Heizen, Werkzeuge und Wirtschaft", "Nur Schmuck", "Nur Abfall"],
        correctChoice: "Bauen, Heizen, Werkzeuge und Wirtschaft",
        reward: "Waldzeichen",
        knowledge: "Waldnutzung erklärt viele Wirtschafts- und Alltagsfragen Tirols.",
      },
      {
        id: "history-water",
        title: "Wasserweg lesen",
        place: "Bachlauf und Weg",
        task: "Was machte Wasser für Holz und Arbeit wichtig?",
        choices: ["Transport, Energie und Orientierung", "Nur schöne Aussicht", "Nur Trinkwasser"],
        correctChoice: "Transport, Energie und Orientierung",
        reward: "Wasserzeichen",
        knowledge: "Wasser verband Täler, Arbeit und Wirtschaftsräume.",
      },
      {
        id: "history-town",
        title: "Stadt und Hof verbinden",
        place: "Rattenberg-Brücke",
        task: "Warum ist die Nähe zu Rattenberg spannend?",
        choices: ["Stadt, Handel und Ausflug lassen sich verbinden", "Weil dort keine Geschichte ist", "Nur wegen Parkplätzen"],
        correctChoice: "Stadt, Handel und Ausflug lassen sich verbinden",
        reward: "Brückenzeichen",
        knowledge: "Das Museum kann Hofalltag mit regionaler Wirtschafts- und Stadtgeschichte verbinden.",
      },
    ],
    finale: "Aus dem Museumsbesuch wird ein Tiroler Geschichtspfad für Erwachsene.",
  },
  {
    id: "celebration-photo",
    modeId: "celebration",
    title: "Das Erinnerungsbild am Hof",
    audience: "Hochzeit, Taufe, Familienfeier",
    duration: "25 Minuten",
    hook: "Die Gäste wählen Fotopunkt, Hofkulisse und Mitnahmeprodukt.",
    roles: ["Fotoblick", "Ablaufwache", "Erinnerungssammler:in"],
    stations: [
      {
        id: "celebration-spot",
        title: "Fotospot wählen",
        place: "Brücke & Blickachse",
        task: "Was braucht ein gutes Gruppenfoto?",
        choices: ["Licht, ruhigen Hintergrund und kurze Wege", "Viele Hindernisse", "Möglichst wenig Planung"],
        correctChoice: "Licht, ruhigen Hintergrund und kurze Wege",
        reward: "Fotospot",
        knowledge: "Gute Besucherfotos können Reichweite und Buchungen erzeugen.",
      },
      {
        id: "celebration-product",
        title: "Erinnerung auswählen",
        place: "Kasse",
        task: "Welche Erinnerung wirkt hochwertig und ortsbezogen?",
        choices: ["Holzlaser, Glasgravur oder Antik-Holzrahmen", "Nur ein Standardzettel", "Gar keine Mitnahme"],
        correctChoice: "Holzlaser, Glasgravur oder Antik-Holzrahmen",
        reward: "Souvenir",
        knowledge: "Ein gutes Mitnahmeprodukt kann Zusatzumsatz und Weiterempfehlung schaffen.",
      },
    ],
    finale: "Die Feiergruppe nimmt ein persönliches Stück Höfemuseum mit nach Hause.",
  },
  {
    id: "inspiration-house",
    modeId: "inspiration",
    title: "Vom Hofdetail zur Wohnidee",
    audience: "Hausbesitzer:innen und Handwerk",
    duration: "45 Minuten",
    hook: "Welche historischen Details können ein hochwertiges Bauernhaus inspirieren?",
    roles: ["Materialblick", "Stubenblick", "Handwerksfrage"],
    stations: [
      {
        id: "inspiration-wood",
        title: "Holz und Oberfläche",
        place: "Hörl Hof",
        task: "Was sollte man vor einer Übernahme in ein neues Haus verstehen?",
        choices: ["Material, Funktion und Herkunft", "Nur die Farbe", "Nur den Preis"],
        correctChoice: "Material, Funktion und Herkunft",
        reward: "Materialidee",
        knowledge: "Gute Gestaltung entsteht aus Verstehen, nicht aus Kopieren.",
      },
      {
        id: "inspiration-stube",
        title: "Stube und Ofen",
        place: "Portner Hof",
        task: "Warum ist die Stube mehr als ein schöner Raum?",
        choices: ["Sie ordnet Wärme, Alltag und Gemeinschaft", "Sie ist nur Dekoration", "Sie braucht keine Funktion"],
        correctChoice: "Sie ordnet Wärme, Alltag und Gemeinschaft",
        reward: "Raumidee",
        knowledge: "Historische Räume zeigen, wie Funktion und Atmosphäre zusammengehen.",
      },
      {
        id: "inspiration-craft",
        title: "Handwerk anfragen",
        place: "Guide Studio",
        task: "Wie könnte das Museum bei einem Projekt helfen?",
        choices: ["Einordnung, Kontakte und fachliche Beratung", "Es ersetzt alle Handwerker", "Es verkauft nur Fotos"],
        correctChoice: "Einordnung, Kontakte und fachliche Beratung",
        reward: "Beratungsidee",
        knowledge: "Das Museum kann Fachwissen und Partner sichtbar machen.",
      },
    ],
    finale: "Aus dem Rundgang wird ein hochwertiger Beratungsanlass für Handwerk und Baukultur.",
  },
];

export const mapPoints: MapPoint[] = [
  {
    id: "mission-stube",
    type: "mission",
    title: "Stube & Küche",
    subtitle: "Portner Hof",
    description: "Startpunkt der Schulklassenmission: Wärme, Essen und Gemeinschaft am Herd.",
    x: 47.2,
    y: 57.6,
    audience: ["school"],
    tags: ["Feuer", "Alltag", "Lernziel"],
    status: "verified",
  },
  {
    id: "mission-stall",
    type: "mission",
    title: "Stall",
    subtitle: "Tierstaller Hof",
    description: "Tiere als Arbeitskraft, Wärmequelle und Grundlage für Nahrung und Felder.",
    x: 45.8,
    y: 33.8,
    audience: ["school"],
    tags: ["Tiere", "Winter", "Zusammenarbeit"],
    status: "verified",
  },
  {
    id: "mission-schmiede",
    type: "mission",
    title: "Schmiede",
    subtitle: "Reparieren statt ersetzen",
    description: "Werkzeuge sichern Arbeit. Die Gruppe erkennt, warum Reparaturen lebenswichtig waren.",
    x: 46.1,
    y: 53.4,
    audience: ["school"],
    tags: ["Werkzeug", "Handwerk", "Spur"],
    status: "verified",
  },
  {
    id: "mission-speicher",
    type: "mission",
    title: "Speicher",
    subtitle: "Alter Segger Hof",
    description: "Finale Erkenntnis: Vorrat war Planung, nicht Glück.",
    x: 16.6,
    y: 56.1,
    audience: ["school"],
    tags: ["Vorrat", "Winter", "Finale"],
    status: "verified",
  },
  {
    id: "hof-alter-segger",
    type: "hof",
    title: "Alter Segger Hof",
    subtitle: "Hofwissen & Vorrat",
    description: "Ein Hofpunkt für Speicher, Vorrat, Trockenheit und Winterplanung.",
    x: 16.6,
    y: 56.1,
    audience: allAudienceModes,
    tags: ["Hof", "Vorrat", "Winter"],
    status: "verified",
    details: ["Herkunft, Bauform und frühere Nutzung", "Welche Räume Vorräte trocken hielten", "Objekte für Schulmissionen und Familienrunde"],
    photoStudio: historicPhotoStudio,
  },
  {
    id: "hof-gwiggen",
    type: "hof",
    title: "Gwiggen Hof",
    subtitle: "Alltag am Hof",
    description: "Ein ruhiger Einstieg in bäuerlichen Alltag, Wege, Tiere und Arbeitsrhythmus.",
    x: 9.8,
    y: 80.4,
    audience: allAudienceModes,
    tags: ["Hof", "Alltag", "Familien"],
    status: "planned",
    details: ["Einfache Familienfragen", "Beobachtungsaufgaben für Kinder", "Vergleich: früherer Alltag und heute"],
    photoStudio: historicPhotoStudio,
  },
  {
    id: "hof-hoerl",
    type: "hof",
    title: "Hörl Hof",
    subtitle: "Bauen, Wohnen, Arbeiten",
    description: "Hofprofil für Bauweise, Wohnräume und handwerkliche Spuren.",
    x: 12.1,
    y: 90.1,
    audience: allAudienceModes,
    tags: ["Hof", "Bauweise", "Räume"],
    status: "planned",
    details: ["Raumfunktionen sammeln", "Geeignete Fotoperspektiven markieren", "Barrierearme Hinweise ergänzen"],
    photoStudio: historicPhotoStudio,
  },
  {
    id: "hof-hackler",
    type: "hof",
    title: "Hackler Hof",
    subtitle: "Arbeitswelt & Werkzeuge",
    description: "Ein Hofpunkt für Reparieren, Werkzeuge und körperliche Arbeit.",
    x: 21.7,
    y: 84.1,
    audience: allAudienceModes,
    tags: ["Hof", "Werkzeug", "Arbeit"],
    status: "planned",
    details: ["Werkzeuggeschichten aufnehmen", "Handwerkschallenge vorbereiten", "Interne Objektpflege dokumentieren"],
    photoStudio: historicPhotoStudio,
  },
  {
    id: "hof-summerau",
    type: "hof",
    title: "Summerau Hof",
    subtitle: "Jahreslauf & Familie",
    description: "Station für saisonale Arbeiten, Familienaufgaben und Gesprächsimpulse.",
    x: 17.5,
    y: 75.3,
    audience: allAudienceModes,
    tags: ["Hof", "Jahreslauf", "Familie"],
    status: "planned",
    details: ["Frühjahr, Sommer, Herbst, Winter je Hof erzählen", "Kurze Familienmissionen", "Pensionisten-Erinnerungsfragen"],
    photoStudio: historicPhotoStudio,
  },
  {
    id: "hof-portner",
    type: "hof",
    title: "Portner Hof",
    subtitle: "Stube, Herd, Gemeinschaft",
    description: "Zentraler Ort für Wärme, Essen, Gespräch und historische Rollen.",
    x: 47.2,
    y: 57.6,
    audience: allAudienceModes,
    tags: ["Hof", "Stube", "Herd"],
    status: "verified",
    details: ["Stube als sozialer Mittelpunkt", "Herd, Wärme und Hofküche", "Historische Ambiente-Fotos im Innenhof"],
    photoStudio: historicPhotoStudio,
  },
  {
    id: "hof-tierstaller",
    type: "hof",
    title: "Tierstaller Hof",
    subtitle: "Tiere & Versorgung",
    description: "Hofwissen zu Tieren als Arbeitskraft, Wärmequelle und Lebensgrundlage.",
    x: 45.8,
    y: 33.8,
    audience: allAudienceModes,
    tags: ["Hof", "Tiere", "Versorgung"],
    status: "verified",
    details: ["Tiere nicht nur als Nahrung erklären", "Mist, Wärme, Milch und Zugkraft", "Missionen rund um Stall und Winter"],
    photoStudio: historicPhotoStudio,
  },
  {
    id: "hof-franzl-klaisla",
    type: "hof",
    title: "Franzl's-Klaisla's Hof",
    subtitle: "Region & Herkunft",
    description: "Hofprofil für regionale Bauweise, Herkunftsort und Erzähltradition.",
    x: 75.5,
    y: 10.2,
    audience: allAudienceModes,
    tags: ["Hof", "Region", "Herkunft"],
    status: "planned",
    details: ["Herkunft auf Karte verknüpfen", "Guide-Anekdoten sammeln", "Fotopunkt für Gruppen prüfen"],
    photoStudio: historicPhotoStudio,
  },
  {
    id: "hof-zenzl",
    type: "hof",
    title: "Zenzl's Hof",
    subtitle: "Alltag & Geschichten",
    description: "Ein Hof für Audio-Erzählungen, Kindheitserinnerungen und Objektgeschichten.",
    x: 82.2,
    y: 6.7,
    audience: allAudienceModes,
    tags: ["Hof", "Audio", "Erinnerung"],
    status: "planned",
    details: ["Zeitzeug:innen-Audio", "Objektfotos je Raum", "Ruhiger Pensionistenpunkt"],
    photoStudio: historicPhotoStudio,
  },
  {
    id: "hof-ahliger",
    type: "hof",
    title: "Ahliger Hof",
    subtitle: "Oberer Rundweg",
    description: "Station am oberen Rundweg mit Überblick, Wegführung und Ruhepunkt.",
    x: 93.4,
    y: 1.6,
    audience: allAudienceModes,
    tags: ["Hof", "Rundweg", "Ruhe"],
    status: "planned",
    details: ["Gute Orientierung am Gelände", "Sitz- und Blickpunkte prüfen", "Kurze Audiofassung für ältere Gäste"],
    photoStudio: historicPhotoStudio,
  },
  {
    id: "hof-wechner-burgas",
    type: "hof",
    title: "Wechner-Burgas Hof",
    subtitle: "Bauform & Herrschaft",
    description: "Hofwissen zu Besitz, Abgaben, Hofstruktur und sozialem Kontext.",
    x: 89.9,
    y: 31.9,
    audience: allAudienceModes,
    tags: ["Hof", "Herrschaft", "Abgaben"],
    status: "planned",
    details: ["Status und Besitz erklären", "Rollen wie Hofbauer, Magd, Knecht", "Historische Quellen hinterlegen"],
    photoStudio: historicPhotoStudio,
  },
  {
    id: "hof-trujer-gregoerler",
    type: "hof",
    title: "Trujer-Gregörler Hof",
    subtitle: "Quellen & Vergleich",
    description: "Vergleichspunkt für Bauweise, Herkunft und unterschiedliche Lebenslagen.",
    x: 84.8,
    y: 36.8,
    audience: allAudienceModes,
    tags: ["Hof", "Vergleich", "Quelle"],
    status: "planned",
    details: ["Höfe miteinander vergleichen", "Guide-Wissen mit Quellen verbinden", "Chroniker-Modus nutzen"],
    photoStudio: historicPhotoStudio,
  },
  {
    id: "hof-falkner-schnaitter",
    type: "hof",
    title: "Falkner-Schnaitter Hof",
    subtitle: "Handwerk & Wege",
    description: "Hofpunkt für Wege, Nebengebäude und handwerkliche Spuren.",
    x: 75.5,
    y: 42.5,
    audience: allAudienceModes,
    tags: ["Hof", "Handwerk", "Wege"],
    status: "planned",
    details: ["Nebengebäude verknüpfen", "Wegstation für Gruppen", "Pflege- und Reparaturwissen sammeln"],
    photoStudio: historicPhotoStudio,
  },
  {
    id: "hof-dunninger",
    type: "hof",
    title: "Dunninger Hof",
    subtitle: "Route & Abschluss",
    description: "Hofstation für Abschlussfragen, Fotomotive und kurze Wiederholung.",
    x: 69.8,
    y: 47.0,
    audience: allAudienceModes,
    tags: ["Hof", "Route", "Abschluss"],
    status: "planned",
    details: ["Abschlussimpulse je Zielgruppe", "Fotomotiv für Familien", "Routenlogik für Besucherströme"],
    photoStudio: historicPhotoStudio,
  },
  {
    id: "photo-bridge",
    type: "photo",
    title: "Brücke & Blickachse",
    subtitle: "Beliebter Hochzeitsblick",
    description: "Kuratiert für Paarfotos: Holz, Wegführung und offener Hintergrund.",
    x: 97,
    y: 14,
    audience: ["wedding"],
    tags: ["Fotospot", "AR-Vorschau", "Nachmittag"],
    status: "planned",
    details: ["Empfohlene Tageszeit: später Nachmittag", "Ruhige Blickachse mit Holz und Wegführung", "Reservierbarer Slot für Paarshooting"],
    eventInfo: {
      title: "Hochzeitsshooting",
      bullets: ["Fotospot-Checkliste", "Bildausschnitt vorab ansehen", "Probefotos hochladen", "Sensible Bereiche ausblenden"],
      cta: "Shootingpaket anfragen",
    },
    photoStudio: {
      title: "Historisches Ambiente-Foto",
      description: "Paarfoto hochladen, Hofkulisse wählen und als historisch inspiriertes Erinnerungsbild generieren.",
      options: ["Digitalgalerie", "Fine-Art-Druck", "Holzlaser", "Glasgravur", "Antik-Holzrahmen"],
    },
  },
  {
    id: "photo-rohrerhof",
    type: "photo",
    title: "Rohrerhof Umfeld",
    subtitle: "Feier, Empfang, Gruppenfoto",
    description: "Nahe Gastronomie und Eventfläche, gut für kurze Wege und Gruppenbilder.",
    x: 58,
    y: 63.5,
    audience: ["wedding"],
    tags: ["Event", "Gruppenfoto", "Kulinarium"],
    status: "planned",
    details: ["Nahe beim Gasthaus", "Geeignet für Gruppenfoto und Empfang", "Upselling: gedruckte Erinnerungsbilder"],
    eventInfo: {
      title: "Feier & Empfang",
      bullets: ["Gruppenfoto-Route", "Schlechtwetter-Alternative", "Kasse/Abholung für Erinnerungen", "Rohrerhof-Anfrage"],
      cta: "Eventpaket vormerken",
    },
    photoStudio: historicPhotoStudio,
  },
  {
    id: "celebration-free-ceremony",
    type: "celebration",
    title: "Freie Trauung am Hof",
    subtitle: "Zeremonie, Wetterplan, Foto-Route",
    description:
      "Ein kuratierter Ablauf für freie Trauungen: ruhiger Ort, Bestuhlung, Akustik, Wegführung und anschließende Fotopunkte.",
    x: 43,
    y: 77,
    audience: ["wedding"],
    tags: ["Freie Trauung", "Ablauf", "Wetterplan"],
    status: "planned",
    details: [
      "Traubogen, Sitzordnung und Blickrichtung vorbereiten",
      "Schlechtwetter-Alternative und stille Zonen vorab klären",
      "Fotospots nach der Zeremonie direkt anschließen",
    ],
    eventInfo: {
      title: "Freie Trauung",
      bullets: [
        "Zeitfenster reservieren",
        "Aufbaufläche prüfen",
        "Akustik und Wege klären",
        "Foto-Route danach",
        "Trauredner:in / Partner einbinden",
      ],
      cta: "Trauungsablauf vormerken",
    },
    photoStudio: historicPhotoStudio,
  },
  {
    id: "celebration-church-option",
    type: "celebration",
    title: "Kirchliche Option prüfen",
    subtitle: "Kapelle, Segen, Zuständigkeit",
    description:
      "Falls Kapelle, kirchlicher Segen oder religiöser Rahmen möglich sind, braucht es einen klaren Prüfprozess mit Pfarre, Museum und Ablaufplan.",
    x: 79,
    y: 7,
    audience: ["wedding", "pensioners"],
    tags: ["Kapelle prüfen", "Segen", "Partner"],
    status: "planned",
    details: [
      "Kapellen oder sakrale Orte zuerst fachlich und organisatorisch prüfen",
      "Zuständigkeit mit Pfarre, Museum und Gemeinde klären",
      "Respektvolle Trennung von Museumsbetrieb, Andacht und Eventlogik",
    ],
    eventInfo: {
      title: "Kirchliche Feier",
      bullets: [
        "Kapelle/Ort prüfen",
        "Pfarre oder Seelsorge einbinden",
        "Ablauf und Musik klären",
        "Barrierearme Wege planen",
        "Fotoregeln festlegen",
      ],
      cta: "Prüfliste öffnen",
    },
  },
  {
    id: "celebration-baptism-family",
    type: "celebration",
    title: "Taufe & Familienfeier",
    subtitle: "Ruhiger Rahmen, Essen, Erinnerungsbilder",
    description:
      "Taufen, Jubiläen oder kleinere Familienfeiern können als sanfte Pakete gedacht werden: kurzer offizieller Teil, Einkehr, Fotos und Erinnerung.",
    x: 58,
    y: 63.5,
    audience: ["wedding", "family", "culinary", "pensioners"],
    tags: ["Taufe", "Familienfeier", "Einkehr"],
    status: "planned",
    details: [
      "Geeignet für kurze Wege zwischen Feierort, Gasthaus und Fotopunkten",
      "Familienfreundliche Zeitfenster und Pausen einplanen",
      "Erinnerungsdruck, Holzlaser oder Glasgravur als Zusatzangebot",
    ],
    eventInfo: {
      title: "Taufe & Familienfeier",
      bullets: [
        "kleiner Ablaufplan",
        "Gasthaus-Slot",
        "Familien-Fotopunkt",
        "Kinderfreundliche Route",
        "Druck, Holzlaser oder Glasgravur an der Kasse",
      ],
      cta: "Familienpaket skizzieren",
    },
    photoStudio: historicPhotoStudio,
  },
  {
    id: "food-rohrerhof",
    type: "culinary",
    title: "Rohrerhof & Gasthaus",
    subtitle: "Essen, Einkehr, Feiern",
    description: "Kulinarischer Ankerpunkt: regionale Küche, Biergarten, Gruppen und Abschluss des Rundgangs.",
    x: 58,
    y: 63.5,
    audience: ["culinary", "family", "pensioners", "wedding"],
    tags: ["Gasthaus", "Biergarten", "Region"],
    status: "planned",
    details: ["Start- oder Abschlussstation", "Buchbar für Gruppen", "Verknüpfung mit Rezeptpass"],
    eventInfo: {
      title: "Tiroler-Schmankerl-Route",
      bullets: ["Probierportionen je Station", "Routenpass mit QR-Stempeln", "ruhige Zeitslots", "Gasthaus-Abschluss"],
      cta: "Schmankerl-Route planen",
    },
  },
  {
    id: "food-kirchtag",
    type: "culinary",
    title: "Tiroler-Schmankerl-Route",
    subtitle: "Brauchtum, Musik, Handwerk und Essen",
    description: "Eventmodus für Speisen, Musik, Handwerk und sanfte Besucherlenkung.",
    x: 84,
    y: 32,
    audience: ["culinary", "family", "pensioners"],
    tags: ["Kirchtag", "Event", "Hausmannskost"],
    status: "planned",
    details: ["Jeder Hof kann ein Gericht oder Thema tragen", "Routenlogik verteilt Besucherströme", "Digitale Rezeptkarte als Erinnerung"],
    eventInfo: {
      title: "Schmankerl-Station",
      bullets: ["Gericht", "Hofgeschichte", "Allergenhinweise", "Wartezeit", "Audio der Guides"],
      cta: "Station öffnen",
    },
  },
  {
    id: "food-courtyard",
    type: "culinary",
    title: "Schmankerl erzählen",
    subtitle: "Was kam früher auf den Tisch?",
    description: "Verknüpft Rezepte, Vorrat, Armut, Festtage und regionale Zutaten mit den einzelnen Höfen.",
    x: 49,
    y: 62.5,
    audience: ["culinary", "school", "chroniclers"],
    tags: ["Rezepte", "Vorrat", "Festtag"],
    status: "planned",
    details: ["Was kam früher auf den Tisch?", "Festtag vs. Alltag", "Rezepte und Erinnerungen je Hof sammeln"],
    eventInfo: {
      title: "Rezept & Erinnerung",
      bullets: ["Rezept speichern", "Audio anhören", "Quelle prüfen", "Druck als Mitnahmeblatt"],
    },
  },
  {
    id: "food-pruegeltorte",
    type: "culinary",
    title: "Brandenberger Prügeltorte",
    subtitle: "Schichtgebäck, Handwerk, Alpbachtal",
    description:
      "Eine regionale Festtagsspezialität wird als ruhige Schaustation erlebbar: Zutaten, Schichtaufbau, Feuer, Geduld und Geschichte.",
    x: 49.8,
    y: 62.5,
    audience: ["culinary", "family", "pensioners", "chroniclers"],
    tags: ["Alpbachtal", "Festtag", "Handwerk"],
    status: "planned",
    details: [
      "Teig wird Schicht für Schicht auf einem Prügel gebacken",
      "Vier einfache Grundzutaten als Einstieg in Vorrat und Regionalität",
      "Guter Anker für Kramsach, Brandenberg und lokale Produzent:innen",
    ],
    eventInfo: {
      title: "Prügeltorten-Station",
      bullets: [
        "Herstellung erklären",
        "Geruch und Geräusch als Audio",
        "Mini-Probierstück",
        "Quelle und Familiengeschichte",
        "Mitnahmeblatt oder Geschenkpaket",
      ],
      cta: "Station als Festtagsmoment vormerken",
    },
  },
  {
    id: "herb-senses",
    type: "herb",
    title: "Weg der Sinne",
    subtitle: "Saisonaler Kräuterpunkt",
    description: "Beobachten, riechen, lernen: Kräuterwissen ohne unkontrolliertes Pflücken.",
    x: 42,
    y: 82,
    audience: ["herbs"],
    tags: ["Saison", "Sicherheit", "Workshop"],
    status: "planned",
    eventInfo: {
      title: "Kräuterworkshop",
      bullets: ["Saisonfenster", "Fachfreigabe", "Riech- und Schauaufgaben", "keine Sammelaufforderung"],
      cta: "Workshop vormerken",
    },
  },
  {
    id: "herb-garden",
    type: "herb",
    title: "Bauerngarten",
    subtitle: "Küche und Hausapotheke",
    description: "Historische Nutzung von Kräutern mit Warnhinweisen und fachlicher Freigabe.",
    x: 16.5,
    y: 78.5,
    audience: ["herbs"],
    tags: ["Kräuter", "Fachfreigabe", "Familien"],
    status: "planned",
  },
  {
    id: "family-senses",
    type: "family",
    title: "Familienrunde",
    subtitle: "Kurze Aufgaben, viele Sinneseindrücke",
    description: "Ein Rundgang mit kleinen Suchaufgaben, Pausenpunkten und kindgerechter Sprache.",
    x: 42,
    y: 82,
    audience: ["family"],
    tags: ["Kinder", "Pausen", "Entdecken"],
    status: "planned",
    eventInfo: {
      title: "Familientag",
      bullets: ["kurze Runde", "Pausenpunkte", "Avatar-Foto", "Sammelkarte"],
      cta: "Familienrunde starten",
    },
  },
  {
    id: "family-avatar",
    type: "family",
    title: "Mein Hof-Avatar",
    subtitle: "Foto hochladen, Rolle erleben",
    description: "Kinder und Begleitpersonen können später aus Fotos eine passende Spielfigur im historischen Setting erzeugen.",
    x: 46.2,
    y: 37.5,
    audience: ["family", "school"],
    tags: ["Avatar", "Foto", "Rolle"],
    status: "planned",
    photoStudio: historicPhotoStudio,
  },
  {
    id: "pensioner-view",
    type: "pensioner",
    title: "Ruhiger Blickpunkt",
    subtitle: "Erinnern, sitzen, erzählen",
    description: "Ein entschleunigter Punkt mit größerer Schrift, Audio, Sitzhinweis und persönlichen Erinnerungsfragen.",
    x: 84.4,
    y: 31,
    audience: ["pensioners"],
    tags: ["Sitzpunkt", "Audio", "Erinnerung"],
    status: "planned",
    eventInfo: {
      title: "Erzählrunde",
      bullets: ["große Schrift", "Audio statt langer Texte", "Sitzpunkte", "ruhiges Tempo"],
      cta: "Ruhige Route wählen",
    },
  },
  {
    id: "pensioner-short-loop",
    type: "pensioner",
    title: "Kurze Komfort-Runde",
    subtitle: "Wenig Steigung, nahe Einkehr",
    description: "Priorisiert kurze Wege, klare Orientierung, sanftes Tempo und einen guten Abschluss im Gasthaus.",
    x: 58,
    y: 63.5,
    audience: ["pensioners"],
    tags: ["Komfort", "Lesbarkeit", "Einkehr"],
    status: "planned",
  },
  {
    id: "chronicle-guide-audio",
    type: "chronicler",
    title: "Guide-Erzählung aufnehmen",
    subtitle: "Audio direkt am Hof speichern",
    description: "Chroniker:innen und Guides sprechen Erinnerungen, Quellenhinweise oder Anekdoten dort ein, wo sie hingehören.",
    x: 49,
    y: 62.5,
    audience: ["chroniclers"],
    tags: ["Audio", "Quelle", "Oral History"],
    status: "planned",
    eventInfo: {
      title: "Chroniker-Sammeltag",
      bullets: ["Audio aufnehmen", "Quelle angeben", "Foto zuordnen", "Freigabe markieren"],
      cta: "Geschichte erfassen",
    },
  },
  {
    id: "chronicle-object",
    type: "chronicler",
    title: "Objektgeschichte sichern",
    subtitle: "Werkzeug, Raum, Dokument",
    description: "Ein Fundstück bekommt Foto, Herkunft, Quelle, Freigabestatus und mögliche Verwendung im Spiel.",
    x: 47.3,
    y: 53.5,
    audience: ["chroniclers"],
    tags: ["Archiv", "Objekt", "Freigabe"],
    status: "planned",
  },
  {
    id: "repair-path",
    type: "maintenance",
    title: "Wegkante prüfen",
    subtitle: "Interne Aufgabe",
    description: "Holzkante am Weg dokumentieren, Priorität setzen und Vorher-Foto hinterlegen.",
    x: 61.5,
    y: 50,
    audience: ["maintenance"],
    tags: ["Sicherheit", "Foto", "Aufgabe"],
    status: "open",
    priority: "high",
  },
  {
    id: "repair-qr",
    type: "maintenance",
    title: "QR-Code erneuern",
    subtitle: "Station Schmiede",
    description: "Marker prüfen, Ersatzschild vorbereiten, Aufgabe nach Montage schließen.",
    x: 47.3,
    y: 53.5,
    audience: ["maintenance"],
    tags: ["QR", "Station", "Betrieb"],
    status: "open",
    priority: "medium",
  },
];

export const pitchRoadmap: RoadmapItem[] = [
  {
    phase: "0",
    title: "Vorführbarer erster Stand",
    description: "Website, App-Erlebnis, Karte, Zielgruppen und Unterlagen stehen lokal bereit.",
  },
  {
    phase: "1",
    title: "Schulklassen-Pilot",
    description: "Eine reale Route mit QR-Codes, Lehreransicht und Feedbackauswertung.",
  },
  {
    phase: "2",
    title: "Besucher-Module",
    description: "Fotospots, Kulinarik, Kräuterpfad, Familien-, Pensionisten- und Eventformate.",
  },
  {
    phase: "3",
    title: "Interner Betrieb",
    description: "Wartung, Aufgaben, Fotodokumentation und Standortdatenbank.",
  },
  {
    phase: "4",
    title: "Plattform",
    description: "Übertragbar auf weitere Museen, Erlebnisorte, Events und Firmenführungen.",
  },
];

export const processSteps: ProcessStep[] = [
  {
    number: "01",
    title: "Wissen heben",
    description:
      "Guides, Verein und Zeitzeug:innen kennen Details, die nirgends stehen.",
    need: "Audio, Fotos, Dokumente, Anekdoten.",
  },
  {
    number: "02",
    title: "Wissen ordnen",
    description:
      "Alles bekommt einen Ort: Hof, Raum, Objekt, Weg oder Event.",
    need: "Quelle, Zeitraum, Freigabe, Zielgruppe.",
  },
  {
    number: "03",
    title: "Erlebnisse bauen",
    description:
      "Aus geprüftem Material entstehen Missionen, Routen und Aufgaben.",
    need: "Rollen, Karte, Layer, Freigaben.",
  },
  {
    number: "04",
    title: "Vor Ort nutzen",
    description:
      "Besucher:innen sehen passende Inhalte. Teams pflegen vor Ort.",
    need: "QR-Codes, Offline-Nutzung, Rechte.",
  },
];

export const futureFormats: FutureFormat[] = [
  {
    id: "geocaching",
    title: "Geocaching am Hof",
    audience: "Familien, Jugendgruppen, Teams",
    description:
      "Koordinaten führen zu versteckten Geschichten.",
    guardrail: "Nur in kuratierten Zonen.",
    stage: "Nach Schulklassen-Pilot",
    campaign: "Sommerferien-Kampagne: Jede Woche wird eine neue Hofspur freigeschaltet.",
    museumBenefit: "Wiederholte Familienbesuche, mehr Aufenthaltszeit und ein einfacher Anlass für Ferienpass, Schulen und regionale Medien.",
    cadence: "Saisonal wöchentlich im Sommer oder dauerhaft als Familienrunde.",
  },
  {
    id: "fpv",
    title: "FPV-Drohnenrennen",
    audience: "Tech-Community, Eventpublikum, Sponsoren",
    description:
      "Ein seltenes Sonderformat für abgesperrte Zeitfenster.",
    guardrail: "Nur mit Genehmigung und Sicherheitsteam.",
    stage: "Eventformat, nicht Alltagsmodus",
    campaign: "Tech-Sondertag mit Live-Stream, klaren Flugfenstern und Sponsor-Fläche.",
    museumBenefit: "Neue Zielgruppe, Presseanlass und Partnergespräche mit Technologie-, Tourismus- und Sicherheitsdienstleistern.",
    cadence: "Maximal 1x jährlich, nur außerhalb des normalen Besucherbetriebs.",
  },
  {
    id: "creator-walk",
    title: "Creator- und Fotografie-Walk",
    audience: "Hobbyfotograf:innen, Content-Creator, Tourismus",
    description:
      "Geführte Motive mit historischem Kontext.",
    guardrail: "Jedes Motiv bekommt Regeln und Quelle.",
    stage: "Nach Fotospot-Modus",
    campaign: "Goldene-Stunde-Walk: Fotospots, historische Bildideen und Social-Media-Paket.",
    museumBenefit: "Mehr hochwertige Besucherfotos, bessere Wiedererkennbarkeit und organische Reichweite durch lokale Creator.",
    cadence: "Monatlich in der Saison, zusätzlich als buchbarer Gruppen-Slot.",
  },
  {
    id: "data-check",
    title: "Statistik-Check",
    audience: "Museum, Gemeinde, Tourismus, Sponsoren",
    description:
      "Tourismus-, Verkehrs-, Fahrzeug- und Personenverkehrsdaten helfen, Saison, Anreise und Gruppenpakete realistisch zu prüfen.",
    guardrail: "Nur als Entscheidungsbasis, keine überzogenen Prognosen.",
    stage: "Vor Partnergesprächen",
    campaign: "Datenbasierter Partnerpitch mit Saisonfenstern, Buslogik, Rattenberg-Brücke und Kapazitätsannahmen.",
    museumBenefit: "Bessere Entscheidungen vor Investitionen, realistischere Angebote und belastbarere Gespräche mit Tourismus und Gemeinde.",
    cadence: "Jährlich vor Saisonplanung und zusätzlich vor großen Evententscheidungen.",
  },
  {
    id: "bus-groups",
    title: "Rattenberg-Busbrücke",
    audience: "Busunternehmer, Vereine, Tagesausflüge",
    description:
      "Kurze Kombipakete für Rattenberg-Reisegruppen: Glasstadt, Museum, Schmankerl, Foto und planbare Rückfahrt.",
    guardrail: "Nur mit Kapazität, WC, Ein-/Ausstieg und Zeitfenstern.",
    stage: "B2B-Paket nach Pilot",
    campaign: "Halbtagespaket: Rattenberg plus Höfemuseum plus Schmankerl plus Erinnerungsfoto.",
    museumBenefit: "Planbare Gruppenbesuche, Zusatzumsatz im Gasthaus und bessere Auslastung an passenden Wochentagen.",
    cadence: "Dauerhaft buchbar, mit saisonalen Schwerpunktwochen.",
  },
  {
    id: "motorcycle-stop",
    title: "Motorrad-Einkehr",
    audience: "Motorradgruppen, Tourenfahrer:innen",
    description:
      "Kurzer Kulturstopp mit sicherer Abstellzone, Schmankerl und Fotopunkt.",
    guardrail: "Kein Fahr-Event im Gelände, nur Anreise- und Einkehrlogik.",
    stage: "Partnerformat Tourismus",
    campaign: "Kultur-Einkehr für Motorradrouten: kurzer Stopp, Jause, Fotopunkt und sichere Abstellzone.",
    museumBenefit: "Neue Tagesausflugsgruppe, Gastronomie-Anbindung und zusätzliche Sichtbarkeit in Touren-Communities.",
    cadence: "Mai bis Oktober an ausgewählten Wochenenden oder als Gruppenpaket.",
  },
  {
    id: "larp",
    title: "LARP / Living History",
    audience: "LARP-Community, Geschichtsvermittlung",
    description:
      "Rollen, Quellen und Höfe werden zu kuratierten Spielszenen.",
    guardrail: "Historisch sensibel, fachlich freigegeben, klare Zonen.",
    stage: "Sonderformat mit Partnern",
    campaign: "Living-History-Wochenende mit geprüften Rollen, ruhigen Szenen und geführten Zeiten.",
    museumBenefit: "Tiefe Beschäftigung mit Geschichte, starke Nischen-Community und hochwertiger Content für Dokumentation.",
    cadence: "1 bis 2x jährlich als kuratiertes Sonderformat.",
  },
  {
    id: "xr-time-travel",
    title: "VR/AR-Zeitreise",
    audience: "Museum, Tourismus, Schulklassen, Gruppen",
    description:
      "Optionaler Zusatz vor oder nach der Führung: geprüfte Hofgeschichte als 360-Grad- oder AR-Erlebnis mit Tiroler XR-Partner.",
    guardrail: "Erst nach Content-Freigabe, nicht als Ersatz für echte Guides.",
    stage: "Kooperation prüfen",
    campaign: "Zeitreise-Preview: Besucher sehen einen Hofzustand früherer Jahrhunderte vor oder nach der Führung.",
    museumBenefit: "Innovationssignal, Schul- und Presseanlass, barrierearmer Zusatz für Räume oder Szenen, die nicht immer zugänglich sind.",
    cadence: "Zunächst Pilotinstallation, später dauerhaft als optionales Zusatzmodul.",
  },
  {
    id: "medieval-fest",
    title: "Mittelalter- & Handwerksfest",
    audience: "Familien, Vereine, Handwerk, Marktstände",
    description:
      "Markt, Handwerk, Musik und Kulinarik als ruhiger Rundgang.",
    guardrail: "Nicht beliebig spektakulär, sondern orts- und wissensbasiert.",
    stage: "Eventpaket",
    campaign: "Handwerks- und Markttag: Vorführungen, Musik, Schmankerl und kurze Hofgeschichten je Station.",
    museumBenefit: "Familienanlass, Vereinsaktivierung und zusätzliche Einnahmen über Gastronomie, Marktstände und Führungen.",
    cadence: "1x jährlich oder als ruhige Erweiterung bestehender Festtage.",
  },
  {
    id: "oldtimer-rally",
    title: "Oldtimer-Sternfahrt",
    audience: "Oldtimer-Clubs, Ausflugsgruppen, Fotografie",
    description:
      "Historische Fahrzeuge treffen historische Höfe als Fototag.",
    guardrail: "Parken, Zufahrt, Boden- und Lärmschutz zuerst klären.",
    stage: "Saisonales Partnerformat",
    campaign: "Oldtimer-Sternfahrt mit Fotopunkt, kurzer Führung und regionalem Genussabschluss.",
    museumBenefit: "Bildstarker PR-Anlass, Clubkontakte, Sponsorenpotenzial und Kombi-Angebote für Tagesgäste.",
    cadence: "1x jährlich im Frühjahr oder Herbst.",
  },
  {
    id: "tracht-show",
    title: "Trachtenmodenschau am Hof",
    audience: "Einheimische, Vereine, Tourismus, Mode- und Handwerkspartner",
    description:
      "Einmal pro Jahr wird das Museum zur Bühne für Tracht, Handwerk, Musik, Fotopunkte und regionale Geschichten.",
    guardrail: "Stilvoll, regional und ruhig kuratiert; keine beliebige Laufstegshow ohne Hofbezug.",
    stage: "Jährliches Kultur- und Partnerformat",
    campaign: "Tracht am Hof: Modenschau, Handwerksstationen, historische Fotopunkte, Musik und Schmankerl als Abend- oder Nachmittagsevent.",
    museumBenefit: "Neues Publikum, starke lokale Partner, Sponsoringpotenzial, hochwertige Bilder und ein Anlass für Social Media, Presse und Tourismus.",
    cadence: "1x jährlich als wiedererkennbares Signature-Event.",
  },
  {
    id: "archery-story",
    title: "3D-Bogenparcours",
    audience: "Familien, Vereine, Outdoor-Gruppen",
    description:
      "Ein kontrollierter Parcours erzählt Jäger-, Wilderer- und Waldgeschichten ohne den Museumsbesuch zum Actionformat zu machen.",
    guardrail: "Nur mit Fachpartner, Sicherheitskonzept, klaren Zonen und außerhalb sensibler Besuchszeiten.",
    stage: "Sonderformat Outdoor",
    campaign: "Waldspur am Hof: 3D-Ziele, kurze Storypunkte und ein Abschluss beim Gasthaus.",
    museumBenefit: "Starker Anlass für Vereine und Familien, neue Outdoor-Partner und eine erzählerische Brücke zu Wald, Jagd, Armut und Gesetz.",
    cadence: "1 bis 3 Termine pro Jahr oder als betreuter Gruppenworkshop.",
  },
  {
    id: "craft-challenge",
    title: "Handwerk & Vereinschallenge",
    audience: "Lehrlinge, Vereine, lokale Gruppen",
    description:
      "Aufgaben rund um Holz, Feuer, Werkzeuge und Reparatur.",
    guardrail: "Fachlich betreut, kein Action-Parcours.",
    stage: "Mit Guide Studio",
    campaign: "Werkstatt am Hof: Lehrlinge, Vereine und lokale Gruppen lösen echte Handwerksaufgaben mit Geschichte.",
    museumBenefit: "Vereinsbindung, Nachwuchsarbeit, lokale Betriebe als Partner und dokumentiertes Handwerkswissen.",
    cadence: "Quartalsweise als Workshop oder dauerhaft als buchbares Gruppenformat.",
  },
  {
    id: "heritage-consulting",
    title: "Bauernhaus-Inspiration",
    audience: "Hausbesitzer:innen, Architekt:innen, Handwerk, Premium-Tourismus",
    description:
      "Ein Inspirationsmodus zeigt historische Details, Materialien und Raumlogiken als Beratungspfad für hochwertige Bauernhaus-Projekte.",
    guardrail: "Keine beliebige Nachbauästhetik: fachliche Einordnung, Denkmalschutz und regionale Handwerkspartner zuerst.",
    stage: "Premium-Beratung prüfen",
    campaign: "Vom Hof ins Haus: kuratierte Detailtour für Stube, Holz, Ofen, Türen, Beschläge und Vorrat.",
    museumBenefit: "Neuer Premium-Nutzen, Handwerkspartner, Förder- und Sponsoringpotenzial sowie höhere Wertschätzung für Fachwissen.",
    cadence: "Dauerhaft als Inspirationsmodus, zusätzlich 2 bis 4 Beratungstage pro Jahr.",
  },
  {
    id: "history-salon",
    title: "Optionaler Geschichtsmodus",
    audience: "Kulturreisende, Einheimische, Schulen Oberstufe, Vereine",
    description:
      "Vertiefende Themenpfade verbinden Hofalltag mit Holztrift, Bergbau, Wasser, Wald, Rattenberg und Regionalgeschichte, ohne den kindgerechten Abenteuerfluss zu ersetzen.",
    guardrail: "Nur mit Quellen, Expert:innenhinweisen und klarer Trennung zwischen gesichertem Wissen und erzählerischer Verdichtung.",
    stage: "Expert:innenformat",
    campaign: "Tirol verstehen: ein optionaler Deep-Dive-Modus mit Mini-Routen, Themenabenden und digitalen Dossiers zu Wald, Wasser, Bergbau und Stadt-Land-Beziehungen.",
    museumBenefit: "Höhere Relevanz für kultur- und geschichtsinteressierte Zielgruppen, Kooperationen mit Forschung/Verlagen und wiederkehrende Besuchsanlässe.",
    cadence: "Monatlich als Salon oder dauerhaft als vertiefender App-Modus.",
  },
];

export const eventLearnings: EventLearning[] = [
  {
    id: "symbol",
    title: "Klares Symbol",
    signal: "Ein langer Tisch ist sofort verständlich und fotografierbar.",
    transfer:
      "In Kramsach wird daraus eine Tiroler-Schmankerl-Route.",
    appUse: "Stationen, Wege und Wartezeiten.",
  },
  {
    id: "variety",
    title: "Ein Thema, viele Varianten",
    signal: "Ein Gerichtstyp trägt süße, pikante und regionale Varianten.",
    transfer:
      "Jeder Hof bekommt ein kulinarisches Thema.",
    appUse: "Rezeptpass, Audio, Freigabe.",
  },
  {
    id: "rhythm",
    title: "Taktung statt Gedränge",
    signal: "Tickets, Gruppen und Programm machen Besuch planbar.",
    transfer:
      "Der Kirchtag bekommt sanfte Zeitslots.",
    appUse: "Besucherlenkung und Alternativrouten.",
  },
  {
    id: "memory",
    title: "Essen plus Erinnerung",
    signal: "Tradition, Musik und Wiedererkennung machen das Erlebnis.",
    transfer:
      "Jedes Gericht wird mit Hof und Jahreszeit verbunden.",
    appUse: "Rezepte, Fotos, Quellen je Hof.",
  },
];

export const culinaryInspirations: CulinaryInspiration[] = [
  {
    id: "kasspatzln",
    name: "Kasspatzln",
    angle: "Bergkäse, Zwiebel, einfache Sättigung",
    routeUse: "Hofstation zu Milch, Käse und Almküche.",
  },
  {
    id: "groestl",
    name: "Tiroler Gröstl",
    angle: "Pfanne, Kartoffel, Resteverwertung",
    routeUse: "Alltagsküche nach Arbeit und Festtag.",
  },
  {
    id: "marend",
    name: "Tiroler Marend",
    angle: "Speck, Käse, Brot, Brettljause",
    routeUse: "Vorrat, Haltbarkeit und Raststation.",
  },
  {
    id: "schlutzkrapfen",
    name: "Schlutzkrapfen",
    angle: "Gefüllte Teigtaschen, Spinat, Topfen",
    routeUse: "Familienfreundliche Probierstation.",
  },
  {
    id: "kiachl",
    name: "Kiachl",
    angle: "Festtag, heißes Fett, süß oder pikant",
    routeUse: "Eventstation für Kirchtag und Marktgefühl.",
  },
  {
    id: "moosbeernocken",
    name: "Moosbeernocken",
    angle: "Saison, Waldfrucht, Sommer",
    routeUse: "Verknüpfung mit Natur- und Kräuterroute.",
  },
  {
    id: "kirchtagskrapfen",
    name: "Kirchtagskrapfen",
    angle: "Herbst, Mohn, Birne, Dörrfrüchte",
    routeUse: "Kirchtag-Signatur mit Rezeptkarte.",
  },
  {
    id: "pruegeltorte",
    name: "Brandenberger Prügeltorte",
    angle: "Schichtgebäck am Prügel, Feuer, Geduld",
    routeUse: "Festtagsstation mit Vorführung, Audio und Geschenkpaket.",
  },
];

export const proofPoints = [
  { label: "Entscheidung", value: "Pilot freigeben" },
  { label: "Start", value: "Karte + Guide Studio" },
  { label: "Partnernutzen", value: "Buchung + Reichweite" },
  { label: "Skalierung", value: "Browser, später App" },
];

export const typeIcons: Record<MapPointType, LucideIcon> = {
  mission: Users,
  photo: Camera,
  celebration: HeartHandshake,
  culinary: Utensils,
  herb: Flower2,
  family: Users,
  hof: House,
  pensioner: Clock,
  chronicler: BookOpen,
  maintenance: Hammer,
};

export const mapPointTypeLabels: Record<MapPointType, string> = {
  mission: "Mission",
  photo: "Fotospot",
  celebration: "Feier",
  culinary: "Kulinarik",
  herb: "Kräuter",
  family: "Familie",
  hof: "Hofwissen",
  pensioner: "Pensionisten",
  chronicler: "Chronik",
  maintenance: "Intern",
};

export const routePath: [number, number][] = [
  [380, 224],
  [625, 739],
  [465, 757],
  [375, 778],
];

export const mapBounds: [[number, number], [number, number]] = [
  [0, 0],
  [1000, 1600],
];

export function pointToLatLng(point: Pick<MapPoint, "x" | "y">): [number, number] {
  return [1000 - (point.y / 100) * 1000, (point.x / 100) * 1600];
}

export function activePoints(mode: AudienceMode) {
  return mapPoints.filter((point) => point.audience.includes(mode));
}

export function audienceById(mode: AudienceMode) {
  return audiences.find((audience) => audience.id === mode) ?? audiences[0];
}

export function typeColor(type: MapPointType) {
  switch (type) {
    case "mission":
      return "#1d6b57";
    case "photo":
      return "#a35274";
    case "celebration":
      return "#8f4f66";
    case "culinary":
      return "#8a4f1f";
    case "herb":
      return "#5d8d3b";
    case "family":
      return "#b56b34";
    case "hof":
      return "#5d4b32";
    case "pensioner":
      return "#6f6a42";
    case "chronicler":
      return "#73543f";
    case "maintenance":
      return "#9a5b2d";
  }
}
