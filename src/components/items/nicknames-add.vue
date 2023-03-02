<template>
  <div class="nicknames-add-container" v-bind:class="rootClassName">
    <div class="nicknames-add-container1">
      <div class="nicknames-add-container2">
        <span class="nicknames-add-text">{{ text }}</span>
        <input
          type="text"
          :placeholder="textinput_placeholder"
          class="nicknames-add-textinput input"
        />
        <span class="nicknames-add-text1">{{ text1 }}</span>
        <select class="nicknames-add-select">
          <option value="Option 1">Option 1</option>
          <option value="Option 2">Option 2</option>
          <option value="Option 3">Option 3</option>
        </select>
      </div>
    </div>
    <div class="nicknames-add-container3">
      <span class="nicknames-add-text2">{{ text2 }}</span>
      <input
        type="text"
        :placeholder="textinput_placeholder1"
        class="nicknames-add-textinput1 input"
      />
      <primary-blue-button
        button="+"
        rootClassName="primary-blue-button-root-class-name"
      ></primary-blue-button>
    </div>
  </div>
</template>

<script>
import PrimaryBlueButton from './primary-blue-button.vue'

export default {
  name: 'NicknamesAdd',
  props: {
    text1: {
      type: String,
      default: 'App',
    },
    rootClassName: String,
    textinput_placeholder: {
      type: String,
      default: 'placeholder',
    },
    textinput_placeholder1: {
      type: String,
      default: 'placeholder',
    },
    text2: {
      type: String,
      default: 'Other App',
    },
    text: {
      type: String,
      default: 'Nickname',
    },
  },
  components: {
    PrimaryBlueButton,
  },
}
</script>

<style scoped>
.nicknames-add-container {
  width: 556px;
  height: 174px;
  display: flex;
  position: relative;
  align-items: flex-start;
  flex-direction: column;
}
.nicknames-add-container1 {
  width: 50%;
  height: 141px;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
}
.nicknames-add-container2 {
  width: 554px;
  height: 77px;
  display: flex;
  align-self: flex-start;
  align-items: flex-start;
  justify-content: flex-start;
}
.nicknames-add-text {
  align-self: center;
  text-align: justify;
  margin-left: var(--dl-space-space-doubleunit);
  text-transform: capitalize;
}
.nicknames-add-textinput {
  align-self: center;
  margin-left: var(--dl-space-space-doubleunit);
}
.nicknames-add-text1 {
  align-self: center;
  text-align: center;
  margin-left: var(--dl-space-space-doubleunit);
}
.nicknames-add-select {
  align-self: center;
  margin-left: var(--dl-space-space-unit);
}
.nicknames-add-container3 {
  width: 663px;
  height: 148px;
  display: flex;
  align-self: center;
  align-items: center;
  justify-content: center;
}
.nicknames-add-text2 {
  align-self: center;
}
.nicknames-add-textinput1 {
  align-self: center;
  margin-left: var(--dl-space-space-doubleunit);
}

</style>
