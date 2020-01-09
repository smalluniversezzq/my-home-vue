<template>
  <div class="home">
    <Nav/>
    <div class="home-border" >
      <div class="benner" >
      </div>
    </div>
    <Foot/>
  </div>
</template>

<script>
// import Nav from '@/components/nav.vue'
// import Foot from '@/components/foot.vue'
export default {
  name: "home",
  components: {
  },
  data (){
    return {
    }
  },
  methods:{

  },
  created(){
  },
  mounted(){
  },
  updated(){},
};
</script>
<style lang="less" scoped>
  .home{
    // background: #f2f2f2;
    .home-border{
      width: 100%;
      height: 800px;
      .benner{
        opacity: 1;
        width: 100%;
        height: 100%;
        background: url('http://aquatilis.tv/wp-content/uploads/2018/12/dark-1838340.jpg');
        background-size: cover;
        background-position: 50% 50%;
        background-attachment: scroll;
      }
      
    }
  }

</style>
