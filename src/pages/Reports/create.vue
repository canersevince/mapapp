<template>
  <div class="content-center form-container">
    <TopBar link="/Reports" title="ŞİKAYET OLUŞTUR"></TopBar>
    <q-scroll-area class="report-form">
      <q-form class="report-form-obj">
        <q-input @focus="hideMenu"
                 @focusout="showMenu"
                 class="input-bg-white form-object"
                 outlined
                 placeholder="Şikayet Başlığı"
                 rounded/>
        <div style="margin: 1em 0"></div>
        <q-select :options="options"
                  @focus="hideMenu"
                  @focusout="showMenu"
                  label="Şikayet Kategorisi"
                  outlined
                  rounded v-model="CATEGORY"/>
        <div style="margin: 1em 0"></div>
        <q-input
          @focus="hideMenu"
          @focusout="showMenu"
          outlined
          placeholder="Şikayet Metni"
          rounded
          type="textarea"
          v-model="DESCRIPTION"
        />
        <div style="margin: 1em 0"></div>
        <div class="flex justify-start content-start items-center">
          <q-input
            :label="coords ? coordsToText : 'Mevcut konum için butona basınız.'"
            :placeholder="coordsToText"
            @focus="hideMenu" @focusout="showMenu"
            class="input-place" disable outlined
            rounded style="width: 80%"/>
          <q-btn
            @click="getCoords()"
            color="primary" dense
            icon="location_on"
            round
            style="margin-left: auto">
            <q-badge
              color="red"
              floating>4
            </q-badge>
          </q-btn>
        </div>
        <div style="margin: 1em 0"></div>
        <div class="flex content-start items-center justify-between">
          <q-card style="height: auto; width: 80%">
            <img :src="imgSrc" alt="Şikayet Görseli" style="width: 100%; height: auto">
            <div
              style="position: absolute; bottom: 0; left: 0; padding: .3em; text-align: center; width: 100%; background: #333; color: white">
              Şikayet Görseli
            </div>
          </q-card>
          <q-btn @click="getPhoto()"
                 color="primary"
                 icon="camera"
                 round
                 style="display: flex; align-items: center; justify-content: center">
          </q-btn>
        </div>
        <div style="margin: 2em 0"></div>
        <div class="text-center">
          <q-btn class="bg-dark text-white" rounded>ŞİKAYET OLUŞTUR</q-btn>
        </div>
      </q-form>
    </q-scroll-area>
  </div>
</template>

<script>
  import TopBar from "../../components/TopBar";

  export default {
    name: "create",
    components: {
      TopBar
    },
    data() {
      return {
        TITLE: "",
        CATEGORY: "",
        DESCRIPTION: "",
        options: [
          'Çöp Şikayeti', 'Su Kesintisi', 'Yol Şikayeti', 'Ulaşım Sorunları'
        ],
        coords: null,
        imgBase64: null,
        imgSrc: 'https://via.placeholder.com/320x200',
      }
    },
    computed: {
      coordsToText() {
        if (!this.coords) return ""
        return this.coords[0] + ', ' + this.coords[1]
      },
    },
    methods: {
      getPhoto() {
        var self = this;

        function cameraCallback(imageData) {
          self.imgSrc = imageData;
          alert(imageData)
        }

        function cameraError(err) {
          alert(err.message)
        }

        if (navigator.camera) {
          navigator.camera.getPicture(cameraCallback, cameraError, {
            quality: 50,
            encodingType: Camera.EncodingType.JPEG,
            mediaType: Camera.MediaType.PICTURE,
            destinationType: Camera.DestinationType.FILE_URI
          })
        } else {
          alert('Bu cihaz bu özelliği desteklememektedir')
        }
      },
      getCoords() {
        this.coords = [1, 1]
      },
      hideMenu() {
        if (!this.$q.platform.is.mobile) return
        this.$store.commit('miscModule/hideMenu')
      },
      showMenu() {
        if (!this.$q.platform.is.mobile) return
        this.$store.commit('miscModule/showMenu')
      }
    },
    created() {
      this.imgSrc = 'https://via.placeholder.com/320x200'
    }
  }
</script>

<style lang="scss">
  .input-bg-white .q-field__control.relative-position.row.no-wrap, .q-field__control.relative-position.row.no-wrap {
    background: rgba(white, 0.95) !important;
    overflow: hidden;
  }

  .report-form {
    height: calc(100vh - 48px);
    padding: 1.5em 1.8em 3em 1.8em;
  }

  .input-place .q-field__label {
    font-size: 12px !important;
  }

  .report-form-obj {
    padding: 0 .2em;
    overflow-x: hidden;
  }
</style>
