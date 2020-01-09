<template>
  <div class="about">
    <Nav/>
    <h1>This is an about page</h1>
    <Foot/>
  </div>
</template>
<script>
import { get } from "@/api/index";
export default {
  components:{
  },
  created() {
    get().then(res => {
      console.log(res);
    });
  }
};
</script>
