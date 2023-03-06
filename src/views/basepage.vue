<template>
        <div class="nakama-search-container">
          <div class="nakama-search-container1">
            <AppHeader rootClassName="header-root-class-name1"></AppHeader>
            <div class="nakama-search-container2">
              <div class="nakama-search-container3">
                

              </div>
              <StatusSideBar
                rootClassName="status-side-bar-root-class-name"
              ></StatusSideBar>
            </div>
          </div>
        </div>
      </template>
      
      <script setup>
      import AppHeader from '../components/global/header.vue'
      import SearchBar from '../components/items/search-bar.vue'
      import StatusSideBar from '../components/global/status-side-bar.vue'
      import FriendItem from '../components/items/friend-item.vue'
      import { ref } from 'vue'
      import { usePeopleStore } from '../stores/people.js'
      
      const peopleCounter = ref(0)
      const PeopleStorage = usePeopleStore()
      
      PeopleStorage.checkNicks()
      PeopleStorage.checkNotes()
      
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
      
        height: 100px;
        display: flex;
        align-self: center;
        align-items: center;
        padding-top: var(--dl-space-space-doubleunit);
        padding-left: var(--dl-space-space-doubleunit);
        padding-right: var(--dl-space-space-doubleunit);
        flex-direction: column;
        padding-bottom: var(--dl-space-space-doubleunit);
      }
      </style>
      