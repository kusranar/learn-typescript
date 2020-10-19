// import axios from "axios";

const form = document.querySelector("form")!;
// const addressInput = document.getElementById("address")! as HTMLInputElement;

// type GoogleGeocodingResponse = {
//   results: { geometry: { location: { lat: number; lng: number } } }[];
//   status: "OK" | "ZERO_RESULTS";
// };

// declare var google: any;
declare var ol: any;

function searchAddressHandler(event: Event) {
  event.preventDefault();
  //   const entereredAddress = addressInput.value;

  //   axios
  //     .get<GoogleGeocodingResponse>(
  //       `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURI(
  //         entereredAddress
  //       )}&key=${GOOGLE_API_KEY}`
  //     )
  //     .then((res) => {
  //       if (res.data.status !== "OK") {
  //         throw new Error("Could not fetch location!");
  //       }
  //       const coordinates = res.data.results[0].geometry.location;
  //       const map = new google.maps.Map(document.getElementById("map")!, {
  //         center: coordinates,
  //         zoom: 16,
  //       });

  //       new google.maps.Marker({
  //         position: coordinates,
  //         map: map,
  //       });
  //     })
  //     .catch((err) => {
  //       alert(err.message);
  //       console.log(err);
  //     });

  const coordinates = { lat: 40.41, lng: -73.99 }; // Can't fetch coordinates from Google API, use dummy ones

  document.getElementById("map")!.innerHTML = ""; // clear <p> from <div id="map">
  new ol.Map({
    target: "map",
    layers: [
      new ol.layer.Tile({
        source: new ol.source.OSM(),
      }),
    ],
    view: new ol.View({
      center: ol.proj.fromLonLat([coordinates.lng, coordinates.lat]),
      zoom: 16,
    }),
  });
}

form?.addEventListener("submit", searchAddressHandler);
