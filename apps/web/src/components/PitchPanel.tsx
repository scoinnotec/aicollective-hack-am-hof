import { ArrowRight, BusFront, CheckCircle2, Layers, Share2, Smartphone } from "lucide-react";
import { proofPoints } from "../data/platform";

export function PitchPanel() {
  return (
    <aside className="pitch-panel">
      <div className="pitch-panel__label">Demo zuerst</div>
      <h2>Der Pilot ist als Browser-Erlebnis greifbar.</h2>
      <p>Rollen, QR-Start, Hofwissen und Feedback werden im Klickdummy direkt nachvollziehbar.</p>

      <div className="pitch-panel__demo">
        <Smartphone size={20} />
        <div>
          <strong>Erste Hofrunde</strong>
          <span>4-5 Stationen, Guide-Wissen, echte Testgruppe</span>
        </div>
      </div>

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

      <a className="pitch-link" href="#app-dummy">
        Demo ansehen <ArrowRight size={16} />
      </a>
    </aside>
  );
}
