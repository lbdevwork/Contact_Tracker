<template>
  <div class="nakama-add-person-container">
    <div class="nakama-add-person-container1">
      <AppHeader rootClassName="header-root-class-name3"></AppHeader>
      <div class="nakama-add-person-container2">
        <AddEditPerson
          rootClassName="add-edit-person-root-class-name1"
        ></AddEditPerson>
        <StatusSideBar
          rootClassName="status-side-bar-root-class-name2"
        ></StatusSideBar>
      </div>
    </div>
  </div>
</template>

<script setup>
import AppHeader from '../components/global/header.vue'
import AddEditPerson from '../components/add-edit-person.vue'
import StatusSideBar from '../components/global/status-side-bar.vue'


</script>

<style scoped>
.nakama-add-person-container {
  width: 100%;
  display: flex;
  overflow: auto;
  flex-wrap: wrap;
  min-height: 100vh;
  align-items: stretch;
  flex-direction: column;
  justify-content: space-between;
}
.nakama-add-person-container1 {
  flex: 1;
  height: 100%;
  display: flex;
  align-self: stretch;
  align-items: stretch;
  flex-direction: column;
  justify-content: space-between;
}
.nakama-add-person-container2 {
  flex: 1;
  width: 100%;
  height: 100%;
  display: flex;
  align-self: stretch;
  align-items: center;
  flex-direction: row;
  justify-content: flex-start;
}
</style>
