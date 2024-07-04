import React, { useEffect } from 'react';
import { withAuthenticator } from '@aws-amplify/ui-react';
import { createMap, createAmplifyGeocoder } from "maplibre-gl-js-amplify";
import maplibregl from "maplibre-gl";
import "maplibre-gl/dist/maplibre-gl.css";
import "@maplibre/maplibre-gl-geocoder/dist/maplibre-gl-geocoder.css";
import "maplibre-gl-js-amplify/dist/public/amplify-geocoder.css";
import { Authenticator } from '@aws-amplify/ui-react';

function Home() {
    useEffect(() => {
        async function initializeMap() {
            const el = document.createElement("div");
            el.setAttribute("id", "map");
            document.body.appendChild(el);

            if ("geolocation" in navigator) {
                navigator.geolocation.getCurrentPosition(async (position) => {
                    const userLocation: [number, number] = [position.coords.longitude, position.coords.latitude]; // Explicitly typed as [number, number]

                    const map = await createMap({
                        container: "map",
                        center: userLocation, // Use user's current location
                        zoom: 11,
                    });

                    map.addControl(createAmplifyGeocoder());

                    // Add a marker for the user's location
                    new maplibregl.Marker()
                        .setLngLat(userLocation)
                        .addTo(map);
                }, (error) => {
                    console.error("Error getting the geolocation: ", error);
                });
            } else {
                console.log("Geolocation is not supported by this browser.");
            }
        }

        initializeMap();
    }, []);

    return (
        <div className="App">
            <h2 className='headinginthemain'>Geo Location Tracking</h2>
            <div id="map" style={{ margin: 'auto', width: '90%', height: '600px', borderRadius: '10px', border: '1px solid #ccc' }}></div><br />
            <h2 className='headinginthemain'>Go Through the steps :</h2>
            <center><a className='readdocs' href="/docs">Read Docs...</a></center><br /><br />
        </div>
    );
}

export default withAuthenticator(Home);
