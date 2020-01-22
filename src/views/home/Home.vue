<template>
  <div class="home">
    <Nav/>
    <swiper :options="swiperOption" ref="mySwiper">
      <!-- slides -->
      <swiper-slide>
        <div class="home-border" :style='{width:w+"px",height:(h-50)+"px"}'>
          <div class="benner" :style='{width:w+"px",height:(h-50)+"px"}'>
            <div class='benner-bg'>
            </div>
          </div>
          <div class='animate-box'>
          </div>
          <div class='bg-mast'>
          </div>
          <div class='content'>
            <div class='animes' >
              你好1
            </div>
          </div>
        </div>
      </swiper-slide>
      <swiper-slide>
        <div class="home-border" :style='{width:w+"px",height:(h-50)+"px"}'>
          <div class="benner" :style='{width:w+"px",height:(h-50)+"px"}'>
            <div class='benner-bg'>
            </div>
          </div>
          <div class='animate-box'>
          </div>
          <div class='bg-mast'>
          </div>
          <div class='content'>
            <div class='animes' >
              你好2
            </div>
          </div>
        </div>
      </swiper-slide>
      <swiper-slide>I'm Slide 3</swiper-slide>
     </swiper>
    <!-- <Foot/> -->
  </div>
</template>

<script>
import anime from 'animejs'
export default {
  name: "home",
  components: {
  },
  computed:{
    swiper() {
      return this.$refs.mySwiper.swiper;
    },
  },
  data (){
    return {
      swiperOption: {
        notNextTick: true, //notNextTick是一个组件自有属性，如果notNextTick设置为true，组件则不会通过NextTick来实例化swiper，也就意味着你可以在第一时间获取到swiper对象，假如你需要刚加载遍使用获取swiper对象来做什么事，那么这个属性一定要是true
        direction: "vertical", //水平方向移动
        grabCursor: true, //鼠标覆盖Swiper时指针会变成手掌形状，拖动时指针会变成抓手形状
        setWrapperSize: true, //Swiper使用flexbox布局(display: flex)，开启这个设定会在Wrapper上添加等于slides相加的宽或高，在对flexbox布局的支持不是很好的浏览器中可能需要用到。
        autoHeight: true, //自动高度。设置为true时，wrapper和container会随着当前slide的高度而发生变化
        slidesPerView: 1, //设置slider容器能够同时显示的slides数量(carousel模式)。可以设置为数字（可为小数，小数不可loop），或者 'auto'则自动根据slides的宽度来设定数量。loop模式下如果设置为'auto'还需要设置另外一个参数loopedSlides。
        mousewheel: true, //开启鼠标滚轮控制Swiper切换。可设置鼠标选项，默认值false
        mousewheelControl: true, //同上
        height: window.innerHeight, // 高度设置，占满设备高度
        resistanceRatio: 0, //抵抗率。边缘抵抗力的大小比例。值越小抵抗越大越难将slide拖离边缘，0时完全无法拖离。本业务需要
        observeParents: true, //将observe应用于Swiper的父元素。当Swiper的父元素变化时，例如window.resize，Swiper更新
        on: {
          slideChangeTransitionStart: function(){
            alert(this.activeIndex);
          },
        },
      },
      h:'',
      w:'',

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
    },
 

  },
  created(){

  },
  mounted(){
    this.h = document.documentElement.clientHeight
    this.w = document.documentElement.clientWidth
    console.log(this.w,this.h)
    this.toanimes()
    

  },
  updated(){},
};
</script>
<style lang="less" scoped>
  .home{
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
