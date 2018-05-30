<template>
  <div class="Xyjh">
    <div class='nav_back'></div>
      <img src="../assets/xyjh/banner1.png" alt="" class="banner1">
    
   <h1 class='Title'>小赢计划 数字化云工作平台</h1>
    <div class='mainFun'>
      
      <div class='funCel'>
        <img src="../assets/xyjh/icon_1.png" alt="">
        <h2>申请审批</h2>
        <p>提交业务申请表单</p>
        <p>一键审批通过申请</p>       
      </div>
      <div class='funCel'>
        <img src="../assets/xyjh/icon_2.png" alt="">
        <h2>外勤拜访</h2>
        <p>外勤签到拜访业务客户</p>
        <p>市场团队工作的小助手</p>      
      </div>
      <div class='funCel'>
        <img src="../assets/xyjh/icon_3.png" alt="">
        <h2>消息中心</h2>
        <p>应用内的沟通、通知公告</p>
        <p>待办事宜提示等消息传输</p>      
      </div>
      <div class='funCel'>
        <img src="../assets/xyjh/icon_4.png" alt="">
        <h2>企业文档</h2>
        <p>随时快速分享企业文件</p>
        <p>定向通知人员战略规划</p>      
      </div>
      <div class='funCel'>
        <img src="../assets/xyjh/icon_5.png" alt="">
        <h2>考勤管理</h2>
        <p>脱离考勤机 掌上打卡</p>
        <p>员工更轻松 人事更方便</p>      
      </div>
      <div class='funCel'>
        <img src="../assets/xyjh/icon_6.png" alt="">
        <h2>客户管理</h2>
        <p>客户档案一手在握</p>
        <p>市场及时跟踪客户进度</p>      
      </div>
    </div>
    <div class='banner2'></div>

        <div class="xyApp_content">
          <img src="../assets/xyjh/app.png" alt="">
          <div class="content">
            <h3>小赢计划APP版</h3>
            <p>方便、快捷、高效</p>
            <p>为您提供高效、轻松、愉快的办公体验</p>
            
          </div>
        </div>
        <div class="xyweb_content">
          <div>
             <img src="../assets/xyjh/web.png" alt="">
          <div class="content">
            <h3>小赢计划WEB版</h3>
            <p>针对电脑上的用户操作习惯及特点，做了相应的</p>
            <p>界面及功能调整，并且提供了许多利于电脑用户</p>
            <p>使用的快捷功能。</p>
          </div>
          </div>
         
        </div>
    <div class='downLoad'>
      <h1>下载小赢计划</h1>
      <div>
        <div class="ios cell">
          <img src="../assets/xyjh/iOS.png" alt="">
          <p>小赢计划IOS端</p>
        </div>
        <div class="android cell">
           <img src="../assets/xyjh/android.png" alt="">
          <p>小赢计划Android端</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Xyjh',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less">
.Xyjh{
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
   background: -webkit-linear-gradient(#495067, #6c7385); /* Safari 5.1 - 6.0 */
    background: -o-linear-gradient(#495067, #6c7385); /* Opera 11.1 - 12.0 */
    background: -moz-linear-gradient(#495067, #6c7385); /* Firefox 3.6 - 15 */
    background: linear-gradient(#495067, #6c7385); /* 标准的语法 */
  //  background: -webkit-linear-gradient(#3b4e7f, #6f84b8); /* Safari 5.1 - 6.0 */
  // background: -o-linear-gradient(#3b4e7f, #6f84b8); /* Opera 11.1 - 12.0 */
  // background: -moz-linear-gradient(#3b4e7f, #6f84b8); /* Firefox 3.6 - 15 */
  // background: linear-gradient(#3b4e7f, #6f84b8); /* 标准的语法 */
}
.mainFun{
  width: 1180px;
  height: 670px;
  margin: 0 auto;
  // padding: 67px 0 0;
  .funCel{
    width: 160px;
    // height: 200px;
    margin:60px 110px 0;
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
  background: url(../assets/xyjh/banner2.png)no-repeat center;
}
.xyApp_content{
    height: 680px;
    width: 1180px;
    margin: 0 auto;
    // padding:60px 0 0 0px;
    img{
      float: right;
      margin: 140px 0 0 50px;
    }
    .content{
          width: 400px;
          float: left;
          margin: 260px 0 0 140px;
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
    background: -webkit-linear-gradient(#495067, #6c7385); /* Safari 5.1 - 6.0 */
    background: -o-linear-gradient(#495067, #6c7385); /* Opera 11.1 - 12.0 */
    background: -moz-linear-gradient(#495067, #6c7385); /* Firefox 3.6 - 15 */
    background: linear-gradient(#495067, #6c7385); /* 标准的语法 */
     width: 100%;
    margin: 0 auto;
     >div{
      width: 1180px; 
       margin: 0 auto;
    }
    img{
      float: left;
      margin-top: 140px;
    }
    .content{
          width: 465px;
          float: left;
          margin: 300px 0 0 50px;
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
