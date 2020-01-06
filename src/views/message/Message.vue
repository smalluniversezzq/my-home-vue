<template>
  <div class="message">
    <Nav/>
    <div class="container">
      message
    </div>
    <Foot/>
  </div>
</template>
<script>
import { get } from "@/api/index";
import Nav from '@/components/nav.vue'
import Foot from '@/components/foot.vue'
export default {
  name:"message",
  components:{
    Nav,
    Foot,
  },
  created() {
    get().then(res => {
      console.log(res);
    });
  }
};
</script>
