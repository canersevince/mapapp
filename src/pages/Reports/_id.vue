<template>
  <div>
    <TopBar :link="'/Reports'" title="ŞİKAYET DETAYI"></TopBar>
    <ReportDetailHeader :currentReport="currentReport" :showHeader="showHeader" v-if="currentReport"></ReportDetailHeader>
    <q-banner
      class="text-white bg-red"
      inline-actions
      v-if="!currentReport">
      Böyle bir etkinlik bulunamadı.
    </q-banner>
    <q-scroll-area :class="{'scroll-area-extend' : !showHeader}" class="scroll-area bg-white">
      <q-scroll-observer @scroll="scrollHandler" debounce="100"></q-scroll-observer>
      <div class="answer">
        <q-list separator>
          <q-item v-for="(msg,i) in currentReport.REPLY" :key="i">
            <q-item-section>
              <q-item-label>{{msg.MESSAGE}}</q-item-label>
            </q-item-section>
            <q-item-section side top>
              <q-item-label caption style="font-size: 12px; line-height: 14px; margin-top: 2px">{{new Date(msg.CREATED).toLocaleDateString()+' '+new Date(msg.CREATED).toLocaleTimeString()}}</q-item-label>
              <q-icon :name="msg.ICON" color="green" />
            </q-item-section>
          </q-item>
        </q-list>
      </div>
    </q-scroll-area>
  </div>
</template>

<script>
  import ReportDetailHeader from "../../components/ReportDetailHeader";
  import TopBar from "../../components/TopBar";

  export default {
    name: "pin_id",
    components: {TopBar, ReportDetailHeader},
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
      currentReport() {
        const events = this.$store.getters['reportModule/getReports']
        return events.find(event => {
          return event._id === this.$route.params.id.toString()
        })
      }
    },
  }
</script>

<style scoped>
  .scroll-area {
    height: calc(100vh - 344px);
    padding: 1em 0;
  }
  .answer{
    padding: 1.5em 1em;
  }
</style>
