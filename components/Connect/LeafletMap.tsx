"use client";

import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import { useEffect } from "react";

// Fix for default marker icon in Next.js
const icon = L.icon({
    iconUrl: "/marker-icon.png",
    shadowUrl: "/marker-shadow.png",
    iconSize: [25, 41],
    iconAnchor: [12, 41],
});
// Since we might not have these assets locally, let's use CDN for marker icons or just rely on Leaflet defaults and fix the import issue.
// A common fix is deleting the _getIconUrl property from L.Icon.Default.prototype.

export default function LeafletMap() {
    useEffect(() => {
        // Fix Leaflet's default icon path issues in webpack/Next.js
        // @ts-ignore
        delete L.Icon.Default.prototype._getIconUrl;
        L.Icon.Default.mergeOptions({
            iconRetinaUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon-2x.png',
            iconUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png',
            shadowUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png',
        });
    }, []);

    // Minneapolis coordinates
    const position: [number, number] = [44.9778, -93.2650];

    // Remove manual cleanup to allow MapContainer to manage lifecycle


    return (
        <MapContainer
            key={`${position[0]}-${position[1]}`} // Force remount if position changes, helps with initialization
            center={position}
            zoom={13}
            scrollWheelZoom={true}
            style={{ height: "100%", width: "100%" }}
            className="grayscale filter" // CSS class to make it grayscale-ish
        >
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                className="grayscale" // Apply grayscale to tiles
            />
            <Marker position={position}>
                <Popup>
                    My Office<br /> 123 Example Street
                </Popup>
            </Marker>
            <style jsx global>{`
                .leaflet-container {
                    filter: grayscale(100%) contrast(1.1);
                    z-index: 10;
                }
            `}</style>
        </MapContainer>
    );
}
