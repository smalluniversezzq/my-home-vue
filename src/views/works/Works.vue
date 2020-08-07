
 <template>
  <div class="works head-top" >
    <Nav class='nav-boxs' :type='1'/>
      <WorkSwiper/>
      <Button>btn</Button>
    <h1>This is an works page</h1>
    <Foot/> 
  </div>
</template>
<script>
import WorkSwiper from '@/components/swipers/WorkSwiper.vue'
// import Vue from 'vue';
// import { Button, Radio } from 'iview';
// Vue.component('Button',Button);
// Vue.component('Radio',Radio);


export default {
  name:"works",
  components:{
    WorkSwiper
  },
  created() {
    // get().then(res => {
    //   console.log(res);
    // });
  }
};
</script>


<style

</style>
