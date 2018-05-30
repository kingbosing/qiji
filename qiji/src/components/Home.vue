<template>
  <div class="hello">
    <div class="img">
      <img class='word' src="../assets/Home/word.png" alt="">
      
     
    </div>
    <div class="mainContent">
        <div class="xyApp_content">
          <img src="../assets/Home/app.png" alt="">
          <div class="content">
            <h3>小赢计划APP版</h3>
            <p>方便、快捷、高效</p>
            <p>为您提供高效’轻松、愉快的办公体验</p>
             <span><router-link to="/Product?num=2">查看更多详情></router-link></span>
          </div>
        </div>
        <div class="xyweb_content">
          <div>
            <img src="../assets/Home/web.png" alt="">
          <div class="content">
            <h3>小赢计划WEB版</h3>
            <p>员工、领导协同办公</p>
            <p>体验一站式便携服务</p>
             <span><router-link to="/Product?num=2">查看更多详情></router-link></span>
          </div>
          </div>
          
        </div>

        <div class="ToDo_content">
          <h2>解决方案</h2>
          <div>
            <div class="cell" v-for="k in msg" :key="k.title"  v-bind:style="{  background:'url('+ k.url + ')no-repeat center' }">
                <HomeCard :childMsg="k"></HomeCard>
            </div>
            
          </div>
        </div>

        
    </div>
    <div class='TheSkill'>
      <div>
         <div class=cell>
           <img src="../assets/Home/efficiency.png" alt="">
           <h4>销售效率提升</h4>
           <p>市场销售团队外出工作的小助手</p>
         </div>
            <div class=cell>
              <img src="../assets/Home/administration.png" alt="">
              <h4>管理高效规范</h4>
              <p>各部门管理流程更加规范搞笑</p>
            </div>
            <div class=cell>
              <img src="../assets/Home/communicate.png" alt="">
              <h4>沟通便捷顺畅</h4>
              <p>在线聊天沟通无阻碍，工作更有趣</p>
            </div>
            <div class=cell>
              <img src="../assets/Home/data.png" alt="">
              <h4>数据自能化</h4>
              <p>工作数据统一管理，开启智能化时代</p>
            </div>
      </div>
           
    </div>
<a href='http://www.work-oa.com/' target="_block" class='toServer'>立即体验</a>
    <div class="HeSay">
      <h2>他们这么说</h2>
      <template>
      <el-carousel :interval="4000" type="card" height="330px" width="560px">
          <el-carousel-item >
            <img src="../assets/Home/portait3_b.png" alt="">
            <h3>
              人事行政专员-张丽
            </h3>
            <p>我们公司的后勤部门需要考勤机打卡，销售部门是弹性工作制，研发部门经常加班调休，其他职能部门是固定上下班时间。每个月最痛苦的就是统计考勤数据！</p>
          </el-carousel-item>
          <el-carousel-item >
            <img src="../assets/Home/portarit2_b.png" alt="">
            <h3>
              财务主管-李丹
            </h3>
            <p>我们公司对财务管理比较细致，针对不同的情况都会有对应的审批流程。在制作各种表单及执行的时也有许多问题：需要找不同的负责人签字，浪费员工时间。</p>
          </el-carousel-item>
          <el-carousel-item >
            <img src="../assets/Home/portrait1_b.png" alt="">
            <h3>
              总经理-王福之
            </h3>
            <p>随着公司的壮大，我处理事务愈发增多，和合作伙伴之间的业务关系往来却越来越少！我希望我们能够从繁琐的事务流程中解放出来，更好的为公司增加业务、客户及收入！</p>
          </el-carousel-item>
        </el-carousel>
      </template>
    </div>
    <!-- <div class="logo"></div> -->
  </div>
</template>

<script>

import HomeCard from '@/components/HomeCard';

import url1 from "@/assets/Home/logistics.png";
import url2 from "@/assets/Home/Realty.png";
import url3 from "@/assets/Home/education.png";
import url4 from "@/assets/Home/retail.png";
import url5 from "@/assets/Home/manufacture.png";
import url6 from "@/assets/Home/government.png";


export default {
  name: 'Home',
  mounted(){
      if(this.$route.name==='Home'){
        this.isHome=false;
         
      }
  },
  components:{ HomeCard},
  data () {
    return {
      msg: [
        {
          title:'新物流',
          url:url1,
          content:'统一管理配送服务，保证交接工作量，打造和谐统一的办公环境'
        },
         {
          title:'房地产',
          url:url2,
          content:'员工下载即可使用，易于复制，满足快速发展的业务需求'
        },
         {
          title:'在线教育',
          url:url3,
          content:'管理员将关键信息送达到每一位师生手机中，实现信息全覆盖'
        },
         {
          title:'新零售',
          url:url4,
          content:'通过话题分享，提升凝聚力，让管理更规范，带动门店一线员工'
        },
         {
          title:'新制造',
          url:url5,
          content:'三端用户统一集成管理，轻应用连接业务管理，架构更稳定'
        },
         {
          title:'大政务',
          url:url6,
          content:'员工随时交流，精准传播信息，解决多系统的管理难题'
        },
      ]
    }
  },
  methods:{
    toUrl:function(){
      window.open('www.work-oa.com',"_blank");
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less">
// .nav a{  
//   // color: #fff;
// }
.hello{
  min-height: 500px;
  overflow: hidden;
}
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.hello .img{
  width: 100%;
  height:650px;
  background: url(../assets/Home/banner.png);
  
  position: absolute;
  top:0;
  z-index: -99;
  .word{
    margin: 210px auto 0;
    display: block;
  }
  .button{
    margin: 96px auto 0;
    display: block;
    cursor: pointer;
  }
}
.mainContent{
  // width: 1180px;
  // height:1200px;
  margin: 570px auto 0;
  opacity: 1;
  /* background: #ccc; */
  .xyApp_content{
    height: 650px;
    padding:60px 0 0 0px;
    width: 1180px;
    margin: 0 auto;
    img{
      float: left;
      margin-top: 50px;
    }
    .content{
          width: 400px;
          float: left;
          margin: 220px 0 0 200px;
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
    height: 570px;
    padding:60px 0 0 0px;
    background: #f7f7f7;
    >div{
      width: 1180px;
      margin: 0 auto;
      img{
      float: right;
    }
    .content{
          width: 400px;
          float: left;
          margin: 170px 0 0 50px;
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
    
  }
  .ToDo_content{
    height: 664px;
     width: 1180px;
    margin: 0 auto;
    h2{
      text-align: center;
      font-size: 24px;
      color: #1a1a1a;
      padding: 36px 0;
    }
    .cell{
      height: 236px;
      width: 355px;
      float: left;
      margin: 10px 12px 10px 10px;
    }
  
  }

  

}
.TheSkill{
    height: 300px;
    width: 100%;
    background: #394146;

    >div{
      width: 1180px;
      margin: 0 auto;
       height: 100%;
      .cell{
        width: 290px;
        float: left;
        height: 100%;
        img{
          margin: 82px auto 0;
        }
        h4{
          font-size: 16px;
          color: #fff;
          margin-top: 20px;
          font-weight: normal;
        }
        p{
          font-size: 12px;
          color: #8a8a8a;
          margin-top:16px;
        }
      }
    }
    
   
  } 
  .HeSay{
      width: 1180px;
      margin: 100px auto 100px;
      .el-carousel{
        height: 340px;
      }
     .el-carousel__item--card.is-in-stage{
        background: #d9d9d9;
        img{
          margin: 30px auto;
        }
          h3{
            display: none;
          }
          p{
            display: none;
            
          }
      }
      .el-carousel__indicators--outside{
        display: none;
      }
      .el-carousel__item--card.is-active{
         background: #fff;
         margin: 5px 0;
         box-shadow: 0 0 3px #dedede;
         img{
          margin: 0;
        }
          h3{
            display: block;
            font-size: 24px;
            color: rgba(51, 51, 51, 0.8);
            margin:20px auto;
          }
          p{
            display: block;
             font-size: 14px;
            color: rgba(138, 138, 138, 0.6);
            margin:0px auto;
            padding: 0 40px;
          }
      }
      h2{
        font-size: 24px;
        color: #1a1a1a;
        margin-bottom: 24px;
      }
    }

.hello .logo{
    width: 1180px;
    height: 80px;
    line-height: 80px;
  position: absolute;
  top: 0;
  z-index: -1;
  background: url(../assets/Home/logo.png)no-repeat;
}

.hello .toServer{
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
      top: 40px;
      right: 0;
      left: 0;
      bottom: 0;
      margin: auto;
      z-index: 999999;
    }

</style>
