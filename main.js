import 'ol/ol.css';
import 'ol-ext/control/permalinkcontrol.css'
import 'ol-ext/control/searchphotoncontrol'
import Map from 'ol/map';
import View from 'ol/view';
import ol_Scaleline from 'ol/control/scaleline'
import Permalink from 'ol-ext/control/permalinkcontrol';
import SearchPhoton from 'ol-ext/control/searchphotoncontrol'
import ol_layer_Tile from 'ol/layer/tile'
import ol_source_OSM from 'ol/source/osm'
import ol_source_Stamen from 'ol/source/stamen'
import ol_control_Swipe from 'ol-ext/control/swipecontrol';
import 'ol-ext/control/swipecontrol.css'

// Layers
var osm = new ol_layer_Tile({
  source: new ol_source_OSM()
  });
var stamen = new ol_layer_Tile({
  source: new ol_source_Stamen({
    layer: 'watercolor'
  })
  });
var label = new ol_layer_Tile({
  source: new ol_source_Stamen({
    layer: 'terrain-labels'
  })
  });

var map = new Map({
            target: 'map',
            layers: [osm, stamen, label],
            view: new View({
              center: [0, 0],
              zoom: 2
            })
          });

// Control
var ctrl = new ol_control_Swipe();

// Set stamen on left
ctrl.addLayer(stamen);
// OSM on right
ctrl.addLayer(osm, true);
map.addControl(ctrl);
map.addControl(new ol_Scaleline())
map.addControl(new Permalink())
map.addControl(new SearchPhoton())
