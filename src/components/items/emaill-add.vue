<template>
  <div class="emaill-add-container" v-bind:class="rootClassName">
    <span class="emaill-add-text">{{ text }}</span>
    <input
      type="text"
      :placeholder="textinput_placeholder"
      class="emaill-add-textinput input"
    />
  </div>
</template>

<script>
export default {
  name: 'EmaillAdd',
  props: {
    rootClassName: String,
    textinput_placeholder: {
      type: String,
      default: 'placeholder',
    },
    text: {
      type: String,
      default: 'Email',
    },
  },
}
</script>

<style scoped>
.emaill-add-container {
  width: 396px;
  height: 95px;
  display: flex;
  position: relative;
  align-items: center;
  flex-direction: row;
  justify-content: flex-start;
}
.emaill-add-text {
  margin-left: var(--dl-space-space-doubleunit);
  margin-right: var(--dl-space-space-doubleunit);
}
.emaill-add-textinput {
  width: 280px;
  height: 40px;
}

</style>
