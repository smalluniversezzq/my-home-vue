<template>
  <div class="nav">
    <div class="nav-box">
      <div class="container nav-header flex flex-wrap">
        <div class="logo" >
          <img id='my-svg' :src="logoSvg" alt="">
        </div>
        <ul class='nav-list flex flex-wrap '>
          <li @click='jumpTo("/")'>主页</li>
          <li @click='jumpTo("about")'>关于我</li>
          <li @click='jumpTo("works")'>作品</li>
          <li @click='jumpTo("contact")'>联系方式</li>
          <li @click='jumpTo("message")'>留言板</li>
        </ul>
        <ul class="time-nav flex flex-wrap just-end">
          <li class='time-box mr'>
            <div class='time'>
              {{dataTime}}
            </div>
          </li>
          <li class='weather-box tac'>
            <div class='weather tac'>
              <img :src="fine" alt="">
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import moment from 'moment'
export default {
  name: "headNav",
  components: {
  },
  data (){
    return {
      logoSvg:require('@/assets/nav/logoSvg.svg'),
      fine:require('@/assets/nav/qingtian.png'),
      dataTime:"",
    }
  },
  methods:{
    getTime(){
      setInterval(()=>{
        let times = new Date().getTime()
        this.dataTime =  moment(new Date(times)).format('YYYY-MM-DD  h:mm:ss')
      })
     },
  },
  created(){
    this.getTime()
    
  },
  mounted(){
  },
  updated(){},
  desroyed(){},
};
</script>
<style lang="less" scoped>
  .nav{
    .nav-box{
      width: 100%;
      height:50px; 
      // background: #f2f2f2;
      .nav-header{
        height: 50px;
        line-height: 50px;
        .logo{
          width: 50px;
          height: 50px;
          background: #fff;
          img{
            width: 100%;
          }
        }
        .nav-list{
          width: 820px;
          background: #fff;
          li{
            width: 100px;
            height: 50px;
            text-align: center;
            cursor:Pointer;
            background: #fff;
          }
          li:hover {
            color:#515151;
            background: #e6e6e6;
          }
        }
        .time-nav{
          width:300px;
          height: 50px;
          background:fff;
          .weather-box{
            width: 30px;
            .weather{
              width: 24px;
              line-height: 50px;
              img{
                margin-top: 10px;
                width:100%;
              }
            }
          }
          .time-box{
            .time{
              color:#8a8a8a;
            }
          }
        }
      }
    }

  }
</style>
