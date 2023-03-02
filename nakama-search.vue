<template>
  <div class="nakama-search-container">
    <div class="nakama-search-container1">
      <app-header rootClassName="header-root-class-name1"></app-header>
      <div class="nakama-search-container2">
        <div class="nakama-search-container3">
          <search-bar rootClassName="search-bar-root-class-name"></search-bar>
          <div class="nakama-search-container4"></div>
        </div>
        <status-side-bar
          rootClassName="status-side-bar-root-class-name"
        ></status-side-bar>
      </div>
    </div>
  </div>
</template>

<script>
import AppHeader from '../components/header'
import SearchBar from '../components/search-bar'
import StatusSideBar from '../components/status-side-bar'

export default {
  name: 'NakamaSearch',
  components: {
    AppHeader,
    SearchBar,
    StatusSideBar,
  },
  metaInfo: {
    title: 'NakamaSearch - NakamaTracker',
    meta: [
      {
        property: 'og:title',
        content: 'NakamaSearch - NakamaTracker',
      },
    ],
  },
}
</script>

<style scoped>
.nakama-search-container {
  width: 100%;
  display: flex;
  overflow: auto;
  min-height: 100vh;
  align-items: center;
  flex-direction: column;
}
.nakama-search-container1 {
  flex: 1;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  justify-content: flex-start;
}
.nakama-search-container2 {
  flex: 1;
  width: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
}
.nakama-search-container3 {
  flex: 1;
  width: 100%;
  height: auto;
  display: flex;
  align-self: stretch;
  align-items: center;
  flex-direction: column;
  justify-content: flex-start;
}
.nakama-search-container4 {
  flex: 1;
  width: 100%;
  border: 2px dashed rgba(120, 120, 120, 0.4);
  height: 100px;
  display: flex;
  align-self: center;
  align-items: flex-start;
  padding-top: var(--dl-space-space-doubleunit);
  padding-left: var(--dl-space-space-doubleunit);
  padding-right: var(--dl-space-space-doubleunit);
  flex-direction: column;
  padding-bottom: var(--dl-space-space-doubleunit);
}
</style>
