<template>
  <div class="bg-white">
    <TopProjectsBar
      style="position:sticky; top: 0; left: 0"
      @changeTab="changeTab($event)" title="AKTİF PROJELER"></TopProjectsBar>
    <div class="proje list-container"
         style="height: 90vh; overflow: hidden; display: flex; align-items: center; justify-content: center"
         v-if="(showCompleted === 'completed' && completedProjects.length === 0) || (showCompleted !== 'completed' && uncompletedProjects.length === 0)">
      <q-banner
        inline-actions
        class="text-white bg-red">
        Maalesef henüz tamamlanmış bir proje yok.
      </q-banner>
    </div>
    <q-virtual-scroll
      class="proje list-container scroll-pad"
      :items="showCompleted == 'completed' ? completedProjects : uncompletedProjects"
      separator
    >
      <template v-slot="{ item, index }">
        <q-item @click="projectClick(item._id)" clickable v-ripple class="item" v-if="loaded">
          <q-item-section style="flex-basis: 15%; height: auto" avatar>
            <q-avatar>
              <img :src="item.THUMBNAIL">
            </q-avatar>
          </q-item-section>
          <q-item-section style="flex-basis: 70%; width: 50%; height: auto">
            <q-item-label>
              <h1 class="item-title">{{item.TITLE}}</h1>
            </q-item-label>
            <q-item-label caption style="flex-basis: 15%">
              <p class="item-desc">
                {{item.DESCRIPTION}}
              </p>
            </q-item-label>
          </q-item-section>
          <q-item-section style="height: auto">
            <q-icon name="keyboard_arrow_right" icon="keyboard_arrow_right" size="24px" color="grey"></q-icon>
          </q-item-section>
        </q-item>
      </template>
    </q-virtual-scroll>
  </div>
</template>

<script>
  import TopProjectsBar from "../components/TopProjectsBar";

  export default {
    name: "Index",
    components: {TopProjectsBar},

    data() {
      return {
        lastScrollTop: null,
        showCompleted: false,
        error: "",
        message: "",
        lat: "",
        lng: "",
        img: null,
        loaded: false,
        showFilters: true
      }
    },
    computed: {
      uncompletedProjects(){
        return this.$store.getters['mapModule/getActive']
      },
      completedProjects() {
        return this.$store.getters['mapModule/getCompleted']
      }
    },
    methods: {
      changeTab(e){
        this.showCompleted = e
        console.log(e)
      },
      projectClick(id){
        setTimeout(() => {
          alert('Tıklanan item id: ' + id)
        }, 500)
      },
      cameraSuccess(data) {
        alert('success')
        this.error = data
        this.img = data
      },
      cameraError(e) {
        alert(e.code)
      },
      takePhoto() {
        navigator.camera.getPicture(this.cameraSuccess, this.cameraError);
      },
      showFilterMethod(a){
        console.log(a)
      }
    },
    mounted() {
      var self = this;
      document.addEventListener("deviceready", onDeviceReady, false);
      if (!this.$q.platform.mobile) {
        setTimeout(() => {
          self.loaded = true;
        }, 500)
      }
      function onDeviceReady() {
        self.loaded = true
        self.message = "navigator.geolocation works well"
        var onSuccess = function (position) {
          self.lat = position.coords.latitude
          self.lng = position.coords.longitude
          alert('Latitude: ' + position.coords.latitude + '\n' +
            'Longitude: ' + position.coords.longitude + '\n' +
            'Altitude: ' + position.coords.altitude + '\n' +
            'Accuracy: ' + position.coords.accuracy + '\n' +
            'Altitude Accuracy: ' + position.coords.altitudeAccuracy + '\n' +
            'Heading: ' + position.coords.heading + '\n' +
            'Speed: ' + position.coords.speed + '\n' +
            'Timestamp: ' + position.timestamp + '\n');
        };

        // onError Callback receives a PositionError object
        //
        function onError(error) {
          alert('code: ' + error.code + '\n' +
            'message: ' + error.message + '\n');
        }

        navigator.geolocation.getCurrentPosition(onSuccess, onError);
      }
    },
  }
</script>

<style scoped>
  .list-container {
    padding: .25em 0 1em 0;
  }

  .proje {
    width: 100%;
  }
  .item{
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .item-title{
    font-size: 16px;
    font-weight: normal;
    line-height: 18px;
  }
  .item-desc{
    font-size: 12px;
  }
  .scroll-pad{
    padding-top: 1.2em;
  }
</style>
