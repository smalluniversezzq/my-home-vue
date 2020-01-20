<template>
  <div class="home">
    <Nav/>
    <div class="home-border" >
      <div class="benner" >
        <div class='benner-bg'>
        </div>
      </div>
      <div class='animate-box'>
      </div>
      <div class='bg-mast'>
      </div>
      <div class='content'>
        <div class='animes' >
          你好
        </div>
      </div>
    </div>
    <Foot/>
  </div>
</template>

<script>
import anime from 'animejs'
// import Nav from '@/components/nav.vue'
// import Foot from '@/components/foot.vue'
import { getHeweather } from '@/api/home/index.js'
export default {
  name: "home",
  components: {
  },
  data (){
    return {
    }
  },
  methods:{
    toanimes(){
      let clientWidth = document.body.clientWidth;
      console.log(clientWidth ,typeof clientWidth)
      var myAnimation = anime({
        targets: ['.animes',],
        translateX: clientWidth,
        direction: 'reverse',
        duration: 3000,
        easing: 'easeInOutExpo'
      });
    }

  },
  created(){
    getHeweather({
      location:'beijing',
      key:'8dda60d1afc549339bf5d0964955ce91'
    }).then(res =>{
      console.log(res)
      if(res.status === 200){
        console.log(res.data.HeWeather6[0].basic);
      }
    })
  },
  mounted(){
    this.toanimes()

  },
  updated(){},
};
</script>
<style lang="less" scoped>
  .home{
    // background: #f2f2f2;
    .home-border{
      min-width: 100%;
      height: 800px;
      position: relative;
      .benner{
        overflow:hidden;
        width: 100%;
        height: 800px;
        position: absolute;
        z-index: 1;
        .benner-bg{
          width: 100%;
          height: 100%;
          background: url('http://aquatilis.tv/wp-content/uploads/2018/12/dark-1838340.jpg');
          background-size: cover;
          background-position: 50% 50%;
          background-attachment: scroll;
          transform-origin: 50% 80%;
          animation: coverZoom linear 50s;
          animation-iteration-count: infinite;
          -webkit-animation: coverZoom linear 50s;
          -webkit-animation-iteration-count: infinite;
          -moz-animation: coverZoom linear 50s;
          -moz-animation-iteration-count: infinite;
          -ms-animation: coverZoom linear 50s;
          -ms-animation-iteration-count: infinite;
        }
      }
      .animate-box{
        position: absolute;
        background-color: rgba(96, 128, 160,.55);
        width: 100%;
        height: 100%;
        background-position: 50%;
        opacity: .4;
        z-index: 2;
      }
      .bg-mast{
        position: absolute;
        width: 100%;
        height: 100%;
        background-color: rgba(0,0,0,.25);
        z-index: 3;
      }
      .content{
        position:absolute;
        opacity: 1;
        color: #fff;
        z-index: 10;
      }
      
    }
  }
@keyframes coverZoom {
  0%,100% {
    transform: scale(1);
  }
  50%{
    transform: scale(1.24);
  }
}
</style>
