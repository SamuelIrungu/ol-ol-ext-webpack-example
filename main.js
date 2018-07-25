import 'ol/ol.css';
import 'ol-ext/control/Permalink.css'
import 'ol-ext/control/Search.css'
import 'ol-ext/control/Swipe.css'
import Map from 'ol/Map';
import View from 'ol/View';
import ScaleLine from 'ol/control/ScaleLine'
import Permalink from 'ol-ext/control/Permalink';
import SearchNominatim from 'ol-ext/control/SearchNominatim'
import TileLayer from 'ol/layer/Tile'
import OSM from 'ol/source/OSM'
import Stamen from 'ol/source/Stamen'
import Swipe from 'ol-ext/control/Swipe';

// Layers
let osm = new TileLayer({
  source: new OSM()
  });
let stamen = new TileLayer({
  source: new Stamen({
    layer: 'watercolor'
  })
  });
let label = new TileLayer({
  source: new Stamen({
    layer: 'terrain-labels'
  })
  });

let map = new Map({
            target: 'map',
            layers: [osm, stamen, label],
            view: new View({
              center: [0, 30],
              zoom: 4
            })
          });

// Control
let ctrl = new Swipe();

// Set stamen on left
ctrl.addLayer(stamen);
// OSM on right
ctrl.addLayer(osm, true);
map.addControl(ctrl);

map.addControl(new ScaleLine())
map.addControl(new Permalink())

// Search control
const search = new SearchNominatim();
// Move to the position on selection in the control list
search.on('select', function(e) {
  // console.log(e);
  map.getView().animate({
    center: e.coordinate,
    zoom: Math.max (map.getView().getZoom(),16)
  });
});
map.addControl(search);
