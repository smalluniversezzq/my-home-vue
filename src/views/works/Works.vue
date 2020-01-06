<template>
  <div class="works">
    <Nav/>
    <h1>This is an works page</h1>
  </div>
</template>
<script>
import { get } from "@/api/index";
import Nav from '@/components/nav.vue'
export default {
  name:"works",
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
