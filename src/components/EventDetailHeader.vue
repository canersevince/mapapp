<template>
  <div class="header-main" style="max-height: 40vh" :class="{hideHeader : !showHeader}">
    <q-card class="detailHeader text-center">
      <q-card-section style="display: flex; flex-direction: column; align-items: center; justify-content: center">
        <q-avatar size="75px">
          <img :src="currentEvent.THUMBNAIL" class="detail_avatar">
        </q-avatar>
        <h1 class="item-title">{{currentEvent.TITLE}}</h1>
        <p>{{currentEvent.DESCRIPTION}}
        </p>
        <q-badge color="blue">{{new Date(currentEvent.CREATED).toLocaleDateString()}}</q-badge>
        <q-btn-group style="margin-top: 1em" rounded>
          <q-btn v-if="!currentEvent.IS_FREE" @click="buyTicket" color="primary" size="small">
            <q-icon name="confirmation_number" size="16px"></q-icon>
            <span style="margin-left: .2em">BİLET SATIŞ NOKTALARI</span>
          </q-btn>
          <q-btn @click="buyTicket" v-else color="green" size="small">
            <q-icon name="confirmation_number" size="16px"></q-icon>
            <span style="margin-left: .2em">BU ETKİNLİĞE KATILIM ÜCRETSİZ</span>
          </q-btn>
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
      currentEvent: {
        required: false
      }
    },
    methods:{
      buyTicket(){
        alert('Yapım aşamasında.')
      }
    }
  }
</script>

<style scoped>
  .header-main{
    transition: transform 500ms ease-in-out, height 1000ms ease-in-out, opacity 1000ms;
  }
  .detailHeader {
    width: 100%;
    background: white;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    z-index: 9999;
  }

  .item-title {
    font-size: 20px;
    font-weight: bold;
    color: #333;
    line-height: 100%;
    margin: .5em 0;
  }
  .hideHeader{
    transform: translateY(-100%);
    pointer-events: none;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 999;
  }
</style>
