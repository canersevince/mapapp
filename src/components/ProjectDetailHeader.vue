<template>
  <div class="header-main" style="max-height: 40vh" :class="{hideHeader : !showHeader}">
    <q-card class="detailHeader text-center">
      <q-card-section style="display: flex; flex-direction: column; align-items: center; justify-content: center">
        <q-avatar size="75px">
          <img :src="currentPin.THUMBNAIL" class="detail_avatar">
        </q-avatar>
        <h1 class="item-title">{{currentPin.TITLE}}</h1>
        <p>{{currentPin.DESCRIPTION}}
        </p>
        <q-badge color="blue">{{new Date(currentPin.CREATED).toLocaleDateString()}}</q-badge>
        <q-btn-group style="margin-top: 1em" rounded>
          <q-btn color="secondary" size="small">
            <q-icon name="bookmark"></q-icon>
            <span style="margin-left: .2em">Takip Et</span></q-btn>
          <q-btn color="negative" size="small">
            <q-icon name="report"></q-icon>
            <span style="margin-left: .2em">Raporla</span></q-btn>
        </q-btn-group>
      </q-card-section>
    </q-card>
  </div>
</template>

<script>
  export default {
    name: "ProjectDetailHeader",
    props: {
      showHeader:{
        type: Boolean,
        required: true
      },
      currentPin: {
        required: false
      }
    },
    computed: {}
  }
</script>

<style scoped>
  .header-main{
    transition: transform 200ms ease-in-out, height 500ms ease-in-out, opacity 200ms;
  }
  .detailHeader {
    width: 100%;
    background: white;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  .item-title {
    font-size: 20px;
    font-weight: bold;
    color: #333;
    line-height: 100%;
    margin: .5em 0;
  }
  .hideHeader{
    transform: translateY(-150%);
    pointer-events: none;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
  }
</style>
