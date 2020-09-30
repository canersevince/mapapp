<template>
  <div class="full-width search-bar-container">
    <q-input input-class="searchInput" style="width: 100%" :rounded="true" :outlined="true" v-model="text" class="text-dark input-bg-white">
      <template v-slot:append>
        <q-avatar>
          <q-icon name="search" icon="search"></q-icon>
        </q-avatar>
      </template>
    </q-input>
  </div>
</template>

<script lang="ts">
  import { Vue, Component, Prop } from 'vue-property-decorator'
  @Component({
    data(){
      return{
        text: ""
      }
    }
  })
  export default class ClassComponent extends Vue {
    @Prop({ type: String, required: false }) readonly title!: string;
  }
</script>

<style lang="scss">
  .search-bar-container{
    padding: 1em 1.25em;
  }

  .input-bg-white .q-field__control.relative-position.row.no-wrap {
    background: rgba(white, 0.95);
  }
</style>
