<template>
  <div class="foot">
    <div class="footer">
      <div class="container mt">
        <!-- <div class='friendship mt' onselectstart="return false;">
          友情链接
        </div> -->
        <ul class="friendship-box flex flex-wrap just-center" onselectstart="return false;">
          <li class='mt-sm mr ml friendship-list ' v-for='(item,index) in shipList' :Key='index'>
            <span class='cursor-pointer' @click='jumpOpen(item.url)'>{{item.title}}</span>
          </li>
        </ul>
        <div class='contact mt tac ' onselectstart="return false;">
          <ul class='flex flex-wrap just-center'>
            <li class='ico-box ml mr' v-for='(item,index) in telList' :key='index'>
              <img class='cursor-pointer' :src="item.ico" alt="">
            </li>
          </ul>
        </div>
        <div class="copy-right tac mt">
          <span class='copy-txt'>Copyright</span>
          <span>2020 &nbsp;<img :src="copyright" alt=""> &nbsp;小宇宙的个人站</span>
        </div>
        <div class='record-number tac mt'>
          备案号
        </div>
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
      shipList:[
        {
          title:"百度",
          url:'https://www.baidu.com/'
        },
        {
          title:"CSDN",
          url:'https://www.csdn.net/'
        },
        {
          title:"百度",
          url:'https://www.baidu.com/'
        },
        {
          title:"CSDN",
          url:'https://www.csdn.net/'
        },
        {
          title:"百度",
          url:'https://www.baidu.com/'
        },
        {
          title:"CSDN",
          url:'https://www.csdn.net/'
        }
      ],
      telList:[
        {
          title:"github",
          ico:require('@/assets/footer/github.png'),
          url:''
        },
        {
          title:"qq",
          ico:require('@/assets/footer/qq.png'),
          url:''
        },
        {
          title:"wx",
          ico:require('@/assets/footer/wx.png'),
          url:''
        },
        {
          title:"wb",
          ico:require('@/assets/footer/wb.png'),
          url:''
        },
        {
          title:"csdn",
          ico:require('@/assets/footer/csdn.png'),
          url:''
        },
      ],
      copyright:require('@/assets/footer/copyright.png')
    }
  },
  methods:{

  },
  created(){
  },
  mounted(){
  },
  updated(){},
  desroyed(){},
};
</script>
<style lang="less" scoped>
  .foot{
    .footer{
      width: 100%;
      height: 150px;
      background: #fff;
      padding-top: 1px;
      transition: all 5s linear;
      div{
        .friendship{
          color: #515151;
          font-size: 16px;
          text-align: center;
          width: 100%;
          height:100%;
          border-bottom:1px dashed #515151;
        }
        .friendship-box{
          .friendship-list{
            font-size: 12px;
            color: #515151;
          }
        }
        .contact{
          ul{
            .ico-box{
              width: 20px;
              height: 20px;
              img{
                width: 100%;
              }
            }
          }
        }
        .copy-right{
          font-size: 12px;
          line-height: 15px;
        }
        .record-number{
          font-size: 12px
        }
      }
    }
    .footer:hover{
      animation: footerAnimate linear 5s;
      background: #b1b1b1;
    }
  }
  @keyframes footerAnimate {
    from {
      background: #fff;
    }
    to {
      background:#b1b1b1;
    }
  }
</style>
