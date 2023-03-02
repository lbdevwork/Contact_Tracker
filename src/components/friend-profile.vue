<template>
  <div class="friend-profile-container">
    <div class="friend-profile-profile">
      <img :alt="image_alt" :src="image_src" class="friend-profile-image" />
      <div class="friend-profile-container01">
        <div class="friend-profile-container02">
          <h4 class="friend-profile-text">{{ heading }}</h4>
        </div>
        <div class="friend-profile-container03">
          <span class="friend-profile-text01">
            <span class="friend-profile-text02">{{ text7 }}</span>
            <span>{{ text8 }}</span>
          </span>
          <span class="friend-profile-text04">
            <span class="friend-profile-text05">{{ text9 }}</span>
            <span>{{ text10 }}</span>
            <br />
          </span>
          <span>
            <span class="friend-profile-text09">{{ text11 }}</span>
            <span>{{ text12 }}</span>
          </span>
        </div>
        <span>
          <span class="friend-profile-text12">{{ text }}</span>
          <span>{{ text1 }}</span>
          <br />
        </span>
        <button class="friend-profile-button button ButtonSmall">
          {{ button }}
        </button>
      </div>
      <div class="friend-profile-container04">
        <div class="friend-profile-container05">
          <img
            :alt="image_alt1"
            :src="image_src1"
            class="friend-profile-image1"
          />
          <span class="friend-profile-text15">{{ text2 }}</span>
        </div>
        <div class="friend-profile-container06">
          <img
            :alt="image_alt2"
            :src="image_src2"
            class="friend-profile-image2"
          />
          <span class="friend-profile-text16">{{ text3 }}</span>
        </div>
        <div class="friend-profile-container07">
          <img
            :alt="image_alt3"
            :src="image_src3"
            class="friend-profile-image3"
          />
          <span class="friend-profile-text17">
            <span>{{ text13 }}</span>
            <br />
          </span>
        </div>
        <div class="friend-profile-container08">
          <img
            :alt="image_alt4"
            :src="image_src4"
            class="friend-profile-image4"
          />
          <span class="friend-profile-text20">{{ text4 }}</span>
        </div>
        <div class="friend-profile-container09">
          <img
            :alt="image_alt5"
            :src="image_src5"
            class="friend-profile-image5"
          />
          <span class="friend-profile-text21">{{ text5 }}</span>
        </div>
        <div class="friend-profile-container10">
          <img
            :alt="image_alt6"
            :src="image_src6"
            class="friend-profile-image6"
          />
          <span class="friend-profile-text22">{{ text6 }}</span>
        </div>
        <div class="friend-profile-container11">
          <img
            :alt="image_alt7"
            :src="image_src7"
            class="friend-profile-image7"
          />
          <span class="friend-profile-text23">
            <span>{{ text14 }}</span>
            <br />
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'FriendProfile',
  props: {
    text4: {
      type: String,
      default: 'nanidastrutas@hotmail.com\n',
    },
    image_src: {
      type: String,
      default: '/playground_assets/bruce-mars-200h.jpg',
    },
    text14: {
      type: String,
      default: 'Link para Facebook',
    },
    text3: {
      type: String,
      default: '@HorgedasQuintas',
    },
    image_alt1: {
      type: String,
      default: 'image',
    },
    image_alt2: {
      type: String,
      default: 'image',
    },
    text10: {
      type: String,
      default: ': X/X/X',
    },
    image_src4: {
      type: String,
      default: '/playground_assets/email-round-solid-icon-200h.png',
    },
    text12: {
      type: String,
      default: ': XXXX \n',
    },
    image_src1: {
      type: String,
      default: '/playground_assets/46854-200h.png',
    },
    button: {
      type: String,
      default: 'Edit ',
    },
    text2: {
      type: String,
      default: '+351 912 123 421',
    },
    text: {
      type: String,
      default: 'Tags',
    },
    image_src5: {
      type: String,
      default: '/playground_assets/linkedin_logo_icon_189225-200h.png',
    },
    image_src2: {
      type: String,
      default: '/playground_assets/900px-instagram_icon-200h.png',
    },
    image_alt: {
      type: String,
      default: 'image',
    },
    heading: {
      type: String,
      default: 'Person´s Name',
    },
    text6: {
      type: String,
      default: 'Gags27#4021',
    },
    image_alt5: {
      type: String,
      default: 'image',
    },
    text1: {
      type: String,
      default: ': X , Y , Z , W , D , A',
    },
    text5: {
      type: String,
      default: 'Link para linkedin',
    },
    text7: {
      type: String,
      default: 'Age',
    },
    text11: {
      type: String,
      default: 'Location',
    },
    text8: {
      type: String,
      default: ': X',
    },
    image_src7: {
      type: String,
      default: '/playground_assets/facebook-logo-1-2-200h.png',
    },
    image_src6: {
      type: String,
      default: '/playground_assets/discord-logo-4-1-200h.png',
    },
    image_alt6: {
      type: String,
      default: 'image',
    },
    text13: {
      type: String,
      default: '@WhoDisMofo',
    },
    text9: {
      type: String,
      default: 'Birthday',
    },
    image_alt4: {
      type: String,
      default: 'image',
    },
    image_src3: {
      type: String,
      default: '/playground_assets/free-twitter-logo-icon-2429-thumb-200h.png',
    },
    image_alt7: {
      type: String,
      default: 'image',
    },
    image_alt3: {
      type: String,
      default: 'image',
    },
  },
}
</script>

<style scoped>
.friend-profile-container {
  width: 100%;
  height: 400px;
  display: flex;
  position: relative;
  align-items: flex-start;
  flex-direction: column;
}
.friend-profile-profile {
  width: 100%;
  height: 100%;
  display: flex;
  max-width: 1320px;
  align-self: center;
  align-items: flex-start;
  padding-top: var(--dl-space-space-sixunits);
  padding-left: var(--dl-space-space-tripleunit);
  padding-right: var(--dl-space-space-tripleunit);
  flex-direction: row;
  padding-bottom: 56px;
}
.friend-profile-image {
  width: 200px;
  height: 200px;
  object-fit: cover;
  border-radius: var(--dl-radius-radius-radius75);
}
.friend-profile-container01 {
  width: 394px;
  height: 210px;
  display: flex;
  align-items: flex-start;
  margin-left: var(--dl-space-space-sixunits);
  margin-right: 62px;
  flex-direction: column;
}
.friend-profile-container02 {
  width: 100%;
  display: flex;
  align-items: flex-start;
  margin-bottom: var(--dl-space-space-halfunit);
  flex-direction: row;
  justify-content: space-between;
}
.friend-profile-text {
  color: var(--dl-color-secondary-700);
  font-size: 1.5rem;
  font-style: normal;
  margin-bottom: var(--dl-space-space-halfunit);
}
.friend-profile-container03 {
  display: flex;
  align-items: flex-start;
  margin-bottom: var(--dl-space-space-unit);
  flex-direction: row;
}
.friend-profile-text01 {
  margin-right: var(--dl-space-space-unit);
}
.friend-profile-text02 {
  font-style: normal;
  font-weight: 700;
}
.friend-profile-text04 {
  margin-right: var(--dl-space-space-unit);
}
.friend-profile-text05 {
  font-style: normal;
  font-weight: 700;
}
.friend-profile-text09 {
  font-style: normal;
  font-weight: 700;
}
.friend-profile-text12 {
  font-style: normal;
  font-weight: 700;
}
.friend-profile-button {
  color: var(--dl-color-gray-white);
  outline: none;
  align-self: flex-start;
  background: linear-gradient(310deg,#2152ff,#21d4fd);
  box-shadow: 0 4px 7px -1px rgb(0 0 0 / 11%), 0 2px 4px -1px rgb(0 0 0 / 7%);
  margin-top: var(--dl-space-space-unit);
  transition: all .15s ease-in;
  padding-top: var(--dl-space-space-triplequarterunit);
  border-width: 0px;
  padding-left: var(--dl-space-space-unitandahalfunit);
  border-radius: 1.875rem;
  padding-right: var(--dl-space-space-unitandahalfunit);
  padding-bottom: var(--dl-space-space-triplequarterunit);
}
.friend-profile-button:hover {
  cursor: pointer;
  transform: scale(1.02);
}
.friend-profile-container04 {
  width: 409px;
  height: 335px;
  display: flex;
  align-self: center;
  align-items: center;
  margin-bottom: var(--dl-space-space-unitandahalfunit);
  flex-direction: column;
  justify-content: center;
}
.friend-profile-container05 {
  flex: 0 0 auto;
  width: auto;
  height: 35px;
  display: flex;
  align-self: flex-start;
  align-items: center;
  margin-left: var(--dl-space-space-unit);
  margin-bottom: var(--dl-space-space-unit);
  justify-content: center;
}
.friend-profile-image1 {
  width: 31px;
  height: 35px;
  align-self: flex-start;
  object-fit: cover;
}
.friend-profile-text15 {
  align-self: center;
  margin-left: var(--dl-space-space-unit);
}
.friend-profile-container06 {
  flex: 0 0 auto;
  width: auto;
  height: 33px;
  display: flex;
  align-self: flex-start;
  align-items: center;
  margin-left: var(--dl-space-space-unit);
  justify-content: center;
}
.friend-profile-image2 {
  width: 35px;
  height: 37px;
  align-self: flex-start;
  object-fit: cover;
}
.friend-profile-text16 {
  align-self: center;
  margin-left: var(--dl-space-space-unit);
}
.friend-profile-container07 {
  flex: 0 0 auto;
  width: auto;
  height: 35px;
  display: flex;
  align-self: flex-start;
  margin-top: var(--dl-space-space-unit);
  align-items: flex-start;
  margin-left: var(--dl-space-space-unit);
  justify-content: center;
}
.friend-profile-image3 {
  width: 34px;
  height: 35px;
  align-self: flex-start;
  object-fit: cover;
}
.friend-profile-text17 {
  align-self: center;
  margin-left: var(--dl-space-space-unit);
}
.friend-profile-container08 {
  flex: 0 0 auto;
  width: auto;
  height: 39px;
  display: flex;
  align-self: flex-start;
  margin-top: var(--dl-space-space-unit);
  align-items: flex-start;
  margin-left: var(--dl-space-space-unit);
  justify-content: center;
}
.friend-profile-image4 {
  width: 33px;
  height: 39px;
  align-self: flex-start;
  object-fit: cover;
}
.friend-profile-text20 {
  align-self: center;
  margin-left: var(--dl-space-space-unit);
}
.friend-profile-container09 {
  flex: 0 0 auto;
  width: auto;
  height: 35px;
  display: flex;
  align-self: flex-start;
  margin-top: var(--dl-space-space-unit);
  align-items: flex-start;
  margin-left: var(--dl-space-space-unit);
  justify-content: center;
}
.friend-profile-image5 {
  width: 34px;
  height: 35px;
  align-self: flex-start;
  object-fit: cover;
}
.friend-profile-text21 {
  align-self: center;
  margin-left: var(--dl-space-space-unit);
}
.friend-profile-container10 {
  flex: 0 0 auto;
  width: auto;
  height: 29px;
  display: flex;
  align-self: flex-start;
  margin-top: var(--dl-space-space-unit);
  align-items: flex-start;
  margin-left: var(--dl-space-space-unit);
  justify-content: center;
}
.friend-profile-image6 {
  width: 29px;
  height: 29px;
  align-self: flex-start;
  object-fit: cover;
}
.friend-profile-text22 {
  align-self: center;
  margin-left: var(--dl-space-space-unit);
}
.friend-profile-container11 {
  flex: 0 0 auto;
  width: auto;
  height: 30px;
  display: flex;
  align-self: flex-start;
  margin-top: var(--dl-space-space-unit);
  align-items: flex-start;
  margin-left: var(--dl-space-space-unit);
  justify-content: center;
}
.friend-profile-image7 {
  width: 29px;
  height: 30px;
  align-self: flex-start;
  object-fit: cover;
}
.friend-profile-text23 {
  align-self: center;
  margin-left: var(--dl-space-space-unit);
}
@media(max-width: 991px) {
  .friend-profile-container01 {
    margin-left: var(--dl-space-space-tripleunit);
    margin-right: var(--dl-space-space-tripleunit);
  }
}
@media(max-width: 767px) {
  .friend-profile-profile {
    padding-top: var(--dl-space-space-fourunits);
    padding-left: var(--dl-space-space-doubleunit);
    padding-right: var(--dl-space-space-doubleunit);
    flex-direction: column;
    padding-bottom: var(--dl-space-space-fourunits);
  }
  .friend-profile-container01 {
    margin-left: 0px;
    margin-right: 0px;
  }
  .friend-profile-container02 {
    margin-top: var(--dl-space-space-unit);
    margin-bottom: var(--dl-space-space-unit);
  }
  .friend-profile-text {
    margin-top: var(--dl-space-space-unit);
  }
}
</style>
