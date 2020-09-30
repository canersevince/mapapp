import Vue from 'vue';
import {LMap, LTileLayer, LMarker, LPopup, LTooltip, LControl, LControlZoom, LRectangle} from 'vue2-leaflet';
import { boot } from 'quasar/wrappers'

Vue.component('l-map', LMap);
Vue.component('l-tile-layer', LTileLayer);
Vue.component('l-marker', LMarker);
Vue.component('l-popup', LPopup);
Vue.component('l-tooltip', LTooltip);
Vue.component('l-control', LControl);
Vue.component('l-control-zoom', LControlZoom);
Vue.component('l-rectangle', LRectangle);
export default boot(({ Vue }) => {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access

})
