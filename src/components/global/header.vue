<template>
  <div class="header-container" v-bind:class="rootClassName">
    <header data-role="Header" class="header-header">
      <div class="header-left-side">
        <router-link to="/" class="header-navlink">
          <img :alt="image_alt" :src="image_src" class="header-image" />
        </router-link>
        <span class="header-text">{{ text }}</span>
      </div>
      <div class="header-right-side">
        <input
          type="text"
          :placeholder="textinput_placeholder"
          class="header-textinput input"
        />
        <div class="header-icon-group">
          <div data-role="BurgerMenu" class="header-burger-menu">
            <svg viewBox="0 0 1024 1024" class="header-icon">
              <path
                d="M128 554.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 298.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 810.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"
              ></path>
            </svg>
          </div>
          <svg viewBox="0 0 1024 1024" class="header-icon02">
            <path
              d="M684.416 676.523c-1.451 1.109-2.859 2.347-4.224 3.712s-2.56 2.731-3.712 4.224c-53.675 51.755-126.677 83.541-207.147 83.541-82.475 0-157.099-33.365-211.2-87.467s-87.467-128.725-87.467-211.2 33.365-157.099 87.467-211.2 128.725-87.467 211.2-87.467 157.099 33.365 211.2 87.467 87.467 128.725 87.467 211.2c0 80.469-31.787 153.472-83.584 207.189zM926.165 865.835l-156.8-156.8c52.523-65.707 83.968-149.035 83.968-239.701 0-106.027-43.008-202.069-112.469-271.531s-165.504-112.469-271.531-112.469-202.069 43.008-271.531 112.469-112.469 165.504-112.469 271.531 43.008 202.069 112.469 271.531 165.504 112.469 271.531 112.469c90.667 0 173.995-31.445 239.701-83.968l156.8 156.8c16.683 16.683 43.691 16.683 60.331 0s16.683-43.691 0-60.331z"
            ></path>
          </svg>
        </div>
      </div>
      <div data-role="MobileMenu" class="header-mobile-menu">
        <nav class="header-nav">
          <div class="header-container1">
            <div data-role="CloseMobileMenu" class="header-close-mobile-menu">
              <svg viewBox="0 0 1024 1024" class="header-icon04">
                <path
                  d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"
                ></path>
              </svg>
            </div>
          </div>
        </nav>
        <div>
          <svg viewBox="0 0 950.8571428571428 1024" class="header-icon06">
            <path
              d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"
            ></path></svg
          ><svg viewBox="0 0 877.7142857142857 1024" class="header-icon08">
            <path
              d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"
            ></path></svg
          ><svg viewBox="0 0 602.2582857142856 1024" class="header-icon10">
            <path
              d="M548 6.857v150.857h-89.714c-70.286 0-83.429 33.714-83.429 82.286v108h167.429l-22.286 169.143h-145.143v433.714h-174.857v-433.714h-145.714v-169.143h145.714v-124.571c0-144.571 88.571-223.429 217.714-223.429 61.714 0 114.857 4.571 130.286 6.857z"
            ></path>
          </svg>
        </div>
      </div>
      <svg viewBox="0 0 1024 1024" class="header-icon12">
        <path
          d="M128 554.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 298.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 810.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"
        ></path>
      </svg>
    </header>
  </div>
</template>

<script>
export default {
  name: 'Header',
  props: {
    rootClassName: String,
    textinput_placeholder: {
      type: String,
      default: 'placeholder',
    },
    image_src: {
      type: String,
      default: '/playground_assets/banco-200h.ico',
    },
    image_alt: {
      type: String,
      default: 'image',
    },
    text: {
      type: String,
      default: 'Contact Bank',
    },
  },
}
</script>

<style scoped>
.header-container {
  width: 100%;
  height: 85px;
  display: flex;
  position: relative;
  align-items: center;
  border-color: var(--dl-color-secondary-400);
  border-width: 1px;
  flex-direction: column;
  justify-content: center;
}
.header-header {
  width: 100%;
  height: 93px;
  display: flex;
  max-width: 1400px;
  align-items: center;
  padding-top: 32px;
  padding-left: 48px;
  padding-right: 48px;
  padding-bottom: 32px;
  justify-content: space-between;
}
.header-left-side {
  flex: 1;
  width: 242px;
  height: 100px;
  display: flex;
  align-items: flex-start;
}
.header-navlink {
  display: contents;
}
.header-image {
  width: 74px;
  height: 71px;
  align-self: center;
  object-fit: cover;
  text-decoration: none;
}
.header-text {
  align-self: center;
  font-style: normal;
  font-weight: 800;
  padding-left: var(--dl-space-space-doubleunit);
  text-transform: capitalize;
}
.header-right-side {
  flex: 1;
  width: 158px;
  height: 100px;
  display: flex;
  align-items: flex-start;
  justify-content: flex-end;
}
.header-textinput {
  width: 239px;
  height: 30px;
  display: none;
  align-self: center;
  border-radius: var(--dl-radius-radius-radius5);
}
.header-icon-group {
  display: flex;
  align-self: center;
  align-items: center;
  justify-content: flex-end;
}
.header-burger-menu {
  display: none;
}
.header-icon {
  width: 16px;
  height: 16px;
  display: flex;
}
.header-icon02 {
  width: 40px;
  height: 32px;
  margin-left: var(--dl-space-space-unit);
  margin-right: var(--dl-space-space-unit);
}
.header-mobile-menu {
  top: 0px;
  left: 0px;
  width: 100%;
  height: 100vh;
  display: none;
  padding: 32px;
  z-index: 100;
  position: absolute;
  flex-direction: column;
  justify-content: space-between;
  background-color: #fff;
}
.header-nav {
  display: flex;
  align-items: flex-start;
  flex-direction: column;
}
.header-container1 {
  width: 100%;
  display: flex;
  align-items: center;
  margin-bottom: 48px;
  justify-content: space-between;
}
.header-close-mobile-menu {
  display: flex;
  align-items: center;
  justify-content: center;
}
.header-icon04 {
  width: 16px;
  height: 16px;
}
.header-icon06 {
  width: 16px;
  height: 16px;
  margin-right: 32px;
}
.header-icon08 {
  width: 16px;
  height: 16px;
  margin-right: 32px;
}
.header-icon10 {
  width: 16px;
  height: 16px;
}
.header-icon12 {
  width: 32px;
  align-self: center;
}





@media(max-width: 767px) {
  .header-header {
    padding-left: 32px;
    padding-right: 32px;
  }
  .header-burger-menu {
    display: flex;
    align-items: center;
    margin-right: 16px;
    justify-content: center;
  }
  .header-icon12 {
    display: flex;
  }
}
@media(max-width: 479px) {
  .header-header {
    padding: var(--dl-space-space-unit);
  }
  .header-mobile-menu {
    padding: 16px;
  }
}
</style>
