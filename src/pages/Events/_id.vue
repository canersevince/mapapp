<template>
  <div>
    <TopBar :link="'/Events'" title="ETKİNLİK DETAYI"></TopBar>
    <EventDetailHeader :current-event="currentEvent" :showHeader="showHeader" v-if="currentEvent"></EventDetailHeader>
    <q-banner
      class="text-white bg-red"
      inline-actions
      v-if="!currentEvent">
      Böyle bir etkinlik bulunamadı.
    </q-banner>
    <q-scroll-area :class="{'scroll-area-extend' : !showHeader}" class="scroll-area">
      <q-scroll-observer @scroll="scrollHandler" debounce="100"></q-scroll-observer>
      <q-carousel
        animated
        arrows
        class="bg-primary text-white shadow-1 rounded-borders carousel-custom"
        control-color="white"
        navigation
        padding
        swipeable
        transition-next="scale"
        transition-prev="scale"
        v-model="slide"
      >
        <q-carousel-slide v-for="(photo, i) in currentEvent.PHOTOS" :name="i" :key="i" :img-src="photo.SRC" />
      </q-carousel>
    </q-scroll-area>
  </div>
</template>

<script>
  import EventDetailHeader from "../../components/EventDetailHeader";
  import TopBar from "../../components/TopBar";

  export default {
    name: "pin_id",
    components: {TopBar, EventDetailHeader},
    data() {
      return {
        slide: 0,
        showHeader: true,
        distanceFromTop: 0
      }
    },
    methods: {
      alert(i) {
        alert(i)
      },
      scrollHandler(e) {
        if (e.position > 150) {
          if (this.showHeader) {
            this.showHeader = false
          }
        } else {
          if (!this.showHeader) {
            this.showHeader = true
          }
        }
        this.distanceFromTop = e.position
      }
    },
    computed: {
      currentEvent() {
        const events = this.$store.getters['eventModule/getAll']
        return events.find(event => {
          return event._id === this.$route.params.id.toString()
        })
      }
    }
  }
</script>

<style scoped>
  .scroll-area {
    height: calc(100vh - 344px);
  }

  .carousel-custom {
    height: calc(100vh - 344px)
  }
</style>
