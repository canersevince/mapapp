<template>
  <div class="text-center" style="flex-direction: column; max-height: 100vh; align-items: center; justify-content: flex-start; display: flex">
    <Logo style="margin: 2em 0 1em 0" ></Logo>
    <q-form
      @reset="onReset"
      @submit="onSubmit"
      class="q-gutter-md scrollable"
      style="margin-top: .25em; width: 75%; max-width: 450px"
    >
        <q-input @focus="hideMenu" @focusout="showMenu" class="input-bg-white form-object" outlined placeholder="Adınız"
                 rounded v-model="first_name"></q-input>
        <q-input @focus="hideMenu" @focusout="showMenu" class="input-bg-white form-object" outlined
                 placeholder="Soyadınız" rounded v-model="last_name"></q-input>
        <q-input @focus="hideMenu" @focusout="showMenu" class="input-bg-white form-object" outlined
                 placeholder="Email Adresiniz" rounded v-model="email"></q-input>
        <q-input @focus="hideMenu" @focusout="showMenu" class="input-bg-white form-object" outlined
                 placeholder="Şifreniz" rounded v-model="password"></q-input>
        <q-input @focus="hideMenu" @focusout="showMenu" class="input-bg-white form-object"
                 outlined placeholder="Şifrenizi tekrar giriniz..." rounded v-model="passwordConfirm"></q-input>
        <q-toggle class="form-object" label="Kullanım şartlarını kabul ediyorum" v-model="accept"/>
        <p class="muted-text form-object"><span @click="showLogin">Zaten Üyeyim</span> / <span @click="forgotPw">Şifremi Unuttum</span></p>
        <div class="form-object">
          <q-btn color="dark" label="GİRİŞ YAP" padding=".5em 3em" rounded type="submit"/>
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
        password: "",
        passwordConfirm: "",
        first_name: "",
        last_name: "",
        accept: false
      }
    },
    methods: {
      showLogin() {
        this.$emit('showLogin')
      },
      forgotPw() {
        this.$emit('forgotPw')
      },
      onReset() {

      },
      onSubmit() {

      },
      hideMenu() {
        if (!this.$q.platform.is.mobile) return
        this.$store.commit('miscModule/hideMenu')
      },
      showMenu() {
        if (!this.$q.platform.is.mobile) return
        this.$store.commit('miscModule/showMenu')
      }
    }
  }
</script>

<style lang="scss">
  .input-bg-white .q-field__control.relative-position.row.no-wrap, .q-field__control.relative-position.row.no-wrap {
    background: rgba(white, 0.95) !important;
    overflow: hidden;
  }

  .form-object {
    margin-top: .75em;
  }
</style>
