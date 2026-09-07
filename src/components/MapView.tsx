import {
  AdvancedMarker,
  APIProvider,
  InfoWindow,
  Map,
  useMap,
} from "@vis.gl/react-google-maps";
import { useEffect } from "react";

import {
  DRIVER_STATUSES,
  MAP_CENTER,
  MAP_ZOOM,
  type Driver,
  type DriverStatus,
} from "../constants";

const API_KEY = import.meta.env.VITE_GOOGLE_MAPS_API_KEY as string | undefined;
const MAP_ID = import.meta.env.VITE_GOOGLE_MAPS_ID as string | undefined;

/** سيارة من أعلى — تتلوّن حسب حالة السائق وتدور حسب اتجاه سيرها */
function CarPin({
  status,
  heading = 0,
  isSelected = false,
}: {
  status: DriverStatus;
  heading?: number;
  isSelected?: boolean;
}) {
  const color = DRIVER_STATUSES[status].color;

  return (
    <span className="relative grid place-items-center">
      {/* حلقة نابضة تشير للسيارة المختارة */}
      {isSelected && (
        <>
          <span
            className="absolute size-14 animate-ping rounded-full opacity-40"
            style={{ backgroundColor: color }}
          />
          <span
            className="absolute size-11 rounded-full border-2 opacity-90"
            style={{ borderColor: color, backgroundColor: "#ffffff59" }}
          />
        </>
      )}

    <svg
      width="22"
      height="34"
      viewBox="0 0 22 34"
      aria-hidden="true"
      style={{ transform: `rotate(${heading}deg)`, filter: "drop-shadow(0 1px 2px rgb(0 0 0 / .35))" }}
    >
      {/* هيكل السيارة */}
      <rect
        x="2"
        y="1"
        width="18"
        height="32"
        rx="6"
        fill={color}
        stroke="#fff"
        strokeWidth="1.5"
      />
      {/* الزجاج الأمامي والخلفي */}
      <path d="M5.5 8.5c1.8-1.2 9.2-1.2 11 0l-1 3h-9l-1-3Z" fill="#fff" opacity=".85" />
      <path d="M4.5 26c1.8 1.2 11.2 1.2 13 0l-1-3h-11l-1 3Z" fill="#fff" opacity=".55" />
      {/* السقف */}
      <rect x="6" y="13" width="10" height="8" rx="2" fill="#fff" opacity=".25" />
      </svg>
    </span>
  );
}

/** أزرار التحكم — بديل واجهة Google الافتراضية */
function MapControls() {
  const map = useMap();

  const zoomBy = (delta: number) => {
    if (!map) return;
    map.setZoom((map.getZoom() ?? MAP_ZOOM) + delta);
  };

  return (
    <>
      <div className="absolute top-3 inset-e-3 z-10 flex flex-col gap-1.5">
        <button
          onClick={() => zoomBy(1)}
          className="grid size-9 place-items-center rounded-lg bg-white text-lg text-heading shadow-md hover:bg-slate-50"
          aria-label="تكبير"
        >
          +
        </button>
        <button
          onClick={() => zoomBy(-1)}
          className="grid size-9 place-items-center rounded-lg bg-white text-lg text-heading shadow-md hover:bg-slate-50"
          aria-label="تصغير"
        >
          −
        </button>
      </div>

      <div className="absolute bottom-14 inset-s-3 z-10 flex flex-col gap-2">
        <button
          onClick={() => map?.panTo(MAP_CENTER)}
          className="grid size-9 place-items-center rounded-full bg-white text-heading shadow-md hover:bg-slate-50"
          aria-label="العودة لمركز الخريطة"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <circle cx="12" cy="12" r="4" fill="currentColor" />
            <circle cx="12" cy="12" r="8" stroke="currentColor" strokeWidth="1.6" />
            <path d="M12 1v3m0 16v3M1 12h3m16 0h3" stroke="currentColor" strokeWidth="1.6" />
          </svg>
        </button>

        <button
          onClick={() => map?.setHeading(0)}
          className="grid size-9 place-items-center rounded-full bg-white shadow-md hover:bg-slate-50"
          aria-label="إعادة توجيه الخريطة للشمال"
        >
          <img src="/icons/compass.svg" alt="" width="12" height="20" />
        </button>
      </div>
    </>
  );
}

interface LayerProps {
  drivers: Driver[];
  selected: Driver | null;
  onSelect: (driver: Driver | null) => void;
}

/** يحرّك الخريطة نحو السائق المختار */
function PanToSelected({ selected }: { selected: Driver | null }) {
  const map = useMap();

  useEffect(() => {
    if (!map || !selected) return;
    map.panTo(selected.position);
  }, [map, selected]);

  return null;
}

function DriverLayer({ drivers, selected, onSelect }: LayerProps) {
  return (
    <>
      {drivers.map((driver) => (
        <AdvancedMarker
          key={driver.id}
          position={driver.position}
          onClick={() => onSelect(driver)}
          title={driver.name}
          zIndex={driver.id === selected?.id ? 10 : 1}
        >
          <CarPin
            status={driver.status}
            isSelected={driver.id === selected?.id}
          />
        </AdvancedMarker>
      ))}

      {selected && (
        <InfoWindow
          position={selected.position}
          onCloseClick={() => onSelect(null)}
          pixelOffset={[0, -26]}
          headerDisabled
        >
          <div className="min-w-48 px-1 py-0.5 text-end">
            <p className="text-sm font-semibold text-heading">
              {selected.name} · <span dir="ltr">{selected.plate}</span>
            </p>
            {selected.note && (
              <p className="mt-1 text-xs text-body">{selected.note}</p>
            )}
            <p className="mt-1 flex items-center justify-end gap-1.5 text-xs text-body">
              {DRIVER_STATUSES[selected.status].label}
              <span
                className="size-2 rounded-full"
                style={{ backgroundColor: DRIVER_STATUSES[selected.status].color }}
              />
            </p>
          </div>
        </InfoWindow>
      )}

      <PanToSelected selected={selected} />
    </>
  );
}

function MapView({ drivers, selected, onSelect }: LayerProps) {
  if (!API_KEY) {
    return (
      <div className="absolute inset-0 grid place-items-center p-6 text-center text-sm text-body">
        <span>
          أضف <code className="font-mono">VITE_GOOGLE_MAPS_API_KEY</code> في ملف{" "}
          <code className="font-mono">.env</code> لتفعيل الخريطة
        </span>
      </div>
    );
  }

  return (
    <APIProvider apiKey={API_KEY} language="ar" region="SA">
      <Map
        defaultCenter={MAP_CENTER}
        defaultZoom={MAP_ZOOM}
        mapId={MAP_ID}
        disableDefaultUI
        gestureHandling="greedy"
        className="size-full"
      >
        <DriverLayer drivers={drivers} selected={selected} onSelect={onSelect} />
        <MapControls />
      </Map>

      {!MAP_ID && (
        <p className="absolute inset-x-3 top-3 z-20 rounded-lg bg-amber-100 px-3 py-2 text-xs text-amber-900 shadow">
          لم يُقرأ <code className="font-mono">VITE_GOOGLE_MAPS_ID</code> — بدونه
          لا تظهر علامات السيارات.
        </p>
      )}
    </APIProvider>
  );
}

export default MapView;
