<script setup>
import PrimaryBlueButton from './items/primary-blue-button.vue'
import EmaillAdd from './items/emaill-add.vue'
import NicknamesAdd from './items/nicknames-add.vue'
import TagAdd from './items/tag-add.vue'
import { usePeopleStore } from '../stores/people.js'
import { useStorageStore } from '../stores/storage.js'
import { ref , computed, onBeforeMount, watch} from 'vue'

const peopleStore = usePeopleStore()
const storageStore = useStorageStore()
const title = ref()
const btn = ref()
const profileID = computed(() => peopleStore.profileIDCurrent)
const person = computed(() => peopleStore.find(profileID.value))
const addoredit = computed(() => peopleStore.getAE())
if(addoredit.value == 'add'){
    add()
  }else if(addoredit.value=='edit')
    {edit()
  }



const localperson = ref([])
const image_alt1 = 'image_alt1'
const rootClassName = ref('')


//watch(person, (newVal, oldVal) => {})

function addUser(){  // add user
  peopleStore.addPerson(person.value)
  peopleStore.saveData()
}
function editUser(){  // edit user
  peopleStore.editPerson(person.value)
  peopleStore.saveData()
}

function add(){
  title.value = 'New Nakama'
  btn.value = 'Add Mate'
  person.value = {
    name: '',
    age: '',
    location: '',
    birthdate: '',
    emails: [],
    nicknames: [],
    tags: [],
    photos: []
  }
}
function edit(){
  title.value = 'Edit Nakama'
  btn.value = 'Save Changes'
  /*person = {
    name: person.name? person.name : '',
    age: person.age? person.age : '',
    location: person.location? person.location : '',
    birthdate: person.birthdate? person.birthdate : '',
    emails: [],
    nicknames: [],
    tags: [],
    photos: []
  }*/
}



</script>


<template>
  <div class="add-edit-person-container" v-bind:class="rootClassName">
    <h1 class="add-edit-person-heading">
      <span>{{title}}</span>
      <br />
      <br />
    </h1>
    <div class="add-edit-person-container1">
      <div class="add-edit-person-input-name">
        <span class="add-edit-person-text03"> Full Name</span>
        <input type="text" class="add-edit-person-textinput input" v-model="person.name" />
      </div>
      <div class="add-edit-person-input-name1">
        <span class="add-edit-person-text04">Photos</span>
        <img :alt="image_alt1" :src="'/playground_assets/pngfind.com-plus-sign-png-524126-200h.png'" class="add-edit-person-image" />
      </div>
      <div class="add-edit-person-input-data-nascimento">
        <span class="add-edit-person-text05"> Data de Nascimento </span>
        <span class="add-edit-person-text06">Dia</span>
        <select class="add-edit-person-select">
          <option value="Option 1">Option 1</option>
          <option value="Option 2">Option 2</option>
          <option value="Option 3">Option 3</option>
        </select>
        <span class="add-edit-person-text07">Mês</span>
        <select class="add-edit-person-select1">
          <option value="Option 1">Option 1</option>
          <option value="Option 2">Option 2</option>
          <option value="Option 3">Option 3</option>
        </select>
        <span class="add-edit-person-text08">Ano</span>
        <select class="add-edit-person-select2">
          <option value="Option 1">Option 1</option>
          <option value="Option 2">Option 2</option>
          <option value="Option 3">Option 3</option>
        </select>
      </div>
      <div class="add-edit-person-input-idade-local">
        <span class="add-edit-person-text09">Idade</span>
        <input type="text" class="add-edit-person-textinput1 input" v-model="person.age">  
        <span class="add-edit-person-text10">Localidade</span>
        <select class="add-edit-person-select3">
          <option value="Option 1">Option 1</option>
          <option value="Option 2">Option 2</option>
          <option value="Option 3">Option 3</option>
        </select>
      </div>
      <div class="add-edit-person-container2">
        <primary-blue-button
          button="+"
          rootClassName="primary-blue-button-root-class-name1"
        ></primary-blue-button>
        <div class="add-edit-person-container3">
          <div class="add-edit-person-container4">
            <div class="add-edit-person-container5">
              <emaill-add rootClassName="emaill-add-root-class-name"></emaill-add>
            </div>
          </div>
        </div>
      </div>
      <div class="add-edit-person-container6">
        <primary-blue-button
          button="+"
          rootClassName="primary-blue-button-root-class-name2"
        ></primary-blue-button>
        <nicknames-add
          rootClassName="nicknames-add-root-class-name"
        ></nicknames-add>
      </div>
      <div class="add-edit-person-container7">
        <div class="add-edit-person-container8">
          <primary-blue-button
            button="+"
            rootClassName="primary-blue-button-root-class-name4"
          ></primary-blue-button>
        </div>
        <tag-add rootClassName="tag-add-root-class-name"></tag-add>
      </div>
    </div>
    <primary-blue-button @click="editUser"
      :button=btn
      rootClassName="primary-blue-button-root-class-name6"
    ></primary-blue-button>
  </div>
</template>


<style scoped>
.add-edit-person-container {
  width: 100%;
  height: 827px;
  display: flex;
  position: relative;
  flex-wrap: wrap;
  align-items: stretch;
  flex-direction: column;
  justify-content: space-between;
}
.add-edit-person-heading {
  height: 51px;
  align-self: center;
  margin-top: var(--dl-space-space-unit);
  text-align: center;
  background-image: linear-gradient(310deg, rgb(121, 40, 202), rgb(255, 0, 128));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
.add-edit-person-container1 {
  height: 650px;
  display: flex;
  align-self: center;
  align-items: stretch;
  flex-direction: column;
  justify-content: space-between;
}
.add-edit-person-input-name {
  width: 100%;
  height: 193px;
  display: flex;
  margin-top: var(--dl-space-space-unit);
  align-items: flex-start;
  flex-direction: row;
  justify-content: center;
}
.add-edit-person-text03 {
  align-self: center;
  margin-right: var(--dl-space-space-doubleunit);
}
.add-edit-person-textinput {
  width: 405px;
  height: 43px;
  align-self: center;
}
.add-edit-person-input-name1 {
  width: 100%;
  height: 193px;
  display: flex;
  margin-top: var(--dl-space-space-unit);
  align-items: flex-start;
  flex-direction: row;
  justify-content: center;
}
.add-edit-person-text04 {
  align-self: center;
  text-align: left;
  margin-left: -10rem;
  margin-right: 10rem;
}
.add-edit-person-image {
  width: 100px;
  object-fit: cover;
}
.add-edit-person-input-data-nascimento {
  width: 100%;
  height: 52px;
  display: flex;
  margin-top: var(--dl-space-space-unit);
  align-items: flex-start;
  margin-bottom: var(--dl-space-space-unit);
  flex-direction: row;
  justify-content: center;
}
.add-edit-person-text05 {
  align-self: center;
  margin-right: var(--dl-space-space-tripleunit);
}
.add-edit-person-text06 {
  align-self: center;
}
.add-edit-person-select {
  align-self: center;
  margin-left: var(--dl-space-space-unit);
}
.add-edit-person-text07 {
  align-self: center;
  margin-left: var(--dl-space-space-unit);
  margin-right: var(--dl-space-space-unit);
}
.add-edit-person-select1 {
  align-self: center;
}
.add-edit-person-text08 {
  align-self: center;
  margin-left: var(--dl-space-space-unit);
  margin-right: var(--dl-space-space-unit);
}
.add-edit-person-select2 {
  align-self: center;
}
.add-edit-person-input-idade-local {
  width: 100%;
  height: 170px;
  display: flex;
  align-items: flex-start;
  flex-direction: row;
  justify-content: center;
}
.add-edit-person-text09 {
  align-self: center;
  margin-right: var(--dl-space-space-unit);
}
.add-edit-person-textinput1 {
  width: 62px;
  height: 50%;
  align-self: center;
}
.add-edit-person-text10 {
  align-self: center;
  margin-left: var(--dl-space-space-unit);
}
.add-edit-person-select3 {
  align-self: center;
  margin-left: var(--dl-space-space-unit);
}
.add-edit-person-container2 {
  flex: 0 0 auto;
  width: auto;
  height: 95px;
  display: flex;
  align-items: flex-start;
  justify-content: center;
}
.add-edit-person-container3 {
  flex: 0 0 auto;
  width: auto;
  height: 95px;
  display: flex;
  align-items: flex-start;
  justify-content: center;
}
.add-edit-person-container4 {
  flex: 0 0 auto;
  width: auto;
  height: 95px;
  display: flex;
  align-items: flex-start;
  justify-content: center;
}
.add-edit-person-container5 {
  flex: 0 0 auto;
  width: auto;
  height: 95px;
  display: flex;
  align-items: flex-start;
  justify-content: center;
}
.add-edit-person-container6 {
  width: auto;
  height: 168px;
  display: flex;
  align-items: flex-start;
  justify-content: center;
}
.add-edit-person-container7 {
  flex: 0 0 auto;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}
.add-edit-person-container8 {
  flex: 0 0 auto;
  width: auto;
  height: auto;
  display: flex;
  align-items: center;
  flex-direction: column;
}
.add-edit-person-root-class-name {
  flex: 1;
  width: 100%;
  height: 100%;
  align-self: stretch;
}
.add-edit-person-root-class-name1 {
  width: 100%;
  align-self: center;
}
</style>
