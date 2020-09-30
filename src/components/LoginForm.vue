<template>
  <div class="flex flex-center justify-center content-center text-center" style="flex-direction: column">
    <Logo style="margin: 3em 0 1.5em 0" ></Logo>
    <q-form
      @reset="onReset"
      @submit="onSubmit"
      class="q-gutter-md"
      style="margin-top: 1em; width: 75%; max-width: 450px"
    >
      <q-input @focus="hideMenu" @focusout="showMenu" placeholder="Email Adresiniz" rounded outlined v-model="email" class="input-bg-white">
        <template v-slot:append>
          <q-avatar>
            <q-icon name="person"></q-icon>
          </q-avatar>
        </template>
      </q-input>

      <q-input @focus="hideMenu" @focusout="showMenu" placeholder="Şifreniz" rounded outlined v-model="password" class="input-bg-white">
        <template v-slot:append>
          <q-avatar>
            <q-icon name="vpn_key"></q-icon>
          </q-avatar>
        </template>
      </q-input>
      <p class="muted-text"><span @click="showSignup">Hesabım Yok</span> / <span @click="forgotPw">Şifremi Unuttum</span></p>
      <div>
        <q-btn color="dark" rounded label="GİRİŞ YAP" type="submit" padding=".5em 3em"/>
      </div>
    </q-form>
  </div>
</template>

<script>
  import Logo from "./Logo";
  export default {
    name: "LoginForm",
    components: {Logo},
    data() {
      return {
        email: "",
        password: ""
      }
    },
    methods: {
      showSignup(){
        this.$emit('showSignup')
      },
      forgotPw(){
        this.$emit('forgotPw')
      },
      onReset() {

      },
      onSubmit() {

      },
      hideMenu(){
        if(!this.$q.platform.is.mobile) return
        this.$store.commit('miscModule/hideMenu')
      },
      showMenu(){
        if(!this.$q.platform.is.mobile) return
        this.$store.commit('miscModule/showMenu')
      }
    }
  }
</script>

<style lang="scss">
 .input-bg-white .q-field__control.relative-position.row.no-wrap, .q-field__control.relative-position.row.no-wrap{
    background: rgba(white, 0.95) !important;
    overflow: hidden;
  }
</style>
