import 'ol/ol.css';
import 'ol-ext/control/permalinkcontrol.css'
import 'ol-ext/control/searchphotoncontrol'
//import 'ol'
import ol from 'ol'
import Map from 'ol/map';
import View from 'ol/view';
import TileLayer from 'ol/layer/tile';
import XYZ from 'ol/source/xyz';
import ol_Scaleline from 'ol/control/scaleline'
import Control from 'ol/control'
import Permalink from 'ol-ext/control/permalinkcontrol';
import SearchPhoton from 'ol-ext/control/searchphotoncontrol'

new Map({
  target: 'map',
  layers: [
    new TileLayer({
      source: new XYZ({
        url: 'https://{a-c}.tile.openstreetmap.org/{z}/{x}/{y}.png'
      })
    })
  ],
  controls: Control.defaults().extend([
      new ol_Scaleline(),
      //TODO: Here is where we have the issue, how do we import the ol-ext files to the project
      new Permalink(),
      new SearchPhoton()
  ]),
  view: new View({
    center: [0, 0],
    zoom: 2
  })
});
