<script setup>
import {ref} from 'vue'
import NickItem from '@/components/items/nick-item.vue'
import NoteItem from '@/components/items/note-item.vue'
import EditPerson from '@/components/add-edit-person.vue'
import { usePeopleStore } from '@/stores/people.js'

</script>

<template>
<div class="nakama-profile-profile">
      <img
        alt="image"
        src="/playground_assets/bruce-mars-200h.jpg"
        class="nakama-profile-image"
      />
      <div class="nakama-profile-container01">
        <div class="nakama-profile-container02">
          <h4 class="nakama-profile-text">Nome</h4>
        </div>
        <div class="nakama-profile-container03">
          <span class="nakama-profile-text01">
            <span class="nakama-profile-text02">Idade</span>
            <span>: X</span>
          </span>
          <span class="nakama-profile-text04">
            <span class="nakama-profile-text05">Birthday</span>
            <span>: X/X/X</span>
            <br />
          </span>
          <span>
            <span class="nakama-profile-text09">Location</span>
            <span>: XXXX </span>
          </span>
        </div>
        <div class="nakama-profile-container04">
          <img
            alt="image"
            src="/playground_assets/46854-200h.png"
            class="nakama-profile-image1"
          />
          <span class="nakama-profile-text11">+351 912 123 421</span>
        </div>
        <span>
          <span class="nakama-profile-text13">Tags</span>
          <span>: X , Y , Z , W , D , A</span>
          <br />
        </span>
      </div>
      <button @click="setEdit" class="nakama-profile-button button ButtonSmall">
        <router-link to="/addperson" class="nakama-profile-navlink" :person="person">
          <span>
            <span>Edit</span>
            <br />
          </span>
        </router-link>
      </button>
    </div>
    <div class="nakama-profile1-blog-posts">
      <h1 class="nakama-profile1-text26 HeadingTwo">
        <span>Nicknames</span>
        <br />
      </h1>
      <button @click="loadUsers" class="nakama-profile1-button1 button">
        <span>
          <span>+</span>
          <br />
        </span>
      </button>
      
      <div class="nakama-profile1-container12">
        <!--<div v-for="(index ,name) in person.tags" :key=index class="nakama-profile1-container11">
          <NickItem :id="index" :name="name" ></NickItem>
       </div> -->

      </div>
    </div>
    <div class="nakama-profile1-blog-posts1">
      <h1 class="nakama-profile1-text32 HeadingTwo">
        <span>Notes</span>
        <br />
      </h1>
      <button class="nakama-profile1-button2 button">
        <span>
          <span>+</span>
          <br />
        </span>
      </button>
      <div class="nakama-profile1-container13">
        <div class="nakama-profile1-container14">
          <!--<div  v-for="(index ,name) in person.notes" :key=index>
            <NoteItem :id="index" :note="name"></NoteItem>
          </div> -->
          
        </div>
      </div>
    </div>
    

</template>

<style scoped>
.nakama-profile1-container13 {
  width: 100%;
  height: auto;
  display: flex;
  align-self: stretch;
  align-items: center;
  flex-direction: column;
  justify-content: center;
}
.nakama-profile1-container14 {
  width: 100%;
  border: 2px dashed rgba(120, 120, 120, 0.4);
  height: auto;
  display: flex;
  align-self: stretch;
  margin-top: var(--dl-space-space-doubleunit);
  align-items: center;
  border-radius: var(--dl-radius-radius-radius40);
  flex-direction: column;
  background-size: cover;
  justify-content: center;
  background-image: linear-gradient(135deg, rgba(84, 124, 164, 0.04) 0.00%,rgba(84, 124, 164, 0.04) 0.00%,rgb(37, 114, 191) 26.00%,rgb(156, 163, 170) 100.00%,rgba(37, 114, 191, 0.08) 46.00%,rgb(156, 163, 170) 100.00%),url('https://raw.githubusercontent.com/creativetimofficial/public-assets/master/soft-ui-design-system/assets/img/seaside.jpg');
}
.nakama-profile1-button2 {
  color: var(--dl-color-gray-white);
  outline: none;
  align-self: center;
  background: linear-gradient(310deg,#2152ff,#21d4fd);
  box-shadow: rgba(0, 0, 0, 0.11) 0px 4px 7px -1px, rgba(0, 0, 0, 0.07) 0px 2px 4px -1px;
  margin-top: var(--dl-space-space-unit);
  transition: all .15s ease-in;
  padding-top: var(--dl-space-space-triplequarterunit);
  border-width: 0px;
  padding-left: var(--dl-space-space-unitandahalfunit);
  border-radius: 1.875rem;
  padding-right: var(--dl-space-space-unitandahalfunit);
  padding-bottom: var(--dl-space-space-triplequarterunit);
  background-image: linear-gradient(310deg, rgb(33, 82, 255), rgb(33, 212, 253));
}
.nakama-profile1-button2:hover {
  cursor: pointer;
  transform: scale(1.02);
}
.nakama-profile1-text32 {
  color: var(--dl-color-secondary-500);
  align-self: center;
  margin-left: var(--dl-space-space-unit);
  margin-right: var(--dl-space-space-unit);
}
.nakama-profile1-container12 {
  border: 2px dashed rgba(120, 120, 120, 0.4);
  height: auto;
  display: flex;
  align-self: stretch;
  margin-top: var(--dl-space-space-doubleunit);
  align-items: center;
  border-radius: var(--dl-radius-radius-radius40);
  flex-direction: column;
  background-size: cover;
  justify-content: center;
  background-image: linear-gradient(135deg, rgba(84, 124, 164, 0.04) 0.00%,rgba(84, 124, 164, 0.04) 0.00%,rgb(37, 114, 191) 26.00%,rgb(156, 163, 170) 100.00%,rgba(37, 114, 191, 0.08) 46.00%,rgb(156, 163, 170) 100.00%),url('https://raw.githubusercontent.com/creativetimofficial/public-assets/master/soft-ui-design-system/assets/img/seaside.jpg');
}
.nakama-profile1-button1 {
  color: var(--dl-color-gray-white);
  outline: none;
  align-self: center;
  background: linear-gradient(310deg,#2152ff,#21d4fd);
  box-shadow: rgba(0, 0, 0, 0.11) 0px 4px 7px -1px, rgba(0, 0, 0, 0.07) 0px 2px 4px -1px;
  margin-top: var(--dl-space-space-unit);
  transition: all .15s ease-in;
  padding-top: var(--dl-space-space-triplequarterunit);
  border-width: 0px;
  padding-left: var(--dl-space-space-unitandahalfunit);
  border-radius: 1.875rem;
  padding-right: var(--dl-space-space-unitandahalfunit);
  padding-bottom: var(--dl-space-space-triplequarterunit);
  background-image: linear-gradient(310deg, rgb(33, 82, 255), rgb(33, 212, 253));
}
.nakama-profile1-button1 {
  color: var(--dl-color-gray-white);
  outline: none;
  align-self: center;
  background: linear-gradient(310deg,#2152ff,#21d4fd);
  box-shadow: rgba(0, 0, 0, 0.11) 0px 4px 7px -1px, rgba(0, 0, 0, 0.07) 0px 2px 4px -1px;
  margin-top: var(--dl-space-space-unit);
  transition: all .15s ease-in;
  padding-top: var(--dl-space-space-triplequarterunit);
  border-width: 0px;
  padding-left: var(--dl-space-space-unitandahalfunit);
  border-radius: 1.875rem;
  padding-right: var(--dl-space-space-unitandahalfunit);
  padding-bottom: var(--dl-space-space-triplequarterunit);
  background-image: linear-gradient(310deg, rgb(33, 82, 255), rgb(33, 212, 253));
}
.nakama-profile1-text26 {
  color: var(--dl-color-secondary-500);
  align-self: center;
  margin-left: var(--dl-space-space-unit);
  margin-right: var(--dl-space-space-unit);
}
.nakama-profile1-blog-posts {
  flex: 0 0 auto;
  width: 100%;
  display: flex;
  max-width: 1320px;
  align-self: center;
  align-items: flex-start;
  padding-top: var(--dl-space-space-doubleunit);
  padding-left: var(--dl-space-space-doubleunit);
  padding-right: var(--dl-space-space-doubleunit);
  flex-direction: column;
}
.nakama-profile-container {
  width: 100%;
  height: auto;
  display: flex;
  min-height: 100vh;
  align-items: center;
  flex-direction: column;
  background-color: var(--dl-color-gray-900);
}
.nakama-profile1-blog-posts1 {
  flex: 0 0 auto;
  width: 100%;
  display: flex;
  max-width: 1320px;
  align-self: center;
  align-items: flex-start;
  padding-left: var(--dl-space-space-doubleunit);
  padding-right: var(--dl-space-space-doubleunit);
  flex-direction: column;
  padding-bottom: var(--dl-space-space-doubleunit);
}
.nakama-profile-profile {
  height: 130px;
  display: flex;
  max-width: 1320px;
  margin-top: var(--dl-space-space-doubleunit);
  align-items: flex-start;
  padding-top: var(--dl-space-space-sixunits);
  padding-left: var(--dl-space-space-tripleunit);
  padding-right: var(--dl-space-space-tripleunit);
  flex-direction: row;
  padding-bottom: 56px;
}
.nakama-profile-image {
  width: 200px;
  height: 200px;
  object-fit: cover;
  border-radius: var(--dl-radius-radius-radius75);
}
.nakama-profile-container01 {
  width: 394px;
  height: 210px;
  display: flex;
  align-items: flex-start;
  margin-left: var(--dl-space-space-sixunits);
  margin-right: 62px;
  flex-direction: column;
}
.nakama-profile-container02 {
  width: 100%;
  display: flex;
  align-items: flex-start;
  margin-bottom: var(--dl-space-space-halfunit);
  flex-direction: row;
  justify-content: space-between;
}
.nakama-profile-text {
  color: var(--dl-color-secondary-700);
  font-size: 1.5rem;
  font-style: normal;
  margin-bottom: var(--dl-space-space-halfunit);
}
.nakama-profile-container03 {
  display: flex;
  align-items: flex-start;
  margin-bottom: var(--dl-space-space-unit);
  flex-direction: row;
}
.nakama-profile-text01 {
  margin-right: var(--dl-space-space-unit);
}
.nakama-profile-text02 {
  font-style: normal;
  font-weight: 700;
}
.nakama-profile-text04 {
  margin-right: var(--dl-space-space-unit);
}
.nakama-profile-text05 {
  font-style: normal;
  font-weight: 700;
}
.nakama-profile-text09 {
  font-style: normal;
  font-weight: 700;
}
.nakama-profile-container04 {
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
.nakama-profile-image1 {
  width: 31px;
  height: 35px;
  align-self: flex-start;
  object-fit: cover;
}
.nakama-profile-text11 {
  align-self: center;
  margin-left: var(--dl-space-space-unit);
}
.nakama-profile-text13 {
  font-style: normal;
  font-weight: 700;
}
.nakama-profile-button {
  color: var(--dl-color-gray-white);
  outline: none;
  align-self: center;
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
.nakama-profile-button:hover {
  cursor: pointer;
  transform: scale(1.02);
}
.nakama-profile-blog-posts {
  flex: 0 0 auto;
  width: 100%;
  display: flex;
  max-width: 1320px;
  align-self: center;
  align-items: flex-start;
  padding-top: var(--dl-space-space-doubleunit);
  padding-left: var(--dl-space-space-doubleunit);
  padding-right: var(--dl-space-space-doubleunit);
  flex-direction: column;
  padding-bottom: var(--dl-space-space-doubleunit);
}
.nakama-profile-text16 {
  color: var(--dl-color-secondary-500);
  align-self: center;
  margin-left: var(--dl-space-space-unit);
  margin-right: var(--dl-space-space-unit);
}
.nakama-profile-button1 {
  color: var(--dl-color-gray-white);
  outline: none;
  align-self: center;
  background: linear-gradient(310deg,#2152ff,#21d4fd);
  box-shadow: rgba(0, 0, 0, 0.11) 0px 4px 7px -1px, rgba(0, 0, 0, 0.07) 0px 2px 4px -1px;
  margin-top: var(--dl-space-space-unit);
  transition: all .15s ease-in;
  padding-top: var(--dl-space-space-triplequarterunit);
  border-width: 0px;
  padding-left: var(--dl-space-space-unitandahalfunit);
  border-radius: 1.875rem;
  padding-right: var(--dl-space-space-unitandahalfunit);
  padding-bottom: var(--dl-space-space-triplequarterunit);
  background-image: linear-gradient(310deg, rgb(33, 82, 255), rgb(33, 212, 253));
}
.nakama-profile-button1:hover {
  cursor: pointer;
  transform: scale(1.02);
}
.nakama-profile-container05 {
  width: 1138px;
  display: flex;
  flex-wrap: wrap;
  align-items: stretch;
  flex-direction: row;
  justify-content: space-between;
}
.nakama-profile-container06 {
  flex: 1;
  margin: var(--dl-space-space-unit);
  display: flex;
  align-items: stretch;
  flex-direction: row;
  justify-content: flex-start;
}
.nakama-profile-card {
  width: 1090px;
  height: 360px;
  display: flex;
  padding: var(--dl-space-space-unitandahalfunit);
  position: relative;
  align-self: stretch;
  align-items: stretch;
  border-radius: var(--dl-radius-radius-radius1);
  flex-direction: column;
  background-size: cover;
  justify-content: space-between;
  background-image: url("https://raw.githubusercontent.com/creativetimofficial/public-assets/master/soft-ui-design-system/assets/img/seaside.jpg");
}
.nakama-profile-container07 {
  top: auto;
  flex: 0 0 auto;
  left: 0px;
  right: 0px;
  width: 100%;
  bottom: 0px;
  height: 100%;
  margin: auto;
  display: flex;
  position: absolute;
  margin-top: var(--dl-space-space-unit);
  align-items: flex-start;
  border-radius: var(--dl-radius-radius-radius1);
  flex-direction: column;
  justify-content: center;
  background-color: rgba(232, 194, 23, 0.23);
}
.nakama-profile-blog-posts1 {
  flex: 0 0 auto;
  width: 100%;
  display: flex;
  max-width: 1320px;
  align-items: flex-start;
  padding-top: var(--dl-space-space-doubleunit);
  padding-left: var(--dl-space-space-doubleunit);
  padding-right: var(--dl-space-space-doubleunit);
  flex-direction: column;
  padding-bottom: var(--dl-space-space-doubleunit);
}
.nakama-profile-text22 {
  color: var(--dl-color-secondary-500);
  align-self: center;
  margin-left: var(--dl-space-space-unit);
  margin-right: var(--dl-space-space-unit);
}
.nakama-profile-button2 {
  color: var(--dl-color-gray-white);
  outline: none;
  align-self: center;
  background: linear-gradient(310deg,#2152ff,#21d4fd);
  box-shadow: rgba(0, 0, 0, 0.11) 0px 4px 7px -1px, rgba(0, 0, 0, 0.07) 0px 2px 4px -1px;
  margin-top: var(--dl-space-space-unit);
  transition: all .15s ease-in;
  padding-top: var(--dl-space-space-triplequarterunit);
  border-width: 0px;
  padding-left: var(--dl-space-space-unitandahalfunit);
  border-radius: 1.875rem;
  padding-right: var(--dl-space-space-unitandahalfunit);
  padding-bottom: var(--dl-space-space-triplequarterunit);
  background-image: linear-gradient(310deg, rgb(33, 82, 255), rgb(33, 212, 253));
}
.nakama-profile-button2:hover {
  cursor: pointer;
  transform: scale(1.02);
}
.nakama-profile-container08 {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  align-items: stretch;
  flex-direction: row;
  justify-content: space-between;
}
.nakama-profile-container09 {
  flex: 1;
  margin: var(--dl-space-space-unit);
  display: flex;
  align-items: stretch;
  flex-direction: row;
  justify-content: flex-start;
}
.nakama-profile-card1 {
  flex: 1;
  width: 255px;
  display: flex;
  padding: var(--dl-space-space-unitandahalfunit);
  position: relative;
  align-items: flex-start;
  border-radius: var(--dl-radius-radius-radius1);
  flex-direction: column;
  background-size: cover;
  background-image: url("https://raw.githubusercontent.com/creativetimofficial/public-assets/master/soft-ui-design-system/assets/img/seaside.jpg");
}
.nakama-profile-container10 {
  top: auto;
  flex: 0 0 auto;
  left: 0px;
  right: auto;
  width: 100%;
  border: 2px dashed rgba(120, 120, 120, 0.4);
  bottom: 0px;
  height: 100%;
  display: flex;
  position: absolute;
  margin-top: var(--dl-space-space-unit);
  align-items: flex-start;
  border-radius: var(--dl-radius-radius-radius1);
  flex-direction: column;
  background-color: rgba(232, 194, 23, 0.23);
}
@media(max-width: 991px) {
  .nakama-profile-container01 {
    margin-left: var(--dl-space-space-tripleunit);
    margin-right: var(--dl-space-space-tripleunit);
  }
  .nakama-profile-container06 {
    width: 100%;
  }
  .nakama-profile-card {
    width: 100%;
  }
  .nakama-profile-container09 {
    width: 100%;
  }
  .nakama-profile-card1 {
    width: 100%;
  }
}
@media(max-width: 767px) {
  .nakama-profile-profile {
    padding-top: var(--dl-space-space-fourunits);
    padding-left: var(--dl-space-space-doubleunit);
    padding-right: var(--dl-space-space-doubleunit);
    flex-direction: column;
    padding-bottom: var(--dl-space-space-fourunits);
  }
  .nakama-profile-container01 {
    margin-left: 0px;
    margin-right: 0px;
  }
  .nakama-profile-container02 {
    margin-top: var(--dl-space-space-unit);
    margin-bottom: var(--dl-space-space-unit);
  }
  .nakama-profile-text {
    margin-top: var(--dl-space-space-unit);
  }
  .nakama-profile-blog-posts {
    padding-top: var(--dl-space-space-doubleunit);
    padding-left: var(--dl-space-space-doubleunit);
    padding-right: var(--dl-space-space-doubleunit);
    padding-bottom: var(--dl-space-space-doubleunit);
  }
  .nakama-profile-container06 {
    margin-top: var(--dl-space-space-doubleunit);
  }
  .nakama-profile-blog-posts1 {
    padding-top: var(--dl-space-space-doubleunit);
    padding-left: var(--dl-space-space-doubleunit);
    padding-right: var(--dl-space-space-doubleunit);
    padding-bottom: var(--dl-space-space-doubleunit);
  }
  .nakama-profile-container09 {
    margin-top: var(--dl-space-space-doubleunit);
  }
  
}
</style>
