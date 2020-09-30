<template>
  <q-layout class="main bg-gray full-width" view="lHh Lpr lFf">
    <div class="content full-width">
      <q-page-container class="full-width">
        <q-scroll-area :visible="false" class="custom_scroll_area">
          <router-view :scrollProp="scrollDirection"></router-view>
        </q-scroll-area>
      </q-page-container>
    </div>
    <div :class="{'hideNav' : !isMenuActive}" class="navbar window-width bg-white">
      <q-tabs
        class="text-dark"
        inline-label
        v-model="tab"
      >
        <q-route-tab exact icon="construction" label="" name="construction" to="/"/>
        <q-route-tab exact icon="map" label="" name="map" to="/Map"/>
        <q-route-tab exact icon="speaker_notes" label="" name="speaker_notes" to="/"/>
        <q-route-tab exact icon="bookmark" label="" name="bookmark" to="/"/>
        <q-route-tab exact icon="login" label="" name="person" to="/Login" v-if="!auth"/>
        <q-route-tab exact icon="person" label="" name="person" to="/" v-if="auth"/>
        <q-btn-dropdown auto-close class="dropdown_custom" flat label="..." stretch>
          <q-list>
            <q-item @click="tab = 'More'" clickable v-for="a in 5">
              <q-avatar class="custom-q-avatar">
                <q-icon name="settings" size="16px"></q-icon>
              </q-avatar>
              <q-item-section>Submenu Text Here</q-item-section>
            </q-item>
          </q-list>
        </q-btn-dropdown>
      </q-tabs>
    </div>
  </q-layout>
</template>

<script>
  export default {
    data() {
      return {
        tab: "",
        scrollDirection: true,
        lastPosition: 0
      }
    },
    computed: {
      auth() {
        return this.$store.getters['authModule/getAuth']
      },
      isMenuActive() {
        return this.$store.getters['miscModule/getMenuState']
      }
    },
    methods: {
    },
    mounted() {
    }
  }
</script>

<style>
  .main {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    flex-direction: column;
    max-width: 100vw;
    overflow: hidden;
  }

  .navbar {
    transition: 100ms ease-in-out;
    z-index: 999;
    box-shadow: 0 -4px 12px rgba(0, 0, 0, .1);
  }

  .hideNav {
    opacity: 0;
    pointer-events: none;
    z-index: -1;
    height: 0 !important;
  }

  .dropdown_custom .q-btn__wrapper {
    padding: 2px 4px !important;
  }

  .navbar .q-tabs__content {
    display: flex;
    align-items: center;
    justify-content: space-evenly;
  }

  .custom_scroll_area {
    height: calc(100vh - 50px);
    max-height: calc(100vh - 50px);
  }

  .custom-q-avatar {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 24px;
    height: auto;
  }
</style>
