import { useMemo, useState } from "react";
import { Camera, ImagePlus, Sparkles } from "lucide-react";
import { missionRoles } from "../data/platform";

function publicAsset(path: string) {
  return `${import.meta.env.BASE_URL}${path}`;
}

const avatarSceneOptions = ["Alter Segger Hof", "Stube", "Stall", "Mühle", "Wirtschaftshof"];
const avatarObjectOptions = ["Sense", "Mistgabel", "Milchkanne", "Ziege", "Heubündel", "Holzrechen"];

export function AvatarLab() {
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [roleId, setRoleId] = useState(missionRoles[0].id);
  const [scene, setScene] = useState(avatarSceneOptions[0]);
  const [objects, setObjects] = useState<string[]>(["Milchkanne"]);
  const [generated, setGenerated] = useState(false);
  const role = useMemo(
    () => missionRoles.find((item) => item.id === roleId) ?? missionRoles[0],
    [roleId],
  );

  function handleFile(file: File | undefined) {
    if (!file) return;
    const url = URL.createObjectURL(file);
    setPreviewUrl((old) => {
      if (old) URL.revokeObjectURL(old);
      return url;
    });
    setGenerated(false);
  }

  function toggleObject(object: string) {
    setObjects((current) =>
      current.includes(object)
        ? current.filter((item) => item !== object)
        : [...current, object].slice(0, 3),
    );
    setGenerated(false);
  }

  return (
    <section className="avatar-lab" aria-labelledby="avatar-title">
      <div>
        <div className="section-kicker">KI-Avatar-Modul</div>
        <h2 id="avatar-title">Aus Foto wird historische Erinnerung</h2>
        <p>
          Besucher:innen laden ein Foto hoch oder wählen einen Hof-Fotopunkt. Daraus entsteht
          ein historischer Avatar im Ambiente der Bauernhöfe. Gegenstände wie Sense, Mistgabel,
          Tiere oder Milchkanne können digital ergänzt werden.
        </p>
      </div>

      <div className="avatar-grid">
        <label className="upload-tile">
          <input
            type="file"
            accept="image/*"
            onChange={(event) => handleFile(event.target.files?.[0])}
          />
          <span className="upload-preview">
            {previewUrl ? <img src={previewUrl} alt="Lokale Foto-Vorschau" /> : <ImagePlus size={32} />}
          </span>
          <span>Foto lokal auswählen</span>
          <small>Das Foto bleibt in dieser Ansicht lokal.</small>
        </label>

        <div className="avatar-card">
          <div className="avatar-card__header">
            <Sparkles size={18} />
            <span>KI-Entwurf im Besucherflow</span>
          </div>
          <div className="avatar-card__portrait">
            {previewUrl ? (
              <img src={previewUrl} alt="Avatar-Quelle" />
            ) : (
              <img src={publicAsset("pitch-images/ki-charaktere-souvenir.png")} alt="" />
            )}
            <div className="avatar-card__costume">
              <Camera size={14} />
              {generated ? "historischer Avatar erzeugt" : "Foto + Hofkulisse"}
            </div>
          </div>

          <div className="avatar-controls">
            <label>
              Rolle
              <select
                value={roleId}
                onChange={(event) => {
                  setRoleId(event.target.value);
                  setGenerated(false);
                }}
              >
                {missionRoles.map((item) => (
                  <option key={item.id} value={item.id}>
                    {item.name}
                  </option>
                ))}
              </select>
            </label>
            <label>
              Hofkulisse
              <select
                value={scene}
                onChange={(event) => {
                  setScene(event.target.value);
                  setGenerated(false);
                }}
              >
                {avatarSceneOptions.map((item) => (
                  <option key={item} value={item}>
                    {item}
                  </option>
                ))}
              </select>
            </label>
          </div>

          <div className="avatar-object-row" aria-label="Digitale Gegenstände">
            {avatarObjectOptions.map((object) => (
              <button
                key={object}
                className={objects.includes(object) ? "is-active" : ""}
                type="button"
                onClick={() => toggleObject(object)}
              >
                {object}
              </button>
            ))}
          </div>

          <button className="avatar-generate-button" type="button" onClick={() => setGenerated(true)}>
            <Sparkles size={16} />
            Historisches Bild erzeugen
          </button>

          <p>
            <strong>{role.name} am {scene}:</strong> {role.description}
          </p>
          <p className="avatar-hint">{role.privateHint}</p>
          <div className="avatar-hint">
            Digital ergänzt: {objects.length ? objects.join(", ") : "keine Gegenstände ausgewählt"}.
          </div>
          <div className="avatar-hint">
            Ausgabe: Digitalgalerie, Erinnerungsdruck an der Kasse, Holzlaser,
            Glasgravur oder antik wirkender Holzrahmen.
          </div>
        </div>
      </div>
    </section>
  );
}
