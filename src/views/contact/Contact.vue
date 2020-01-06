<template>
  <div class="contact">
    <Nav/>
    <h1>This is an contact page</h1>
  </div>
</template>
<script>
import { get } from "@/api/index";
import Nav from '@/components/nav.vue'
export default {
  name:"contact",
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
