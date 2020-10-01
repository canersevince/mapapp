<template>
  <div>
    <TopBar title="PROJE DETAYI" :link="'/'"></TopBar>
    <ProjectDetailHeader :showHeader="showHeader" v-if="currentPin" :current-pin="currentPin"></ProjectDetailHeader>
    <q-banner
      v-if="!currentPin"
      inline-actions
      class="text-white bg-red">
      Böyle bir proje bulunamadı.
    </q-banner>
    <q-scroll-area class="scroll-area" :class="{'scroll-area-extend' : !showHeader}">
      <q-scroll-observer debounce="100" @scroll="scrollHandler"></q-scroll-observer>
      <div class="timeline-container" :class="{'extend-scroll': !showHeader}">
        <q-timeline color="secondary">
          <q-timeline-entry
            v-for="item in currentPin.STEPS"
            :key="item._id"
            :title="item.TITLE"
            :subtitle="new Date(item.CREATED).toLocaleDateString()+' - '+new Date(item.CREATED).toLocaleTimeString()"
            :icon="item.ICON"
          >
            <div>
              <div>
                <img @click="alert('img')" :src="item.IMAGE" alt="" style="max-width: 100%; height: auto">
              </div>
              <p style="margin: 6px 0">{{ item.DESCRIPTION }}</p>
              <a style="text-decoration: underline">Detaylar...</a>
            </div>
          </q-timeline-entry>
        </q-timeline>
      </div>
    </q-scroll-area>
  </div>
</template>

<script>
import ProjectDetailHeader from "../../components/ProjectDetailHeader";
import TopBar from "../../components/TopBar";

export default {
  name: "pin_id",
  components: {TopBar, ProjectDetailHeader},
  data() {
    return {
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
    currentPin() {
      const pins = this.$store.getters['mapModule/getPins']
      return pins.find(pin => {
        return pin._id === this.$route.params.id
      })
    }
  }
}
</script>

<style scoped>
.timeline-container {
  padding: 1em 1.5em;
}

.scroll-area {
  height: calc(60vh - 48px);
}

.scroll-area-extend {
  height: calc(100vh - 48px);
}

.extend-scroll {
  padding-top: 247px;
}
</style>
