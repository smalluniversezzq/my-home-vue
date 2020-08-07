<template>
  <div class="workswiper">
      <Carousel v-model="value1" autoplay autoplay-speed='4000' dots='outside' arrow='hover'  loop>
        <CarouselItem v-for='(item,index) in images' :key='index'>
            <div class="demo-carousel">
              <img :src="item.picUrl" alt="">
            </div>
        </CarouselItem>
    </Carousel>

  </div>
</template>
<script>
  components: {
    
  }
  export default{
    name:"swiper",
    components: {
  
    },
    data(){
      return{
        images: [
          {
            linkUrl: 'http://y.qq.com/w/album.html?albummid=0044K2vN1sT5mE',
            picUrl: 'http://y.gtimg.cn/music/photo_new/T003R720x288M000001YCZlY3aBifi.jpg',
            id: 11351
          },
          {
            linkUrl: 'https://y.qq.com/m/digitalbum/gold/index.html?_video=true&id=2197820&g_f=shoujijiaodian',
            picUrl: 'http://y.gtimg.cn/music/photo_new/T003R720x288M000004ckGfg3zaho0.jpg',
            id: 11372
          },
          {
            linkUrl: 'http://y.qq.com/w/album.html?albummid=001tftZs2RX1Qz',
            picUrl: 'http://y.gtimg.cn/music/photo_new/T003R720x288M00000236sfA406cmk.jpg',
            id: 11378
          },
          {
            linkUrl: 'https://y.qq.com/msa/218/0_4085.html',
            picUrl: 'http://y.gtimg.cn/music/photo_new/T003R720x288M000001s0BXx3Zxcwb.jpg',
            id: 11375
          },
          {
            linkUrl: 'https://y.qq.com/m/digitalbum/gold/index.html?_video=true&id=2195876&g_f=shoujijiaodian',
            picUrl: 'http://y.gtimg.cn/music/photo_new/T003R720x288M000002cwng4353HKz.jpg',
            id: 11287
          }
        ]
      }
    },
    created:{},

  }
</script>
<style lang='less' scoped>

</style>