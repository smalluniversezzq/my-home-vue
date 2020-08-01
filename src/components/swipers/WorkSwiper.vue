<template>
  <div class="">
    <swiper :options="swiperOptionWork" >
        <swiper-slide >  
          index
        </swiper-slide>  
        <swiper-slide>  
          index
        </swiper-slide>  
        <swiper-slide>  
         index
        </swiper-slide>  
    </swiper>
  </div>
</template>
<script>
export default {
    computed:{
    swipers() {
      // return this.$refs.mySwiperWork.swiper;
    },
  },
  data(){
    return {
      ll:[1,2,3],
      swiperOptionWork:{
        autoplay: true,//可选选项，自动滑动
        direction: "horizontal", //水平方向移动
        speed:300,
      },
    }
  },
  mounted(){
    console(123)
  }
}
</script>
<style>
</style>