import { useMemo, useState } from "react";
import {
  ArrowRight,
  BookOpen,
  Camera,
  CheckCircle2,
  ChevronLeft,
  CircleHelp,
  Gift,
  ImagePlus,
  ListChecks,
  MapPin,
  QrCode,
  RefreshCw,
  Sparkles,
  Trophy,
  WandSparkles,
  XCircle,
} from "lucide-react";
import { clickDummyMissions, clickDummyModes } from "../data/platform";

function publicAsset(path: string) {
  return `${import.meta.env.BASE_URL}${path}`;
}

type MiniGame = {
  title: string;
  instruction: string;
  choices: string[];
  correctChoice: string;
  reward: string;
  knowledge: string;
};

type DummyScreen = "start" | "roles" | "station" | "mini" | "photo" | "finale";
type AppStage = "splash" | "login" | "setup" | "join" | "mission";

type GroupProfile = {
  id: string;
  modeId: string;
  label: string;
  creator: string;
  participants: string;
  defaultName: string;
  defaultCount: number;
  defaultAge: string;
  defaultDuration: string;
  description: string;
};

type RoleProfile = {
  id: string;
  label: string;
  shortTask: string;
  image: string;
  hint: string;
  badge: string;
};

const groupProfiles: GroupProfile[] = [
  {
    id: "school-class",
    modeId: "school",
    label: "Schulklasse",
    creator: "Ich bin Lehrer:in",
    participants: "Kinder",
    defaultName: "Klasse 2B",
    defaultCount: 24,
    defaultAge: "10-12 Jahre",
    defaultDuration: "75 Minuten",
    description: "Für eine Klasse mit mehreren Handys, Rollen, QR-Stationen und gemeinsamem Abschluss.",
  },
  {
    id: "family",
    modeId: "kids",
    label: "Familie",
    creator: "Wir sind eine Familie",
    participants: "Kinder und Erwachsene",
    defaultName: "Familie Mair",
    defaultCount: 5,
    defaultAge: "6-70 Jahre",
    defaultDuration: "35 Minuten",
    description: "Für Eltern, Großeltern und Kinder mit kurzer Route, Pausen und einfachen Aufgaben.",
  },
  {
    id: "travel-group",
    modeId: "history",
    label: "Reisegruppe / Pensionisten",
    creator: "Ich leite eine Reisegruppe",
    participants: "Gäste",
    defaultName: "Rattenberg Bus 3",
    defaultCount: 38,
    defaultAge: "60+ Jahre",
    defaultDuration: "45 Minuten",
    description: "Für Busgruppen, Pensionist:innen und Gäste, die ruhiger geführt werden möchten.",
  },
  {
    id: "celebration",
    modeId: "celebration",
    label: "Feiergesellschaft",
    creator: "Wir feiern hier",
    participants: "Gäste",
    defaultName: "Feier am Rohrerhof",
    defaultCount: 32,
    defaultAge: "alle Altersstufen",
    defaultDuration: "25 Minuten",
    description: "Für Trauung, Taufe, Hochzeitsshooting, Gruppenfoto und Erinnerungsprodukt.",
  },
  {
    id: "inspiration",
    modeId: "inspiration",
    label: "Baukultur & Handwerk",
    creator: "Wir suchen Inspiration",
    participants: "Eigentümer:innen und Handwerk",
    defaultName: "Bauernhaus Inspiration",
    defaultCount: 8,
    defaultAge: "Erwachsene",
    defaultDuration: "45 Minuten",
    description: "Für Bauherr:innen, Handwerk und Menschen mit Interesse an Tiroler Hauskultur.",
  },
];

const groupNameSuggestions = [
  "Hofspur 17",
  "Glut & Vorrat",
  "Rattenberg Runde",
  "Stube Team",
  "Wald Wasser Hof",
];

const joinPreviewNames = ["Lena", "Emir", "Mia", "Jonas", "Nora", "Theo", "Sara", "Max"];
const joinPreviewRoles = ["Mühle", "Stall", "Holz", "Backen", "Wasser", "Werkzeug", "Kräuter", "Spuren"];

const defaultRoleProfile: RoleProfile = {
  id: "hofkind",
  label: "Hofkind",
  shortTask: "Achte auf kleine Spuren.",
  image: publicAsset("pitch-images/role-marktkind.png"),
  hint: "Schau genau hin: Am Hof erzählen Wege, Dinge und Geräusche oft mehr als ein Schild.",
  badge: "Spur",
};

const roleProfiles: RoleProfile[] = [
  {
    id: "miller",
    label: "Müllerkind",
    shortTask: "Findet Mehl, Wasser und Vorrat.",
    image: publicAsset("pitch-images/role-muellerkind.png"),
    hint: "Ohne Mühle gibt es kein Mehl. Prüfe, was trocken bleiben muss und wie Getreide zum Brot wird.",
    badge: "Mühle",
  },
  {
    id: "stable",
    label: "Stallhelfer:in",
    shortTask: "Achtet auf Tiere und Futter.",
    image: publicAsset("pitch-images/role-stallhelfer.png"),
    hint: "Tiere waren mehr als Nahrung: Milch, Mist, Wärme und Arbeit hielten den Hof in Gang.",
    badge: "Stall",
  },
  {
    id: "wood",
    label: "Holzarbeiterkind",
    shortTask: "Sucht Holz, Wärme und Reparaturspuren.",
    image: publicAsset("pitch-images/role-holzarbeiterkind.png"),
    hint: "Holz bedeutet Wärme, Bauen und Werkzeug. Ohne genug Holz wird der Winter schwer.",
    badge: "Holz",
  },
  {
    id: "baker",
    label: "Bäckerkind",
    shortTask: "Verbindet Feuer, Mehl und Festtag.",
    image: publicAsset("pitch-images/role-baeckerkind.png"),
    hint: "Backen braucht Feuer, Mehl und Zeit. Ein Fest beginnt lange vor dem ersten Bissen.",
    badge: "Backen",
  },
  {
    id: "smith",
    label: "Schmiedelehrling",
    shortTask: "Findet Werkzeuge und Reparaturen.",
    image: publicAsset("pitch-images/role-hufschmied.png"),
    hint: "Wenn ein Werkzeug bricht, stockt oft die ganze Arbeit. Reparieren war überlebenswichtig.",
    badge: "Werkzeug",
  },
  {
    id: "water",
    label: "Wassermeister:in",
    shortTask: "Liest Bach, Brunnen und Wege.",
    image: publicAsset("pitch-images/role-wassermeister.png"),
    hint: "Wasser hilft beim Trinken, Waschen, Mahlen, Transportieren und Orientieren.",
    badge: "Wasser",
  },
  {
    id: "herbs",
    label: "Kräutersammlerin",
    shortTask: "Unterscheidet Wissen von Vermutung.",
    image: publicAsset("pitch-images/role-kraeutersammlerin.png"),
    hint: "Nicht alles darf gesammelt werden. Sicheres Kräuterwissen braucht Erfahrung und klare Regeln.",
    badge: "Kräuter",
  },
  {
    id: "chronicler",
    label: "Junge Chronistin",
    shortTask: "Sammelt Geschichten und Beweise.",
    image: publicAsset("pitch-images/role-chronistin.png"),
    hint: "Eine gute Geschichte braucht Ort, Quelle und jemanden, der sie weitererzählen darf.",
    badge: "Chronik",
  },
  {
    id: "carpenter",
    label: "Tischlerlehrling",
    shortTask: "Prüft Holz, Form und Funktion.",
    image: publicAsset("pitch-images/role-tischlerlehrling.png"),
    hint: "Ein schönes Detail passt erst dann, wenn Material, Handwerk und Zweck verstanden sind.",
    badge: "Handwerk",
  },
  {
    id: "hunter",
    label: "Jägerkind",
    shortTask: "Liest Waldspuren und Regeln.",
    image: publicAsset("pitch-images/role-jaegerkind.png"),
    hint: "Der Wald war Ressource, Grenze und Konfliktort. Regeln sind hier genauso wichtig wie Spuren.",
    badge: "Wald",
  },
  {
    id: "charcoal",
    label: "Köhlerkind",
    shortTask: "Achtet auf Feuer, Rauch und Wald.",
    image: publicAsset("pitch-images/role-koehlerkind.png"),
    hint: "Kohle, Holz und Feuer verbinden Handwerk, Waldarbeit und lange Vorbereitung.",
    badge: "Kohle",
  },
  {
    id: "market",
    label: "Marktkind",
    shortTask: "Verbindet Hof, Fest und Handel.",
    image: publicAsset("pitch-images/role-marktkind.png"),
    hint: "Was am Hof entsteht, wird gegessen, getauscht, verkauft oder verschenkt.",
    badge: "Markt",
  },
];

function roleProfileFor(role: string) {
  const lower = role.toLowerCase();
  if (lower.includes("mühl") || lower.includes("vorrat") || lower.includes("trift")) return roleProfiles[0];
  if (lower.includes("tier") || lower.includes("stall")) return roleProfiles[1];
  if (lower.includes("feuer") || lower.includes("holz") || lower.includes("waldkund")) return roleProfiles[2];
  if (lower.includes("küche") || lower.includes("rezept") || lower.includes("fest")) return roleProfiles[3];
  if (lower.includes("werkzeug") || lower.includes("handwerk")) return roleProfiles[4];
  if (lower.includes("wasser")) return roleProfiles[5];
  if (lower.includes("kräuter")) return roleProfiles[6];
  if (lower.includes("chron") || lower.includes("quelle") || lower.includes("dokument") || lower.includes("erzähl")) return roleProfiles[7];
  if (lower.includes("material") || lower.includes("stube")) return roleProfiles[8];
  if (lower.includes("spur") || lower.includes("jäger")) return roleProfiles[9];
  if (lower.includes("kohle")) return roleProfiles[10];
  if (lower.includes("foto") || lower.includes("ablauf") || lower.includes("musik") || lower.includes("sprecher")) return roleProfiles[11];
  return defaultRoleProfile;
}

const avatarRoles = [
  {
    id: "firekeeper",
    label: "Feuerhüter:in",
    outfit: "Leinenhemd, Schürze, warmer Umhang",
    story: "Achtet auf Herd, Wärme und den Tagesbeginn.",
  },
  {
    id: "farmer",
    label: "Hofbauer:in",
    outfit: "Arbeitsgewand, Hut, grobe Schuhe",
    story: "Plant Vorrat, Tiere und Arbeit für den Hof.",
  },
  {
    id: "dairy",
    label: "Senner:in",
    outfit: "Käsetuch, Holzschüssel, Arbeitsjanker",
    story: "Verbindet Milch, Käse, Alm und Vorratswissen.",
  },
  {
    id: "craft",
    label: "Werkzeugprofi",
    outfit: "Lederband, Werkzeugtasche, Holzstaub",
    story: "Findet Reparaturspuren und Handwerksdetails.",
  },
];

const avatarScenes = ["Alter Segger Hof", "Stube", "Stall", "Mühle", "Wirtschaftshof"];
const avatarObjectOptions = ["Sense", "Mistgabel", "Milchkanne", "Ziege", "Heubündel", "Holzrechen"];

function roleHint(role: string) {
  const lower = role.toLowerCase();
  if (lower.includes("feuer")) return "Ohne Glut am Morgen dauern Essen, Wärme und Arbeit länger.";
  if (lower.includes("tier")) return "Tiere liefern Milch, Mist, Kraft und Wärme. Sie sind Teil des ganzen Hofsystems.";
  if (lower.includes("vorrat")) return "Der Winter beginnt im Herbst: trocknen, schützen, einteilen.";
  if (lower.includes("werkzeug")) return "Ein kaputtes Werkzeug stoppt oft mehr als nur eine Aufgabe.";
  if (lower.includes("spur")) return "Achte auf Dinge, die nicht in der Vitrine liegen: Wege, Spuren, Abnutzung.";
  if (lower.includes("mühl")) return "Die Mühle verbindet Feld, Wasser, Vorrat und Festtag.";
  if (lower.includes("küche")) return "In Küche und Stube treffen Wärme, Essen und Geschichten zusammen.";
  if (lower.includes("wald")) return "Wald war Ressource, Grenze, Arbeit und Konflikt zugleich.";
  if (lower.includes("foto")) return "Das beste Bild erzählt den Ort mit, nicht nur die Personen.";
  if (lower.includes("material")) return "Gute Inspiration beginnt bei Material, Funktion und Herkunft.";
  return "Dieser Hinweis gehört zuerst nur deiner Rolle. Teilt ihn erst, wenn die Gruppe ihn braucht.";
}

function miniGameForMode(modeId: string): MiniGame {
  if (modeId === "history") {
    return {
      title: "Spuren verbinden",
      instruction: "Was verbindet Wald, Wasser und Hofwirtschaft am stärksten?",
      choices: ["Holztransport", "Modeschmuck", "nur Aussicht"],
      correctChoice: "Holztransport",
      reward: "Geschichtsspur",
      knowledge: "Holz, Wasserwege und Arbeit erklären viele Verbindungen zwischen Tal, Hof und Stadt.",
    };
  }

  if (modeId === "celebration") {
    return {
      title: "Erinnerungspaket wählen",
      instruction: "Welche Kombination bringt dem Museum Zusatznutzen und bleibt hochwertig?",
      choices: ["Digitalbild + Holzlaser", "nur Wegbeschreibung", "beliebiger Filter"],
      correctChoice: "Digitalbild + Holzlaser",
      reward: "Fotopaket",
      knowledge: "Ein gutes Erinnerungsprodukt wird geteilt, gekauft und weitererzählt.",
    };
  }

  if (modeId === "inspiration") {
    return {
      title: "Detail richtig lesen",
      instruction: "Was sollte vor einer Übernahme ins eigene Haus geklärt werden?",
      choices: ["Funktion und Material", "nur Optik", "nur Trendfarbe"],
      correctChoice: "Funktion und Material",
      reward: "Handwerksspur",
      knowledge: "Historische Details wirken dann stark, wenn ihre Funktion verstanden wird.",
    };
  }

  if (modeId === "school") {
    return {
      title: "Vorräte sortieren",
      instruction: "Was gehört zuerst trocken und geschützt gelagert?",
      choices: ["Mehl und Getreide", "nasse Schuhe", "frische Zweige"],
      correctChoice: "Mehl und Getreide",
      reward: "Vorratsspiel",
      knowledge: "Lagerung war Teil der Überlebensplanung für den Winter.",
    };
  }

  return {
    title: "Butter machen",
    instruction: "Welche Reihenfolge passt am besten?",
    choices: ["Milch, Rahm, Butterfass", "Holz, Stein, Wasser", "Heu, Feuer, Tinte"],
    correctChoice: "Milch, Rahm, Butterfass",
    reward: "Butterzeichen",
    knowledge: "Lebensmittelherstellung war Handarbeit, Geduld und Wissen.",
  };
}

function finaleChoices(modeId: string) {
  if (modeId === "celebration") {
    return [
      "Fotopunkt, Ablauf und Mitnahmeprodukt gemeinsam planen",
      "Nur einen schönen Hintergrund suchen",
      "Alles erst am Veranstaltungstag entscheiden",
    ];
  }

  if (modeId === "history") {
    return [
      "Hofalltag mit Wald, Wasser, Arbeit und Rattenberg verbinden",
      "Nur Jahreszahlen auswendig lernen",
      "Die Region getrennt vom Hof betrachten",
    ];
  }

  if (modeId === "inspiration") {
    return [
      "Material, Funktion und Handwerk verstehen, bevor man etwas übernimmt",
      "Historische Details blind kopieren",
      "Nur nach schnellen Dekorationsideen suchen",
    ];
  }

  return [
    "Feuer, Tiere, Vorrat und Werkzeuge als gemeinsames System sichern",
    "Nur eine Sache retten und den Rest vergessen",
    "Warten, bis jemand anderes entscheidet",
  ];
}

export function AppClickDummy() {
  const [modeId, setModeId] = useState(clickDummyModes[0].id);
  const [missionSeed, setMissionSeed] = useState(0);
  const [stationIndex, setStationIndex] = useState(0);
  const [activeRoleIndex, setActiveRoleIndex] = useState(0);
  const [answer, setAnswer] = useState<string | null>(null);
  const [finalAnswer, setFinalAnswer] = useState<string | null>(null);
  const [miniChoice, setMiniChoice] = useState<string | null>(null);
  const [sharedHints, setSharedHints] = useState<string[]>([]);
  const [collectedRewards, setCollectedRewards] = useState<string[]>([]);
  const [wrongAttempts, setWrongAttempts] = useState(0);
  const [usedJoker, setUsedJoker] = useState(false);
  const [showFinale, setShowFinale] = useState(false);
  const [screenId, setScreenId] = useState<DummyScreen>("start");
  const [appStage, setAppStage] = useState<AppStage>("splash");
  const [setupSelectionLocked, setSetupSelectionLocked] = useState(false);
  const [setupProfileId, setSetupProfileId] = useState(groupProfiles[0].id);
  const [groupName, setGroupName] = useState(groupProfiles[0].defaultName);
  const [groupCount, setGroupCount] = useState(groupProfiles[0].defaultCount);
  const [groupAge, setGroupAge] = useState(groupProfiles[0].defaultAge);
  const [groupDuration, setGroupDuration] = useState(groupProfiles[0].defaultDuration);
  const [joinCount, setJoinCount] = useState(0);
  const [avatarRoleId, setAvatarRoleId] = useState(avatarRoles[0].id);
  const [avatarScene, setAvatarScene] = useState(avatarScenes[0]);
  const [avatarObjects, setAvatarObjects] = useState<string[]>(["Milchkanne"]);
  const [avatarGenerated, setAvatarGenerated] = useState(false);

  const setupProfile = groupProfiles.find((profile) => profile.id === setupProfileId) ?? groupProfiles[0];
  const mode = clickDummyModes.find((item) => item.id === modeId) ?? clickDummyModes[0];
  const availableMissions = useMemo(
    () => clickDummyMissions.filter((mission) => mission.modeId === modeId),
    [modeId],
  );
  const mission = availableMissions[missionSeed % availableMissions.length] ?? clickDummyMissions[0];
  const station = mission.stations[stationIndex] ?? mission.stations[0];
  const miniGame = miniGameForMode(modeId);
  const finaleOptions = finaleChoices(modeId);
  const activeRole = mission.roles[activeRoleIndex] ?? mission.roles[0];
  const missionRoleProfiles = mission.roles.map((role) => roleProfileFor(role));
  const activeRoleProfile = missionRoleProfiles[activeRoleIndex] ?? missionRoleProfiles[0] ?? defaultRoleProfile;
  const activeRoleHint = activeRoleProfile.hint || roleHint(activeRole);
  const answerIsCorrect = answer === station.correctChoice;
  const miniSolved = miniChoice === miniGame.correctChoice;
  const finalSolved = finalAnswer === finaleOptions[0];
  const safeGroupCount = Number.isFinite(groupCount) ? Math.max(1, Math.min(60, groupCount)) : setupProfile.defaultCount;
  const visibleJoinedCount = Math.min(joinCount, joinPreviewNames.length);
  const selectedAvatarRole = avatarRoles.find((role) => role.id === avatarRoleId) ?? avatarRoles[0];
  const score = Math.max(
    40,
    100 + collectedRewards.length * 15 + sharedHints.length * 4 + (miniSolved ? 15 : 0) - wrongAttempts * 5 - (usedJoker ? 10 : 0),
  );
  const passTotal = mission.stations.length + 1;
  const passCount = Math.min(collectedRewards.length + (miniSolved ? 1 : 0), passTotal);
  const progress = Math.round((passCount / passTotal) * 100);

  function resetMissionState(nextModeId = modeId, nextSeed = missionSeed) {
    setModeId(nextModeId);
    setMissionSeed(nextSeed);
    setStationIndex(0);
    setActiveRoleIndex(0);
    setAnswer(null);
    setFinalAnswer(null);
    setMiniChoice(null);
    setSharedHints([]);
    setCollectedRewards([]);
    setWrongAttempts(0);
    setUsedJoker(false);
    setShowFinale(false);
    setScreenId("start");
    setAvatarGenerated(false);
  }

  function resetForMode(nextModeId: string) {
    resetMissionState(nextModeId, 0);
  }

  function selectGroupProfile(profile: GroupProfile) {
    setSetupProfileId(profile.id);
    setSetupSelectionLocked(true);
    setGroupName(profile.defaultName);
    setGroupCount(profile.defaultCount);
    setGroupAge(profile.defaultAge);
    setGroupDuration(profile.defaultDuration);
    resetMissionState(profile.modeId, 0);
  }

  function openSetup() {
    setSetupSelectionLocked(false);
    setAppStage("setup");
  }

  function returnToLogin() {
    setSetupSelectionLocked(false);
    setAppStage("login");
  }

  function randomizeGroupName() {
    const nextName = groupNameSuggestions[(missionSeed + groupName.length + groupCount) % groupNameSuggestions.length];
    setGroupName(nextName);
  }

  function createGroup() {
    resetMissionState(setupProfile.modeId, 0);
    setJoinCount(Math.min(3, safeGroupCount));
    setAppStage("join");
  }

  function simulateJoin() {
    setJoinCount((current) => Math.min(safeGroupCount, current + Math.max(1, Math.round(safeGroupCount / 5))));
  }

  function startJoinedMission() {
    resetMissionState(setupProfile.modeId, 0);
    setAppStage("mission");
  }

  function newMission() {
    resetMissionState(modeId, missionSeed + 1);
    setAppStage("mission");
  }

  function chooseAnswer(choice: string) {
    if (!answer && choice !== station.correctChoice) {
      setWrongAttempts((value) => value + 1);
    }
    setAnswer(choice);
  }

  function completeStation() {
    if (!answer) return;
    setCollectedRewards((current) =>
      current.includes(station.reward) ? current : [...current, station.reward],
    );

    if (stationIndex + 1 >= mission.stations.length) {
      setShowFinale(true);
      setScreenId("finale");
      return;
    }

    setStationIndex((index) => index + 1);
    setAnswer(null);
    setScreenId("station");
  }

  function shareRoleHint() {
    const entry = `${activeRoleProfile.label}: ${activeRoleHint}`;
    setSharedHints((current) => (current.includes(entry) ? current : [...current, entry]));
  }

  function useJoker() {
    if (usedJoker) return;
    setUsedJoker(true);
    setSharedHints((current) => [
      ...current,
      `Guide-Hinweis: ${station.knowledge}`,
    ]);
  }

  function toggleAvatarObject(object: string) {
    setAvatarObjects((current) =>
      current.includes(object)
        ? current.filter((item) => item !== object)
        : [...current, object].slice(0, 3),
    );
    setAvatarGenerated(false);
  }

  return (
    <section id="app-dummy" className="app-dummy-section app-dummy-section--primary">
      <div className="section-heading">
        <div>
          <div className="section-kicker">Die App zum Anklicken</div>
          <h2>Hier wird aus dem Museumsbesuch ein unvergessliches Erlebnis.</h2>
        </div>
        <p>
          Der Ausschnitt zeigt den Kern: passende Route wählen, Rollen verteilen, private Hinweise
          teilen, Minispiel lösen, Gruppenscore sammeln und am Ende Wissen mitnehmen.
        </p>
      </div>

      <div className="app-dummy-layout">
        <div className="dummy-phone" aria-label="Spielbarer App-Ausschnitt">
          {appStage === "splash" ? (
            <div className="dummy-splash-screen">
              <div className="dummy-splash-visual" aria-hidden="true">
                <img className="dummy-splash-visual__main" src={publicAsset("pitch-images/schulklassenmission.png")} alt="" />
                <img className="dummy-splash-visual__mini dummy-splash-visual__mini--left" src={publicAsset("pitch-images/role-muellerkind.png")} alt="" />
                <img className="dummy-splash-visual__mini dummy-splash-visual__mini--right" src={publicAsset("pitch-images/werkstatt-am-hof.png")} alt="" />
              </div>

              <div className="dummy-splash-copy">
                <h3>
                  Eine Runde.
                  <br />
                  Viele Rollen.
                </h3>
                <p>Entdeckt Höfe, Aufgaben und Geschichten gemeinsam vor Ort.</p>
              </div>

              <div className="dummy-splash-tags" aria-hidden="true">
                <span>Route</span>
                <span>Rollen</span>
                <span>QR-Start</span>
              </div>

              <button className="dummy-splash-start" type="button" onClick={() => setAppStage("login")}>
                Starten
                <ArrowRight size={16} />
              </button>
            </div>
          ) : appStage === "login" ? (
            <div className="dummy-login-screen">
              <div className="dummy-login-hero">
                <span>Hack am Hof</span>
                <h3>Hofrunde starten</h3>
                <p>
                  Eine Person startet die Runde. Alle anderen treten per Code, QR oder NFC bei
                  und erhalten ihre Rolle.
                </p>
              </div>

              <div className="dummy-login-form">
                <button className="dummy-entry-choice" type="button" onClick={openSetup}>
                  <strong>Gruppe erstellen</strong>
                  <span>Neue Runde</span>
                  <ArrowRight size={16} />
                </button>
                <button className="dummy-entry-choice dummy-entry-choice--secondary" type="button" onClick={() => setAppStage("join")}>
                  <strong>Gruppe beitreten</strong>
                  <span>Mit Code oder QR</span>
                </button>
              </div>

              <div className="dummy-login-note">
                <QrCode size={17} />
                <p>Am Eingang, am Kassenticket oder bei der Gruppenleitung steht der Startcode.</p>
              </div>
            </div>
          ) : appStage === "setup" ? (
            <div className="dummy-audience-screen dummy-setup-screen">
              <button className="dummy-top-back" type="button" onClick={returnToLogin}>
                <ChevronLeft size={15} />
                Zurück
              </button>
              <div className="dummy-audience-top">
                <span>Gruppe erstellen</span>
                <h3>{setupSelectionLocked ? setupProfile.label : "Wer spielt heute?"}</h3>
                <p>
                  {setupSelectionLocked
                    ? (
                        <>
                          Name, Kinder, Alter und Besuchszeit festlegen.
                          <br />
                          Danach zeigt die App den Startcode.
                        </>
                      )
                    : (
                        <>
                          Wähle zuerst eine Gruppe.
                          <br />
                          Danach wird die passende Hofrunde vorbereitet.
                        </>
                      )}
                </p>
              </div>
              {!setupSelectionLocked ? (
                <div className="dummy-profile-grid">
                  {groupProfiles.map((profile) => (
                    <button
                      key={profile.id}
                      className="dummy-profile-button"
                      type="button"
                      onClick={() => selectGroupProfile(profile)}
                    >
                      <span>{profile.creator}</span>
                      <strong>{profile.label}</strong>
                      <p>{profile.description}</p>
                    </button>
                  ))}
                </div>
              ) : (
                <>
                  <div className="dummy-selected-profile">
                    <span>
                      <CheckCircle2 size={15} />
                      Ausgewählt
                    </span>
                    <strong>{setupProfile.label}</strong>
                    <p>{setupProfile.description}</p>
                    <button type="button" onClick={() => setSetupSelectionLocked(false)}>
                      Ändern
                    </button>
                  </div>

                  <div className="dummy-group-form">
                    <label>
                      Gruppenname
                      <span>
                        <input value={groupName} onChange={(event) => setGroupName(event.target.value)} />
                        <button type="button" onClick={randomizeGroupName}>
                          <Sparkles size={15} />
                        </button>
                      </span>
                    </label>
                    <div className="dummy-form-grid">
                      <label>
                        Anzahl
                        <input
                          type="number"
                          min={1}
                          max={60}
                          value={groupCount}
                          onChange={(event) => {
                            const nextCount = Number(event.target.value);
                            setGroupCount(Number.isFinite(nextCount) ? nextCount : setupProfile.defaultCount);
                          }}
                        />
                      </label>
                      <label>
                        Alter
                        <input value={groupAge} onChange={(event) => setGroupAge(event.target.value)} />
                      </label>
                      <label>
                        Dauer
                        <select value={groupDuration} onChange={(event) => setGroupDuration(event.target.value)}>
                          <option>25 Minuten</option>
                          <option>35 Minuten</option>
                          <option>45 Minuten</option>
                          <option>60 Minuten</option>
                          <option>75 Minuten</option>
                        </select>
                      </label>
                    </div>
                    <div className="dummy-join-methods">
                      <span>QR zeigen</span>
                      <span>Code nennen</span>
                      <span>NFC am Eingang</span>
                    </div>
                    <button className="dummy-create-group" type="button" onClick={createGroup}>
                      Gruppe öffnen
                      <ArrowRight size={16} />
                    </button>
                  </div>
                </>
              )}
            </div>
          ) : appStage === "join" ? (
            <div className="dummy-join-screen">
              <div className="dummy-audience-top">
                <span>Warteraum</span>
                <h3>{groupName}</h3>
                <p>
                  Zeig diesen Code am Eingang oder bei der Gruppenleitung.
                  <br />
                  Sobald alle da sind, startet die Mission.
                </p>
              </div>

              <div className="dummy-qr-card" aria-label="QR-Code Platzhalter">
                <QrCode size={86} />
                <strong>HOF-{setupProfile.id.slice(0, 3).toUpperCase()}-{safeGroupCount}</strong>
                <p>Scannen, Code eingeben oder NFC-Punkt berühren.</p>
              </div>

              <div className="dummy-join-status">
                <span>{joinCount}/{safeGroupCount} sind dabei</span>
                <div>
                  <span style={{ width: `${Math.min(100, (joinCount / safeGroupCount) * 100)}%` }} />
                </div>
                <button type="button" onClick={simulateJoin}>
                  Nächstes Handy tritt bei
                </button>
              </div>

              <div className="dummy-participant-list" aria-label="Teilnehmende Vorschau">
                {visibleJoinedCount ? (
                  <>
                    {joinPreviewNames.slice(0, visibleJoinedCount).map((name, index) => (
                      <span key={name}>
                        <CheckCircle2 size={13} />
                        {name} · {joinPreviewRoles[index]}
                      </span>
                    ))}
                    {joinCount > visibleJoinedCount ? <span>+ {joinCount - visibleJoinedCount} weitere</span> : null}
                  </>
                ) : (
                  <p>Noch wartet die Gruppe. Im Dummy kannst du den Beitritt simulieren.</p>
                )}
              </div>

              <div className="dummy-child-preview">
                <strong>Auf den Handys der {setupProfile.participants}</strong>
                <p>Rolle ziehen, ersten Hinweis lesen, Station finden und gemeinsam Hofsiegel sammeln.</p>
              </div>

              <button className="dummy-create-group" type="button" onClick={startJoinedMission}>
                Hofrunde starten
                <ArrowRight size={16} />
              </button>
              <button className="dummy-audience-back" type="button" onClick={() => setAppStage("setup")}>
                Gruppe bearbeiten
              </button>
            </div>
          ) : (
          <>
          <div className="dummy-phone__bar">
            <span>Hofrunde</span>
            <span>{score} Punkte</span>
          </div>

          <div className="dummy-phone__hero">
            <div>
              <span>{mode.label}</span>
              <h3>{mission.title}</h3>
              <p>{mission.hook}</p>
            </div>
            <button type="button" onClick={newMission}>
              <Sparkles size={16} />
              neu
            </button>
          </div>

          <div className="dummy-progress" aria-hidden="true">
            <span style={{ width: `${progress}%` }} />
          </div>

          {screenId !== "start" ? (
            <button className="dummy-screen-back" type="button" onClick={() => setScreenId("start")}>
              <ChevronLeft size={16} />
              Zurück
            </button>
          ) : null}

          {screenId === "start" && (
            <>
              <div className="dummy-kid-summary">
                <div>
                  <span>Heute</span>
                  <strong>{passCount}/{passTotal} Hofsiegel · {mission.duration}</strong>
                </div>
                <div className="dummy-role-avatars" aria-label="Rollen in dieser Mission">
                  {missionRoleProfiles.slice(0, 4).map((profile, index) => (
                    <img key={`${profile.id}-${index}`} src={profile.image} alt="" />
                  ))}
                </div>
              </div>

              <div className="dummy-start-card">
                <span>Nächster Schritt</span>
                <h3>Wähle zuerst deine Rolle.</h3>
                <p>Jedes Kind bekommt ein Bild, einen Auftrag und einen geheimen Hinweis.</p>
                <div className="dummy-start-actions">
                  <button type="button" onClick={() => setScreenId("roles")}>
                    Rolle ziehen
                  </button>
                  <button type="button" onClick={() => setScreenId("station")}>
                    Erste Station
                  </button>
                  <button type="button" onClick={() => setScreenId("photo")}>
                    Erinnerungsfoto
                  </button>
                </div>
              </div>
            </>
          )}

          {screenId === "finale" ? (
            showFinale ? (
            <div className="dummy-finale">
              <Trophy size={34} />
              <span>Gemeinsame Lösung</span>
              <h3>{mission.finale}</h3>
              <p>
                Wählt als Gruppe die Aussage, die am besten zum gesammelten Wissen passt.
              </p>
              <div className="dummy-final-options">
                {finaleOptions.map((choice) => {
                  const selected = finalAnswer === choice;
                  const correct = selected && choice === finaleOptions[0];
                  const wrong = selected && choice !== finaleOptions[0];
                  return (
                    <button
                      key={choice}
                      className={[
                        "dummy-final-choice",
                        selected ? "dummy-final-choice--selected" : "",
                        correct ? "dummy-final-choice--correct" : "",
                        wrong ? "dummy-final-choice--wrong" : "",
                      ].join(" ")}
                      type="button"
                      onClick={() => setFinalAnswer(choice)}
                    >
                      {choice}
                    </button>
                  );
                })}
              </div>
              {finalAnswer ? (
                <div className={finalSolved ? "dummy-feedback dummy-feedback--good" : "dummy-feedback"}>
                  <strong>{finalSolved ? "Genau darum geht es." : "Fast. Die App erklärt, warum eine andere Lösung stärker ist."}</strong>
                  <p>
                    Das Museum kann hier die fachliche Auflösung einspielen: kurz, verständlich und
                    immer auf freigegebenem Guide-Wissen basierend.
                  </p>
                </div>
              ) : null}
              <div className="dummy-score-card">
                <strong>Teamtitel: {score > 150 ? "Hüter der Höfe" : "Hofhelfer des Tages"}</strong>
                <span>{score} Punkte · {usedJoker ? "1 Guide-Hinweis genutzt" : "ohne Guide-Hinweis geschafft"}</span>
              </div>
              <div className="dummy-finale-product">
                <Gift size={18} />
                <p>
                  Mitnahme: digitales Gruppenbild, Hofrunden-Stempel, Holzmarke oder hochwertiges
                  Erinnerungsprodukt an der Kasse.
                </p>
              </div>
              <div className="dummy-finale__actions">
                <button type="button" onClick={newMission}>
                  Andere Route
                </button>
                <button type="button" onClick={() => resetMissionState()}>
                  Noch einmal spielen
                </button>
              </div>
            </div>
            ) : (
              <div className="dummy-finale dummy-finale--locked">
                <Trophy size={34} />
                <span>Noch gesperrt</span>
                <h3>Das Finale öffnet nach der letzten Station.</h3>
                <p>
                  Im echten Besuch kann die App je nach Zeit, Alter und Gruppengröße ein anderes
                  Finale erzeugen.
                </p>
                <button className="dummy-next" type="button" onClick={() => setScreenId("station")}>
                  Zur Station
                  <ArrowRight size={16} />
                </button>
              </div>
            )
          ) : (
            <>
              {screenId === "roles" && <section className="dummy-role-board" aria-label="Rollen und private Hinweise">
                <div className="dummy-role-board__intro">
                  <span>Rollen ziehen</span>
                  <strong>Such dir eine Rolle aus.</strong>
                  <p>Jedes Kind bekommt ein Bild, eine Aufgabe und einen geheimen Hinweis.</p>
                </div>
                <div className="dummy-role-picker">
                  {mission.roles.map((role, index) => {
                    const profile = missionRoleProfiles[index] ?? defaultRoleProfile;
                    return (
                    <button
                      key={role}
                      className={index === activeRoleIndex ? "dummy-role-button dummy-role-button--active" : "dummy-role-button"}
                      type="button"
                      onClick={() => setActiveRoleIndex(index)}
                    >
                      <img src={profile.image} alt="" />
                      <span>{profile.badge}</span>
                      <strong>{profile.label}</strong>
                    </button>
                    );
                  })}
                </div>
                <div className="dummy-private-hint dummy-private-hint--with-image">
                  <img src={activeRoleProfile.image} alt="" />
                  <div>
                    <span>Deine Rolle</span>
                    <strong>{activeRoleProfile.label}</strong>
                    <p>{activeRoleProfile.shortTask}</p>
                    <em>{activeRoleHint}</em>
                  </div>
                </div>
                <button className="dummy-share-button" type="button" onClick={shareRoleHint}>
                  Hinweis teilen
                  <ArrowRight size={15} />
                </button>
              </section>}

              {screenId === "roles" && <section className="dummy-hint-wall" aria-label="Gemeinsame Hinweiswand">
                <div>
                  <ListChecks size={16} />
                  <strong>Gemeinsame Hinweiswand</strong>
                </div>
                {sharedHints.length ? (
                  sharedHints.map((hint) => <p key={hint}>{hint}</p>)
                ) : (
                  <p>Noch leer. Die Gruppe muss entscheiden, wann ein privater Hinweis geteilt wird.</p>
                )}
              </section>}

              {screenId === "station" && <>
                <div className="dummy-mission-meta">
                  <span>
                    <QrCode size={14} />
                    Station {stationIndex + 1}/{mission.stations.length}
                  </span>
                  <span>
                    <BookOpen size={14} />
                    App ist Spielleiter
                  </span>
                </div>

                <article className="dummy-station-card">
                <div className="dummy-station-card__top">
                  <div>
                    <span>Station {stationIndex + 1}</span>
                    <h3>{station.title}</h3>
                    <p>
                      <MapPin size={14} />
                      {station.place}
                    </p>
                  </div>
                  <button
                    type="button"
                    disabled={stationIndex === 0}
                    onClick={() => {
                      setStationIndex((index) => Math.max(index - 1, 0));
                      setAnswer(null);
                    }}
                    aria-label="Vorige Station"
                  >
                    <ChevronLeft size={18} />
                  </button>
                </div>

                <strong>{station.task}</strong>
                <div className="dummy-choice-list">
                  {station.choices.map((choice) => {
                    const selected = answer === choice;
                    const correct = selected && choice === station.correctChoice;
                    const wrong = selected && choice !== station.correctChoice;
                    return (
                      <button
                        key={choice}
                        className={[
                          "dummy-choice",
                          selected ? "dummy-choice--selected" : "",
                          correct ? "dummy-choice--correct" : "",
                          wrong ? "dummy-choice--wrong" : "",
                        ].join(" ")}
                        type="button"
                        onClick={() => chooseAnswer(choice)}
                      >
                        {choice}
                        {correct ? <CheckCircle2 size={16} /> : null}
                        {wrong ? <XCircle size={16} /> : null}
                      </button>
                    );
                  })}
                </div>

                {answer ? (
                  <div className={answerIsCorrect ? "dummy-feedback dummy-feedback--good" : "dummy-feedback"}>
                    <strong>{answerIsCorrect ? "Passt." : "Auch spannend, aber hier zählt etwas anderes."}</strong>
                    <p>{station.knowledge}</p>
                  </div>
                ) : null}

                <div className="dummy-joker">
                  <button type="button" disabled={usedJoker} onClick={useJoker}>
                    <CircleHelp size={16} />
                    {usedJoker ? "Guide-Hinweis genutzt" : "Guide-Hinweis holen"}
                  </button>
                  <span>{usedJoker ? "-10 Punkte, aber motivierend erklärt" : "1 Joker für die Gruppe"}</span>
                </div>

                <button className="dummy-next" type="button" disabled={!answer} onClick={completeStation}>
                  {stationIndex + 1 >= mission.stations.length ? "Abschluss öffnen" : "Nächste Station"}
                  <ArrowRight size={16} />
                </button>
              </article>
              </>}

              {screenId === "mini" && <section className="dummy-minigame" aria-label="Kurzes Minispiel">
                <div>
                  <RefreshCw size={18} />
                  <strong>{miniGame.title}</strong>
                </div>
                <p>{miniGame.instruction}</p>
                <div className="dummy-mini-options">
                  {miniGame.choices.map((choice) => (
                    <button
                      key={choice}
                      className={miniChoice === choice ? "dummy-choice dummy-choice--selected" : "dummy-choice"}
                      type="button"
                      onClick={() => setMiniChoice(choice)}
                    >
                      {choice}
                    </button>
                  ))}
                </div>
                {miniChoice ? (
                  <div className={miniSolved ? "dummy-feedback dummy-feedback--good" : "dummy-feedback"}>
                    <strong>{miniSolved ? `+15 Punkte: ${miniGame.reward}` : "Knapp daneben."}</strong>
                    <p>{miniGame.knowledge}</p>
                  </div>
                ) : null}
              </section>}

              {screenId === "photo" && <section className="dummy-photo-lab" aria-label="KI-Foto und Avatar">
                <div className="dummy-photo-lab__hero">
                  <Camera size={18} />
                  <div>
                    <span>Erinnerungsbild</span>
                    <strong>Du im historischen Hof</strong>
                    <p>Wähle Rolle, Ort und Gegenstände. Die App erzeugt daraus ein Bild im Stil der Bauernhöfe.</p>
                  </div>
                </div>

                <div className="dummy-photo-preview">
                  <img src={publicAsset("pitch-images/ki-charaktere-souvenir.png")} alt="" />
                  <div className="dummy-photo-preview__overlay">
                    <span>{avatarGenerated ? "KI-Entwurf fertig" : "Foto-Vorschau"}</span>
                    <strong>{selectedAvatarRole.label} am {avatarScene}</strong>
                    <p>{avatarObjects.length ? avatarObjects.join(" · ") : "ohne Zusatzgegenstand"}</p>
                  </div>
                </div>

                <div className="dummy-avatar-picker">
                  <span>Rolle</span>
                  <div>
                    {avatarRoles.map((role) => (
                      <button
                        key={role.id}
                        className={avatarRoleId === role.id ? "dummy-avatar-chip dummy-avatar-chip--active" : "dummy-avatar-chip"}
                        type="button"
                        onClick={() => {
                          setAvatarRoleId(role.id);
                          setAvatarGenerated(false);
                        }}
                      >
                        {role.label}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="dummy-avatar-picker">
                  <span>Hofkulisse</span>
                  <div>
                    {avatarScenes.map((scene) => (
                      <button
                        key={scene}
                        className={avatarScene === scene ? "dummy-avatar-chip dummy-avatar-chip--active" : "dummy-avatar-chip"}
                        type="button"
                        onClick={() => {
                          setAvatarScene(scene);
                          setAvatarGenerated(false);
                        }}
                      >
                        {scene}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="dummy-avatar-picker">
                  <span>Gegenstände hinzufügen</span>
                  <div>
                    {avatarObjectOptions.map((object) => (
                      <button
                        key={object}
                        className={avatarObjects.includes(object) ? "dummy-avatar-chip dummy-avatar-chip--active" : "dummy-avatar-chip"}
                        type="button"
                        onClick={() => toggleAvatarObject(object)}
                      >
                        {object}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="dummy-avatar-result">
                  <WandSparkles size={17} />
                  <div>
                    <strong>{selectedAvatarRole.outfit}</strong>
                    <p>{selectedAvatarRole.story}</p>
                  </div>
                </div>

                <button className="dummy-next" type="button" onClick={() => setAvatarGenerated(true)}>
                  Historisches Bild erzeugen
                  <Sparkles size={16} />
                </button>

                {avatarGenerated ? (
                  <div className="dummy-photo-output">
                    <span>Digital speichern</span>
                    <span>Druck an der Kasse</span>
                    <span>Holzlaser</span>
                    <span>Glasgravur</span>
                  </div>
                ) : (
                  <div className="dummy-photo-upload-hint">
                    <ImagePlus size={16} />
                    <span>Im echten Ablauf würde hier ein Foto aufgenommen oder aus der Galerie gewählt.</span>
                  </div>
                )}
              </section>}

              {(screenId === "station" || screenId === "mini" || screenId === "photo") && <div className="dummy-reward-row">
                <Gift size={16} />
                {collectedRewards.length ? collectedRewards.join(" · ") : "Noch kein Sammelzeichen"}
              </div>}
            </>
          )}
          </>
          )}
        </div>

        <div className="dummy-explainer">
          <span>{mode.title}</span>
          <h3>{mode.description}</h3>
          <p>{mode.benefit}</p>
          <div className="dummy-explainer__grid">
            <article>
              <strong>Rollen statt Einzelspieler</strong>
              <p>Jede Person bekommt einen privaten Hinweis. Erst durch Teilen entsteht die Lösung.</p>
            </article>
            <article>
              <strong>Score als Teamwappen</strong>
              <p>Die Gruppe sammelt gemeinsam Punkte, Hofsiegel und Titel. Keine Bloßstellung, kein Einzelranking.</p>
            </article>
            <article>
              <strong>Hofrunde & Saisonkarte</strong>
              <p>Digitale Missionen können mit Stempelpass, Holzmarken, Saisonabzeichen und Eventeinladungen verbunden werden.</p>
            </article>
            <article>
              <strong>Kurze Minispiele</strong>
              <p>30 bis 90 Sekunden: Vorräte sortieren, Butter machen, Spuren verbinden oder Feuer sichern.</p>
            </article>
            <article>
              <strong>Im Klickdummy simuliert</strong>
              <p>QR-Code, NFC und mehrere Kinderhandys werden hier als Beitrittsliste gezeigt. Im Pilot wäre das ein echter Gruppenraum.</p>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}
