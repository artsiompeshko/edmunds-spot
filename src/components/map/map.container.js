import { useEffect, useState } from 'preact/hooks';
import { render } from 'preact';

import { MapPopup } from './popup';

import { DEFAULT_ZOOM, INTEGRITY_KEY, MAP_URL } from '../../core/constants/basic';
import { load } from '../../core/utils/script';

import Map from './map.presentation';
import { loadCarCode } from '../../core/carcode';

const MapContainer = ({ make, zipCode }) => {
  const [mapLoaded, setMapLoaded] = useState(false);
  const [dealers, setDealers] = useState([]);
  const [markers, setMarkers] = useState({});
  const [activeDealerId, setActiveDealerId] = useState(null);
  const [dealersLoading, setDealersLoading] = useState(false);
  const [carCodeLoading, setCarCodeLoading] = useState(false);
  const [hasCarCode, setHasCarCode] = useState(false);

  const onMapLoad = () => {
    window.map = window.L.map('mapid', { zoomControl: false }).setView([34.0522, -118.2437], DEFAULT_ZOOM);
    window.L.control
      .zoom({
        position: 'bottomright',
      })
      .addTo(window.map);

    window.L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    }).addTo(window.map);

    setMapLoaded(true);
  };

  useEffect(() => {
    if (!mapLoaded) {
      load(MAP_URL, onMapLoad);
    }
  }, [mapLoaded]);

  useEffect(() => {
    if (mapLoaded) {
      const nextMarkers = {};

      if (markers && window.map) {
        Object.values(markers).forEach(marker => {
          window.map.removeLayer(marker);
        });
      }

      dealers.forEach(dealer => {
        const { location, id } = dealer;
        const marker = window.L.marker([location.lat, location.lon]).addTo(window.map);
        const markerEl = document.createElement('div');
        render(
          <MapPopup
            dealer={dealer}
            close={() => {
              marker.closePopup();
            }}
          />,
          markerEl,
        );
        marker.bindPopup(markerEl);

        marker.on('popupopen', () => {
          setActiveDealerId(id);

          if (dealer?.carcodeInfo?.id) {
            setCarCodeLoading(true);

            loadCarCode(dealer.carcodeInfo.id, () => {
              const carCodeSdkButton = document.querySelector('.sms-button');
              if (carCodeSdkButton) {
                carCodeSdkButton.disabled = false;
              }
              setCarCodeLoading(false);
            });
          }
        });

        marker.on('popupclose', () => {
          setActiveDealerId(null);

          if (window.CarcodeWidget) {
            new window.CarcodeWidget().destroy();
            window.CarcodeWidget = null;
          }
        });

        nextMarkers[id] = marker;
      });

      setMarkers(nextMarkers);
    }
  }, [dealers, mapLoaded]);

  const loadDealers = async () => {
    let url = 'https://dev-dsg11-api.carcode.com/carcode/v1/ccapi/service-dealers?';

    if (zipCode) {
      url += `zip=${zipCode}`;
    }

    if (make !== 'Any Make') {
      url += `&make=${make}`;
    }

    try {
      setDealersLoading(true);
      const nextDealers = (await (await fetch(url)).json()).results || [];
      setDealers(nextDealers);
    } catch (e) {
      setDealers([]);
    } finally {
      setDealersLoading(false);
    }
  };

  useEffect(() => {
    if (zipCode) {
      loadDealers();
    }
  }, [make, zipCode]);

  async function updateMapLocation() {
    const location = await (
      await fetch(`https://dev-dsg11-api.carcode.com/carcode/v1/ccapi/location?zip=${zipCode}`)
    ).json();

    window.map.setView([location.latitude, location.longitude], DEFAULT_ZOOM);
  }

  useEffect(() => {
    if (zipCode) {
      updateMapLocation();
    }
  }, [zipCode]);

  const handleDealerClick = dealerId => {
    const marker = markers[dealerId];
    marker.fire('click');
    window.map.setView([marker.getLatLng().lat + 0.004, marker.getLatLng().lng - 0.003], DEFAULT_ZOOM);
  };

  return (
    <Map
      dealers={dealers}
      zipCode={zipCode}
      carcodeLoading={carCodeLoading}
      hasCarCode={hasCarCode}
      dealersLoading={dealersLoading}
      activeDealerId={activeDealerId}
      onDealerClick={handleDealerClick}
    />
  );
};

export default MapContainer;
