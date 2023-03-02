<template>
  <div class="login-container">
    <div class="login-container1">
      <div class="login-card">
        <h1 class="login-text">
          <span class="login-text1">Nakama Bank</span>
          <br />
        </h1>
        <h1 class="login-text3">Login</h1>
        <span class="login-text4">Username</span>
        <input
          type="text"
          placeholder="placeholder"
          class="login-textinput input"
        />
        <span class="login-text5">Password</span>
        <input type="text" placeholder="placeholder" class="input" />
        <router-link to="/" class="login-navlink">
          <primary-blue-button
            button="Login"
            rootClassName="primary-blue-button-root-class-name5"
            class="login-component"
          ></primary-blue-button>
        </router-link>
        <primary-blue-button
          button="Register"
          rootClassName="primary-blue-button-root-class-name7"
        ></primary-blue-button>
      </div>
    </div>
  </div>
</template>

<script>
import PrimaryBlueButton from '../components/items/primary-blue-button.vue'

export default {
  name: 'Login',
  components: {
    PrimaryBlueButton,
  },
  metaInfo: {
    title: 'NakamaTracker',
    meta: [
      {
        property: 'og:title',
        content: 'NakamaTracker',
      },
    ],
  },
}
</script>

<style scoped>
.login-container {
  width: 100%;
  height: auto;
  display: flex;
  flex-wrap: wrap;
  min-height: 100vh;
  align-items: center;
  flex-direction: column;
  justify-content: center;
}
.login-container1 {
  flex: 1;
  width: 100%;
  height: 931px;
  display: flex;
  position: relative;
  max-width: 100%;
  min-height: 85vh;
  align-items: center;
  flex-direction: column;
  background-size: contain;
  justify-content: center;
  background-image: url("/playground_assets/3%20-%20logo%20nakama%20tracker%20digital%20art-1500w.png");
  background-position: center;
}
.login-card {
  width: 542px;
  height: 709px;
  display: flex;
  opacity: 1;
  z-index: 0;
  align-self: center;
  box-shadow: 0 8px 26px -4px hsla(0,0%,8%,.15),0 8px 9px -5px hsla(0,0%,8%,.06)!important;
  align-items: center;
  border-radius: var(--dl-radius-radius-round);
  flex-direction: column;
  backdrop-filter: saturate(200%) blur(30px);
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.12);
}
.login-text {
  color: #ededf5;
  font-size: 3rem;
  font-weight: 600;
  margin-bottom: var(--dl-space-space-halfunit);
}
.login-text1 {
  font-style: normal;
  font-weight: 800;
}
.login-text3 {
  color: #ededf5;
  font-style: normal;
  font-weight: 800;
  margin-bottom: var(--dl-space-space-unitandahalfunit);
}
.login-text4 {
  color: #ededf5;
  margin-bottom: var(--dl-space-space-halfunit);
}
.login-textinput {
  margin-bottom: var(--dl-space-space-halfunit);
}
.login-text5 {
  color: #ededf5;
  margin-bottom: var(--dl-space-space-halfunit);
}
.login-navlink {
  display: contents;
}
.login-component {
  text-decoration: none;
}
@media(max-width: 991px) {
  .login-container1 {
    max-width: 960px;
  }
  .login-card {
    width: 385px;
  }
}
@media(max-width: 767px) {
  .login-card {
    align-items: center;
  }
}
@media(max-width: 479px) {
  .login-card {
    padding: var(--dl-space-space-unit);
  }
}
</style>
