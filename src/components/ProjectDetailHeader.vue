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
            <span style="margin-left: .2em">Takip Et</span>
          </q-btn>
          <q-btn color="primary" size="small">
            <q-icon name="star"></q-icon>
            <span style="margin-left: .2em">Puanla</span>
            <q-popup-proxy>
              <q-banner>
                <div class="text-center">
                  Projeyi Puanla
                </div>
                <div style="margin: 0.5em 0">
                  <q-rating
                    :disable="rated"
                    v-model="ratingModel"
                    size="2em"
                    :max="5"
                    color="primary"
                  />
                </div>
                <div class="text-center">
                  <q-btn :disable="rated" v-close-popup color="primary" @click="rate(currentPin)">
                    <q-icon name="send"></q-icon> Puanla!</q-btn>
                </div>
              </q-banner>
            </q-popup-proxy>
          </q-btn>
          <q-btn color="negative" size="small">
            <q-icon name="report"></q-icon>
            <span style="margin-left: .2em">Raporla</span>
          </q-btn>
        </q-btn-group>
      </q-card-section>
    </q-card>
  </div>
</template>

<script>
  export default {
    name: "ProjectDetailHeader",
    data(){
      return {
        ratingModel: 0,
        rated: false
      }
    },
    props: {
      showHeader:{
        type: Boolean,
        required: true
      },
      currentPin: {
        required: false
      }
    },
    methods:{
      rate(item){
        this.rated = true
      }
    },
    computed: {}
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
