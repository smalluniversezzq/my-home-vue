<template>
  <div class="contact">
    <Nav class='nav-boxs' :type='home'/>
    <h1>This is an contact page</h1>
    <Foot/>
  </div>
</template>
<script>
import { get } from "@/api/index";
export default {
  name:"contact",
  components:{
  },
  created() {
    get().then(res => {
      console.log(res);
    });
  }
};
</script>
