<template>
  <div class="ToPlan">
    <div class='banner'></div>
<div class='content'>
  <h1>解决方案</h1>
  <p>为各行业，提供专业性的管理解决方案</p>
  
  <template>
    <el-card v-for="key in msg" :key="key.url">
      <img :src="key.url" class="image">
      <div style="padding: 14px;">
        <span class='title'>{{key.title}}</span>
        <div class="bottom clearfix">
          {{key.content}}
        
        </div>
      </div>
    </el-card>
  </template>
</div>
  </div>
</template>

<script>
import con1 from "@/assets/plan/img_1.png";
import con2 from "@/assets/plan/img_2.png";
import con3 from "@/assets/plan/img_3.png";
import con4 from "@/assets/plan/img_4.png";
import con5 from "@/assets/plan/img_5.png";
import con6 from "@/assets/plan/img_6.png";
import con7 from "@/assets/plan/img_7.png";
import con8 from "@/assets/plan/img_8.png";


export default {
  name: 'Plan',
  data () {
    return {
      msg: [
        {
          url:con1,
          title:'新物流',
          content:'通过软件，能够对员工在进行配送服务中统一的管理，保证随时随地交接各员工的工作量，致力于打造和谐统一，高效率的办公环境，解决企业痛点。'
      },{
         url:con2,
          title:'房地产',
          content:'员工可以通过下载使用app，在app中便于员工使用复制功能，满足企业内部快速发展的业务需求，随时随地办公，无需通过电脑点击操作。'
      },{
         url:con3,
          title:'在线教育',
          content:'管理员可以通过软件将重要通知、关键信息以及其他需要师生知道的信息送达到每一位师生的手机中，可以充分的实现信息在师生中全覆盖。'
      },{
         url:con4,
          title:'新零售',
          content:'通过同事在软件中话题分享，通过圈内交流来提升企业内部员工的凝聚力，让门店的管理更加的规范，从而带动门店的一线员工。'
      },{
         url:con5,
          title:'新制造',
          content:'通过PC端、网页端、移动端三端在互联网中的互通，能够对用户进行统一的集成管理，轻松实现轻应用连接业务管理功能，使组织架构更加的稳定。'
      },{
         url:con6,
          title:'大政务',
          content:'政府内部员工可以通过软件实现圈内随时交流，并且能够精准高效的让信息在内部通过传播，能够有效的解决多系统产生的管理难题。'
      },{
         url:con7,
          title:'O2O',
          content:'通过第三方应用，能够最大限度的提高员工在企业内部的工作效率，能够加快企业内部架构的运转，充分有效的使企业文化的到充分的传播'
      },{
         url:con8,
          title:'人力资源',
          content:'通过软件，能够对员工在进行配送服务中统一的管理，保证随时随地交接各员工的工作量，致力于打造和谐统一，高效率的办公环境，解决企业痛点。'
      }
      ]
    }
  },
  methods:{
    getUrl:function(data){
     
      return data
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less">
.ToPlan{
  background: #f7f7f7;
  .banner{
    height: 300px;
    background: url(../assets/plan/banner.png)no-repeat center;
  }
.content{
  width: 1135px;
  height: 1515px;
  margin: 0 auto;
  >h1{
    font-size: 36px;
    color: #1a1a1a;
    margin-top: 40px;
    text-align: left;
    padding-left: 10px;
  }
  >p{
    font-size: 18px;
    color: #8a8a8a;
    margin-top: 14px;
    text-align: left;
    padding-left: 10px;
  }
  .el-card{
    width: 355px;
    height: 440px;
    float: left;
    margin:  10px;
    background: #fff;
    
    .el-card__body{
      padding: 0;
    }
    .title{
      color: #f99740;
      font-size: 20px;
      margin: 20px auto;
      display: inline-block;
    }
    .clearfix{
       color: #8a8a8a;
      font-size: 14px;
      line-height: 24px;
    }
  }
}


}
</style>
