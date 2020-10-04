<template>
  <q-layout class="main bg-gray full-width" :class="{iosLayout : $q.platform.is.ios }" view="lHh Lpr lFf">
    <div class="content full-width">
      <q-page-container class="full-width">
        <q-scroll-area :visible="false" class="custom_scroll_area" :class="{iosScrollArea : $q.platform.is.ios, navHidden: !isMenuActive}">
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
        <q-route-tab exact icon="event" label="" name="event" to="/Events"/>
        <q-route-tab exact icon="bookmark" label="" name="bookmark" to="/Bookmarks"/>
        <q-route-tab exact icon="login" label="" name="person" to="/Login" v-if="!auth"/>
        <q-route-tab exact icon="person" label="" name="person" to="/" v-if="auth"/>
        <q-btn-dropdown auto-close class="dropdown_custom" flat label="..." stretch>
          <q-list>
            <q-item @click="tab = 'More0'" clickable>
              <q-avatar class="custom-q-avatar">
                <q-icon name="settings" size="16px"></q-icon>
              </q-avatar>
              <q-item-section>E-Belediye</q-item-section>
            </q-item>
            <q-item @click="tab = 'More2'" clickable>
              <q-avatar class="custom-q-avatar">
                <q-icon name="settings" size="16px"></q-icon>
              </q-avatar>
              <q-item-section>E-İmar</q-item-section>
            </q-item>
            <q-item @click="navigator('More1', '/Reports')" clickable>
              <q-avatar class="custom-q-avatar">
                <q-icon name="settings" size="16px"></q-icon>
              </q-avatar>
              <q-item-section>Şikayet Merkezi</q-item-section>
            </q-item>
            <q-item @click="tab = 'More3'" clickable>
              <q-avatar class="custom-q-avatar">
                <q-icon name="settings" size="16px"></q-icon>
              </q-avatar>
              <q-item-section>İlçemizi Tanıyalım</q-item-section>
            </q-item>
            <q-item @click="tab = 'More4'" clickable>
              <q-avatar class="custom-q-avatar">
                <q-icon name="settings" size="16px"></q-icon>
              </q-avatar>
              <q-item-section>Eğitim Merkezi</q-item-section>
            </q-item>
            <q-item @click="tab = 'More4'" clickable>
              <q-avatar class="custom-q-avatar">
                <q-icon name="settings" size="16px"></q-icon>
              </q-avatar>
              <q-item-section>İstihdam Merkezi</q-item-section>
            </q-item>
            <q-item @click="darkMode(true)" clickable v-if="!isDark">
              <q-avatar class="custom-q-avatar">
                <q-icon name="nights_stay" size="16px"></q-icon>
              </q-avatar>
              <q-item-section>Karanlık Modu</q-item-section>
            </q-item>
            <q-item @click="darkMode(false)" clickable v-else>
              <q-avatar class="custom-q-avatar">
                <q-icon name="wb_incandescent" size="16px"></q-icon>
              </q-avatar>
              <q-item-section>Aydınlık Modu</q-item-section>
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
      },
      isDark(){
        return this.$q.dark.isActive
      }
    },
    methods: {
      navigator(tab, path){
        this.tab = tab
        this.$router.push(path)
      },
      darkMode(v){
        console.log(v)
        this.$q.dark.set(v)
      }
    },
    mounted() {
    }
  }
</script>

<style lang="scss">
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
    div[role='tablist'] {
      height: 0;
    }
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
    height: calc(100vh - 48px);
    max-height: calc(100vh - 48px);
  }

  .custom-q-avatar {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 24px;
    height: auto;
  }
  .iosLayout{

  }
  .iosScrollArea{
    height: calc(100vh - 50px);
    max-height: calc(100vh - 50px);
  }
  .navHidden{
    height: 100vh;
    max-height: 100vh;
  }
</style>
