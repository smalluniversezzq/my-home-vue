<template>
  <div class="about">
    <Nav/>
    <h1>This is an about page</h1>
  </div>
</template>
<script>
import { get } from "@/api/index";
import Nav from '@/components/nav.vue'
export default {
  components:{
    Nav,
  },
  created() {
    get().then(res => {
      console.log(res);
    });
  }
};
</script>
