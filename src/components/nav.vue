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
import Vue from 'vue'
import moment from 'moment'
import { getHeweather } from '@/api/home/index.js'

export default {
  name: "headNav",
  components: {
  },
  data (){
    return {
      logoSvg:require('@/assets/nav/logoSvg.svg'),
      fine:require('@/assets/nav/qingtian.png'),
      dataTime:"",
      position:'',
      city:"",
    }
  },
  methods:{
    getTime(){
      setInterval(()=>{
        let times = new Date().getTime()
        this.dataTime =  moment(new Date(times)).format('YYYY-MM-DD  h:mm:ss')
      })
     },
    getMap(){
      let _this = this
      // console.log(_this.getStatus(),'ovee')
      var geolocation=new BMap.Geolocation();
      geolocation.getCurrentPosition(function(r){
        // if(_this.getStatus()==BMAP_STATUS_SUCCESS){
          var lat=r.address.lat//当前经度
          var lng=r.address.lng//当前纬度
          var province=r.address.province //返回当前省份
          var city=r.address.city//返回当前城市
          console.log(city)
          // Vue.ls.set("city",city,12 * 60 * 60 * 1000);
          Vue.ls.set("city",city,10000);
          _this.city = city
          console.log(sessionStorage.getItem('weatherTxt'),'ovee')
          if(sessionStorage.getItem('weatherTxt')){
          }else{
            console.log('没有存储')
            _this.getHefengFn()
          }
        // }
      })
    },
    getHefengFn(){
      getHeweather({
        location:this.city,
        key:'8dda60d1afc549339bf5d0964955ce91'
      }).then(res =>{
        console.log(res)
        if(res.status === 200){
          console.log(res.data.HeWeather6[0].basic);
          console.log(res.data.HeWeather6[0].now);
          sessionStorage.setItem('weatherTxt',res.data.HeWeather6[0].lifestyle[0].txt)
        }
      })
    }
  },
  created(){
    this.getTime();
  },
  mounted(){
    if(Vue.ls.get("city")){
      this.city = Vue.ls.get("city")
    }else{
      this.getMap();
    }
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
