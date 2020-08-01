<template>
  <div class="message">
    <Nav class='nav-boxs' :type='home'/>
    <div class="container">
      <h1>This is an contact page</h1>
    </div>
    <Foot/>
  </div>
</template>
<script>
import { get } from "@/api/index";

export default {
  name:"message",
  components:{
  },
  created() {
    get().then(res => {
      console.log(res);
    });
  }
};
</script>
