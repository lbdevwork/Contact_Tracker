<template>
  <div class="status-side-bar-container" v-bind:class="rootClassName">
    <div class="status-side-bar-sidebar">
      <nav class="status-side-bar-nav">
        <svg viewBox="0 0 1024 1024" class="status-side-bar-icon">
          <path
            d="M128 554.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 298.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 810.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"
          ></path>
        </svg>
        <span class="status-side-bar-text">Contact´s List</span>
        <span class="status-side-bar-text1">Statistics</span>
        <span class="status-side-bar-text2">Messages</span>
        <span class="status-side-bar-text3">Files</span>
      </nav>
      <div class="status-side-bar-profile">
        <img
          alt="image"
          src="https://images.unsplash.com/photo-1562159278-1253a58da141?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDIyfHxtYW4lMjBwb3J0dHJhaXR8ZW58MHx8fHwxNjI3MjkzNTM1&amp;ixlib=rb-1.2.1&amp;w=200"
          class="status-side-bar-image"
        />
        <div class="status-side-bar-container1">
          <span class="status-side-bar-text4">John Doe</span>
          <span class="status-side-bar-text5">View Profile</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'StatusSideBar',
  props: {
    rootClassName: String,
  },
}
</script>

<style scoped>
.status-side-bar-container {
  width: 250px;
  height: 692px;
  display: flex;
  position: relative;
  align-items: stretch;
  flex-direction: column;
  justify-content: space-between;
}
.status-side-bar-sidebar {
  height: 100%;
  display: flex;
  padding: 32px;
  align-self: stretch;
  align-items: stretch;
  border-color: var(--dl-color-secondary-400);
  border-width: 1px;
  flex-direction: column;
  justify-content: space-between;
}
.status-side-bar-nav {
  flex: 0 0 auto;
  display: flex;
  align-self: center;
  align-items: stretch;
  flex-direction: column;
  justify-content: space-between;
}
.status-side-bar-icon {
  width: 16px;
  height: 16px;
  align-self: center;
  margin-bottom: 32px;
}
.status-side-bar-text {
  align-self: center;
  margin-bottom: 32px;
}
.status-side-bar-text1 {
  align-self: center;
  margin-bottom: 32px;
}
.status-side-bar-text2 {
  align-self: center;
  margin-bottom: 32px;
}
.status-side-bar-text3 {
  align-self: center;
  margin-bottom: 32px;
}
.status-side-bar-profile {
  width: 171px;
  display: flex;
  align-self: stretch;
  align-items: stretch;
  padding-top: var(--dl-space-space-unit);
  border-color: var(--dl-color-gray-900);
  border-width: 1px;
  flex-direction: row;
  justify-content: space-between;
  border-left-width: 0px;
  border-right-width: 0px;
  border-bottom-width: 0px;
}
.status-side-bar-image {
  width: 48px;
  height: 48px;
  object-fit: cover;
  border-radius: var(--dl-radius-radius-round);
}
.status-side-bar-container1 {
  display: flex;
  align-items: flex-start;
  margin-left: var(--dl-space-space-halfunit);
  flex-direction: column;
  justify-content: space-between;
}
.status-side-bar-text4 {
  font-size: 1.15rem;
  font-style: normal;
  font-weight: 600;
  margin-bottom: 0.25rem;
}
.status-side-bar-text5 {
  color: var(--dl-color-gray-500);
  font-size: 0.75rem;
}

.status-side-bar-root-class-name {
  flex: 0;
  width: auto;
  height: auto;
  align-self: stretch;
}

@media(max-width: 991px) {
  .status-side-bar-profile {
    padding-left: var(--dl-space-space-halfunit);
    padding-right: var(--dl-space-space-halfunit);
  }
  .status-side-bar-image {
    margin-left: 0px;
  }
}
@media(max-width: 767px) {
  .status-side-bar-icon {
    display: flex;
  }
}
</style>
