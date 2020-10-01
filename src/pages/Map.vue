<template>
  <q-page class="row justify-start flex full-width">
    <div class="absolute window-width fixed-top top9999">
      <SearchBar></SearchBar>
    </div>
    <MapComponent v-on:showpopup="showPopup($event)"></MapComponent>
    <div class="dialog top9999">
      <q-dialog ref="popup" v-if="showPopup$" v-model="showPopup$">
        <q-card class="modal-card">
          <q-img :src="active.THUMBNAIL" style="width: 100%; height: auto"/>
          <q-card-section>
            <q-btn
              class="absolute"
              color="primary"
              fab
              icon="place"
              style="top: 0; right: 12px; transform: translateY(-50%);"
            />
            <div class="row no-wrap items-center">
              <div class="col text-h6 ellipsis">
                {{active.TITLE}}
              </div>
              <div class="col-auto text-grey text-caption q-pt-md row no-wrap items-center">
                <q-icon name="place"/>
                {{active.ADDRESS}}
              </div>
            </div>

          </q-card-section>

          <q-card-section class="q-pt-none">
            <div class="text-subtitle1">
              {{active.TITLE}}
            </div>
            <div class="text-caption text-grey">
              {{active.DESCRIPTION}}
            </div>
          </q-card-section>

          <q-separator/>

          <q-card-actions align="right">
            <q-btn @click="$router.push(`/Pin/${active._id}`)" color="white" class="bg-primary" flat label="Detaylar" v-close-popup/>
            <q-btn color="primary" flat icon="add_box" round v-close-popup/>
          </q-card-actions>
        </q-card>
      </q-dialog>
    </div>
  </q-page>
</template>

<script lang="ts">
  import {Vue} from 'vue-property-decorator'
  import SearchBar from "components/SearchBar.vue";
  import MapComponent from "components/Map.vue";

  export default Vue.extend({
    components: {MapComponent, SearchBar},
    data() {
      return {
        showPopup$: false,
        showParagraph: false,
        active: {
          TITLE: "",
          DESCRIPTION: "",
          THUMBNAIL: ""
        }
      }
    },
    methods: {
      showPopup(e: any) {
        this.active = e;
        this.$nextTick(() => {
          this.showPopup$ = true;
          this.showParagraph = true
        })
      }
    },
  })
</script>

<style>
  .top9999 {
    z-index: 9999;
  }
  .modal-card{
    width: 100%;
  }
</style>
