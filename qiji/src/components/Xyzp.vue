<template>
  <div class="Xyzp">
    <div class='nav_back'></div>
      <img src="../assets/xyzp/banner1.png" alt="" class="banner1">
    
   <h1 class='Title'>小赢招聘 对接企业与人才的一站式招聘平台</h1>
    <div class='mainFun'>
      
      <div class='funCel'>
        <img src="../assets/xyzp/icon_1.png" alt="">
        <h2>简历管理</h2>
        <p>招聘流程简单高效</p>
        <p>备用候选人随时激活</p>       
      </div>
      <div class='funCel'>
        <img src="../assets/xyzp/icon_2.png" alt="">
        <h2>个人求职</h2>
        <p>把握职位最新招聘信息</p>
        <p>投递反馈及时 求职渠道专业</p>      
      </div>
      <div class='funCel'>
        <img src="../assets/xyzp/icon_3.png" alt="">
        <h2>职位管理</h2>
        <p>根据招聘需求匹配职位类型</p>
        <p>并推荐合适的候选人</p>      
      </div>
       <div class='funCel'>
        <img src="../assets/xyzp/icon_4.png" alt="">
        <h2>职业测评</h2>
        <p>专业高效的职业测评</p>
        <p>助您职业更进一步</p>      
      </div>
    </div>
    <div class='banner2'>人才数据时代的创新招聘方案</div>

        <div class="xyApp_content">
          <img src="../assets/xyzp/app.png" alt="">
          <div class="content">
            <h3>小赢招聘APP版</h3>
            <p>海量职位实时发布更新，一键锁定投递简历前沿专业的</p>
            <p>职场培训让您的求职薪资翻翻翻圈儿内第一资讯通知触</p>
            <p>手可及等你查询。</p>
          </div>
        </div>
        <div class="xyweb_content">
          <div>
             <img src="../assets/xyzp/web.png" alt="">
          <div class="content">
            <h3>小赢招聘WEB版</h3>
            <p>小赢招聘始终以企业与人才需求为导向，用权威的专业服</p>
            <p>务，做好企业与人才的对接；为个人用户提供网上求职、</p>
            <p>简历中心、职业知道等个性化服务；为企业客户提供以网</p>
            <p>络招聘为核心的人才解决方案。</p>
          </div>
          </div>
         
        </div>
    <div class='downLoad'>
      <h1>下载小赢招聘</h1>
      <div>
        <div class="ios cell">
          <img src="../assets/xyzp/iOS.png" alt="">
          <p>小赢招聘IOS端</p>
        </div>
        <div class="android cell">
           <img src="../assets/xyzp/android.png" alt="">
          <p>小赢招聘Android端</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Xyzp',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less">
.Xyzp{
.banner1{
    position: absolute;
    top: 0px;
    left: 0;
    bottom: 0;
    right: 0;
    margin: 192px auto;
  }

.Title{
  position: absolute;
top: 180px;
font-size: 28px;
color: #fff;
left:43%;
}
.nav_back{
  height: 400px;
  width: 100%;
  top: 80px;
  z-index: -99;
  position: absolute;
 
   background: -webkit-linear-gradient(#3b4e7f, #6f84b8); /* Safari 5.1 - 6.0 */
  background: -o-linear-gradient(#3b4e7f, #6f84b8); /* Opera 11.1 - 12.0 */
  background: -moz-linear-gradient(#3b4e7f, #6f84b8); /* Firefox 3.6 - 15 */
  background: linear-gradient(#3b4e7f, #6f84b8); /* 标准的语法 */
}
.mainFun{
  width: 1180px;
  height: 420px;
  margin: 0 auto;
  // padding: 67px 0 0;
  .funCel{
   width: 180px;
   margin: 110px 32px 0 80px;
    float: left;
    h2{
      font-size: 24px;
      text-align: center;
      margin:20px 0;
      color: #333;
    }
    p{
       font-size: 14px;
      text-align: center;
      margin:0 0 10px;
      color: #8a8a8a;
    }
  }
}
.banner2{
  width: 100%;
  height: 180px;
  line-height: 180px;
  text-align: center;
  color: #fff;
  font-size: 32px;
  background: url(../assets/xyzp/banner2.png)no-repeat center;
}
.xyApp_content{
    height: 680px;
    width: 1180px;
    margin: 0 auto;
    // padding:60px 0 0 0px;
    img{
      float: left;
    margin: 66px 0 0 50px;
    }
    .content{
         width: 540px;
        float: left;
        margin: 260px 0 0 45px;
        text-align: left;
      h3{
        font-size: 32px;
        color: #333;
        margin-bottom: 50px;
      }
      p{
        font-size: 22px;
        color: #666;
         margin-bottom: 15px;
      }
      span{
         font-size: 22px;
         a{
           text-decoration: none;
            color: #f99740;
            line-height: 115px;
         }
       
      }
    }
  }
  .xyweb_content{
    height: 680px;
      background: -webkit-linear-gradient(#3b4e7f, #6f84b8); /* Safari 5.1 - 6.0 */
      background: -o-linear-gradient(#3b4e7f, #6f84b8); /* Opera 11.1 - 12.0 */
      background: -moz-linear-gradient(#3b4e7f, #6f84b8); /* Firefox 3.6 - 15 */
      background: linear-gradient(#3b4e7f, #6f84b8); /* 标准的语法 */
     width: 100%;
    margin: 0 auto;
     >div{
      width: 1180px; 
       margin: 0 auto;
    }
    img{
      float: right;
      margin-top: 157px;
    }
    .content{
          width: 560px;
          float: left;
          margin: 190px 0 0 50px;
          text-align: left;
          color: #fffefe;
      h3{
        font-size: 32px;
        color: #fffefe;
        margin-bottom: 50px;
      }
      p{
        font-size: 22px;
        color: #fff;
         margin-bottom: 15px;
      }
      span{
         font-size: 22px;
         a{
           text-decoration: none;
            color: #f99740;
            line-height: 115px;
         }
       
      }
    }
}

.downLoad{
  height: 590px;
  h1{
    font-size:32px;
    color: #333;
    margin: 100px auto 60px;
  }
  >div{
    margin: 0 auto;
      height: 300px;
      width: 750px;
    .cell{
      width: 240px;
      height: 300px;
      float: left;
       font-size:26px;
      color: #333;
      p{
         margin-top: 25px;
      }

    }
    .ios{
      margin-right: 250px;
    }
  }
}




}
</style>
