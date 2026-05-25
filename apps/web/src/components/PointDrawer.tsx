import { AlertTriangle, CheckCircle2, CircleDot, Printer, Sparkles, X } from "lucide-react";
import type { MapPoint } from "../data/platform";
import { mapPointTypeLabels, typeColor, typeIcons } from "../data/platform";

interface PointDrawerProps {
  point: MapPoint | null;
  onClose: () => void;
  onOpen?: () => void;
}

export function PointDrawer({ point, onClose, onOpen }: PointDrawerProps) {
  if (!point) {
    return (
      <div className="point-drawer point-drawer--empty">
        <CircleDot size={18} />
        <div>
          <strong>Wähle einen Punkt auf der Karte.</strong>
          <span>Die Details wechseln je nach Zielgruppenmodus.</span>
        </div>
      </div>
    );
  }

  const Icon = typeIcons[point.type];
  const color = typeColor(point.type);

  return (
    <div className="point-drawer">
      <button className="icon-button" onClick={onClose} aria-label="Detail schließen">
        <X size={16} />
      </button>
      <div className="point-drawer__top">
        <div className="point-icon" style={{ background: color }}>
          <Icon size={18} />
        </div>
        <div>
          <span>{mapPointTypeLabels[point.type]}</span>
          <h3>{point.title}</h3>
          <p>{point.subtitle}</p>
        </div>
      </div>
      <p className="point-description">{point.description}</p>
      {point.details && (
        <div className="point-section">
          <strong>Hof- und Standortwissen</strong>
          <ul>
            {point.details.map((detail) => (
              <li key={detail}>{detail}</li>
            ))}
          </ul>
        </div>
      )}
      {point.eventInfo && (
        <div className="point-section point-section--event">
          <strong>{point.eventInfo.title}</strong>
          <ul>
            {point.eventInfo.bullets.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          {point.eventInfo.cta && <span className="point-cta">{point.eventInfo.cta}</span>}
        </div>
      )}
      {point.photoStudio && (
        <div className="point-section point-section--photo">
          <strong>
            <Sparkles size={15} />
            {point.photoStudio.title}
          </strong>
          <p>{point.photoStudio.description}</p>
          <div className="print-row">
            <Printer size={15} />
            {point.photoStudio.options.join(" · ")}
          </div>
        </div>
      )}
      <div className="tag-row">
        {point.tags.map((tag) => (
          <span key={tag}>{tag}</span>
        ))}
      </div>
      {onOpen && (
        <button className="point-drawer__open" type="button" onClick={onOpen}>
          Pitch-Popup öffnen
        </button>
      )}
      {(point.status || point.priority) && (
        <div className="status-row">
          {point.status && (
            <span>
              <CheckCircle2 size={15} />
              Status: {point.status}
            </span>
          )}
          {point.priority && (
            <span className={point.priority === "high" ? "status-row__danger" : ""}>
              <AlertTriangle size={15} />
              Priorität: {point.priority}
            </span>
          )}
        </div>
      )}
    </div>
  );
}
