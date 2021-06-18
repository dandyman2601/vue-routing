<template>
  <div class="postoffice">
        <input type="number" name="pin_code" id="pin_code" v-model="pin_code" />
        <button type="submit" @click="getPostOfficeData()">Submit</button>        
  </div>
</template>

<script>
import axios from 'axios'
export default {
    props: ['pin_code','postofficedata'],

    data(){
        return{
            
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