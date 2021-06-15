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
  </div>
</template>

<script>
export default {  
}
</script>

<style>
  h1{
    color: black;
    background-color: white;
  }
 
</style>
