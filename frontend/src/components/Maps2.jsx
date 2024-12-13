import React, { useState, useEffect } from "react";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import { getProjects } from "../Services/ProjectService.js";
import customIconUrl from "../assets/icons/logo.svg";
import customImageUrl from "../assets/icons/tinilo.png";

import markerIcon2x from "leaflet/dist/images/marker-icon-2x.png";
import markerIcon from "leaflet/dist/images/marker-icon.png";
import markerShadow from "leaflet/dist/images/marker-shadow.png";

// Fixing the default icon issue in Leaflet
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: markerIcon2x,
  iconUrl: markerIcon,
  shadowUrl: markerShadow,
});

const customIcon = new L.Icon({
  iconUrl: customIconUrl,
  iconSize: [48, 48], // Increase the size of the marker
  iconAnchor: [24, 48],
  popupAnchor: [0, -48],
});

const indiaBounds = [
  [6.554607900, 68.111378700], // South West corner (Kanyakumari)
  [35.674545700, 97.395555000], // North East corner (Arunachal Pradesh)
];

function MyLeafletMap() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedProject, setSelectedProject] = useState(null);
  const [projects, setProjects] = useState([]);

  const handleSearch = (event) => {
    event.preventDefault();
    const found = projects.find(
      (project) => project.name.toLowerCase() === searchTerm.toLowerCase()
    );
    if (found) {
      setSelectedProject(found);
    } else {
      alert("Project not found");
    }
  };

  useEffect(() => {
    getProjects().then((data) => {
      setProjects(data);
    });
  }, []);

  return (
    <div className="container mx-auto flex flex-col items-center" style={{ height: "100vh", marginTop: "50px" }}>
      <form onSubmit={handleSearch} className="mb-4">
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search for a project"
          className="p-2 border rounded"
        />
        <button
          type="submit"
          className="ml-2 p-2 bg-sky-500 text-white rounded"
        >
          Search
        </button>
      </form>
      <div className="flex-grow w-full flex justify-center items-center">
        <MapContainer
          center={[20.593684, 78.96288]}
          zoom={4}
          minZoom={4}
          maxZoom={18}
          maxBounds={indiaBounds}
          maxBoundsViscosity={1.0}
          style={{ height: "80vh", width: "80%", zIndex: 0 }}
        >
          <MapController selectedProject={selectedProject} />
          <TileLayer url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png" />
          {projects &&
            projects.map((project, idx) => (
              <Marker
                key={idx}
                position={[project.latitude, project.longitude]}
                icon={customIcon}
              >
                <Popup>
                  <div className="popup-content" style={{ textAlign: "center" }}>
                    <h2>{project.name}</h2>
                    <img
                      src={customImageUrl}
                      alt="Custom"
                      style={{ width: "100px", height: "auto" }}
                    />
                    <p>project details</p>
                  </div>
                </Popup>
              </Marker>
            ))}
        </MapContainer>
      </div>
    </div>
  );
}

function MapController({ selectedProject }) {
  const map = useMap();

  React.useEffect(() => {
    if (selectedProject) {
      map.setView([selectedProject.latitude, selectedProject.longitude], 15);
    }
  }, [selectedProject, map]);

  return null;
}

export default MyLeafletMap;