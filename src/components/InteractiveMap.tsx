import { useEffect, useRef, useState } from "react";
import mapboxgl from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import { MapPin } from "lucide-react";

const InteractiveMap = () => {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<mapboxgl.Map | null>(null);
  const [mapboxToken, setMapboxToken] = useState("");

  // Cities where Raido operates
  const cities = [
    { name: "Karachi", coordinates: [67.0011, 24.8607] },
    { name: "Lahore", coordinates: [74.3436, 31.5204] },
    { name: "Islamabad", coordinates: [73.0479, 33.6844] },
  ];

  useEffect(() => {
    if (!mapContainer.current || !mapboxToken) return;

    mapboxgl.accessToken = mapboxToken;

    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: "mapbox://styles/mapbox/dark-v11",
      center: [69.3451, 30.3753], // Center of Pakistan
      zoom: 5,
      pitch: 45,
    });

    map.current.addControl(new mapboxgl.NavigationControl(), "top-right");
    map.current.scrollZoom.disable();

    // Add animated markers for each city
    cities.forEach((city, index) => {
      const el = document.createElement("div");
      el.className = "animate-pulse";
      el.innerHTML = `
        <div class="relative">
          <div class="absolute -inset-2 bg-primary/30 rounded-full animate-ping"></div>
          <div class="relative w-8 h-8 bg-primary rounded-full flex items-center justify-center shadow-lg">
            <svg class="w-5 h-5 text-primary-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
            </svg>
          </div>
        </div>
      `;

      const popup = new mapboxgl.Popup({ offset: 25 }).setHTML(
        `<div class="text-center p-2">
          <h3 class="font-bold text-primary">${city.name}</h3>
          <p class="text-sm text-muted-foreground">Service Available</p>
        </div>`
      );

      new mapboxgl.Marker(el)
        .setLngLat(city.coordinates as [number, number])
        .setPopup(popup)
        .addTo(map.current!);

      // Show popup with delay
      setTimeout(() => {
        popup.addTo(map.current!);
      }, 1000 + index * 500);
    });

    return () => {
      map.current?.remove();
    };
  }, [mapboxToken]);

  return (
    <section className="py-20 px-4 bg-accent/5">
      <div className="container mx-auto">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-primary">
            Service Availability
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Currently serving major cities across Pakistan with plans to expand nationwide
          </p>
        </div>

        {!mapboxToken ? (
          <div className="max-w-md mx-auto mb-8 p-6 bg-card rounded-lg border border-border">
            <label htmlFor="mapbox-token" className="block text-sm font-medium mb-2">
              Enter Mapbox Public Token
            </label>
            <input
              id="mapbox-token"
              type="text"
              placeholder="pk.eyJ1Ij..."
              className="w-full px-4 py-2 rounded-md border border-input bg-background mb-4"
              onChange={(e) => setMapboxToken(e.target.value)}
            />
            <p className="text-xs text-muted-foreground">
              Get your token from{" "}
              <a
                href="https://account.mapbox.com/access-tokens/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                mapbox.com
              </a>
            </p>
          </div>
        ) : null}

        <div className="relative max-w-5xl mx-auto animate-fade-in animate-delay-200">
          <div
            ref={mapContainer}
            className="w-full h-[500px] rounded-2xl shadow-2xl border-2 border-primary/20 overflow-hidden"
          />
          
          {/* City badges */}
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            {cities.map((city, index) => (
              <div
                key={city.name}
                className="flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full border border-primary/20 animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <MapPin className="w-4 h-4 text-primary" />
                <span className="font-medium text-foreground">{city.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default InteractiveMap;
