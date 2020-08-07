<template>
  <div class="home">
    <Nav class='nav-boxs' :type='type'/>
    <swiper :options="swiperOption" ref="mySwiper">
      <swiper-slide>
        <div class="home-border" :style='{width:w+"px",height:(h)+"px"}'>
          <div class="benner" :style='{width:w+"px",height:(h)+"px"}'>
            <div class='benner-bg' :style='{backgroundImage:`url(${bg[0]})`}'>
            </div>
          </div>
          <div class='animate-box'>
          </div>
          <div class='bg-mast'>
          </div>
          <div class='home-content'>
            <div class="font-style font-size-24 letter-spacing-6">
              我是SmallUniverse
            </div>
            <div class='mt-xl font-size-20 letter-spacing-6'>
              一位Code Porter
            </div>
            <div class='mt-xl font-size-18 letter-spacing-6'>
             
            </div>
            <div class='mt-xl font-size-16 letter-spacing-6'>
              欢迎来到我的世界
            </div>
          </div>
        </div>
      </swiper-slide>
      <swiper-slide>
        <div class="home-border" :style='{width:w+"px",height:(h)+"px"}' >
          <div class="benner" :style='{width:w+"px",height:(h)+"px"}'>
            <div class='benner-bg' :style='{backgroundImage:`url(${bg[1]})`}'>
            </div>
          </div>
          <div class='animate-box'>
          </div>
          <div class='bg-mast'>
          </div>
          <div class='work-content'>
            <div class='work-content-box mt'>
              <div class='mt tal nav-title'>Works column</div>
              <div class='work-content-title tac'>title</div>
              <div class='work-swiper-box'>
                <WorkSwiper class='mt-xl'></WorkSwiper>
                <p class='describe'>describe</p>
              </div>
            </div>
          </div>
          <div class='shortcut'>
            <i class='shortcut-bg1'></i>
            <i class='shortcut-bg2'></i>
            <i class='shortcut-bg3'></i>
            <i class='shortcut-bg4'></i>
          </div>
        </div>
      </swiper-slide>
      <swiper-slide>
        <div class="home-border" :style='{width:w+"px",height:(h50)+"px"}'>
          <div class="benner" :style='{width:w+"px",height:(h)+"px"}'>
            <div class='benner-bg' :style='{backgroundImage:`url(${bg[1]})`}'>
            </div>
          </div>
          <div class='animate-box'>
          </div>
          <div class='bg-mast'>
          </div>
          <div class='content'>
          </div>
        </div>
      </swiper-slide>
     </swiper>
    <div class='point'>
      <p></p>
      <i></i>
    </div>
  </div>
</template>

<script>
import anime from 'animejs'
import WorkSwiper from '@/components/swipers/WorkSwiper.vue'
export default {
  name: "home",
  components:{
    WorkSwiper
  },
  computed:{
    swiper() {
      return this.$refs.mySwiper.swiper;
    },
    // swipers() {
    //   return this.$refs.mySwiperWork.swiper;
    // },
  },
  data (){
    return {
      type:"home",
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
        initialSlide:1,
        on: {
          slideChangeTransitionStart: function(){
            // alert(this.activeIndex);
          },
        },
      },
      // swiperOptionWork:{
      //   notNextTick: true, //notNextTick是一个组件自有属性，如果notNextTick设置为true，组件则不会通过NextTick来实例化swiper，也就意味着你可以在第一时间获取到swiper对象，假如你需要刚加载遍使用获取swiper对象来做什么事，那么这个属性一定要是true
      //   direction: "horizontal", //水平方向移动
      //   grabCursor: true, //鼠标覆盖Swiper时指针会变成手掌形状，拖动时指针会变成抓手形状
      //   setWrapperSize: true, //Swiper使用flexbox布局(display: flex)，开启这个设定会在Wrapper上添加等于slides相加的宽或高，在对flexbox布局的支持不是很好的浏览器中可能需要用到。
      //   autoHeight: true, //自动高度。设置为true时，wrapper和container会随着当前slide的高度而发生变化
      //   slidesPerView: 1, //设置slider容器能够同时显示的slides数量(carousel模式)。可以设置为数字（可为小数，小数不可loop），或者 'auto'则自动根据slides的宽度来设定数量。loop模式下如果设置为'auto'还需要设置另外一个参数loopedSlides。
      //   mousewheel: true, //开启鼠标滚轮控制Swiper切换。可设置鼠标选项，默认值false
      //   mousewheelControl: true, //同上
      //   width:" 100%", // 高度设置，占满设备高度
      //   height:"500px", // 高度设置，占满设备高度
      //   resistanceRatio: 0, //抵抗率。边缘抵抗力的大小比例。值越小抵抗越大越难将slide拖离边缘，0时完全无法拖离。本业务需要
      //   observeParents: true, //将observe应用于Swiper的父元素。当Swiper的父元素变化时，例如window.resize，Swiper更新
      //   initialSlide:0,
      // },
      h:'',
      w:'',
      bg:[
        require("@/assets/home/bg.png"),
        require("@/assets/home/bg1.png"),
      ]

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
    position: relative;
    .home-border{
      min-width: 100%;
      height: 100%;
      // height: 800px;
      position: relative;
      .benner{
        overflow:hidden;
        width: 100%;
        height: 100%;
        // height: 800px;
        position: absolute;
        z-index: 1;
        .benner-bg{
          width: 100%;
          height: 100%;
          // background: url('http://aquatilis.tv/wp-content/uploads/2018/12/dark-1838340.jpg');
          background-size: cover;
          background-position: 50% 50%;
          background-repeat:no-repeat;
          // background-attachment: scroll;
          transform-origin: 50% 80%;
          animation: coverZoom linear 50s;
          animation-iteration-count: infinite;
          -webkit-animation: coverZoom linear 50s;
          -webkit-animation-iteration-count: infinite;
          -moz-animation: coverZoom linear 50s;
          -moz-animation-iteration-count: infinite;
          -ms-animation: coverZoom linear 50s;
          -ms-animation-iteration-count: infinite;

          background-repeat:no-repeat;
          background-position:center;
          background-size: 100% 100%;
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
      .home-content{
        width: 100%;
        height: 500px;
        position:absolute;
        top: 30%;
        opacity: 1;
        color: #fff;
        z-index: 10;
        .font-style {
        }
      }
      .work-content{
        width: 100%;
        height: 600px;
        position:absolute;
        top: 15%;
        opacity: 1;
        color: #fff;
        z-index: 10;
        background: rgba(0, 0, 0, .3);
        .work-content-box{
          width: 1170px;
          height: 100%;
          // background: green;
          margin: 0 auto;
          .nav-title{
            font-size: 20px;
            margin-left: 30px;
          }
          .work-content-title{
            line-height: 50px;
          }
          .work-swiper-box{
            width:100%;
            height:500px;
            overflow: hidden;
      
            .describe{

            }
          }
        }
      }
      .shortcut{
        position: absolute;
        right: 30px;
        top:50%;
        font-size:25px;
        margin-top: -25px;
        width: 40px;
        height: 40px;
        z-index: 1001;
        .shortcut-bg1{
          position: absolute;
          top: 0;
          left: 0;
          display: block;
          width: 20px;
          height: 20px;
          background: url('../../assets/home/Sprite.png') no-repeat -50px -8px;
          animation:shortcut1 4s ease-in-out 0s infinite;
          }
        .shortcut-bg2{
          position: absolute;
          top: 0;
          left: 20px;
          display: block;
          width: 20px;
          height: 20px;
          background: url('../../assets/home/Sprite.png') no-repeat -71px -8px;
          animation:shortcut2 4s ease-in-out 0s infinite;
          }
        .shortcut-bg3{
          position: absolute;
          top: 20px;
          left: 0px;
          display: block;
          width: 20px;
          height: 20px;
          background: url('../../assets/home/Sprite.png') no-repeat -50px -8px;
          animation:shortcut3 4s ease-in-out 0s infinite;
          }
        .shortcut-bg4{
          position: absolute;
          top: 20px;
          left: 20px;
          display: block;
          width: 20px;
          height: 20px;
          background: url('../../assets/home/Sprite.png') no-repeat -50px -8px;
          animation:shortcut4 4s ease-in-out 0s infinite;
          }
        }
      }
    }
    .point{
      position: absolute;
      bottom: 20px;
      left: 50%;
      z-index: 99;
      width: 36px;
      height: 53px;
      margin-left: -18px;
      p{
        position: absolute;
        top: 10px;
        left: 50%;
        margin-left: -3px;
        display: block;
        width: 6px;
        height: 12px;
        background: #fff;
        border-radius: 5px;
        animation:pointAnim 1.5s ease-in-out 0s infinite;
      }
      i{
        display: block;
        width: 36px;
        height: 53px;
        background: url('../../assets/home/Sprite.png') no-repeat -2px -2px;
        

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
  @keyframes pointAnim{
    0% { top: 10px; }
    50%{ top: 15px;}
    100% { top: 10px; }
  }
  @keyframes shortcut1{
    0% { top: 0px;left: 0px; }
    25%{ top: 0px; left: 20px;}
    50%{  top: 20px; left: 20px;}
    75% {top: 20px; left: 0px; }
    100% {top: 0px;left: 0px; }
  }
  @keyframes shortcut2{
    0% { top: 0px; left: 20px;}
    25%{ top: 20px; left: 20px;}
    50%{ top: 20px; left: 0px;}
    75% {top: 0px;left: 0px; }
    100% { top: 0px; left: 20px;}
  }
  @keyframes shortcut3{
    0% { top: 20px; left: 0px;}
    25%{ top: 0px;left: 0px; }
    50%{ top: 0px; left: 20px;}
    75% {top: 20px; left: 20px; }
    100% {top: 20px; left: 0px;}
  }
  @keyframes shortcut4{
    0% { top: 20px; left: 20px; }
    25%{ top: 20px; left: 0px;}
    50%{  top: 0px;left: 0px; }
    75% { top: 0px; left: 20px; }
    100% {top: 20px; left: 20px; }
  }
</style>
<style scoped>

</style>
