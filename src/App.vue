<template>
  <div>
    <h1>Home view</h1>
    <router-view id="router_comp"></router-view>
    <ul>
      <li><router-link :to="{name: 'yellow'}">go to yellow</router-link></li>
      <li><router-link :to="{name: 'red'}">go to red</router-link></li>
      <li><router-link :to="{name: 'green'}">go to green</router-link></li>
      <li><router-link :to="{name: 'black'}">go to black</router-link></li>
      <li><router-link :to="{name: 'blue'}">go to blue</router-link></li>
    </ul>
    <hr>
    
    <h1>Enter Pin Code that looks up Postal code india API</h1>
    <Postal @getPostOfficeData="getResult"></Postal>
    
    <h3>
      {{ result }}
    </h3>

  </div>

  
</template>

<script>
// import axios from 'axios'
//Need to fix mutating prop 
import Postal from './components/Postal.vue'

export default {
   data() {
    return {
      //pin_code: "",
      //postofficedata: "",
      result: "",
    };
  },
  methods: {  
    getResult(data){
      this.result = data
      console.log("This is the result: "+ data)
    }
  },
  components: {
    Postal
  }

}
</script>

<style>
  h1{
    color: black;
    background-color: white;
  }
 
</style>
