<template>
    <div class="content-center form-container">
      <TopBar title="OTURUM AÇ" link="'/'"></TopBar>
      <Component
        @forgotPw="activeComponent='ForgotPassword'"
        @showLogin="activeComponent = 'LoginForm'"
        @showSignup="activeComponent = 'SignupForm'"
        :is="activeComponent"></Component>
    </div>
</template>

<script>
  import TopBar from "../components/TopBar";
  import LoginForm from "../components/LoginForm";
  import SignupForm from "../components/SignupForm";


  export default {
    name: "Login",
    components: {SignupForm, TopBar, LoginForm},
    data() {
      return {
        activeComponent: 'LoginForm'
      }
    },
  }
</script>
<style scoped>
  .form-container {

  }
</style>
