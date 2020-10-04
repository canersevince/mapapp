<template>
  <div class="bg-white">
    <TopProjectsBar
      :tabs="tabs"
      @changeTab="changeTab($event)"
      style="position:sticky; top: 0; left: 0"
      title="ŞİKAYETLERİM"
    >
    </TopProjectsBar>
    <div class="proje list-container"
         style="height: 90vh; overflow: hidden; display: flex; align-items: center; justify-content: center"
         v-if="(showDone === 'completed' && oldReports.length === 0) || (showDone !== 'completed' && currentReports.length === 0)">
      <q-banner
        class="text-white bg-red"
        inline-actions>
        Maalesef henüz bir etkinlik yok.
      </q-banner>
    </div>
    <q-virtual-scroll
      :items="showDone === 'completed' ? oldReports : currentReports"
      class="proje list-container scroll-pad"
      separator
    >
      <template v-slot="{ item, index }">
        <q-item @click="eventClick(item._id)" class="item" clickable v-if="loaded" v-ripple>
          <div class="custom-chip">
            <q-chip color="green" dense icon="check" text-color="white" v-if="item.STATUS == 'closed'">
              Çözüldü
            </q-chip>
            <q-chip color="warning" dense icon="hourglass_empty" text-color="white" v-else>
              İncelemede
            </q-chip>
          </div>
          <q-item-section avatar style="flex-basis: 15%; height: auto">
            <q-avatar>
              <img :src="item.IMAGE_SRC">
            </q-avatar>
          </q-item-section>
          <q-item-section style="flex-basis: 70%; width: 50%; height: auto">
            <q-item-label>
              <h1 class="item-title">{{ item.TITLE }}
              </h1>
            </q-item-label>
            <q-item-label caption style="flex-basis: 15%">
              <p class="item-desc">
                {{ item.DESCRIPTION.substring(0, 25)+'...' }}
              </p>
              <div class="flex justify-start tag-container" style="align-items: flex-start; flex-wrap: wrap">
                <q-badge color="green">
                  {{item.CATEGORY}}
                </q-badge>
              </div>
            </q-item-label>
          </q-item-section>
          <q-item-section style="height: auto">
            <q-icon color="grey" icon="keyboard_arrow_right" name="keyboard_arrow_right" size="24px"></q-icon>
          </q-item-section>
        </q-item>
      </template>
    </q-virtual-scroll>
    <q-page-sticky :offset="[24, 72]" position="bottom-right">
      <q-btn @click="$router.push('/Reports/Create')" color="primary" fab icon="add" padding="xs"/>
    </q-page-sticky>
  </div>
</template>

<script>
  import TopProjectsBar from "../../components/TopProjectsBar";

  export default {
    name: "eventsIndex",
    components: {TopProjectsBar},

    data() {
      return {
        tabs: [
          {
            label: 'Aktif Şikayetlerim',
            name: 'uncompleted',
            icon: 'report',
            class: 'text-primary'
          },
          {
            label: 'Çözülen Şikayetlerim',
            name: 'completed',
            icon: 'done',
            class: 'text-green'
          }
        ],
        lastScrollTop: null,
        showDone: false,
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
      currentReports() {
        return this.$store.getters['reportModule/getActive']
      },
      oldReports() {
        return this.$store.getters['reportModule/getClosed']
      }
    },
    methods: {
      changeTab(e) {
        this.showDone = e
        console.log(e)
      },
      eventClick(id) {
        setTimeout(() => {
          this.$router.push(`/Reports/${id}`)
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
      showFilterMethod(a) {
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

<style lang="scss" scoped>
  .list-container {
    padding: .25em 0 1em 0;
  }

  .proje {
    width: 100%;
  }

  .item {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .item-title {
    font-size: 16px;
    font-weight: normal;
    line-height: 18px;
  }

  .item-desc {
    font-size: 12px;
  }

  .scroll-pad {
    padding-top: 1.2em;
  }

  .tag-container > .q-badge {
    margin: 3px 0 0 3px;
  }

  .custom-chip {
    position: absolute;
    bottom: 0;
    right: 0;
    transform: scale(0.75);
    transform-origin: center;
  }
</style>
