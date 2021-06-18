<template>
  <div class="postoffice">
        <input type="number" name="pin_code" id="pin_code" v-model="pin_code"/>
        <button type="submit" @click="getPostOfficeData()">Submit</button>        
  </div>
</template>

<script>
import axios from 'axios'
export default {
    //props: ['postofficedata'], 
  //the mutation of the pin_code, postofficedata prop was happening because you shouldn't define a prop within the very same component from which im defining it in
  //props should be used when transferring data between parent-child, but since it was all within child itself, there was no need for props
    data(){
        return{
        pin_code: "",  //needed to initialize here in data too
        }
    },
    methods: {
        getPostOfficeData() {
          axios.get("https://api.postalpincode.in/pincode/" + this.pin_code)
          .then((response) => {            
            this.postofficedata = response.data[0].PostOffice[0].Name + ' at ' + response.data[0].PostOffice[0].District + ' in ' + response.data[0].PostOffice[0].State
            
            let result = this.postofficedata
            console.log(result)
            this.$emit('getPostOfficeData', result)
            })
          .catch((err)=>{
            this.postofficedata = err
            console.log(err)
            this.$emit('getPostOfficeData', err + ". " + "This pin may be unrecognized")
          })

          
        
    },
    }
}
</script>

<style>

</style>