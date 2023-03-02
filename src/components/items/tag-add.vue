<template>
  <div class="tag-add-container" v-bind:class="rootClassName">
    <div class="tag-add-container1">
      <span class="tag-add-text">{{ text }}</span>
      <select>
        <option value="Option 1">Option 1</option>
        <option value="Option 2">Option 2</option>
        <option value="Option 3">Option 3</option>
      </select>
      <span class="tag-add-text1">{{ text1 }}</span>
      <input
        type="text"
        :placeholder="textinput_placeholder"
        class="tag-add-textinput input"
      />
      <primary-blue-button
        button="+"
        rootClassName="primary-blue-button-root-class-name3"
      ></primary-blue-button>
    </div>
  </div>
</template>

<script>
import PrimaryBlueButton from './primary-blue-button.vue'

export default {
  name: 'TagAdd',
  props: {
    text1: {
      type: String,
      default: 'Other Tag',
    },
    text: {
      type: String,
      default: 'Tag',
    },
    rootClassName: String,
    textinput_placeholder: {
      type: String,
      default: 'placeholder',
    },
  },
  components: {
    PrimaryBlueButton,
  },
}
</script>

<style scoped>
.tag-add-container {
  width: 591px;
  height: 130px;
  display: flex;
  position: relative;
  align-items: flex-start;
  flex-direction: column;
  justify-content: center;
}
.tag-add-container1 {
  width: 595px;
  height: 99px;
  display: flex;
  align-self: center;
  align-items: center;
  justify-content: center;
}
.tag-add-text {
  margin-left: var(--dl-space-space-unit);
  margin-right: var(--dl-space-space-unit);
}
.tag-add-text1 {
  margin-left: var(--dl-space-space-doubleunit);
  margin-right: var(--dl-space-space-unit);
}
.tag-add-textinput {
  margin-right: var(--dl-space-space-unit);
}
.tag-add-root-class-name {
  align-self: center;
}
</style>
