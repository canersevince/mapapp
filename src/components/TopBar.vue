<template>
  <div class="flex flex-center topbar">
    <q-icon v-if="link" @click="$router.push(link)" icon="keyboard_arrow_left" name="keyboard_arrow_left" size="32px" class="absolute" style="left: 0; margin: auto"></q-icon>
    <q-toolbar-title class="topbar-text">{{title}}</q-toolbar-title>
  </div>
</template>

<script>
  export default {
    name: "TopBar",
    props:{
      link: String,
      title: String
    }
  }
</script>

<style lang="scss" scoped>
  .muted-text{

  }
  .topbar {
    padding: 8px 12px;
    background: white;
    position: sticky;
    top: 0;
    left: 0;
    z-index: 9989;
    box-shadow: 0 6px 12px rgba(#555, 0.1);
  }

  .topbar-text {
    margin: 0 auto;
    text-align: center;
  }

  .topbar > i {
    cursor: pointer;
  }
</style>
