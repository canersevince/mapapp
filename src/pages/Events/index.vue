<template>
  <div class="bg-white">
    <TopProjectsBar
      :tabs="tabs"
      @changeTab="changeTab($event)"
      style="position:sticky; top: 0; left: 0"
      title="ETKİNLİK VE HABERLER"
    >
    </TopProjectsBar>
    <div class="proje list-container"
         style="height: 90vh; overflow: hidden; display: flex; align-items: center; justify-content: center"
         v-if="(showDone === 'completed' && oldEvents.length === 0) || (showDone !== 'completed' && currentEvents.length === 0)">
      <q-banner
        class="text-white bg-red"
        inline-actions>
        Maalesef henüz bir etkinlik yok.
      </q-banner>
    </div>
    <q-virtual-scroll
      :items="showDone === 'completed' ? oldEvents : currentEvents"
      class="proje list-container scroll-pad"
      separator
    >
      <template v-slot="{ item, index }">
        <q-item @click="eventClick(item._id)" class="item" clickable v-if="loaded" v-ripple>
          <q-item-section avatar style="flex-basis: 15%; height: auto">
            <q-avatar>
              <img :src="item.THUMBNAIL">
            </q-avatar>
          </q-item-section>
          <q-item-section style="flex-basis: 70%; width: 50%; height: auto">
            <q-item-label>
              <h1 class="item-title">{{ item.TITLE }}
              </h1>
            </q-item-label>
            <q-item-label caption style="flex-basis: 15%">
              <p class="item-desc">
                {{ item.DESCRIPTION }}
              </p>
              <div class="flex justify-start tag-container" style="align-items: flex-start; flex-wrap: wrap">
                <q-badge :color="item.FREE ? 'green' : 'warning'">
                  {{item.FREE ? 'Ücretsiz' : 'Ücretli'}}
                </q-badge>
                <q-badge :key="i" color="pink" v-for="(tag, i) in item.TAGS">{{tag}}</q-badge>
              </div>
            </q-item-label>
          </q-item-section>
          <q-item-section style="height: auto">
            <q-icon color="grey" icon="keyboard_arrow_right" name="keyboard_arrow_right" size="24px"></q-icon>
          </q-item-section>
        </q-item>
      </template>
    </q-virtual-scroll>
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
            label: 'Güncel Etkinlikler',
            name: 'uncompleted',
            icon: 'today',
            class: 'text-primary'
          },
          {
            label: 'Geçmiş Etkinlikler',
            name: 'completed',
            icon: 'done',
            class: 'text-red'
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
      currentEvents() {
        return this.$store.getters['eventModule/getEvents']
      },
      oldEvents() {
        return this.$store.getters['eventModule/getPastEvents']
      }
    },
    methods: {
      changeTab(e) {
        this.showDone = e
        console.log(e)
      },
      eventClick(id) {
        setTimeout(() => {
          this.$router.push(`/Events/${id}`)
        }, 500)
      },
    },
    mounted() {
      var self = this;
      if (!this.$q.platform.mobile) {
        setTimeout(() => {
          self.loaded = true;
        }, 500)
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
</style>
