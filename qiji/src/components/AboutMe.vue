<template>
  <div class="aboutus">
      <div class="aboutus_banner"></div>
      <div class="nav">
        <ul>
           <li class="nav nav_act"> <router-link to="/AboutMe/?num=2">关于齐集</router-link></li>
           <li class="nav "> <router-link to="/AboutMe/NewsContent?num=2">新闻中心</router-link></li>
           <li class="nav "> <router-link to="/AboutMe/AddMe?num=2">加入齐集</router-link></li>
           <li class="nav "> <router-link to="/AboutMe/LinkMe?num=2">联系方式</router-link></li>           
         </ul>
      </div>
      <div class="shadow"></div>
<div>
   <router-view/>
</div>
         
  </div>
</template>

<script>
export default {
  name: 'AboutMe',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less">
.aboutus{
  .aboutus_banner{
    height: 400px;
    width: 100%;
    background: url(../assets/news/aboutus_banner.png)no-repeat center;
  }
  .nav{
    height: 70px;
    position: relative;
    ul{
      list-style-type: none;
      // padding: 0;
      width: 1180px;
      height: 70px;
      background: #fff;
      margin: 0 auto;
      li{
        // display: inline-block;
        float: left;
        line-height: 70px;
        width: 125px;
        // margin-right: 50px;
        font-size: 18px;
       
        a{
           color: #333;font-weight: bold;
        }
        
      }
    
      .router-link-active{
        color: #333;
        
      }  
       .router-link-active.router-link-exact-active{
        color: #f99740;
        border-bottom:3px solid #f99740;
        padding-bottom: 25px;
      }
      
      
    }
  
  
  }
.shadow{
   height: 4px;
    width: 100%;
    background: #e6e6e6;
    -webkit-box-shadow: 0 10px 10px #e6e6e6;
    box-shadow: 0 4px 10px #e6e6e6;
    /* position: absolute; */
  }



}

</style>
