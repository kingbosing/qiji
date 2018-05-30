<template>
  <div id="app" v-cloak>
   <header>
     <div class='header-nav'>
       <div class="left_1" v-if="this.$route.query.num==2"></div>
       <div class="left" v-else></div>
       
       
       <div class="right" :class="{'NotHome':this.$route.query.num==2}">
         <ul>
           <!-- :to="{ path:'/Home', query: { num:  1} }" -->
           <li class="nav nav_act"> <router-link  to="/Home">首页</router-link></li>
           <li class="nav "> <router-link to="/Product?num=2">产品</router-link></li>
           <li class="nav "> <router-link to="/Plan?num=2">解决方案</router-link></li>
           <li class="nav "> <router-link to="/Serve?num=2">服务</router-link></li>
           <li class="nav "> <router-link to="/Download?num=2">应用下载</router-link></li>
           <li class="nav "> <router-link to="/AboutMe?num=2">关于我们</router-link></li>
         </ul>
       </div>
     </div>
   </header>
    <router-view/>



    <footer>
      <div class="mainFooter">
        <el-row>
          <el-col :span="5"><div class="grid-content bg-purple">
            <ul>
              <li class='title'>解决方案</li>
              <li><a>会议管理</a></li>
              <li><a >企业文件存储</a></li>
              <li><a >人事管理</a></li>
              <li><a >员工福利</a></li>
              <li><a >项目管理</a></li>  
              <li><a >ERP企业管理</a></li>           
                       
            </ul>
          </div>            
          </el-col>
          <el-col :span="5"><div class="grid-content bg-purple-light">
            <ul>
              <li class='title'>产品与服务</li>
              <li><a >OA办公系统</a></li>
              <li><a >企业文档PC版</a></li>
              <li><a >招聘求职App</a></li>
              <li><a >移动办公</a></li>
              <li><a >小赢笔记</a></li>           
            </ul>
            </div></el-col>
          <el-col :span="4"><div class="grid-content bg-purple">
            <ul>
              <li class='title'>关注</li>
              <li><a >CEO博客</a></li>
              <li><a >媒体报道</a></li>
              <li><a >新闻中心</a></li>
              <li><a >最新资讯</a></li>
              <li><a >最新活动</a></li>           
            </ul>
            </div>
          </el-col>
          <el-col :span="5"><div class="grid-content bg-purple-light">
            <ul>
              <li class='title'>关于我们</li>
              <li><a >公司介绍</a></li>
              <li><a >齐集大事记</a></li>
              <li><a >团队介绍</a></li>
              <li><a >加入我们</a></li>
                 
            </ul>
            </div></el-col>
          <el-col :span="5"><div class="grid-content bg-purple">
            <ul>
              <li class='title'>联系方式</li>
              <li><a >客服热线：13819480714</a></li>
              <li><a >周一至周五：09：00-18：00</a></li>
                        
            </ul>
            </div></el-col>
          
        </el-row>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'App',
  data:function(){
      return{
        isHome:true,
      }
  },
  

}

</script>

<style lang="less">
*{
  margin: 0;
  padding: 0;
  font-family:"微软雅黑"
}
[v-cloak]{
            display: none;
        }
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /* margin-top: 60px; */
  margin: 0;
}
header{
  height: 80px;
  /* width: 100%; */
}
.header-nav{
  width: 1180px;
  height: 100%;
  line-height: 80px; 
  margin:0 auto;
  
}
.header-nav .left{
  width: 220px;
  height: 100%;
  float: left;
  background: url(assets/Home/logo.png)no-repeat center;
}
.header-nav .left_1{
  width: 220px;
  height: 100%;
  float: left;
  background: url(assets/Home/logo_2.png)no-repeat center;
}
.header-nav .right{
  width: 600px;
  height: 100%;
  float: right;
}
.header-nav .right ul{
  margin: 0;
  padding: 0;
  list-style: none;
}
.header-nav .right ul li{
 margin: 0 18px;
  float: left;
}
 .nav a{
  text-decoration:none;
  color: #fff;
  font-weight: bold;
}
.NotHome .nav a{
  color: #333;
}
.header-nav .nav  .router-link-exact-active,.header-nav .nav .router-link-active{
  color:#f99740;
}

footer{
    height: 300px;
    width: 100%;
    background: #2d2f2e;
}
.mainFooter{
  width: 1180px;
  // height: 100%;
  margin: 0 auto;
  padding-top: 45px;
  .grid-content{
      ul{
        list-style: none;
        margin: 0;
        padding:0;
        li{
          display: block;
          margin: 10px;
        }
        .title{
          color: #fff;
        }
        a{
          text-decoration: none;
          color: #666;
          font-size: 14px;
        }
      }
  }
}



.amap-wrapper {
  width: 414px;
    height: 414px;
    float: left;
}
</style>
