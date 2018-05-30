<template>
  <div class="DownLoad" >
    <div class="img"></div>
    <div class="downLoad_jh">
      <div class="title">
        <h2>下载小赢计划</h2>
        <p>移动办公新选择 企业办公最佳选择</p>
      </div>
      <div class="downLoad_content">
        <img src="../assets/downLoad/xiaoyingjihua.png" alt="">
        <div class="cards" v-for="k in 3" :key="k">
          <Card :childMsg="url[k-1]"></Card>         
        </div>
      
      </div>
    </div>
    <div class="downLoad_zp">
      <div class="title">
        <h2>下载小赢招聘</h2>
        <p>招聘办公一步到位 赢在招聘 赢在未来</p>
      </div>
      <div class="downLoad_content">
        <img src="../assets/downLoad/xiaoyingzhaopin.png" alt="">
        <div class="cards" v-for="k in 3" :key="k">
          <Card :childMsg="url2[k-1]"></Card>
          
        </div>
      </div>
      
    </div>
    
  </div>
</template>




<script>
import Card from '@/components/card';

import android from "@/assets/downLoad/android.png";
import ios from "@/assets/downLoad/ios.png";
//xy
import xy_android from "@/assets/downLoad/xy_android.png";
import xy_iOS from "@/assets/downLoad/xy_iOS.png";
//zp
import zp_android from "@/assets/downLoad/zp_android.png";
import zp_ios from "@/assets/downLoad/zp_ios.png";

//windows
import windows from "@/assets/downLoad/windows.png";
import expect from "@/assets/downLoad/expect.png";

export default {
  name: 'Download',
  components: { Card},
  
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      url:[[android,xy_android],[ios,xy_iOS],[windows,expect]],
       url2:[[android,zp_android],[ios,zp_ios],[windows,expect]]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less">
.DownLoad{
  margin-bottom: 135px;
  [v-cloak]{
            display: none;
        }
  .img{
    width: 100%;
    height: 300px;
    background: url(../assets/downLoad/download_banner.png)no-repeat center;
  }
  .downLoad_jh{
     width: 1180px;
    height: 600px;
    margin: 0 auto;

   
  }
  .downLoad_zp{
     width: 1180px;
    height: 600px;
    margin: 0 auto;
    
  }
  .title{
    h2{
          margin: 40px 0 20px;
          color: #1a1a1a;
          font-size: 24px;
        }
        p{
          color: #8a8a8a;
          font-size: 16px;
        }
  }
  .downLoad_content{
     height:520px;
     >img{
       float: left;
       margin-right: 20px;
     }
     .cards{
       height: 205px;
      width: 204px;
       float: left;
       margin: 160px 20px 0;
       position: relative;
       
      
     }
     
  }
}

</style>
