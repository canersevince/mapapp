<template>
  <div class="flex flex-center topbar relative-position">
    <q-tabs
      v-model="tab"
      dense
      no-caps
      inline-label
      class="bg-white text-white  full-width full-height"
      style="padding: 4px 0"
    >
      <q-tab class="text-primary" name="uncompleted" icon="construction" label="Devam Edenler" />
      <q-tab class="text-green" name="completed" icon="check" label="Tamamlananlar" />
    </q-tabs>
      <q-form
        style="transition: 200ms ease-in-out;
        z-index: 9999;
        padding : 1em 2.5em;
        align-items: flex-start;
        justify-content: space-between"
        class="flex flex-center content-start justify-start full-width">
        <q-select
          rounded
          v-model="selectedM"
          label="Mahalle"
          :options="mahalleler"
          style="width: 30%; flex-basis: 33%"
          behavior="menu"
        />
        <q-select
          rounded
          v-model="selectedM"
          label="Sokak"
          :options="mahalleler"
          style="width: 30%; flex-basis: 33%"
          behavior="menu"
          class="selects"
        />
      </q-form>
  </div>
</template>

<script>
  export default {
    name: "TopProjectsBar",
    props:{
      link: String,
      title: String,
    },
    data(){
      return {
        tab: "",
        mahalleler: ["1", "2", "3"],
        selectedM : ""
      }
    },
    watch:{
      tab(e){
        this.$nextTick(() =>{
          this.$emit('changeTab',e)
        })
      }
    },
  }
</script>

<style lang="scss" scoped>
  .topbar {
    background: white;
    z-index: 999;
    box-shadow: 0 6px 12px rgba(#555, 0.1);
  }

  .topbar-text {
    margin: 0 auto;
    text-align: center;
  }

  .topbar > i {
    cursor: pointer;
  }
  .selects * {
    z-index: 99999;
  }
</style>
