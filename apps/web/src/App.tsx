import { useEffect, useMemo, useState, type CSSProperties, type ReactNode } from "react";
import {
  ArrowDown,
  ArrowRight,
  ArrowUp,
  BadgeEuro,
  Bike,
  BookOpen,
  Brain,
  Building2,
  CalendarDays,
  BusFront,
  Camera,
  CarFront,
  Castle,
  ChevronRight,
  Clock,
  Compass,
  Database,
  Drama,
  ExternalLink,
  Factory,
  Flag,
  Globe2,
  Goal,
  Hammer as HammerIcon,
  Home,
  Landmark,
  Leaf,
  Map,
  MessageCircle,
  Mic2,
  Pause,
  QrCode,
  Route,
  ScrollText,
  Share2,
  ShieldCheck,
  Shirt,
  Smartphone,
  Sparkles,
  Target,
  Upload,
  Utensils,
  Users,
  Video,
  SkipForward,
  Volume2,
  WandSparkles,
  X,
} from "lucide-react";
import type { AudienceMode, FutureFormat, MapPoint, ModuleIdea } from "./data/platform";
import {
  activePoints,
  ambassadorLevers,
  audienceById,
  buildathonReferences,
  expansionAreas,
  futureFormats,
  generatedMissionCatalog,
  mapPointTypeLabels,
  moduleIdeas,
  pitchGoalCards,
  pitchRoadmap,
  pitchSteps,
  processSteps,
  prototypeScreens,
  typeColor,
  typeIcons,
} from "./data/platform";
import { MuseumMap, type MapVariant } from "./features/map/MuseumMap";
import { ModeTabs } from "./components/ModeTabs";
import { PitchPanel } from "./components/PitchPanel";
import { PointDrawer } from "./components/PointDrawer";
import { AvatarLab } from "./components/AvatarLab";
import { GuideStudio } from "./components/GuideStudio";
import { AppClickDummy } from "./components/AppClickDummy";

// Für Nicht-Programmierer:innen: Diese Funktion baut den richtigen Bildpfad.
// So funktionieren Bilder lokal und später auch auf GitHub Pages.
function publicAsset(path: string) {
  return `${import.meta.env.BASE_URL}${path}`;
}

// Textbausteine für den Abschnitt "Ausgangslage". Wer nur Inhalt ändern will,
// kann hier Texte bearbeiten, ohne das Seitenlayout weiter unten zu verändern.
const contextBlocks: Array<{
  id: string;
  title: string;
  paragraphs: string[];
  links?: Array<{ label: string; href: string }>;
}> = [
  {
    id: "museum",
    title: "1. Das Tiroler Höfemuseum",
    paragraphs: [
      "Das Museum Tiroler Bauernhöfe in Kramsach ist kein klassisches Haus mit Vitrinen, sondern ein Freilichtmuseum: Besucher:innen bewegen sich durch ein Gelände mit original wiedererrichteten Höfen und Nebengebäuden aus verschiedenen Tiroler Talschaften.",
      "Der eigentliche Schatz liegt in der Verbindung aus Architektur, Landschaft und Alltagswissen. Herd, Stube, Stall, Speicher, Werkzeuge, Wege und Jahreszeiten erklären gemeinsam, wie ein Hof als Überlebenssystem funktioniert hat.",
      "Für eine digitale Weiterentwicklung bedeutet das: Die App darf den Ort nicht ersetzen. Sie muss helfen, die realen Höfe, Geschichten, Geräusche, Speisen, Rollen und Erinnerungen gezielter sichtbar zu machen.",
    ],
  },
  {
    id: "visitors",
    title: "2. Das Besucherproblem",
    paragraphs: [
      "Das Risiko liegt nicht darin, dass dem Museum Inhalte fehlen. Das Risiko liegt darin, dass viele dieser Inhalte für neue Zielgruppen nicht schnell genug verständlich, teilbar oder buchbar werden.",
      "Wenn Besucherzahlen stagnieren oder sinken, reicht ein einzelnes neues Format selten aus. Gruppen, Familien, Busgäste, Hochzeitspaare, Pensionist:innen und Tourist:innen brauchen unterschiedliche Einstiege in denselben Ort.",
      "Die wichtigste Hebelwirkung entsteht daher durch Wiederverwendung: Einmal gesammeltes Guide-Wissen soll Missionen, Routen, Audiopunkte, Fotomotive, Kulinarik, interne Aufgaben und spätere App-Screens speisen.",
    ],
  },
  {
    id: "buildathon",
    title: "3. AI Collective, KINN und Buildathon",
    paragraphs: [
      "AI Collective Innsbruck zeigt mit seinen Buildathons, dass gemischte Teams in wenigen Stunden klickbare Prototypen bauen können. Entscheidend ist dabei nicht perfekter Code, sondern ein greifbarer erster Beweis.",
      "KINN steht als Tiroler KI-Community für den lokalen Kontext: Menschen, die KI nicht abstrakt diskutieren, sondern in Tiroler Branchen, Orten und Organisationen anwenden wollen.",
      "Hack am Hof passt genau in diese Logik: ein realer Ort mit echtem Problem, viel Domänenwissen und genügend konkreten Anlässen, um aus einem Buildathon eine ernsthafte Folgeentwicklung zu machen.",
    ],
    links: [
      { label: "AI Collective", href: "https://aicollective.at" },
      { label: "KINN", href: "https://kinn.at" },
      { label: "Hack am Hof", href: "https://aicollective.at/hack-am-hof" },
    ],
  },
  {
    id: "prototypes",
    title: "4. Die zehn Prototypen",
    paragraphs: [
      "Die zehn Buildathon-Prototypen zeigen verschiedene Richtungen: Strategie und Ideenbewertung, Zeitreise, Gruppen-Mission, Eventlogik, Museumsführung, sichere Suche, Community, Hofjagd und historische Selfie-Erlebnisse.",
      "Keiner dieser Prototypen muss eins zu eins übernommen werden. Der Wert liegt im Best-of: Missionen aus Spiel am Hof und Hofjäger, Storytelling aus musealive, Foto/Avatar aus Traditirol, Eventlogik aus Morandell Events und Datenvertrauen aus SafeQuery.",
      "Daraus entsteht ein stärkeres Zielbild: nicht zehn getrennte Apps, sondern eine Plattform, in der dieselbe Karte, dieselben Höfe und dieselbe Wissensbasis je nach Zielgruppe anders ausgespielt werden.",
    ],
    links: [
      { label: "10 Prototypen ansehen", href: "#buildathon-prototypes" },
    ],
  },
  {
    id: "next",
    title: "5. Mögliche Folgeschritte",
    paragraphs: [
      "Der nächste Schritt ist ein bewusst kleines, klickbares App-Erlebnis in Smartphone-Größe. Es zeigt in wenigen Screens, wie Mission, Zeitreise, Foto und Guide-Wissen zusammenwirken.",
      "Parallel braucht es einen Content-Workshop mit Guides, Verein und Museumsprofis: Welche Geschichten sind gesichert? Welche Quellen gibt es? Was darf für Kinder, Gruppen, Hochzeitspaare oder öffentliche Kommunikation verwendet werden?",
      "Danach kann daraus ein Pilot werden: eine reale Hofrunde, ein erstes Foto-/Feierpaket, eine Schmankerl-Idee und ein einfaches Guide Studio. Erst wenn diese Basis trägt, lohnt sich der Ausbau zu App, Buchung, QR-Routen und weiteren Museen.",
    ],
  },
];

const boardPitchAgenda = [
  {
    time: "1-10 min",
    title: "Ort und Problem",
    text: "Warum das Höfemuseum kein Inhaltsproblem hat, sondern ein Übersetzungs-, Buchungs- und Sichtbarkeitsproblem für neue Zielgruppen.",
  },
  {
    time: "10-20 min",
    title: "Klickdummy erleben",
    text: "Am Smartphone wird gezeigt, wie Besucher:innen Mission, Zeitreise, Foto und Guide-Wissen direkt vor Ort verwenden könnten.",
  },
  {
    time: "20-35 min",
    title: "Angebote verstehen",
    text: "Gruppen, Feiern, Schmankerl, Reisen, Geschichte, Inspiration und Betrieb werden nicht als Einzelapps, sondern als Layer derselben Plattform erklärt.",
  },
  {
    time: "35-45 min",
    title: "Wissensarbeit klären",
    text: "Was Guides, Verein und Museum zuerst liefern müssen: Geschichten, Quellen, Fotos, Räume, Freigaben und Prioritäten.",
  },
  {
    time: "45-55 min",
    title: "Pilot entscheiden",
    text: "Welche kleine Kombination realistisch ist: eine erste Hofrunde, ein Guide-Studio-Workshop, ein Foto-/Feierpaket und ein Schmankerl-Test.",
  },
  {
    time: "55-60 min",
    title: "Beschlussfrage",
    text: "Nicht über eine fertige App entscheiden, sondern über den nächsten belastbaren Pilot mit klarer Zuständigkeit und Partnergesprächen.",
  },
];

const buildathonWinners: Record<string, { rank: string; points: string }> = {
  T09: { rank: "1. Publikum", points: "48 pt" },
  T10: { rank: "2. Publikum", points: "38 pt" },
  T08: { rank: "3. Publikum", points: "23 pt" },
};

// Kurze Kategorien für die zehn Buildathon-Prototypen. Diese Labels machen
// Podest und T01-T10-Liste für Leser:innen schneller erfassbar.
const buildathonPillars: Record<string, string> = {
  T01: "Ideen",
  T02: "Story",
  T03: "Schule",
  T04: "Events",
  T05: "Museum",
  T06: "Workshop",
  T07: "Daten",
  T08: "Community",
  T09: "Spiel",
  T10: "Foto",
};

const projectEstimates = [
  {
    phase: "Pilot klären",
    effort: "1-2 Wochen",
    cost: "ca. 3.000-8.000 EUR",
    text: "Workshop mit Museum, Guides und Verein: Zielgruppe, erste Route, Quellenlage, Datenschutz, Freigaben und Pilotumfang festlegen.",
  },
  {
    phase: "Klickbarer Pilot",
    effort: "3-6 Wochen",
    cost: "ca. 12.000-30.000 EUR",
    text: "Webapp/PWA mit Gruppenstart, Rollen, QR-Stationen, Karte, erster Mission, einfachen Bildern und Auswertung für eine reale Testroute.",
  },
  {
    phase: "Content & Guide Studio",
    effort: "laufend, Start 4-8 Wochen",
    cost: "ca. 8.000-25.000 EUR",
    text: "Hofprofile, Audio, Dokumente, Fotos, Quellen, Freigaben und Zielgruppenlogik erfassen. Das ist die eigentliche Wertarbeit.",
  },
  {
    phase: "Ausbau zur Plattform",
    effort: "3-9 Monate",
    cost: "ca. 40.000-120.000+ EUR",
    text: "Mehrere Zielgruppen, Buchungspakete, Foto-/Souvenirprozess, interne Wartung, Offline-Fähigkeit, Rollenrechte und spätere App-Verpackung.",
  },
];

const pilotDecisionScope = [
  {
    label: "Pilot jetzt",
    title: "Erste Hofrunde",
    text: "Ein reales, gut zum Museum passendes Erlebnis mit 4 bis 5 Stationen, QR-/Code-Start, Rollen, Aufgaben und kurzer Feedbackauswertung.",
  },
  {
    label: "Vorbereitung",
    title: "Guide-Studio-Workshop",
    text: "Guides, Verein und Museum liefern gesichertes Wissen, Quellen, Anekdoten, Fotos und Freigaben für genau diese Route.",
  },
  {
    label: "Nicht Teil des Beschlusses",
    title: "Vollausbau und Zusatzmodule",
    text: "Foto-/Feierpakete, Schmankerlroute, Buchung, XR, FPV, LARP und weitere Museen bleiben sichtbar, aber als spätere Ausbaustufen.",
  },
];

const pilotBoundaries = [
  "Ja/Nein zu einem begrenzten Museumspilot",
  "kein Beschluss über eine fertige Gesamtplattform",
  "Kostenkorridor und Verantwortlichkeiten erst für diesen Pilot schärfen",
];

const pitchNavItems = [
  { id: "top", label: "Ziel" },
  { id: "context", label: "Kontext" },
  { id: "decision", label: "Beschluss" },
  { id: "app-dummy", label: "Demo" },
  { id: "buildathon-prototypes", label: "Ideen" },
  { id: "studio", label: "Wissen" },
  { id: "costs", label: "Kosten" },
];

const pilotSuccessMetrics = [
  { label: "Nutzung", value: "mind. 2 reale Testgruppen erleben die Route" },
  { label: "Verstehen", value: "Guides erkennen Lernziel und Stationen wieder" },
  { label: "Betrieb", value: "Start, Rollen und Abschluss funktionieren ohne Zusatzpersonal" },
  { label: "Feedback", value: "Teilnehmende und Guides bewerten Ablauf, Tempo und Inhalte" },
];

const pilotRisks = [
  { label: "Datenschutz", value: "keine Nutzerkonten, Foto/Avatar nur optional und getrennt freigeben" },
  { label: "Scope", value: "nur eine Route, keine Buchungsplattform, keine Voll-App" },
  { label: "Betrieb", value: "QR-/Code-Start muss auch bei schwachem Empfang erklärbar bleiben" },
  { label: "Content", value: "jede Geschichte braucht Quelle, Freigabe und Altersstufe" },
];

const decisionMedia = [
  {
    image: "pitch-images/schulklassenmission.png",
    title: "Echte Hofrunde",
    text: "Der Pilot startet mit einem realen Rundgang, der zum Charakter des Museums passt.",
  },
  {
    image: "pitch-images/contentmodell-guide-studio.png",
    title: "Guide-Wissen sichern",
    text: "Quellen, Geschichten und Freigaben werden einmal strukturiert.",
  },
  {
    image: "pitch-images/hack-am-hof-teilnehmerinnen.png",
    title: "Partner einbinden",
    text: "Museum, Tourismus und Community entscheiden über den nächsten Schritt.",
  },
];

const contextVisuals = [
  {
    image: "pitch-images/hack-am-hof-teilnehmerinnen.png",
    title: "Hack am Hof",
    text: "Aus vielen Ideen entsteht ein gemeinsamer Baukasten.",
  },
  {
    image: "pitch-images/tirol-verstehen.png",
    title: "Ort verstehen",
    text: "Das Museum hat Inhalte, Geschichten und starke Bilder.",
  },
  {
    image: "pitch-images/bauernhaus-inspiration.png",
    title: "Ausbau denken",
    text: "Der Pilot zeigt, was später skalierbar werden kann.",
  },
];

const ideaNoteVisuals = [
  {
    image: "pitch-images/erste-ideen-notizen-02.jpg",
    title: "Vom Zettel zur Route",
    text: "Aus verstreuten Stichworten werden später klare Bausteine: Rätsel, Story, Gruppenlogik, Hinweise und Museumswissen.",
  },
];

const processVisuals = [
  {
    image: "pitch-images/contentmodell-guide-studio.png",
    title: "Wissen sammeln",
    text: "Guides, Verein und Museum liefern Quellen, Fotos und Geschichten.",
  },
  {
    image: "pitch-images/werkstatt-am-hof.png",
    title: "In Aufgaben übersetzen",
    text: "Aus Material werden Stationen, Rollen und klare Freigaben.",
  },
];

const pitchStepVisuals = [
  { image: "pitch-images/schulklassenmission.png", label: "Ort verstehen" },
  { image: "pitch-images/contentmodell-guide-studio.png", label: "Wissen ordnen" },
  { image: "lageplan.webp", label: "Karte nutzen" },
  { image: "pitch-images/tiroler-schmankerl-route.png", label: "Module kombinieren" },
  { image: "pitch-images/werkstatt-am-hof.png", label: "Pilot entscheiden" },
];

const ambassadorVisuals = [
  { image: "pitch-images/goldene-stunde-am-hof.png", label: "Teilbares Erinnerungsbild" },
  { image: "pitch-images/rattenberg-busbruecke.png", label: "Rattenberg als Einstieg" },
  { image: "pitch-images/ki-charaktere-souvenir.png", label: "Späteres Fotomodul" },
];

const ideaDecisionMetrics = [
  { label: "Zielgruppe", value: "Wer profitiert zuerst?" },
  { label: "Umsetzung", value: "Was ist mit wenig Risiko testbar?" },
  { label: "Betrieb", value: "Was kann das Museum real leisten?" },
  { label: "Ausbauwert", value: "Was stärkt spätere Pakete?" },
];

const ideaDecisionRows = [
  {
    title: "Jetzt als Pilot vorantreiben",
    tag: "Beschlussfähig",
    ideas: ["Spiel am Hof / Hofrunde", "Werkstattvormittage", "Besucherpaket"],
    text: "Diese Ideen sind realistisch testbar, passen zum Charakter des Museums und lassen sich kontrolliert vor Ort erproben.",
  },
  {
    title: "Mitdenken, aber nicht überladen",
    tag: "Nahe Erweiterung",
    ideas: ["Tierpatenschaft", "Newsletter & Spenden", "Dorfgeschichten-Podcast"],
    text: "Diese Formate nutzen denselben Wissens- und Beziehungsschatz, brauchen aber nicht im ersten App-Pilot zu stecken.",
  },
  {
    title: "Als buchbare Pakete nach dem Pilot prüfen",
    tag: "Einnahmen",
    ideas: ["Hochzeiten & Feiern", "Firmen-Teamtag", "Krimi-Dinner", "Almsommer-Erlebnistage"],
    text: "Hoher Angebotswert, aber stärker abhängig von Betrieb, Gastro, Personal, Terminen und klaren Verantwortlichkeiten.",
  },
  {
    title: "Im Ideenparkplatz behalten",
    tag: "Zielabhängig",
    ideas: ["Hofjäger", "AR-Brillen-Tour", "Digitale Schnitzeljagd", "Traditirol Selfie-Zeitreise"],
    text: "Ein Pokémon-Go ähnlicher Modus ist möglich, wenn das Museum bewusst ein aktiveres Spielziel verfolgt.",
  },
];

type ScopeLabel = "Pilot jetzt" | "Nächster Ausbau" | "Spätere Plattform" | "Ideenpool";

const moduleScopeById: Record<string, { label: ScopeLabel; note: string }> = {
  school: { label: "Pilot jetzt", note: "Kern einer ersten Hofrunde" },
  content: { label: "Pilot jetzt", note: "Voraussetzung für den Pilot" },
  celebration: { label: "Nächster Ausbau", note: "buchbares Partnerpaket nach der Route" },
  culinary: { label: "Nächster Ausbau", note: "Schmankerl-Route als Partnerpaket" },
  avatar: { label: "Nächster Ausbau", note: "Fotomodul nach Datenschutzklärung" },
  herbs: { label: "Spätere Plattform", note: "fachlich freigegebener Themenlayer" },
  family: { label: "Spätere Plattform", note: "weiterer Zielgruppenmodus" },
  pensioners: { label: "Spätere Plattform", note: "barrierearmer Zielgruppenmodus" },
  chroniclers: { label: "Spätere Plattform", note: "Wissenssicherung nach Pilotstart" },
  maintenance: { label: "Spätere Plattform", note: "interner Betriebsmodus" },
  inspiration: { label: "Spätere Plattform", note: "Premium-/Beratungsformat" },
  history: { label: "Spätere Plattform", note: "vertiefender Kulturmodus" },
};

const futureScopeById: Record<string, { label: ScopeLabel; note: string }> = {
  geocaching: { label: "Spätere Plattform", note: "saisonale Hofspur nach Pilot" },
  "creator-walk": { label: "Nächster Ausbau", note: "Fotospot-/Creator-Format" },
  "xr-time-travel": { label: "Ideenpool", note: "erst nach Contentfundament" },
  "history-salon": { label: "Spätere Plattform", note: "vertiefendes Themenformat" },
  "heritage-consulting": { label: "Spätere Plattform", note: "Premium-Beratung prüfen" },
  "data-check": { label: "Pilot jetzt", note: "Grundlage für Freigaben" },
  "bus-groups": { label: "Nächster Ausbau", note: "Rattenberg-/Busbrücke" },
  "motorcycle-stop": { label: "Nächster Ausbau", note: "Partnerformat Tourismus" },
  "oldtimer-rally": { label: "Ideenpool", note: "stärkeres Eventformat" },
  "tracht-show": { label: "Nächster Ausbau", note: "jährliches Partnerformat" },
  fpv: { label: "Ideenpool", note: "Sonderformat mit Sicherheitsregeln" },
  larp: { label: "Ideenpool", note: "erst nach Quellen- und Betriebsregeln" },
  "medieval-fest": { label: "Ideenpool", note: "großes Kulturformat" },
  "archery-story": { label: "Ideenpool", note: "Outdoor-Sonderformat" },
  "craft-challenge": { label: "Spätere Plattform", note: "interne Werkstattlogik" },
};

const scopeStyleByLabel: Record<ScopeLabel, string> = {
  "Pilot jetzt": "pilot",
  "Nächster Ausbau": "next",
  "Spätere Plattform": "platform",
  Ideenpool: "idea",
};

const technicalNotes = [
  {
    title: "Start als Webapp/PWA",
    text: "Schnell testbar auf Smartphones, QR-fähig, später mit Capacitor als App verpackbar.",
  },
  {
    title: "Eine Wissensbasis",
    text: "Hof, Gebäude, Raum, Objekt, Quelle, Medium, Freigabe, Zielgruppe und Status werden einmal erfasst und mehrfach genutzt.",
  },
  {
    title: "KI nur auf freigegebenem Wissen",
    text: "Missionen, Rollen und Geschichten können variieren, sollen aber auf geprüften Inhalten und klaren Grenzen beruhen.",
  },
  {
    title: "Datenschutz und Betrieb",
    text: "Foto-Upload, Kindergruppen, Souvenirverkauf und interne Aufgaben brauchen einfache Rollenrechte, Löschlogik und Zustimmungstexte.",
  },
];

const generatedMissionVisuals: Record<string, string> = {
  "winter-system-school": "pitch-images/schulklassenmission.png",
  "flour-family": "pitch-images/role-muellerkind.png",
  "hunter-forest": "pitch-images/waldspur-mit-boegen.png",
  "wood-water": "pitch-images/hack-am-hof-teilnehmerinnen.png",
  "mining-rattenberg": "pitch-images/rattenberg-busbruecke.png",
  "festival-stube": "pitch-images/kirchtag.png",
  "repair-craft": "pitch-images/werkstatt-am-hof.png",
  "quiet-memory": "pitch-images/pensionistenmodus.png",
  "house-inspiration": "pitch-images/bauernhaus-inspiration.png",
};

const prototypeVisuals: Record<string, string> = {
  mission: "pitch-images/schulklassenmission.png",
  timeslip: "pitch-images/living-history-am-hof.png",
  photo: "pitch-images/feier-fotomodul.png",
  guide: "pitch-images/contentmodell-guide-studio.png",
};

function PhonePrototype() {
  // Merkt sich, welcher Handy-Screen aktiv ist: Mission, Zeitreise, Foto oder Guide.
  const [activePrototypeId, setActivePrototypeId] = useState(prototypeScreens[0].id);
  const [missionAudience, setMissionAudience] = useState("Schulklasse");
  const [missionDuration, setMissionDuration] = useState("45-60 Minuten");
  const [missionSeed, setMissionSeed] = useState(0);
  const activePrototype = useMemo(
    () => prototypeScreens.find((screen) => screen.id === activePrototypeId) ?? prototypeScreens[0],
    [activePrototypeId],
  );
  const generatedMission = useMemo(() => {
    const scored = generatedMissionCatalog.map((mission, index) => {
      let score = index;
      if (missionAudience !== "Alle" && mission.audience === missionAudience) score -= 20;
      if (missionDuration === "kurz" && mission.duration.includes("30")) score -= 8;
      if (missionDuration === "mittel" && (mission.duration.includes("45") || mission.duration.includes("55"))) score -= 8;
      if (missionDuration === "lang" && (mission.duration.includes("60") || mission.duration.includes("75"))) score -= 8;
      return { mission, score: score + ((missionSeed + index * 3) % generatedMissionCatalog.length) };
    });
    return [...scored].sort((a, b) => a.score - b.score)[missionSeed % Math.min(scored.length, 4)].mission;
  }, [missionAudience, missionDuration, missionSeed]);

  const PhoneIcon =
    activePrototype.id === "photo"
      ? Camera
      : activePrototype.id === "timeslip"
        ? MessageCircle
        : activePrototype.id === "guide"
          ? Upload
          : Sparkles;
  const activePrototypeImage = prototypeVisuals[activePrototype.id] ?? prototypeVisuals.mission;

  return (
    <section id="prototype" className="iphone-prototype-section">
      <div className="section-heading">
        <div>
          <div className="section-kicker">So könnte der Besuch aussehen</div>
          <h2>Ein Smartphone öffnet passende Erlebnisse vor Ort.</h2>
        </div>
        <p>
          Die Besucher:innen wählen, was zu ihnen passt: Gruppenmission, Zeitreise, Foto-Erinnerung
          oder vertiefende Geschichten. Das Museum steuert die Inhalte.
        </p>
      </div>

      <div className="iphone-prototype-layout">
        <div className="prototype-explainer">
          <Smartphone size={28} />
          <h3>So könnte sich ein Besuch künftig anfühlen.</h3>
          <p>
            Nicht jede Nutzung ist eine Mission. Dasselbe Smartphone kann am Hof führen, erzählen,
            fotografieren oder Wissen für Guides nutzbar machen.
          </p>
          <div className="prototype-mode-grid" aria-label="Erlebnisarten">
            {prototypeScreens.map((screen) => {
              const ModeIcon =
                screen.id === "photo"
                  ? Camera
                  : screen.id === "timeslip"
                    ? MessageCircle
                    : screen.id === "guide"
                      ? Upload
                      : Sparkles;
              return (
                <button
                  key={screen.id}
                  className={activePrototype.id === screen.id ? "prototype-mode-card prototype-mode-card--active" : "prototype-mode-card"}
                  type="button"
                  aria-pressed={activePrototype.id === screen.id}
                  onClick={() => setActivePrototypeId(screen.id)}
                >
                  <ModeIcon size={20} />
                  <span>{screen.label}</span>
                  <strong>{screen.title}</strong>
                </button>
              );
            })}
          </div>
        </div>

        <div className="phone-frame" aria-label="Beispielansicht am Smartphone">
          <div className="phone-notch" aria-hidden="true" />
          <div className="phone-screen">
            <div className="phone-hero">
              <div className="phone-status">
                <span>Hack am Hof</span>
                <span>09:41</span>
              </div>
              <div className="phone-mode-tabs" aria-label="Erlebnisarten">
                {prototypeScreens.map((screen) => (
                  <button
                    key={screen.id}
                    className={activePrototype.id === screen.id ? "phone-mode-tab phone-mode-tab--active" : "phone-mode-tab"}
                    onClick={() => setActivePrototypeId(screen.id)}
                  >
                    {screen.label}
                  </button>
                ))}
              </div>
            </div>

            <div key={activePrototype.id} className={`phone-content phone-content--${activePrototype.id}`}>
              <article className="phone-experience-card">
                <div className="phone-experience-visual">
                  <img src={publicAsset(activePrototypeImage)} alt="" />
                  <div className="phone-experience-badge">
                    <PhoneIcon size={18} />
                    <span>{activePrototype.label}</span>
                  </div>
                </div>
                <div className="phone-experience-copy">
                  <span>{activePrototype.source}</span>
                  <h3>{activePrototype.title}</h3>
                  <p>{activePrototype.subtitle}</p>
                  <button type="button">
                    {activePrototype.action}
                    <ChevronRight size={16} />
                  </button>
                </div>
              </article>

              {activePrototype.id === "mission" ? (
                <article className="phone-audio-card" aria-label="Bergbauer-Hinweis zum Feuer">
                  <div className="phone-audio-card__header">
                    <span>
                      <Volume2 size={17} />
                      Alter Bergbauer
                    </span>
                    <strong>Bergbauer-Hinweis zum Feuer</strong>
                  </div>
                  <p>Ohne Glut verzögern sich Essen, Wärme und Arbeit. Prüft zuerst, was der Hof am Morgen wirklich braucht.</p>
                  <div className="phone-audio-card__player" aria-hidden="true">
                    <span>
                      <Pause size={15} />
                    </span>
                    <div>
                      <i />
                    </div>
                    <small>0:18</small>
                    <span>
                      <SkipForward size={16} />
                    </span>
                  </div>
                </article>
              ) : null}

              <div className="phone-chip-row">
                {activePrototype.chips.map((chip) => (
                  <span key={chip}>{chip}</span>
                ))}
              </div>

              <p className="phone-insight">{activePrototype.insight}</p>
            </div>

            <div className="phone-bottom-nav" aria-hidden="true">
              <span />
              <span />
              <span />
            </div>
          </div>
        </div>
      </div>

      <div className="prototype-role-panel">
        <div className="route-lab-intro">
          <div className="section-kicker">Beispiel Erlebnisroute</div>
          <h3>Aus Wissen entstehen viele spielbare Missionen.</h3>
          <p>
            Aus einem geprüften Wissensbestand werden konkrete Erlebnisrouten: mit Rollen,
            Stationen, Aufgaben, Dauer und Abschlussfrage. Die KI liefert Varianten, das Museum
            behält Quelle, Tonalität und Freigabe.
          </p>
          <div className="route-proof-card">
            <Sparkles size={20} />
            <strong>Guide Studio statt freier KI</strong>
            <span>Fakten, Quellen, Bilder und Anekdoten werden kuratiert. Daraus entstehen wiederverwendbare Routenbausteine.</span>
          </div>
        </div>

        <details className="route-support-details">
          <summary>
            <span>Wie der Generator arbeitet</span>
            <strong>Systemlogik anzeigen</strong>
          </summary>
          <div className="route-system-strip">
            <article>
              <BookOpen size={19} />
              <strong>Wissen</strong>
              <span>Objekte, Gebäude, Geschichten, Quellen und Freigaben.</span>
            </article>
            <article>
              <Users size={19} />
              <strong>Rollen</strong>
              <span>Jede Person bekommt eine Aufgabe und einen Blickwinkel.</span>
            </article>
            <article>
              <Route size={19} />
              <strong>Route</strong>
              <span>Dauer, Stationen, Wetter, Gruppe und Lernziel werden kombiniert.</span>
            </article>
          </div>
          <div className="replay-note">
            <Clock size={20} />
            <p>
              Dadurch steigt der Wiederspiel- und Wiederbesuchswert: dieselbe Gruppe, Familie oder
              Gruppe kann beim nächsten Besuch ein anderes Entdeckungserlebnis bekommen, ohne dass das
              Museum jedes Mal alles neu schreiben muss.
            </p>
          </div>
        </details>

        <div className="mission-generator-demo">
          <div className="mission-generator-controls">
            <div>
              <div className="section-kicker">Erlebnisgenerator</div>
              <h4>Auswahl ändern, passende Route sehen.</h4>
              <p>Der Generator zeigt, wie aus demselben Material andere Rundgänge entstehen.</p>
            </div>
            <label>
              Zielgruppe
              <select value={missionAudience} onChange={(event) => setMissionAudience(event.target.value)}>
                <option>Schulklasse</option>
                <option>Familien</option>
                <option>Jugendgruppe</option>
                <option>Mehrgenerationengruppe</option>
                <option>Pensionisten</option>
                <option>Hausbesitzer:innen</option>
                <option>Alle</option>
              </select>
            </label>
            <label>
              Zeit
              <select value={missionDuration} onChange={(event) => setMissionDuration(event.target.value)}>
                <option value="kurz">30-40 Minuten</option>
                <option value="mittel">45-60 Minuten</option>
                <option value="lang">60-75 Minuten</option>
              </select>
            </label>
            <button type="button" onClick={() => setMissionSeed((value) => value + 1)}>
              Route generieren
              <Sparkles size={16} />
            </button>
          </div>

          <article className="generated-mission-card">
            <img src={publicAsset(generatedMissionVisuals[generatedMission.id] ?? "pitch-images/hack-am-hof-teilnehmerinnen.png")} alt="" />
            <div className="generated-mission-content">
              <span>{generatedMission.audience} · {generatedMission.duration}</span>
              <h4>{generatedMission.title}</h4>
              <p>{generatedMission.setup}</p>
              <div className="generated-mission-columns">
                <div>
                  <strong>Rollen</strong>
                  {generatedMission.roles.map((role) => (
                    <em key={role}>{role}</em>
                  ))}
                </div>
                <div>
                  <strong>Stationen</strong>
                  {generatedMission.stations.map((station) => (
                    <em key={station}>{station}</em>
                  ))}
                </div>
              </div>
              <div className="generated-mission-learning">
                <strong>Lernziel</strong>
                <p>{generatedMission.knowledge}</p>
              </div>
              <details className="generated-mission-learning generated-mission-detail">
                <summary>Abschlussfrage anzeigen</summary>
                <p>{generatedMission.finale}</p>
              </details>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}

function ContextStory() {
  return (
    <section id="context" className="context-section">
      <div className="section-heading section-heading--stacked">
        <div>
          <div className="section-kicker">Ausgangslage</div>
            <h2>Warum daraus jetzt ein echtes Museumsprojekt werden kann.</h2>
        </div>
        <p>
          Zuerst braucht es einen gemeinsamen Blick auf Ort, Problem, vorhandene Ideen und die
          nächsten sinnvollen Schritte.
        </p>
      </div>

      <div className="context-visual-row" aria-label="Projektbilder zur Ausgangslage">
        {contextVisuals.map((item) => (
          <figure key={item.title}>
            <img src={publicAsset(item.image)} alt="" loading="lazy" />
            <figcaption>
              <strong>{item.title}</strong>
              <span>{item.text}</span>
            </figcaption>
          </figure>
        ))}
      </div>

      <div className="idea-notes-panel" aria-label="Erste handschriftliche Projektideen">
        <div className="idea-notes-panel__copy">
          <div className="section-kicker">Erste Ideen am Tisch</div>
          <h3>Die Plattform beginnt nicht im Code, sondern mit Zetteln.</h3>
          <p>
            Dieses Foto zeigt den frühen Arbeitsstand: lose Begriffe, erste Richtungen und
            mögliche Spielmechaniken. Genau daraus entsteht der nächste Schritt: sortieren,
            bewerten, zu einer Route verdichten und erst danach bauen.
          </p>
          <ul>
            <li>Schulklasse, Schatzjagd und Rätsel als naheliegender Pilot.</li>
            <li>Physische Hinweise, digitale Hinweise und Story als gemeinsamer Ablauf.</li>
            <li>Tradition, Geschichte und Gruppenlogik als Material für spätere Module.</li>
          </ul>
        </div>
        <div className="idea-notes-panel__photos">
          {ideaNoteVisuals.map((item) => (
            <figure key={item.title}>
              <img src={publicAsset(item.image)} alt="" loading="lazy" />
              <figcaption>
                <strong>{item.title}</strong>
                <span>{item.text}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>

      <div className="context-grid">
        {contextBlocks.map((block) => (
          <article key={block.id}>
            <h3>{block.title}</h3>
            {block.paragraphs.slice(0, 2).map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
            {block.paragraphs.length > 2 ? (
              <details className="context-extra-details">
                <summary>Weitere Einordnung anzeigen</summary>
                {block.paragraphs.slice(2).map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </details>
            ) : null}
            {block.links ? (
              <div className="context-card-links">
                {block.links.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    target={link.href.startsWith("#") ? undefined : "_blank"}
                    rel={link.href.startsWith("#") ? undefined : "noreferrer"}
                  >
                    {link.label} <ExternalLink size={14} />
                  </a>
                ))}
              </div>
            ) : null}
          </article>
        ))}
      </div>
    </section>
  );
}

function DecisionAndRoadmapSection() {
  const ideenhofReference = buildathonReferences.find((reference) => reference.id === "T01");

  return (
    <section id="decision" className="decision-section">
      <div className="section-heading">
        <div>
          <div className="section-kicker">Entscheidungsvorschlag</div>
          <h2>Am Ende soll es eine klare Entscheidung geben, ob ein Pilotprojekt umgesetzt wird.</h2>
        </div>
        <p>
          Nicht über eine fertige App entscheiden, sondern über den nächsten belastbaren Schritt:
          echte Route, echtes Wissen und erste Besucherpakete.
        </p>
      </div>

      <div className="decision-cards">
        {pitchGoalCards.map((card) => {
          const Icon = card.id === "decision" ? Target : card.id === "value" ? Route : Share2;
          return (
            <article key={card.id}>
              <Icon size={24} />
              <h3>{card.title}</h3>
              <p>{card.text}</p>
            </article>
          );
        })}
      </div>

      <div className="decision-media-row" aria-label="Pilotmaterial">
        {decisionMedia.map((item, index) => (
          <figure key={item.title} className={index === 0 ? "decision-media-card decision-media-card--large" : "decision-media-card"}>
            <img src={publicAsset(item.image)} alt="" loading="lazy" />
            <figcaption>
              <strong>{item.title}</strong>
              <span>{item.text}</span>
            </figcaption>
          </figure>
        ))}
      </div>

      <div className="pilot-decision-box">
        <div className="pilot-decision-box__intro">
          <div className="section-kicker">Beschlussvorschlag</div>
          <h3>Freigabe für einen kontrollierbaren Museumspilot.</h3>
          <p>
            Der Vorstand entscheidet nicht über die ganze Plattform, sondern über einen testbaren
            nächsten Schritt mit echtem Museumswissen, klarer Route und messbarem Feedback.
          </p>
          <ul>
            {pilotBoundaries.map((boundary) => (
              <li key={boundary}>
                <ShieldCheck size={17} />
                <span>{boundary}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="pilot-decision-box__grid">
          {pilotDecisionScope.map((item) => (
            <article key={item.label}>
              <span>{item.label}</span>
              <strong>{item.title}</strong>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
      </div>

      <details className="decision-details">
        <summary>
          <span>Beschlussdetails</span>
          <strong>Erfolg, Risiken, Ablauf und Ideenbewertung anzeigen</strong>
        </summary>

        <div className="decision-section-break">
          <div className="section-kicker">Pilot absichern</div>
          <h3>Erfolg, Risiko und Ablauf werden vor dem Start getrennt geprüft.</h3>
        </div>

        <div className="pilot-proof-grid">
          <article>
            <div className="section-kicker">Erfolgskriterien</div>
            <h3>Woran der Pilot gemessen wird.</h3>
            <figure className="pilot-proof-visual">
              <img src={publicAsset("pitch-images/hofspur-im-sommer.png")} alt="" loading="lazy" />
              <figcaption>Testen mit echter Hofsituation statt abstrakter App-Idee.</figcaption>
            </figure>
            <div>
              {pilotSuccessMetrics.map((metric) => (
                <section key={metric.label}>
                  <span>{metric.label}</span>
                  <p>{metric.value}</p>
                </section>
              ))}
            </div>
          </article>
          <article>
            <div className="section-kicker">Risiken kontrollieren</div>
            <h3>Was vor dem Start sauber begrenzt wird.</h3>
            <figure className="pilot-proof-visual">
              <img src={publicAsset("pitch-images/contentmodell-guide-studio.png")} alt="" loading="lazy" />
              <figcaption>Wissen, Freigaben und Betrieb werden zuerst sortiert.</figcaption>
            </figure>
            <div>
              {pilotRisks.map((risk) => (
                <section key={risk.label}>
                  <span>{risk.label}</span>
                  <p>{risk.value}</p>
                </section>
              ))}
            </div>
          </article>
        </div>

        <div className="decision-workflow">
          <article className="decision-agenda">
            <div className="section-kicker">60 Minuten Pitchlogik</div>
            <h3>Vorstand sicher zur Entscheidung führen.</h3>
            <figure className="decision-flow-visual">
              <img src={publicAsset("pitch-images/tirol-verstehen.png")} alt="" loading="lazy" />
              <figcaption>Erst Ort und Nutzen klären, dann den nächsten belastbaren Schritt entscheiden.</figcaption>
            </figure>
            <div>
              {boardPitchAgenda.map((item) => (
                <section key={item.time}>
                  <span>{item.time}</span>
                  <strong>{item.title}</strong>
                  <p>{item.text}</p>
                </section>
              ))}
            </div>
          </article>

          <article className="decision-roadmap">
            <div className="section-kicker">Nächste Schritte</div>
            <h3>Schnell zeigen. Kontrolliert ausbauen.</h3>
            <figure className="decision-flow-visual">
              <img src={publicAsset("pitch-images/werkstatt-am-hof.png")} alt="" loading="lazy" />
              <figcaption>Aus einem kleinen Pilot wird nur dann mehr, wenn Ablauf und Betrieb tragen.</figcaption>
            </figure>
            <div>
              {pitchRoadmap.map((item) => (
                <section key={item.phase}>
                  <span>{item.phase}</span>
                  <strong>{item.title}</strong>
                  <p>{item.description}</p>
                </section>
              ))}
            </div>
          </article>
        </div>

        <div className="decision-support">
          <article className="decision-thesis-card decision-thesis-card--dark">
            <BadgeEuro size={24} />
            <h3>Kernthese</h3>
            <p>
              Dem Museum fehlt nicht einfach eine App, sondern ein flexibles digitales
              Missionssystem, das bestehende Inhalte, Zielgruppen und Betriebsaufgaben verbindet.
            </p>
          </article>
          <article className="decision-thesis-card">
            <Globe2 size={24} />
            <h3>Kontext & Credits</h3>
            <p>
              Die Ideen bauen auf dem Hack am Hof Buildathon auf. AI Collective, KINN und das Museum
              liefern den Innovationskontext, das Museum entscheidet über Pilot und Inhalte.
            </p>
            <div className="credit-links">
              <a href="https://aicollective.at" target="_blank" rel="noreferrer">
                AI Collective <ExternalLink size={14} />
              </a>
              <a href="https://kinn.at" target="_blank" rel="noreferrer">
                KINN <ExternalLink size={14} />
              </a>
              <a href="https://aicollective.at/hack-am-hof" target="_blank" rel="noreferrer">
                Hack am Hof <ExternalLink size={14} />
              </a>
              <a href="https://aicollective.at/api/share?e=hack-am-hof" target="_blank" rel="noreferrer">
                {buildathonReferences.length} Prototypen Übersicht <ExternalLink size={14} />
              </a>
              <a href="#buildathon-prototypes">
                Prototypen auf dieser Seite <ChevronRight size={14} />
              </a>
            </div>
          </article>
          <article className="decision-thesis-card">
            <CalendarDays size={24} />
            <h3>Der nächste Schritt ist vorbereitet.</h3>
            <p>
              Für den Start reichen eine erste Route, ein Wissensworkshop und zwei bis drei
              Besucherangebote. Später kann daraus eine App und eine Plattform für weitere Orte
              entstehen.
            </p>
          </article>
        </div>

        <div className="idea-decision-panel">
        <div className="idea-decision-panel__intro">
          <div>
            <div className="section-kicker">Ideenbewertung</div>
            <h3>Gute Ideen werden sichtbar, aber nicht alle gleichzeitig gebaut.</h3>
            <p>
              Der Buildathlon-Prototyp Ideenhof zeigt eine passende Logik: Ideen sammeln,
              bewerten, sortieren und daraus kontrollierte nächste Schritte ableiten.
            </p>
          </div>
          {ideenhofReference ? (
            <a href={ideenhofReference.source} target="_blank" rel="noreferrer">
              Buildathlon-Projekt ansehen
              <ExternalLink size={14} />
            </a>
          ) : null}
        </div>

        <div className="idea-decision-panel__metrics" aria-label="Bewertungskriterien">
          {ideaDecisionMetrics.map((metric) => (
            <article key={metric.label}>
              <span>{metric.label}</span>
              <p>{metric.value}</p>
            </article>
          ))}
        </div>

        <div className="idea-score-list">
          {ideaDecisionRows.map((idea) => (
            <article key={idea.title}>
              <div className="idea-score-list__copy">
                <span>{idea.tag}</span>
                <strong>{idea.title}</strong>
                <p>{idea.text}</p>
              </div>
              <div className="idea-score-list__ideas" aria-label={`Ideen für ${idea.title}`}>
                {idea.ideas.map((item) => (
                  <span key={item}>{item}</span>
                ))}
              </div>
            </article>
          ))}
        </div>

        <div className="idea-decision-panel__footer">
          <strong>Beschlusslogik:</strong>
          <span>
            Der Vorstand gibt nicht eine Ideensammlung frei, sondern die bestbewertete nächste
            Teststufe. Alles andere bleibt dokumentiert und kann nach dem Pilot neu priorisiert
            werden.
          </span>
        </div>
      </div>

        <div className="pitch-track decision-track">
          <div>
            <div className="section-kicker">Einfach erklärbar</div>
            <h3>Fünf Schritte, die ohne Technikverständnis nachvollziehbar sind.</h3>
          </div>
          <ol className="pitch-steps">
            {pitchSteps.map((step, index) => (
              <li key={step}>
                <figure>
                  <img src={publicAsset(pitchStepVisuals[index]?.image ?? "pitch-images/hofspur-im-sommer.png")} alt="" loading="lazy" />
                  <figcaption>{pitchStepVisuals[index]?.label}</figcaption>
                </figure>
                <span>{index + 1}</span>
                <p>{step}</p>
              </li>
            ))}
          </ol>
        </div>

        <div className="ambassador-panel decision-ambassador">
          <div>
            <Globe2 size={26} />
            <h3>Besucher werden zu Ambassadors.</h3>
            <p>
              Der Foto- und Avatar-Teil ist nicht nur Spielerei. Er erzeugt erinnerbare Bilder, die
              Reisegruppen in ihren Ländern und Communities weitertragen.
            </p>
            <div className="ambassador-visual-strip" aria-label="Beispiele für Foto- und Besucherwirkung">
              {ambassadorVisuals.map((visual) => (
                <figure key={visual.label}>
                  <img src={publicAsset(visual.image)} alt="" loading="lazy" />
                  <figcaption>{visual.label}</figcaption>
                </figure>
              ))}
            </div>
          </div>
          <div className="ambassador-grid">
            {ambassadorLevers.map((lever) => (
              <article key={lever.title}>
                <span>{lever.title}</span>
                <p>{lever.text}</p>
              </article>
            ))}
          </div>
        </div>
      </details>
    </section>
  );
}

const futureFormatGroups = [
  {
    title: "Direkt mit der App kombinierbar",
    label: "App-nah",
    text: "Karte, QR-Codes, Rollen, Audio, Foto und KI-Bilder schaffen hier sofort Mehrwert.",
    ids: ["geocaching", "creator-walk", "xr-time-travel"],
  },
  {
    title: "Tourismus, Gruppen und Partner",
    label: "Partner",
    text: "Diese Formate brauchen vor allem Buchung, Anreise, Zeitfenster, Gastronomie und Partnerpakete.",
    ids: ["data-check", "bus-groups", "motorcycle-stop"],
  },
  {
    title: "Sonderformate fürs Höfemuseum",
    label: "Später prüfen",
    text: "Stärkere Eventideen, die bewusst dosiert werden sollten und klare Regeln brauchen.",
    ids: ["larp", "archery-story", "craft-challenge"],
  },
];

function FutureFormatCard({
  format,
  isActive,
  onOpen,
}: {
  format: FutureFormat;
  isActive: boolean;
  onOpen: () => void;
}) {
  const Icon = futureIcon(format.id);
  const visual = futureVisual(format.id);
  const scope = futureScopeById[format.id] ?? { label: "Ideenpool" as ScopeLabel, note: "später prüfen" };

  return (
    <button
      className={isActive ? "future-card future-card--active" : "future-card"}
      type="button"
      onClick={onOpen}
      aria-pressed={isActive}
    >
      <div
        className={`future-card__image event-photo ${visual.imageUrl ? "event-photo--real " : ""}event-photo--${format.id}`}
        role="img"
        aria-label={`${visual.photoTitle}: ${visual.photoSubtitle}`}
      >
        {visual.imageUrl ? <img src={visual.imageUrl} alt="" className="event-photo__img" loading="lazy" /> : null}
        <span>
          <Icon size={20} />
        </span>
        <strong>{visual.photoTitle}</strong>
        <em>{visual.photoSubtitle}</em>
      </div>
      <div className="future-icon" aria-hidden="true">
        <Icon size={22} />
      </div>
      <span className={`scope-badge scope-badge--${scopeStyleByLabel[scope.label]}`}>{scope.label}</span>
      <span>{format.stage}</span>
      <h3>{format.title}</h3>
      <p>{format.description}</p>
      <em className="scope-note">{scope.note}</em>
      <strong>Details öffnen</strong>
    </button>
  );
}

function FutureFormatGroups({
  activeId,
  onOpen,
}: {
  activeId: string;
  onOpen: (id: string) => void;
}) {
  const renderedIds = new Set(futureFormatGroups.flatMap((group) => group.ids));
  const fallbackFormats = futureFormats.filter((format) => !renderedIds.has(format.id));
  const groups = fallbackFormats.length
    ? [
        ...futureFormatGroups,
        {
          title: "Weitere Ideen",
          label: "Parkplatz",
          text: "Drei Beispiele aus dem Ideenspeicher. Der Rest bleibt bewusst nachrangig.",
          ids: fallbackFormats.slice(0, 3).map((format) => format.id),
        },
      ]
    : futureFormatGroups;

  return (
    <div className="future-format-groups">
      {groups.map((group, index) => {
        const formats = group.ids
          .map((id) => futureFormats.find((format) => format.id === id))
          .filter((format): format is FutureFormat => Boolean(format));

        return (
          <details className="future-group" key={group.title}>
            <summary className="future-group__heading">
              <div>
                <h3>{group.title}</h3>
                <p>{group.text}</p>
              </div>
              <div className="future-group__meta">
                <span>{group.label}</span>
                <strong>
                  Anzeigen
                  <ChevronRight size={17} aria-hidden="true" />
                </strong>
              </div>
            </summary>
            <div className="future-grid future-grid--interactive">
              {formats.map((format) => (
                <FutureFormatCard
                  key={format.id}
                  format={format}
                  isActive={activeId === format.id}
                  onOpen={() => onOpen(format.id)}
                />
              ))}
            </div>
          </details>
        );
      })}
    </div>
  );
}

function ProjectEstimateSection() {
  return (
    <section id="costs" className="estimate-section">
      <div className="section-heading">
        <div>
          <div className="section-kicker">Aufwand & Technik</div>
          <h2>Für die Entscheidung braucht es eine grobe Größenordnung.</h2>
        </div>
        <p>
          Die Werte sind bewusst als Korridor formuliert. Der kleinste sinnvolle Beschluss wäre
          kein Großprojekt, sondern ein sauber begrenzter Pilot mit echter Route und echtem Wissen.
          Es sind grobe KI-basierte Kostenschätzungen, damit der Vorstand eine erste Orientierung
          bekommt, wohin die Reise ungefähr gehen könnte.
        </p>
      </div>

      <div
        className="estimate-grid"
        role="region"
        aria-label="Kosten- und Aufwandskorridore"
        tabIndex={0}
      >
        <table>
          <thead>
            <tr>
              <th>Baustein</th>
              <th>Kosten</th>
              <th>Dauer</th>
              <th>Entscheidungsrelevanz</th>
            </tr>
          </thead>
          <tbody>
            {projectEstimates.map((item, index) => (
              <tr key={item.phase} className={index < 2 ? "is-pilot-cost" : undefined}>
                <th scope="row">{item.phase}</th>
                <td data-label="Kosten">{item.cost}</td>
                <td data-label="Dauer">{item.effort}</td>
                <td data-label="Entscheidungsrelevanz">{item.text}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="tech-notes">
        <div>
          <BadgeEuro size={22} />
          <h3>Wichtig für den Vorstand</h3>
          <p>
            Die Kosten hängen weniger am Bildschirmdesign als an Inhalt, Freigaben, Fotoprozess,
            Betrieb und der Frage, wie viele Module gleichzeitig pilotiert werden.
          </p>
        </div>
        <div className="tech-note-grid">
          {technicalNotes.map((note) => (
            <article key={note.title}>
              <strong>{note.title}</strong>
              <p>{note.text}</p>
            </article>
          ))}
        </div>
      </div>

      <div className="platform-scale-block">
        <div className="section-heading section-heading--compact">
          <div>
            <div className="section-kicker">Skalierung & Förderung</div>
            <h2>Das Konzept kann später auch anderen Orten nutzen.</h2>
          </div>
          <p>
            Genau das macht einen Pilot interessanter: Die Investition zahlt nicht nur auf eine
            Museums-App ein, sondern auf einen wiederverwendbaren Baukasten für Kulturorte, Events,
            Betriebe und Tourismuspartner.
          </p>
        </div>

        <div className="expansion-grid expansion-grid--costs">
          {expansionAreas.map((area) => {
            const Icon =
              area.id === "museums"
                ? Building2
                : area.id === "events"
                  ? CalendarDays
                  : area.id === "tours"
                    ? Factory
                    : Castle;
            return (
              <article key={area.id}>
                <Icon size={24} />
                <h3>{area.title}</h3>
                <p>{area.description}</p>
                <div>
                  {area.examples.map((example) => (
                    <span key={example}>{example}</span>
                  ))}
                </div>
              </article>
            );
          })}
        </div>

        <div className="white-label-note">
          <strong>Förderlogik:</strong>
          <p>
            Ein gemeinsamer technischer Kern könnte vom Höfemuseum aus starten und später als
            White-Label-Produkt, Gemeinschaftsinvestition oder regionale Infrastruktur für mehrere
            Partner weitergeführt werden.
          </p>
        </div>
      </div>
    </section>
  );
}

function BuildathonPrototypeSection() {
  // Podest und Gesamtübersicht sind getrennt: oben die drei Publikumssieger,
  // darunter alle zehn Teams in Tisch-Reihenfolge T01 bis T10.
  const podiumReferences = ["T09", "T10", "T08"]
    .map((id) => buildathonReferences.find((reference) => reference.id === id))
    .filter((reference): reference is (typeof buildathonReferences)[number] => Boolean(reference));
  const sortedReferences = [...buildathonReferences].sort(
    (first, second) => Number(first.id.slice(1)) - Number(second.id.slice(1)),
  );

  return (
    <section id="buildathon-prototypes" className="buildathon-section">
      <div className="section-heading">
        <div>
          <div className="section-kicker">Buildathon-Prototypen</div>
          <h2>Zehn schnelle Prototypen, ein gemeinsamer Baukasten.</h2>
        </div>
        <p>
          Dieser Pitch übernimmt nicht alles, sondern sortiert die stärksten Einzelideen in ein
          gemeinsames Museumsprojekt.
        </p>
      </div>

      <div className="buildathon-photo-panel">
        <figure>
          <img src={publicAsset("pitch-images/hack-am-hof-teilnehmerinnen.png")} alt="Stilisiertes Hack am Hof Gruppenmotiv ohne erkennbare Personen." />
        </figure>
        <div className="buildathon-ranking-card">
          <div className="buildathon-ranking-card__head">
            <div>
              <div className="section-kicker">Publikums-Ranking</div>
              <h3>Publikumssieger</h3>
            </div>
            <p>Die drei stärksten Signale: Spiel, Foto und Community.</p>
          </div>
          <div className="buildathon-podium" aria-label="Siegerpodest der drei Publikumsgewinner">
            {podiumReferences.map((reference) => {
              const winner = buildathonWinners[reference.id];
              return (
                <article key={reference.id} className={`buildathon-podium__place buildathon-podium__place--${winner.rank[0]}`}>
                  <span>{winner.rank}</span>
                  <strong>{reference.title}</strong>
                  <em>{winner.points}</em>
                  <b>{buildathonPillars[reference.id]}</b>
                </article>
              );
            })}
          </div>
          <p>Diese Bausteine werden als Priorität für den gemeinsamen Museumspilot übernommen.</p>
        </div>
      </div>

      <details className="buildathon-accordion">
        <summary>
          <span>Alle 10 Prototypen</span>
          <strong>
            Nach Tisch T01-T10 sortiert anzeigen
            <ChevronRight size={18} aria-hidden="true" />
          </strong>
        </summary>
        <div className="buildathon-table" role="list">
        {sortedReferences.map((reference) => {
          const winner = buildathonWinners[reference.id];
          return (
            <article key={reference.id} className={winner ? "buildathon-row buildathon-row--winner" : "buildathon-row"} role="listitem">
              <div className="buildathon-row__id">
                <span>{reference.id}</span>
                <b>{buildathonPillars[reference.id]}</b>
              </div>
              <div className="buildathon-row__main">
                <h3>{reference.title}</h3>
                <p>{reference.summary}</p>
              </div>
              <strong>{reference.takeaway}</strong>
              <div className="buildathon-row__meta">
                {winner ? <em>{winner.rank} · {winner.points}</em> : <em>nicht platziert</em>}
                <a href={reference.source} target="_blank" rel="noreferrer" aria-label={`${reference.title} öffnen`}>
                  Öffnen <ExternalLink size={14} />
                </a>
              </div>
            </article>
          );
        })}
        </div>
      </details>
    </section>
  );
}

function moduleIdeaIcon(id: string) {
  if (id === "school") return QrCode;
  if (id === "celebration") return Map;
  if (id === "culinary") return Utensils;
  if (id === "herbs") return Leaf;
  if (id === "family") return Users;
  if (id === "pensioners") return Clock;
  if (id === "chroniclers") return BookOpen;
  if (id === "maintenance") return ShieldCheck;
  if (id === "avatar") return Brain;
  if (id === "inspiration") return Home;
  if (id === "history") return Landmark;
  return Database;
}

const moduleIdeaPhaseGroups = [
  {
    phase: "Pilot",
    title: "Grundlage und erste Hofrunde",
    text: "Zuerst braucht es gesichertes Wissen und eine echte Hofrunde für eine reale Besuchergruppe.",
    ideaIds: ["content", "school"],
  },
  {
    phase: "Phase 1",
    title: "Erste buchbare Erweiterungen",
    text: "Formate, die auf derselben Route, denselben Fotos oder denselben Hofgeschichten aufbauen.",
    ideaIds: ["avatar", "celebration", "culinary"],
  },
  {
    phase: "Phase 2",
    title: "Zielgruppen- und Wissenslayer",
    text: "Zusätzliche Modi für Besuchergruppen, die später denselben Datenkern nutzen.",
    ideaIds: ["family", "pensioners", "chroniclers", "history", "herbs"],
  },
  {
    phase: "Phase 3",
    title: "Betrieb und Plattformnutzen",
    text: "Interne Nutzung und Premium-Formate, sobald Inhalte, Rechte und Prozesse tragfähig sind.",
    ideaIds: ["maintenance", "inspiration"],
  },
];

const modulePitchDetails: Record<string, {
  visualClass: string;
  imageUrl: string;
  sceneTitle: string;
  sceneSubtitle: string;
  campaign: string;
  museumBenefit: string;
  rhythm: string;
  nextStep: string;
  imagePrompt: string;
}> = {
  school: {
    visualClass: "geocaching",
    imageUrl: publicAsset("pitch-images/schulklassenmission.png"),
    sceneTitle: "Mission am Hof",
    sceneSubtitle: "Kinder lösen Geschichte gemeinsam",
    campaign: "Pilotpaket für eine erste Besuchergruppe: QR-Start, Rollen, vier Stationen, Abschlussfrage und Begleitblatt.",
    museumBenefit: "Planbarer Bildungsbesuch, klare Lernziele, wiederverwendbare Route und ein einfacher Einstieg in Förder- oder Partnergespräche.",
    rhythm: "Dauerhaft buchbar, zuerst als kontrollierter Pilot mit wenigen Testgruppen.",
    nextStep: "Eine Route auswählen, Stationstexte prüfen und mit echten Guides einmal durchspielen.",
    imagePrompt: "Photorealistic documentary image of an Austrian school class, ages 10-13, exploring a Tyrolean open-air farmhouse museum in Kramsach, children in small groups holding a paper Hofrunde and one smartphone, a museum guide pointing at a wooden farmhouse, warm daylight, authentic alpine rural setting, respectful educational mood, no readable text, no logos.",
  },
  celebration: {
    visualClass: "creator-walk",
    imageUrl: publicAsset("pitch-images/trauung-taufe.png"),
    sceneTitle: "Feiern am echten Ort",
    sceneSubtitle: "Trauung, Taufe, Foto, Erinnerung",
    campaign: "Sanftes Feierpaket mit freier Trauung, Taufe, Schlechtwetterplan, Foto-Route und hochwertigem Erinnerungsprodukt.",
    museumBenefit: "Neue Buchungsanlässe, Zusatzumsatz über Foto/Print/Souvenir und starke Weiterempfehlung durch Familien und Gäste.",
    rhythm: "Saisonale Termine, mit klaren Zeitfenstern und Museumsbetrieb als Grenze.",
    nextStep: "Drei erlaubte Orte, zwei Fotospots und einen Ablauf mit Kasse/Gasthaus skizzieren.",
    imagePrompt: "Photorealistic wedding couple and small family group at a historic Tyrolean farmhouse museum, rustic wooden farm buildings, meadow, subtle floral arch, natural elegant clothing, quiet ceremonial atmosphere, alpine daylight, tasteful documentary photography, no kitsch, no readable text, no logos.",
  },
  culinary: {
    visualClass: "medieval-fest",
    imageUrl: publicAsset("pitch-images/tiroler-schmankerl-route.png"),
    sceneTitle: "Schmankerl-Rundgang",
    sceneSubtitle: "Essen erzählt Hofgeschichte",
    campaign: "Tiroler-Schmankerl-Route: kleine Probierstationen, Rezeptpass, Prügeltorte, Audio-Erinnerungen und Abschluss im Gasthaus.",
    museumBenefit: "Mehr Aufenthaltsdauer, bessere Besucherlenkung, Gastronomie-Anbindung und ein wiederkehrender Anlass neben dem Kirchtag.",
    rhythm: "Als Event 1 bis 3 Mal pro Jahr, einzelne Stationen auch dauerhaft möglich.",
    nextStep: "Vier Gerichte mit vier Höfen verbinden und eine erste Rezept-/Audio-Schablone bauen.",
    imagePrompt: "Photorealistic image of a calm Tyrolean food route inside an open-air farmhouse museum, visitors tasting small portions of Kasspatzln, Kiachl and Prügeltorte near wooden farmhouses, local musicians in the background, rustic tables, autumn Kirchtag mood, warm natural light, authentic regional cuisine, no readable text, no logos.",
  },
  herbs: {
    visualClass: "geocaching",
    imageUrl: publicAsset("pitch-images/kraeuterpfad.png"),
    sceneTitle: "Kräuter sicher erleben",
    sceneSubtitle: "sehen, riechen, lernen",
    campaign: "Saisonaler Kräuterpfad mit Schaupunkten, Warnhinweisen, Workshopfenstern und geprüften Guide-Notizen.",
    museumBenefit: "Natur- und Gesundheitsinteresse wird nutzbar, ohne unkontrolliertes Sammeln oder falsche Versprechen.",
    rhythm: "Frühjahr bis Herbst, abhängig von Fachfreigabe und Saison.",
    nextStep: "Drei sichere Schaupunkte markieren und klare Regeln für Sammeln, Berühren und Erklären definieren.",
    imagePrompt: "Photorealistic herb workshop at a Tyrolean farmhouse museum garden, a guide showing alpine herbs to families and adults, wooden farmhouse in the background, small baskets and labelled but unreadable cards, no picking from wild areas, educational and safe mood, spring daylight, no readable text, no logos.",
  },
  family: {
    visualClass: "geocaching",
    imageUrl: publicAsset("pitch-images/familienmodus.png"),
    sceneTitle: "Kurze Familienrunde",
    sceneSubtitle: "wenig Text, viel Entdecken",
    campaign: "Familien erhalten eine kurze Route mit Pausen, Abzeichen, einfachen Aufgaben und optionalem Hof-Avatar.",
    museumBenefit: "Mehr Zufriedenheit bei Familien, weniger Überforderung und ein guter Wiederbesuchsgrund durch wechselnde Mini-Missionen.",
    rhythm: "Dauerhaft, mit saisonal wechselnden Aufgaben.",
    nextStep: "Eine 30-Minuten-Runde mit drei Stationen und einer einfachen Belohnung definieren.",
    imagePrompt: "Photorealistic family visit at a Tyrolean open-air farmhouse museum, parents and children discovering a wooden barn, child holding a stamp card, grandparents nearby, relaxed pace, benches and alpine landscape, warm summer light, authentic documentary tourism photo, no readable text, no logos.",
  },
  pensioners: {
    visualClass: "history-salon",
    imageUrl: publicAsset("pitch-images/pensionistenmodus.png"),
    sceneTitle: "Ruhige Erinnerung",
    sceneSubtitle: "Audio, Sitzpunkte, Tempo",
    campaign: "Entschleunigte Komfort-Route mit großer Schrift, kurzen Audios, Sitzpunkten und Erinnerungsfragen.",
    museumBenefit: "Ältere Gäste und Gruppenreisen bekommen eine passende Form, ohne lange Texte oder steile Wege.",
    rhythm: "Dauerhaft als Modus, zusätzlich als geführter Gruppen-Slot.",
    nextStep: "Sitzpunkte, Lesbarkeit und Audio-Längen mit einer Testgruppe prüfen.",
    imagePrompt: "Photorealistic group of senior visitors at a Tyrolean farmhouse museum, seated on a wooden bench near a historic farmhouse, listening to an audio guide and a museum guide, gentle pace, accessible path, calm alpine afternoon light, respectful warm documentary style, no readable text, no logos.",
  },
  chroniclers: {
    visualClass: "history-salon",
    imageUrl: publicAsset("pitch-images/chroniker-modus.png"),
    sceneTitle: "Wissen sichern",
    sceneSubtitle: "Audio und Quellen am Ort",
    campaign: "Chroniker- und Guide-Sammeltage: Geschichten einsprechen, Fotos zuordnen, Quellen markieren und Freigaben setzen.",
    museumBenefit: "Wissen bleibt nicht nur in Köpfen. Es wird später für Missionen, Audiopunkte, Events und interne Dokumentation nutzbar.",
    rhythm: "Quartalsweise Sammeltage, laufend im Guide Studio.",
    nextStep: "Erstes Set aus zehn Geschichten, fünf Dokumenten und fünf Hofprofilen erfassen.",
    imagePrompt: "Photorealistic museum guide and local chronicler recording oral history inside a rustic Tyrolean farmhouse room, old wooden table with archival photos and documents, handheld audio recorder, warm window light, authentic cultural documentation mood, no readable text, no logos.",
  },
  maintenance: {
    visualClass: "craft-challenge",
    imageUrl: publicAsset("pitch-images/interner-betrieb.png"),
    sceneTitle: "Betrieb am Gelände",
    sceneSubtitle: "Aufgaben dort erfassen, wo sie entstehen",
    campaign: "Interner Modus für Reparaturen, QR-Codes, Wegkanten, Fotos, Prioritäten und Status.",
    museumBenefit: "Weniger verlorene Zettel, bessere Priorisierung und ein direkter Bezug zwischen Objekt, Ort und Aufgabe.",
    rhythm: "Dauerhaft intern, besonders vor Saisonstart und nach Events.",
    nextStep: "Fünf typische Aufgabenarten definieren und mit Foto, Priorität und Zuständigkeit testen.",
    imagePrompt: "Photorealistic maintenance team at a Tyrolean open-air farmhouse museum, inspecting a wooden fence and path edge with a tablet, historic farmhouse in background, practical workwear, early morning before visitors arrive, organized museum operations mood, no readable text, no logos.",
  },
  avatar: {
    visualClass: "creator-walk",
    imageUrl: publicAsset("pitch-images/ki-charaktere-souvenir.png"),
    sceneTitle: "Persönliche Erinnerung",
    sceneSubtitle: "Foto wird Hofmotiv",
    campaign: "Besucher wählen Hofkulisse und Rolle. Ergebnis: digitales Bild, Druck, Holzlaser, Glasgravur oder antiker Holzrahmen.",
    museumBenefit: "Zusatzumsatz, Social-Reichweite und starke Erinnerungsbilder für Reisende, Familien und Feiern.",
    rhythm: "Dauerhaft als Fotomodul, besonders stark bei Events und Gruppen.",
    nextStep: "Drei Beispielstile, Kassenprozess und Datenschutztext für den Pilot festlegen.",
    imagePrompt: "Photorealistic souvenir counter at a Tyrolean farmhouse museum showing a visitor's historical-style portrait printed in an antique wooden frame, optional wood engraving and glass engraving samples, warm rustic materials, tasteful premium souvenir display, no readable text, no logos.",
  },
  content: {
    visualClass: "data-check",
    imageUrl: publicAsset("pitch-images/contentmodell-guide-studio.png"),
    sceneTitle: "Eine Wissensbasis",
    sceneSubtitle: "einmal erfassen, mehrfach nutzen",
    campaign: "Contentmodell mit Hof, Raum, Objekt, Quelle, Medium, Freigabe, Zielgruppe und Status.",
    museumBenefit: "Das Museum entscheidet, was gesichert, freigegeben und ausgespielt wird. KI hilft nur auf dieser Basis.",
    rhythm: "Dauerhafte Grundlage, bevor größere App-Entwicklung sinnvoll wird.",
    nextStep: "Minimalen Datensatz für zehn Hofgeschichten und drei Zielgruppen festlegen.",
    imagePrompt: "Photorealistic workshop table in a museum office, guides and museum staff sorting historic farmhouse photos, object cards and a digital map on a tablet, sticky notes, archival folders, calm professional knowledge-management mood, Tyrolean museum context, no readable text, no logos.",
  },
  inspiration: {
    visualClass: "heritage-consulting",
    imageUrl: publicAsset("pitch-images/bauernhaus-inspiration.png"),
    sceneTitle: "Bauernhaus-Inspiration",
    sceneSubtitle: "Material, Stube, Handwerk",
    campaign: "Premium-Rundgang für Baukultur: historische Details verstehen, Handwerkerkontakte anfragen und Beratungstage buchen.",
    museumBenefit: "Neue Partner aus Handwerk, Architektur und Premium-Tourismus; höhere Wertschätzung für Museumswissen.",
    rhythm: "Dauerhafter Modus, ergänzt durch 2 bis 4 Beratungstage pro Jahr.",
    nextStep: "Drei typische Themen vorbereiten: Stube, Holzoberflächen, Türen/Beschläge.",
    imagePrompt: "Photorealistic premium architecture inspiration tour inside an old Tyrolean farmhouse room, architect, craftsperson and homeowner examining timber joints, tiled stove, old door hardware and wood surfaces, elegant but authentic Kitzbühel farmhouse renovation context, natural light, no readable text, no logos.",
  },
  history: {
    visualClass: "history-salon",
    imageUrl: publicAsset("pitch-images/tirol-verstehen.png"),
    sceneTitle: "Tirol verstehen",
    sceneSubtitle: "Vertiefung ohne Kinderfluss zu verdrängen",
    campaign: "Optionaler Deep-Dive-Modus zu Wald, Wasser, Holztrift, Bergbau, Rattenberg und Hofalltag.",
    museumBenefit: "Wiederbesuchsgrund für Kulturreisende, Einheimische, Vereine und Oberstufe; gute Basis für Expert:innenformate.",
    rhythm: "Dauerhaft als App-Modus, monatlich als Salon oder Themenabend.",
    nextStep: "Ein erstes Dossier mit Quellen, Audio und drei Stationen auswählen.",
    imagePrompt: "Photorealistic small cultural history group at a Tyrolean farmhouse museum viewpoint, guide explaining a map of forest, water, mining and Rattenberg connections, adults listening with audio guides, alpine landscape and historic farmhouses, serious but inviting educational mood, no readable text, no logos.",
  },
};

function ModuleIdeas() {
  const [selectedIdeaId, setSelectedIdeaId] = useState<string | null>(null);
  const selectedIdea = selectedIdeaId
    ? moduleIdeas.find((idea) => idea.id === selectedIdeaId) ?? null
    : null;

  return (
    <section id="modules" className="modules-section">
      <div className="section-heading">
        <div>
          <div className="section-kicker">Best of der Ideen</div>
          <h2>Vom ersten Museumspilot zur Museumsplattform.</h2>
        </div>
        <p>
          Die Ideen werden nach Umsetzungsphasen sortiert. Erst kommt der Pilot,
          danach folgen buchbare Erweiterungen, Zielgruppenlayer und Plattformnutzen.
        </p>
      </div>

      <div className="idea-layout">
        <div className="idea-phase-list">
          {moduleIdeaPhaseGroups.map((group) => (
            <section key={group.phase} className="idea-phase-group">
              <div className="idea-phase-group__head">
                <span>{group.phase}</span>
                <div>
                  <h3>{group.title}</h3>
                  <p>{group.text}</p>
                </div>
              </div>
              <div className="idea-grid">
                {group.ideaIds.map((ideaId) => {
                  const idea = moduleIdeas.find((item) => item.id === ideaId);
                  if (!idea) return null;
                  const Icon = moduleIdeaIcon(idea.id);
                  const scope = moduleScopeById[idea.id] ?? { label: "Ideenpool" as ScopeLabel, note: "später prüfen" };
                  return (
                    <button
                      key={idea.id}
                      className={selectedIdea?.id === idea.id ? "idea-card idea-card--active" : "idea-card"}
                      type="button"
                      onClick={() => setSelectedIdeaId(idea.id)}
                    >
                      <Icon size={24} />
                      <em className={`scope-badge scope-badge--${scopeStyleByLabel[scope.label]}`}>{scope.label}</em>
                      <span>{idea.title}</span>
                      <p>{idea.description}</p>
                      <small>{scope.note}</small>
                      <strong>Pitch-Popup öffnen</strong>
                    </button>
                  );
                })}
              </div>
            </section>
          ))}
        </div>
      </div>

      {selectedIdea && (
        <ModuleIdeaModal idea={selectedIdea} onClose={() => setSelectedIdeaId(null)} />
      )}
    </section>
  );
}

function futureIcon(id: string) {
  if (id === "geocaching") return Compass;
  if (id === "fpv") return Video;
  if (id === "creator-walk") return Flag;
  if (id === "data-check") return Database;
  if (id === "bus-groups") return BusFront;
  if (id === "motorcycle-stop") return Bike;
  if (id === "larp") return Drama;
  if (id === "xr-time-travel") return WandSparkles;
  if (id === "medieval-fest") return Castle;
  if (id === "oldtimer-rally") return CarFront;
  if (id === "tracht-show") return Shirt;
  if (id === "archery-story") return Goal;
  if (id === "heritage-consulting") return Home;
  if (id === "history-salon") return Landmark;
  return HammerIcon;
}

const futureVisuals: Record<string, {
  imageUrl?: string;
  photoTitle: string;
  photoSubtitle: string;
  popupDescription: string;
  moments: string[];
}> = {
  geocaching: {
    imageUrl: publicAsset("pitch-images/hack-am-hof-teilnehmerinnen.png"),
    photoTitle: "Hofspur im Sommer",
    photoSubtitle: "Familien suchen Hofsiegel",
    popupDescription:
      "Kinder starten mit einer gedruckten Hofrunde, scannen am Speicher einen QR-Code und finden eine kurze Geschichte, die nur an diesem Ort Sinn ergibt.",
    moments: ["Ferienpass", "Stempel am Hof", "neue Spur pro Woche"],
  },
  fpv: {
    imageUrl: publicAsset("pitch-images/abgesperrtes-flugfenster.png"),
    photoTitle: "Abgesperrtes Flugfenster",
    photoSubtitle: "Techniktag ohne Museumsbetrieb zu stören",
    popupDescription:
      "Ein klar begrenzter Sondertag mit Sicherheitszonen, Moderation, Sponsorenfläche und Live-Bild. Kein Alltagsmodus, sondern PR-Anlass.",
    moments: ["Sicherheitszone", "Livestream", "Sponsorpartner"],
  },
  "creator-walk": {
    imageUrl: publicAsset("pitch-images/goldene-stunde-am-hof.png"),
    photoTitle: "Goldene Stunde am Hof",
    photoSubtitle: "geführte Motive mit Geschichte",
    popupDescription:
      "Creator bekommen nicht nur schöne Blickachsen, sondern pro Motiv eine kurze Geschichte, korrekte Hashtags und Regeln für respektvolle Bildnutzung.",
    moments: ["Fotopunkte", "Historischer Kontext", "Social-Paket"],
  },
  "data-check": {
    imageUrl: publicAsset("pitch-images/saison-und-anreise-planen.png"),
    photoTitle: "Saison und Anreise planen",
    photoSubtitle: "Zahlen vor Investitionen prüfen",
    popupDescription:
      "Vor Partnergesprächen werden Saisonfenster, Buslogik, Rattenberg-Anbindung, Aufenthaltsdauer und Kapazität sichtbar gemacht.",
    moments: ["Saisonfenster", "Buslogik", "Partnerentscheidung"],
  },
  "bus-groups": {
    imageUrl: publicAsset("pitch-images/rattenberg-busbruecke.png"),
    photoTitle: "Rattenberg plus Höfemuseum",
    photoSubtitle: "planbarer Halbtagesausflug",
    popupDescription:
      "Busgruppen kommen aus Rattenberg, bekommen eine kurze Route, Schmankerl-Slot, Erinnerungsfoto und eine planbare Rückfahrt.",
    moments: ["Busfenster", "Schmankerl", "Erinnerungsfoto"],
  },
  "motorcycle-stop": {
    imageUrl: publicAsset("pitch-images/motorrad-einkehr.png"),
    photoTitle: "Kultur-Einkehr",
    photoSubtitle: "Motorradgruppe, Jause, Fotopunkt",
    popupDescription:
      "Motorradgruppen bekommen keinen Fahrparcours im Gelände, sondern einen sicheren Stopp mit kurzer Hofgeschichte, Jause und Bildmotiv.",
    moments: ["Abstellzone", "Jause", "kurze Route"],
  },
  larp: {
    imageUrl: publicAsset("pitch-images/living-history-am-hof.png"),
    photoTitle: "Living History am Hof",
    photoSubtitle: "Rollen aus geprüften Quellen",
    popupDescription:
      "Spieler:innen bewegen sich in kuratierten Szenen. Die App liefert Rollen, Grenzen, Quellenhinweise und ruhige Zeitfenster.",
    moments: ["Rollenkarte", "Quellencheck", "Szenenfenster"],
  },
  "xr-time-travel": {
    imageUrl: publicAsset("pitch-images/vr-ar-zeitreise.png"),
    photoTitle: "Zeitfenster öffnen",
    photoSubtitle: "VR/AR als Zusatz zur Führung",
    popupDescription:
      "Vor oder nach der Führung kann ein Raumzustand früherer Jahrhunderte sichtbar werden. Guides bleiben zentral, XR ergänzt den Blick.",
    moments: ["360-Grad-Raum", "AR-Objekt", "Guide-Freigabe"],
  },
  "medieval-fest": {
    imageUrl: publicAsset("pitch-images/markt-und-handwerk.png"),
    photoTitle: "Markt und Handwerk",
    photoSubtitle: "ruhiger Rundgang statt Themenpark",
    popupDescription:
      "Handwerk, Musik und Kulinarik werden als Stationen erzählt. Jede Station hat einen Hofbezug und eine kurze fachliche Einordnung.",
    moments: ["Handwerk", "Musik", "Hofgeschichte"],
  },
  "oldtimer-rally": {
    imageUrl: publicAsset("pitch-images/oldtimer-tag.png"),
    photoTitle: "Historische Fahrzeuge",
    photoSubtitle: "Fototag zwischen Höfen",
    popupDescription:
      "Oldtimer-Clubs erhalten Zufahrt, Fotofenster, kurze Führung und Genussabschluss. Die Kulisse erzeugt starke Presse- und Social-Motive.",
    moments: ["Sternfahrt", "Fotofenster", "Clubpaket"],
  },
  "tracht-show": {
    imageUrl: publicAsset("pitch-images/kirchtag.png"),
    photoTitle: "Tracht am Hof",
    photoSubtitle: "Modenschau, Handwerk und Fotopunkte",
    popupDescription:
      "Einmal pro Jahr wird ein Hofbereich zur ruhigen Bühne: Trachten, Handwerk, Musik, Schmankerl und historische Fotomotive werden zu einem hochwertigen Besuchsanlass.",
    moments: ["Modenschau", "Vereine", "Fotopaket"],
  },
  "archery-story": {
    imageUrl: publicAsset("pitch-images/waldspur-mit-boegen.png"),
    photoTitle: "Waldspur mit Bogen",
    photoSubtitle: "Jäger- und Wilderergeschichte",
    popupDescription:
      "Ein betreuter 3D-Bogenparcours erzählt Wald, Jagd, Regeln und Armut. Sicherheit und Zonenführung stehen vor Action.",
    moments: ["3D-Ziele", "Wilderer-Story", "betreute Zonen"],
  },
  "craft-challenge": {
    imageUrl: publicAsset("pitch-images/werkstatt-am-hof.png"),
    photoTitle: "Werkstatt am Hof",
    photoSubtitle: "Lehrlinge und Vereine lösen Aufgaben",
    popupDescription:
      "Gruppen prüfen Holz, Werkzeug, Reparaturspuren und Material. Das Ergebnis kann als Vereinschallenge oder Lehrlingsformat laufen.",
    moments: ["Werkzeug", "Reparaturspur", "Teamaufgabe"],
  },
  "heritage-consulting": {
    imageUrl: publicAsset("pitch-images/bauernhaus-inspiration.png"),
    photoTitle: "Bauernhaus-Inspiration",
    photoSubtitle: "Details für hochwertige Projekte",
    popupDescription:
      "Hausbesitzer:innen entdecken Stube, Ofen, Holz, Türen und Beschläge als fachlich eingeordnete Inspiration statt bloßer Dekoration.",
    moments: ["Materialblick", "Handwerkerkontakt", "Beratungstag"],
  },
  "history-salon": {
    imageUrl: publicAsset("pitch-images/tirol-verstehen.png"),
    photoTitle: "Tirol verstehen",
    photoSubtitle: "Wald, Wasser, Bergbau, Rattenberg",
    popupDescription:
      "Ein optionaler Tiefgang-Modus verbindet Hofalltag mit Regionalgeschichte. Für Kulturreisende, Einheimische, Vereine und Oberstufen.",
    moments: ["Themenabend", "Audio-Dossier", "Expertenpfad"],
  },
};

function futureVisual(id: string) {
  return futureVisuals[id] ?? {
    photoTitle: "Neues Format am Hof",
    photoSubtitle: "aus Wissen wird Erlebnis",
    popupDescription: "Ein kuratiertes Format nutzt dieselbe Wissensbasis, aber andere Zielgruppe, Taktung und Buchungslogik.",
    moments: ["Ort", "Wissen", "Buchung"],
  };
}

function futureNextStep(format: FutureFormat) {
  if (format.id === "bus-groups") {
    return "Rattenberg, Busparkplatz, Aufenthaltsdauer, Gasthaus-Slot und Fotopunkt in einem Halbtagespaket skizzieren.";
  }
  if (format.id === "xr-time-travel") {
    return "Ein einziges Raum- oder Hofszenario mit Guide-Freigabe auswählen und mit einem Tiroler XR-Partner als Demo prüfen.";
  }
  if (format.id === "heritage-consulting") {
    return "Drei hochwertige Bauernhaus-Themen auswählen: Stube, Holzoberflächen und historische Beschläge.";
  }
  if (format.id === "tracht-show") {
    return "Trachtenverein, regionale Mode-/Handwerkspartner, Fotopunkte, Musik und Gastronomie in einem klaren Jahresformat bündeln.";
  }
  if (format.id === "history-salon") {
    return "Ein erstes Expert:innen-Dossier zu Wald, Wasser, Holztrift, Bergbau oder Rattenberg kuratieren.";
  }
  if (format.id === "archery-story") {
    return "Sicherheitszonen, Fachpartner und eine ruhige Jäger-/Wilderer-Story definieren, bevor das Format beworben wird.";
  }
  return "Ein kleines Testformat mit Zielgruppe, Terminfenster, Verantwortlichen und Erfolgskriterium festlegen.";
}

function pointVisualClass(point: MapPoint) {
  if (point.type === "photo" || point.type === "celebration") return "creator-walk";
  if (point.type === "culinary") return "medieval-fest";
  if (point.type === "herb" || point.type === "family" || point.type === "mission") return "geocaching";
  if (point.type === "maintenance") return "craft-challenge";
  if (point.type === "pensioner" || point.type === "chronicler") return "history-salon";
  if (point.tags.some((tag) => ["Werkzeug", "Handwerk", "Bauweise", "Räume"].includes(tag))) return "heritage-consulting";
  if (point.tags.some((tag) => ["Tiere", "Vorrat", "Winter"].includes(tag))) return "geocaching";
  return "history-salon";
}

function pointPitch(point: MapPoint) {
  if (point.type === "hof") {
    return {
      title: "Hofprofil als Wissensknoten",
      campaign: `Der ${point.title} wird nicht nur als Gebäude markiert, sondern als Sammelstelle für Herkunft, Räume, Objekte, Fotos, Guide-Erzählungen und spätere Stationen.`,
      museumBenefit:
        "Jeder Hof kann nach und nach wertvoller werden: erst Hofprofil, dann Audio, dann Mission, dann Foto- oder Eventpunkt.",
      rhythm: "Dauerhaft. Inhalte wachsen mit jedem Guide-Workshop und jeder freigegebenen Geschichte.",
      nextStep: "Hofprofil mit drei gesicherten Fakten, zwei offenen Fragen und einem passenden Fotopunkt anlegen.",
    };
  }
  if (point.type === "photo" || point.type === "celebration") {
    return {
      title: point.eventInfo?.title ?? "Feier- und Fotopunkt",
      campaign:
        "Aus einem schönen Ort wird ein buchbarer Ablauf: Zeitfenster, Blickrichtung, Wetterplan, Fotoerinnerung und Abholung an der Kasse.",
      museumBenefit:
        "Feiern erzeugen Zusatzumsatz und starke Weiterempfehlung, weil Gäste Bilder in Familien, Reisegruppen und Social Feeds weitertragen.",
      rhythm: "Saisonal buchbar, mit klaren Regeln für Museumsbetrieb, Ruhezeiten und sensible Bereiche.",
      nextStep: "Fotospot testen, Beispielfoto erstellen, Preislogik für Druck, Holzlaser, Glasgravur oder Rahmen prüfen.",
    };
  }
  if (point.type === "culinary") {
    return {
      title: point.eventInfo?.title ?? "Kulinarische Station",
      campaign:
        "Jede Station verbindet ein Gericht mit Hofwissen: Alltag oder Festtag, Vorrat, Zutaten, Musik, Erinnerung und Rezeptkarte.",
      museumBenefit:
        "Kulinarik verlängert Aufenthaltsdauer, stärkt das Gasthaus und macht aus einem Rundgang einen wiedererzählbaren Anlass.",
      rhythm: "Als Schmankerl-Route bei Events, später einzelne Stationen dauerhaft oder als Gruppenpaket.",
      nextStep: "Ein Gericht, einen Hof, eine Guide-Erzählung und eine kleine Mitnahme- oder Rezeptkarte verbinden.",
    };
  }
  if (point.type === "mission") {
    return {
      title: "Mission für Gruppen",
      campaign:
        "Die Station ist Teil einer Teamgeschichte. Kinder lösen nicht nur Fragen, sondern verstehen eine Entscheidung im Hofsystem.",
      museumBenefit:
        "Begleitpersonen bekommen Ablauf, Rollen und Ziel. Das Museum bekommt einen klaren Pilot, der einfach getestet werden kann.",
      rhythm: "Dauerhaft als buchbares Gruppenangebot, mit variablen Missionen je Alter, Zeit und Gruppengröße.",
      nextStep: "Aufgabe vor Ort mit einer Testgruppe durchspielen und danach Sprache, Dauer und Rollen schärfen.",
    };
  }
  if (point.type === "herb") {
    return {
      title: point.eventInfo?.title ?? "Kräuterpunkt",
      campaign:
        "Kräuter werden als Schau-, Riech- und Lernstation erzählt, nicht als unkontrollierte Sammelaufforderung.",
      museumBenefit:
        "Naturwissen schafft Workshopanlässe, bleibt aber fachlich und sicher kontrolliert.",
      rhythm: "Saisonal, abhängig von Wetter, Fachfreigabe und Workshopterminen.",
      nextStep: "Sichere Arten, klare Warnhinweise und eine fachlich geprüfte Kurzgeschichte je Punkt erfassen.",
    };
  }
  if (point.type === "maintenance") {
    return {
      title: "Interner Betrieb am Ort",
      campaign:
        "Mitarbeitende dokumentieren Aufgaben dort, wo sie entstehen: Foto, Priorität, Status, Zuständigkeit und nächster Schritt.",
      museumBenefit:
        "Betriebswissen wird sichtbar, Reparaturen werden nachvollziehbarer und Saisonvorbereitung wird einfacher planbar.",
      rhythm: "Dauerhaft intern, besonders vor Saisonstart, nach Events und bei Kontrollgängen.",
      nextStep: "Drei echte Wartungsfälle erfassen und prüfen, welche Felder die Teams wirklich brauchen.",
    };
  }
  return {
    title: point.eventInfo?.title ?? "Besucherpunkt",
    campaign: "Dieser Punkt zeigt, wie dieselbe Karte je Zielgruppe andere Geschichten, Aufgaben oder Services öffnen kann.",
    museumBenefit: "Die Plattform bleibt einfach: ein Ort, mehrere Layer, unterschiedliche Besucherbedürfnisse.",
    rhythm: "Dauerhaft als Layer, ergänzt durch saisonale Varianten.",
    nextStep: "Eine kurze Version für Besucher:innen und eine interne Version für Guides formulieren.",
  };
}

function PitchModalShell({
  kicker,
  title,
  onClose,
  children,
}: {
  kicker: string;
  title: string;
  onClose: () => void;
  children: ReactNode;
}) {
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };
    document.body.classList.add("modal-lock");
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.classList.remove("modal-lock");
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [onClose]);

  return (
    <div
      className="pitch-modal-backdrop"
      role="presentation"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) onClose();
      }}
    >
      <section
        className="pitch-modal"
        role="dialog"
        aria-modal="true"
        aria-label={title}
        onMouseDown={(event) => event.stopPropagation()}
      >
        <button className="pitch-modal__close" type="button" onClick={onClose} aria-label="Popup schließen">
          <X size={18} />
        </button>
        <div className="section-kicker">{kicker}</div>
        <h2>{title}</h2>
        {children}
      </section>
    </div>
  );
}

function ModuleIdeaModal({ idea, onClose }: { idea: ModuleIdea; onClose: () => void }) {
  const Icon = moduleIdeaIcon(idea.id);
  const detail = modulePitchDetails[idea.id] ?? modulePitchDetails.content;
  const scope = moduleScopeById[idea.id] ?? { label: "Ideenpool" as ScopeLabel, note: "später prüfen" };

  return (
    <PitchModalShell kicker="Ideen-Popup" title={idea.title} onClose={onClose}>
      <div className="pitch-modal__grid">
        <div className={`pitch-modal__visual event-photo event-photo--real event-photo--${detail.visualClass} event-photo--large`}>
          <img src={detail.imageUrl} alt="" className="event-photo__img" loading="lazy" />
          <span className="pitch-modal__visual-icon">
            <Icon size={24} />
          </span>
          <strong>{detail.sceneTitle}</strong>
          <em>{detail.sceneSubtitle}</em>
        </div>

        <div className="pitch-modal__content">
          <div className="pitch-modal__scope">
            <span className={`scope-badge scope-badge--${scopeStyleByLabel[scope.label]}`}>{scope.label}</span>
            <p>{scope.note}</p>
          </div>
          <p className="pitch-modal__lead">{idea.detail}</p>
          <div className="pitch-modal__chips">
            {idea.examples.map((example) => (
              <span key={example}>{example}</span>
            ))}
          </div>
          <div className="pitch-modal__fact-grid">
            <article>
              <span>Kampagne</span>
              <p>{detail.campaign}</p>
            </article>
            <article>
              <span>Nutzen fürs Museum</span>
              <p>{detail.museumBenefit}</p>
            </article>
            <article>
              <span>Rhythmus</span>
              <p>{detail.rhythm}</p>
            </article>
            <article>
              <span>Nächster Schritt</span>
              <p>{detail.nextStep}</p>
            </article>
          </div>
          {!detail.imageUrl ? (
            <div className="pitch-modal__image-prompt">
              <strong>Bildprompt für echtes Pitch-Foto</strong>
              <p>{detail.imagePrompt}</p>
            </div>
          ) : null}
        </div>
      </div>
    </PitchModalShell>
  );
}

function FutureFormatModal({ format, onClose }: { format: FutureFormat; onClose: () => void }) {
  const Icon = futureIcon(format.id);
  const visual = futureVisual(format.id);
  const visualClass = `pitch-modal__visual event-photo ${visual.imageUrl ? "event-photo--real " : ""}event-photo--${format.id} event-photo--large`;

  return (
    <PitchModalShell kicker="Kampagnen-Popup" title={format.title} onClose={onClose}>
      <div className="pitch-modal__grid">
        <div className={visualClass}>
          {visual.imageUrl ? <img src={visual.imageUrl} alt="" className="event-photo__img" loading="lazy" /> : null}
          <span className="pitch-modal__visual-icon">
            <Icon size={24} />
          </span>
          <strong>{visual.photoTitle}</strong>
          <em>{visual.photoSubtitle}</em>
        </div>

        <div className="pitch-modal__content">
          <p className="pitch-modal__lead">{format.description}</p>
          <div className="pitch-modal__chips">
            <span>{format.audience}</span>
            <span>{format.stage}</span>
            {visual.moments.map((moment) => (
              <span key={moment}>{moment}</span>
            ))}
          </div>
          <div className="pitch-modal__story">
            <strong>So könnte es vor Ort aussehen</strong>
            <p>{visual.popupDescription}</p>
          </div>
          <div className="pitch-modal__fact-grid">
            <article>
              <span>Kampagne</span>
              <p>{format.campaign}</p>
            </article>
            <article>
              <span>Nutzen fürs Museum</span>
              <p>{format.museumBenefit}</p>
            </article>
            <article>
              <span>Wie oft?</span>
              <p>{format.cadence}</p>
            </article>
            <article>
              <span>Leitplanke</span>
              <p>{format.guardrail}</p>
            </article>
            <article className="pitch-modal__wide">
              <span>Nächster Test</span>
              <p>{futureNextStep(format)}</p>
            </article>
          </div>
        </div>
      </div>
    </PitchModalShell>
  );
}

function PointPitchModal({ point, onClose }: { point: MapPoint; onClose: () => void }) {
  const Icon = typeIcons[point.type];
  const color = typeColor(point.type);
  const pitch = pointPitch(point);
  const visual = futureVisual(pointVisualClass(point));
  const visualClass = `pitch-modal__visual event-photo ${visual.imageUrl ? "event-photo--real " : ""}event-photo--${pointVisualClass(point)} event-photo--large`;

  return (
    <PitchModalShell kicker={mapPointTypeLabels[point.type]} title={point.title} onClose={onClose}>
      <div className="pitch-modal__grid">
        <div className={visualClass}>
          {visual.imageUrl ? <img src={visual.imageUrl} alt="" className="event-photo__img" loading="lazy" /> : null}
          <span className="pitch-modal__visual-icon" style={{ background: color, color: "#fff8ea" }}>
            <Icon size={24} />
          </span>
          <strong>{pitch.title}</strong>
          <em>{point.subtitle}</em>
        </div>

        <div className="pitch-modal__content">
          <p className="pitch-modal__lead">{point.description}</p>
          <div className="pitch-modal__chips">
            {point.tags.map((tag) => (
              <span key={tag}>{tag}</span>
            ))}
            {point.status ? <span>Status: {point.status}</span> : null}
          </div>

          <div className="pitch-modal__fact-grid">
            <article>
              <span>Was man hier zeigen kann</span>
              <p>{pitch.campaign}</p>
            </article>
            <article>
              <span>Nutzen fürs Museum</span>
              <p>{pitch.museumBenefit}</p>
            </article>
            <article>
              <span>Rhythmus</span>
              <p>{pitch.rhythm}</p>
            </article>
            <article>
              <span>Nächster Schritt</span>
              <p>{pitch.nextStep}</p>
            </article>
          </div>

          <div className="pitch-modal__columns">
            <article>
              <strong>Wissen, das hier gesammelt wird</strong>
              <ul>
                {(point.details ?? ["Guide-Notiz", "Foto", "Quelle", "Freigabe"]).map((detail) => (
                  <li key={detail}>{detail}</li>
                ))}
              </ul>
            </article>
            {point.eventInfo ? (
              <article>
                <strong>{point.eventInfo.title}</strong>
                <ul>
                  {point.eventInfo.bullets.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
                {point.eventInfo.cta ? <p>{point.eventInfo.cta}</p> : null}
              </article>
            ) : null}
            {point.photoStudio ? (
              <article>
                <strong>{point.photoStudio.title}</strong>
                <p>{point.photoStudio.description}</p>
                <div className="pitch-modal__chips pitch-modal__chips--tight">
                  {point.photoStudio.options.map((option) => (
                    <span key={option}>{option}</span>
                  ))}
                </div>
              </article>
            ) : null}
          </div>
        </div>
      </div>
    </PitchModalShell>
  );
}

export function App() {
  // Diese States steuern die interaktiven Demo-Bereiche: Zielgruppe, Kartenpunkt,
  // Popups und Navigationsstatus. Für reine Textänderungen sind sie meist egal.
  const [mode, setMode] = useState<AudienceMode>("school");
  const [mapVariant, setMapVariant] = useState<MapVariant>("original");
  const [mapListView, setMapListView] = useState<"stations" | "hoefe">("stations");
  const [activeSectionId, setActiveSectionId] = useState("top");
  const [scrollProgress, setScrollProgress] = useState(0);
  const [selectedPoint, setSelectedPoint] = useState<MapPoint | null>(null);
  const [pointModal, setPointModal] = useState<MapPoint | null>(null);
  const [selectedFutureId, setSelectedFutureId] = useState("bus-groups");
  const [futureModalId, setFutureModalId] = useState<string | null>(null);
  const activeAudience = audienceById(mode);
  const points = useMemo(() => activePoints(mode), [mode]);
  const featurePoints = useMemo(() => points.filter((point) => point.type !== "hof"), [points]);
  const hofPoints = useMemo(() => points.filter((point) => point.type === "hof"), [points]);
  const visibleMapPoints = mapListView === "stations" ? featurePoints : hofPoints;
  const selectedFuture = useMemo(
    () => futureFormats.find((format) => format.id === selectedFutureId) ?? futureFormats[0],
    [selectedFutureId],
  );
  const futureModal = useMemo(
    () => futureFormats.find((format) => format.id === futureModalId) ?? null,
    [futureModalId],
  );
  const ActiveIcon = activeAudience.icon;

  useEffect(() => {
    function updateProgress() {
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
      setScrollProgress(maxScroll > 0 ? Math.min(1, window.scrollY / maxScroll) : 0);

      const sections = pitchNavItems
        .map((item) => document.getElementById(item.id))
        .filter((section): section is HTMLElement => Boolean(section));
      let current = sections[0];

      for (const section of sections) {
        if (section.offsetTop <= window.scrollY + 140) {
          current = section;
        }
      }

      setActiveSectionId(current?.id ?? "top");
    }

    updateProgress();
    window.addEventListener("scroll", updateProgress, { passive: true });
    window.addEventListener("resize", updateProgress);

    return () => {
      window.removeEventListener("scroll", updateProgress);
      window.removeEventListener("resize", updateProgress);
    };
  }, []);

  function changeMode(nextMode: AudienceMode) {
    setMode(nextMode);
    setSelectedPoint(null);
    setPointModal(null);
  }

  function openPoint(point: MapPoint) {
    setSelectedPoint(point);
    setPointModal(point);
  }

  function scrollOneSectionUp() {
    const sections = Array.from(document.querySelectorAll<HTMLElement>("main > section"));
    const currentTop = window.scrollY;
    const previousSection = [...sections]
      .reverse()
      .find((section) => section.offsetTop < currentTop - 80);

    window.scrollTo({
      top: Math.max(previousSection?.offsetTop ?? 0, 0),
      behavior: "smooth",
    });
  }

  function scrollOneSectionDown() {
    const sections = Array.from(document.querySelectorAll<HTMLElement>("main > section"));
    const currentTop = window.scrollY;
    const nextSection = sections.find((section) => section.offsetTop > currentTop + 80);

    window.scrollTo({
      top: Math.min(nextSection?.offsetTop ?? document.documentElement.scrollHeight, document.documentElement.scrollHeight),
      behavior: "smooth",
    });
  }

  return (
    <main>
      <nav className="pitch-progress-nav" aria-label="Pitch-Fortschritt">
        <div className="pitch-progress-nav__bar">
          <span style={{ width: `${scrollProgress * 100}%` }} />
        </div>
        <div>
          {pitchNavItems.map((item) => (
            <a key={item.id} className={activeSectionId === item.id ? "is-active" : undefined} href={`#${item.id}`}>
              {item.label}
            </a>
          ))}
        </div>
      </nav>

      <section id="top" className="hero-section">
        <div className="hero-shell">
          <div className="hero-copy">
            <nav className="top-nav" aria-label="Hauptnavigation">
              <a href="#context">Kontext</a>
              <a href="#decision">Beschluss</a>
              <a href="#app-dummy">Prototyp</a>
              <a href="#studio">Wissen</a>
              <a href="#costs">Aufwand</a>
            </nav>
            <div className="hero-context">Entscheidungsseite</div>
            <h1>
              Pilot freigeben.
              <br />
              Museumswissen erlebbar machen.
            </h1>
            <h2 className="hero-thesis-lines">
              <span>Hofrunde testen.</span>
              <span>Guide-Wissen sichern.</span>
              <span>Danach Ausbau entscheiden.</span>
            </h2>
            <p>
              Heute geht es nicht um eine fertige Plattform, sondern um die Freigabe eines
              begrenzten Museumspiloten mit 4 bis 5 Stationen.
            </p>
            <div className="hero-decision-card" aria-label="Beschlussvorschlag">
              <span>Beschlussvorschlag</span>
              <strong>Freigabe für einen begrenzten Museumspilot</strong>
              <p>
                4 bis 5 Stationen, QR-/Code-Start, Rollen, Aufgaben, Guide-Wissen und Feedback.
                Keine Entscheidung über den Vollausbau.
              </p>
            </div>
            <div className="hero-actions">
              <a className="primary-action" href="#decision">
                Pilot freigeben <ArrowRight size={18} />
              </a>
              <a className="secondary-action" href="#app-dummy">
                Demo ansehen
              </a>
            </div>
          </div>
          <PitchPanel />
        </div>
      </section>

      <ContextStory />

      <DecisionAndRoadmapSection />

      <AppClickDummy />

      <PhonePrototype />

      <BuildathonPrototypeSection />

      <section id="demo" className="demo-section">
        <div className="section-heading">
          <div>
            <div className="section-kicker">Erlebniskarte</div>
            <h2>Eine Karte, acht Nutzungsmöglichkeiten.</h2>
          </div>
          <p>
            Ein System, viele Layer. Jede Zielgruppe sieht nur, was für sie wichtig ist.
          </p>
        </div>

        <div className="prototype-shell">
          <div className="prototype-sidebar">
            <ModeTabs activeMode={mode} onChange={changeMode} />
            <div className="mode-summary" style={{ "--summary-color": activeAudience.accent } as CSSProperties}>
              <ActiveIcon size={28} />
              <div>
                <h3>{activeAudience.title}</h3>
                <p>{activeAudience.claim}</p>
              </div>
            </div>
            <p className="mode-value">{activeAudience.value}</p>
            <div className="map-list-panel">
              <div className="map-list-tabs" aria-label="Kartenlisten">
                <button
                  className={mapListView === "stations" ? "map-list-tab map-list-tab--active" : "map-list-tab"}
                  type="button"
                  onClick={() => setMapListView("stations")}
                >
                  Stationen
                </button>
                <button
                  className={mapListView === "hoefe" ? "map-list-tab map-list-tab--active" : "map-list-tab"}
                  type="button"
                  onClick={() => setMapListView("hoefe")}
                >
                  Höfe
                </button>
              </div>
              <div className={mapListView === "stations" ? "point-list" : "hof-list"}>
                <strong>{mapListView === "stations" ? "Aktive Stationen" : "Höfe ansehen"}</strong>
                <div>
                  {(mapListView === "stations" ? featurePoints : hofPoints).map((point) => (
                    <button
                      key={point.id}
                      className={
                        selectedPoint?.id === point.id
                          ? mapListView === "stations"
                            ? "point-list__item point-list__item--active"
                            : "hof-list__item hof-list__item--active"
                          : mapListView === "stations"
                            ? "point-list__item"
                            : "hof-list__item"
                      }
                      onClick={() => openPoint(point)}
                    >
                      {point.title}
                    </button>
                  ))}
                </div>
              </div>
            </div>
            <PointDrawer
              point={selectedPoint}
              onClose={() => setSelectedPoint(null)}
              onOpen={() => selectedPoint && setPointModal(selectedPoint)}
            />
          </div>

          <div className={`map-stage map-stage--${mapVariant}`}>
            <MuseumMap
              mode={mode}
              mapVariant={mapVariant}
              points={visibleMapPoints}
              selectedPointId={selectedPoint?.id ?? null}
              onSelectPoint={openPoint}
            />
            <div className="map-scroll-hint">Scrollen bleibt Seite. Karte mit + / - zoomen.</div>
            <div className="map-variant-control" aria-label="Kartenansicht">
              {[
                ["original", "Original"],
                ["historical", "Historisch"],
                ["leaflet", "Leaflet"],
              ].map(([id, label]) => (
                <button
                  key={id}
                  className={mapVariant === id ? "map-variant-control__button map-variant-control__button--active" : "map-variant-control__button"}
                  onClick={() => setMapVariant(id as MapVariant)}
                >
                  {label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      <ModuleIdeas />

      <AvatarLab />

      <section id="process" className="process-section">
        <div className="section-heading">
          <div>
            <div className="section-kicker">Was vorher passieren muss</div>
            <h2>Die App beginnt mit Menschenwissen.</h2>
          </div>
          <p>
            Die App ist nur die sichtbare Oberfläche. Der Wert entsteht, wenn Guides, Verein und
            Museumsprofis ihr Wissen digital verfügbar machen.
          </p>
        </div>

        <div className="process-visual-row" aria-label="Bildbeispiele zur Wissensarbeit">
          {processVisuals.map((item) => (
            <figure key={item.title}>
              <img src={publicAsset(item.image)} alt="" loading="lazy" />
              <figcaption>
                <strong>{item.title}</strong>
                <span>{item.text}</span>
              </figcaption>
            </figure>
          ))}
        </div>

        <details className="process-details">
          <summary>
            <span>Wissensprozess</span>
            <strong>Schritte und Material anzeigen</strong>
          </summary>

          <div className="process-board">
            {processSteps.map((step) => (
              <article key={step.number}>
                <span>{step.number}</span>
                <h3>{step.title}</h3>
                <p>{step.description}</p>
                <strong>{step.need}</strong>
              </article>
            ))}
          </div>

          <div className="knowledge-callout">
            <div>
              <ScrollText size={24} />
              <h3>Schon digitalisiert</h3>
              <p>Webseite, Audio-App, Rallye, Fotos, Dokumente, Veranstaltungen.</p>
            </div>
            <div>
              <Mic2 size={24} />
              <h3>Noch nicht digitalisiert</h3>
              <p>Guide-Erzählungen, Vereinswissen, Anekdoten, Objektgeschichten.</p>
            </div>
          </div>
        </details>
      </section>

      <GuideStudio />

      <section id="extensions" className="future-section">
        <div className="section-heading">
          <div>
            <div className="section-kicker">Besucherzahl erhöhen</div>
            <h2>Weitere Möglichkeiten, Menschen ins Höfemuseum zu bringen.</h2>
          </div>
          <p>
            Manche Formate lassen sich direkt mit der App kombinieren, andere sind eher
            eigenständige Veranstaltungen. In jedem Fall kann die App vor Ort Orientierung,
            Hintergrundwissen, Fotopunkte und Erinnerungen liefern.
          </p>
        </div>

        <div className="future-showcase">
          <div className="future-showcase__heading">
            <div className="section-kicker">Ideenpool</div>
            <h3>Besucheranlässe, Kampagnen und Partnerformate.</h3>
            <p>
              Diese Ideen sind kein Pflichtumfang für den Pilot. Sie zeigen, wie viele
              Besuchsanlässe aus demselben Ort entstehen können.
            </p>
          </div>
          <FutureFormatGroups
            activeId={selectedFuture.id}
            onOpen={(id) => {
              setSelectedFutureId(id);
              setFutureModalId(id);
            }}
          />
        </div>
      </section>

      <ProjectEstimateSection />

      {pointModal && <PointPitchModal point={pointModal} onClose={() => setPointModal(null)} />}
      {futureModal && <FutureFormatModal format={futureModal} onClose={() => setFutureModalId(null)} />}

      <div className="scroll-controls" aria-label="Seitennavigation">
        <button
          className="back-to-top"
          type="button"
          onClick={scrollOneSectionUp}
          aria-label="Einen Abschnitt nach oben"
          title="Einen Abschnitt nach oben"
        >
          <ArrowUp size={17} />
          <span>Nach oben</span>
        </button>
        <button
          className="back-to-top back-to-top--down"
          type="button"
          onClick={scrollOneSectionDown}
          aria-label="Einen Abschnitt nach unten"
          title="Einen Abschnitt nach unten"
        >
          <ArrowDown size={17} />
          <span>Nach unten</span>
        </button>
        <a className="back-to-top back-to-top--all" href="#top" aria-label="Zum Start der Seite" title="Zum Start">
          <Home size={17} />
          <span>Zum Start</span>
        </a>
      </div>
    </main>
  );
}
