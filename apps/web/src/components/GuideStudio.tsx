import { useState } from "react";
import { FileAudio, FileText, FolderTree, Mic, UploadCloud } from "lucide-react";
import { contentCollections, historicalThemes } from "../data/contentStudio";

const guideStudioSteps = ["sammeln", "prüfen", "strukturieren", "freigeben", "nutzen"];
const sourceStatusItems = [
  { label: "Quelle", value: "Dokument / Guide / Objekt" },
  { label: "Status", value: "geprüft vor Veröffentlichung" },
  { label: "Freigabe", value: "Kinder, Gruppen, öffentlich" },
];

export function GuideStudio() {
  const [selectedCollection, setSelectedCollection] = useState(contentCollections[0].id);
  const [storyText, setStoryText] = useState(
    "Im Winter war nicht ein einzelner Gegenstand entscheidend, sondern das Zusammenspiel aus Feuer, Vorrat, Tieren und Werkzeugen.",
  );
  const active = contentCollections.find((item) => item.id === selectedCollection) ?? contentCollections[0];

  return (
    <section id="studio" className="guide-studio" aria-labelledby="guide-studio-title">
      <div className="section-heading">
        <div>
          <div className="section-kicker">Wissenssammlung / Guide Studio</div>
          <h2 id="guide-studio-title">Sammeln, ordnen, freigeben: eine Wissensbasis für alle Erlebnisse.</h2>
        </div>
        <p>
          Das Guide Studio ist die praktische Fortsetzung des Prozesses: Dokumente, Audio,
          Fotos und Geschichten werden nach Hof, Gebäude, Raum, Areal oder Objekt sortiert.
        </p>
      </div>

      <ol className="guide-process" aria-label="Guide-Studio-Prozess">
        {guideStudioSteps.map((step) => (
          <li key={step}>{step}</li>
        ))}
      </ol>

      <div className="guide-grid">
        <div className="collection-list" aria-label="Sammlungen">
          {contentCollections.map((collection) => (
            <button
              key={collection.id}
              className={collection.id === selectedCollection ? "collection-item collection-item--active" : "collection-item"}
              onClick={() => setSelectedCollection(collection.id)}
            >
              <FolderTree size={17} />
              <span>{collection.title}</span>
            </button>
          ))}
        </div>

        <div className="guide-editor">
          <div className="guide-editor__header">
            <div>
              <span>{active.scope}</span>
              <h3>{active.title}</h3>
              <p>{active.description}</p>
            </div>
          </div>

          <div className="example-row">
            {active.examples.map((example) => (
              <span key={example}>{example}</span>
            ))}
          </div>

          <div className="upload-row">
            <label>
              <input type="file" accept=".pdf,.doc,.docx,.txt,.md,image/*" />
              <UploadCloud size={18} />
              Dokument hochladen
            </label>
            <button type="button">
              <Mic size={18} />
              Geschichte einsprechen
            </button>
          </div>

          <label className="story-field">
            <span>Kurzgeschichte / Guide-Notiz</span>
            <textarea value={storyText} onChange={(event) => setStoryText(event.target.value)} />
          </label>

          <div className="source-policy">
            <FileText size={18} />
            <p>
              Jede Aussage bekommt später Quelle, Freigabe, Unsicherheitsgrad und Altersstufe.
              Neue Erlebnisvarianten entstehen nur aus geprüftem Museumswissen.
            </p>
          </div>
          <div className="source-status-grid" aria-label="Quellenstatus">
            {sourceStatusItems.map((item) => (
              <article key={item.label}>
                <span>{item.label}</span>
                <strong>{item.value}</strong>
              </article>
            ))}
          </div>
        </div>

        <div className="history-panel">
          <div className="history-panel__title">
            <FileAudio size={18} />
            Historische Themen für Erlebnisse
          </div>
          {historicalThemes.map((theme) => (
            <article key={theme.id}>
              <span>{theme.period}</span>
              <h3>{theme.title}</h3>
              <p>{theme.summary}</p>
              <strong>{theme.uxHook}</strong>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
