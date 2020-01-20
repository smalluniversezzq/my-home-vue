<template>
  <div class="home">
    <Nav/>
    myhome
  </div>
</template>

<script>
import Nav from '@/components/nav.vue'
import { getHeweather } from '@/api/home/index.js'
export default {
  name: "home",
  components: {
    Nav,
  },
  data (){
    return {

    }
  },
  methods:{
  },
  created(){
    getHeweather({
      location:'beijing',
      key:'8dda60d1afc549339bf5d0964955ce91'
    }).then(res =>{
      console.log(res)
      if(res.status === 200){
        console.log(res.data.HeWeather6[0].basic);
      }
    })
  },
  mounted(){},
  updated(){},
};
</script>
