import { ArrowRight, BusFront, CheckCircle2, Layers, Share2, Smartphone } from "lucide-react";
import { proofPoints } from "../data/platform";

export function PitchPanel() {
  return (
    <aside className="pitch-panel">
      <div className="pitch-panel__label">Entscheidungsvorschlag</div>
      <h2>Ziel: Pilot freigeben.</h2>
      <p>Museum, Tourismus, Gasthaus und Partner sehen eine konkrete nächste Ausbaustufe.</p>

      <div className="proof-grid">
        {proofPoints.map((point) => (
          <div key={point.label}>
            <span>{point.label}</span>
            <strong>{point.value}</strong>
          </div>
        ))}
      </div>

      <ul className="pitch-list">
        <li>
          <CheckCircle2 size={17} />
          Inhalte werden modular nutzbar.
        </li>
        <li>
          <Layers size={17} />
          Jede Zielgruppe erhält eigene Layer.
        </li>
        <li>
          <Smartphone size={17} />
          Start im Browser ist möglich.
        </li>
        <li>
          <Share2 size={17} />
          Fotos erzeugen Reichweite.
        </li>
        <li>
          <BusFront size={17} />
          Rattenberg wird Zubringer.
        </li>
      </ul>

      <a className="pitch-link" href="#demo">
        Karte ansehen <ArrowRight size={16} />
      </a>
    </aside>
  );
}
