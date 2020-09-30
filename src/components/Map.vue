<template>
  <div class="full-width full-height">
    <div class="map-container" style="width: 100%">
      <div class="map-div" style="height: 100%; overflow: auto;">
        <l-map
          :center="center"
          :max-bounds="maxBounds"
          :bounds="bounds"
          :options="mapOptions"
          :zoom="zoom"
          @update:center="centerUpdate"
          @update:zoom="zoomUpdate"
          ref="appMap"
          style="height: 80%"
          v-if="showMap"
        >
          <l-tile-layer
            :attribution="attribution"
            :url="url"
          />
          <l-marker :key="i" v-for="(pin, i) in pins" :lat-lng="pin.LAT_LNG">
            <l-tooltip :options="{ permanent: true, interactive: true }">
              <div @click="pinShow(i)">
                {{pin.TITLE}}
              </div>
            </l-tooltip>
          </l-marker>
          <l-control-zoom position="bottomright"></l-control-zoom>
          <l-rectangle :fill-opacity="0.1" :opacity="0.5" :bounds="boundArray"></l-rectangle>
        </l-map>
      </div>
    </div>
  </div>
</template>

<script>
  import {Icon, latLng, latLngBounds} from "leaflet";
  delete Icon.Default.prototype._getIconUrl;
  Icon.Default.mergeOptions({
    iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
    iconUrl: require('leaflet/dist/images/marker-icon.png'),
    shadowUrl: require('leaflet/dist/images/marker-shadow.png'),
  });
  export default {
    name: "mapComponent",
    data() {
      return {
        isClicked: false,
        zoom: 13.5,
        center: latLng(40.98014100, 29.08227000),
        url: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
        attribution:
          '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
        currentZoom: 4,
        currentCenter: latLng(40.98014100, 29.08227000),
        showParagraph: false,
        mapOptions: {
          zoomSnap: 1,
          zoomControl: false
        },
        showMap: true
      };
    },
    computed: {
      pins(){
        return this.$store.state.mapModule.pins
      },
      bounds() {
        return latLngBounds([
          [41.01226800, 29.11125700],
          [40.94999800, 29.01484900]
        ])
      },
      maxBounds() {
        return latLngBounds([
          [41.01226800, 29.11125700],
          [40.94999800, 29.01484900]
        ])
      },
      boundArray(){
        return [
          [41.01226800, 29.11125700],
          [40.94999800, 29.01484900]
        ]
      }
    },
    methods: {
      zoomUpdate(zoom) {
        this.currentZoom = zoom;
      }
      ,
      centerUpdate(center) {
        this.currentCenter = center;
      },
      pinShow(i){
        var self = this;
        const payload = this.pins[i]
        if(this.isClicked === true){
          return
        }
        this.isClicked = true;
        setTimeout(() => {
          self.isClicked = false
        }, 200)
        this.$emit('showpopup',payload)
        console.log('event fired!');

      }
    },
  }
</script>

<style scoped>
  .map-container, .map-div {
    height: calc(100vh - 72px);
  }

  .vue2leaflet-map {
    height: 100% !important;
  }
</style>
