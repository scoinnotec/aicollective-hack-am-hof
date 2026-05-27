import { CRS, DivIcon } from "leaflet";
import { ImageOverlay, MapContainer, Marker, Polyline, Popup, useMap } from "react-leaflet";
import type { AudienceMode, MapPoint } from "../../data/platform";
import { mapBounds, pointToLatLng, routePath, typeColor } from "../../data/platform";
import { useEffect } from "react";

export type MapVariant = "original" | "historical" | "leaflet";

interface MuseumMapProps {
  mode: AudienceMode;
  mapVariant: MapVariant;
  points: MapPoint[];
  selectedPointId: string | null;
  onSelectPoint: (point: MapPoint) => void;
}

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/"/g, "&quot;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}

function createMarker(point: MapPoint, selected: boolean) {
  const color = typeColor(point.type);
  const size = point.type === "hof" ? 20 : 30;
  const label = escapeHtml(point.title);
  return new DivIcon({
    className: "",
    html: `
      <span class="map-marker map-marker--${point.type} ${selected ? "map-marker--selected" : ""}" style="--marker-color:${color}">
        <span class="map-marker__dot" aria-hidden="true"></span>
        <span class="sr-only">${label}</span>
      </span>
    `,
    iconSize: [size, size],
    iconAnchor: [size / 2, size / 2],
  });
}

function FitImageBounds() {
  const map = useMap();
  useEffect(() => {
    map.fitBounds(mapBounds, { padding: [10, 10] });
  }, [map]);
  return null;
}

export function MuseumMap({ mode, mapVariant, points, selectedPointId, onSelectPoint }: MuseumMapProps) {
  const showRoute = mode === "school" || mapVariant !== "original";
  const mapImageUrl = `${import.meta.env.BASE_URL}lageplan.webp`;

  return (
    <MapContainer
      key={mapVariant}
      crs={CRS.Simple}
      bounds={mapBounds}
      minZoom={-1.2}
      maxZoom={2}
      zoomSnap={0.25}
      className={`museum-map museum-map--${mapVariant}`}
      attributionControl={false}
      scrollWheelZoom={false}
    >
      <FitImageBounds />
      <ImageOverlay url={mapImageUrl} bounds={mapBounds} />
      {showRoute && (
        <Polyline
          positions={routePath}
          pathOptions={{ color: "#1d6b57", weight: 4, opacity: 0.72, dashArray: "8 8" }}
        />
      )}
      {points.map((point) => (
        <Marker
          key={point.id}
          position={pointToLatLng(point)}
          icon={createMarker(point, selectedPointId === point.id)}
          title={point.title}
          alt={point.title}
          eventHandlers={{
            click: () => onSelectPoint(point),
          }}
        >
          <Popup>
            <strong>{point.title}</strong>
            <br />
            {point.subtitle}
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
}
