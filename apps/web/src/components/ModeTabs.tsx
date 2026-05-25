import type { AudienceMode } from "../data/platform";
import { audiences } from "../data/platform";
import type { CSSProperties } from "react";

interface ModeTabsProps {
  activeMode: AudienceMode;
  onChange: (mode: AudienceMode) => void;
}

export function ModeTabs({ activeMode, onChange }: ModeTabsProps) {
  return (
    <div className="mode-tabs" role="tablist" aria-label="Zielgruppenmodus">
      {audiences.map((audience) => {
        const Icon = audience.icon;
        const active = activeMode === audience.id;
        return (
          <button
            key={audience.id}
            className={active ? "mode-tab mode-tab--active" : "mode-tab"}
            onClick={() => onChange(audience.id)}
            style={{ "--mode-color": audience.accent } as CSSProperties}
            role="tab"
            aria-selected={active}
          >
            <Icon size={18} />
            <span>{audience.shortTitle}</span>
          </button>
        );
      })}
    </div>
  );
}
