<template>
  <div class="serve">
     <div class="img">
       <a href='http://www.work-oa.com/' target="_block" class='toServer'>立即预约</a>
     </div>
     
     <div class='img_steps'>
       <img src="../assets/server/four_steps.png" alt="">
     </div>

     <div class="banner_stepseven"></div>
     <div class="content_stepseven">
       <div class="cel" v-for='k in msg' :key=k.url>
          <img :src="k.url" alt="">
          <h3>{{k.h1}}</h3>
          <p v-for="j in k.p" :key="j">{{j}}</p>
          
       </div>
     </div>
     
  </div>
</template>

<script>
import con1 from "@/assets/server/getready.png";
import con2 from "@/assets/server/liaison.png";
import con3 from "@/assets/server/discuss.png";
import con4 from "@/assets/server/initialization.png";
import con5 from "@/assets/server/process.png";
import con6 from "@/assets/server/function.png";
import con7 from "@/assets/server/check.png";

export default {
  name: 'Serve',
  data () {
    return {
      msg: [
        {
          url:con1,
          h1:'准备阶段',
          p:['项目销售实施交接','项目资料整理','项目内部启动会']
        },
         {
          url:con2,
          h1:'联络阶段',
          p:['成立项目小组','制定并提交预估实施计划','项目启动会','服务器环境搭建']
        },
         {
          url:con3,
          h1:'项目研讨',
          p:['制定及确认调研计划','业务调研及资料收集','调研报告']
        },
         {
          url:con4,
          h1:'系统初始化',
          p:['系统安装及安装培训','系统初始化','系统管理员培训']
        },
         {
          url:con5,
          h1:'流程实现',
          p:['权限配置','操作用户培训','系统模拟测试']
        },
         {
          url:con6,
          h1:'运行阶段',
          p:['系统运行','实施运维交接','系统优化']
        },
         {
          url:con7,
          h1:'验收阶段',
          p:['系统验收','运行中问题反馈和处理','项目总结']
        }

      ]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less">

.serve{
   
    .img{
    height: 400px;
    width: 100%;
    position: relative;
    background: url(../assets/server/service_banner.png)no-repeat center;
    .toServer{
      display: block;
      height: 44px;
      width: 150px;
      line-height: 44px;
      color: #fff;
      font-size: 16px;
      text-decoration: none;
      letter-spacing:2px;
      background: url(../assets/server/button_appointment.png);
      position: absolute;
      top: 188px;
      right: 0;
      left: 0;
      bottom: 0;
      margin: auto;
    }
  }
  
  .img_steps{
   height: 700px;
    width: 1000px;
    margin: 100px auto;
  }

  .banner_stepseven{
    height: 180px;
      width: 100%;
      background: url(../assets/server/banner_stepseven.png)no-repeat center;
  }
  .content_stepseven{
    height: 820px;
    width: 1180px;
    margin: 0px auto;
      .cel{
        height: 380px;
        width: 280px;
        display: inline-block;
        text-align: center;
        overflow: hidden;
        img{
          margin-top: 120px;
        }
        h3{
          margin: 36px 0 20px;   
            color: #333;
            font-size: 20px;       
        }
        p{
          color: #8a8a8a;
          font-size: 14px;
          margin-bottom: 10px;
        }
      }
  }

}

</style>
